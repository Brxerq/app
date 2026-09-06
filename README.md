# Portfolio — deploy

Static build of my portfolio, served by GitHub Pages at
<https://brxerq.github.io/app/> straight from this branch root.

Everything lives in `index.html`: all JavaScript and CSS are inlined, so there
is no build step, no Actions workflow, and nothing to fail on deploy. Only the
images are separate files.

## Source

The Vite + React + GSAP source lives in
[Brxerq/hassaan-portfolio](https://github.com/Brxerq/hassaan-portfolio).

To publish a change:

```bash
# in the source repo
npm run build:single
```

then copy `dist/` over this repo's root and push.
