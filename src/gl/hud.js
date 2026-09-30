// A handful of DOM labels pinned to points in the world (e.g. the country being read, above its pin on the globe).
// They are decorative echoes of text that already exists on the page, so they stay aria-hidden.
import { Vector3 } from 'three';

export class Hud {
  constructor(stage) {
    this.stage = stage;
    this.root = document.createElement('div');
    this.root.className = 'hud';
    this.root.setAttribute('aria-hidden', 'true');
    document.body.appendChild(this.root);
    this.labels = new Map();
    this.v = new Vector3();
  }

  label(id, text) {
    let l = this.labels.get(id);
    if (!l) {
      const el = document.createElement('span');
      el.className = 'hud__tag';
      this.root.appendChild(el);
      l = { el, on: false };
      this.labels.set(id, l);
    }
    if (l.el.textContent !== text) l.el.textContent = text;
    return l;
  }

  /** put the label at a world position; `alpha` 0 hides it; `variant` 'dim' is a quiet text label instead of a pill */
  place(id, text, world, alpha, variant = '') {
    const l = this.label(id, text);
    if (l.variant !== variant) {
      l.el.className = variant ? `hud__tag hud__tag--${variant}` : 'hud__tag';
      l.variant = variant;
    }
    if (alpha < 0.02) {
      if (l.on) { l.el.style.opacity = '0'; l.on = false; }
      return;
    }
    const cam = this.stage.camera;
    this.v.copy(world).project(cam);
    const x = (this.v.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-this.v.y * 0.5 + 0.5) * window.innerHeight;
    l.el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
    l.el.style.opacity = alpha.toFixed(2);
    l.on = true;
  }

  hideAll() {
    for (const l of this.labels.values()) {
      if (l.on) { l.el.style.opacity = '0'; l.on = false; }
    }
  }
}
