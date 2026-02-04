import React, { useEffect, useState } from 'react';
import { Button } from '../ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '../ui/Card';
import { ArrowRight, CheckCircle2, Rocket, Layout, Database, BarChart3, Users, Zap, Shield, Check, Search, Code, Smartphone, Target, Star, Clock } from 'lucide-react';
import { PageView } from '../../types';
import { ContactForm } from '../ContactForm';
import { PricingSection } from '../sections/PricingSection';

import { useRouter } from 'next/navigation';

export const Home = () => {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const router = useRouter();

  const features = [
    {
      title: "Hız Kazandırır",
      desc: "Projelerinizi aylar değil, haftalar içinde tamamlıyoruz. Modern teknolojilerle (Next.js, React) geliştirdiğimiz siteler rakiplerinizden %80 daha hızlı açılır.",
      color: "text-blue-600",
      icon: <Rocket className="h-8 w-8" />
    },
    {
      title: "Güven İnşa Eder",
      desc: "Sürpriz maliyetler yok. Şeffaf süreç yönetimi ile projenizin her aşamasından haberdar olursunuz. 7/24 teknik destek ile asla yalnız kalmazsınız.",
      color: "text-indigo-600",
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: "Sonuç Odaklıdır",
      desc: "Sadece 'güzel' görünen siteler değil, satış getiren, dönüşüm sağlayan ve Google'da üst sıralara çıkan stratejik dijital varlıklar üretiyoruz.",
      color: "text-green-600",
      icon: <Target className="h-8 w-8" />
    }
  ];

  useEffect(() => {
    // Trigger entry animations
    setMounted(true);

    // Mouse movement handler for parallax
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized coordinates (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    // Text rotator interval
    const interval = setInterval(() => {
      setActiveFeatureIndex((prev) => (prev + 1) % features.length);
    }, 4000);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    }
  }, []);

  // Helper to generate staggered fade-in classes
  const getFadeInClass = (delay: string) =>
    `transition-all duration-1000 ease-out transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
    } ${delay}`;

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-8">

            {/* Animated Badge */}
            <div className={`inline-flex items-center justify-center w-full ${getFadeInClass('delay-0')}`}>
              <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                Yeni nesil dijital ajans deneyimi
              </div>
            </div>

            {/* Animated Headline */}
            <h1 className={`text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 ${getFadeInClass('delay-100')}`}>
              Dijital Dünyada <br className="hidden md:block" />
              <span className="text-blue-600 relative inline-block">
                İşinizi Büyütün
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Animated Description */}
            <p className={`text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto ${getFadeInClass('delay-200')}`}>
              Woyable ile markanızı teknolojiyle güçlendirin. Web tasarım, özel yazılım ve dijital pazarlama çözümleriyle rakiplerinizin önüne geçin.
            </p>

            {/* Animated Buttons */}
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 ${getFadeInClass('delay-300')}`}>
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 group relative overflow-hidden" onClick={() => {
                const element = document.getElementById('contact-form-section');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}>
                <span className="relative z-10 flex items-center">
                  Hemen Teklif Al
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-blue-700 transform translate-y-full transition-transform group-hover:translate-y-0 duration-300"></div>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 hover:bg-slate-50" onClick={() => router.push('/hizmetlerimiz')}>
                Hizmetleri İncele
              </Button>
            </div>

            {/* Animated Stats */}
            <div className={`pt-8 flex items-center justify-center gap-8 text-sm text-slate-500 ${getFadeInClass('delay-500')}`}>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Hızlı Teslimat
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> 7/24 Destek
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Modern Teknoloji
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* 2. Pricing Packages Section */}
      <PricingSection />

      {/* 3. Services Section (Grid of Small Cards) */}
      <section className="py-20 bg-white" id="services">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Hizmetlerimiz</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              İşletmenizin ihtiyacı olan tüm dijital çözümleri tek bir çatı altında sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Layout className="h-8 w-8 text-blue-600" />}
              title="Web Tasarım & Yazılım"
              description="Responsive, SEO uyumlu ve modern web siteleri."
            />
            <FeatureCard
              icon={<Database className="h-8 w-8 text-blue-600" />}
              title="Özel Yazılım & CRM"
              description="İş süreçlerinize özel yönetim panelleri ve yazılımlar."
            />
            <FeatureCard
              icon={<BarChart3 className="h-8 w-8 text-blue-600" />}
              title="Google Ads & SEO"
              description="Arama motorlarında zirveye çıkaran reklam stratejileri."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-blue-600" />}
              title="Sosyal Medya Yönetimi"
              description="Markanız için profesyonel içerik üretimi ve yönetimi."
            />
            <FeatureCard
              icon={<Rocket className="h-8 w-8 text-blue-600" />}
              title="E-Ticaret Sistemleri"
              description="Satışlarınızı artıracak güvenli alışveriş altyapıları."
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-blue-600" />}
              title="Dijital Danışmanlık"
              description="Teknoloji ve büyüme odaklı stratejik yol haritası."
            />
          </div>
        </div>
      </section>

      {/* 4. Direct Contact Form Section (Minimal) */}
      <section id="contact-form-section" className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Projenizi Hayata Geçirelim</h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                Aklınızdaki fikirleri gerçeğe dönüştürmek için ilk adımı atın. Formu doldurun, size özel çözüm önerimiz ve fiyat teklifimizle geri dönelim.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 text-blue-100">
                  <div className="bg-blue-500/50 p-2 rounded-full">
                    <Check className="h-5 w-5" />
                  </div>
                  <span>Ücretsiz Ön Analiz</span>
                </div>
                <div className="flex items-center gap-4 text-blue-100">
                  <div className="bg-blue-500/50 p-2 rounded-full">
                    <Check className="h-5 w-5" />
                  </div>
                  <span>24 Saat İçinde Dönüş</span>
                </div>
              </div>
            </div>

            {/* Embedded Form Card */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl text-slate-900 max-w-md w-full mx-auto lg:ml-auto">
              <h3 className="text-xl font-bold mb-4">Hemen Teklif Alın</h3>
              <ContactForm variant="minimal" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us (Fixed Animated Text Section) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">

            {/* Left Column: Fixed Title Area */}
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight mb-4 tracking-tight">
                Neden <br />
                <span className="text-blue-600">Woyable?</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-md">
                Çünkü biz sadece kod yazmıyoruz, işletmeniz için yaşayan dijital ekosistemler kuruyoruz.
              </p>
            </div>

            {/* Right Column: Animated Text Rotator */}
            <div className="relative h-64 flex flex-col justify-center pl-0 lg:pl-10">
              {/* Decorative line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-100 hidden lg:block">
                <div
                  className="w-full bg-blue-600 transition-all duration-500 ease-in-out absolute"
                  style={{
                    height: '33%',
                    top: `${activeFeatureIndex * 33}%`
                  }}
                ></div>
              </div>

              {/* Animated Content */}
              <div className="transition-all duration-500 transform">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-slate-50 ${features[activeFeatureIndex].color}`}>
                    {features[activeFeatureIndex].icon}
                  </div>
                  <h3 className={`text-3xl md:text-4xl font-bold ${features[activeFeatureIndex].color}`}>
                    {features[activeFeatureIndex].title}
                  </h3>
                </div>
                <p className="text-xl text-slate-600 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-500" key={activeFeatureIndex}>
                  {features[activeFeatureIndex].desc}
                </p>
              </div>

              {/* Mobile Indicators */}
              <div className="flex gap-2 mt-8 lg:hidden">
                {features.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveFeatureIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${idx === activeFeatureIndex ? 'w-8 bg-blue-600' : 'w-2 bg-slate-200'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Static Process Grid (Bottom of section) */}
          <div className="border-t border-slate-100 pt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="mx-auto bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Search className="h-8 w-8" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">01. Analiz</h4>
                <p className="text-sm text-slate-500">İhtiyaçlarınızı anlıyoruz.</p>
              </div>
              <div className="text-center group">
                <div className="mx-auto bg-indigo-50 w-16 h-16 rounded-2xl flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Layout className="h-8 w-8" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">02. Tasarım</h4>
                <p className="text-sm text-slate-500">Modern arayüzler çiziyoruz.</p>
              </div>
              <div className="text-center group">
                <div className="mx-auto bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-8 w-8" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">03. Yazılım</h4>
                <p className="text-sm text-slate-500">Güçlü altyapı kuruyoruz.</p>
              </div>
              <div className="text-center group">
                <div className="mx-auto bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="h-8 w-8" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">04. Yayın</h4>
                <p className="text-sm text-slate-500">Dünyaya açılıyoruz.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

// Components
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <Card className="hover:shadow-md transition-shadow duration-300 border-slate-200 h-full">
    <CardHeader className="p-5">
      <div className="mb-3 bg-blue-50 w-fit p-2.5 rounded-lg">
        {icon}
      </div>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent className="p-5 pt-0">
      <CardDescription className="text-sm text-slate-600">
        {description}
      </CardDescription>
    </CardContent>
  </Card>
);



