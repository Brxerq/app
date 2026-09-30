// Portrait → strokes. The ink drawing is re-sampled as short light strokes that follow the
// drawing's own structure (hair strands, hatching), so it reads as the same sketch drawn in light.
import { mulberry32, halton, searchCdf, clamp } from '../util.js';

const W = 384; // analysis resolution (width)

function boxBlur(src, w, h, r) {
  // separable running-sum blur, edge-clamped
  const tmp = new Float32Array(w * h);
  const out = new Float32Array(w * h);
  const d = 2 * r + 1;
  for (let y = 0; y < h; y++) {
    let acc = 0;
    const row = y * w;
    for (let x = -r; x <= r; x++) acc += src[row + clamp(x, 0, w - 1)];
    for (let x = 0; x < w; x++) {
      tmp[row + x] = acc / d;
      acc += src[row + clamp(x + r + 1, 0, w - 1)] - src[row + clamp(x - r, 0, w - 1)];
    }
  }
  for (let x = 0; x < w; x++) {
    let acc = 0;
    for (let y = -r; y <= r; y++) acc += tmp[clamp(y, 0, h - 1) * w + x];
    for (let y = 0; y < h; y++) {
      out[y * w + x] = acc / d;
      acc += tmp[clamp(y + r + 1, 0, h - 1) * w + x] - tmp[clamp(y - r, 0, h - 1) * w + x];
    }
  }
  return out;
}

// row/column CDFs of a density map, for sampling pixels in proportion to it
function cdfOf(density, w, h) {
  const rowCdf = new Float32Array(h);
  const colCdf = new Float32Array(w * h);
  let racc = 0;
  for (let y = 0; y < h; y++) {
    let cacc = 0;
    for (let x = 0; x < w; x++) {
      cacc += density[y * w + x];
      colCdf[y * w + x] = cacc;
    }
    if (cacc > 0) for (let x = 0; x < w; x++) colCdf[y * w + x] /= cacc;
    racc += cacc;
    rowCdf[y] = racc;
  }
  for (let y = 0; y < h; y++) rowCdf[y] /= racc || 1;
  return { rowCdf, colCdf };
}

// smoothed structure tensor of an image → per-pixel stroke orientation along the drawn lines
function tensor(soft, w, h, r) {
  const n = w * h;
  const jxx = new Float32Array(n), jxy = new Float32Array(n), jyy = new Float32Array(n), mag = new Float32Array(n);
  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      const i = y * w + x;
      const gx = soft[i + 1] - soft[i - 1] + 0.5 * (soft[i - w + 1] - soft[i - w - 1] + soft[i + w + 1] - soft[i + w - 1]);
      const gy = soft[i + w] - soft[i - w] + 0.5 * (soft[i + w - 1] - soft[i - w - 1] + soft[i + w + 1] - soft[i - w + 1]);
      jxx[i] = gx * gx; jxy[i] = gx * gy; jyy[i] = gy * gy;
      mag[i] = Math.sqrt(gx * gx + gy * gy);
    }
  }
  return { bxx: boxBlur(jxx, w, h, r), bxy: boxBlur(jxy, w, h, r), byy: boxBlur(jyy, w, h, r), mag };
}

// stroke angle at pixel idx: along the structure where it is clear, `fallback` where it is not
function orient({ bxx, bxy, byy }, idx, fallback, rand) {
  const c2 = bxx[idx] - byy[idx], s2 = 2 * bxy[idx];
  const coh = clamp(Math.hypot(c2, s2) / (bxx[idx] + byy[idx] + 1e-6), 0, 1);
  const ang = 0.5 * Math.atan2(s2, c2) + Math.PI / 2;
  const k = clamp(coh * 1.6, 0, 1);
  const cx = Math.cos(2 * ang) * k + Math.cos(2 * fallback) * (1 - k);
  const cy = Math.sin(2 * ang) * k + Math.sin(2 * fallback) * (1 - k);
  return { ang: 0.5 * Math.atan2(cy, cx) + (rand() - 0.5) * 0.35, k };
}

/**
 * A screenshot → a wireframe sketch in strokes that trace the page's edges. Edges of either polarity count, so dark and
 * light UIs both work. The image is cover-fitted into a w×h frame exactly like the slab shader does, so the sketch
 * lines up with the screenshot that later develops over it. Strongest edges come first (ties keep their halton order):
 * low quality tiers only draw the first part of a form, and that part should hold the lines that carry the page.
 * @param {CanvasImageSource & {width:number,height:number}} img
 * @param {number} N number of strokes
 * @param {{w:number, h:number, seed?:number}} o world size of the frame
 */
export function screenForm(img, N, o) {
  const rand = mulberry32(o.seed ?? 5);
  const iw = img.naturalWidth || img.width, ih = img.naturalHeight || img.height;
  const fa = o.w / o.h;
  let sx = 0, sy = 0, sw = iw, sh = ih;
  if (iw / ih > fa) { sw = ih * fa; sx = (iw - sw) / 2; } else { sh = iw / fa; sy = (ih - sh) / 2; }
  const A = 320, B = Math.round(A / fa); // analysis resolution
  const cv = typeof OffscreenCanvas !== 'undefined' ? new OffscreenCanvas(A, B) : Object.assign(document.createElement('canvas'), { width: A, height: B });
  const g = cv.getContext('2d', { willReadFrequently: true });
  g.drawImage(img, sx, sy, sw, sh, 0, 0, A, B);
  const px = g.getImageData(0, 0, A, B).data;
  const lum = new Float32Array(A * B);
  for (let i = 0; i < A * B; i++) lum[i] = (0.2126 * px[i * 4] + 0.7152 * px[i * 4 + 1] + 0.0722 * px[i * 4 + 2]) / 255;

  const T = tensor(boxBlur(lum, A, B, 1), A, B, 2);
  // weak edges (background grids, soft gradients) would read as noise: only clear edges draw
  const EDGE = 0.1;
  const dens = new Float32Array(A * B);
  let top = 0;
  for (let i = 0; i < A * B; i++) {
    dens[i] = Math.max(0, T.mag[i] - EDGE);
    top = Math.max(top, T.mag[i]);
  }
  const { rowCdf, colCdf } = cdfOf(dens, A, B);

  const pos = new Float32Array(N * 4), dir = new Float32Array(N * 4);
  const s = o.w / A; // world units per analysis pixel
  for (let i = 0; i < N; i++) {
    const row = searchCdf(rowCdf, halton(i, 2));
    const col = searchCdf(colCdf, halton(i, 3), row * A, row * A + A - 1) - row * A;
    const idx = row * A + clamp(col, 0, A - 1);
    const { ang, k } = orient(T, idx, 0, rand); // no structure → horizontal, so lines of text read as lines
    const strength = clamp(T.mag[idx] / (top * 0.5 + 1e-6), 0, 1);
    const len = s * (1.6 + 2.2 * k * (0.6 + 0.4 * rand()));
    pos[i * 4] = ((col + rand()) / A - 0.5) * o.w;
    pos[i * 4 + 1] = (0.5 - (row + rand()) / B) * o.h;
    pos[i * 4 + 2] = (rand() - 0.5) * 0.03;
    pos[i * 4 + 3] = 0.45 + 0.7 * strength;
    dir[i * 4] = Math.cos(ang) * len;
    dir[i * 4 + 1] = -Math.sin(ang) * len; // image y points down
    dir[i * 4 + 3] = 0.1 + 0.28 * strength + (rand() - 0.5) * 0.06; // cobalt, edging towards ice on the strongest lines
  }
  const order = [...Array(N).keys()].sort((a, b) => pos[b * 4 + 3] - pos[a * 4 + 3]);
  const P = new Float32Array(N * 4), D = new Float32Array(N * 4);
  order.forEach((from, i) => {
    P.set(pos.subarray(from * 4, from * 4 + 4), i * 4);
    D.set(dir.subarray(from * 4, from * 4 + 4), i * 4);
  });
  return { pos: P, dir: D };
}

/**
 * @param {CanvasImageSource & {width:number,height:number}} img
 * @param {number} N number of strokes
 * @param {{height?:number, warm?:number, seed?:number}} o  world height of the portrait, base heat
 */
export function portraitForm(img, N, o = {}) {
  const worldH = o.height ?? 6.6;
  const warm = o.warm ?? 0.5;
  const rand = mulberry32(o.seed ?? 7);

  const iw = img.naturalWidth || img.width;
  const ih = img.naturalHeight || img.height;
  const H = Math.round((W * ih) / iw);
  const cv = typeof OffscreenCanvas !== 'undefined' ? new OffscreenCanvas(W, H) : Object.assign(document.createElement('canvas'), { width: W, height: H });
  const g = cv.getContext('2d', { willReadFrequently: true });
  g.drawImage(img, 0, 0, W, H);
  const px = g.getImageData(0, 0, W, H).data;

  const n = W * H;
  const alpha = new Float32Array(n);
  const lum = new Float32Array(n);
  const ink = new Float32Array(n);
  const accent = new Int8Array(n); // 0 none, 1 warm scribble, -1 blue scribble
  for (let i = 0; i < n; i++) {
    const r = px[i * 4] / 255, gg = px[i * 4 + 1] / 255, b = px[i * 4 + 2] / 255;
    const a = px[i * 4 + 3] / 255;
    const mx = Math.max(r, gg, b), mn = Math.min(r, gg, b);
    const dd = mx - mn;
    const sat = mx > 0 ? dd / mx : 0;
    let hue = 0;
    if (dd > 0) {
      hue = mx === r ? ((gg - b) / dd) % 6 : mx === gg ? (b - r) / dd + 2 : (r - gg) / dd + 4;
      hue *= 60;
      if (hue < 0) hue += 360;
    }
    const L = 0.2126 * r + 0.7152 * gg + 0.0722 * b;
    alpha[i] = a;
    lum[i] = L;
    if (a > 0.35 && mx > 0.3 && ((sat > 0.68 && hue > 30 && hue < 66) || (sat > 0.35 && hue > 195 && hue < 250))) {
      accent[i] = hue > 150 && hue < 300 ? -1 : 1;
      ink[i] = a; // scribbles are line art: full strength
    } else {
      ink[i] = a * (1 - L);
    }
  }

  // detail = how much darker than the neighbourhood (lines and edges beat flat black areas)
  const mean = boxBlur(ink, W, H, 7);
  const soft = boxBlur(ink, W, H, 2);

  // structure tensor → orientation field
  const T = tensor(soft, W, H, 4);

  // two populations: cobalt line-art that traces the ink, and warm light that fills what the drawing leaves lit
  const dInk = new Float32Array(n), dLit = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const a = alpha[i];
    if (a < 0.05) continue;
    const detail = Math.max(0, ink[i] - 0.62 * mean[i]);
    const yy = Math.floor(i / W) / H;
    const fade = 1 - 0.78 * Math.min(1, Math.max(0, (yy - 0.58) / 0.4)); // the shoulders dissolve into the dark
    dInk[i] = (accent[i] ? 2.2 : detail * 2.8 + ink[i] * 0.03) * (accent[i] ? 1 : fade);
    dLit[i] = accent[i] ? 0 : a * Math.pow(lum[i], 2.2) * Math.max(0.04, 1 - 1.5 * soft[i] - 0.5 * ink[i]) * fade;
  }
  const cInk = cdfOf(dInk, W, H), cLit = cdfOf(dLit, W, H);

  const pos = new Float32Array(N * 4);
  const dir = new Float32Array(N * 4);
  const aux = new Float32Array(N * 4);

  const scale = worldH / H; // world units per analysis pixel
  const hatch = -0.95; // sketch hatching angle (rad) used where the drawing has no structure

  for (let i = 0; i < N; i++) {
    const u = halton(i, 2), v = halton(i, 3);
    const lit = i % 5 >= 3; // 60% ink, 40% light
    const { rowCdf, colCdf } = lit ? cLit : cInk;
    const row = searchCdf(rowCdf, u);
    const col = searchCdf(colCdf, v, row * W, row * W + W - 1) - row * W;
    const idx = row * W + clamp(col, 0, W - 1);
    const fx = col + rand(), fy = row + rand();

    // orientation: along the drawn lines where the structure is clear, hatch angle elsewhere
    const { ang, k } = orient(T, idx, hatch, rand);

    const len = (0.05 + 0.13 * k * (0.6 + 0.4 * rand())) * (worldH / 6.6);
    const dx = Math.cos(ang) * len;
    const dy = -Math.sin(ang) * len; // image y points down

    const L = lum[idx];
    const isAccent = accent[idx];
    // depth: face leans towards us, hair and shoulders fall back; a little scatter keeps the dive from looking flat
    const z = (L - 0.45) * 0.55 + (rand() - 0.5) * 0.16 - (fy / H) * 0.15;

    pos[i * 4] = (fx / W - 0.5) * W * scale;
    pos[i * 4 + 1] = (0.5 - fy / H) * H * scale;
    pos[i * 4 + 2] = z;
    pos[i * 4 + 3] = isAccent ? 1.6 : lit ? 0.1 + rand() * 0.16 : 0.85 + rand() * 0.4;

    dir[i * 4] = dx;
    dir[i * 4 + 1] = dy;
    dir[i * 4 + 2] = 0;
    dir[i * 4 + 3] = isAccent === 1 ? 0.95 : isAccent === -1 ? 0.08 : lit ? warm + 0.2 + (rand() - 0.5) * 0.12 : 0.12 + (rand() - 0.5) * 0.1;

    aux[i * 4 + 1] = fx / W; // param: x across the image (used for the intro "draw-on" sweep)
    aux[i * 4 + 3] = lit ? 1 : 0; // 1 = light stroke, 0 = ink stroke (lets the intro draw the sketch first, then light it)
  }

  // the eyes, in world units, so the camera can dive into one
  return { pos, dir, aux, worldH, worldW: W * scale, eye: { x: (0.575 - 0.5) * W * scale, y: (0.5 - 0.365) * H * scale } };
}
