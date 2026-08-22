import Lenis from 'lenis';

let lenis: Lenis | null = null;

export function getLenis(): Lenis {
  if (!lenis) {
    lenis = new Lenis({
      lerp: 0.09,
      wheelMultiplier: 1,
    });
  }
  return lenis;
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  getLenis().scrollTo(el, { offset: -80, duration: 1.2 });
}
