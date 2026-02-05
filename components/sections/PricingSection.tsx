'use client';

import React from 'react';
import { Check, Flame, TrendingDown, Sparkles, ArrowRight } from 'lucide-react';
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

export const PricingSection = () => {
    const router = useRouter();

    const showcasePackages: PackageShowcase[] = [
        {
            category: "Web Tasarım",
            categoryColor: "bg-blue-100 text-blue-700",
            name: "Profesyonel Web",
            price: "7.500 ₺",
            oldPrice: "15.000 ₺",
            description: "Kurumsal firmalar için SEO uyumlu site.",
            features: ["5+ Sayfa", "SEO Altyapısı", "Blog Modülü", "Yönetim Paneli"],
            href: "/hizmetlerimiz/web-tasarim-yazilim",
            isPopular: true,
            badge: "En Popüler"
        },
        {
            category: "Sosyal Medya",
            categoryColor: "bg-pink-100 text-pink-700",
            name: "Profesyonel Sosyal",
            price: "7.500 ₺",
            oldPrice: "15.000 ₺",
            description: "Aktif sosyal medya yönetimi.",
            features: ["16 Post/Ay", "3 Platform", "Reklam Yönetimi", "Detaylı Rapor"],
            href: "/hizmetlerimiz/sosyal-medya-reklam",
            badge: "Aylık"
        },
        {
            category: "Kurumsal Kimlik",
            categoryColor: "bg-purple-100 text-purple-700",
            name: "Profesyonel Kimlik",
            price: "7.500 ₺",
            oldPrice: "15.000 ₺",
            description: "Kapsamlı marka kimliği paketi.",
            features: ["Logo + Alternatifler", "Kartvizit & Antetli", "Sosyal Medya Kiti", "Marka Paleti"],
            href: "/hizmetlerimiz/kurumsal-kimlik-logo",
            badge: "Tam Set"
        },
        {
            category: "Özel Yazılım",
            categoryColor: "bg-green-100 text-green-700",
            name: "Profesyonel CRM",
            price: "7.500 ₺",
            oldPrice: "15.000 ₺",
            description: "Kapsamlı yazılım çözümü.",
            features: ["3 Modül", "10 Kullanıcı", "API Entegrasyonu", "Eğitim Desteği"],
            href: "/hizmetlerimiz/ozel-yazilim-cozumleri",
            badge: "Bulut"
        }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">
                        <Flame className="w-4 h-4" />
                        En Çok Tercih Edilen Paketler
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Hizmet Paketleri</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Her kategoriden en popüler paketlerimiz. Tüm paketleri görmek için hizmet sayfalarını ziyaret edin.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                                <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md ${pkg.isPopular
                                    ? 'bg-amber-400 text-amber-900'
                                    : pkg.categoryColor
                                    }`}>
                                    {pkg.isPopular && <Flame className="w-3 h-3" />}
                                    {pkg.badge || pkg.category}
                                </span>
                            </div>

                            <CardHeader className="p-5 pb-3 pt-6">
                                <div className={`text-xs font-medium mb-1 ${pkg.isPopular ? 'text-white/70' : 'text-slate-400'}`}>
                                    {pkg.category}
                                </div>
                                <CardTitle className={`text-lg ${pkg.isPopular ? 'text-white' : 'text-slate-900'}`}>
                                    {pkg.name}
                                </CardTitle>
                                <CardDescription className={`text-xs ${pkg.isPopular ? 'text-white/80' : 'text-slate-500'}`}>
                                    {pkg.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="flex-grow p-5 pt-0">
                                <div className="mb-4">
                                    <span className={`text-sm line-through mr-2 ${pkg.isPopular ? 'text-white/60' : 'text-slate-400'}`}>
                                        {pkg.oldPrice}
                                    </span>
                                    <span className={`text-2xl font-bold ${pkg.isPopular ? 'text-white' : 'text-slate-900'}`}>
                                        {pkg.price}
                                    </span>
                                </div>
                                <ul className="space-y-2">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className={`flex items-start gap-2 text-xs ${pkg.isPopular ? 'text-white' : 'text-slate-600'}`}>
                                            <Check className={`h-3.5 w-3.5 mt-0.5 shrink-0 ${pkg.isPopular ? 'text-amber-300' : 'text-green-500'}`} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter className="p-5 pt-0">
                                <Button
                                    size="sm"
                                    className={`w-full font-semibold ${pkg.isPopular
                                        ? 'bg-amber-400 text-amber-900 hover:bg-amber-300'
                                        : 'bg-blue-600 text-white hover:bg-blue-700'
                                        }`}
                                >
                                    İncele <ArrowRight className="w-4 h-4 ml-1" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* CTA to see all packages */}
                <div className="text-center">
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-slate-300 hover:bg-slate-100"
                        onClick={() => router.push('/hizmetlerimiz')}
                    >
                        Tüm Hizmetleri ve Paketleri Gör <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </div>
        </section>
    );
};
