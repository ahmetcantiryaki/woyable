import React from 'react';
import { ServiceLayout, ServicePackage } from '@/components/site/ServiceLayout';
import { Metadata } from 'next';
import { Smartphone, Search, Zap, LayoutDashboard } from 'lucide-react';


export const metadata: Metadata = {
    title: 'Kurumsal Web Sitesi Tasarımı | Woyable',
    description: 'Markanızı en iyi yansıtan, modern, hızlı ve SEO uyumlu kurumsal web tasarım çözümleri. İşletmenizin dijital yüzünü profesyonelleştirin.',
};

export default function CorporateWebPage() {
    const packages: ServicePackage[] = [
        {
            name: 'Başlangıç Paketi',
            price: '15.000 TL',
            description: 'Küçük işletmeler ve kişisel markalar için ideal.',
            features: [
                '5 Sayfaya Kadar Tasarım',
                'Mobil Uyumlu (Responsive)',
                'Temel SEO Ayarları',
                'İletişim Formu',
                'Hosting & Domain (1 Yıl)',
                'SSL Sertifikası'
            ]
        },
        {
            name: 'Kurumsal Profesyonel',
            price: '25.000 TL',
            description: 'Büyüyen firmalar için kapsamlı kurumsal çözüm.',
            features: [
                '10+ Sayfa Tasarım',
                'Özel UI/UX Tasarım',
                'Gelişmiş SEO Optimizasyonu',
                'Blog / Haber Modülü',
                'Çoklu Dil Desteği (Altyapı)',
                'Hızlı Açılış Performansı',
                'Kurumsal E-Posta Kurulumu'
            ],
            isPopular: true
        },
        {
            name: 'Premium ÖZEL',
            price: 'İletişime Geçin',
            description: 'Büyük ölçekli projeler ve özel ihtiyaçlar için.',
            features: [
                'Tamamen Özel Kodlama & Tasarım',
                'CRM / ERP Entegrasyonları',
                'Özel Yönetim Paneli',
                'İleri Seviye Güvenlik',
                '7/24 Teknik Destek',
                'Performans Garantisi'
            ]
        }
    ];

    return (
        <ServiceLayout
            title="Kurumsal Web Sitesi Tasarımı"
            description="Markanızın prestijini dijital dünyada en üst seviyeye taşıyın. Modern, kullanıcı dostu ve arama motorlarıyla tam uyumlu web siteleri tasarlıyoruz."
            serviceKey="web-design"
            packages={packages}
        >
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Neden Profesyonel Bir Web Sitesine İhtiyacınız Var?</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Dijital çağda web siteniz, işletmenizin 7/24 açık olan şubesidir. Potansiyel müşterilerinizin sizinle ilk temas kurduğu nokta genellikle web sitenizdir.
                Woyable olarak, sadece görsel açıdan etkileyici değil, aynı zamanda dönüşüm odaklı ve teknik olarak kusursuz web siteleri oluşturuyoruz.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-10">
                <div>
                    <h4 className="text-xl font-semibold mb-2">Mobil Uyumlu & Responsive</h4>
                    <p className="text-slate-600">
                        Ziyaretçilerinizin büyük bir kısmı mobil cihazlardan geliyor. Sitelerimiz tüm ekran boyutlarında kusursuz çalışacak şekilde tasarlanmaktadır.
                    </p>
                </div>
                <div>
                    <h4 className="text-xl font-semibold mb-2">SEO Dostu Altyapı</h4>
                    <p className="text-slate-600">
                        Sadece güzel görünmek yetmez, bulunabilir olmak da gerekir. Google standartlarına uygun kodlama ile arama sonuçlarında üst sıraları hedefliyoruz.
                    </p>
                </div>
                <div>
                    <h4 className="text-xl font-semibold mb-2">Hız & Performans</h4>
                    <p className="text-slate-600">
                        Yavaş açılan siteler müşteri kaybettirir. Optimize edilmiş görseller ve clean-code yapısı ile siteniz şimşek hızında çalışır.
                    </p>
                </div>
                <div>
                    <h4 className="text-xl font-semibold mb-2">Kolay Yönetim Paneli</h4>
                    <p className="text-slate-600">
                        Kod bilmenize gerek kalmadan sitenizin içeriğini güncelleyebileceğiniz, kullanımı kolay yönetim panelleri sunuyoruz.
                    </p>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-slate-900 mt-12">Süreç Nasıl İşliyor?</h2>
            <ol>
                <li><strong>Analiz & Planlama:</strong> İhtiyaçlarınızı dinliyor, sektörünüzü analiz ediyor ve size en uygun yapıyı kurguluyoruz.</li>
                <li><strong>Tasarım:</strong> Marka kimliğinize uygun, modern ve estetik arayüz tasarımlarını hazırlayıp onayınıza sunuyoruz.</li>
                <li><strong>Kodlama & Geliştirme:</strong> Tasarımı en güncel teknolojilerle (React, Next.js vb.) çalışan bir web sitesine dönüştürüyoruz.</li>
                <li><strong>Test & Yayına Alma:</strong> Tüm fonksiyonları test ediyor, gerekli optimizasyonları yapıyor ve sitenizi yayına alıyoruz.</li>
            </ol>
        </ServiceLayout>
    );
}
