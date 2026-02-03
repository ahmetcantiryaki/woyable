
import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Woyable | Dijital Çözüm Ortağınız',
    description: 'Woyable Dijital Ajans',
};

import Script from 'next/script';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="tr">
            <body className={inter.className}>
                {/* Cookiebot */}
                <Script
                    id="Cookiebot"
                    src="https://consent.cookiebot.com/uc.js"
                    data-cbid="6bc6a691-10a9-4861-8499-a5c6c451c31e"
                    strategy="afterInteractive"
                />

                {/* Google Analytics */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-6JT4FYTX59"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-6JT4FYTX59');
                    `}
                </Script>

                {children}
            </body>
        </html>
    );
}
