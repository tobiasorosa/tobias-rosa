/**
 * The contact form's endpoint — the only route on the site that is not
 * prerendered. It sends the message through Resend as plain text, with the
 * visitor's address as Reply-To.
 *
 * The enhanced form calls it with `Accept: application/json` and gets JSON
 * back. A native (no-JS) post gets a 303 to /sent, or a plain-text error.
 */
import type { APIRoute } from 'astro';
import { CONTACT_FROM, CONTACT_TO, RESEND_API_KEY } from 'astro:env/server';

export const prerender = false;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: APIRoute = async ({ request, redirect }) => {
  const wantsJson = request.headers.get('accept')?.includes('application/json') ?? false;

  const reply = (status: number, error?: string) => {
    if (wantsJson) return Response.json(error ? { error } : { ok: true }, { status });
    if (!error) return redirect('/sent', 303);
    return new Response(`${error}\n\nYou can write to ${CONTACT_TO} directly.`, {
      status,
      headers: { 'content-type': 'text/plain; charset=utf-8' },
    });
  };

  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return reply(400, 'The form could not be read.');
  }

  const field = (key: string) => String(data.get(key) ?? '').trim();
  // Newlines out of the name, which goes into the subject header.
  const name = field('name').replace(/[\r\n]+/g, ' ');
  const email = field('email');
  const message = field('message');

  // Honeypot: people never see this field, bots fill it. Pretend it worked.
  if (field('company')) return reply(200);

  if (!name || name.length > 100) return reply(400, 'Add your name.');
  if (!EMAIL.test(email) || email.length > 200) return reply(400, 'Add a valid email address.');
  if (!message || message.length > 5000) return reply(400, 'Add a message.');

  if (!RESEND_API_KEY) {
    console.error('[contact] RESEND_API_KEY is not set');
    return reply(502, 'The message could not be sent.');
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${RESEND_API_KEY}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        from: CONTACT_FROM,
        to: [CONTACT_TO],
        reply_to: email,
        subject: `Portfolio — ${name}`,
        text: `${message}\n\n— ${name} (${email})`,
      }),
    });
    if (!res.ok) {
      console.error('[contact] Resend answered', res.status, await res.text());
      return reply(502, 'The message could not be sent.');
    }
  } catch (err) {
    console.error('[contact] Resend request failed', err);
    return reply(502, 'The message could not be sent.');
  }

  return reply(200);
};
