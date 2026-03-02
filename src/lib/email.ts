import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function sendEmail({ to, subject, html }: EmailOptions) {
  // Skip email sending if SMTP is not configured
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log('[Email] SMTP not configured. Skipping email send.');
    console.log(`[Email] Would have sent to: ${to}`);
    console.log(`[Email] Subject: ${subject}`);
    return { success: true, skipped: true };
  }

  try {
    const transporter = getTransporter();
    await transporter.sendMail({
      from: `"Litt Heating and Air" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    });
    return { success: true, skipped: false };
  } catch (error) {
    console.error('[Email] Failed to send email:', error);
    return { success: false, error };
  }
}

export function buildQuoteEmailHtml(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
  services: string[];
  emailConsent: string;
}) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #C41E2A; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">New Quote Request</h1>
      </div>
      <div style="padding: 20px; background-color: #f9f9f9;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Name:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Email:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><a href="mailto:${data.email}">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Phone:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><a href="tel:${data.phone}">${data.phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Services:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.services.join(', ')}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Email Consent:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.emailConsent}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; vertical-align: top;">Message:</td>
            <td style="padding: 10px;">${data.message.replace(/\n/g, '<br>')}</td>
          </tr>
        </table>
      </div>
      <div style="padding: 15px; text-align: center; color: #666; font-size: 12px;">
        Submitted via littheatingandair.com
      </div>
    </div>
  `;
}

export function buildContactEmailHtml(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #C41E2A; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">New Contact Message</h1>
      </div>
      <div style="padding: 20px; background-color: #f9f9f9;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Name:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Email:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><a href="mailto:${data.email}">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Phone:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><a href="tel:${data.phone}">${data.phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; vertical-align: top;">Message:</td>
            <td style="padding: 10px;">${data.message.replace(/\n/g, '<br>')}</td>
          </tr>
        </table>
      </div>
      <div style="padding: 15px; text-align: center; color: #666; font-size: 12px;">
        Submitted via littheatingandair.com
      </div>
    </div>
  `;
}
