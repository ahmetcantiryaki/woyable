import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/Button';
import { Send, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

// Helper to debounce function calls
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
    email: '' // Added email field as per requirement "mails for each submission"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState<string | null>(null);

  // Debounced form data for auto-saving
  const debouncedFormData = useDebounce(formData, 1000);

  // Load package from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pkg = params.get('package');
    if (pkg) {
      // Map package names to service values if necessary, or just set strictly
      // Assuming package names overlap with values or logic needed
      // Simple mapping for demonstration based on previous select values:
      // web-design, ecommerce, custom-dev, ads, social
      const validServices = ['web-design', 'ecommerce', 'custom-dev', 'ads', 'social', 'other'];
      if (validServices.includes(pkg)) {
        setFormData(prev => ({ ...prev, service: pkg }));
      }
    }
  }, []);

  // Auto-save effect
  useEffect(() => {
    const saveDraft = async () => {
      // Only save if there is at least some data
      if (!formData.name && !formData.phone && !formData.message && !formData.email) return;

      try {
        const payload = {
          full_name: formData.name,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          email: formData.email,
          status: 'draft',
          updated_at: new Date().toISOString(), // Ensure schema supports this or ignore
        };

        if (submissionId) {
          await supabase
            .from('form_submissions')
            .update(payload)
            .eq('id', submissionId);
        } else {
          const { data, error } = await supabase
            .from('form_submissions')
            .insert([payload])
            .select()
            .single();

          if (data && !error) {
            setSubmissionId(data.id);
          }
        }
      } catch (error) {
        console.error("Error auto-saving draft:", error);
      }
    };

    saveDraft();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedFormData]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Final update with 'submitted' status
      const payload = {
        full_name: formData.name,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        email: formData.email,
        status: 'submitted',
        created_at: new Date().toISOString() // Update time to now for submission
      };

      if (submissionId) {
        await supabase
          .from('form_submissions')
          .update(payload)
          .eq('id', submissionId);
      } else {
        await supabase
          .from('form_submissions')
          .insert([payload]);
      }

      // Simulate email sending trigger via Supabase Edge Function or similar would go here
      // For now, client side success
      // Google Analytics Event
      // @ts-ignore
      if (typeof window !== 'undefined' && window.gtag) {
        // @ts-ignore
        window.gtag('event', 'Woyable_Form_Gonderimi', {
          'event_callback': () => {
            // Optional: console.log('GA Event sent');
          },
          'event_timeout': 2000,
        });
      }

      setIsSubmitted(true);
      setFormData({ name: '', phone: '', service: '', message: '', email: '' });
      setSubmissionId(null);
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      {/* Name Field */}
      <div className="space-y-1">
        <input
          id="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
          placeholder="Ad Soyad"
        />
      </div>

      {/* Email Field - Added */}
      <div className="space-y-1">
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
          placeholder="E-Posta Adresiniz"
        />
      </div>

      {/* Phone Field */}
      <div className="space-y-1">
        <input
          id="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
          placeholder="Telefon Numaranız"
        />
      </div>

      {/* Service Selection */}
      <div className="space-y-1">
        <select
          id="service"
          value={formData.service}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
        >
          <option value="">Hizmet Seçiniz...</option>
          <option value="web-design">Web Tasarım & Yazılım</option>
          <option value="ecommerce">E-Ticaret Sistemleri</option>
          <option value="custom-dev">Özel Yazılım / CRM</option>
          <option value="ads">Google Ads & Pazarlama</option>
          <option value="social">Sosyal Medya Yönetimi</option>
          <option value="other">Diğer</option>
        </select>
      </div>

      {/* Message Field */}
      <div className="space-y-1">
        <textarea
          id="message"
          required
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className="flex w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
          placeholder="Mesajınız..."
        />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Gönderiliyor...
          </>
        ) : (
          <>
            Gönder <Send className="ml-2 h-3 w-3" />
          </>
        )}
      </Button>
    </form>
  );
};