import React from 'react';
import { ServiceLayout, ServicePackage } from '@/components/site/ServiceLayout';

export const metadata = {
    title: 'E-Ticaret Sitesi Kurulumu ve Danışmanlığı | Woyable',
    description: 'Satış odaklı, güvenli ve modern e-ticaret siteleri. Pazaryerlerine bağlı kalmadan kendi markanızı büyütün. Sanal POS ve kargo entegrasyonu dahil.',
};

const ecommercePackages: ServicePackage[] = [
    {
        name: 'Başlangıç',
        price: '3.000 ₺',
        oldPrice: '7.500 ₺',
        description: 'Yeni başlayanlar için temel mağaza.',
        features: [
            'E-Ticaret Yazılımı',
            'Ödeme Entegrasyonu',
            '20 Ürün Girişi',
            'Kargo Takip Sistemi',
        ],
        badge: 'En Uygun Fiyat',
    },
    {
        name: 'Profesyonel',
        price: '7.500 ₺',
        oldPrice: '15.000 ₺',
        description: 'Büyüyen e-ticaret markaları için.',
        features: [
            'Gelişmiş E-Ticaret Yazılımı',
            'Sınırsız Ürün',
            'Pazaryeri Entegrasyonu',
            'Kampanya Modülleri',
            'Blog Modülü',
            'SEO Altyapısı',
        ],
        isPopular: true,
        badge: 'En Popüler',
    },
    {
        name: 'Kurumsal',
        price: 'Teklif Al',
        description: 'Özel tasarım ve yazılım projeleri.',
        features: [
            'Özel UI/UX Tasarım',
            'Mobil Uygulama',
            'ERP Entegrasyonu',
            'B2B Altyapısı',
            '7/24 Destek',
        ],
        isCustom: true,
        badge: 'Size Özel',
    },
];

export default function EcommercePage() {
    return (
        <ServiceLayout
            title="Satış Odaklı, Güvenli ve Modern E-Ticaret Sitesi Kurulumu"
            description="Ürünlerinizi sadece dükkanınızdan değil, tüm Türkiye'ye (hatta dünyaya) satmaya başlayın. Pazaryerlerinin yüksek komisyonlarından kurtulun, kendi markanızı büyütün. Kullanıcı deneyimi (UX) yüksek, ödeme sistemleri entegre edilmiş, anahtar teslim e-ticaret siteleri kuruyoruz."
            serviceKey="ecommerce"
            packages={ecommercePackages}
        >
            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl font-bold mb-6">E-Ticaret Özellikleri</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl border border-slate-200">
                            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-purple-700 font-bold text-xl">1</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Kolay Yönetim Paneli</h3>
                            <p className="text-slate-600">Ürün eklemek, fiyat güncellemek ve sipariş takibi yapmak sosyal medya kullanmak kadar kolaydır. Mobil cihazınızdan mağazanızı yönetin.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200">
                            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-purple-700 font-bold text-xl">2</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Sanal POS Entegrasyonu</h3>
                            <p className="text-slate-600">iyzico, PayTR gibi ödeme kuruluşları ile tam entegre çalışır. Müşterileriniz kredi kartı ile güvenle taksitli alışveriş yapabilir.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200">
                            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-purple-700 font-bold text-xl">3</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Kargo Entegrasyonu</h3>
                            <p className="text-slate-600">Siparişlerinizi kargo firmalarının sistemine otomatik aktarın, barkod yazdırın ve müşteriye takip numarası gönderin.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200">
                            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-purple-700 font-bold text-xl">4</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Dönüşüm Odaklı Tasarım</h3>
                            <p className="text-slate-600">Sepette ürün bırakmayı azaltan, satın almayı teşvik eden sayfa yapıları ve akıllı öneri sistemleri.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                    <h2 className="text-2xl font-bold mb-4 text-slate-900">B2B ve B2C Çözümler</h2>
                    <p className="text-slate-700 leading-relaxed">
                        İster son tüketiciye (B2C), ister bayilerinize (B2B) satış yapın. Size özel fiyatlandırma, bayi grupları ve kampanya kurguları yapabileceğiniz esnek altyapılar sunuyoruz. İş modelinizi dijital dünyaya taşıyoruz.
                    </p>
                </section>
            </div>
        </ServiceLayout>
    );
}
