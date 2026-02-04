'use client';

import React from 'react';
import { ContactForm } from '@/components/ContactForm';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';

export interface ServicePackage {
    name: string;
    price: string;
    description: string;
    features: string[];
    isPopular?: boolean;
}

interface ServiceLayoutProps {
    title: string;
    description: string;
    serviceKey: string; // 'web-design', 'social', etc. matching ContactForm values
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
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-slate-900 text-white py-12 lg:py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-slate-900 pointer-events-none" />

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Left Content */}
                        <div className="space-y-4">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                {title}
                            </h1>
                            <p className="text-base md:text-lg text-slate-300 max-w-xl leading-relaxed">
                                {description}
                            </p>
                        </div>

                        {/* Right Form */}
                        <div className="lg:pl-12 flex justify-center lg:justify-end">
                            <div className="bg-white rounded-xl shadow-2xl p-5 text-slate-900 w-full max-w-sm">
                                <h3 className="text-xl font-bold mb-1">Hemen Teklif Alın</h3>
                                <p className="text-slate-600 mb-4 text-xs">
                                    Projeniz için ücretsiz danışmanlık ve fiyat teklifi alın.
                                </p>
                                <ContactForm defaultService={serviceKey} />
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

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {packages.map((pkg, index) => (
                                <Card
                                    key={index}
                                    className={`relative flex flex-col ${pkg.isPopular ? 'border-blue-500 shadow-xl scale-105 z-10' : 'border-slate-200'}`}
                                >
                                    {pkg.isPopular && (
                                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                            <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                                                En Popüler
                                            </span>
                                        </div>
                                    )}
                                    <CardHeader className="p-4 pb-2">
                                        <CardTitle className="text-lg">{pkg.name}</CardTitle>
                                        <CardDescription className="text-xs">{pkg.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow p-4 pt-0">
                                        <div className="mb-4">
                                            <span className="text-2xl font-bold text-slate-900">{pkg.price}</span>
                                            {pkg.price !== 'İletişime Geçin' && <span className="text-slate-500 text-xs">/başlangıç</span>}
                                        </div>
                                        <ul className="space-y-2">
                                            {pkg.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                                                    <Check className="h-3 w-3 text-green-500 mt-0.5 shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter className="p-4 pt-0">
                                        <Button
                                            size="sm"
                                            className={`w-full ${pkg.isPopular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                                            variant={pkg.isPopular ? 'default' : 'outline'}
                                            onClick={() => {
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}
                                        >
                                            Teklif Al
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
                    <div className="prose prose-slate max-w-4xl mx-auto">
                        {children}
                    </div>
                </div>
            </section>
        </div>
    );
};
