'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Code2, ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { label: 'Anasayfa', href: '/' },
    {
      label: 'Hizmetlerimiz',
      href: '#',
      dropdown: [
        { label: 'Web Tasarım & Yazılım', href: '/hizmetlerimiz/web-tasarim-yazilim' },
        { label: 'Kurumsal Kimlik & Marka', href: '/hizmetlerimiz/kurumsal-kimlik-logo' },
        { label: 'Sosyal Medya & Reklam', href: '/hizmetlerimiz/sosyal-medya-reklam' },
        { label: 'Özel Yazılım Çözümleri', href: '/hizmetlerimiz/ozel-yazilim-cozumleri' },
      ]
    },
    {
      label: 'Sektörel Çözümler',
      href: '#',
      dropdown: [
        { label: 'Sağlık & Klinik', href: '/sektorler/saglik-klinik-web-tasarim' },
        { label: 'Hukuk & Danışmanlık', href: '/sektorler/avukat-hukuk-web-tasarim' },
        { label: 'Teknik Servis & Tamirat', href: '/sektorler/teknik-servis-web-tasarim' },
        { label: 'E-Ticaret & Perakende', href: '/sektorler/e-ticaret-cozumleri' },
      ]
    },
    { label: 'Blog', href: '/blog' },
  ];

  const isActive = (href: string) => {
    if (href === '/' && pathname !== '/') return false;
    return pathname.startsWith(href);
  };

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60" ref={dropdownRef}>
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            setIsMobileMenuOpen(false);
            setActiveDropdown(null);
          }}
        >
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <Code2 className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Woyable</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.dropdown ? (
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-600 ${activeDropdown === item.label ? 'text-blue-600' : 'text-slate-600'}`}
                >
                  {item.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${isActive(item.href) ? 'text-blue-600' : 'text-slate-600'}`}
                >
                  {item.label}
                </Link>
              )}

              {/* Desktop Dropdown */}
              {item.dropdown && activeDropdown === item.label && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-slate-100 rounded-lg shadow-lg py-2">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      onClick={() => setActiveDropdown(null)}
                      className="block px-4 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Button onClick={() => window.location.href = '/iletisim'}>
            Teklif Al
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
        <div className="md:hidden border-t border-slate-100 bg-white absolute w-full left-0 top-16 shadow-lg p-4 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.dropdown ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center justify-between w-full text-left text-sm font-medium py-2 text-slate-600"
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === item.label && (
                    <div className="pl-4 border-l-2 border-slate-100 ml-2 mt-1 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setActiveDropdown(null);
                          }}
                          className="block py-2 text-sm text-slate-500 hover:text-blue-600"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-left text-sm font-medium py-2 ${isActive(item.href) ? 'text-blue-600' : 'text-slate-600'}`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Button className="w-full" onClick={() => {
            setIsMobileMenuOpen(false);
            window.location.href = '/iletisim';
          }}>
            Teklif Al
          </Button>
        </div>
      )}
    </header>
  );
};