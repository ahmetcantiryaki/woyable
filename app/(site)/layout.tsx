import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Client components like Navbar wrapped in a layout often work fine as long as they have 'use client' */}
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
}
