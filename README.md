# Texas Tires website concept

Spec redesign of texastires9.com, built by CALEBrated Virtual Services to pitch Texas Tires (Haltom City, TX).

- Live: https://texas-tires-concept.vercel.app
- Pitch and offer: https://texas-tires-concept.vercel.app/pitch
- Outreach drafts: `docs/outreach.md` (not deployed)

Static HTML, CSS and JS, no build step. Bump the `?v=` tags on CSS and JS in `index.html` and `pitch.html` on every change.

Deploy (Vercel project `texas-tires-concept`, scope `wovieprollo42-6481s-projects`):

    npx vercel deploy --prod --yes --scope wovieprollo42-6481s-projects

The whole site is `noindex` and shows a concept bar, because it uses the Texas Tires brand. Five photos are stand-ins (street-wheel, dirt-trail, mud-tire, repair-bay, wheel-detail) until the shop's own photos are in.
