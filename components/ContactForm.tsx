import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Send, Loader2 } from 'lucide-react';
import { sendContactForm } from '../actions/contact';

interface ContactFormProps {
  defaultService?: string;
  defaultPackage?: string;
  variant?: 'full' | 'minimal';
}

export const ContactForm: React.FC<ContactFormProps> = ({ defaultService = '', defaultPackage = 'Karar Vermedim', variant = 'full' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: defaultService,
    selectedPackage: 'Karar Vermedim',
    message: '',
    email: '',
    // Tracking
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    gclid: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Load package from URL and Tracking Params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const updates: any = {};

    // Package selection
    const pkg = params.get('package');
    if (pkg) {
      const validServices = ['web-design', 'ecommerce', 'custom-dev', 'ads', 'social', 'branding', 'printing', 'other'];
      if (validServices.includes(pkg)) {
        updates.service = pkg;
      }
    }

    // Capture Tracking Params
    if (params.get('utm_source')) updates.utm_source = params.get('utm_source');
    if (params.get('utm_medium')) updates.utm_medium = params.get('utm_medium');
    if (params.get('utm_campaign')) updates.utm_campaign = params.get('utm_campaign');
    if (params.get('gclid')) updates.gclid = params.get('gclid');

    if (Object.keys(updates).length > 0) {
      setFormData(prev => ({ ...prev, ...updates }));
    }

  }, []);

  // Sync defaultPackage prop with state
  useEffect(() => {
    if (defaultPackage && defaultPackage !== 'Karar Vermedim') {
      setFormData(prev => ({ ...prev, selectedPackage: defaultPackage }));
    }
  }, [defaultPackage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();
      // If minimal, we don't send name/email from state, backend handles defaults
      // But we can also send empty strings and let backend decide
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('service', formData.service);
      data.append('selectedPackage', formData.selectedPackage);
      data.append('message', formData.message);
      data.append('variant', variant); // Inform backend about variant if needed logic there

      if (formData.utm_source) data.append('subject', `(Campaign: ${formData.utm_campaign || 'N/A'})`);

      const response = await sendContactForm(null, data);

      if (response.success) {
        // Google Analytics Events
        if (typeof window !== 'undefined' && (window as any).gtag) {
          const gtag = (window as any).gtag;
          gtag('event', 'Woyable_Form_Gonderimi', { event_timeout: 2000 });
          gtag('event', 'conversion_event_request_quote', { event_timeout: 2000 });
        }

        setIsSubmitted(true);
        // Reset form basics
        setFormData(prev => ({
          ...prev,
          name: '',
          phone: '',
          service: '',
          selectedPackage: 'Karar Vermedim',
          message: '',
          email: ''
        }));
      } else {
        alert(response.message || "Bir hata oluştu.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center animate-in fade-in zoom-in bg-green-50 rounded-xl border border-green-100 p-6">
        <div className="bg-green-100 p-3 rounded-full mb-3">
          <Send className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-1">Mesajınız Alındı!</h3>
        <p className="text-slate-600 text-sm mb-4">
          Ekibimiz en kısa sürede size dönüş yapacaktır.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsSubmitted(false)}
        >
          Yeni Mesaj
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Name Field - Only visible in full variant */}
      {variant === 'full' && (
        <div className="space-y-1">
          <label htmlFor="name" className="text-sm font-medium text-slate-700">Ad Soyad</label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            placeholder="Adınız Soyadınız"
          />
        </div>
      )}

      {/* Email Field - Only visible in full variant */}
      {variant === 'full' && (
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium text-slate-700">E-Posta Adresi</label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            placeholder="ornek@sirket.com"
          />
        </div>
      )}

      {/* Phone Field */}
      <div className="space-y-1">
        <label htmlFor="phone" className="text-sm font-medium text-slate-700">Telefon</label>
        <input
          id="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
          placeholder="05XX XXX XX XX"
        />
      </div>

      {/* Service Selection */}
      <div className="space-y-1">
        <label htmlFor="service" className="text-sm font-medium text-slate-700">İlgilendiğiniz Hizmet</label>
        <select
          id="service"
          value={formData.service}
          onChange={handleChange}
          className={`flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all ${defaultService ? 'bg-slate-100 cursor-not-allowed' : ''}`}
          disabled={!!defaultService}
        >
          <option value="">Hizmet Seçiniz...</option>
          <option value="web-design">Web Tasarım & Yazılım</option>
          <option value="ecommerce">E-Ticaret Sistemleri</option>
          <option value="custom-dev">Özel Yazılım / CRM</option>
          <option value="ads">Google Ads & Pazarlama</option>
          <option value="social">Sosyal Medya Yönetimi</option>
          <option value="branding">Kurumsal Kimlik & Tasarım</option>
          <option value="printing">Baskı & Etkinlik</option>
          <option value="other">Diğer</option>
        </select>
      </div>

      {/* Package Selection */}
      <div className="space-y-1">
        <label htmlFor="selectedPackage" className="text-sm font-medium text-slate-700">Paket Tercihi</label>
        <select
          id="selectedPackage"
          value={formData.selectedPackage}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
        >
          <option value="Karar Vermedim">Karar Vermedim</option>
          <option value="Başlangıç (3.000 ₺)">Başlangıç (3.000 ₺)</option>
          <option value="Profesyonel (7.500 ₺)">Profesyonel (7.500 ₺)</option>
          <option value="Kurumsal (Teklif Al)">Kurumsal (Teklif Al)</option>
        </select>
      </div>

      {/* Message Field */}
      <div className="space-y-1">
        <label htmlFor="message" className="text-sm font-medium text-slate-700">Mesajınız</label>
        <textarea
          id="message"
          required={variant === 'full'} // Optional in minimal if user wants just call? Actually likely required still to prevent spam
          rows={variant === 'minimal' ? 3 : 4}
          value={formData.message}
          onChange={handleChange}
          className="flex w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
          placeholder="Projenizden bahsedin..."
        />
      </div>

      <Button type="submit" className="w-full mt-2" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Gönderiliyor...
          </>
        ) : (
          <>
            {variant === 'minimal' ? 'Hemen Teklif Al' : 'Gönder'} <Send className="ml-2 h-3 w-3" />
          </>
        )}
      </Button>
    </form>
  );
};