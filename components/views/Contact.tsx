import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from '../ContactForm';

export const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">İletişime Geçin</h1>
          <p className="text-lg text-slate-600">
            Projenizi anlatın, size özel çözümler sunalım. Aşağıdaki formu doldurun, en kısa sürede dönüş yapalım.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-white shadow-md border-slate-200">
              <CardHeader>
                <CardTitle>İletişim Bilgileri</CardTitle>
                <CardDescription>Bize her zaman ulaşabilirsiniz.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">E-Posta</h4>
                    <p className="text-sm text-slate-600">info@woyable.com</p>
                    <p className="text-sm text-slate-600">destek@woyable.com</p>
                  </div>
                </div>



                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Konum</h4>
                    <p className="text-sm text-slate-600">Levent, İstanbul</p>
                    <p className="text-sm text-slate-600">Türkiye</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-blue-600 rounded-xl p-6 text-white shadow-lg">
              <h3 className="font-bold text-lg mb-2">Hemen Başlayalım</h3>
              <p className="text-blue-100 text-sm mb-4">
                Aklınızdaki proje için beklemeyin. Ücretsiz ön analiz ve fiyat teklifi için bize yazın.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white shadow-md border-slate-200 h-full">
              <CardHeader>
                <CardTitle>Proje Talep Formu</CardTitle>
                <CardDescription>
                  Formu doldurun, en kısa sürede size dönüş yapalım.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

    </div>
  );
};