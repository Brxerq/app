// A small ring that trails the pointer and swells over anything clickable. The native cursor stays.
export function initCursor() {
  const ring = document.createElement('div');
  ring.className = 'cursor';
  ring.setAttribute('aria-hidden', 'true');
  document.body.appendChild(ring);
  let x = -100, y = -100, rx = x, ry = y, on = false, raf = 0;
  const loop = () => {
    rx += (x - rx) * 0.2;
    ry += (y - ry) * 0.2;
    ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
    raf = requestAnimationFrame(loop);
  };
  window.addEventListener('pointermove', (e) => {
    x = e.clientX;
    y = e.clientY;
    if (!on) {
      on = true;
      rx = x;
      ry = y;
      ring.classList.add('is-on');
      raf = requestAnimationFrame(loop);
    }
    ring.classList.toggle('is-link', !!e.target.closest?.('a, button, summary, input, textarea, label'));
  }, { passive: true });
  document.addEventListener('pointerleave', () => {
    ring.classList.remove('is-on');
    cancelAnimationFrame(raf);
    on = false;
  });
  window.addEventListener('pointerdown', () => ring.classList.add('is-down'));
  window.addEventListener('pointerup', () => ring.classList.remove('is-down'));
}
