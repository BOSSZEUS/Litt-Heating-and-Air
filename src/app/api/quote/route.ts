import { NextRequest, NextResponse } from 'next/server';
import { quoteSchema } from '@/lib/validation';
import { getServiceSupabase } from '@/lib/supabase';
import { sendEmail, buildQuoteEmailHtml } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate with Zod
    const result = quoteSchema.safeParse(body);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      return NextResponse.json(
        { error: 'Validation failed', details: errors },
        { status: 400 }
      );
    }

    const data = result.data;

    // Save to Supabase
    try {
      const supabase = getServiceSupabase();
      const { error: dbError } = await supabase.from('submissions').insert({
        type: 'quote',
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
        services: data.services.join(', '),
        email_consent: data.emailConsent,
      });

      if (dbError) {
        console.error('[Quote API] Supabase insert error:', dbError);
        // Don't fail the request — still try to send email
      }
    } catch (dbErr) {
      console.error('[Quote API] Database error:', dbErr);
      // Don't fail the request — still try to send email
    }

    // Send email notification
    const notifyEmail = process.env.NOTIFY_EMAIL || 'littheatingandair@gmail.com';
    const emailHtml = buildQuoteEmailHtml(data);
    await sendEmail({
      to: notifyEmail,
      subject: `New Quote Request from ${data.name}`,
      html: emailHtml,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          'Thank you! Your quote request has been submitted. We will get back to you within 24 hours.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Quote API] Unexpected error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
