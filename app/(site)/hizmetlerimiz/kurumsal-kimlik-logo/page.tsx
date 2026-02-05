import React from 'react';
import { ServiceLayout } from '@/components/site/ServiceLayout';
import { Palette, FileText, Monitor, Book } from 'lucide-react';

export const metadata = {
    title: 'Kurumsal Kimlik ve Logo Tasarımı | Woyable',
    description: 'Markanızın imzası: Profesyonel logo tasarımı ve kurumsal kimlik hizmetleri. Akılda kalıcı ve güven veren bir marka kimliği inşa ediyoruz.',
};

export default function BrandingPage() {
    return (
        <ServiceLayout
            title="Markanızın İmzası: Profesyonel Logo Tasarımı ve Kurumsal Kimlik"
            description="İyi bir hizmet veriyor olabilirsiniz, peki müşterileriniz sizi hatırlıyor mu? Kurumsal kimlik, logodan ibaret değildir; markanızın duruşu, rengi ve ses tonudur. Firmanıza, sektörünüze ve hedef kitlenize uygun, akılda kalıcı bir marka kimliği inşa ediyoruz."
            serviceKey="branding"
            packages={[
                {
                    name: "Başlangıç",
                    price: "3.000 ₺",
                    oldPrice: "7.500 ₺",
                    description: "Temel marka kimliği.",
                    features: ["Logo Tasarımı", "Kartvizit", "Sosyal Medya Profili", "2 Revizyon"],
                    badge: "En Uygun Fiyat"
                },
                {
                    name: "Profesyonel",
                    price: "7.500 ₺",
                    oldPrice: "15.000 ₺",
                    description: "Kapsamlı kurumsal kimlik.",
                    features: ["Logo + Alternatifler", "Kartvizit & Antetli", "Sosyal Medya Kiti", "E-Posta İmzası", "Marka Renk Paleti", "Sınırsız Revizyon"],
                    isPopular: true,
                    badge: "En Popüler"
                },
                {
                    name: "Kurumsal",
                    price: "Teklif Al",
                    description: "Tam marka paketi.",
                    features: ["Full Kimlik Seti", "Marka Kitapçığı", "Ambalaj Tasarımı", "Araç Giydirme", "Tüm Dijital Varlıklar"],
                    isCustom: true,
                    badge: "Size Özel"
                }
            ]}
        >
            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl font-bold mb-6">Neler Tasarlıyoruz?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        <div className="flex gap-4 items-start">
                            <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                                <Palette className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">Logo Tasarımı</h3>
                                <p className="text-slate-600 text-sm">Vektörel, ölçeklenebilir, modern ve hikayesi olan özgün logolar.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="bg-purple-50 p-3 rounded-lg text-purple-600">
                                <FileText className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">Kurumsal Evraklar</h3>
                                <p className="text-slate-600 text-sm">Kartvizit, antetli kağıt, diplomat zarf, fatura şablonları.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="bg-green-50 p-3 rounded-lg text-green-600">
                                <Monitor className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">Dijital Kimlik</h3>
                                <p className="text-slate-600 text-sm">E-posta imzaları, sosyal medya profil resimleri ve kapak tasarımları.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="bg-orange-50 p-3 rounded-lg text-orange-600">
                                <Book className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">Marka Kitapçığı</h3>
                                <p className="text-slate-600 text-sm">Logonuzun nerede, nasıl kullanılacağını gösteren kullanım kılavuzu.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                    <h2 className="text-2xl font-bold mb-4">Neden Önemli?</h2>
                    <p className="text-slate-700 leading-relaxed">
                        Tutarlı bir marka görüntüsü, müşteride "Bu firma işine özen gösteriyor" algısı yaratır. Merdiven altı işletmelerden ayrışmanın en etkili yolu, profesyonel bir görünüme sahip olmaktır.
                    </p>
                </section>
            </div>
        </ServiceLayout>
    );
}
