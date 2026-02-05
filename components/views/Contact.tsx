'use client';

import React from 'react';
import { ContactForm } from '@/components/ContactForm';
import { Mail, MapPin, Phone, Clock, MessageSquare, ShieldCheck } from 'lucide-react';

export const Contact: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Modern Banner Section */}
            <section className="relative py-20 lg:py-28 overflow-hidden bg-slate-900 text-white">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-[50%] -right-[20%] w-[100%] h-[100%] rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 blur-3xl opacity-30" />
                    <div className="absolute top-[50%] -left-[20%] w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-purple-600 to-blue-600 blur-3xl opacity-20" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-blue-200 text-sm font-medium mb-6">
                        <MessageSquare className="w-4 h-4" /> Bize Ulaşın
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
                        Projelerinizi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Hayata Geçirelim</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Dijital dünyada fark yaratmak için doğru adrestesiniz. Projenizi dinlemek ve size özel çözümler sunmak için sabırsızlanıyoruz.
                    </p>
                </div>
            </section>

            {/* Main Content & Form Section */}
            <section className="relative -mt-16 pb-20 z-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                        <div className="grid grid-cols-1 lg:grid-cols-2">

                            {/* Left: Contact Info */}
                            <div className="p-8 md:p-12 lg:p-16 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-100">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">İletişim Bilgileri</h3>
                                <p className="text-slate-600 mb-10">
                                    Aşağıdaki kanallardan bize 7/24 ulaşabilir veya ofisimizi ziyaret edebilirsiniz.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-5 group">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg mb-1">Ofis Adresimiz</h4>
                                            <p className="text-slate-600 leading-relaxed">
                                                Yakında Açılıyor...
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5 group">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg mb-1">Telefon</h4>
                                            <p className="text-slate-600">
                                                <a href="tel:+908501234567" className="hover:text-blue-600 transition-colors">0850 123 45 67</a>
                                            </p>
                                            <p className="text-slate-500 text-sm mt-1">Hafta içi: 09:00 - 18:00</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5 group">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg mb-1">E-Posta</h4>
                                            <p className="text-slate-600">
                                                <a href="mailto:info@woyable.com" className="hover:text-blue-600 transition-colors">info@woyable.com</a>
                                            </p>
                                            <p className="text-slate-500 text-sm mt-1">Ortalama 2 saat içinde dönüş</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 p-6 bg-blue-50/50 rounded-2xl border border-blue-100 flex items-start gap-4">
                                    <ShieldCheck className="w-8 h-8 text-blue-600 shrink-0" />
                                    <div>
                                        <h5 className="font-bold text-slate-900 mb-1">Güvenli ve Hızlı</h5>
                                        <p className="text-sm text-slate-600">
                                            Talepleriniz doğrudan ilgili birime iletilir ve en geç 24 saat içinde uzman ekibimiz tarafından yanıtlanır.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Contact Form */}
                            <div className="p-8 md:p-12 lg:p-16 bg-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-full opacity-50" />

                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Bize Yazın</h3>
                                    <p className="text-slate-600 mb-8">
                                        Aklınızdaki proje veya sorularınız için formu doldurun, sizi arayalım.
                                    </p>

                                    <ContactForm variant="full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-[400px] md:h-[500px] w-full bg-slate-200 relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.071888204273!2d29.015795676550796!3d41.11116697133604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5b780000001%3A0x868cb5a3ef2c3f8e!2sMaslak%2C%20B%C3%BCy%C3%BCkdere%20Cd.%20No%3A255%2C%2034485%20Sar%C4%B1yer%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1707168000000!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(100%) contrast(1.2)' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Agency Location"
                    className="absolute inset-0 w-full h-full"
                ></iframe>

                {/* Map Overlay Badge */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-lg border border-slate-200 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-semibold text-slate-900">Yakında Açılıyor...</span>
                </div>
            </section>
        </div>
    );
};
