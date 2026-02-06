import React from 'react';
import Link from 'next/link';
import { Code2, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
          {/* Logo & Slogan */}
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Code2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">Woyable</span>
          </div>

          {/* Minimal Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-600">
            <Link href="/hizmetlerimiz" className="hover:text-blue-600 transition-colors">Hizmetler</Link>
            <Link href="/kurumsal" className="hover:text-blue-600 transition-colors">Kurumsal</Link>
            <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            <Link href="/iletisim" className="hover:text-blue-600 transition-colors">İletişim</Link>
          </div>

          {/* Contact Actions */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:info@woyable.com"
              className="p-2 rounded-full bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/905339401855"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white hover:bg-[#20b858] transition-colors text-sm font-bold shadow-sm hover:shadow-md"
            >
              <Phone className="w-4 h-4" />
              WhatsApp Hattı
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Woyable Dijital Ajans. <Link href="/gizlilik-politikas" className="hover:text-slate-600 underline">Gizlilik Politikası</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};