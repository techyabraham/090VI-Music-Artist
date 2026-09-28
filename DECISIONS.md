# Decisions and deviations

- The repository began with owner assets only. A temporary dependency-free page was superseded by the requested Next.js App Router static-export implementation after the allowed dependencies were installed.
- Used the exact seed catalogue in the build brief and marked every release unverified. Latest release is computed by date, with confirmation pending.
- Linked and embedded the owner-supplied story PDF; linked the supplied bio, press-photo archive, logo archive, and logo file. No biography/story prose was paraphrased without review.
- Used only destinations present in `public/streaming/urls.txt`. Their validity/ownership remains unverified; the report explicitly flags the Audiomack destination.
- Used local system sans-serif fonts because no branded font files were supplied. This avoids a render-blocking remote font request; visual typography is less distinctive than the design brief asks for.
- Selected Canvas2D rather than WebGL for the frequency display. It is code-split and loaded only after play is requested, reads only the same-origin preview, caps its active animation at 30fps, and idles with reduced motion or a hidden tab.
- The hero video is click-to-load through the Visuals dialog. The hero image paints first to keep the 1.86MB video off the initial mobile request.
- Effects removed or deferred: intro/loading curtain, custom cursor, page transition curtain, scroll-scrubbed artwork mask, parallax, video hover previews, magnetic buttons, and broad heading reveals. Native scroll and a paused-on-hover footer ticker keep motion restrained and non-blocking.
- Disabled Shop and Vault remain designed, noindex pages; no unsupported store, account, exclusivity, or security claims are made.
- With no approved booking address, the booking form shows a clear configuration note and official supplied links; it does not collect or send the entered details. Newsletter collection is absent until an endpoint is configured.

## Change Order 01 decisions

- Menu panel sits at `--z-overlay`; the fixed header remains visible above it at `--z-modal`, while the background header controls are inert and the panel’s own close button remains available. All new stacking uses named tokens.
- Motion resolution is explicit session override, then system preference, then full motion. The footer toggle is the session override escape hatch; low-resource/data-saver devices receive a static hero rather than automatic movement.
- Hero slide order is video with `hero.jpg` poster, `hero2.jpg`, then `hero.jpg`; the last slide intentionally reuses the poster. The homepage Story teaser uses `portrait.jpg`; the Story page chapter break uses a supplied gallery performance photo so the hero image stays confined to the slideshow/poster.
- The supplied transparent gold wordmark is used as supplied. Icons use a dark background and preserve the original artwork; no recoloring or cropping is applied.
- Retained the existing authored website Story narrative and its portrait-led presentation. The source PDF remains a separate press resource and is not embedded.
- `NEXT_PUBLIC_SITE_URL` overrides the Vercel production-domain fallback; localhost remains a development fallback and production warns if neither is set.
