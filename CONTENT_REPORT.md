# Content report

## Supplied and used

- Artist visual assets: `source-assets/images/artist/hero.jpg`, `portrait.jpg`.
- Release art: `anike.jpg`, `no-go-kill-yourself.jpg`.
- Gallery: eight images and owner-provided captions in `captions.txt`.
- Video: `public/video/hero.mp4`.
- Audio: `public/audio/previews/Anike.mp3` (used as a preview; MP3 frame inspection measures about 21.1 seconds, shorter than the 45–60 second target; rights need owner confirmation).
- Story and EPK: `public/press/Story Copy.pdf`, `bio.pdf`, `090vi-logo.png`, `press-photos.zip`, `logos.zip`. The `/story/` route now presents an editorial narrative adapted from the supplied story copy, with a release timeline drawn from the typed catalogue. The original PDFs remain in the press room and are not embedded in the story page.
- Tagline: `Beyond the obvious`.
- Supplied links: Audiomack, YouTube, Boomplay, Apple Music, Amazon Music, and Linktree from `public/streaming/urls.txt`.

## Unverified / owner confirmation needed

- The six catalogue titles and years are the master brief's research seed list; they are labeled unconfirmed on the site. No release dates beyond years are asserted in the catalogue.
- Confirm the exact catalogue and latest release, including whether ANIKE (2025) is still the latest.
- Confirm each supplied streaming/social URL is official and current. Audiomack was specifically noted as unconfirmed by the master brief's provenance rules; it should not be treated as verified until confirmed.
- Confirm the artist bio/story PDF wording, gallery captions, and image usage rights. The web story is an editorial adaptation of the supplied copy; it avoids the H.FOD claim until that project and its details are confirmed.
- Confirm the production domain, booking/management/press contact email, and whether a newsletter provider should be connected.
- Confirm whether H.FOD / Head Full Of Dreams was an official project. It is not shown.
- Confirm preview rights and whether a longer approved clip should replace the supplied 21.1 second `Anike.mp3`.

## Missing / not connected

- No booking form email target, newsletter provider, merch storefront, event listings, captions/subtitles, or additional track previews were supplied. No fake submission success state is shown.
- No synthetic lyrics, credits, descriptions, event details, biography, or release URLs were added.

## Change Order 01 additions

- Added `public/images/logo.png` as the supplied 090VI wordmark and `public/images/artist/hero2.jpg` as a second still. Both were untracked owner-provided inputs at the start of this change. `public/video/hero.mp4` is 1,865,022 bytes, below the 2.5 MB limit. `ffmpeg`/`ffprobe` were not available, so codec, dimensions, duration, frame rate, and audio-track presence are **not measured**.
- Placeholder requiring owner copy: “The artist’s supplied story copy.” in `app/page.tsx` (homepage Story teaser). Per the brief, it is reported rather than rewritten. The `/story/` page itself is designed editorial HTML, not an embedded PDF.
- Other temporary/unconfigured states include Shop and Vault “Coming soon” pages while their feature flags are off, no announced live dates, and booking/contact/newsletter setup notes. These are explicit feature/configuration states, not fake completed integrations.
- The reported raw `/audio/previews/Anike.mp3` URL is not rendered as link text in `components/Player.tsx`; no fix was needed.
- Production metadata needs `NEXT_PUBLIC_SITE_URL` set in Vercel. Without it or Vercel’s production project host value, build output warns and uses localhost.
- Deployed-site direct inspection, Windows OS `prefers-reduced-motion` value, and video stream metadata remain unverified. The final `npm run check` passed. Final post-change Playwright/axe/screenshot and Lighthouse verification could not run because the matching Chromium download timed out; see `PROGRESS.md`.
