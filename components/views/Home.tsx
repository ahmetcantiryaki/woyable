import React, { useEffect, useState } from 'react';
import { Button } from '../ui/Button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '../ui/Card';
import { ArrowRight, CheckCircle2, Star, Check, Quote, Play, Flame } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/Accordion';
import { useOfferModal } from '../context/OfferModalContext';

export const Home = () => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { openModal } = useOfferModal();

  const prices = [
    {
      name: "Sektöre Özel Web Sitesi",
      price: "2.999 ₺",
      oldPrice: "7.999 ₺",
      desc: "Dijitale hızlı giriş.",
      href: "/iletisim",
      badge: "Kampanya",
      // Canlı, parlak renk - Teal
      badgeColor: "bg-teal-600 text-white shadow-lg shadow-teal-200",
      features: ["One Page Site", "Temel SEO", "İletişim Formu"]
    },
    {
      name: "Kurumsal Web Sitesi",
      price: "2.999 ₺",
      oldPrice: "4.999 ₺",
      desc: "Profesyonel çözüm.",
      href: "/hizmetlerimiz/web-tasarim",
      badge: "En Popüler",
      // Canlı, parlak renk - Amber
      badgeColor: "bg-amber-500 text-white shadow-lg shadow-amber-200",
      features: ["5+ Sayfa", "Yönetim Paneli", "Blog Modülü"]
    },
    {
      name: "Sosyal Medya Yönetimi",
      price: "2.999 ₺",
      oldPrice: "4.999 ₺",
      desc: "Aylık yönetim.",
      href: "/hizmetlerimiz/sosyal-medya-reklam",
      badge: "Fırsat",
      // Canlı, parlak renk - Rose
      badgeColor: "bg-rose-600 text-white shadow-lg shadow-rose-200",
      features: ["12 Post/Ay", "3 Platform", "Özel Gün Paylaşımları"]
    },
    {
      name: "E-Ticaret Çözümleri",
      price: "14.999 ₺",
      oldPrice: "49.999 ₺",
      desc: "Online satış.",
      href: "/sektorler/e-ticaret-cozumleri",
      badge: "Profesyonel",
      // Canlı, parlak renk - Indigo
      badgeColor: "bg-indigo-600 text-white shadow-lg shadow-indigo-200",
      features: ["Sınırsız Ürün", "Sanal POS", "Stok Takip"]
    }
  ];

  const faqs = [
    {
      q: "Proje teslim süreniz ne kadar?",
      a: "Projenin kapsamına göre değişmekle birlikte, standart kurumsal web sitelerini 7-10 iş günü, e-ticaret sitelerini 14-21 iş günü içerisinde teslim ediyoruz."
    },
    {
      q: "SEO hizmeti fiyata dahil mi?",
      a: "Tüm web sitesi paketlerimizde temel SEO altyapısı (meta etiketleri, site haritası, hız optimizasyonu) standart olarak sunulmaktadır. İleri seviye aylık SEO çalışması ayrıca planlanabilir."
    },
    {
      q: "Özel tasarım yapıyor musunuz?",
      a: "Evet, hazır şablonlar yerine markanızın kurumsal kimliğine ve sektör dinamiklerine uygun, tamamen size özel ve modern tasarımlar hazırlıyoruz."
    },
    {
      q: "Ödeme seçenekleriniz neler?",
      a: "Havale/EFT ödeme seçeneklerimiz mevcuttur. İş başlangıcında sözleşme ile birlikte belirlenen oranda ön ödeme alınmaktadır."
    },
    {
      q: "Sonradan teknik veya içerik desteği sağlıyor musunuz?",
      a: "Kesinlikle. Proje tesliminden sonra 1 ay boyunca ücretsiz teknik destek sunuyoruz. Ayrıca isteğe bağlı olarak aylık bakım ve yönetim paketlerimizle sitenizin her zaman güncel kalmasını sağlıyoruz."
    }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const getFadeInClass = (delay: string) =>
    `transition-all duration-1000 ease-out transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${delay}`;

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section With Integrated Minimal Pricing */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left space-y-8 max-w-2xl mx-auto lg:mx-0 pt-8">
              {/* Animated Badge */}
              <div className={`inline-flex items-center justify-center lg:justify-start w-full ${getFadeInClass('delay-0')}`}>
                <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800">
                  <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                  Yeni nesil dijital ajans deneyimi
                </div>
              </div>

              {/* Animated Headline */}
              <h1 className={`text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight ${getFadeInClass('delay-100')}`}>
                Web Sitenizle <br />
                <span className="text-blue-600 relative inline-block">
                  Satışlarınızı Artırın
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h1>

              {/* Animated Description */}
              <p className={`text-lg md:text-xl text-slate-600 leading-relaxed ${getFadeInClass('delay-200')}`}>
                Profesyonel web tasarım ve e-ticaret çözümleriyle markanızı dijital dünyada öne çıkarın. Müşterilerinize 7/24 ulaşılabilir olun.
              </p>

              {/* Animated Buttons */}
              <div className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 ${getFadeInClass('delay-300')}`}>
                <Button size="lg" className="w-full sm:w-auto text-lg px-8 group relative overflow-hidden transition-all duration-300 hover:scale-105" onClick={() => {
                  openModal();
                }}>
                  <span className="relative z-10 flex items-center">
                    Hemen Teklif Al
                    <ArrowRight className="ml-2 h-5 w-5 animate-slide-right" />
                  </span>
                  <div className="absolute inset-0 bg-blue-700 transform translate-y-full transition-transform group-hover:translate-y-0 duration-300"></div>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 hover:bg-slate-50 transition-all duration-300 hover:scale-105" onClick={() => router.push('/hizmetlerimiz')}>
                  Hizmetleri İncele
                </Button>
              </div>

              {/* Hero Stats REMOVED */}

              {/* Sektörel Hizmetler Linkleri (Enhanced) */}
              <div className={`pt-8 border-t border-slate-100 ${getFadeInClass('delay-500')}`}>
                <div className="text-sm font-bold text-slate-900 mb-4 text-center lg:text-left">Sektörel Çözümler</div>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  <button onClick={() => router.push('/sektorler/saglik-klinik-web-tasarim')} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-700 font-medium text-sm hover:border-blue-400 hover:text-blue-600 hover:shadow-md transition-all">Sağlık & Klinik</button>
                  <button onClick={() => router.push('/sektorler/avukat-hukuk-web-tasarim')} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-700 font-medium text-sm hover:border-blue-400 hover:text-blue-600 hover:shadow-md transition-all">Hukuk</button>
                  <button onClick={() => router.push('/sektorler/teknik-servis-web-tasarim')} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-700 font-medium text-sm hover:border-blue-400 hover:text-blue-600 hover:shadow-md transition-all">Teknik Servis</button>
                  <button onClick={() => router.push('/sektorler/e-ticaret-cozumleri')} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-700 font-medium text-sm hover:border-blue-400 hover:text-blue-600 hover:shadow-md transition-all">E-Ticaret</button>
                  <button onClick={() => router.push('/iletisim')} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-700 font-medium text-sm hover:border-blue-400 hover:text-blue-600 hover:shadow-md transition-all">İnşaat</button>
                  <button onClick={() => router.push('/iletisim')} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-700 font-medium text-sm hover:border-blue-400 hover:text-blue-600 hover:shadow-md transition-all">Oto Galeri</button>
                </div>
              </div>
            </div>

            {/* Right: Minimal Pricing Cards Overlay */}
            <div className={`flex-1 w-full lg:max-w-xl relative ${getFadeInClass('delay-300')}`}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-[80px] opacity-60 -z-10" />

              <div className="grid grid-cols-2 gap-4">
                {prices.map((pkg, idx) => (
                  <div
                    key={idx}
                    onClick={() => router.push(pkg.href)}
                    className="group relative p-5 pt-7 rounded-3xl border bg-white shadow-sm transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-blue-100/50 hover:border-blue-200 border-slate-100 flex flex-col justify-between h-full overflow-hidden"
                  >
                    {/* Colored Badge on Top Right (Over the card) */}
                    <div className={`absolute top-0 right-0 px-3 py-1 rounded-bl-xl text-[10px] font-bold tracking-wide uppercase ${pkg.badgeColor}`}>
                      {pkg.badge}
                    </div>

                    <div className="space-y-3 mb-4">
                      <h3 className="font-bold text-base text-slate-800 group-hover:text-blue-600 transition-colors">{pkg.name}</h3>

                      {/* Price Container */}
                      <div className="flex flex-col items-start gap-0.5">
                        <span className="text-xs text-slate-400 line-through decoration-slate-400/50 font-medium">{pkg.oldPrice}</span>
                        <span className="text-2xl font-black text-slate-900 tracking-tight">{pkg.price}</span>
                      </div>

                      {/* Features List (Small) */}
                      <ul className="space-y-1.5 pt-1">
                        {pkg.features.map((feature, fi) => (
                          <li key={fi} className="flex items-start gap-1.5 text-[11px] text-slate-500 font-medium leading-tight">
                            <Check className="w-3 h-3 text-green-500 shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center mt-auto pt-3 border-t border-slate-50 group-hover:border-slate-100 transition-colors">
                      <span className="text-[10px] text-slate-500 font-bold tracking-wide group-hover:text-blue-600 transition-colors">DETAYLI İNCELE</span>
                      <div className="p-1.5 rounded-full bg-slate-100 text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 transform group-hover:rotate-[-45deg] shadow-sm">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-xs text-slate-400 mt-6 max-w-xs mx-auto opacity-70">
                * Fiyatlara KDV dahil değildir. 1 Aylık ücretsiz destek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CTA Section - REMOVED AS REQUESTED */}

      {/* 3. Testimonials Section - REMOVED AS REQUESTED */}

      {/* 4. FAQ Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Sıkça Sorulan Sorular</h2>
            <p className="text-slate-600">
              Aklınıza takılan soruların cevaplarını burada bulabilirsiniz.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-slate-100">
                  <AccordionTrigger className="text-slate-900 font-semibold hover:text-blue-600 hover:no-underline text-left">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

    </div>
  );
};
