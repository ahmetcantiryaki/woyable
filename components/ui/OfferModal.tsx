'use client';

import React from 'react';
import { X, Check, Rocket, Zap, MessagesSquare, ShieldCheck, Cpu } from 'lucide-react';
import { ContactForm } from '../ContactForm';
import { useOfferModal } from '../context/OfferModalContext';

export const OfferModal = () => {
    const { isOpen, closeModal } = useOfferModal();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={closeModal}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">

                {/* Close Button */}
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/50 hover:bg-white rounded-full transition-colors text-slate-500 hover:text-slate-900"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Left Side: Visual & Content (Hidden on mobile to save space if needed, or kept for impact) */}
                <div className="hidden md:flex w-2/5 bg-slate-900 relative flex-col justify-between p-10 text-white overflow-hidden">
                    {/* Background Effects */}
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-slate-900 to-slate-900 opacity-50"></div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-30"></div>
                        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-600 rounded-full blur-[80px] opacity-20"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
                            <Rocket className="w-3 h-3" />
                            Woyable Ajans
                        </div>

                        <h2 className="text-4xl font-black leading-tight">
                            Projenizi <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                Birlikte Büyütelim
                            </span>
                        </h2>

                        <p className="text-slate-300 leading-relaxed">
                            Hayalinizdeki dijital dönüşüm için ilk adımı atın. Uzman ekibimiz projenizi analiz edip size özel çözümler sunsun.
                        </p>
                    </div>

                    {/* Visual Features List */}
                    <div className="relative z-10 grid grid-cols-1 gap-3 mt-8">
                        <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10 backdrop-blur-md">
                            <div className="p-2 bg-blue-500/20 rounded-lg text-blue-300">
                                <Zap className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Hızlı Dönüş</h4>
                                <p className="text-xs text-slate-400">1 saat içinde detaylı teklif</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10 backdrop-blur-md">
                            <div className="p-2 bg-purple-500/20 rounded-lg text-purple-300">
                                <MessagesSquare className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Ücretsiz Danışmanlık</h4>
                                <p className="text-xs text-slate-400">Projeniz için strateji görüşmesi</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10 backdrop-blur-md">
                            <div className="p-2 bg-green-500/20 rounded-lg text-green-300">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Güvenli Altyapı</h4>
                                <p className="text-xs text-slate-400">Modern ve güvenli kodlama</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10 backdrop-blur-md">
                            <div className="p-2 bg-rose-500/20 rounded-lg text-rose-300">
                                <Cpu className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Son Teknoloji</h4>
                                <p className="text-xs text-slate-400">Next.js & React performansı</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 mt-auto pt-8">
                        <div className="flex items-center gap-2 opacity-90">
                            <div className="flex -space-x-3">
                                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-9 h-9 rounded-full border-2 border-slate-900 object-cover" />
                                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-9 h-9 rounded-full border-2 border-slate-900 object-cover" />
                                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="User" className="w-9 h-9 rounded-full border-2 border-slate-900 object-cover" />
                                <div className="w-9 h-9 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-[10px] font-bold">
                                    +500
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-white">Mutlu Müşteri</span>
                                
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="w-full md:w-3/5 p-6 md:p-10 overflow-y-auto bg-white">
                    <div className="md:hidden mb-6">
                        <h2 className="text-2xl font-bold text-slate-900">Teklif İste</h2>
                        <p className="text-slate-500 text-sm">Projeniz için hemen fiyat teklifi alın.</p>
                    </div>

                    <div className="h-full flex flex-col justify-center">
                        <ContactForm variant="full" defaultPackage="Kurumsal (Teklif Al)" />
                        <p className="text-center text-xs text-slate-400 mt-6">
                            Göndererek, <a href="#" className="underline">Gizlilik Politikamızı</a> kabul etmiş olursunuz.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
