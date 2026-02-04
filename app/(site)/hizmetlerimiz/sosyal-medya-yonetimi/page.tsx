import React from 'react';
import { ServiceLayout, ServicePackage } from '@/components/site/ServiceLayout';
import { Metadata } from 'next';
import { Map as MapIcon, Palette, Megaphone, Users } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Sosyal Medya Yönetimi ve Danışmanlığı | Woyable',
    description: 'Markanızın sosyal medyadaki sesini güçlendirin. Profesyonel içerik üretimi, hesap yönetimi ve reklam stratejileri ile etkileşiminizi artırın.',
};

export default function SocialMediaPage() {
    const packages: ServicePackage[] = [
        {
            name: 'Start Paketi',
            price: '10.000 TL',
            description: 'Sosyal medyaya yeni başlayan markalar için.',
            features: [
                'Aylık 8 Adet Post Tasarımı',
                '4 Adet Story Tasarımı',
                'Hesap Kurulumu & Optimizasyonu',
                'Temel Metin Yazarlığı',
                'Aylık Raporlama'
            ]
        },
        {
            name: 'Grow (Büyüme) Paketi',
            price: '20.000 TL',
            description: 'Aktif ve etkileşim odaklı yönetim.',
            features: [
                'Aylık 15 Post Tasarımı',
                '10 Story + 2 Reels Kurgusu',
                'Moderasyon (Yorum & Mesaj Cevaplama)',
                'Reklam Yönetimi (Bütçe Hariç)',
                'Rakip Analizi',
                'Detaylı İstatistik Raporu'
            ],
            isPopular: true
        },
        {
            name: 'Influencer & 360°',
            price: 'İletişime Geçin',
            description: 'Tam kapsamlı dijital iletişim yönetimi.',
            features: [
                'Günlük İçerik Paylaşımı',
                'Profesyonel Video Prodüksiyonu (Reels/TikTok)',
                'Influencer İşbirlikleri Yönetimi',
                'Kriz Yönetimi',
                'Özel Kampanya Kurguları',
                '7/24 Dijital Danışmanlık'
            ]
        }
    ];

    return (
        <ServiceLayout
            title="Sosyal Medya Yönetimi"
            description="Markanızın hikayesini doğru kitleye, en etkili şekilde anlatıyoruz. Takipçi değil, sadık müşteriler kazanmanızı sağlıyoruz."
            serviceKey="social"
            packages={packages}
        >
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Sosyal Medyada Neden Profesyonel Olmalısınız?</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Günümüzde milyarlarca insan sosyal medya kullanıyor. Markanızın burada var olması yetmez, doğru stratejiyle var olması gerekir.
                Woyable ekibi olarak, markanızın karakterine uygun bir dil ve görsel dünya oluşturuyor, hedef kitlenizle duygusal bir bağ kurmanızı sağlıyoruz.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-10">
                <div>
                    <div className="bg-indigo-100 p-3 rounded-xl w-fit mb-4">
                        <Map className="h-6 w-6 text-indigo-600" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Stratejik Planlama</h4>
                    <p className="text-slate-600">
                        Rastgele paylaşımlar değil, hedeflerinize (satış, bilinirlik, trafik) uygun aylık içerik takvimleri oluşturuyoruz.
                    </p>
                </div>
                <div>
                    <div className="bg-pink-100 p-3 rounded-xl w-fit mb-4">
                        <Palette className="h-6 w-6 text-pink-600" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Yaratıcı Tasarım & İçerik</h4>
                    <p className="text-slate-600">
                        Scroll durduran tasarımlar ve harekete geçiren metinlerle markanızın fark edilmesini sağlıyoruz. Trendleri yakından takip ediyoruz.
                    </p>
                </div>
                <div>
                    <div className="bg-blue-100 p-3 rounded-xl w-fit mb-4">
                        <Megaphone className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Reklam Yönetimi</h4>
                    <p className="text-slate-600">
                        Bütçenizi en verimli şekilde kullanarak, nokta atışı hedeflemelerle potansiyel müşterilerinize ulaşıyoruz. (Facebook & Instagram Ads)
                    </p>
                </div>
                <div>
                    <div className="bg-yellow-100 p-3 rounded-xl w-fit mb-4">
                        <Users className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Topluluk Yönetimi</h4>
                    <p className="text-slate-600">
                        Takipçilerinizle sürekli iletişimde kalarak marka sadakatini artırıyor, soruları ve talepleri markanız adına profesyonelce yanıtlıyoruz.
                    </p>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-slate-900 mt-12">Yönettiğimiz Platformlar</h2>
            <ul className="list-disc pl-5 space-y-2 mb-8 text-slate-700">
                <li><strong>Instagram:</strong> Görsel vitrininiz ve marka imajınız.</li>
                <li><strong>Facebook:</strong> Geniş kitlelere ulaşım ve detaylı reklam hedeflemeleri.</li>
                <li><strong>LinkedIn:</strong> B2B ilişkiler ve kurumsal itibar yönetimi.</li>
                <li><strong>TikTok & Youtube Shorts:</strong> Viral erişim ve video içerik stratejileri.</li>
                <li><strong>Twitter (X):</strong> Anlık iletişim ve gündem yönetimi.</li>
            </ul>
        </ServiceLayout>
    );
}
