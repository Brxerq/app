// Capability + preference detection. Everything here is safe to call before anything heavy loads.
const mq = (q) => (window.matchMedia ? window.matchMedia(q) : { matches: false, addEventListener() {} });

const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch {} },
};

function hasWebGL2() {
  try {
    const c = document.createElement('canvas');
    const gl = c.getContext('webgl2', { failIfMajorPerformanceCaveat: true });
    if (!gl) return false;
    const ok = gl.getParameter(gl.MAX_TEXTURE_SIZE) >= 4096 && gl.getParameter(gl.MAX_ARRAY_TEXTURE_LAYERS) >= 16 && !!gl.getExtension('EXT_color_buffer_float');
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    return ok;
  } catch {
    return false;
  }
}

export const env = {
  reducedQuery: mq('(prefers-reduced-motion: reduce)'),
  coarse: mq('(pointer: coarse)').matches,
  fine: mq('(hover: hover) and (pointer: fine)').matches,
  saveData: !!(navigator.connection && navigator.connection.saveData),
  slowNet: !!(navigator.connection && /(^|-)2g$/.test(navigator.connection.effectiveType || '')),
  cores: navigator.hardwareConcurrency || 4,
  mem: navigator.deviceMemory || 4,
  get mobile() { return window.innerWidth < 900 || this.coarse; },
  webgl2: hasWebGL2(),
  store,
};

/** true when the user (or their OS) wants the quiet version */
export function wantsCalm() {
  const saved = store.get('smh:calm');
  if (saved === '1') return true;
  if (saved === '0') return false;
  return env.reducedQuery.matches || env.saveData || env.slowNet;
}
export function setCalm(v) { store.set('smh:calm', v ? '1' : '0'); }

export function pickTier() {
  if (env.mobile) return env.mem <= 2 || env.cores <= 4 ? 'low' : 'medium';
  if (env.cores <= 4 || env.mem <= 4) return 'medium';
  return 'high';
}
export function strokeBudget(tier) {
  if (env.mobile) return 156 * 156;
  return tier === 'high' ? 256 * 256 : 200 * 200;
}
