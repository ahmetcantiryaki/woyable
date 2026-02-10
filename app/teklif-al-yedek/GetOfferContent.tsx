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
    Layers,
    Palette,
    Stamp,
    FileImage,
    CreditCard,
    PenTool,
    Building2
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

// Kategori tanımları
interface CategoryItem {
    id: string;
    label: string;
    icon: React.ElementType;
    badgeColor: string;
}

interface PackageItem {
    name: string;
    price: string;
    oldPrice: string;
    desc: string;
    badge: string;
    badgeColor: string;
    category: string;
}

export function GetOfferContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

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

    // Kategoriler - Yeni sıralama: Tasarım → Sosyal Medya → Web → Sektörel → Özel Yazılım → E-Ticaret
    const categories: CategoryItem[] = [
        { id: 'design', label: 'Tasarım Hizmetleri', icon: Palette, badgeColor: '' },
        { id: 'social', label: 'Sosyal Medya Yönetimi', icon: Megaphone, badgeColor: '' },
        { id: 'web', label: 'Web Sitesi Paketleri', icon: Globe, badgeColor: '' },
        { id: 'sectoral', label: 'Sektörel Çözümler', icon: Briefcase, badgeColor: '' },
        { id: 'software', label: 'Özel Yazılım', icon: Cpu, badgeColor: '' },
        { id: 'ecommerce', label: 'E-Ticaret Paketleri', icon: ShoppingBag, badgeColor: '' },
    ];

    // Tüm paketler tek bir dizide, kategori bilgisiyle birlikte
    const allPackages: PackageItem[] = [
        // Tasarım Hizmetleri - En ucuzdan pahalıya
        { category: 'design', name: "Kartvizit Tasarımı", price: "499 ₺", oldPrice: "1.200 ₺", desc: "Şık ve akılda kalıcı.", badge: "", badgeColor: "" },
        { category: 'design', name: "Logo Tasarımı", price: "1.299 ₺", oldPrice: "3.500 ₺", desc: "Profesyonel ve özgün.", badge: "", badgeColor: "" },
        { category: 'design', name: "Sosyal Medya Kiti", price: "1.999 ₺", oldPrice: "4.500 ₺", desc: "Profil + Kapak + Post.", badge: "", badgeColor: "" },
        { category: 'design', name: "Kurumsal Kimlik Paketi", price: "3.999 ₺", oldPrice: "9.000 ₺", desc: "Logo + Kartvizit + Antetli.", badge: "", badgeColor: "" },

        // Sosyal Medya - 3 paket
        { category: 'social', name: "Başlangıç Paketi", price: "3.500 ₺", oldPrice: "7.000 ₺", desc: "Aylık 12 paylaşım.", badge: "", badgeColor: "" },
        { category: 'social', name: "Profesyonel Yönetim", price: "6.500 ₺", oldPrice: "12.500 ₺", desc: "Aylık 20 paylaşım + hikaye.", badge: "", badgeColor: "" },
        { category: 'social', name: "Tam Kapsamlı Dijital", price: "15.000 ₺", oldPrice: "30.000 ₺", desc: "Reklam + yönetim.", badge: "", badgeColor: "" },

        // Web Tasarım Paketleri - 3 paket
        { category: 'web', name: "Başlangıç Web Sitesi", price: "2.999 ₺", oldPrice: "6.500 ₺", desc: "Tek sayfa, hızlı teslim.", badge: "", badgeColor: "" },
        { category: 'web', name: "Sektörel Web Sitesi", price: "4.999 ₺", oldPrice: "9.999 ₺", desc: "Sektörünüze özel tasarım.", badge: "", badgeColor: "" },
        { category: 'web', name: "Kurumsal Web Sitesi", price: "7.999 ₺", oldPrice: "15.000 ₺", desc: "Tam kapsamlı çözüm.", badge: "", badgeColor: "" },
        
        // Sektörel Çözümler
        { category: 'sectoral', name: "Klinik & Sağlık", price: "2.999 ₺", oldPrice: "7.999 ₺", desc: "Randevu odaklı.", badge: "", badgeColor: "" },
        { category: 'sectoral', name: "Hukuk & Avukat", price: "2.999 ₺", oldPrice: "7.999 ₺", desc: "Kurumsal ve prestijli.", badge: "", badgeColor: "" },
        { category: 'sectoral', name: "E-Ticaret Katalog", price: "2.999 ₺", oldPrice: "7.999 ₺", desc: "Ürün kataloğu.", badge: "", badgeColor: "" },
        { category: 'sectoral', name: "İnşaat & Mimarlık", price: "2.999 ₺", oldPrice: "7.999 ₺", desc: "Proje galerisi.", badge: "", badgeColor: "" },
        { category: 'sectoral', name: "Oto Galeri", price: "2.999 ₺", oldPrice: "7.999 ₺", desc: "Araç portföyü.", badge: "", badgeColor: "" },
        { category: 'sectoral', name: "Turizm & Hotel", price: "2.999 ₺", oldPrice: "7.999 ₺", desc: "Rezervasyon.", badge: "", badgeColor: "" },
        { category: 'sectoral', name: "Eğitim & Kurs", price: "2.999 ₺", oldPrice: "7.999 ₺", desc: "Ders programı.", badge: "", badgeColor: "" },
        { category: 'sectoral', name: "Restoran & Cafe", price: "2.999 ₺", oldPrice: "7.999 ₺", desc: "QR Menü.", badge: "", badgeColor: "" },
        
        // Özel Yazılım
        { category: 'software', name: "Özel Yazılım Projesi", price: "Teklif Al", oldPrice: "", desc: "Size özel butik çözümler.", badge: "", badgeColor: "" },
        
        // E-Ticaret - 3 paket
        { category: 'ecommerce', name: "E-Ticaret Başlangıç", price: "9.999 ₺", oldPrice: "20.000 ₺", desc: "Hızlı başlangıç.", badge: "", badgeColor: "" },
        { category: 'ecommerce', name: "E-Ticaret Standart", price: "19.999 ₺", oldPrice: "35.000 ₺", desc: "Tam donanımlı mağaza.", badge: "", badgeColor: "" },
        { category: 'ecommerce', name: "E-Ticaret Pro", price: "39.999 ₺", oldPrice: "75.000 ₺", desc: "Kurumsal altyapı.", badge: "", badgeColor: "" },
    ];

    // Kategoriye göre paketleri grupla
    const getPackagesByCategory = (categoryId: string) => {
        return allPackages.filter(pkg => pkg.category === categoryId);
    };

    // Seçilen paketin detaylarını al
    const getSelectedPackageDetails = () => {
        return allPackages.find(pkg => pkg.name === selectedPackage);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePackageSelect = (pkgName: string) => {
        setSelectedPackage(pkgName);
        // Not alanını otomatik doldur
        setFormData(prev => ({
            ...prev,
            message: `${pkgName} hakkında bilgi almak istiyorum.`
        }));
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
            data.append('service', 'all');
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

            {/* RIGHT COLUMN (Form) - Genişletildi 720px */}
            <div className="w-full lg:w-[520px] xl:w-[720px] bg-gradient-to-b from-slate-50 to-white flex flex-col border-l border-slate-200 shadow-2xl shadow-slate-300/30 z-30 lg:h-screen lg:sticky lg:top-0 order-1 lg:order-2 lg:overflow-y-auto mt-12 lg:mt-0 flex-shrink-0">
                <div id="offer-form" className="p-5 md:p-8 lg:p-10 w-full max-w-lg mx-auto">

                    {/* Başlık */}
                    <div className="mb-6 text-center">
                        <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
                            Ücretsiz Teklif Alın
                        </h2>
                        <p className="text-slate-600 text-sm lg:text-base mb-4">
                            Formu doldurun, <strong className="text-slate-800">1 saat içinde</strong> size dönelim.
                        </p>
                        
                        {/* Öne Çıkan Avantajlar */}
                        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs lg:text-sm text-slate-600">
                            <span className="flex items-center gap-1.5">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                Ücretsiz Danışmanlık
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                Hızlı Teslimat
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                Uygun Fiyat Garantisi
                            </span>
                        </div>
                    </div>

                    {/* Seçilen Paket Bilgisi */}
                    {selectedPackage && (() => {
                        const pkg = getSelectedPackageDetails();
                        return pkg ? (
                            <div className="mb-5 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                                <div className="flex items-center justify-between gap-3">
                                    <div>
                                        <div className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-0.5">İlgilendiğiniz Paket</div>
                                        <div className="text-base lg:text-lg font-bold text-slate-900">{pkg.name}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-lg lg:text-xl font-bold text-blue-600">{pkg.price}</div>
                                        {pkg.oldPrice && (
                                            <div className="text-sm text-red-500 line-through">{pkg.oldPrice}</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ) : null;
                    })()}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="space-y-3">
                            <div className="bg-white rounded-xl border border-slate-200 focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400 transition-all shadow-sm">
                                <label className="block text-[10px] lg:text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 pt-3">Ad Soyad</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 pb-3 bg-transparent outline-none text-slate-900 font-medium placeholder:text-slate-400 text-base"
                                    placeholder="Adınız Soyadınız"
                                />
                            </div>

                            <div className="bg-white rounded-xl border border-slate-200 focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400 transition-all shadow-sm">
                                <label className="block text-[10px] lg:text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 pt-3">Telefon</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 pb-3 bg-transparent outline-none text-slate-900 font-medium placeholder:text-slate-400 text-base"
                                    placeholder="05XX XXX XX XX"
                                />
                            </div>

                            <div className="bg-white rounded-xl border border-slate-200 focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400 transition-all shadow-sm">
                                <label className="block text-[10px] lg:text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 pt-3">Notunuz (Opsiyonel)</label>
                                <textarea
                                    name="message"
                                    rows={2}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 pb-3 bg-transparent outline-none text-slate-900 font-medium placeholder:text-slate-400 resize-none text-base"
                                    placeholder="Projenizden kısaca bahsedin..."
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`
                                w-full h-12 lg:h-14 rounded-xl font-bold text-base lg:text-lg flex items-center justify-center gap-2 transition-all duration-300
                                ${isSubmitting 
                                    ? 'bg-slate-300 text-slate-500 cursor-not-allowed shadow-none' 
                                    : 'bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-0.5 shadow-lg hover:shadow-blue-500/30'
                                }
                            `}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Gönderiliyor...
                                </>
                            ) : (
                                <>
                                    Ücretsiz Teklif Al
                                    <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </button>
                    </form>

                    {/* İletişim Butonları */}
                    <div className="mt-5 pt-5 border-t border-slate-200">
                        <p className="text-center text-xs text-slate-500 mb-3">veya doğrudan iletişime geçin</p>
                        <div className="grid grid-cols-2 gap-3">
                            <a
                                href="https://wa.me/905339401855"
                                target="_blank"
                                className="flex items-center justify-center gap-2 h-11 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#20b858] transition-all duration-300 group text-sm shadow-md"
                            >
                                <WhatsAppIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                WhatsApp
                            </a>
                            <a
                                href="tel:+905339401855"
                                className="flex items-center justify-center gap-2 h-11 rounded-xl bg-slate-800 text-white font-semibold hover:bg-slate-900 transition-all duration-300 text-sm shadow-md"
                            >
                                <Phone className="w-4 h-4" />
                                0533 940 18 55
                            </a>
                        </div>
                    </div>

                    {/* Güvence Yazıları */}
                    <div className="mt-6 space-y-2">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>Bilgileriniz gizli tutulur, 3. şahıslarla paylaşılmaz</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>Teklif tamamen ücretsiz ve bağlayıcı değildir</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>7/24 WhatsApp desteği</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* LEFT COLUMN (Content & Packages) - Second on Mobile */}
            <div className="w-full lg:flex-1 p-3 lg:p-6 xl:p-8 flex flex-col relative order-2 lg:order-1 lg:h-screen lg:overflow-y-auto lg:pt-6 pb-16 bg-slate-50">
                {/* Desktop Header Links */}
                <div className="hidden lg:flex gap-3 mb-4 pl-2">
                    <button onClick={() => router.push('/')} className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors bg-white px-4 py-2 rounded-full border border-slate-200 hover:border-blue-200 hover:shadow-sm">
                        <Home className="w-4 h-4" /> Anasayfaya Dön
                    </button>
                    <button onClick={() => router.push('/hizmetlerimiz')} className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors bg-white px-4 py-2 rounded-full border border-slate-200 hover:border-blue-200 hover:shadow-sm">
                        <Layers className="w-4 h-4" /> Hizmetleri İncele
                    </button>
                </div>

                <div className="max-w-6xl mx-auto w-full space-y-5 lg:space-y-6 pb-8">
                    <div className="space-y-1 lg:space-y-2 px-1 lg:px-0 text-center lg:text-left">
                        <h1 className="text-xl lg:text-3xl font-black text-slate-900 leading-[1.2] tracking-tight">
                            İlgilendiğiniz Paketi{' '}
                            <span className="text-blue-700">Seçin</span>
                        </h1>
                        <p className="text-xs lg:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Size en uygun paketi seçin, formda otomatik olarak işaretlensin.
                        </p>
                    </div>

                    {/* TÜM KATEGORİLER VE PAKETLER */}
                    {categories.map((category) => {
                        const categoryPackages = getPackagesByCategory(category.id);
                        if (categoryPackages.length === 0) return null;
                        
                        return (
                            <div key={category.id} className="space-y-3">
                                {/* Kategori Başlık - Düz ve büyük */}
                                <h2 className="text-base lg:text-lg font-bold text-slate-800 border-b border-slate-200 pb-2">
                                    {category.label}
                                </h2>

                                {/* Paket Kartları */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-2.5 lg:gap-3">
                                    {categoryPackages.map((pkg, idx) => {
                                        const isSelected = selectedPackage === pkg.name;
                                        return (
                                            <div
                                                key={idx}
                                                onClick={() => handlePackageSelect(pkg.name)}
                                                className={`
                                                    group relative rounded-xl border bg-white shadow-sm transition-all duration-300 cursor-pointer overflow-hidden p-3
                                                    ${isSelected
                                                        ? 'border-green-500 ring-2 ring-green-500 shadow-md bg-green-50/30'
                                                        : 'border-slate-200 hover:shadow-md hover:border-blue-300'
                                                    }
                                                `}
                                            >
                                                {/* İsim */}
                                                <h3 className={`font-bold text-slate-800 group-hover:text-blue-700 transition-colors text-sm lg:text-base leading-snug mb-2 ${isSelected ? 'text-green-700' : ''}`}>
                                                    {pkg.name}
                                                </h3>

                                                {/* Fiyatlar - Eski fiyat daha büyük */}
                                                <div className="flex items-baseline gap-2.5 flex-wrap">
                                                    <span className="font-semibold text-slate-800 text-base lg:text-lg tracking-tight">{pkg.price}</span>
                                                    {pkg.oldPrice && (
                                                        <span className="text-base lg:text-xl font-bold text-red-500 line-through decoration-red-500 decoration-2 bg-red-50 px-2 py-0.5 rounded">
                                                            {pkg.oldPrice}
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Alt kısım - minimal */}
                                                <div className={`mt-2 pt-2 border-t text-xs font-semibold ${isSelected ? 'border-green-200 text-green-600' : 'border-slate-100 text-blue-600 group-hover:text-blue-700'}`}>
                                                    {isSelected ? '✓ Seçildi' : 'Teklif Al →'}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
