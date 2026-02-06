import React from 'react';
import { Metadata } from 'next';
import { WebDesign } from '@/components/views/WebDesign';

export const metadata: Metadata = {
    title: 'Profesyonel Web Tasarım ve Yazılım Hizmetleri | Woyable',
    description: 'İşletmenize özel, SEO uyumlu ve mobil dostu web tasarım çözümleri. Modern teknolojilerle web sitenizi tasarlıyor, dijital varlığınızı güçlendiriyoruz.',
};

export default function WebDesignPage() {
    return <WebDesign />;
}
