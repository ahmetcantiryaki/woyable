import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/Card';
import { Button } from '../ui/Button';
import { PageView } from '../../types';
import { Globe, ShoppingCart, Code, BarChart, Smartphone, PenTool, Check } from 'lucide-react';

import { useRouter } from 'next/navigation';

export const Services = () => {
  const router = useRouter();
  const servicesList = [
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Web Başlangıç & Kurumsal Web",
      description: "Küçük işletmelerden büyük firmalara kadar her ölçek için modern, hızlı ve responsive web siteleri.",
      features: ["Tek Sayfa veya Çok Sayfalı Tasarım", "SEO Altyapısı", "Yönetim Paneli (CMS)", "Mobil Uyumlu Arayüz"]
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-blue-600" />,
      title: "E-Ticaret Pro",
      description: "Online satışa başlamak için ihtiyacınız olan her şey: Ödeme, stok, kargo ve müşteri yönetimi.",
      features: ["Sınırsız Ürün Yönetimi", "Kredi Kartı Entegrasyonu", "Kargo Entegrasyonu", "Gelişmiş Raporlama"]
    },
    {
      icon: <Smartphone className="h-8 w-8 text-blue-600" />,
      title: "Sosyal Medya Yönetimi",
      description: "Markanızın dijital dünyadaki sesi oluyoruz. Profesyonel içerik üretimi ve stratejik yönetim.",
      features: ["Post & Story Tasarımları", "İçerik Metin Yazarlığı", "Reklam Kampanya Yönetimi", "Aylık Raporlama"]
    },
    {
      icon: <PenTool className="h-8 w-8 text-blue-600" />,
      title: "Kurumsal Kimlik & UI",
      description: "Markanızın görsel kimliğini profesyonelce tasarlıyor, akılda kalıcı bir imaj oluşturuyoruz.",
      features: ["Logo Tasarımı", "Web Arayüz (UI) Tasarımı", "Kurumsal Renk & Font Seçimi", "Kartvizit & Antetli Kağıt"]
    },
    {
      icon: <BarChart className="h-8 w-8 text-blue-600" />,
      title: "Baskı & Etkinlik",
      description: "Fiziksel tanıtım materyalleriniz için yaratıcı tasarım ve baskı çözümleri.",
      features: ["Tanıtım Bannerları", "Etkinlik Afişleri", "Rollup & Pano Tasarımı", "Broşür & Katalog"]
    },
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Özel Yazılım & CRM",
      description: "Şirket içi süreçlerinizi dijitalleştiren, size özel butik yazılım ve otomasyon çözümleri.",
      features: ["Müşteri Takip Sistemi (CRM)", "Personel Yönetimi", "Özel Raporlama Araçları", "Bulut Tabanlı Altyapı"]
    }
  ];

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">Hizmetlerimiz</h1>
          <p className="text-lg text-slate-600">
            Woyable olarak, dijital dönüşüm yolculuğunuzda ihtiyacınız olan tüm teknik ve kreatif desteği sağlıyoruz. İşte uzmanlık alanlarımız:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <Card key={index} className="flex flex-col border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="bg-white border border-slate-100 p-4 rounded-xl w-fit shadow-sm mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                <CardDescription className="text-base pt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={() => router.push('/iletisim')}>
                  Detaylı Bilgi Al
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-2xl p-8 md:p-12 border border-slate-200 shadow-sm text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Özel bir projeniz mi var?
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Listelenen hizmetlerin dışında, projenize özel butik çözümler de üretiyoruz. Aklınızdaki fikri hayata geçirmek için bizimle konuşun.
          </p>
          <Button size="lg" onClick={() => router.push('/iletisim')}>
            Bizimle İletişime Geçin
          </Button>
        </div>
      </div>
    </div>
  );
};