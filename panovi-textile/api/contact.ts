// api/contact.ts  (Vercel Serverless Function)
import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

const required = (v?: string) => typeof v === 'string' && v.trim().length > 0;

function esc(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  try {
    const body = req.body ?? {};
    const {
      firstName, lastName, email, company, phone, subject, message, _hp, // _hp = honeypot
    } = body;

    // simple honeypot: if filled, drop silently
    if (typeof _hp === 'string' && _hp.trim() !== '') {
      return res.status(200).json({ ok: true });
    }

    if (![firstName, lastName, email, message].every(required)) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });

    const html = `
      <h2>New Contact Message</h2>
      <p><b>Name:</b> ${esc(firstName)} ${esc(lastName)}</p>
      <p><b>Email:</b> ${esc(email)}</p>
      <p><b>Company:</b> ${esc(company ?? '-')}</p>
      <p><b>Phone:</b> ${esc(phone ?? '-')}</p>
      <p><b>Subject:</b> ${esc(subject ?? '-')}</p>
      <hr />
      <pre style="white-space:pre-wrap">${esc(message)}</pre>
    `;

    const fromAddress = `${process.env.SMTP_FROM_NAME ?? 'Panovi Textile'} <${process.env.SMTP_USER!}>`;

    await transporter.sendMail({
      from: fromAddress,
      to: process.env.SMTP_TO_EMAIL!,
      replyTo: email,
      subject: `[Website Contact] ${subject || 'No subject'}`,
      html,
      text:
`Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company ?? '-'}
Phone: ${phone ?? '-'}
Subject: ${subject ?? '-'} 

${message}`,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[contact] error', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
