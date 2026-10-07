// Buttons are pulled towards the pointer as it nears them, lean with it once it is over them, and are lit where it touches
// them (the light itself is CSS, fed by --x/--y). Fine pointers only, and never for calm visitors: main.js decides.
// Touch gets the CSS press and the centred light.
const REACH = 70; // px outside a button where the pull starts
const clamp = (v, m) => Math.max(-m, Math.min(m, v));
// The comet outline: an empty <i> per button, styled and rotated by CSS (rotating it is compositor-only; animating a gradient angle was not)
export function initComets() {
  // off-screen comets sit paused: every running animation costs a style pass per frame
  const io = new IntersectionObserver((es) => es.forEach((e) => e.target.classList.toggle('is-off', !e.isIntersecting)));
  for (const el of document.querySelectorAll('.btn, .bar__cta, .site__go')) {
    const i = document.createElement('i');
    i.className = 'comet';
    i.setAttribute('aria-hidden', 'true');
    el.appendChild(i);
    io.observe(el);
  }
}

export function initButtons() {
  const btns = [...document.querySelectorAll('.btn, .bar__cta, .site__go')];
  let ev = null;
  const frame = () => {
    const { clientX: cx, clientY: cy } = ev;
    ev = null;
    const rects = btns.map((el) => el.getBoundingClientRect()); // read all, then write all
    btns.forEach((el, i) => {
      const r = rects[i];
      const d = Math.hypot(Math.max(r.left - cx, 0, cx - r.right), Math.max(r.top - cy, 0, cy - r.bottom));
      if (d >= REACH) { if (el.style.translate) el.style.translate = ''; return; }
      if (d > 0) { // near: drift towards the pointer, more the closer it is
        const k = 1 - d / REACH;
        el.style.translate = `${clamp((cx - r.left - r.width / 2) * 0.1 * k, 9).toFixed(1)}px ${clamp((cy - r.top - r.height / 2) * 0.2 * k, 5).toFixed(1)}px`;
        return;
      }
      const x = cx - r.left, y = cy - r.top;
      el.style.setProperty('--x', `${x.toFixed(0)}px`);
      el.style.setProperty('--y', `${y.toFixed(0)}px`);
      el.style.translate = `${((x / r.width - 0.5) * Math.min(12, r.width * 0.05)).toFixed(1)}px ${((y / r.height - 0.5) * 6).toFixed(1)}px`;
    });
  };
  addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch') return;
    if (!ev) requestAnimationFrame(frame);
    ev = e;
  }, { passive: true });
  document.documentElement.addEventListener('pointerleave', () => btns.forEach((el) => { el.style.translate = ''; }));
}

// Cards and rows are lit the same way: CSS draws the light from --x/--y and drifts the card screenshot against --nx/--ny (-0.5..0.5).
export function initLight() {
  for (const el of document.querySelectorAll('.also .site, .archive__row, .creds__list > li, .role, .ring')) {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      el.style.setProperty('--x', `${x.toFixed(0)}px`);
      el.style.setProperty('--y', `${y.toFixed(0)}px`);
      el.style.setProperty('--nx', (x / r.width - 0.5).toFixed(2));
      el.style.setProperty('--ny', (y / r.height - 0.5).toFixed(2));
    });
  }
}
