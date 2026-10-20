# Feed post · 4 5 — design reference

This is a design mockup created in a visual design tool, exported as a
standalone page. Treat it as a REFERENCE MOCKUP, not production code:
the markup and inline styles carry the design's precise values — colors,
font sizes, spacing, radii, shadows, layout — which an implementation
should replicate faithfully in its own components and styling system
rather than copy wholesale.

## Contents

- `Main.dc.html` — the artboard (a Design Component: an `<x-dc>`
  template + a small logic class). The values to replicate live in its
  inline `style="…"` attributes and the `<helmet><style>` block.
- `Email-invite.html` — a responsive, table-based email invitation for the
  exhibition, using inline styles and email-safe font fallbacks.
- `Email-invite.txt` — a plain-text version with a suggested subject line.
- `assets/` — files uploaded to the design (images, fonts, media)
- `support.js`, `vendor/react*.js` — the runtime that renders the
  component in a browser; not part of the design.

## Uploaded files

Images, fonts and media uploaded to the design are written once each under
`assets/` — this export includes the image and local Calder Dark and Calder
Grit Shadow webfonts. The exported page refers to them there. A reference a script puts together
while the page runs (for example `"/_blob/" + id`) is not rewritten and does
not load from this folder.

## Sending the email invite

Before sending:

1. Preview `Email-invite.html` in a browser.
2. Upload the artwork image from `assets/` to your email platform or another
   public HTTPS location, then replace the image's relative `src` in the HTML
   with that hosted image URL. Email clients cannot load local files.
3. Replace the postal address and unsubscribe-link placeholders in both
   versions. Use your email platform's own unsubscribe merge tag/link.
4. Use the subject from `Email-invite.txt`; send the HTML version with the
   plain-text version as the alternative body when your platform supports it.

The HTML uses system font fallbacks because email clients generally cannot
reliably load custom fonts.

## Viewing

Serve the folder (e.g. `python3 -m http.server`) and open `Main.dc.html`;
some browsers block the scripts over file://.
