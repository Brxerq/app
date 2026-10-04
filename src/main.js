import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { env, wantsCalm, setCalm, pickTier, strokeBudget } from './env.js';
import { initNav } from './ui/nav.js';
import { initMotion } from './ui/motion.js';
import { initContact } from './ui/contact.js';
import { initButtons, initLight } from './ui/buttons.js';
import { fetchContributions, toGrid, heatmap } from './ui/github.js';

gsap.registerPlugin(ScrollTrigger, SplitText);
ScrollTrigger.config({ ignoreMobileResize: true });

const root = document.documentElement;
const loader = document.querySelector('[data-loader]');
const pct = document.querySelector('[data-loader-pct]');
let shown = 0;
const progress = (v) => {
  shown = Math.max(shown, v);
  if (pct) pct.textContent = String(Math.round(shown * 100)).padStart(3, '0');
  loader?.style.setProperty('--p', shown.toFixed(3));
};
const finishLoader = () => {
  loader?.classList.add('is-done');
  setTimeout(() => loader?.remove(), 1200);
};

function initCalmToggle(calm) {
  const btn = document.querySelector('[data-calm]');
  if (!btn) return;
  btn.hidden = false;
  btn.querySelector('[data-calm-label]').textContent = calm ? 'Motion: calm' : 'Motion: full';
  btn.title = calm ? 'Turn the 3D world and motion back on' : 'Turn the 3D world and motion down';
  btn.addEventListener('click', () => {
    setCalm(!calm);
    location.reload();
  });
}

/** the graph renders as a heat-map card; failure hides the section */
async function initCommits(world) {
  const sec = document.getElementById('commits');
  if (!sec) return;
  try {
    const { days, total } = await fetchContributions(sec.dataset.github || 'Brxerq');
    const grid = toGrid(days);
    const label = sec.querySelector('[data-commits-total]');
    if (label) label.textContent = `${total.toLocaleString('en-US')} contributions in the last year`;
    // the 3D skyline read as noise, so both pages show the real heat map; the world keeps its flat floor
    const box = document.createElement('div');
    box.className = 'commits__heat';
    box.tabIndex = 0; // it can scroll sideways on narrow screens, so it must be reachable by keyboard
    box.setAttribute('role', 'group');
    box.setAttribute('aria-label', 'GitHub contribution heat map');
    box.appendChild(heatmap(grid));
    sec.querySelector('.commits__copy')?.appendChild(box);
    world?.dir.measure();
  } catch {
    sec.hidden = true;
    document.querySelector('[data-ruler] a[data-id="commits"]')?.parentElement?.remove();
    document.querySelector('[data-index-list] a[data-id="commits"]')?.parentElement?.remove();
    world?.dir.measure();
  }
}

async function main() {
  progress(0.05);
  const calm = wantsCalm();
  root.classList.toggle('calm', calm);
  let world = null;

  if (!calm && env.webgl2) {
    try {
      const q = new URLSearchParams(location.search);
      const tier = ['high', 'medium', 'low'].includes(q.get('tier')) ? q.get('tier') : pickTier();
      const canvas = document.querySelector('#gl canvas');
      root.classList.add('gl');
      const { boot } = await import('./gl/boot.js');
      world = await boot({ canvas, tier, strokes: strokeBudget(tier), mobile: env.mobile, onProgress: (v) => progress(0.1 + v * 0.85) });
      world.stage.onDemote = (to) => console.info('[world] quality →', to);
      world.stage.onLost = () => location.reload();
      window.__world = world;
    } catch (err) {
      console.warn('[world] falling back to the static page', err);
      root.classList.remove('gl', 'slabs');
      world = null;
    }
  }

  initCalmToggle(calm);
  initNav({ calm });
  initContact();
  if (env.fine && !calm) { initButtons(); initLight(); }
  const motion = initMotion({ calm, fine: env.fine });
  initCommits(world);

  await document.fonts.ready;
  ScrollTrigger.refresh();
  world?.dir.measure();
  // the page got taller when the stage layout switched on, so the browser's own anchor jump is stale: land again
  const hashId = decodeURIComponent(location.hash.slice(1));
  const landing = hashId && hashId !== 'top' ? document.getElementById(hashId) : null;
  if (landing) window.scrollTo({ top: landing.getBoundingClientRect().top + window.scrollY, behavior: 'instant' });
  progress(1);
  await new Promise((r) => setTimeout(r, 200));
  finishLoader();
  motion.start();
  if (world) await world.playIntro();
  root.classList.add('ready');
}

main();
