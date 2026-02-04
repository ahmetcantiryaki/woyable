import React from 'react';
import { ServiceLayout, ServicePackage } from '@/components/site/ServiceLayout';
import { Metadata } from 'next';
import { PenTool, Printer, Globe, Book } from 'lucide-react';

export const metadata: Metadata = {
    // ... keep metadata
    title: 'Kurumsal Kimlik Tasarımı ve Logo | Woyable',
    description: 'Markanızın imzasını tasarlıyoruz. Logo, kartvizit, antetli kağıt ve tüm kurumsal materyallerle profesyonel bir imaj yaratın.',
};

export default function BrandingPage() {
    // ... keep packages
    const packages: ServicePackage[] = [
        {
            name: 'Logo Tasarım Paketi',
            price: '7.500 TL',
            description: 'Yeni bir marka oluşturmak isteyenler için.',
            features: [
                '3 Farklı Logo Konsepti',
                'Sınırsız Revizyon Hakkı (Seçilen Konseptte)',
                'Vektörel Teslim (Ai, PDF, EPS)',
                'Sosyal Medya Profil Görselleri',
                'Renk Kodları ve Font Ailesi Teslimi'
            ]
        },
        {
            name: 'Kurumsal Kimlik Paketi',
            price: '15.000 TL',
            description: 'Markasını profesyonelleştirmek isteyenler için.',
            features: [
                'Her Şey Dahil Logo Tasarımı',
                'Kartvizit Tasarımı',
                'Antetli Kağıt & Zarf',
                'E-Posta İmzası',
                'Sunum Şablonu (PowerPoint)',
                'Dosya Klasörü Tasarımı'
            ],
            isPopular: true
        },
        {
            name: 'Marka & Yaratıcı Danışmanlık',
            price: 'İletişime Geçin',
            description: 'Kapsamlı marka inşası ve yönetimi.',
            features: [
                'Marka İsmi Bulma (Naming)',
                'Slogan ve Motto Çalışması',
                'Marka Hikayesi Oluşturma',
                'Kurumsal Kimlik Kitapçığı',
                'Ambalaj & Etiket Tasarımı',
                'Görsel İletişim Dili Stratejisi'
            ]
        }
    ];

    return (
        <ServiceLayout
            title="Kurumsal Kimlik Tasarımı"
            description="Markanız, müşterilerinizin zihninde bıraktığınız izdir. Profesyonel, akılda kalıcı ve güven veren bir görsel kimlik inşa ediyoruz."
            serviceKey="branding"
            packages={packages}
        >
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Güçlü Bir Marka İmajı Yaratın</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Kurumsal kimlik, sadece bir logo değil, markanızın duruşu, renkleri, tipografisi ve tüm iletişim dilinin bütünüdür.
                Woyable Creative ekibi olarak, markanızın DNA'sını analiz ediyor ve sizi rakiplerinizden ayıracak özgün tasarımlara imza atıyoruz.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-10">
                <div>
                    <div className="bg-purple-100 p-3 rounded-xl w-fit mb-4">
                        <PenTool className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Logo Tasarımı</h4>
                    <p className="text-slate-600">
                        Markanızın yüzü olan logoyu, altın oran ve modern tasarım ilkelerine sadık kalarak, her mecrada uygulanabilir formatlarda tasarlıyoruz.
                    </p>
                </div>
                <div>
                    <div className="bg-orange-100 p-3 rounded-xl w-fit mb-4">
                        <Printer className="h-6 w-6 text-orange-600" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Basılı Materyaller</h4>
                    <p className="text-slate-600">
                        Kartvizitten faturaya, antetli kağıttan promosyon ürünlerine kadar şirketinizin kullandığı tüm materyallerde dil birliği sağlıyoruz.
                    </p>
                </div>
                <div>
                    <div className="bg-blue-100 p-3 rounded-xl w-fit mb-4">
                        <Globe className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Dijital Kimlik</h4>
                    <p className="text-slate-600">
                        Web sitenizden sosyal medya hesaplarınıza, e-posta imzalarınıza kadar dijital dünyadaki görünümünüzü kurumsal standartlara oturtuyoruz.
                    </p>
                </div>
                <div>
                    <div className="bg-green-100 p-3 rounded-xl w-fit mb-4">
                        <Book className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Marka Kılavuzu</h4>
                    <p className="text-slate-600">
                        Markanızın yanlış kullanılmasını önlemek için, logonuzun, renklerinizin ve fontlarınızın nasıl kullanılacağını anlatan detaylı bir rehber hazırlıyoruz.
                    </p>
                </div>
            </div>

            <h3>Neler Tasarlıyoruz?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-6">
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <span className="block font-semibold text-slate-900">Logo & Amblem</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <span className="block font-semibold text-slate-900">Kartvizit</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <span className="block font-semibold text-slate-900">Katalog & Broşür</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <span className="block font-semibold text-slate-900">Promosyon Ürünleri</span>
                </div>
            </div>
        </ServiceLayout>
    );
}
