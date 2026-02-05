import React from 'react';
import { ServiceLayout, ServicePackage } from '@/components/site/ServiceLayout';

export const metadata = {
    title: 'Doktor ve Klinik Web Tasarımı | Woyable',
    description: 'Doktorlar, diş hekimleri ve klinikler için randevu özellikli, güven veren web tasarım ve dijital pazarlama çözümleri.',
};

const healthPackages: ServicePackage[] = [
    {
        name: 'Başlangıç',
        price: '3.000 ₺',
        oldPrice: '7.500 ₺',
        description: 'Bireysel hekimler için temel site.',
        features: [
            'Mobil Uyumlu Web Sitesi',
            'Randevu Talep Formu',
            'WhatsApp Entegrasyonu',
            'Google Harita Kaydı',
        ],
        badge: 'En Uygun Fiyat',
    },
    {
        name: 'Profesyonel',
        price: '7.500 ₺',
        oldPrice: '15.000 ₺',
        description: 'Klinikler için kapsamlı çözüm.',
        features: [
            'Gelişmiş Web Sitesi',
            'Online Randevu Sistemi',
            'Blog ve Makale Modülü',
            'Öncesi/Sonrası Galerisi',
            'SEO Altyapısı',
            'Sosyal Medya Kiti',
        ],
        isPopular: true,
        badge: 'En Popüler',
    },
    {
        name: 'Kurumsal',
        price: 'Teklif Al',
        description: 'Hastaneler ve sağlık grupları için.',
        features: [
            'Özel Arayüz Tasarımı',
            'Hasta Takip Sistemi',
            'Çoklu Dil Desteği',
            'Video Prodüksiyon',
            '7/24 Destek',
        ],
        isCustom: true,
        badge: 'Size Özel',
    },
];

export default function HealthPage() {
    return (
        <ServiceLayout
            title="Sağlık Profesyonelleri İçin Güven Veren Dijital Çözümler"
            description="Sağlık sektöründe 'Güven' her şeydir. Hastalarınız sizi ziyaret etmeden önce Google'da araştırır. Onlara profesyonel, temiz ve güven veren bir dijital vitrin sunun. Estetik cerrahlar, diş hekimleri, psikologlar ve klinikler için özel olarak geliştirdiğimiz randevu özellikli web siteleri ile hasta potansiyelinizi artırın."
            serviceKey="health"
            packages={healthPackages}
        >
            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl font-bold mb-6">Sektöre Özel Çözümlerimiz</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Online Randevu Modülü</h3>
                            <p className="text-slate-600">Hastalarınız 7/24 uygun saatleri görüp randevu talebi oluşturabilsin, sekreterya yükünüz azalsın.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Öncesi / Sonrası Galerisi</h3>
                            <p className="text-slate-600">Tedavi başarılarınızı KVKK'ya uygun, şık ve karşılaştırmalı slider formatında sergileyin.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Hasta Yorumları Entegrasyonu</h3>
                            <p className="text-slate-600">Google Haritalar ve Doktorsitesi gibi platformlardaki yorumlarınızı sitenizde göstererek güven sağlayın.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Tedavi Tanıtım Sayfaları</h3>
                            <p className="text-slate-600">Hizmetlerinizi detaylı anlatan, hastaların aklındaki soruları yanıtlayan SEO uyumlu bilgi sayfaları.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-teal-50 p-8 rounded-2xl border border-teal-100">
                    <h2 className="text-2xl font-bold mb-4 text-teal-900">Neden Biz?</h2>
                    <p className="text-teal-800 leading-relaxed mb-4">
                        Sağlık turizmi ve yerel hasta kazanımı dinamiklerine hakimiz. Sizi "sadece bir site" sahibi yapmıyor, hastalarınızın size ulaşmasını kolaylaştırıyoruz. Tıbbi etik kurallarına ve reklam yönetmeliklerine uygun içerik stratejileri geliştiriyoruz.
                    </p>
                </section>
            </div>
        </ServiceLayout>
    );
}
