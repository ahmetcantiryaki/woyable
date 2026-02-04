'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Code2 } from 'lucide-react';
import { Button } from './ui/Button';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Anasayfa', href: '/' },
    { label: 'Hizmetlerimiz', href: '/hizmetlerimiz' },
    { label: 'Paketlerimiz', href: '/paketlerimiz' },
    { label: 'Kurumsal', href: '/kurumsal' },
    { label: 'Blog', href: '/blog' },
  ];

  const isActive = (href: string) => {
    if (href === '/' && pathname !== '/') return false;
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <Code2 className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Woyable</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${isActive(item.href) ? 'text-blue-600' : 'text-slate-600'
                }`}
            >
              {item.label}
            </Link>
          ))}
          <Button onClick={() => window.location.href = '/iletisim'}>
            İletişime Geç
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white absolute w-full left-0 top-16 shadow-lg p-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-left text-sm font-medium py-2 ${isActive(item.href) ? 'text-blue-600' : 'text-slate-600'
                }`}
            >
              {item.label}
            </Link>
          ))}
          <Button className="w-full" onClick={() => {
            setIsMobileMenuOpen(false);
            window.location.href = '/iletisim';
          }}>
            İletişime Geç
          </Button>
        </div>
      )}
    </header>
  );
};