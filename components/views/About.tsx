'use client';

import React from 'react';
import { Button } from '../ui/Button';
import { useRouter } from 'next/navigation';
import { ArrowRight, Award, CheckCircle2, Clock, Code, Heart, Shield, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';

export const About = () => {
  const router = useRouter();

  const stats = [
    { label: "Yıllık Tecrübe", value: "5+" },
    { label: "Tamamlanan Proje", value: "50+" },
    { label: "Mutlu Müşteri", value: "%100" },
    { label: "Sektör Uzmanlığı", value: "10+" }
  ];

  const values = [
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Şeffaflık & Güven",
      desc: "Sürpriz maliyetler veya gizli süreçler yok. Her adımda sizinle açık iletişim kuruyoruz."
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: "Hız & Performans",
      desc: "Zamanın kıymetini biliyoruz. Projelerinizi taahhüt edilen sürede, en yüksek performansa sahip olacak şekilde teslim ediyoruz."
    },
    {
      icon: <Heart className="w-6 h-6 text-blue-600" />,
      title: "Müşteri Odaklılık",
      desc: "Sadece kod yazmıyoruz, işinizi sahipleniyoruz. Başarınız bizim başarımızdır."
    },
    {
      icon: <Award className="w-6 h-6 text-blue-600" />,
      title: "Kalite Standartları",
      desc: "Global tasarım ve yazılım trendlerini takip ediyor, işinize en modern çözümleri uyguluyoruz."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">

      {/* 1. Hero Section With Banner */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-slate-900 isolation-auto">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 mix-blend-screen"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 mix-blend-screen"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-900/50 border border-blue-700 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm">
            Woyable Digital Agency
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight max-w-4xl mx-auto">
            Dijital Geleceğinizi <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Birlikte Şekillendiriyoruz</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            Teknoloji, tasarım ve stratejiyi birleştirerek markanızı bir sonraki seviyeye taşıyoruz.
          </p>
        </div>
      </section>

      {/* 2. Stats Bar (Floating) */}
      <div className="container mx-auto px-4 relative z-20 -mt-12">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:text-left md:border-r border-slate-100 last:border-0 pl-0 md:pl-4 first:pl-0">
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Our Story & Content */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left: Heading */}
            <div className="lg:sticky lg:top-24">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Dijital dünyada iz bırakmak isteyen markaların çözüm ortağıyız.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Woyable, dijital dünyanın karmaşıklığını müşterileri için basitleştirmek ve ulaşılabilir kılmak amacıyla 5 yıl önce yola çıktı.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" onClick={() => router.push('/hizmetlerimiz')}>
                  Hizmetlerimizi İnceleyin
                </Button>
              </div>
            </div>

            {/* Right: Detailed Text */}
            <div className="space-y-8 text-slate-600 text-lg leading-relaxed">
              <p>
                Bugün, farklı sektörlerden birçok markaya uçtan uca dijital hizmetler sunan profesyonel bir ekibiz.
                Amacımız sadece bir web sitesi veya logo teslim etmek değil; işinizi büyütmenize yardımcı olacak, ölçülebilir ve yaşayan dijital varlıklar oluşturmaktır.
              </p>
              <p>
                Her projeye "kendi işimiz" gibi yaklaşıyoruz. Şeffaflık, dürüstlük ve sonuç odaklılık bizim temel prensiplerimizdir.
                Süslü sözler yerine işleyen sistemler, göz boyayan grafikler yerine kullanıcı dostu deneyimler tasarlıyoruz.
              </p>

              <div className="pt-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Neler Yapıyoruz?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Code className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                    <span>Kurumsal Web Tasarım & E-Ticaret Sistemleri</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                    <span>Sosyal Medya Yönetimi & Dijital Pazarlama</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                    <span>Özel Yazılım & CRM Çözümleri</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Değerlerimiz</h2>
            <p className="text-slate-600 text-lg">
              Bizi biz yapan ve projelerimize yön veren prensiplerimiz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <Card key={i} className="border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 pt-8 text-center flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    {val.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{val.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {val.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Standard CTA Section (Matching Blog Style) */}
      <section className="py-20 container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl group isolate bg-slate-900">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-slate-900 group-hover:bg-slate-800 transition-colors duration-300" />

          <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-xl">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                Tanışmak ve projenizi konuşmak ister misiniz?
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Hayalinizdeki projeyi gerçeğe dönüştürmek için bir kahve içmeye bekleriz.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button
                className="h-14 px-8 bg-blue-600 text-white hover:bg-blue-700 text-lg font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2 border-none"
                onClick={() => router.push('/iletisim')}
              >
                İletişime Geçin <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};