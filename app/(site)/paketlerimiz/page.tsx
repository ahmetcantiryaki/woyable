import React from 'react';
import { Metadata } from 'next';
import { PricingSection } from '@/components/sections/PricingSection';

export const metadata: Metadata = {
    title: 'Fiyatlandırma ve Paketler | Woyable',
    description: 'Web tasarım, sosyal medya ve e-ticaret paketlerimizi inceleyin. Şeffaf fiyat politikası ile bütçenize uygun çözümler.',
};

export default function PackagesPage() {
    return (
        <div className="bg-slate-50 min-h-screen pt-12">
            <PricingSection />
        </div>
    );
}
