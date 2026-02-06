'use server';

import { createClient } from '@/utils/supabase/server';
import nodemailer from 'nodemailer';

// Define the shape of the form data
type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  service?: string;
  selectedPackage?: string;
  message: string;
};

type ActionResponse = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function sendContactForm(prevState: any, formData: FormData): Promise<ActionResponse> {
  const rawData: ContactFormData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    subject: formData.get('subject') as string,
    service: formData.get('service') as string,
    selectedPackage: formData.get('selectedPackage') as string || 'Karar Vermedim',
    message: formData.get('message') as string,
  };

  // 1. Assign Defaults
  if (!rawData.name) rawData.name = "Site Ziyaretçisi";
  if (!rawData.email) rawData.email = "no-reply@woyable.com";

  // 2. Modified Validation: Require Message and Phone (since name/email might be generic)
  // Actually, user wants "minimal form", typically asking for Phone.
  // Let's ensure Phone OR Message is present.
  if (!rawData.message && !rawData.phone) {
    return { success: false, message: 'Lütfen iletişim bilgilerinizi veya mesajınızı girin.' };
  }

  try {
    // 2. Save to Supabase
    const supabase = await createClient();
    const { error: dbError } = await supabase
      .from('contact_messages')
      .insert({
        name: rawData.name,
        email: rawData.email,
        phone: rawData.phone,
        subject: rawData.subject,
        service: rawData.service,
        selected_package: rawData.selectedPackage,
        message: rawData.message,
        status: 'new'
      });

    if (dbError) {
      console.error('Supabase Insert Error:', dbError);
      // We don't stop execution here, we still try to email, but log the error.
      // Or maybe we treat it as critical? Let's treat as non-critical but log it.
    }

    // 3. Send Email (if SMTP is configured)
    if (process.env.SMTP_HOST && process.env.SMTP_USER) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: `"Woyable Contact" <${process.env.SMTP_USER}>`,
        to: process.env.SMTP_USER, // Send to yourself
        // replyTo removed as per request
        subject: `Yeni İletişim Formu: ${rawData.name} - ${rawData.subject || 'Konu Yok'}`,
        text: `
          Ad Soyad: ${rawData.name}
          E-Posta: ${rawData.email}
          Telefon: ${rawData.phone || '-'}
          Hizmet: ${rawData.service || '-'}
          Paket: ${rawData.selectedPackage || '-'}
          Konu: ${rawData.subject || '-'}
          
          Mesaj:
          ${rawData.message}
        `,
        html: `
          <h3 style="color: #1e293b; font-family: sans-serif;">Yeni İletişim Formu Mesajı</h3>
          <table style="width: 100%; border-collapse: collapse; font-family: sans-serif; font-size: 14px;">
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; width: 30%;">Ad Soyad</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${rawData.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">E-Posta</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${rawData.email}</td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Telefon</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${rawData.phone || '-'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Hizmet</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${rawData.service || '-'}</td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Paket Tercihi</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${rawData.selectedPackage || '-'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Konu</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${rawData.subject || '-'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; vertical-align: top;">Mesaj</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${rawData.message.replace(/\n/g, '<br/>')}</td>
            </tr>
          </table>
          <p style="color: #64748b; font-size: 12px; margin-top: 20px;">Bu mesaj Woyable web sitesi üzerinden gönderilmiştir.</p>
        `,
      };

      await transporter.sendMail(mailOptions);
    } else {
      console.warn('SMTP configuration missing, skipping email.');
    }

    return { success: true, message: 'Mesajınız başarıyla gönderildi!' };

  } catch (error) {
    console.error('Contact Form Error:', error);
    return { success: false, message: 'Bir hata oluştu, lütfen daha sonra tekrar deneyin.' };
  }
}

// NEW: Send Ad Lead Form (for landing page /teklif-al)
export async function sendAdLeadForm(prevState: any, formData: FormData): Promise<ActionResponse> {
  const rawData = {
    name: formData.get('name') as string,
    phone: formData.get('phone') as string,
    email: formData.get('email') as string || '',
    message: formData.get('message') as string || '',
    selectedPackage: formData.get('selectedPackage') as string || 'Genel Teklif',
    service: formData.get('service') as string || '',
    utmSource: formData.get('utm_source') as string || '',
    utmMedium: formData.get('utm_medium') as string || '',
    utmCampaign: formData.get('utm_campaign') as string || '',
    gclid: formData.get('gclid') as string || '',
  };

  // Validation
  if (!rawData.name) rawData.name = "Reklam Ziyaretçisi";
  if (!rawData.phone) {
    return { success: false, message: 'Lütfen telefon numaranızı girin.' };
  }

  try {
    // 1. Save to Supabase ad_leads table
    const supabase = await createClient();
    const { error: dbError } = await supabase
      .from('ad_leads')
      .insert({
        name: rawData.name,
        phone: rawData.phone,
        email: rawData.email,
        message: rawData.message,
        selected_package: rawData.selectedPackage,
        service_category: rawData.service,
        source: 'landing_page',
        utm_source: rawData.utmSource,
        utm_medium: rawData.utmMedium,
        utm_campaign: rawData.utmCampaign,
        gclid: rawData.gclid,
        status: 'new'
      });

    if (dbError) {
      console.error('Supabase Ad Lead Insert Error:', dbError);
    }

    // 2. Send Email Notification
    if (process.env.SMTP_HOST && process.env.SMTP_USER) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: `"Woyable Reklam Lead" <${process.env.SMTP_USER}>`,
        to: process.env.SMTP_USER,
        subject: `🔥 Reklam Lead: ${rawData.name} - ${rawData.selectedPackage}`,
        text: `
          REKLAM LANDING PAGE FORMU
          =========================
          Ad Soyad: ${rawData.name}
          Telefon: ${rawData.phone}
          E-Posta: ${rawData.email || '-'}
          Paket: ${rawData.selectedPackage}
          Kategori: ${rawData.service || '-'}
          
          Not:
          ${rawData.message || '-'}
          
          UTM Source: ${rawData.utmSource || '-'}
          UTM Medium: ${rawData.utmMedium || '-'}
          UTM Campaign: ${rawData.utmCampaign || '-'}
          GCLID: ${rawData.gclid || '-'}
        `,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 20px; border-radius: 12px 12px 0 0;">
              <h2 style="color: white; margin: 0;">🔥 Yeni Reklam Lead</h2>
              <p style="color: rgba(255,255,255,0.8); margin: 5px 0 0 0; font-size: 14px;">Landing Page Formu</p>
            </div>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px; background: white; border: 1px solid #e2e8f0;">
              <tr style="background-color: #f8fafc;">
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; width: 35%;">Ad Soyad</td>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${rawData.name}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #16a34a;">📞 Telefon</td>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; font-size: 16px;">${rawData.phone}</td>
              </tr>
              <tr style="background-color: #f8fafc;">
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">E-Posta</td>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${rawData.email || '-'}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #2563eb;">📦 Seçilen Paket</td>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">${rawData.selectedPackage}</td>
              </tr>
              <tr style="background-color: #f8fafc;">
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Kategori</td>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${rawData.service || '-'}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; vertical-align: top;">Not</td>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${rawData.message || '-'}</td>
              </tr>
            </table>
            <div style="padding: 15px; background: #f1f5f9; border-radius: 0 0 12px 12px; font-size: 11px; color: #64748b;">
              <strong>Tracking:</strong> ${rawData.utmSource || 'Direct'} | ${rawData.utmCampaign || 'No Campaign'}
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
    }

    return { success: true, message: 'Talebiniz başarıyla alındı!' };

  } catch (error) {
    console.error('Ad Lead Form Error:', error);
    return { success: false, message: 'Bir hata oluştu, lütfen daha sonra tekrar deneyin.' };
  }
}
