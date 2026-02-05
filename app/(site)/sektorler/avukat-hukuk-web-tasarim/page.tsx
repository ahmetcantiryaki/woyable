import React from 'react';
import { ServiceLayout, ServicePackage } from '@/components/site/ServiceLayout';

export const metadata = {
    title: 'Avukat ve Hukuk Bürosu Web Tasarımı | Woyable',
    description: 'Avukatlar ve hukuk büroları için kurumsal, prestijli web sitesi tasarımı. TBB mevzuatına uygun, SEO dostu ve mobil uyumlu çözümler.',
};

const lawPackages: ServicePackage[] = [
    {
        name: 'Başlangıç',
        price: '3.000 ₺',
        oldPrice: '7.500 ₺',
        description: 'Bağımsız avukatlar için profesyonel site.',
        features: [
            'Kurumsal Tasarım',
            'Hizmet Alanları Sayfası',
            'Hızlı İletişim Butonları',
            'SSL Sertifikası',
        ],
        badge: 'En Uygun Fiyat',
    },
    {
        name: 'Profesyonel',
        price: '7.500 ₺',
        oldPrice: '15.000 ₺',
        description: 'Hukuk büroları için kapsamlı çözüm.',
        features: [
            'Gelişmiş Yönetim Paneli',
            'Makale ve Blog Sistemi',
            'Ekip Tanıtım Sayfaları',
            'Kurumsal E-posta',
            'Google Harita Optimizasyonu',
            'Çoklu Dil Altyapısı',
        ],
        isPopular: true,
        badge: 'En Popüler',
    },
    {
        name: 'Kurumsal',
        price: 'Teklif Al',
        description: 'Büyük ölçekli bürolar ve danışmanlıklar.',
        features: [
            'Özel Tasarım ve Marka Kimliği',
            'Müvekkil Portalı',
            'Dijital İtibar Yönetimi',
            'Sosyal Medya Danışmanlığı',
            '7/24 Destek',
        ],
        isCustom: true,
        badge: 'Size Özel',
    },
];

export default function LawPage() {
    return (
        <ServiceLayout
            title="Avukatlar ve Hukuk Büroları İçin Kurumsal Web Sitesi Tasarımı"
            description="Hukuk mesleğinin ciddiyetine uygun, prestijli ve oturaklı web tasarımları hazırlıyoruz. Müvekkillerinizin size internet üzerinden kolayca ulaşmasını sağlarken, uzmanlık alanlarınızdaki makalelerinizle Google aramalarında üst sıralara çıkmanıza yardımcı oluyoruz. TBB reklam yasağına ve meslek etiğine uygun dijital çözümler sunuyoruz."
            serviceKey="law"
            packages={lawPackages}
        >
            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl font-bold mb-6">Sektöre Özel Özellikler</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl border border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Makale ve Blog Yönetimi</h3>
                            <p className="text-slate-600">"Boşanma davası ne kadar sürer?" gibi potansiyel müvekkil aramalarında çıkmanızı sağlayan gelişmiş blog altyapısı.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Hızlı İletişim Butonları</h3>
                            <p className="text-slate-600">Acil durumlarda müvekkillerin size tek tıkla ulaşmasını sağlayan WhatsApp ve Arama modülleri.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Uzmanlık Alanları Vitrini</h3>
                            <p className="text-slate-600">Faaliyet gösterdiğiniz hukuk dallarını (Ceza, Aile, Ticaret vb.) profesyonelce sergileyin.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Çoklu Dil Desteği</h3>
                            <p className="text-slate-600">Yabancı müvekkiller için İngilizce, Arapça veya Almanca dil altyapısı ile global hizmet verin.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-slate-900 text-slate-300 p-8 rounded-2xl">
                    <h2 className="text-2xl font-bold mb-4 text-white">Dijital İtibar Yönetimi</h2>
                    <p className="leading-relaxed">
                        Hukuk büronuzun isminin internette nasıl göründüğü, müvekkil kararını doğrudan etkiler. Kurumsal kimlik ve web sitenizle güçlü, güvenilir ve ulaşılabilir bir imaj çiziyoruz. Yanlış veya eksik bilgileri düzenleyerek dijital varlığınızı kontrol altına alıyoruz.
                    </p>
                </section>
            </div>
        </ServiceLayout>
    );
}
