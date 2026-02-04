import React from 'react';
import { ServiceLayout, ServicePackage } from '@/components/site/ServiceLayout';
import { Metadata } from 'next';
import { Printer, Gift, Tent, Car } from 'lucide-react';

export const metadata: Metadata = {
    // ... keep metadata
    title: 'Baskı ve Etkinlik Hizmetleri | Woyable',
    description: 'Fuarlar, lansmanlar ve kurumsal etkinlikler için yaratıcı baskı ve organizasyon çözümleri. Markanızı her mecrada görünür kılın.',
};

export default function PrintEventPage() {
    const packages: ServicePackage[] = [
        {
            name: 'Fuar & Etkinlik Kiti',
            price: 'İletişime Geçin',
            description: 'Fuarlarda dikkat çekmek isteyenler için.',
            features: [
                'Roll-up Tasarımı ve Baskısı',
                'Örümcek Stand Tasarımı',
                'Broşür ve Katalog Baskısı',
                'Promosyon Ürünleri (Kalem, Defter vb.)',
                'Personel Kıyafet Baskısı'
            ]
        },
        {
            name: 'Kurumsal Promosyon',
            price: 'İletişime Geçin',
            description: 'Müşterilerinize kalıcı hediyeler verin.',
            features: [
                'Yeni Yıl Setleri',
                'Hoşgeldin Kitleri (Onboarding)',
                'VIP Hediye Setleri',
                'Teknolojik Promosyon Ürünleri',
                'Özel Kutu Tasarımı ve Üretimi'
            ],
            isPopular: true
        },
        {
            name: 'Outdoor Reklam',
            price: 'İletişime Geçin',
            description: 'Şehrin her yerinde görünür olun.',
            features: [
                'Billboard Tasarımı',
                'Araç Giydirme',
                'Cephe Tabelası',
                'Vinil ve Mesh Baskı',
                'Durak Raket Reklamları'
            ]
        }
    ];

    return (
        <ServiceLayout
            title="Baskı Ver Etkinlik Çözümleri"
            description="Dijitalde olduğu kadar fiziksel dünyada da markanızı en iyi şekilde temsil ediyoruz. Kaliteli baskı, yaratıcı tasarım ve kusursuz operasyon."
            serviceKey="printing"
            packages={packages}
        >
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Markanızı Elle Tutulur Hale Getirin</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Dijital pazarlama ne kadar güçlü olsa da, müşterilerinize dokunabileceğiniz alanların etkisi yadsınamaz.
                Woyable olarak, fuarlardan lansmanlara, promosyon ürünlerinden dış mekan reklamlara kadar geniş bir yelpazede baskı ve etkinlik çözümleri sunuyoruz.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-10">
                <div>
                    <div className="bg-orange-100 p-3 rounded-xl w-fit mb-4">
                        <Printer className="h-6 w-6 text-orange-600" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Matbaa ve Baskı Hizmetleri</h4>
                    <p className="text-slate-600">
                        Katalog, broşür, dergi, afiş ve kurumsal evraklarınızı yüksek baskı kalitesiyle ve tam zamanında teslim ediyoruz.
                    </p>
                </div>
                <div>
                    <div className="bg-pink-100 p-3 rounded-xl w-fit mb-4">
                        <Gift className="h-6 w-6 text-pink-600" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Promosyon Ürünleri</h4>
                    <p className="text-slate-600">
                        Sıradan promosyon malzemeleri yerine, müşterilerinizin kullanmaktan keyif alacağı, markanıza değer katan yaratıcı ürünler tasarlıyoruz.
                    </p>
                </div>
                <div>
                    <div className="bg-blue-100 p-3 rounded-xl w-fit mb-4">
                        <Tent className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Etkinlik ve Fuar Çözümleri</h4>
                    <p className="text-slate-600">
                        Fuarlarda stand tasarımından kurulumuna, etkinliklerde sahne giydirmesinden ikramlıklara kadar tüm operasyonel süreci yönetiyoruz.
                    </p>
                </div>
                <div>
                    <div className="bg-green-100 p-3 rounded-xl w-fit mb-4">
                        <Car className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Tabela ve Araç Giydirme</h4>
                    <p className="text-slate-600">
                        Ofisinizin tabelasından saha araçlarınıza kadar kurumsal kimliğinizi her yere taşıyoruz. Uzun ömürlü ve dikkat çekici uygulamalar yapıyoruz.
                    </p>
                </div>
            </div>

            <h3>Neden Biz?</h3>
            <ul className="list-disc pl-5 space-y-2 mb-8 text-slate-700">
                <li><strong>Tasarım + Üretim:</strong> Sadece basmıyoruz, önce marka kimliğinize uygun olarak tasarlıyoruz.</li>
                <li><strong>Kalite Kontrol:</strong> Renk doğruluğu ve malzeme kalitesinden ödün vermiyoruz.</li>
                <li><strong>Zamanında Teslimat:</strong> Etkinlik tarihlerinin ne kadar kritik olduğunu biliyor, terminlere sadık kalıyoruz.</li>
                <li><strong>Tek Noktadan Çözüm:</strong> Tüm baskı ve prodüksiyon ihtiyaçlarınızı tek bir muhatapla çözmenin konforunu yaşayın.</li>
            </ul>
        </ServiceLayout>
    );
}
