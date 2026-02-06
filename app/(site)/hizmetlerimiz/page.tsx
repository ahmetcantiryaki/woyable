import React from 'react';
import { Metadata } from 'next';
import { Services } from '@/components/views/Services';

export const metadata: Metadata = {
    title: 'Dijital Ajans Hizmetlerimiz | Woyable',
    description: 'Web tasarım, sosyal medya yönetimi, SEO ve özel yazılım çözümleri. Woyable olarak sunduğumuz tüm dijital hizmetleri inceleyin.',
};

export default function ServicesPage() {
    return <Services />;
}
