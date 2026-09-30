// Builds the world: stage, forms, director. Loaded lazily, so calm/no-WebGL visitors never pay for three.js.
import gsap from 'gsap';
import { Stage } from './stage.js';
import { Director } from './director.js';
import { LAYER, LAYER_Z } from './scenes.js';
import { portraitForm } from './forms/portrait.js';
import { globeForm, loadMask } from './forms/globe.js';
import { waveForm, fieldForm, funnelForm, corridorForm, rulerForm, skylineForm, orreryForm, calmForm } from './forms/others.js';
import { shelfForm, livenessForm, speciesForm } from './forms/vision.js';
import { Slabs } from './slabs.js';
import { Hud } from './hud.js';

const loadImage = (src) =>
  new Promise((res, rej) => {
    const i = new Image();
    i.decoding = 'async';
    i.onload = () => res(i);
    i.onerror = rej;
    i.src = src;
  });
const tick = () => new Promise((r) => setTimeout(r, 0));
const debug = /[?&]debug(?:&|$)/.test(location.search);
const timed = (label, fn) => {
  const t = performance.now();
  const out = fn();
  if (debug) console.info(`[boot] ${label} ${(performance.now() - t).toFixed(0)}ms`);
  return out;
};

export async function boot({ canvas, tier, strokes, mobile, onProgress = () => {} }) {
  const stage = new Stage(canvas, { tier, maxStrokes: strokes });
  const u = stage.strokes.uniforms;
  let shaderFailed = false;
  stage.renderer.debug.onShaderError = () => { shaderFailed = true; };
  onProgress(0.15);

  const [pimg, mimg] = await Promise.all([loadImage('./assets/img/hassaan.webp'), loadImage('./assets/img/earth.png')]);
  onProgress(0.35);
  await tick();

  const N = stage.strokes.texW * stage.strokes.texW;
  const portrait = timed('portrait', () => portraitForm(pimg, N, { height: 6.6, warm: 0.5, seed: 7 }));
  stage.strokes.setForm(LAYER.portrait, portrait);
  onProgress(0.55);
  await tick();
  // contact page: the same portrait, lit warmer
  const portrait2 = timed('portrait2', () => portraitForm(pimg, N, { height: 6.6, warm: 0.72, seed: 7 }));
  stage.strokes.setForm(LAYER.portrait2, portrait2);
  onProgress(0.7);
  await tick();
  stage.strokes.setForm(LAYER.globe, timed('globe', () => globeForm(loadMask(mimg), N)));
  onProgress(0.75);
  await tick();
  const sec = (id) => document.getElementById(id);
  const forms = [
    [LAYER.wave, () => waveForm(N)],
    [LAYER.shelf, () => shelfForm(N)],
    [LAYER.liveness, () => livenessForm(N)],
    [LAYER.species, () => speciesForm(N)],
    [LAYER.funnel, () => funnelForm(N)],
    [LAYER.corridor, () => corridorForm(N, document.querySelectorAll('#web .site').length || 9)],
    [LAYER.field, () => fieldForm(N, { runs: +(sec('reliability')?.dataset.runs || 4500), rate: +(sec('reliability')?.dataset.failRate || 0.4) })],
    [LAYER.ruler, () => rulerForm(N)],
    [LAYER.skyline, () => skylineForm(N, null)],
    [LAYER.calm, () => calmForm(N)],
    [LAYER.orrery, () => orreryForm(N, [...document.querySelectorAll('#toolbox .ring')].map((r) => r.querySelectorAll('li').length))],
  ];
  for (let k = 0; k < forms.length; k++) {
    stage.strokes.setForm(forms[k][0], timed('form ' + forms[k][0], forms[k][1]));
    onProgress(0.75 + (0.2 * (k + 1)) / forms.length);
    await tick();
  }

  // every layer lives at its own depth along the corridor
  const off = u.uFormOff.value;
  for (const k of Object.values(LAYER)) {
    off[k * 3] = 0;
    off[k * 3 + 1] = 0;
    off[k * 3 + 2] = LAYER_Z[k];
  }

  const dir = new Director(stage, { mobile });
  dir.eye = portrait.eye;
  dir.introEase = 0;
  dir.intro = { done: false, mix: 0 };
  // the nine live sites become textured slabs in the corridor (images + links come from the DOM)
  const sites = [...document.querySelectorAll('#web .site')].map((li) => ({
    src: li.querySelector('.site__shot img')?.currentSrc || li.querySelector('.site__shot img')?.src,
    href: li.querySelector('a.stretch')?.href,
    mode: li.querySelector('.site__shot')?.dataset.slab === 'scan' ? 'scan' : 'ink',
  }));
  if (sites.length && sites.every((x) => x.src)) {
    dir.slabs = new Slabs(stage);
    dir.slabs.build(sites);
    document.documentElement.classList.add('slabs');
    window.addEventListener('click', (e) => {
      if (dir.slabs.hover >= 0 && !e.target.closest('a, button, input, textarea, summary, dialog')) dir.slabs.open();
    });
    // hovering a site's text lights its slab too
    document.querySelectorAll('#web .site').forEach((li, k) => {
      li.addEventListener('pointerenter', () => { dir.slabs.textHover = k; });
      li.addEventListener('pointerleave', () => { dir.slabs.textHover = -1; });
    });
  }
  dir.hud = new Hud(stage);
  // hovering a tool lights its ring in the orrery
  document.querySelectorAll('#toolbox .ring').forEach((el) => {
    const k = +el.dataset.ring;
    const on = () => { dir.orreryRing = k; };
    const off = () => { dir.orreryRing = -5; };
    el.addEventListener('pointerenter', on);
    el.addEventListener('pointerleave', off);
    el.addEventListener('focusin', on);
    el.addEventListener('focusout', off);
  });
  dir.measure();
  stage.onFrame((dt, t) => dir.update(dt, t));

  // pointer = the light pen
  const move = (e) => {
    dir.setPointer((e.clientX / window.innerWidth) * 2 - 1, 1 - (e.clientY / window.innerHeight) * 2);
  };
  window.addEventListener('pointermove', move, { passive: true });
  let tapTimer = 0;
  window.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse') return;
    move(e);
    clearTimeout(tapTimer);
    tapTimer = setTimeout(() => dir.setPointer(9, 9), 700); // the pen leaves the screen when the finger does
  }, { passive: true });

  let lw = window.innerWidth, lh = window.innerHeight, timer = 0;
  const relayout = () => {
    const dw = Math.abs(window.innerWidth - lw), dh = Math.abs(window.innerHeight - lh);
    if (mobile && dw < 2 && dh < 140) return; // mobile URL bar collapsing: keep the layout
    lw = window.innerWidth;
    lh = window.innerHeight;
    stage.resize();
    dir.measure();
  };
  window.addEventListener('resize', () => {
    clearTimeout(timer);
    timer = setTimeout(relayout, 140);
  });

  // gently re-measure when the DOM changes height (fonts, images, <details>)
  const ro = new ResizeObserver(() => {
    clearTimeout(timer);
    timer = setTimeout(() => dir.measure(), 200);
  });
  ro.observe(document.querySelector('main'));

  canvas.addEventListener('webglcontextlost', (e) => {
    e.preventDefault();
    stage.stop();
    stage.onLost?.();
  });

  // opening: initial state is a scattered cloud, cobalt and unlit
  u.uForms.value.set(-1, LAYER.portrait);
  u.uMix.value = 0;
  u.uIntro.value = 0;
  u.uLight.value = 0;
  u.uWarm.value = -0.3;
  await stage.renderer.compileAsync(stage.scene, stage.camera);
  if (shaderFailed) {
    stage.dispose();
    throw new Error('shader compile failed');
  }
  stage.start();
  onProgress(1);

  const playIntro = () =>
    new Promise((resolve) => {
      const tl = gsap.timeline({
        onComplete: () => {
          dir.intro.done = true;
          resolve();
        },
      });
      tl.to(dir.intro, { mix: 1, duration: 2.6, ease: 'power2.inOut' }, 0)
        .to(u.uIntro, { value: 1, duration: 2.3, ease: 'power1.inOut' }, 0.15)
        .to(dir, { introEase: 1, duration: 3.2, ease: 'power3.out' }, 0)
        .to(u.uLight, { value: 1, duration: 1.8, ease: 'power2.inOut' }, 1.5)
        .to(u.uWarm, { value: 0, duration: 2.2, ease: 'power2.inOut' }, 1.4);
    });

  /** the GitHub graph arrives later: rebuild just that layer */
  const setSkyline = (weeks) => {
    stage.strokes.setForm(LAYER.skyline, skylineForm(N, weeks));
  };

  /** a short flare when a note is sent */
  const burst = () => {
    gsap.timeline()
      .to(u.uBright, { value: 0.95, duration: 0.3, ease: 'power2.out' })
      .to(u.uBright, { value: 0.42, duration: 1.2, ease: 'power2.inOut' })
      .fromTo(u.uSwirl, { value: 1.6 }, { value: 3.4, duration: 0.5, yoyo: true, repeat: 1, ease: 'sine.inOut' }, 0);
  };
  window.addEventListener('smh:send', burst);

  return { stage, dir, playIntro, setSkyline };
}
