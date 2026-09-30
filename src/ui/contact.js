// The note is sent straight to the inbox through Web3Forms (no mail app needed). If that fails, the visitor gets
// prefilled Gmail / mail-app links instead, so a message is never lost silently. Without JS the form posts to Web3Forms too.
const TO = 'sm.hassaan99@gmail.com';
const KEY = 'b08361c0-1a8c-4091-a26b-593f56849b48'; // public by design: Web3Forms keys only allow sending to this inbox

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
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: KEY, name: d.name, email: d.email, message: d.message, subject: `Portfolio: message from ${d.name}`, from_name: 'Portfolio', replyto: d.email }),
      });
      const out = await res.json().catch(() => ({}));
      if (!res.ok || String(out.success) !== 'true') throw new Error(out.message || '');
      form.reset();
      form.classList.add('is-sent');
      label.textContent = 'sent';
      status.textContent = 'Thanks, your message is on its way. I reply within a day.';
      window.dispatchEvent(new Event('smh:send'));
    } catch {
      label.textContent = 'send message';
      // mailto does nothing on machines without a mail app, so also offer Gmail's web composer with the note filled in
      const q = (o) => new URLSearchParams(o).toString().replace(/\+/g, '%20');
      const subject = `Portfolio: message from ${d.name}`;
      const gmail = `https://mail.google.com/mail/?${q({ view: 'cm', fs: '1', to: TO, su: subject, body: d.message })}`;
      const mailto = `mailto:${TO}?${q({ subject, body: d.message })}`;
      status.innerHTML = `Couldn’t send just now. Your note is kept: <a href="${gmail}" target="_blank" rel="noopener noreferrer">send it from Gmail</a>, <a href="${mailto}">open your mail app</a>, or write to ${TO}.`;
    } finally {
      button.disabled = false;
      setTimeout(() => { form.classList.remove('is-sent'); if (label.textContent === 'sent') label.textContent = 'send message'; }, 6000);
    }
  });
}
