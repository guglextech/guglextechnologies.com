import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, company, websiteType, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Guglex Website" <${process.env.GMAIL_USER}>`,
      to: 'guglex.technologies@gmail.com',
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` (${company})` : ''}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="border-bottom:2px solid #000;padding-bottom:12px">
            New Contact Form Submission
          </h2>
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:8px 12px;font-weight:600;vertical-align:top;width:120px">Name</td>
              <td style="padding:8px 12px">${name}</td>
            </tr>
            <tr style="background:#f9fafb">
              <td style="padding:8px 12px;font-weight:600;vertical-align:top">Email</td>
              <td style="padding:8px 12px"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:8px 12px;font-weight:600;vertical-align:top">Company</td>
              <td style="padding:8px 12px">${company || '—'}</td>
            </tr>
            <tr style="background:#f9fafb">
              <td style="padding:8px 12px;font-weight:600;vertical-align:top">Website Type</td>
              <td style="padding:8px 12px">${websiteType || '—'}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;font-weight:600;vertical-align:top">Message</td>
              <td style="padding:8px 12px;white-space:pre-wrap">${message}</td>
            </tr>
          </table>
          <p style="color:#6b7280;font-size:13px;margin-top:24px">
            Sent from guglextechnologies.com contact form
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 },
    );
  }
}
