import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { prefersReducedMotion } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

/**
 * One idea, applied everywhere: the page is being drawn.
 *
 * Ink lays down left to right, strokes draw along their own path, and paper
 * settles onto the desk. Nothing fades up from nowhere — a fade is a screen
 * effect, and this page is pretending to be a notebook.
 *
 * Every helper is a no-op under prefers-reduced-motion, and every one of them
 * animates *from* a visible resting state, so a tween that never runs leaves
 * the element exactly where it belongs.
 */

type Trigger = gsap.DOMTarget;

const START = 'top 82%';

/** Ink laid across the text, left to right, the way a line gets written. */
export function writeIn(target: gsap.TweenTarget, trigger: Trigger, delay = 0) {
  if (prefersReducedMotion()) return;
  gsap.from(target, {
    clipPath: 'inset(0 100% -0.3em 0)',
    duration: 0.5,
    delay,
    ease: 'power2.inOut',
    clearProps: 'clipPath',
    scrollTrigger: { trigger, start: START, once: true },
  });
}

/** A stroke drawing along its own path — squiggles, arrows, rules. */
export function drawIn(target: gsap.TweenTarget, trigger: Trigger, delay = 0) {
  if (prefersReducedMotion()) return;
  gsap.fromTo(
    target,
    { drawSVG: '0%' },
    {
      drawSVG: '100%',
      duration: 0.5,
      delay,
      ease: 'power1.inOut',
      scrollTrigger: { trigger, start: START, once: true },
    },
  );
}

/**
 * Paper landing on the desk: down, a little small, settling with weight.
 *
 * Deliberately no rotation. Each card already carries its own hand-drawn tilt
 * from a CSS class, and a relative `rotation: '-=3'` compounds every time the
 * tween is rebuilt — a ScrollTrigger refresh or a hot reload is enough to send
 * a card to -9deg and hang its corner off the screen. `clearProps` hands the
 * transform back to CSS at the end so the hover states still work.
 */
export function placeIn(
  targets: gsap.TweenTarget,
  trigger: Trigger,
  { stagger = 0.07, from = 'start' as 'start' | 'center' | 'end' | number } = {},
) {
  if (prefersReducedMotion()) return;
  gsap.from(targets, {
    y: -16,
    scale: 0.96,
    opacity: 0,
    duration: 0.45,
    ease: 'back.out(1.5)',
    stagger: { each: stagger, from },
    clearProps: 'transform,opacity',
    scrollTrigger: { trigger, start: START, once: true },
  });
}

/** Sideways settle, for things that read as a column rather than a pile. */
export function slideIn(targets: gsap.TweenTarget, trigger: Trigger, stagger = 0.08) {
  if (prefersReducedMotion()) return;
  gsap.from(targets, {
    x: -26,
    opacity: 0,
    duration: 0.42,
    ease: 'power3.out',
    stagger,
    clearProps: 'transform,opacity',
    scrollTrigger: { trigger, start: START, once: true },
  });
}

/**
 * A stroke tied to the scrollbar rather than to a moment — the pencil keeps
 * pace with the reader instead of racing ahead of them.
 */
export function drawOnScrub(target: gsap.TweenTarget, trigger: Trigger) {
  if (prefersReducedMotion()) {
    gsap.set(target, { drawSVG: '100%' });
    return;
  }
  gsap.fromTo(
    target,
    { drawSVG: '0%' },
    {
      drawSVG: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger,
        start: 'top 70%',
        end: 'bottom 75%',
        scrub: 0.6,
      },
    },
  );
}

/** Marks inking in one after another as the scrubbed line reaches them. */
export function inkDots(targets: gsap.TweenTarget, trigger: Trigger) {
  if (prefersReducedMotion()) return;
  gsap.from(targets, {
    scale: 0,
    duration: 0.35,
    ease: 'back.out(2.4)',
    stagger: 0.12,
    clearProps: 'transform',
    scrollTrigger: { trigger, start: 'top 72%', once: true },
  });
}

/**
 * Every SectionHeading in a section opens the same way: the sticky note lands,
 * the title is written across, the underline draws under it. Called once per
 * section so the openings stay identical without each one re-specifying it.
 */
export function revealHeadings(root: HTMLElement) {
  root.querySelectorAll<HTMLElement>('[data-section-heading]').forEach((heading) => {
    const label = heading.querySelector('[data-heading-label]');
    const ink = heading.querySelectorAll('[data-heading-ink]');
    const rule = heading.querySelector('[data-heading-rule]');

    if (label) placeIn(label, heading, { stagger: 0 });
    if (ink.length) writeIn(ink, heading, 0.08);
    if (rule) drawIn(rule, heading, 0.34);
  });
}

/** Numbers counting up, for stats that are the point rather than decoration. */
export function countUp(el: HTMLElement, value: number, suffix: string, trigger: Trigger) {
  if (prefersReducedMotion()) {
    el.textContent = `${value}${suffix}`;
    return;
  }
  const counter = { n: 0 };
  gsap.to(counter, {
    n: value,
    duration: 1.1,
    ease: 'power2.out',
    onUpdate: () => {
      el.textContent = `${Math.round(counter.n)}${suffix}`;
    },
    scrollTrigger: { trigger, start: 'top 85%', once: true },
  });
}
