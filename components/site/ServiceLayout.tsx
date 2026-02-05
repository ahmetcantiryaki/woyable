'use client';

import React, { useState } from 'react';
import { ContactForm } from '@/components/ContactForm';
import { Check, TrendingDown, Flame, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { useRouter } from 'next/navigation';

export interface ServicePackage {
    name: string;
    price: string;
    oldPrice?: string;
    description: string;
    features: string[];
    isPopular?: boolean;
    isCustom?: boolean;
    badge?: string;
}

interface ServiceLayoutProps {
    title: string;
    description: string;
    serviceKey: string;
    children: React.ReactNode;
    packages?: ServicePackage[];
}

export const ServiceLayout: React.FC<ServiceLayoutProps> = ({
    title,
    description,
    serviceKey,
    children,
    packages
}) => {
    const router = useRouter();
    const [selectedPackage, setSelectedPackage] = useState<string>('Karar Vermedim');

    const handlePackageClick = (pkg: ServicePackage) => {
        if (pkg.isCustom) {
            router.push('/iletisim');
        } else {
            // Set the package name with price
            const packageLabel = pkg.name === 'Başlangıç'
                ? 'Başlangıç (3.000 ₺)'
                : pkg.name === 'Profesyonel'
                    ? 'Profesyonel (7.500 ₺)'
                    : 'Kurumsal (Teklif Al)';
            setSelectedPackage(packageLabel);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-24 overflow-hidden bg-white">
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 blur-3xl opacity-60" />
                    <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-purple-50 to-blue-50 blur-3xl opacity-60" />
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wide">
                                Woyable Digital
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                                {title}
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
                                {description}
                            </p>
                            <div className="flex flex-wrap gap-4 pt-2">
                                <div className="flex items-center gap-2 text-sm text-slate-500">
                                    <div className="w-2 h-2 rounded-full bg-green-500" /> Profesyonel Çözümler
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-500">
                                    <div className="w-2 h-2 rounded-full bg-blue-500" /> Hızlı Teslimat
                                </div>
                            </div>
                        </div>

                        <div className="lg:pl-12 flex justify-center lg:justify-end">
                            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 text-slate-900 w-full max-w-sm relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl blur opacity-30 -z-10" />
                                <h3 className="text-xl font-bold mb-2 text-slate-900">Hemen Teklif Alın</h3>
                                <p className="text-slate-500 mb-5 text-sm">
                                    Projeniz için ücretsiz analiz ve fiyat teklifi.
                                </p>
                                <ContactForm
                                    defaultService={serviceKey}
                                    variant="minimal"
                                    defaultPackage={selectedPackage}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Packages Section */}
            {packages && packages.length > 0 && (
                <section className="py-12 md:py-16 bg-slate-100">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Paketler ve Fiyatlandırma</h2>
                            <p className="text-slate-600">
                                İhtiyacınıza en uygun paketi seçin, işinizi büyütmeye hemen başlayın.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {packages.map((pkg, index) => (
                                <Card
                                    key={index}
                                    className={`relative flex flex-col transition-all duration-300 ${pkg.isPopular
                                            ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-0 shadow-2xl scale-105 z-10'
                                            : 'border-slate-200 bg-white hover:shadow-lg'
                                        }`}
                                >
                                    {/* Badge */}
                                    {pkg.badge && (
                                        <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20`}>
                                            <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md ${pkg.isPopular
                                                    ? 'bg-amber-400 text-amber-900'
                                                    : pkg.isCustom
                                                        ? 'bg-purple-100 text-purple-700'
                                                        : 'bg-green-100 text-green-700'
                                                }`}>
                                                {pkg.isPopular && <Flame className="w-3 h-3" />}
                                                {pkg.isCustom && <Sparkles className="w-3 h-3" />}
                                                {!pkg.isPopular && !pkg.isCustom && <TrendingDown className="w-3 h-3" />}
                                                {pkg.badge}
                                            </span>
                                        </div>
                                    )}

                                    <CardHeader className="p-5 pb-3 pt-6">
                                        <CardTitle className={`text-lg ${pkg.isPopular ? 'text-white' : 'text-slate-900'}`}>
                                            {pkg.name}
                                        </CardTitle>
                                        <CardDescription className={`text-xs ${pkg.isPopular ? 'text-white/80' : 'text-slate-500'}`}>
                                            {pkg.description}
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="flex-grow p-5 pt-0">
                                        <div className="mb-4">
                                            {pkg.oldPrice && (
                                                <span className={`text-sm line-through mr-2 ${pkg.isPopular ? 'text-white/60' : 'text-slate-400'}`}>
                                                    {pkg.oldPrice}
                                                </span>
                                            )}
                                            <span className={`text-2xl font-bold ${pkg.isPopular ? 'text-white' : 'text-slate-900'}`}>
                                                {pkg.price}
                                            </span>
                                            {!pkg.isCustom && (
                                                <span className={`text-xs ml-1 ${pkg.isPopular ? 'text-white/70' : 'text-slate-500'}`}>
                                                    /başlangıç
                                                </span>
                                            )}
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
                                                    : pkg.isCustom
                                                        ? 'bg-slate-900 text-white hover:bg-slate-800'
                                                        : 'bg-blue-600 text-white hover:bg-blue-700'
                                                }`}
                                            onClick={() => handlePackageClick(pkg)}
                                        >
                                            {pkg.isCustom ? 'Teklif Al' : 'İletişime Geç'}
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Main Content */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="prose prose-slate  mx-auto">
                        {children}
                    </div>
                </div>
            </section>
        </div>
    );
};
