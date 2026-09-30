// Hatch-engraved globe: land as strokes along the parallels, the client countries lit, an arc from Karachi to each.
import { mulberry32, halton, clamp } from '../util.js';

export const KARACHI = { lat: 24.86, lon: 67.01 };

const D2R = Math.PI / 180;
export const R = 2.55;

// position on unit sphere; λ=0 faces +z
export function sph(lat, lon, r = 1) {
  const p = lat * D2R, l = lon * D2R;
  return [r * Math.cos(p) * Math.sin(l), r * Math.sin(p), r * Math.cos(p) * Math.cos(l)];
}
function tangents(lat, lon) {
  const p = lat * D2R, l = lon * D2R;
  const east = [Math.cos(l), 0, -Math.sin(l)];
  const north = [-Math.sin(p) * Math.sin(l), Math.cos(p), -Math.sin(p) * Math.cos(l)];
  return { east, north };
}

/** the mask (scripts/make-assets.mjs): R = land, G = client country as (index + 1) * 20 in name order, B = Pakistan */
export function loadMask(img) {
  const W = img.naturalWidth || img.width, H = img.naturalHeight || img.height;
  const cv = typeof OffscreenCanvas !== 'undefined' ? new OffscreenCanvas(W, H) : Object.assign(document.createElement('canvas'), { width: W, height: H });
  const g = cv.getContext('2d', { willReadFrequently: true });
  g.drawImage(img, 0, 0);
  const d = g.getImageData(0, 0, W, H).data;
  const land = new Uint8Array(W * H), lit = new Uint8Array(W * H), pk = new Uint8Array(W * H);
  for (let i = 0; i < W * H; i++) {
    land[i] = d[i * 4]; lit[i] = d[i * 4 + 1]; pk[i] = d[i * 4 + 2];
  }
  return { W, H, land, lit, pk };
}

const at = (m, arr, lat, lon) => {
  const x = clamp(Math.floor(((lon + 180) / 360) * m.W), 0, m.W - 1);
  const y = clamp(Math.floor(((90 - lat) / 180) * m.H), 0, m.H - 1);
  return arr[y * m.W + x];
};

/**
 * @param {ReturnType<typeof loadMask>} mask
 * @param {number} N strokes
 * @param {{country:string, lat:number, lon:number}[]} places client countries in page order; stroke group 1 + k is
 *   place k (its arc draws on over param 0..0.8, its pin over 0.8..1, its fill is always on and glows with the group)
 */
export function globeForm(mask, N, places, seed = 11) {
  const rand = mulberry32(seed);
  const pos = new Float32Array(N * 4), dir = new Float32Array(N * 4), aux = new Float32Array(N * 4);
  let hk = 0; // halton counter for rejection sampling
  const put = (i, p, d, w, heat, group = 0, param = 0, fx = 9, extra = 0) => {
    pos[i * 4] = p[0]; pos[i * 4 + 1] = p[1]; pos[i * 4 + 2] = p[2]; pos[i * 4 + 3] = w;
    dir[i * 4] = d[0]; dir[i * 4 + 1] = d[1]; dir[i * 4 + 2] = d[2]; dir[i * 4 + 3] = heat;
    aux[i * 4] = group; aux[i * 4 + 1] = param; aux[i * 4 + 2] = fx; aux[i * 4 + 3] = extra;
  };
  const norm = (v, len) => { const l = Math.hypot(v[0], v[1], v[2]) || 1; return [v[0] / l * len, v[1] / l * len, v[2] / l * len]; };

  // pixel lists per client country (the mask indexes countries by their sorted names) and for Pakistan
  const n = places.length;
  const sorted = places.map((p) => p.country).sort();
  const placeOf = sorted.map((name) => places.findIndex((p) => p.country === name));
  const pix = places.map(() => []), pkPix = [];
  for (let y = 0; y < mask.H; y++) for (let x = 0; x < mask.W; x++) {
    const g = mask.lit[y * mask.W + x];
    if (g > 10) pix[placeOf[Math.round(g / 20) - 1]]?.push([x, y]);
    if (mask.pk[y * mask.W + x] > 127) pkPix.push([x, y]);
  }
  // fills are shared by √area, so Ireland stays as legible as the USA
  const filled = pix.map((p, k) => (p.length ? k : -1)).filter((k) => k >= 0);
  const fillCdf = [];
  for (const k of filled) fillCdf.push((fillCdf.at(-1) ?? 0) + Math.sqrt(pix[k].length));
  const pickFill = () => {
    const x = rand() * fillCdf.at(-1);
    return filled[fillCdf.findIndex((c) => c >= x)];
  };
  const pixToLL = (px, jx = 0, jy = 0) => [90 - ((px[1] + jy) / mask.H) * 180, ((px[0] + jx) / mask.W) * 360 - 180];

  // arcs from Karachi
  const k = sph(KARACHI.lat, KARACHI.lon);
  const arcs = places.map((m) => {
    const b = sph(m.lat, m.lon);
    const dot = clamp(k[0] * b[0] + k[1] * b[1] + k[2] * b[2], -1, 1);
    const om = Math.acos(dot);
    return { b, om, lift: 0.16 + 0.5 * (om / Math.PI) };
  });
  const arcPoint = (a, s) => {
    const sinom = Math.sin(a.om) || 1e-6;
    const c0 = Math.sin((1 - s) * a.om) / sinom, c1 = Math.sin(s * a.om) / sinom;
    const v = [k[0] * c0 + a.b[0] * c1, k[1] * c0 + a.b[1] * c1, k[2] * c0 + a.b[2] * c1];
    const r = R * (1.004 + a.lift * Math.pow(Math.sin(Math.PI * s), 0.85));
    const l = Math.hypot(v[0], v[1], v[2]);
    return [v[0] / l * r, v[1] / l * r, v[2] / l * r];
  };

  let arcN = 0, pinN = 0;
  for (let i = 0; i < N; i++) {
    let cls = i % 100;
    if (!filled.length && cls >= 44 && cls < 66 && !(cls >= 52 && cls < 54)) cls = 0; // no client countries: more land
    if (cls < 44) {
      // land, sampled by rejection over the sphere
      let lat = 0, lon = 0, tries = 0;
      do {
        const u = halton(hk, 2), v = halton(hk, 3); hk++;
        lon = (u * 2 - 1) * 180; lat = Math.asin(2 * v - 1) / D2R; tries++;
      } while (at(mask, mask.land, lat, lon) < 128 && tries < 60);
      const coastal = Math.abs(at(mask, mask.land, lat + 1.2, lon) - at(mask, mask.land, lat - 1.2, lon)) + Math.abs(at(mask, mask.land, lat, lon + 1.6) - at(mask, mask.land, lat, lon - 1.6)) > 90;
      const p = sph(lat, lon, R);
      const { east, north } = tangents(lat, lon);
      const a = 0.55 + (rand() - 0.5) * 0.9;
      const d = norm([east[0] * Math.cos(a) + north[0] * Math.sin(a), east[1] * Math.cos(a) + north[1] * Math.sin(a), east[2] * Math.cos(a) + north[2] * Math.sin(a)], coastal ? 0.13 : 0.1);
      put(i, p, d, coastal ? 0.95 : 0.5 + rand() * 0.25, coastal ? 0.5 : 0.22 + rand() * 0.1);
    } else if (cls < 52) {
      // the client countries, filled and bright; each glows with its group while its row is read
      const c = pickFill();
      const px = pix[c][Math.floor(rand() * pix[c].length)];
      const [lat, lon] = pixToLL(px, rand(), rand());
      const p = sph(lat, lon, R * 1.004);
      const { east, north } = tangents(lat, lon);
      const a = (rand() - 0.5) * 1.4;
      const d = norm([east[0] * Math.cos(a) + north[0] * Math.sin(a), east[1] * Math.cos(a) + north[1] * Math.sin(a), east[2] * Math.cos(a) + north[2] * Math.sin(a)], 0.09);
      put(i, p, d, 0.85, 0.9, 1 + c, 0, 9);
    } else if (cls < 54) {
      // Pakistan, where it ships from
      const px = pkPix[Math.floor(rand() * pkPix.length)];
      const [lat, lon] = pixToLL(px, rand(), rand());
      const p = sph(lat, lon, R * 1.004);
      const { east } = tangents(lat, lon);
      put(i, p, norm(east, 0.08), 0.6, 0.5);
    } else if (cls < 63) {
      // an arc Karachi → each client country, drawn on by its group over param 0..0.8
      const which = arcN++ % n;
      const s = rand();
      const a = arcs[which];
      const p = arcPoint(a, s), p2 = arcPoint(a, Math.min(1, s + 0.01));
      const d = norm([p2[0] - p[0], p2[1] - p[1], p2[2] - p[2]], 0.12);
      put(i, p, d, 0.95, 0.55 + 0.4 * s, 1 + which, s * 0.8, 9);
    } else if (cls < 66) {
      // a pin standing on each client country + a ring at the top: the arc's landing, param 0.8..1
      const which = pinN++ % n;
      const m = places[which];
      const up = sph(m.lat, m.lon);
      const { east, north } = tangents(m.lat, m.lon);
      if (rand() < 0.5) {
        const s = rand();
        const p = [up[0] * (R + s * 0.4), up[1] * (R + s * 0.4), up[2] * (R + s * 0.4)];
        put(i, p, norm(up, 0.1), 1.0, 0.95, 1 + which, 0.8 + 0.2 * s, 9);
      } else {
        const t = rand() * Math.PI * 2, rr = 0.15;
        const c = [up[0] * (R + 0.4), up[1] * (R + 0.4), up[2] * (R + 0.4)];
        const p = [c[0] + (east[0] * Math.cos(t) + north[0] * Math.sin(t)) * rr, c[1] + (east[1] * Math.cos(t) + north[1] * Math.sin(t)) * rr, c[2] + (east[2] * Math.cos(t) + north[2] * Math.sin(t)) * rr];
        const d = norm([-east[0] * Math.sin(t) + north[0] * Math.cos(t), -east[1] * Math.sin(t) + north[1] * Math.cos(t), -east[2] * Math.sin(t) + north[2] * Math.cos(t)], 0.12);
        put(i, p, d, 1.0, 1.0, 1 + which, 1, 9);
      }
    } else if (cls < 68) {
      // Karachi ring
      const up = sph(KARACHI.lat, KARACHI.lon);
      const { east, north } = tangents(KARACHI.lat, KARACHI.lon);
      const t = rand() * Math.PI * 2, rr = 0.1 + 0.12 * rand();
      const c = [up[0] * R * 1.005, up[1] * R * 1.005, up[2] * R * 1.005];
      const p = [c[0] + (east[0] * Math.cos(t) + north[0] * Math.sin(t)) * rr, c[1] + (east[1] * Math.cos(t) + north[1] * Math.sin(t)) * rr, c[2] + (east[2] * Math.cos(t) + north[2] * Math.sin(t)) * rr];
      put(i, p, norm([-east[0] * Math.sin(t) + north[0] * Math.cos(t), -east[1] * Math.sin(t) + north[1] * Math.cos(t), -east[2] * Math.sin(t) + north[2] * Math.cos(t)], 0.08), 0.7, 0.7, 0, 0, 9);
    } else if (cls < 84) {
      // graticule: parallels and meridians every 15°
      if (rand() < 0.5) {
        const lat = Math.round((rand() * 2 - 1) * 5.5) * 15 * (Math.abs(rand()) > 0 ? 1 : 1);
        const lon = (rand() * 2 - 1) * 180;
        const { east } = tangents(lat, lon);
        put(i, sph(lat, lon, R * 1.001), norm(east, 0.2), 0.32, 0.1, 0, 0, 9);
      } else {
        const lon = Math.round((rand() * 2 - 1) * 12) * 15;
        const lat = Math.asin(rand() * 2 - 1) / D2R;
        const { north } = tangents(lat, lon);
        put(i, sph(lat, lon, R * 1.001), norm(north, 0.2), 0.32, 0.1, 0, 0, 9);
      }
    } else {
      // halo: a loose shell and a couple of orbit rings
      if (rand() < 0.35) {
        const ring = rand() < 0.5 ? 1 : 2;
        const t = rand() * Math.PI * 2, rr = R * (ring === 1 ? 1.22 : 1.42);
        const tilt = ring === 1 ? 0.5 : -0.35;
        const x = Math.cos(t) * rr, z0 = Math.sin(t) * rr;
        const p = [x, z0 * Math.sin(tilt), z0 * Math.cos(tilt)];
        put(i, p, norm([-Math.sin(t), Math.cos(t) * Math.sin(tilt), Math.cos(t) * Math.cos(tilt)], 0.14), 0.4, 0.15, 0, 0, 0);
      } else {
        const u = rand() * 2 - 1, t = rand() * Math.PI * 2, rr = R * (1.08 + rand() * 1.1);
        const s = Math.sqrt(1 - u * u);
        put(i, [Math.cos(t) * s * rr, u * rr, Math.sin(t) * s * rr], norm([rand() - 0.5, rand() - 0.5, rand() - 0.5], 0.05), 0.22, 0.2, 0, 0, 0);
      }
    }
  }
  return { pos, dir, aux };
}

/** yaw/pitch that bring (lat, lon) to the front of the globe */
export function faceTo(lat, lon) {
  return { yaw: -lon * D2R, pitch: lat * D2R };
}
