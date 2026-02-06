import React from 'react';
import { Metadata } from 'next';
import { About } from '@/components/views/About';

export const metadata: Metadata = {
    title: 'Hakkımızda | Woyable Dijital Ajans',
    description: 'Woyable kimdir? Vizyonumuz, misyonumuz ve dijital dünyadaki çözüm ortaklığı anlayışımız hakkında bilgi edinin.',
};

export default function AboutPage() {
    return <About />;
}
