import React from 'react';
import { ServiceLayout, ServicePackage } from '@/components/site/ServiceLayout';
import { Metadata } from 'next';
import { CreditCard, Package, Store, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
    title: 'E-Ticaret Paketleri ve Yazılım Çözümleri | Woyable',
    description: 'Satışlarınızı internete taşıyın. Güvenli ödeme altyapısı, kolay yönetim paneli ve SEO uyumlu e-ticaret siteleri kuruyoruz.',
};

export default function EcommercePage() {
    const packages: ServicePackage[] = [
        {
            name: 'E-Ticaret Başlangıç',
            price: '30.000 TL',
            description: 'Butik satıcılar ve yeni girişimler için.',
            features: [
                'Hazır Modern Tasarım Şablonları',
                'Sınırsız Kategori',
                '1000 Ürün Kapasitesi',
                'İyzico / Stripe Ödeme Entegrasyonu',
                'Blog Modülü',
                'Temel SEO Ayarları'
            ]
        },
        {
            name: 'E-Ticaret Profesyonel',
            price: '50.000 TL',
            description: 'Ciddi satış hacmi hedefleyen işletmeler için.',
            features: [
                'Özel Arayüz Tasarımı (UI/UX)',
                'Sınırsız Ürün',
                'Pazaryeri Entegrasyonları (Trendyol, Hepsiburada vb.)',
                'Gelişmiş Kargo Entegrasyonu',
                'B2B / B2C Altyapısı',
                'Detaylı Raporlama ve Analitik',
                'Hediye Çeki / Kampanya Modülleri'
            ],
            isPopular: true
        },
        {
            name: 'Özel E-Ticaret Projesi',
            price: 'İletişime Geçin',
            description: 'Tamamen size özel, yüksek ölçekli projeler.',
            features: [
                'Sıfırdan Kodlanan Özel Altyapı',
                'Mobil Uygulama (iOS & Android)',
                'ERP / Muhasebe Entegrasyonları (Logo, Mikro vb.)',
                'Yüksek Trafik Mimarisi',
                'Özel Depo Yönetim Sistemleri (WMS)',
                'SLA Destek Anlaşması'
            ]
        }
    ];

    return (
        <ServiceLayout
            title="E-Ticaret Çözümleri"
            description="Sadece bir web sitesi değil, 7/24 satış yapan tam donanımlı bir dijital mağaza inşa ediyoruz. Güvenli, hızlı ve dönüşüm odaklı."
            serviceKey="ecommerce"
            packages={packages}
        >
            <h2 className="text-3xl font-bold mb-6 text-slate-900">İnternetten Satış Yapmaya Başlayın</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                E-ticaret hacmi her geçen gün büyüyor. Fiziksel mağazanızı dijital dünyaya taşımak veya tamamen yeni bir online girişim başlatmak istiyorsanız,
                doğru teknolojilerle yanınızdayız. Woyable e-ticaret çözümleri, müşterilerinize güvenli ve akıcı bir alışveriş deneyimi sunmanızı sağlar.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-10">
                <div>
                    <div className="bg-green-100 p-3 rounded-xl w-fit mb-4">
                        <CreditCard className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Güvenli Ödeme Altyapısı</h4>
                    <p className="text-slate-600">
                        Müşterilerinizin kredi kartı bilgilerini güvenle girebileceği, 256-bit SSL sertifikalı ve 3D Secure uyumlu ödeme sistemleri kuruyoruz.
                    </p>
                </div>
                <div>
                    <div className="bg-blue-100 p-3 rounded-xl w-fit mb-4">
                        <Package className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Kolay Ürün & Stok Yönetimi</h4>
                    <p className="text-slate-600">
                        Karmaşık panellerle uğraşmayın. Ürün eklemek, stok güncellemek ve siparişleri takip etmek hiç bu kadar kolay olmamıştı.
                    </p>
                </div>
                <div>
                    <div className="bg-orange-100 p-3 rounded-xl w-fit mb-4">
                        <Store className="h-6 w-6 text-orange-600" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Pazaryeri Entegrasyonları</h4>
                    <p className="text-slate-600">
                        Sadece kendi sitenizde değil, Trendyol, Hepsiburada, N11, Amazon gibi dev platformlardaki mağazalarınızı da tek bir panelden yönetin.
                    </p>
                </div>
                <div>
                    <div className="bg-purple-100 p-3 rounded-xl w-fit mb-4">
                        <TrendingUp className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Dönüşüm Odaklı Tasarım</h4>
                    <p className="text-slate-600">
                        Sepette terk etme oranlarını düşüren, kullanıcıyı satın almaya teşvik eden UX (Kullanıcı Deneyimi) stratejileri uyguluyoruz.
                    </p>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-slate-900 mt-12">Teknik Özellikler</h2>
            <ul className="grid md:grid-cols-2 gap-4 text-slate-700 mb-8 list-inside list-disc">
                <li>Çoklu Para Birimi & Dil Desteği</li>
                <li>Gelişmiş Site İçi Arama Motoru</li>
                <li>Üyelikli / Üyeliksiz Alışveriş</li>
                <li>Sosyal Medya Mağaza Entegrasyonu</li>
                <li>Otomatik E-Fatura Oluşturma</li>
                <li>Dinamik Kargo Fiyatlandırması</li>
            </ul>
        </ServiceLayout>
    );
}
