import React from 'react';
import { ServiceLayout } from '@/components/site/ServiceLayout';
import { Share2, Megaphone, BarChart, Users } from 'lucide-react';

export const metadata = {
    title: 'Sosyal Medya Yönetimi ve Reklam | Woyable',
    description: 'Sosyal medya yönetimi ve performans odaklı reklam çözümleri. Instagram, Facebook ve Google Ads ile cironuzu artırın.',
};

export default function SocialMediaPage() {
    return (
        <ServiceLayout
            title="Sosyal Medya Yönetimi ve Performans Odaklı Reklam Çözümleri"
            description="Takipçi sayısından daha önemlisi, sadık müşterilerdir. Instagram, Facebook, LinkedIn ve Google platformlarında markanızın sesini duyuruyoruz. Sadece 'post paylaşmak' değil; stratejik içerik planlaması ve bütçenizi en verimli kullanan reklam kampanyaları ile cironuzu artırmayı hedefliyoruz."
            serviceKey="social-media"
            packages={[
                {
                    name: "Başlangıç",
                    price: "3.000 ₺",
                    oldPrice: "7.500 ₺",
                    description: "Sosyal medyada ilk adım.",
                    features: ["8 Post/Ay", "1 Platform", "Temel İçerik Planı", "Aylık Rapor"],
                    badge: "En Uygun Fiyat"
                },
                {
                    name: "Profesyonel",
                    price: "7.500 ₺",
                    oldPrice: "15.000 ₺",
                    description: "Aktif sosyal medya yönetimi.",
                    features: ["16 Post/Ay", "3 Platform", "Story Tasarımları", "Reklam Yönetimi", "Topluluk Yönetimi", "Detaylı Raporlama"],
                    isPopular: true,
                    badge: "En Popüler"
                },
                {
                    name: "Kurumsal",
                    price: "Teklif Al",
                    description: "Tam kapsamlı dijital pazarlama.",
                    features: ["Sınırsız İçerik", "Tüm Platformlar", "Video Prodüksiyon", "Influencer İşbirlikleri", "7/24 Destek"],
                    isCustom: true,
                    badge: "Size Özel"
                }
            ]}
        >
            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl font-bold mb-6">Hizmet Kapsamı</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-200 transition-colors">
                            <div className="bg-pink-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Share2 className="text-pink-600 w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">İçerik Yönetimi</h3>
                            <p className="text-slate-600">Markanıza uygun görsel tasarım, metin yazımı (copywriting) ve düzenli paylaşım takvimi.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-200 transition-colors">
                            <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Megaphone className="text-blue-600 w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Google Ads (Adwords)</h3>
                            <p className="text-slate-600">"Hemen ara" odaklı arama ağı reklamları ile sıcak müşteriye ulaşın.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-200 transition-colors">
                            <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <BarChart className="text-indigo-600 w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Meta Reklamları</h3>
                            <p className="text-slate-600">Instagram/Facebook üzerinde hedef kitlenizin yaşına, konumuna ve ilgisine göre nokta atışı sponsorlu reklamlar.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-200 transition-colors">
                            <div className="bg-orange-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Users className="text-orange-600 w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Topluluk Yönetimi</h3>
                            <p className="text-slate-600">Gelen yorum ve mesajların kurumsal dille yanıtlanması.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Stratejimiz</h2>
                    <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 rounded-2xl">
                        <p className="text-lg leading-relaxed opacity-90">
                            Rastgele reklam vermiyoruz. Önce hedef kitle analizi yapıyor, A/B testleri ile en düşük maliyetle en yüksek dönüşümü (müşteri/satış) almanızı sağlıyoruz.
                        </p>
                    </div>
                </section>
            </div>
        </ServiceLayout>
    );
}
