// One-off asset generation. Output is committed, so the site never needs this at runtime.
//   npm run assets
// Produces:
//   assets/img/hassaan.webp   – downscaled portrait (DOM fallback + source for the stroke sampler)
//   assets/img/earth.png      – 1024x512 equirectangular mask: R = land, G = client countries, B = Pakistan
//   assets/img/favicon-*.png  – icons
//   assets/img/og.jpg         – social card
// The client countries are the page's own list (data-country on the #clients rows), so run this after changing it.
import { createCanvas, loadImage, GlobalFonts } from '@napi-rs/canvas';
import { geoEquirectangular, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = (p) => resolve(root, 'assets/img', p);
const require = createRequire(import.meta.url);
mkdirSync(resolve(root, 'assets/img'), { recursive: true });
// sorted by name: the mask stores each country as (index + 1) * 20, and src/gl/forms/globe.js sorts the same way
const clients = [...new Set([...readFileSync(resolve(root, 'index.html'), 'utf8').matchAll(/data-country="([^"]+)"/g)].map((m) => m[1]))].sort();
if (!clients.length || clients.length > 12) throw new Error(`need 1–12 client countries in index.html, found ${clients.length}`);

// ---------- portrait ----------
{
  const img = await loadImage(resolve(root, 'scripts/source/avatar.png'));
  const w = 900;
  const h = Math.round((img.height / img.width) * w);
  const c = createCanvas(w, h);
  const g = c.getContext('2d');
  g.imageSmoothingQuality = 'high';
  g.drawImage(img, 0, 0, w, h);
  writeFileSync(out('hassaan.webp'), c.toBuffer("image/webp", 76));
  console.log('hassaan.webp', w, h);

  for (const s of [32, 180]) {
    const f = createCanvas(s, s);
    const fg = f.getContext('2d');
    fg.fillStyle = '#05060a';
    fg.fillRect(0, 0, s, s);
    fg.imageSmoothingQuality = 'high';
    // crop to the face + hair, keep it square
    const sx = img.width * 0.2, sy = img.height * 0.04, sw = img.width * 0.6;
    fg.drawImage(img, sx, sy, sw, sw, 0, 0, s, s);
    writeFileSync(out(`favicon-${s}.png`), f.toBuffer('image/png'));
  }
}

// ---------- social card: the same light-drawn portrait the site opens with ----------
{
  // the sampler is browser code; give it the canvas it expects
  globalThis.OffscreenCanvas = class { constructor(w, h) { return createCanvas(w, h); } };
  const { portraitForm } = await import('../src/gl/forms/portrait.js');
  GlobalFonts.registerFromPath(resolve(root, 'assets/fonts/unbounded.woff2'), 'Unbounded');
  GlobalFonts.registerFromPath(resolve(root, 'assets/fonts/martian-mono.woff2'), 'Martian Mono');
  const img = await loadImage(resolve(root, 'assets/img/hassaan.webp'));
  const N = 46000;
  const f = portraitForm(img, N, { height: 6.6, warm: 0.55, seed: 7 });
  const W = 1200, H = 630, S = 88; // px per world unit
  const stops = [[0, [92, 122, 255]], [0.35, [184, 204, 255]], [0.6, [255, 243, 214]], [0.85, [255, 210, 63]], [1, [255, 163, 26]]];
  const ramp = (h) => {
    h = Math.max(0, Math.min(1, h));
    for (let i = 1; i < stops.length; i++) if (h <= stops[i][0]) { const a = stops[i - 1], b = stops[i], t = (h - a[0]) / (b[0] - a[0]); return a[1].map((v, k) => v + (b[1][k] - v) * t); }
    return stops[4][1];
  };
  const layer = createCanvas(W, H);
  const g = layer.getContext('2d');
  g.globalCompositeOperation = 'lighter';
  g.lineCap = 'round';
  const cx = 905, cy = 318;
  for (let i = 0; i < N; i++) {
    const x = cx + f.pos[i * 4] * S, y = cy - f.pos[i * 4 + 1] * S;
    const dx = f.dir[i * 4] * S, dy = -f.dir[i * 4 + 1] * S;
    const [r, gg, b] = ramp(f.dir[i * 4 + 3]);
    g.strokeStyle = `rgba(${r | 0},${gg | 0},${b | 0},${Math.min(1, 0.15 * f.pos[i * 4 + 3])})`;
    g.lineWidth = 1.2;
    g.beginPath(); g.moveTo(x - dx / 2, y - dy / 2); g.lineTo(x + dx / 2, y + dy / 2); g.stroke();
  }
  const c = createCanvas(W, H);
  const o = c.getContext('2d');
  const bg = o.createRadialGradient(900, 260, 40, 900, 300, 700);
  bg.addColorStop(0, '#101a3d'); bg.addColorStop(1, '#05060a');
  o.fillStyle = bg; o.fillRect(0, 0, W, H);
  o.globalCompositeOperation = 'lighter';
  o.filter = 'blur(16px)'; o.globalAlpha = 0.55; o.drawImage(layer, 0, 0);
  o.filter = 'none'; o.globalAlpha = 1; o.drawImage(layer, 0, 0);
  o.globalCompositeOperation = 'source-over';
  o.fillStyle = '#ece8df';
  o.font = '300 62px Unbounded';
  o.fillText('Syed', 64, 250);
  o.fillText('Muhammad', 64, 322);
  o.font = '600 62px Unbounded';
  o.fillText('Hassaan', 64, 394);
  o.fillStyle = '#ffd23f';
  o.font = '400 22px "Martian Mono"';
  o.fillText('AI engineer who ships to production —', 64, 462);
  o.fillText('not demos.', 64, 494);
  o.fillStyle = 'rgba(236,232,223,0.6)';
  o.font = '400 15px "Martian Mono"';
  o.fillText(`CLIENTS IN ${clients.length} COUNTRIES · CO-FOUNDER OF JORDY`, 64, 566);
  writeFileSync(out('og.jpg'), c.toBuffer('image/jpeg', 88));
  console.log('og.jpg', W, H);
}

// ---------- earth mask ----------
{
  const W = 1024, H = 512;
  const proj = geoEquirectangular().scale(W / (2 * Math.PI)).translate([W / 2, H / 2]);
  const land = JSON.parse(readFileSync(require.resolve('world-atlas/land-110m.json'), 'utf8'));
  const countries = JSON.parse(readFileSync(require.resolve('world-atlas/countries-110m.json'), 'utf8'));
  const all = feature(countries, countries.objects.countries).features;
  const pick = (names) => all.filter((f) => names.includes(f.properties.name));

  const layer = (features) => {
    const c = createCanvas(W, H);
    const g = c.getContext('2d');
    g.fillStyle = '#000';
    g.fillRect(0, 0, W, H);
    g.fillStyle = '#fff';
    g.beginPath();
    geoPath(proj, g)({ type: 'FeatureCollection', features });
    g.fill();
    return g.getImageData(0, 0, W, H).data;
  };

  const found = new Set(pick(clients).map((f) => f.properties.name));
  // places too small for the 110m atlas (Singapore, Hong Kong) would be under a pixel anyway: no fill, the globe still
  // gives them an arc, a pin and a label. The finer atlas only checks that the name is real.
  const fine = JSON.parse(readFileSync(require.resolve('world-atlas/countries-50m.json'), 'utf8'));
  const known = new Set(fine.objects.countries.geometries.map((g) => g.properties.name));
  const unknown = clients.filter((n) => !found.has(n) && !known.has(n));
  if (unknown.length) throw new Error('not a world-atlas country name (use its exact name): ' + unknown);

  const R = layer(feature(land, land.objects.land).features);
  // one binary layer per country, so antialiased borders can never decode as a neighbour's index
  const G = new Uint8Array(W * H);
  clients.forEach((name, k) => {
    if (!found.has(name)) return;
    const L = layer(pick([name]));
    for (let i = 0; i < W * H; i++) if (L[i * 4] > 127) G[i] = (k + 1) * 20;
  });
  const B = layer(pick(['Pakistan']));

  const c = createCanvas(W, H);
  const g = c.getContext('2d');
  const id = g.createImageData(W, H);
  for (let i = 0; i < W * H; i++) {
    id.data[i * 4] = R[i * 4];
    id.data[i * 4 + 1] = G[i];
    id.data[i * 4 + 2] = B[i * 4];
    id.data[i * 4 + 3] = 255;
  }
  g.putImageData(id, 0, 0);
  writeFileSync(out('earth.png'), c.toBuffer('image/png'));
  console.log('earth.png', W, H, 'client countries:', clients.join(', '), '| pin only:', clients.filter((n) => !found.has(n)).join(', ') || 'none');
}
