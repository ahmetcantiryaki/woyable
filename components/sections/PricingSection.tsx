'use client';

import React from 'react';
import { PricingCard } from '../ui/PricingCard';
import { useRouter } from 'next/navigation';

export const PricingSection = () => {
    const router = useRouter();

    const scrollToContact = () => {
        // Navigate to contact page instead of scrolling, or check if on home page.
        // Given the new routing, let's redirect to contact page with a query param maybe?
        // Or just simple redirect.
        router.push('/iletisim');
    };

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Hizmet Paketleri</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        İhtiyaçlarınıza özel hazırladığımız popüler paketlerimiz. Size en uygun olanı seçin.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {/* Package 1: Web Başlangıç */}
                    <PricingCard
                        title="Web Başlangıç"
                        oldPrice="12.000 ₺"
                        price="5.000 ₺"
                        description="Küçük işletmeler ve kişisel siteler için."
                        features={[
                            "Tek Sayfa / Landing Page",
                            "Mobil Uyumlu Tasarım",
                            "Temel SEO Ayarları",
                            "İletişim Formu",
                            "Hosting & Domain (1 Yıl)",
                            "Aylık Bakım: 500 ₺"
                        ]}
                        buttonText="Paketi Seç"
                        onClick={scrollToContact}
                    />
                    {/* Package 2: Kurumsal Web */}
                    <PricingCard
                        title="Kurumsal Web"
                        oldPrice="17.500 ₺"
                        price="9.999 ₺"
                        description="Büyüyen firmalar için profesyonel çözüm."
                        isPopular
                        features={[
                            "5 Sayfaya Kadar Tasarım",
                            "Yönetim Paneli (CMS)",
                            "Blog Modülü & +1 Dil",
                            "Dashboard Kurulumu",
                            "Google Analytics Entegrasyonu",
                            "SEO Altyapısı"
                        ]}
                        buttonText="Paketi Seç"
                        onClick={scrollToContact}
                    />
                    {/* Package 3: E-Ticaret Pro */}
                    <PricingCard
                        title="E-Ticaret Pro"
                        price="20.000 ₺"
                        description="Online satışa başlamak için her şey."
                        features={[
                            "Sınırsız Ürün Yönetimi",
                            "Kredi Kartı Ödeme Altyapısı",
                            "Kargo Entegrasyonları",
                            "Stok Takibi & Raporlama",
                            "Üyelik Sistemi",
                            "Aylık Bakım: 1.000 ₺"
                        ]}
                        buttonText="Paketi Seç"
                        onClick={scrollToContact}
                    />
                    {/* Package 4: Sosyal Medya */}
                    <PricingCard
                        title="Sosyal Medya"
                        price="5.000 ₺"
                        period="/ay"
                        description="Markanızın sesi olalım."
                        features={[
                            "10 Adet Post Tasarımı",
                            "10 Adet Story Tasarımı",
                            "3 Platform (IG, Linkedin, +1)",
                            "İçerik Metin Yazarlığı",
                            "Reklam Kampanya Yönetimi",
                            "Aylık Detaylı Rapor"
                        ]}
                        buttonText="Paketi Seç"
                        onClick={scrollToContact}
                    />
                </div>

                {/* New Design Packages Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-slate-900">Tasarım & Prodüksiyon Paketleri</h3>
                        <p className="text-slate-600">Kurumsal kimliğinizi güçlendirecek profesyonel tasarım çözümleri.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Design Package 1 */}
                        <PricingCard
                            title="Kurumsal Kimlik & UI"
                            price="7.500 ₺"
                            description="Markanızın dijital yüzünü oluşturuyoruz."
                            features={[
                                "Profesyonel Logo Tasarımı",
                                "Web Sitesi Arayüz Tasarımı (UI)",
                                "Kurumsal Renk Paleti & Font",
                                "Kartvizit & Antetli Kağıt",
                                "Sosyal Medya Kitleri"
                            ]}
                            buttonText="Tasarımı Başlat"
                            onClick={scrollToContact}
                        />
                        {/* Design Package 2 */}
                        <PricingCard
                            title="Baskı & Etkinlik"
                            price="7.500 ₺"
                            description="Etkinlik ve tanıtımlarınız için tam set."
                            features={[
                                "Tanıtım Banner Tasarımları",
                                "Etkinlik Afişi Tasarımı",
                                "Rollup (Ayaklı Pano) Tasarımı",
                                "Broşür & Katalog Çalışması",
                                "Baskıya Hazır Teslimat"
                            ]}
                            buttonText="Tasarımı Başlat"
                            onClick={scrollToContact}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
