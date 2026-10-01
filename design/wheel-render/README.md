# Wheel and sidewall renders

`wheel-render.html` draws the hero wheel layers (body, rotor, caliper) and the size-finder sidewall background as SVG with lighting filters. `render.js` screenshots each one with a transparent background and writes the WebP files in `assets/img/wheel/`.

The layers are separate on purpose: the rotor and body rotate on scroll, the caliper and the light overlays (`.w-light` in styles.css) stay still, so the lighting doesn't spin with the wheel. The sidewall words on the hero wheel and the size in the finder are live SVG text in `index.html`, not part of these images.

After re-rendering, bump the `?v=` tag on styles.css and main.js only if those changed; image URLs are cached for one day.
