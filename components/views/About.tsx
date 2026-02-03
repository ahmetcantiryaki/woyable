'use client';

import React from 'react';
import { Button } from '../ui/Button';
import { useRouter } from 'next/navigation';

export const About = () => {
  const router = useRouter();

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-24 max-w-3xl">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Woyable Hakkında
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            Teknoloji ve stratejiyi birleştirerek markalar için sürdürülebilir dijital değerler üretiyoruz.
          </p>
        </div>

        {/* Plain Content */}
        <div className="space-y-12 text-slate-700 leading-relaxed text-lg">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Biz Kimiz?</h2>
            <p>
              Woyable, dijital dünyanın karmaşıklığını müşterileri için basitleştirmek ve ulaşılabilir kılmak amacıyla 5 yıl önce yola çıktı.
              Bugün, farklı sektörlerden birçok markaya uçtan uca dijital hizmetler sunan profesyonel bir ekibiz.
              Amacımız sadece bir web sitesi veya logo teslim etmek değil; işinizi büyütmenize yardımcı olacak, ölçülebilir ve yaşayan dijital varlıklar oluşturmaktır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Yaklaşımımız</h2>
            <p className="mb-4">
              Her projeye "kendi işimiz" gibi yaklaşıyoruz. Şeffaflık, dürüstlük ve sonuç odaklılık bizim temel prensiplerimizdir.
              Süslü sözler yerine işleyen sistemler, göz boyayan grafikler yerine kullanıcı dostu deneyimler tasarlıyoruz.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 text-base marker:text-slate-400 pl-2">
              <li>Global standartlarda kodlama ve tasarım</li>
              <li>Sürekli teknik destek ve ulaşılabilirlik</li>
              <li>İhtiyaca özel, ölçeklenebilir çözümler</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Ne Yapıyoruz?</h2>
            <p>
              Kurumsal web tasarımından e-ticaret sistemlerine, sosyal medya yönetiminden özel yazılım çözümlerine kadar
              işletmenizin dijitaldeki tüm ihtiyaçlarını tek çatı altında karşılıyoruz.
            </p>
          </section>

          {/* Simple CTA */}
          <section className="pt-8 border-t border-slate-100 mt-12">
            <p className="mb-6 font-medium text-slate-900">
              Tanışmak ve projenizi konuşmak ister misiniz?
            </p>
            <Button
              className="bg-slate-900 hover:bg-slate-800 text-white min-w-[200px]"
              onClick={() => router.push('/iletisim')}
            >
              İletişime Geçin
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
};