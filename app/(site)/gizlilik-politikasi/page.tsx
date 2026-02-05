'use client';

import React from 'react';
import { Shield, Lock } from 'lucide-react';

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Banner Section */}
            <section className="relative py-16 md:py-24 bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-[50%] -right-[20%] w-[100%] h-[100%] rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 blur-3xl opacity-20" />
                    <div className="absolute top-[50%] -left-[20%] w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-purple-600 to-blue-600 blur-3xl opacity-20" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-blue-200 text-sm font-medium mb-6">
                        <Shield className="w-4 h-4" /> Güvenlik ve Gizlilik
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4">
                        Gizlilik Politikası
                    </h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Verilerinizin güvenliği bizim için önceliktir. Hangi verileri neden topladığımızı şeffaflıkla paylaşıyoruz.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto prose prose-slate prose-lg">

                        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 mb-10 flex items-start gap-4">
                            <Lock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 m-0 mb-2">Woyable Dijital Gizlilik Politikası</h3>
                                <p className="text-slate-600 m-0 text-sm md:text-base">
                                    Woyable Dijital olarak, kullanıcılarımızın ("Kullanıcı") gizliliğine ve kişisel verilerinin korunmasına en üst düzeyde önem veriyoruz. İşbu Gizlilik Politikası, https://woyable.com/ adresli web sitemizi ziyaret eden ve hizmetlerimizden yararlanan bireylerin hangi verilerinin nasıl işlendiğini açıklamak amacıyla hazırlanmıştır.
                                </p>
                            </div>
                        </div>

                        <h2>1. Toplanan Kişisel Veriler</h2>
                        <p>
                            Sitemizdeki iletişim formları, potansiyel müşteri formları veya çerezler aracılığıyla aşağıdaki veriler toplanabilmektedir:
                        </p>
                        <ul>
                            <li><strong>Kimlik Bilgileri:</strong> Ad ve soyad.</li>
                            <li><strong>İletişim Bilgileri:</strong> E-posta adresi, telefon numarası.</li>
                            <li><strong>Hizmet Bilgileri:</strong> Talep edilen hizmet türü (Web tasarım, sosyal medya yönetimi vb.).</li>
                            <li><strong>Teknik Veriler:</strong> IP adresi, tarayıcı bilgileri, site içi gezinti verileri.</li>
                        </ul>

                        <h2>2. Verilerin İşlenme Amaçları</h2>
                        <p>Toplanan verileriniz şu amaçlarla işlenmektedir:</p>
                        <ul>
                            <li>Sunduğumuz dijital hizmetler (Web tasarım, sosyal medya reklamları, kurumsal kimlik vb.) için teklif hazırlamak.</li>
                            <li>Müşteri taleplerine yanıt vermek ve etkili iletişim sağlamak.</li>
                            <li>Web sitesi performansını analiz ederek kullanıcı deneyimini iyileştirmek.</li>
                        </ul>

                        <h2>3. Verilerin Üçüncü Taraflarla Paylaşımı</h2>
                        <p>
                            Kişisel verileriniz, yasal zorunluluklar haricinde asla üçüncü şahıslara satılmaz veya kiralanmaz. Verileriniz, yalnızca hizmet süreçlerimizi yürütmemize yardımcı olan iş ortaklarımızla (sunucu sağlayıcıları, reklam yönetimi araçları vb.) gizlilik sözleşmeleri dahilinde paylaşılabilir.
                        </p>

                        <h2>4. Çerezler (Cookies)</h2>
                        <p>
                            Web sitemizde, ziyaretçilerimizin ilgi alanlarına göre reklam göstermek (re-marketing) ve site trafiğini analiz etmek için çerezler kullanılmaktadır. Tarayıcı ayarlarınızdan çerezleri reddetme hakkına sahipsiniz.
                        </p>

                        <h2>5. Veri Sahibi Olarak Haklarınız (KVKK Madde 11)</h2>
                        <p>
                            KVKK kapsamında herkes; verilerinin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme ve hatalı verilerin düzeltilmesini isteme hakkına sahiptir. Bu haklarınızı kullanmak için <a href="mailto:destek@woyable.com" className="text-blue-600 hover:text-blue-700 font-medium">destek@woyable.com</a> adresine e-posta gönderebilirsiniz.
                        </p>

                        <h2>6. Güvenlik</h2>
                        <p>
                            Kişisel verileriniz, yetkisiz erişim veya kaybolmaya karşı SSL sertifikalı güvenli sunucularımızda korunmaktadır.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
