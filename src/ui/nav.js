// Chapter navigation: a ruler down the right edge, a full-screen index, smooth in-page jumps, scroll-spy.
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function scrollToEl(el, calm) {
  const y = el.id === 'top' ? 0 : el.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: y, behavior: calm ? 'auto' : 'smooth' });
  if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
  el.focus({ preventScroll: true });
}

export function initNav({ calm }) {
  const secs = [...document.querySelectorAll('main > section[data-label]')].filter((s) => !s.hidden);
  const ruler = document.querySelector('[data-ruler]');
  const list = document.querySelector('[data-index-list]');
  const dialog = document.getElementById('index');
  const openBtn = document.querySelector('[data-open-index]');

  // ruler ticks
  if (ruler) {
    const ol = document.createElement('ol');
    for (const s of secs) {
      const li = document.createElement('li');
      li.innerHTML = `<a href="#${s.id}" data-id="${s.id}"><i></i><span>${s.dataset.label}</span></a>`;
      ol.appendChild(li);
    }
    ruler.appendChild(ol);
    ruler.hidden = false;
  }

  // index overlay
  if (list && dialog && typeof dialog.showModal === 'function') {
    for (const s of secs) {
      const li = document.createElement('li');
      li.innerHTML = `<a href="#${s.id}" data-id="${s.id}">${s.dataset.label}</a>`;
      list.appendChild(li);
    }
    if (openBtn) {
      openBtn.hidden = false;
      const count = openBtn.querySelector('span');
      if (count) count.textContent = `/ ${secs.length}`;
      openBtn.addEventListener('click', () => dialog.showModal());
    }
    dialog.querySelector('[data-close-index]')?.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) dialog.close();
    });
  }

  // one handler for every in-page link
  document.addEventListener('click', (e) => {
    const a = e.target.closest?.('a[href^="#"]');
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey) return;
    const id = decodeURIComponent(a.getAttribute('href').slice(1));
    const target = id ? document.getElementById(id) : null;
    if (!target) return;
    e.preventDefault();
    if (dialog?.open) dialog.close();
    scrollToEl(target, calm);
    history.replaceState(null, '', '#' + id);
  });

  // scroll-spy
  const links = [...document.querySelectorAll('[data-ruler] a, [data-index-list] a')];
  const setActive = (id) => {
    for (const a of links) {
      if (a.dataset.id === id) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    }
  };
  for (const s of secs) {
    ScrollTrigger.create({
      trigger: s,
      start: 'top 55%',
      end: 'bottom 55%',
      onToggle: (self) => self.isActive && setActive(s.id),
    });
  }
  setActive(secs[0]?.id);
}
