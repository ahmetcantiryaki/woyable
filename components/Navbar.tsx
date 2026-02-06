'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Code2, ChevronDown, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { usePathname } from 'next/navigation';
import { useOfferModal } from './context/OfferModalContext';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { openModal } = useOfferModal();

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
        { label: 'Web Tasarım & Yazılım', href: '/hizmetlerimiz/web-tasarim' },
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

          <div className="flex items-center gap-3">
            <Button
              className="hidden lg:flex gap-2 !bg-[#25D366] hover:!bg-[#20b858] text-white border-none transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://wa.me/905339401855', '_blank')}
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </Button>

            <Button
              className="gap-2 group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              onClick={openModal}
            >
              Teklif Al
              <ArrowRight className="w-4 h-4 animate-slide-right" />
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div >

      {/* Mobile Nav */}
      {
        isMobileMenuOpen && (
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
            <div className="flex flex-col gap-3 mt-4">
              <Button
                className="w-full gap-2 !bg-[#25D366] hover:!bg-[#20b858] text-white border-none"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.open('https://wa.me/905339401855', '_blank');
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp ile İletişime Geç
              </Button>

              <Button className="w-full gap-2 group" onClick={() => {
                setIsMobileMenuOpen(false);
                openModal();
              }}>
                Teklif Al
                <ArrowRight className="w-4 h-4 animate-slide-right" />
              </Button>
            </div>
          </div>
        )
      }
    </header >
  );
};