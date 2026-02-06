import React from 'react';
import { Metadata } from 'next';
import { Contact } from '@/components/views/Contact';

export const metadata: Metadata = {
    title: 'İletişim | Woyable',
    description: 'Projeniz için teklif alın veya tanışmak için ofisimizi ziyaret edin. Woyable iletişim bilgileri ve adres.',
};

export default function ContactPage() {
    return <Contact />;
}
