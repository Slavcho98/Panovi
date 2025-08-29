// api/contact.ts  (Vercel Serverless Function)
import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

const required = (v?: string) => typeof v === 'string' && v.trim().length > 0;

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

    // SendGrid via SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      secure: false,
      auth: { user: 'apikey', pass: process.env.SENDGRID_API_KEY! },
    });

    const html = `
      <h2>New Contact Message</h2>
      <p><b>Name:</b> ${firstName} ${lastName}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Company:</b> ${company ?? '-'}</p>
      <p><b>Phone:</b> ${phone ?? '-'}</p>
      <p><b>Subject:</b> ${subject ?? '-'}</p>
      <hr />
      <pre style="white-space:pre-wrap">${message}</pre>
    `;

    await transporter.sendMail({
      from: process.env.CONTACT_FROM!, // e.g. "Website <no-reply@yourdomain.com>"
      to: process.env.CONTACT_TO!,     // your inbox
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
