import React from 'react';
import { ServiceLayout, ServicePackage } from '@/components/site/ServiceLayout';
import { Metadata } from 'next';
import { Cloud, TabletSmartphone, Link, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
    // ... keep metadata
    title: 'Özel Yazılım Çözümleri ve CRM Geliştirme | Woyable',
    description: 'İş süreçlerinizi dijitalleştirin. İhtiyacınıza özel web ve mobil yazılımlar, CRM, ERP entegrasyonları ve otomasyon sistemleri.',
};

export default function SoftwareSolutionsPage() {
    // Yazılım projeleri genelde paketlenmesi zor işlerdir, o yüzden "İletişime Geçin" ağırlıklı olacak.
    const packages: ServicePackage[] = [
        {
            name: 'Özel CRM Yazılımı',
            price: 'İletişime Geçin',
            description: 'Müşteri ilişkilerinizi tek merkezden yönetin.',
            features: [
                'Müşteri Veritabanı Yönetimi',
                'Satış Süreç Takibi (Pipeline)',
                'Teklif ve Fatura Oluşturma',
                'Hatırlatıcılar ve Takvim',
                'Mobil Uyumlu Arayüz',
                'Size Özel Raporlama Ekranları'
            ]
        },
        {
            name: 'Mobil Uygulama (App)',
            price: 'İletişime Geçin',
            description: 'iOS ve Android dünyasında yerinizi alın.',
            features: [
                'React Native ile Cross-Platform Geliştirme',
                'Kullanıcı Dostu UI/UX',
                'Bildirim (Push Notification) Sistemi',
                'Konum Tabanlı Servisler',
                'Mağaza (App Store/Play Store) Yayınlama',
                'Yönetim Paneli Entegrasyonu'
            ],
            isPopular: true
        },
        {
            name: 'B2B Bayi Portalı',
            price: 'İletişime Geçin',
            description: 'Bayilerinizle ticaretinizi dijitale taşıyın.',
            features: [
                'Online Sipariş ve Ödeme',
                'Bayiye Özel İskonto Tanımlama',
                'Stok Entegrasyonu (Logo/Mikro vb.)',
                'Cari Hesap Ekstresi Görüntüleme',
                'Toplu Sipariş Girişi',
                'Kampanya Yönetimi'
            ]
        }
    ];

    return (
        <ServiceLayout
            title="Özel Yazılım Çözümleri"
            description="Paket programlar ihtiyacınızı karşılamıyorsa, size özel terzi usulü yazılımlar geliştiriyoruz. İş süreçlerinizi hızlandırın, maliyetlerinizi düşürün."
            serviceKey="custom-dev"
            packages={packages}
        >
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Teknolojiyle İşinize Değer Katın</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Her işletmenin iş yapış şekli farklıdır. Hazır yazılımlara ayak uydurmaya çalışmak yerine, yazılımın sizin işinize ayak uydurmasını sağlıyoruz.
                Analizden geliştirmeye, testten canlıya geçişe kadar tüm süreçlerde profesyonel ekibimizle yanınızdayız.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-10">
                <div>
                    <div className="bg-cyan-100 p-3 rounded-xl w-fit mb-4">
                        <Cloud className="h-6 w-6 text-cyan-600" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Web Tabanlı Uygulamalar</h4>
                    <p className="text-slate-600">
                        Kurulum gerektirmeyen, internetin olduğu her yerden erişilebilen, güvenli ve hızlı bulut tabanlı iş yazılımları geliştiriyoruz.
                    </p>
                </div>
                <div>
                    <div className="bg-indigo-100 p-3 rounded-xl w-fit mb-4">
                        <TabletSmartphone className="h-6 w-6 text-indigo-600" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Mobil Uygulama Geliştirme</h4>
                    <p className="text-slate-600">
                        Son kullanıcıya ulaşmak veya saha personelinizi yönetmek için iOS ve Android ortamlarında çalışan native performansında uygulamalar.
                    </p>
                </div>
                <div>
                    <div className="bg-red-100 p-3 rounded-xl w-fit mb-4">
                        <Link className="h-6 w-6 text-red-600" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Entegrasyon Çözümleri</h4>
                    <p className="text-slate-600">
                        Farklı yazılımlarınızı (Muhasebe, E-Ticaret, CRM) birbirine bağlıyor, veri girişini otomatize ederek insan hatasını sıfıra indiriyoruz.
                    </p>
                </div>
                <div>
                    <div className="bg-teal-100 p-3 rounded-xl w-fit mb-4">
                        <BarChart3 className="h-6 w-6 text-teal-600" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Veri Analizi ve Raporlama</h4>
                    <p className="text-slate-600">
                        Büyük verinizi anlamlı bilgilere dönüştüren, karar almanızı kolaylaştıran interaktif dashboard ekranları tasarlıyoruz.
                    </p>
                </div>
            </div>

            <h3>Kullandığımız Teknolojiler</h3>
            <p className="mb-4">
                Projelerimizde dünya standartlarında, performansı kanıtlanmış modern teknolojileri kullanıyoruz.
            </p>
            <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'React Native', 'Flutter', 'AWS', 'Supabase'].map((tech) => (
                    <span key={tech} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                    </span>
                ))}
            </div>
        </ServiceLayout>
    );
}
