'use client';

import React from 'react';
import { ServiceLayout } from '@/components/site/ServiceLayout';
import { Button } from '@/components/ui/Button';
import { ArrowRight, CheckCircle2, Code, Laptop, Rocket, Search, Shield, Smartphone, Zap, Palette, ClipboardList } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/Accordion";
import { useRouter } from 'next/navigation';

export default function WebDesignPage() {
    const router = useRouter();

    const techStack = [
        { name: "Next.js", desc: "Google tarafından sevilen, ultra hızlı React framework'ü." },
        { name: "React", desc: "Facebook'un geliştirdiği modern arayüz kütüphanesi." },
        { name: "Tailwind CSS", desc: "Özelleştirilebilir, modern tasarım sistemi." },
        { name: "Supabase", desc: "Güvenli ve ölçeklenebilir veritabanı altyapısı." },
        { name: "Vercel", desc: "Dünyanın en hızlı CDN ve hosting altyapısı." },
        { name: "TypeScript", desc: "Hatasız ve güvenli kodlama standardı." }
    ];

    const faqItems = [
        {
            q: "Web sitesi tasarımı ne kadar sürer?",
            a: "Projenin kapsamına göre değişmekle birlikte, kurumsal bir web sitesini ortalama 2-4 hafta içinde teslim ediyoruz. Özel yazılım projeleri (CRM, E-ticaret vb.) için süreç 4-8 hafta arasında değişebilir."
        },
        {
            q: "Sitem SEO uyumlu olacak mı?",
            a: "Kesinlikle. Tüm projelerimizi Google'ın Core Web Vitals standartlarına uygun, temiz kod yapısı ve Schema.org işaretlemeleri ile geliştiriyoruz. Bu sayede arama motorlarında daha hızlı yükselirsiniz."
        },
        {
            q: "Yönetim paneli veriyor musunuz?",
            a: "Evet. Sizi kodlarla uğraştırmıyoruz. Blog yazılarını, görselleri, ürünleri ve site içi metinleri kolayca güncelleyebileceğiniz, Türkçeleştirilmiş ve kullanıcı dostu bir yönetim paneli (CMS) sunuyoruz."
        },
        {
            q: "Fiyatlarınıza neler dahil?",
            a: "Fiyatlarımıza domain (alan adı) danışmanlığı, hosting kurulumu, SSL sertifikası, kurumsal e-posta kurulumu, temel SEO ayarları ve 1 yıllık teknik destek dahildir."
        }
    ];

    return (
        <ServiceLayout
            title="İşinizi Büyüten, SEO Uyumlu ve Modern Web Tasarım Hizmetleri"
            description="Web sitesi, dijital dünyadaki en güçlü mağazanızdır. Sadece 'var olması' yetmez; hızlı çalışmalı, güven vermeli ve ziyaretçiyi müşteriye dönüştürmelidir. İşletmenizin ihtiyaçlarına özel, mobil uyumlu (responsive), Google dostu ve yönetilebilir web siteleri tasarlıyoruz."
            serviceKey="web-design"
            packages={[
                {
                    name: "Başlangıç",
                    price: "3.000 ₺",
                    oldPrice: "7.500 ₺",
                    description: "Küçük işletmeler için temel web sitesi.",
                    features: ["Tek Sayfa Tasarım", "Mobil Uyumlu", "SSL Sertifikası", "İletişim Formu"],
                    badge: "En Uygun Fiyat"
                },
                {
                    name: "Profesyonel",
                    price: "7.500 ₺",
                    oldPrice: "15.000 ₺",
                    description: "Büyüyen firmalar için kapsamlı çözüm.",
                    features: ["5+ Sayfa Tasarım", "SEO Altyapısı", "Blog Modülü", "Yönetim Paneli", "WhatsApp Entegrasyonu", "Google Harita Kaydı"],
                    isPopular: true,
                    badge: "En Popüler"
                },
                {
                    name: "Kurumsal",
                    price: "Teklif Al",
                    description: "Size özel kapsamlı proje.",
                    features: ["Özel UI/UX Tasarım", "Çoklu Dil Desteği", "E-Ticaret Entegrasyonu", "Özel Yazılım Modülleri", "7/24 Destek"],
                    isCustom: true,
                    badge: "Size Özel"
                }
            ]}
        >
            <div className="space-y-20">
                {/* 1. Key Value Propositions */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Neden Bizi Tercih Etmelisiniz?</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Standart şablonlar yerine, markanızın ruhunu yansıtan ve dönüşüm odaklı tasarımlar üretiyoruz.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Smartphone className="text-blue-600 w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Mobil Öncelikli Tasarım</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Ziyaretçilerin %80'i sitenize telefondan girer. Tasarımlarımız her ekran boyutunda kusursuz bir deneyim sunar.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="bg-green-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Zap className="text-green-600 w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Ultra Hızlı Açılış</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Google Core Web Vitals uyumlu, optimize edilmiş kod yapısı ile rakiplerinizden daha hızlı açılan siteler yapıyoruz.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="bg-purple-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Search className="text-purple-600 w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">İleri Seviye SEO</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Sadece görsel değil, teknik olarak da mükemmel. Temiz HTML yapısı ve doğru etiketleme ile arama sonuçlarında öndesiniz.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2. Process Section */}
                <section className="bg-white py-12">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Çalışma Sürecimiz
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Dört Adımda Mükemmel Sonuç</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Projenizi hayata geçirirken izlediğimiz şeffaf ve profesyonel yol haritası.
                        </p>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4">
                        {/* Vertical Line */}
                        <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 md:-translate-x-1/2" />

                        <div className="space-y-12">
                            {/* Step 1 */}
                            <div className="relative flex flex-col md:flex-row items-start md:items-center group">
                                <div className="ml-16 md:ml-0 md:w-1/2 md:pr-16 md:text-right">
                                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 relative z-10 group-hover:-translate-y-1">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">1. Analiz & Planlama</h3>
                                        <p className="text-slate-600">Sektörünüzü, rakiplerinizi ve hedeflerinizi detaylıca analiz ederek projenin yol haritasını ve stratejisini belirliyoruz.</p>
                                    </div>
                                </div>
                                <div className="absolute left-4 md:left-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-600 border-4 border-white shadow-lg flex items-center justify-center z-20 md:-translate-x-1/2 mt-6 md:mt-0 transition-transform group-hover:scale-110">
                                    <Search className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                </div>
                                <div className="hidden md:block md:w-1/2" />
                            </div>

                            {/* Step 2 */}
                            <div className="relative flex flex-col md:flex-row items-start md:items-center group">
                                <div className="hidden md:block md:w-1/2" />
                                <div className="absolute left-4 md:left-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-indigo-600 border-4 border-white shadow-lg flex items-center justify-center z-20 md:-translate-x-1/2 mt-6 md:mt-0 transition-transform group-hover:scale-110">
                                    <Palette className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                </div>
                                <div className="ml-16 md:ml-0 md:w-1/2 md:pl-16">
                                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 relative z-10 group-hover:-translate-y-1">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">2. Tasarım & Onay</h3>
                                        <p className="text-slate-600">Marka kimliğinize uygun, modern ve kullanıcı dostu arayüz tasarımları hazırlayıp onayınıza sunuyoruz.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="relative flex flex-col md:flex-row items-start md:items-center group">
                                <div className="ml-16 md:ml-0 md:w-1/2 md:pr-16 md:text-right">
                                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 relative z-10 group-hover:-translate-y-1">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">3. Kodlama & Geliştirme</h3>
                                        <p className="text-slate-600">Onaylanan tasarımı, SEO uyumlu, hızlı ve güvenli kod yapısıyla işlevsel bir web sitesine dönüştürüyoruz.</p>
                                    </div>
                                </div>
                                <div className="absolute left-4 md:left-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-violet-600 border-4 border-white shadow-lg flex items-center justify-center z-20 md:-translate-x-1/2 mt-6 md:mt-0 transition-transform group-hover:scale-110">
                                    <Code className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                </div>
                                <div className="hidden md:block md:w-1/2" />
                            </div>

                            {/* Step 4 */}
                            <div className="relative flex flex-col md:flex-row items-start md:items-center group">
                                <div className="hidden md:block md:w-1/2" />
                                <div className="absolute left-4 md:left-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-600 border-4 border-white shadow-lg flex items-center justify-center z-20 md:-translate-x-1/2 mt-6 md:mt-0 transition-transform group-hover:scale-110">
                                    <Rocket className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                </div>
                                <div className="ml-16 md:ml-0 md:w-1/2 md:pl-16">
                                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 relative z-10 group-hover:-translate-y-1">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">4. Test & Yayın</h3>
                                        <p className="text-slate-600">tüm cihazlarda ve tarayıcılarda testleri tamamlayıp, gerekli optimizasyonları yaparak sitenizi yayına alıyoruz.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Technology Stack */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Kullandığımız Teknolojiler</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Eski teknolojilerle vakit kaybetmeyin. Biz, dünyanın en büyük teknoloji şirketlerinin kullandığı modern altyapıları kullanıyoruz.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {techStack.map((tech, i) => (
                            <div key={i} className="bg-white border border-slate-100 p-4 rounded-xl text-center hover:border-blue-200 transition-colors group">
                                <div className="font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">{tech.name}</div>
                                <div className="text-xs text-slate-500">{tech.desc}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. FAQ */}
                <section className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Sıkça Sorulan Sorular</h2>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.map((item, i) => (
                            <AccordionItem key={i} value={`item-${i}`}>
                                <AccordionTrigger className="text-left font-semibold text-slate-900">
                                    {item.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed">
                                    {item.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </section>

                {/* 5. Standard CTA Section */}
                <section>
                    <div className="relative overflow-hidden rounded-3xl group isolate bg-slate-900">
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-slate-900 group-hover:bg-slate-800 transition-colors duration-300" />

                        <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                            <div className="max-w-xl">
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                                    Web Sitenizi Yenilemeye Hazır mısınız?
                                </h3>
                                <p className="text-slate-300 text-lg leading-relaxed">
                                    Sektörünüzde fark yaratacak, satışlarınızı artıracak profesyonel bir web sitesi için hemen teklif alın.
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <Button
                                    className="h-14 px-8 bg-blue-600 text-white hover:bg-blue-700 text-lg font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2 border-none"
                                    onClick={() => router.push('/iletisim')}
                                >
                                    Teklif Alın <ArrowRight className="w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </ServiceLayout>
    );
}
