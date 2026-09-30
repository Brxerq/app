// The note is sent straight to the inbox through FormSubmit (no account, no mail app needed). If that fails, the visitor
// gets the address to write to instead, so a message is never lost silently. Without JS the form posts to FormSubmit too.
const TO = 'sm.hassaan99@gmail.com';

export function initContact() {
  const form = document.getElementById('note');
  if (!form) return;
  const status = form.querySelector('.note__status');
  const label = form.querySelector('[data-send-label]');
  const button = form.querySelector('button[type="submit"]');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const d = Object.fromEntries(new FormData(form));
    button.disabled = true;
    label.textContent = 'sending…';
    status.textContent = '';
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${TO}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: d.name, email: d.email, message: d.message, _subject: `Portfolio: message from ${d.name}`, _replyto: d.email, _template: 'table' }),
      });
      const out = await res.json().catch(() => ({}));
      if (!res.ok || String(out.success) !== 'true') throw new Error(out.message || res.status);
      form.reset();
      form.classList.add('is-sent');
      label.textContent = 'sent';
      status.textContent = 'Thanks, your message is on its way. I reply within a day.';
      window.dispatchEvent(new Event('smh:send'));
    } catch {
      label.textContent = 'send message';
      status.innerHTML = `Couldn’t send just now. Please email me at <a href="mailto:${TO}">${TO}</a>.`;
    } finally {
      button.disabled = false;
      setTimeout(() => { form.classList.remove('is-sent'); if (label.textContent === 'sent') label.textContent = 'send message'; }, 6000);
    }
  });
}
