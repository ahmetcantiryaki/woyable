import React from 'react';
import Link from 'next/link';
import { Code2, Mail, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 inline-flex">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">Woyable</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              Dijital dünyada markanızı öne çıkaran, kullanıcı odaklı ve yüksek performanslı çözümler üretiyoruz. Teknoloji ve tasarımı birleştiriyoruz.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Hızlı Erişim</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/" className="hover:text-blue-600">Anasayfa</Link></li>
              <li><Link href="/kurumsal" className="hover:text-blue-600">Hakkımızda</Link></li>
              <li><Link href="/hizmetlerimiz" className="hover:text-blue-600">Hizmetlerimiz</Link></li>
              <li><Link href="/iletisim" className="hover:text-blue-600">İletişim</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Hizmetlerimiz</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Web Tasarım & Yazılım</li>
              <li>Özel CRM Çözümleri</li>
              <li>Google Ads Yönetimi</li>
              <li>Sosyal Medya Yönetimi</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">İletişim</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-600 shrink-0" />
                <span>info@woyable.com</span>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-600 shrink-0" />
                <span>İstanbul, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">© 2024 Woyable. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};