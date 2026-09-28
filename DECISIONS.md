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
