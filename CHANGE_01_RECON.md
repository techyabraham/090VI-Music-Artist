# Change Order 01 — Recon

Read-only source and asset review before implementation (2026-09-28).

## Workspace and assets

- Next.js App Router static export (`next.config.ts`: `output: 'export'`, `trailingSlash: true`, unoptimized local images).
- Existing tracked worktree change: deletion of `public/images/090vi-logo.png`; preserve it as found. User-supplied, untracked inputs are `public/images/logo.png` and `public/images/artist/hero2.jpg`.
- `public/video/hero.mp4` exists (1,865,022 bytes; under 2.5 MB). `hero.jpg` is 1400×872; `hero2.jpg` is 1400×872; artist portrait is available. `ffmpeg`/`ffprobe` were unavailable in the shell, so video metadata/audio track were not measured.
- `package.json` currently has no GSAP dependency. `npm run prepare:assets` runs image and icon pipelines; no brand builder exists.

## Root causes and evidence

### Menu

- `components/SiteNav.tsx` toggles state correctly and already has a single Music-first link list, Escape handling, focus return, background inert, and body overflow lock.
- The overlay is rendered as `nav-overlay`, while the only full-screen panel rules in `app/globals.css` target the obsolete `.nav-panel` class. `app/overrides.css` only toggles visibility on `.nav-overlay`; it does not give it a fixed full-screen panel, so opening it does not produce the intended overlay. Existing E2E coverage checks visibility/focus but not dialog semantics, panel geometry, one-list contents, or route-close behavior.
- Repair plan: use one stateful toggle and one semantic modal dialog overlay; add explicit fixed panel styles and tokenized stacking; ensure route/current-page close, scroll restoration, focus loop, and responsive hit areas.

### Missing section motion

- No GSAP, ScrollTrigger, `useGSAP`, `data-reveal`, or shared motion-mode hook/system exists in the repository. The footer motion toggle in `components/Footer.tsx` only toggles an unused CSS class and local boolean; it does not register or control entrance animations or reflect OS motion preference.
- `app/layout.tsx` has no pre-paint motion preference resolver/provider. CSS contains only a basic reduced-motion block. Thus no section animation system is mounted, no reveals are targeted, and the footer state is not truthful to system preference.
- Repair plan: install the allow-listed GSAP packages, centralize session override/system preference resolution, add progressive reveal hooks with failsafe, and instrument homepage/inner-page/footer sections.

### Logo

- `public/images/logo.png` is present as a 1536×1024 transparent gold wordmark. Header/footer currently render literal `090VI` text; metadata points at release art; current icon pipeline uses the old public press logo.
- Repair plan: a shared image-based `Logo` component, build-generated responsive/icon/OG derivatives, metadata and structured data updates, while preserving the source artwork colors and proportions.

### Hero

- `app/page.tsx` has one static `hero.jpg` image and static copy. The same photo is reused in the homepage Story section. No carousel or video behavior exists.
- The hero MP4 is below the brief's 2.5 MB budget. `scripts/build-images.mjs` processes source-assets only, so the public-only `hero2.jpg` needs an explicit derivative path.
- Repair plan: retain the existing poster as server-rendered first paint; add a data-driven, accessible slideshow with deferred video, image fallback, pause/navigation controls and reduced-motion/resource-aware behavior. Use `portrait.jpg` in the homepage Story section.

### Additional findings

- `data/site.config.ts` falls back directly to localhost for canonical metadata; add the Vercel production-domain fallback and production warning.
- `components/Player.tsx` renders an audio source but no raw preview URL text, so the reported leak is not present in current source.
- Homepage copy contains the exact placeholder “The artist’s supplied story copy.” It will be reported, not rewritten, per brief. The dedicated Story route already contains authored editorial narrative; it remains website-native content and is not embedded as a PDF.
- Deployed `https://090vi.vercel.app` was inaccessible to the web reader; validation will use the static export. Windows reduced-motion OS value has not been measured in this recon.

## Implementation order

1. Menu repair and focused regression tests.
2. Shared motion foundation and section targets.
3. Logo integration and asset generation.
4. Slideshow, hero2 image derivatives, responsive/accessibility checks.
5. Metadata, documentation, content report, export build, screenshots and final audit.

## Final verification update (2026-09-28)

- `npm run check` passes for the completed change. The missing production URL environment variable still produces a warning and localhost canonical fallback.
- The menu's feature list omitted the enabled Music route from `data/site.config.ts`; implementation now explicitly enables it as the first menu item.
- Chromium is not installed in this environment. Playwright tests could not launch; installing the required Chromium build timed out three times from `cdn.playwright.dev`. No final axe or Lighthouse result is claimed.
