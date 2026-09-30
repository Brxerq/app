// mailto: on purpose — nothing is stored here, and the page says so.
export function initContact() {
  const form = document.getElementById('note');
  if (!form) return;
  const status = form.querySelector('.note__status');
  const label = form.querySelector('[data-send-label]');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const d = Object.fromEntries(new FormData(form));
    const subject = `Portfolio Contact: ${d.name || 'New Message'}`;
    const body = [`Name: ${d.name}`, `Email: ${d.email}`, '', 'Message:', d.message].join('\n');
    label.textContent = 'sent — check your mail app';
    if (status) status.textContent = 'Opening your mail app…';
    form.classList.add('is-sent');
    window.dispatchEvent(new Event('smh:send'));
    setTimeout(() => {
      window.location.href = `mailto:sm.hassaan99@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }, 650);
    setTimeout(() => {
      label.textContent = 'send message';
      form.classList.remove('is-sent');
    }, 6000);
  });
}
