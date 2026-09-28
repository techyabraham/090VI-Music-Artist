# 090VI artist website

Next.js App Router site using local typed content and local media. `next.config.ts` exports the site as static HTML into `/out`; there are no API routes, server actions, user databases, or runtime secrets.

## Development and export

```sh
npm install
npm run dev
npm run check
npm run build
npm run serve:export
```

The production export is `out/`. Serve it with `npx serve out` or the included dependency-free `npm run serve:export` command. `/out` is also suitable for any plain static file host.

## Deploy

- **Vercel:** import the repository; use `npm run build` and the `out` directory as the static output. The host does not need a Node server at runtime. A `vercel.json` configuration can use `{"buildCommand":"npm run build","outputDirectory":"out"}`.
- **Netlify:** build command `npm run build`, publish directory `out`; `public/_headers` documents the recommended response headers.
- **Cloudflare Pages:** build command `npm run build`, output directory `out`; the same `_headers` file is supported.
- **GitHub Pages:** publish `out`. For a project subpath, set Next `basePath` before building and update the root-relative media paths. The current configuration assumes deployment at the domain root.

Set `NEXT_PUBLIC_SITE_URL` to the production origin before building so canonical metadata, sitemap, robots, and structured data use the correct domain. Without it, the default is `http://localhost:3000` and must not be used for a public deployment.

## Content updates

- **Release:** edit `data/releases.ts`, provide a stable kebab-case slug, ISO date and date precision, provenance, and owner-approved streaming links. Drop square artwork into `source-assets/images/releases/<slug>.jpg`, update the asset reference, then run `npm run validate:content` and `npm run build`.
- **Gallery:** add originals to `source-assets/images/gallery`, update the owner-approved captions and intrinsic pixel dimensions in `data/gallery.ts`, then build. The image pipeline emits AVIF and WebP variants.
- **Artist images:** replace files under `source-assets/images/artist` and update `data/artist.ts` dimensions and alt text. The supplied `public/images/artist/portrait1.png` is the current wide portrait; `npm run prepare:assets` converts it to a quality-90 `portrait1.jpg` and creates responsive AVIF/WebP files. Keep the PNG as the source, since the build refreshes generated images from its modification time. Its 1443 × 1090 frame is preserved in the homepage and Story layouts.
- **Audio/video:** use `public/audio/previews` and `public/video`; confirm usage rights, clip length, captions, poster, and title before adding records.
- **Story and EPK:** update the owner-supplied source files under `public/press`. The Story page presents the adapted narrative as editorial website content; the original story and bio PDFs remain available in the press room.
- Run `npm run validate:content -- --strict` before deployment. It checks slugs, dates, URLs, and referenced local media and writes `CONTENT_REPORT.generated.md`.

## Contact and newsletter

- If a booking address is approved, set `NEXT_PUBLIC_BOOKING_EMAIL` at build time. The form builds a `mailto:` message and reports “Opens your email app”; the website does not send it.
- If a newsletter provider endpoint is approved, set `NEXT_PUBLIC_FORM_ENDPOINT`. The browser posts the visitor’s signup to that endpoint and reports the HTTP result. With no endpoint configured, no email field appears and the page states that signup is not connected.
- Never put private keys or credentials in `NEXT_PUBLIC_*` values.

## Assets and rights

Owner-supplied originals are in `source-assets/`; public media and EPK files are in `public/`. `npm run prepare:assets` builds AVIF/WebP responsive variants and icon sizes. The supplied ANIKE MP3 is about 21 seconds, below the brief’s 45–60 second preview target; replace it only with a rights-cleared owner-approved clip. Confirm rights for every photo, track, video, logo, and PDF before publishing.

## Editing the hero

- Reorder, remove, or add carousel entries in `data/hero-slides.ts`. Keep each image path, descriptive alt text, and `object-position` focal point together. The first entry is the initial poster; image slides hold for 6.5 seconds and the video slide advances on `ended` or its 10-second cap.
- Replace `public/video/hero.mp4` with an approved, muted-ready MP4 no larger than 2.5 MB. The muted video starts automatically when visible and is skipped for reduced motion, data saver, and 2G connections. If unavailable, the poster and image slides remain usable.
- Replace the original `public/images/logo.png` without changing its colors or aspect ratio, then run `npm run build:brand` to regenerate responsive logo variants, icons, and the social image.
- The footer Motion control reports system reduced motion or the session override. Its setting takes precedence for the current tab session; system preference applies when no override exists. An owner can enable animation for evaluation from the footer even when Windows reduce motion is on.
- Set `NEXT_PUBLIC_SITE_URL=https://090vi.vercel.app` (or the confirmed production origin) in Vercel → Project → Settings → Environment Variables before building.

## Features and later CMS migration

Feature flags live in `data/site.config.ts`. Merch is enabled at `/shop/`; Vault remains disabled and noindex. Merch uses an enquiry flow, with prices, sizes and delivery confirmed directly by the team. There is no online payment or account access. Releases, videos, events, gallery, links, artist, and press content live under `data/`; UI pages consume them through `lib/content.ts`. A future CMS can replace these selectors while retaining the page components. No CMS adapter or backend is included.

## Build limitations

The site uses system sans-serif fonts to avoid remote font requests; branded fonts from the design brief were not supplied. Axe/Playwright runs and the responsive screenshot matrix passed using installed system Chrome. Lighthouse page audits reach their report phase but this Windows runner fails while Chrome Launcher removes its temporary profile (`EPERM`), so the configured Lighthouse thresholds are not reported as passing; see `PROGRESS.md`. Production origin and newsletter configuration still require owner setup; booking contacts are now supplied in data/contact.ts.
# 090VI-Music-Artist



## Streaming, merch, reactions and booking

- Streaming URLs live in `data/links.ts`; song-specific links live on the appropriate entry in `data/releases.ts`. Artist-profile links are displayed separately from release links. Locally hosted service marks and their source/license information are in `public/images/platforms/`.
- Merch entries live in `data/merch.ts`. Originals are in `public/merches/Hoodies/` and `public/merches/Tees/`; `npm run prepare:assets` creates compressed WebP display images. Front/back controls are available on the homepage and collection page. Product enquiries preselect the relevant item at `/book/`.
- Six owner-supplied Instagram reels live in `data/reactions.ts`. Home and Visuals share this collection. Each opens a native modal with a click-to-load Instagram player and direct original-post link. Creator and song fields are optional until the original post metadata is verified. External playback depends on Instagram embed availability or login; no third-party request is made until a visitor opens a reel.
- Public booking defaults in `data/contact.ts` are +1 240 714 8161 and 090vi@gmail.com, supplied and confirmed by the owner. To override them, copy `.env.example` to `.env.local`, set `NEXT_PUBLIC_BOOKING_WHATSAPP` (international country code plus number) and `NEXT_PUBLIC_BOOKING_EMAIL`, then rebuild. Set the same values in your hosting environment. These are public contact details; never put credentials in these variables.
- Booking collects event or merch information, validates required fields, and opens a review. WhatsApp and email links contain an encoded draft; visitors send it in their chosen app. No reservation, payment or automatic message is claimed. If a contact channel is absent, it stays unavailable while Copy enquiry and the supplied official links remain usable.
- The hero cycles automatically with a visible Pause button. Hovering does not stop it. Reduced-motion visitors receive a still by default and can explicitly choose Play. It pauses while off screen or in a hidden tab. Text now uses local dark backplates so the photograph remains bright.
- To use installed Chrome for browser checks in PowerShell: `$env:PLAYWRIGHT_CHROMIUM_EXECUTABLE='C:\Program Files\Google\Chrome\Application\chrome.exe'`, then `npx playwright test tests/e2e/experience.spec.ts tests/e2e/menu.spec.ts --workers=1`.
