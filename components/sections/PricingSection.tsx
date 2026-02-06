'use client';

import React from 'react';
import { Check, Flame, ArrowRight, Building2, Stethoscope, Scale, Wrench, ShoppingBag, Utensils, Scissors, Car } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/Card';

interface PackageShowcase {
    category: string;
    categoryColor: string;
    name: string;
    price: string;
    oldPrice: string;
    description: string;
    features: string[];
    href: string;
    isPopular?: boolean;
    badge?: string;
}

interface SectorService {
    title: string;
    icon: React.ReactNode;
    href: string;
}

export const PricingSection = () => {
    const router = useRouter();

    const showcasePackages: PackageShowcase[] = [
        {
            category: "Başlangıç",
            categoryColor: "bg-teal-100 text-teal-700",
            name: "Hızlı Başlangıç",
            price: "3.000 ₺",
            oldPrice: "6.000 ₺",
            description: "Dijitale hızlı bir giriş yapmak isteyenler için.",
            features: ["Tek Sayfa (One Page)", "Temel SEO Ayarları", "Mobil Uyumlu Tasarım", "İletişim Formu", "WhatsApp Entegrasyonu"],
            href: "/iletisim",
            badge: "Kampanya"
        },
        {
            category: "Web Tasarım",
            categoryColor: "bg-blue-100 text-blue-700",
            name: "Kurumsal Web",
            price: "7.500 ₺",
            oldPrice: "15.000 ₺",
            description: "Kurumsal firmalar için profesyonel çözüm.",
            features: ["5+ Sayfa Tasarımı", "Gelişmiş SEO Altyapısı", "Yönetim Paneli", "Blog Modülü", "Google Harita Kaydı"],
            href: "/hizmetlerimiz/web-tasarim",
            isPopular: true,
            badge: "En Popüler"
        },
        {
            category: "Sosyal Medya",
            categoryColor: "bg-pink-100 text-pink-700",
            name: "Sosyal Medya Yönetimi",
            price: "7.500 ₺",
            oldPrice: "12.500 ₺",
            description: "Markanızın sesini sosyal medyada duyurun.",
            features: ["12 Post & 4 Reels / Ay", "3 Platform Yönetimi", "Reklam Yönetimi", "Aylık Raporlama", "Topluluk Yönetimi"],
            href: "/hizmetlerimiz/sosyal-medya-reklam",
            badge: "Aylık"
        },
        {
            category: "E-Ticaret",
            categoryColor: "bg-purple-100 text-purple-700",
            name: "E-Ticaret Sitesi",
            price: "15.000 ₺",
            oldPrice: "25.000 ₺",
            description: "Online satışa başlamak için her şey.",
            features: ["Sınırsız Ürün", "Sanal POS Entegrasyonu", "Kargo Entegrasyonu", "Pazaryeri Uyumu", "Stok Takibi"],
            href: "/sektorler/e-ticaret-cozumleri",
            badge: "Profesyonel"
        }
    ];

    const sectoralServices: SectorService[] = [
        { title: "Sağlık & Klinik", icon: <Stethoscope className="w-5 h-5" />, href: "/sektorler/saglik-klinik-web-tasarim" },
        { title: "Hukuk Büroları", icon: <Scale className="w-5 h-5" />, href: "/sektorler/avukat-hukuk-web-tasarim" },
        { title: "Teknik Servis", icon: <Wrench className="w-5 h-5" />, href: "/sektorler/teknik-servis-web-tasarim" },
        { title: "E-Ticaret", icon: <ShoppingBag className="w-5 h-5" />, href: "/sektorler/e-ticaret-cozumleri" },
        { title: "Restoran & Cafe", icon: <Utensils className="w-5 h-5" />, href: "/iletisim" },
        { title: "Güzellik Merkezi", icon: <Scissors className="w-5 h-5" />, href: "/iletisim" },
        { title: "Oto Galeri & Servis", icon: <Car className="w-5 h-5" />, href: "/iletisim" },
        { title: "İnşaat & Emlak", icon: <Building2 className="w-5 h-5" />, href: "/iletisim" },
    ];

    return (
        <section className="py-20 bg-slate-50 border-b border-slate-200">
            <div className="container mx-auto px-4 md:px-6">

                {/* HEADLINE */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">
                        <Flame className="w-4 h-4" />
                        Fiyatlandırma
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Size Uygun Paketi Seçin</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Şeffaf fiyat politikamız ile bütçenize en uygun çözümü sunuyoruz. Gizli maliyet yok, sürpriz yok.
                    </p>
                </div>

                {/* PRICING CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {showcasePackages.map((pkg, index) => (
                        <Card
                            key={index}
                            className={`relative flex flex-col transition-all duration-300 cursor-pointer group ${pkg.isPopular
                                ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-0 shadow-2xl scale-105 z-10'
                                : 'border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1'
                                }`}
                            onClick={() => router.push(pkg.href)}
                        >
                            {/* Category Badge */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full text-center px-4">
                                <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md ${pkg.isPopular
                                    ? 'bg-amber-400 text-amber-900'
                                    : pkg.categoryColor
                                    }`}>
                                    {pkg.isPopular && <Flame className="w-3 h-3" />}
                                    {pkg.badge || pkg.category}
                                </span>
                            </div>

                            <CardHeader className="p-5 pb-3 pt-8">
                                <div className={`text-xs font-medium mb-1 ${pkg.isPopular ? 'text-white/70' : 'text-slate-400'}`}>
                                    {pkg.category}
                                </div>
                                <CardTitle className={`text-xl ${pkg.isPopular ? 'text-white' : 'text-slate-900'}`}>
                                    {pkg.name}
                                </CardTitle>
                                <CardDescription className={`text-xs mt-2 min-h-[40px] ${pkg.isPopular ? 'text-white/80' : 'text-slate-500'}`}>
                                    {pkg.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="flex-grow p-5 pt-0">
                                <div className="mb-6 pb-6 border-b border-dashed border-opacity-20 border-current">
                                    <div className="flex items-baseline gap-2">
                                        <span className={`text-sm line-through ${pkg.isPopular ? 'text-white/60' : 'text-slate-400'}`}>
                                            {pkg.oldPrice}
                                        </span>
                                    </div>
                                    <div className={`text-3xl font-bold ${pkg.isPopular ? 'text-white' : 'text-slate-900'}`}>
                                        {pkg.price}
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className={`flex items-start gap-2 text-xs font-medium ${pkg.isPopular ? 'text-white' : 'text-slate-600'}`}>
                                            <Check className={`h-4 w-4 shrink-0 ${pkg.isPopular ? 'text-amber-300' : 'text-green-500'}`} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter className="p-5 pt-0 mt-auto">
                                <Button
                                    size="sm"
                                    className={`w-full font-bold group-hover:scale-[1.02] transition-transform ${pkg.isPopular
                                        ? 'bg-amber-400 text-amber-900 hover:bg-amber-300'
                                        : 'bg-slate-900 text-white hover:bg-slate-800'
                                        }`}
                                >
                                    Teklif Al <ArrowRight className="w-4 h-4 ml-1" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* SECTORAL SERVICES MODULE */}
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold text-slate-900">Sektörel Çözümler</h3>
                        <p className="text-slate-500 mt-2">İşletmenizin sektörüne özel geliştirdiğimiz hazır çözümler.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {sectoralServices.map((sector, idx) => (
                            <div
                                key={idx}
                                className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 hover:border-blue-300 hover:shadow-md group"
                            >
                                <div className="p-3 bg-slate-50 rounded-full text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                    {sector.icon}
                                </div>
                                <h4 className="font-semibold text-slate-900 text-sm">{sector.title}</h4>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="w-full text-xs h-8 mt-1 border-slate-200 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-700"
                                    onClick={() => router.push(sector.href)}
                                >
                                    Teklif Al
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
