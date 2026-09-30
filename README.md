# Syed Muhammad Hassaan — portfolio

Live: <https://brxerq.github.io/app/> (GitHub Pages, served straight from the repo root of the Pages branch, `main`).

**Concept — "Long Exposure".** One substance, roughly 65,000 strokes of light, redraws itself as the subject of each
chapter, and every subject is him or his real output: his ink portrait; a hatch-engraved globe that turns from Karachi
to each client country, an arc drawing out to it as its row is read; a corridor of his selected work, where the same
strokes that drew his face sketch each live site from its own screenshot before the screenshot develops over the sketch
(hover and click it); the career as a timeline drawn in light, a trail per role up to the "now" line, the one being read
lit; the GitHub graph as a night skyline; the toolbox as the logos of his tools drawn in strokes (hover a group to light
its row); quiet starfields under the reading chapters; and back out of the pupil to the portrait. Stroke colour temperature means maturity: cobalt = sketch, white = built, yellow = shipped.
Between the portrait and the globe, the dive into the eye spells out what he builds.

## How it is put together

| | |
|---|---|
| `index.html` | **All content lives here**, as plain semantic HTML. Every role, project, site, stat and link. It is the whole site when JS is off, when the visitor prefers reduced motion, or when WebGL is unavailable. |
| `assets/site.css` | Hand-written stylesheet: static layout first, `html.gl` rules layer the sticky "stage" grid on top. |
| `src/` | ES modules, bundled by esbuild into `assets/app-*.js` + `assets/chunks/` (committed — no CI needed). |
| `src/gl/` | The world: `strokes.js` (one instanced mesh, forms live in data textures, morphing in the vertex shader), `forms/` (generators; `portrait.js` also holds `screenForm`, which sketches a screenshot), `scenes.js` (per-chapter camera + choreography), `director.js` (DOM + scroll → camera/morph), `slabs.js` (site screenshots as textured slabs that develop over their sketches), `hud.js` (labels pinned in the world: the country on the globe, the roles and years on the timeline, the tool names under their logos), `stage.js` (renderer, bloom, quality governor). |
| `src/ui/` | Navigation ruler + index, counters and reveals (GSAP inside `gsap.matchMedia()`), hero intro, pointer effects, contact form, GitHub data. |
| `scripts/` | `build.mjs`, `make-assets.mjs` (portrait, globe mask, social card), `check.mjs` (pre-publish checks). |
| `projects/`, `logos/` | Screenshots and favicons used by the page. |

The renderer reads the page rather than duplicating it: the sections say which scene they are (`data-scene`), where the
subject sits (`.stage__frame`), which countries the globe lights (`data-country`, `data-lat`, `data-lon` on the
`#clients` rows), when each role ran (`data-start`, `data-end`), which logo each tool gets (`data-icon`, a simple-icons slug) and which sites the corridor sketches (the `#work .site` screenshots and links). Change the HTML and the
3D follows. Two exceptions: adding or removing a client country changes the land mask, and adding a tool logo changes
`src/gl/forms/icons.js`, so run `npm run assets` after either (reordering does not need it).

## Working on it

```bash
npm install
npm run dev      # esbuild watch + http://localhost:5173 (unminified)
npm run build    # minified, hashed bundle; re-points index.html at it and versions site.css
npm run check    # paths, file references, sizes;  npm run check -- --net  also pings every external link
npm run assets   # regenerate assets/img/* (portrait webp, earth mask, favicons, social card)
```

Publish: `npm run build`, then commit `index.html` and `assets/` and push. There is no workflow to fail.
Every URL is relative because the site lives under `/app/`.

`?tier=high|medium|low` forces a quality tier while testing; `?debug` logs how long each stroke form takes to generate.

## Fallbacks and accessibility

* **Reduced motion / "Motion: calm" toggle / save-data / no WebGL2 / shader failure**: the static page, complete, no
  three.js download (the GL code is a lazy chunk, only hinted to the browser for visitors who will get it). The toggle in
  the header persists in `localStorage` (`smh:calm`).
* **Quality governor**: starts from device hints (cores, memory, pointer type), drops high → medium → low if frames stay
  slow (bloom goes first, then stroke count and resolution). It never climbs back, so it cannot oscillate.
* On phones the subject stays pinned in the top half and the copy arrives as sheets that slide up over it.
* Canvas is `aria-hidden`; all text is real DOM. Skip link, focus rings, `<dialog>` index, ruler nav, keyboard-reachable
  everything, no scroll-jacking (native scroll, damped in the renderer only). axe-core: 0 violations.
* The contact form posts to FormSubmit (formsubmit.co), which emails the note to the inbox; if that fails the visitor is shown the address.
* The GitHub graph comes from a public third-party endpoint; if it fails the section hides itself.

## Credits

Three.js, GSAP (ScrollTrigger, SplitText). Tool logos: simple-icons (CC0; the logos stay their owners' trademarks). Fonts (SIL OFL): Unbounded, Geist, Martian Mono. Land mask from Natural Earth
via `world-atlas`. Contribution data from `github-contributions-api.jogruber.de`.
