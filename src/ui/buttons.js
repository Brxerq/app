// Buttons lean a little towards the pointer and are lit where it touches them (the light itself is CSS, fed by --x/--y).
// Fine pointers only, and never for calm visitors: main.js decides. Touch gets the CSS press and the centred light.
export function initButtons() {
  for (const el of document.querySelectorAll('.btn, .bar__cta')) {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      el.style.setProperty('--x', `${x.toFixed(0)}px`);
      el.style.setProperty('--y', `${y.toFixed(0)}px`);
      el.style.translate = `${((x / r.width - 0.5) * Math.min(12, r.width * 0.05)).toFixed(1)}px ${((y / r.height - 0.5) * 6).toFixed(1)}px`;
    });
    el.addEventListener('pointerleave', () => { el.style.translate = ''; });
  }
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
