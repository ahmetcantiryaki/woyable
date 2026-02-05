import React from 'react';
import { ServiceLayout, ServicePackage } from '@/components/site/ServiceLayout';

export const metadata = {
    title: 'Teknik Servis Web Sitesi ve Yerel SEO | Woyable',
    description: 'Tesisatçı, kombi servisi, çilingir ve tamirciler için müşteri kazandıran, yerel SEO uyumlu web sitesi paketleri. Telefon trafiğinizi artırın.',
};

const techServicePackages: ServicePackage[] = [
    {
        name: 'Başlangıç',
        price: '3.000 ₺',
        oldPrice: '7.500 ₺',
        description: 'Hızlıca aranmak isteyen servisler için.',
        features: [
            'Tek Sayfa Tasarım',
            '"Hemen Ara" Butonları',
            'WhatsApp Entegrasyonu',
            'Google Harita Kaydı',
        ],
        badge: 'En Uygun Fiyat',
    },
    {
        name: 'Profesyonel',
        price: '7.500 ₺',
        oldPrice: '15.000 ₺',
        description: 'Bölgesel hizmet veren firmalar için.',
        features: [
            'Çok Sayfalı Web Sitesi',
            'Hizmet Bölgeleri Sayfaları',
            'Blog Modülü',
            'Sosyal Medya Kurulumu',
            'Google Ads Kurulumu',
            'Yerel SEO Optimizasyonu',
        ],
        isPopular: true,
        badge: 'En Popüler',
    },
    {
        name: 'Kurumsal',
        price: 'Teklif Al',
        description: 'Geniş servis ağı ve franchise yapıları.',
        features: [
            'Bayi/Şube Yönetim Sistemi',
            'Personel ve İş Takip',
            'CRM Entegrasyonu',
            'Özel Yazılım Geliştirme',
            '7/24 Destek',
        ],
        isCustom: true,
        badge: 'Size Özel',
    },
];

export default function TechServicePage() {
    return (
        <ServiceLayout
            title="Teknik Servisler İçin Müşteri Kazandıran Web Sitesi"
            description="Tesisatçı, çilingir, kombi servisi, elektrikçi veya nakliyeci misiniz? Müşterilerinizin acil bir sorunu var ve Google'da 'en yakın usta'yı arıyorlar. Sizin amacınız sanat eseri bir site değil; telefonunuzu çaldıracak bir sitedir. Sektörünüze özel, hızlı açılan ve 'Hemen Ara' odaklı çözümler sunuyoruz."
            serviceKey="tech-service"
            packages={techServicePackages}
        >
            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl font-bold mb-6">Paket Özellikleri</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl border border-orange-100 border-l-4 border-l-orange-500 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Click-to-Call (Tıkla Ara)</h3>
                            <p className="text-slate-600">Tasarımlarımız tamamen mobil odaklıdır. Müşteri siteye girdiği anda tek tuşla sizi arayabilir veya WhatsApp'tan konum atabilir.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-orange-100 border-l-4 border-l-orange-500 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Yerel SEO & Harita Kaydı</h3>
                            <p className="text-slate-600">Hizmet verdiğiniz bölgede (Örn: "Kadıköy Tesisatçı") aramalarda öne çıkmanızı sağlıyoruz.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-orange-100 border-l-4 border-l-orange-500 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Hizmet Bölgeleri</h3>
                            <p className="text-slate-600">Hangi mahallelere servis verdiğinizi belirten özel sayfalarla arama hacminizi artırıyor, müşteri kaçırmanızı engelliyoruz.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-orange-100 border-l-4 border-l-orange-500 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Hızlı ve Basit Arayüz</h3>
                            <p className="text-slate-600">Müşteri karmaşık menülerle uğraşmaz, doğrudan sorunun çözümüne ulaşır.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                    <h2 className="text-2xl font-bold mb-4 text-blue-900">Reklam Desteği</h2>
                    <p className="text-blue-800 leading-relaxed">
                        Sitenizi kurduktan sonra Google Haritalar ve Google Ads reklamlarınızı yöneterek, işinizin olmadığı durgun günlerde bile telefon trafiği yaratmanıza destek oluyoruz. "Sana bir site yapacağız ve telefonun çalacak" sözünü tutmak için çalışıyoruz.
                    </p>
                </section>
            </div>
        </ServiceLayout>
    );
}
