'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    Code2,
    Globe,
    ShoppingBag,
    Megaphone,
    Cpu,
    Check,
    ArrowRight,
    Loader2,
    Phone,
    MonitorSmartphone,
    Briefcase,
    Home,
    CheckCircle2,
    ChevronDown,
    Layers
} from 'lucide-react';
import { sendAdLeadForm } from '@/actions/contact';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';

// WhatsApp SVG Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

export function GetOfferContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState('web');
    const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isMobileTabOpen, setIsMobileTabOpen] = useState(false);

    // UTM params for tracking
    const [utmParams, setUtmParams] = useState({
        utm_source: '',
        utm_medium: '',
        utm_campaign: '',
        gclid: ''
    });

    useEffect(() => {
        setUtmParams({
            utm_source: searchParams.get('utm_source') || '',
            utm_medium: searchParams.get('utm_medium') || '',
            utm_campaign: searchParams.get('utm_campaign') || '',
            gclid: searchParams.get('gclid') || ''
        });
    }, [searchParams]);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const categories = [
        { id: 'web', label: 'Web Tasarım', icon: Globe },
        { id: 'sectoral', label: 'Sektörel Çözümler', icon: Briefcase },
        { id: 'ecommerce', label: 'E-Ticaret', icon: ShoppingBag },
        { id: 'social', label: 'Sosyal Medya', icon: Megaphone },
        { id: 'software', label: 'Özel Yazılım', icon: Cpu },
    ];

    const packages = {
        web: [
            {
                name: "Sektöre Özel Web Sitesi",
                price: "2.999 ₺",
                oldPrice: "7.999 ₺",
                desc: "Hızlı, ekonomik ve şık çözüm.",
                badge: "KAMPANYA",
                badgeColor: "bg-teal-600 text-white"
            },
            {
                name: "Kurumsal Web Sitesi",
                price: "7.500 ₺",
                oldPrice: "12.000 ₺",
                desc: "Tam kapsamlı kurumsal kimlik.",
                badge: "PROFESYONEL",
                badgeColor: "bg-blue-600 text-white"
            }
        ],
        sectoral: [
            { name: "Klinik & Sağlık", price: "2.999 ₺", oldPrice: "7.999 ₺", desc: "Randevu odaklı.", badge: "SAĞLIK", badgeColor: "bg-teal-500 text-white" },
            { name: "Hukuk & Avukat", price: "2.999 ₺", oldPrice: "7.999 ₺", desc: "Kurumsal ve prestijli.", badge: "HUKUK", badgeColor: "bg-slate-700 text-white" },
            { name: "E-Ticaret Katalog", price: "2.999 ₺", oldPrice: "7.999 ₺", desc: "Ürün kataloğu.", badge: "E-TİCARET", badgeColor: "bg-purple-500 text-white" },
            { name: "İnşaat & Mimarlık", price: "2.999 ₺", oldPrice: "7.999 ₺", desc: "Proje galerisi.", badge: "İNŞAAT", badgeColor: "bg-orange-500 text-white" },
            { name: "Oto Galeri", price: "2.999 ₺", oldPrice: "7.999 ₺", desc: "Araç portföyü.", badge: "OTOMOTİV", badgeColor: "bg-red-500 text-white" },
            { name: "Turizm & Hotel", price: "2.999 ₺", oldPrice: "7.999 ₺", desc: "Rezervasyon.", badge: "TURİZM", badgeColor: "bg-cyan-500 text-white" },
            { name: "Eğitim & Kurs", price: "2.999 ₺", oldPrice: "7.999 ₺", desc: "Ders programı.", badge: "EĞİTİM", badgeColor: "bg-yellow-500 text-slate-900" },
            { name: "Restoran & Cafe", price: "2.999 ₺", oldPrice: "7.999 ₺", desc: "QR Menü.", badge: "GIDA", badgeColor: "bg-rose-500 text-white" },
        ],
        ecommerce: [
            {
                name: "E-Ticaret Başlangıç",
                price: "15.000 ₺",
                oldPrice: "25.000 ₺",
                desc: "Online satışa hemen başlayın.",
                badge: "STARTUP",
                badgeColor: "bg-purple-600 text-white"
            },
            {
                name: "E-Ticaret Pro",
                price: "35.000 ₺",
                oldPrice: "60.000 ₺",
                desc: "Hacimli satışlar için güçlü altyapı.",
                badge: "İLERİ DÜZEY",
                badgeColor: "bg-indigo-600 text-white"
            }
        ],
        social: [
            {
                name: "Sosyal Medya Yönetimi",
                price: "7.500 ₺",
                oldPrice: "12.500 ₺",
                desc: "Markanız sosyal medyada parlasın.",
                badge: "AYLIK",
                badgeColor: "bg-rose-600 text-white"
            },
            {
                name: "Tam Kapsamlı Dijital",
                price: "19.000 ₺",
                oldPrice: "30.000 ₺",
                desc: "Reklam ve yönetim bir arada.",
                badge: "FULL PAKET",
                badgeColor: "bg-orange-600 text-white"
            }
        ],
        software: [
            {
                name: "Özel Yazılım Projesi",
                price: "Teklif Al",
                oldPrice: "",
                desc: "Size özel butik çözümler.",
                badge: "KURUMSAL",
                badgeColor: "bg-slate-800 text-white"
            }
        ]
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePackageSelect = (pkgName: string) => {
        setSelectedPackage(pkgName);
        const formElement = document.getElementById('offer-form');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const data = new FormData();
            data.append('name', formData.name);
            data.append('phone', formData.phone);
            data.append('email', formData.email);
            data.append('message', formData.message);
            data.append('service', activeTab);
            data.append('selectedPackage', selectedPackage || 'Genel Teklif');
            data.append('utm_source', utmParams.utm_source);
            data.append('utm_medium', utmParams.utm_medium);
            data.append('utm_campaign', utmParams.utm_campaign);
            data.append('gclid', utmParams.gclid);

            const response = await sendAdLeadForm(null, data);

            if (response?.success) {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'conversion_event_landing_offer', { event_timeout: 2000 });
                }
                setIsSubmitted(true);
            } else {
                alert(response?.message || 'Bir hata oluştu.');
            }
        } catch (error) {
            console.error(error);
            alert('Bir hata oluştu.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const getActiveCategoryLabel = () => {
        return categories.find(c => c.id === activeTab)?.label || 'Kategori Seçin';
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-100">
                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">Harika! Talebiniz Alındı.</h2>
                <p className="text-slate-600 max-w-lg mx-auto mb-10 text-base lg:text-lg leading-relaxed">
                    Uzman ekibimiz <strong>1 saat içinde</strong> projenizi inceleyip size özel teklifimizle dönüş yapacaktır.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                        onClick={() => router.push('/')}
                        className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl px-8 py-5 h-auto text-base lg:text-lg"
                    >
                        <Home className="w-5 h-5 mr-2" />
                        Anasayfaya Dön
                    </Button>
                    <Button
                        onClick={() => window.open('https://wa.me/905339401855', '_blank')}
                        className="bg-[#25D366] hover:bg-[#20b858] text-white rounded-xl px-8 py-5 h-auto text-base lg:text-lg border-none"
                    >
                        <WhatsAppIcon className="w-5 h-5 mr-2" />
                        WhatsApp'tan Yaz
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row overflow-hidden relative font-sans selection:bg-blue-100">
            {/* Background Decorations */}
            <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-rose-600 z-50" />

            {/* Mobile Nav Header */}
            <header className="lg:hidden fixed top-0 left-0 w-full p-3 flex justify-between items-center z-40 bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm">
                <Link href="/" className="flex items-center gap-2">
                    <div className="bg-blue-600 p-1.5 rounded-lg">
                        <Code2 className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-bold text-slate-900 text-sm">Woyable</span>
                </Link>
                <div className="flex items-center gap-2">
                    <Link href="/" className="text-[10px] font-bold px-2.5 py-1.5 bg-slate-100 text-slate-600 rounded-lg">Anasayfa</Link>
                    <Link href="/hizmetlerimiz" className="text-[10px] font-bold px-2.5 py-1.5 bg-slate-100 text-slate-600 rounded-lg">Hizmetler</Link>
                    <a href="https://wa.me/905339401855" target="_blank" className="text-[10px] font-bold px-2.5 py-1.5 bg-[#25D366] text-white rounded-lg flex items-center gap-1">
                        <WhatsAppIcon className="w-3 h-3" />
                    </a>
                </div>
            </header>

            {/* Mobile First Layout Order: Form First (Order-1), Content Second (Order-2) */}

            {/* RIGHT COLUMN (Form) - Reordered for Mobile */}
            <div className="w-full lg:w-5/12 bg-white flex flex-col justify-center border-l border-slate-100 shadow-2xl shadow-slate-200/50 z-30 lg:h-screen lg:sticky lg:top-0 order-1 lg:order-2 lg:overflow-y-auto mt-12 lg:mt-0 pt-4 lg:pt-0">
                <div id="offer-form" className="p-4 md:p-8 lg:p-10 xl:p-12 w-full max-w-lg mx-auto">

                    <div className="mb-4 lg:mb-6 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-[10px] lg:text-xs font-bold uppercase tracking-wide mb-2 border border-green-100">
                            <MonitorSmartphone className="w-3 h-3" />
                            Hızlı Teklif Formu
                        </div>
                        <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-1">
                            {selectedPackage ? (
                                <span className="text-blue-600">{selectedPackage}</span>
                            ) : 'Hemen Başlayalım'}
                        </h2>
                        <p className="text-slate-500 text-xs lg:text-sm font-medium">
                            <strong>1 saat içinde</strong> teklifiniz cebinize gelsin.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-2.5 lg:space-y-3">
                        <div className="space-y-2.5 lg:space-y-3">
                            <div className="bg-slate-50 rounded-xl border border-slate-100 focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400 transition-all">
                                <label className="block text-[9px] lg:text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 pt-2">Ad Soyad</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-3 pb-2 bg-transparent outline-none text-slate-900 font-semibold placeholder:text-slate-300 text-sm"
                                    placeholder="Adınız Soyadınız"
                                />
                            </div>

                            <div className="bg-slate-50 rounded-xl border border-slate-100 focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400 transition-all">
                                <label className="block text-[9px] lg:text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 pt-2">Telefon</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-3 pb-2 bg-transparent outline-none text-slate-900 font-semibold placeholder:text-slate-300 text-sm"
                                    placeholder="05XX XXX XX XX"
                                />
                            </div>

                            <div className="bg-slate-50 rounded-xl border border-slate-100 focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400 transition-all">
                                <label className="block text-[9px] lg:text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 pt-2">Notunuz (Opsiyonel)</label>
                                <textarea
                                    name="message"
                                    rows={2}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-3 pb-2 bg-transparent outline-none text-slate-900 font-semibold placeholder:text-slate-300 resize-none text-sm"
                                    placeholder={selectedPackage ? `${selectedPackage} hakkında bilgi almak istiyorum.` : "Projenizden kısaca bahsedin..."}
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className={`
                                w-full h-11 lg:h-12 rounded-xl font-bold text-sm lg:text-base flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-blue-500/25
                                ${isSubmitting ? 'bg-slate-100 text-slate-400' : 'bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-0.5'}
                            `}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Gönderiliyor...
                                </>
                            ) : (
                                <>
                                    Teklif İste
                                    <ArrowRight className="w-4 h-4" />
                                </>
                            )}
                        </Button>
                    </form>

                    <div className="mt-4 pt-4 border-t border-slate-100">
                        <div className="grid grid-cols-2 gap-2">
                            <a
                                href="https://wa.me/905339401855"
                                target="_blank"
                                className="flex items-center justify-center gap-2 h-10 rounded-xl bg-[#25D366] text-white font-bold hover:bg-[#20b858] transition-all duration-300 group text-xs lg:text-sm shadow-md shadow-green-500/20"
                            >
                                <WhatsAppIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                WhatsApp
                            </a>
                            <a
                                href="tel:+905339401855"
                                className="flex items-center justify-center gap-2 h-10 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all duration-300 text-xs lg:text-sm shadow-md shadow-blue-500/20"
                            >
                                <Phone className="w-4 h-4" />
                                Hemen Ara
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* LEFT COLUMN (Content & Packages) - Second on Mobile */}
            <div className="w-full lg:w-7/12 p-3 lg:p-4 xl:p-8 flex flex-col relative order-2 lg:order-1 lg:h-screen lg:overflow-y-auto lg:pt-8 pb-16 bg-slate-50">
                {/* Desktop Header Links */}
                <div className="hidden lg:flex gap-3 mb-6 pl-4">
                    <button onClick={() => router.push('/')} className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors bg-white px-4 py-2 rounded-full border border-slate-200 hover:border-blue-200 hover:shadow-sm">
                        <Home className="w-4 h-4" /> Anasayfaya Dön
                    </button>
                    <button onClick={() => router.push('/hizmetlerimiz')} className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors bg-white px-4 py-2 rounded-full border border-slate-200 hover:border-blue-200 hover:shadow-sm">
                        <Layers className="w-4 h-4" /> Hizmetleri İncele
                    </button>
                </div>

                <div className="max-w-4xl mx-auto w-full space-y-4 lg:space-y-6 pb-8">
                    <div className="space-y-1 lg:space-y-2 px-1 lg:px-0 text-center lg:text-left">
                        <h1 className="text-xl lg:text-4xl font-black text-slate-900 leading-[1.2] tracking-tight">
                            Hizmet Paketlerini{' '}
                            <span className="text-blue-700">İnceleyin</span>
                        </h1>
                        <p className="text-xs lg:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Size en uygun paketi seçin, formda otomatik olarak işaretlensin. Uzman ekibimiz detaylı fiyat teklifi ve proje planı ile hızlıca dönüş yapsın.
                        </p>
                    </div>

                    {/* MOBILE: Dropdown Tab Selector */}
                    <div className="lg:hidden relative">
                        <button
                            onClick={() => setIsMobileTabOpen(!isMobileTabOpen)}
                            className="w-full flex items-center justify-between gap-2 px-4 py-3 bg-white rounded-xl border border-slate-200 shadow-sm text-sm font-bold text-slate-700"
                        >
                            <div className="flex items-center gap-2">
                                {React.createElement(categories.find(c => c.id === activeTab)?.icon || Globe, { className: "w-4 h-4 text-blue-600" })}
                                {getActiveCategoryLabel()}
                            </div>
                            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isMobileTabOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isMobileTabOpen && (
                            <div className="absolute top-full left-0 w-full mt-1 bg-white rounded-xl border border-slate-200 shadow-lg z-30 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => { setActiveTab(cat.id); setIsMobileTabOpen(false); }}
                                        className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold transition-colors ${activeTab === cat.id ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
                                    >
                                        <cat.icon className="w-4 h-4" />
                                        {cat.label}
                                        {activeTab === cat.id && <Check className="w-4 h-4 ml-auto" />}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* DESKTOP: Regular Tabs */}
                    <div className="hidden lg:block sticky top-0 z-20 bg-slate-50 py-2">
                        <div className="flex flex-wrap gap-2 p-1 bg-white border border-slate-200 rounded-xl shadow-sm">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveTab(cat.id)}
                                    className={`
                                        flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-all duration-300 whitespace-nowrap
                                        ${activeTab === cat.id
                                            ? 'bg-slate-900 text-white shadow-md'
                                            : 'bg-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                                        }
                                    `}
                                >
                                    <cat.icon className="w-3.5 h-3.5" />
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* PACKAGES GRID - Compact for Sectoral */}
                    <div className={`grid gap-2 lg:gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500 ${activeTab === 'sectoral' ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-2'}`}>
                        {packages[activeTab as keyof typeof packages].map((pkg, idx) => {
                            const isSelected = selectedPackage === pkg.name;
                            return (
                                <div
                                    key={idx}
                                    onClick={() => handlePackageSelect(pkg.name)}
                                    className={`
                                        group relative rounded-xl lg:rounded-2xl border bg-white shadow-sm transition-all duration-300 cursor-pointer overflow-hidden
                                        ${activeTab === 'sectoral' ? 'p-3' : 'p-4 lg:p-5'}
                                        ${isSelected
                                            ? 'border-blue-600 ring-2 ring-blue-600 shadow-lg bg-blue-50/50'
                                            : 'border-slate-100 hover:shadow-md hover:border-blue-200'
                                        }
                                    `}
                                >
                                    {/* Badge */}
                                    <div className={`absolute top-0 right-0 px-2 py-0.5 rounded-bl-lg text-[8px] lg:text-[9px] font-bold tracking-wider uppercase ${pkg.badgeColor}`}>
                                        {pkg.badge}
                                    </div>

                                    <div className={`${activeTab === 'sectoral' ? 'space-y-1.5' : 'space-y-2 lg:space-y-3'}`}>
                                        <h3 className={`font-bold text-slate-900 group-hover:text-blue-700 transition-colors pr-6 ${activeTab === 'sectoral' ? 'text-xs lg:text-sm' : 'text-sm lg:text-base'} ${isSelected ? 'text-blue-700' : ''}`}>
                                            {pkg.name}
                                        </h3>

                                        <div className="flex flex-col items-start gap-0">
                                            {pkg.oldPrice && <span className="text-[10px] lg:text-xs text-slate-400 line-through font-medium">{pkg.oldPrice}</span>}
                                            <span className={`font-black text-slate-900 tracking-tight ${activeTab === 'sectoral' ? 'text-base lg:text-lg' : 'text-xl lg:text-2xl'}`}>{pkg.price}</span>
                                        </div>

                                        <p className={`text-slate-500 font-medium ${activeTab === 'sectoral' ? 'text-[10px] lg:text-xs' : 'text-xs lg:text-sm'}`}>
                                            {pkg.desc}
                                        </p>
                                    </div>

                                    <div className={`flex items-center justify-between font-bold uppercase tracking-wide transition-colors ${activeTab === 'sectoral' ? 'mt-2 pt-2 text-[9px]' : 'mt-3 pt-3 text-[10px] lg:text-xs'} border-t border-slate-100 ${isSelected ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-600'}`}>
                                        <span>{isSelected ? 'Seçildi ✓' : 'Seç'}</span>
                                        <div className={`p-1 rounded-full transition-all duration-300 ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white'}`}>
                                            {isSelected ? <Check className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
