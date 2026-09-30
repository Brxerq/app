// DOM choreography. Everything lives inside gsap.matchMedia(), so reduced-motion visitors get the
// finished page: no pins, no scrub, no autoplay, no hidden-until-scrolled text.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

const fmt = (v, d) => Number(v).toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });

function countUp(el, delay = 0) {
  const to = parseFloat(el.dataset.count);
  const d = parseInt(el.dataset.decimals || '0', 10);
  const o = { v: 0 };
  return gsap.to(o, {
    v: to, duration: 1.7, delay, ease: 'power2.out',
    onUpdate: () => { el.textContent = fmt(o.v, d); },
    onComplete: () => { el.textContent = fmt(to, d); },
  });
}

export function initMotion({ calm, fine }) {
  const api = { start() {} };
  const mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    if (calm) return;
    const heroCounters = [...document.querySelectorAll('.hero [data-count]')];
    heroCounters.forEach((el) => { el.textContent = fmt(0, parseInt(el.dataset.decimals || '0', 10)); });

    // ---------- hero intro (paused until the world has drawn itself)
    const tl = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } });
    const h1 = document.querySelector('.hero__title');
    h1.setAttribute('aria-label', h1.textContent.replace(/\s+/g, ' ').trim()); // the split spans below are aria-hidden
    const split = SplitText.create('.hero__line', { type: 'words,chars', mask: 'chars', aria: 'hidden' });
    tl.from('.bar', { opacity: 0, y: -14, duration: 0.9 }, 0.6)
      .from('.hero__status', { opacity: 0, x: -18, duration: 0.9 }, 0.5)
      .from(split.chars, { yPercent: 115, rotate: 5, duration: 1.15, stagger: { each: 0.03, from: 'start' }, ease: 'power4.out' }, 0.55)
      .from('.hero__role', { opacity: 0, y: 20, duration: 0.9 }, 1.25)
      .from('.hero__bio', { opacity: 0, y: 22, duration: 0.9 }, 1.45)
      .from('.hero__cta > *', { opacity: 0, y: 18, duration: 0.8, stagger: 0.09 }, 1.65)
      .from('.hero__stats .readout', { opacity: 0, y: 26, duration: 0.9, stagger: 0.1 }, 1.75)
      .from('.hero__scroll', { opacity: 0, duration: 1 }, 2.2)
      .call(() => heroCounters.forEach((el, i) => countUp(el, i * 0.08)), null, 1.9);
    api.start = () => tl.play();

    // leaving the hero mirrors the entrance: the letters slide back up out of their masks as you scroll (scrubbed, so it reverses)
    tl.eventCallback('onComplete', () => {
      gsap.to(split.chars, {
        yPercent: -115, ease: 'none', stagger: { each: 0.02, from: 'start' },
        scrollTrigger: { trigger: '.hero', start: 'top top', end: '+=58%', scrub: 0.6 },
      });
      gsap.to('.hero__role, .hero__bio, .hero__cta, .hero__stats', {
        opacity: 0, y: -28, ease: 'none', stagger: 0.04,
        scrollTrigger: { trigger: '.hero', start: 'top top', end: '+=46%', scrub: true },
      });
    });

    // pen pressure: letters swell towards the pointer, like a heavier stroke
    let cleanupWeight = () => {};
    if (fine) {
      const chars = split.chars;
      const base = chars.map((c) => parseFloat(getComputedStyle(c).fontWeight) || 300);
      const cur = [...base], tgt = [...base];
      let px = -1e4, py = -1e4, raf = 0, active = false;
      const step = () => {
        let moving = false;
        chars.forEach((c, i) => {
          cur[i] += (tgt[i] - cur[i]) * 0.14;
          if (Math.abs(tgt[i] - cur[i]) > 0.5) moving = true;
          c.style.fontWeight = String(Math.round(cur[i]));
        });
        raf = moving ? requestAnimationFrame(step) : 0;
      };
      const onMove = (e) => {
        px = e.clientX; py = e.clientY;
        if (window.scrollY > window.innerHeight * 0.6) return;
        chars.forEach((c, i) => {
          const r = c.getBoundingClientRect();
          const d = Math.hypot(px - (r.left + r.width / 2), py - (r.top + r.height / 2));
          const k = Math.max(0, 1 - d / 190);
          tgt[i] = base[i] + k * k * 330;
        });
        if (!raf) raf = requestAnimationFrame(step);
        active = true;
      };
      window.addEventListener('pointermove', onMove, { passive: true });
      cleanupWeight = () => { window.removeEventListener('pointermove', onMove); cancelAnimationFrame(raf); void active; };
    }

    // ---------- counters
    // (numbers the visitor has already scrolled past, or landed below via a link, keep their real value)
    document.querySelectorAll('[data-count]').forEach((el) => {
      if (el.closest('.hero')) return;
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
      el.textContent = fmt(0, parseInt(el.dataset.decimals || '0', 10));
      ScrollTrigger.create({ trigger: el, start: 'top 90%', once: true, onEnter: () => countUp(el) });
    });

    // ---------- headlines: line masks
    const heads = [...document.querySelectorAll('main .display')];
    document.fonts.ready.then(() => {
      heads.forEach((h) => {
        SplitText.create(h, {
          type: 'lines', mask: 'lines', autoSplit: true,
          onSplit: (self) => gsap.from(self.lines, {
            yPercent: 108, duration: 1.15, stagger: 0.1, ease: 'power4.out',
            scrollTrigger: { trigger: h, start: 'top 88%', once: true },
          }),
        });
      });
    });

    // ---------- method: the four lines are set in type that answers the scroll (scrubbed, so it also runs backwards)
    const method = document.querySelector('.method');
    const methodSplits = [];
    if (method) {
      const inWorld = document.documentElement.classList.contains('gl');
      const scrub = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: { trigger: method, start: inWorld ? 'top top' : 'top 78%', end: inWorld ? 'bottom bottom' : 'bottom 60%', scrub: 0.7 },
      });
      method.querySelectorAll('.method__t').forEach((el, i) => {
        const text = el.textContent;
        const s = SplitText.create(el, { type: 'words,chars', aria: 'hidden' });
        methodSplits.push(s);
        const sr = document.createElement('span'); // the letters are aria-hidden, so screen readers get the sentence here
        sr.className = 'vh';
        sr.textContent = text;
        el.parentElement.appendChild(sr);
        scrub.fromTo(s.chars, { yPercent: 70, opacity: 0, fontWeight: 200, rotate: 5 }, { yPercent: 0, opacity: 1, fontWeight: 300, rotate: 0, stagger: 0.022, duration: 0.85, ease: 'power3.out' }, i);
      });
    }

    // ---------- screenshots: plates that tilt with the pointer and scan/ink themselves into view
    document.querySelectorAll('.shot').forEach((fig) => {
      const img = fig.querySelector('img');
      const mode = fig.dataset.slab === 'scan' ? 'scan' : 'ink';
      const line = document.createElement('i');
      line.className = 'shot__scan';
      fig.appendChild(line);
      const from = mode === 'scan' ? 'inset(0 100% 0 0)' : 'circle(0% at 50% 50%)';
      const to = mode === 'scan' ? 'inset(0 0% 0 0)' : 'circle(80% at 50% 50%)';
      gsap.set(img, { clipPath: from });
      ScrollTrigger.create({
        trigger: fig, start: 'top 80%', once: true,
        onEnter: () => {
          gsap.to(img, { clipPath: to, duration: 1.4, ease: 'power3.inOut' });
          if (mode === 'scan') gsap.fromTo(line, { left: '0%', opacity: 1 }, { left: '100%', duration: 1.4, ease: 'power3.inOut', onComplete: () => gsap.to(line, { opacity: 0, duration: 0.3 }) });
        },
      });
      if (fine) {
        const rx = gsap.quickTo(img, 'rotationX', { duration: 0.6, ease: 'power3.out' });
        const ry = gsap.quickTo(img, 'rotationY', { duration: 0.6, ease: 'power3.out' });
        fig.addEventListener('pointermove', (e) => {
          const r = fig.getBoundingClientRect();
          ry(((e.clientX - r.left) / r.width - 0.5) * 12);
          rx(-((e.clientY - r.top) / r.height - 0.5) * 9);
        });
        fig.addEventListener('pointerleave', () => { rx(0); ry(0); });
      }
    });

    // ---------- everything else eases in once
    const rise = (targets, trigger, start = 'top 82%') =>
      gsap.from(targets, { opacity: 0, y: 34, duration: 1, ease: 'power3.out', stagger: 0.07, scrollTrigger: { trigger, start, once: true } });

    document.querySelectorAll('.stage__copy .step').forEach((step) => {
      const kids = [...step.children].filter((k) => !k.classList.contains('display'));
      if (kids.length) rise(kids, step, step.classList.contains('step--intro') ? 'top 60%' : 'top 62%');
    });
    document.querySelectorAll('.web__head > :not(.display), .career__head > :not(.display), .toolbox__head > :not(.display), .commits__copy > :not(.display), .contact__head > :not(.display), .archive > :not(.display)').forEach((el) => rise(el, el, 'top 90%'));
    document.querySelectorAll('.role, .archive__row, .creds__list li, .ring, .toolbox__aside > *, .note, .contact__side > *, .method__label').forEach((el) => rise(el, el, 'top 90%'));

    return () => {
      cleanupWeight();
      split.revert();
      methodSplits.forEach((s) => s.revert());
    };
  });

  return api;
}
