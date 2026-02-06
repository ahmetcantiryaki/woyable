'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/Card';
import { Button } from '../ui/Button';
import { Globe, ShoppingCart, Video, BarChart, FileCode, PenTool, Check, Stethoscope, Scale, Wrench, ShoppingBag } from 'lucide-react';

import { useRouter } from 'next/navigation';

export const Services = () => {
  const router = useRouter();

  const digitalServices = [
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Web Tasarım & Yazılım",
      description: "İşinizi büyüten, SEO uyumlu, hızlı ve modern web siteleri.",
      features: ["Mobil Uyumlu Tasarım", "SEO Altyapısı", "Kolay Yönetim Paneli", "Google Harita Kaydı"],
      href: "/hizmetlerimiz/web-tasarim"
    },
    {
      icon: <PenTool className="h-8 w-8 text-blue-600" />,
      title: "Kurumsal Kimlik & Marka",
      description: "Markanızın imzası: Logo, kartvizit ve kurumsal dökümanlar.",
      features: ["Logo Tasarımı", "Kurumsal Evraklar", "Marka Kitapçığı", "Sosyal Medya Kiti"],
      href: "/hizmetlerimiz/kurumsal-kimlik-logo"
    },
    {
      icon: <Video className="h-8 w-8 text-blue-600" />,
      title: "Sosyal Medya & Reklam",
      description: "Instagram ve Google'da markanızın sesini duyurun, satışları artırın.",
      features: ["İçerik Yönetimi", "Google Ads Reklam", "Meta (Instagram) Reklam", "Topluluk Yönetimi"],
      href: "/hizmetlerimiz/sosyal-medya-reklam"
    },
    {
      icon: <FileCode className="h-8 w-8 text-blue-600" />,
      title: "Özel Yazılım Çözümleri",
      description: "İş süreçlerinize özel web tabanlı CRM ve takip yazılımları.",
      features: ["Müşteri Takip (CRM)", "Stok & Depo Takip", "Personel Yönetimi", "Bulut Tabanlı Erişim"],
      href: "/hizmetlerimiz/ozel-yazilim-cozumleri"
    }
  ];

  const sectoralSolutions = [
    {
      icon: <Stethoscope className="h-8 w-8 text-teal-600" />,
      title: "Sağlık & Klinik",
      description: "Doktorlar ve klinikler için randevu özellikli web siteleri.",
      href: "/sektorler/saglik-klinik-web-tasarim",
      color: "border-teal-200 hover:border-teal-400"
    },
    {
      icon: <Scale className="h-8 w-8 text-indigo-600" />,
      title: "Hukuk & Danışmanlık",
      description: "Avukatlar için prestijli ve blog altyapılı kurumsal siteler.",
      href: "/sektorler/avukat-hukuk-web-tasarim",
      color: "border-indigo-200 hover:border-indigo-400"
    },
    {
      icon: <Wrench className="h-8 w-8 text-orange-600" />,
      title: "Teknik Servis & Tamirat",
      description: "Tesisatçı ve servisler için 'Hemen Ara' odaklı çözümler.",
      href: "/sektorler/teknik-servis-web-tasarim",
      color: "border-orange-200 hover:border-orange-400"
    },
    {
      icon: <ShoppingBag className="h-8 w-8 text-purple-600" />,
      title: "E-Ticaret & Perakende",
      description: "Satış odaklı, ödeme sistemi entegre e-ticaret siteleri.",
      href: "/sektorler/e-ticaret-cozumleri",
      color: "border-purple-200 hover:border-purple-400"
    }
  ];

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">Dijital Çözüm Ortağınız</h1>
          <p className="text-lg text-slate-600">
            İşletmenizin ihtiyacı ister kurumsal bir web sitesi, ister kapsamlı bir e-ticaret operasyonu olsun;
            teknoloji ve tasarımı birleştirerek size değer katıyoruz.
          </p>
        </div>

        {/* Digital Services Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-blue-600 pl-4">Dijital Hizmetlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {digitalServices.map((service, index) => (
              <Card key={index} className="flex flex-col border-slate-200 hover:shadow-lg transition-all duration-300 group cursor-pointer h-full" onClick={() => router.push(service.href)}>
                <CardHeader className="flex flex-col gap-4 items-start pb-2">
                  <div className="bg-white border border-slate-100 p-3 rounded-xl shadow-sm group-hover:bg-blue-50 transition-colors">
                    {service.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{service.title}</CardTitle>
                    <CardDescription className="text-sm pt-2 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-2 flex-grow">
                  <div className="flex flex-col gap-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-500">
                        <Check className="h-3 w-3 text-blue-500 shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    İncele &rarr;
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Sectoral Solutions Section */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-indigo-600 pl-4">Sektörel Çözümler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectoralSolutions.map((sector, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 border ${sector.color} shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col items-center text-center h-full`}
                onClick={() => router.push(sector.href)}
              >
                <div className="mb-4 p-3 rounded-full bg-slate-50">
                  {sector.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{sector.title}</h3>
                <p className="text-sm text-slate-600 mb-4 flex-grow">{sector.description}</p>
                <span className="text-xs font-semibold text-blue-600">İncele &rarr;</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Henüz Neye İhtiyacınız Olduğuna Emin Değil misiniz?
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Ücretsiz analiz hizmetimizden yararlanın. Sektörünüzü ve rakiplerinizi inceleyelim, size en uygun yol haritasını birlikte çıkaralım.
          </p>
          <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 hover:text-white border-none" onClick={() => router.push('/iletisim')}>
            Ücretsiz Analiz İsteyin
          </Button>
        </div>
      </div>
    </div>
  );
};