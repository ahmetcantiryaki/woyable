import React from 'react';
import { ServiceLayout } from '@/components/site/ServiceLayout';
import { Database, TrendingUp, FileText, MapPin } from 'lucide-react';

export const metadata = {
    title: 'Özel Yazılım ve CRM Çözümleri | Woyable',
    description: 'İş süreçlerinizi dijitalleştirin. Özel CRM, stok takip ve web tabanlı yazılım çözümleri ile verimliliğinizi artırın.',
};

export default function CustomSoftwarePage() {
    return (
        <ServiceLayout
            title="İş Süreçlerinizi Dijitalleştirin: Özel CRM ve Web Tabanlı Yazılımlar"
            description="Hazır paket programlar işinize uymuyor mu? İşletmenizin kendine has akışına tam uyum sağlayan, web tabanlı özel yazılımlar geliştiriyoruz. Excel dosyaları arasında kaybolmayın; müşterilerinizi, stoklarınızı, personelinizi ve finansal verilerinizi tek bir panelden, dilediğiniz yerden yönetin."
            serviceKey="software"
            packages={[
                {
                    name: "Başlangıç",
                    price: "3.000 ₺",
                    oldPrice: "7.500 ₺",
                    description: "Temel modül çözümü.",
                    features: ["1 Modül", "3 Kullanıcı", "Bulut Erişim", "Temel Raporlama"],
                    badge: "En Uygun Fiyat"
                },
                {
                    name: "Profesyonel",
                    price: "7.500 ₺",
                    oldPrice: "15.000 ₺",
                    description: "Kapsamlı yazılım çözümü.",
                    features: ["3 Modül", "10 Kullanıcı", "Mobil Erişim", "Gelişmiş Raporlama", "API Entegrasyonu", "Eğitim Desteği"],
                    isPopular: true,
                    badge: "En Popüler"
                },
                {
                    name: "Kurumsal",
                    price: "Teklif Al",
                    description: "Size özel yazılım projesi.",
                    features: ["Sınırsız Modül", "Sınırsız Kullanıcı", "Özel Geliştirme", "7/24 Destek", "SLA Garanti"],
                    isCustom: true,
                    badge: "Size Özel"
                }
            ]}
        >
            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl font-bold mb-6">Sunduğumuz Çözümler</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex gap-4">
                            <div className="shrink-0 bg-blue-100 p-3 rounded-xl h-fit">
                                <Users className="w-6 h-6 text-blue-700" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">CRM (Müşteri İlişkileri)</h3>
                                <p className="text-slate-600">Müşteri datası, görüşme geçmişi, teklif takibi ve hatırlatmalar.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="shrink-0 bg-green-100 p-3 rounded-xl h-fit">
                                <Database className="w-6 h-6 text-green-700" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Stok ve Depo Takip</h3>
                                <p className="text-slate-600">Ürün giriş-çıkışları, kritik stok uyarıları ve barkod sistem entegrasyonu.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="shrink-0 bg-purple-100 p-3 rounded-xl h-fit">
                                <FileText className="w-6 h-6 text-purple-700" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Teklif ve Sipariş</h3>
                                <p className="text-slate-600">Saniyeler içinde PDF teklif oluşturma ve sipariş durum takibi.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="shrink-0 bg-orange-100 p-3 rounded-xl h-fit">
                                <MapPin className="w-6 h-6 text-orange-700" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Personel ve Saha</h3>
                                <p className="text-slate-600">Saha ekibinin konumu, yaptığı işler ve raporlamalar.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Teknik Özellikler</h2>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-blue-500" />
                                <span className="text-slate-700">Bulut tabanlıdır (Kurulum gerektirmez, her yerden erişim)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-blue-500" />
                                <span className="text-slate-700">Yüksek güvenlikli (SSL sertifikası ve veri şifreleme)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-blue-500" />
                                <span className="text-slate-700">Otomatik yedekleme sistemi</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-blue-500" />
                                <span className="text-slate-700">Modüler yapı (İhtiyaçlarınız değiştikçe geliştirilebilir)</span>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </ServiceLayout>
    );
}

function Users(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}
