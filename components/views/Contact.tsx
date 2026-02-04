import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from '../ContactForm';

export const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">İletişime Geçin</h1>
          <p className="text-slate-600 text-sm">
            Projeleriniz için yanınızdayız.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Contact Info - Side / Top */}
          <div className="md:col-span-4 space-y-4">
            <Card className="bg-white shadow-sm border-slate-200">
              <CardContent className="p-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg shrink-0">
                    <Mail className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">E-Posta</h4>
                    <p className="text-xs text-slate-500">info@woyable.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg shrink-0">
                    <MapPin className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Konum</h4>
                    <p className="text-xs text-slate-500">Levent, İstanbul</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-blue-600 rounded-lg p-5 text-white shadow-md">
              <h3 className="font-bold text-base mb-1">Hemen Başlayalım</h3>
              <p className="text-blue-100 text-xs">
                Fikirlerinizi duymak için sabırsızlanıyoruz.
              </p>
            </div>
          </div>

          {/* Form - Main Focus but Compact */}
          <div className="md:col-span-8">
            <Card className="bg-white shadow-sm border-slate-200">
              <CardHeader className="pb-3 border-b border-slate-50">
                <CardTitle className="text-lg">Proje Formu</CardTitle>
                <CardDescription className="text-xs">
                  Detayları paylaşın, sizinle iletişime geçelim.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-5">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};