'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Button } from '../ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Loader2, Search, Calendar, Clock, Mail, Phone, Trash2, LayoutDashboard, FileText } from 'lucide-react';
import { AdminBlog } from './AdminBlog';

// Status types
type SubmissionStatus = 'new' | 'read' | 'contacted' | 'archived';

interface Submission {
    id: string;
    created_at: string;
    name: string;
    email: string;
    phone: string;
    service: string;
    selected_package?: string;
    message: string;
    status: SubmissionStatus;
    subject?: string;
}

export const Admin: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Dashboard state
    const [submissions, setSubmissions] = useState<Submission[]>([]);
    const [loading, setLoading] = useState(false);
    const [filterStatus, setFilterStatus] = useState<string>('all');
    const [filterService, setFilterService] = useState<string>('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState<'submissions' | 'blog'>('submissions');

    // Check for existing session
    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                setIsAuthenticated(true);
                fetchSubmissions();
            }
        };

        checkSession();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            if (session) {
                setIsAuthenticated(true);
                fetchSubmissions();
            } else {
                setIsAuthenticated(false);
                setSubmissions([]);
            }
        });

        return () => subscription.unsubscribe();
    }, []);

    // Login handler
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;

            if (data.session) {
                setIsAuthenticated(true);
                fetchSubmissions();
            }
        } catch (err: any) {
            setError(err.message || 'Giriş başarısız. Lütfen bilgilerinizi kontrol edin.');
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        setIsAuthenticated(false);
    };

    const fetchSubmissions = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('contact_messages')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching submissions:', error);
        } else {
            setSubmissions(data as Submission[]);
        }
        setLoading(false);
    };

    const updateStatus = async (id: string, newStatus: SubmissionStatus) => {
        // Optimistic update
        setSubmissions(prev => prev.map(sub =>
            sub.id === id ? { ...sub, status: newStatus } : sub
        ));

        const { error } = await supabase
            .from('contact_messages')
            .update({ status: newStatus })
            .eq('id', id);

        if (error) {
            console.error('Error updating status:', error);
            fetchSubmissions(); // Revert on error
        }
    };

    const filteredSubmissions = submissions.filter(sub => {
        const matchesSearch =
            sub.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            sub.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            sub.phone?.includes(searchTerm);

        const matchesStatus = filterStatus === 'all' || sub.status === filterStatus;
        const matchesService = filterService === 'all' || sub.service === filterService;

        return matchesSearch && matchesStatus && matchesService;
    });

    const deleteSubmission = async (id: string) => {
        if (!window.confirm('Bu kaydı silmek istediğinize emin misiniz?')) return;

        // Optimistic update
        setSubmissions(prev => prev.filter(sub => sub.id !== id));

        const { error } = await supabase
            .from('contact_messages')
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Error deleting submission:', error);
            alert('Silme işlemi başarısız oldu.');
            fetchSubmissions(); // Revert
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-100">
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle className="text-center">Admin Girişi</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div className="space-y-2">
                                <input
                                    type="email"
                                    placeholder="E-Posta"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div className="space-y-2">
                                <input
                                    type="password"
                                    placeholder="Şifre"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                            <Button type="submit" className="w-full">Giriş Yap</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 p-6">
            <div className="max-w-7xl mx-auto space-y-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-slate-900">Yönetim Paneli</h1>
                    <div className="flex items-center gap-4">
                        <div className="flex bg-white rounded-lg p-1 border shadow-sm">
                            <button
                                onClick={() => setActiveTab('submissions')}
                                className={`px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-all ${activeTab === 'submissions' ? 'bg-blue-600 text-white shadow' : 'text-slate-600 hover:bg-slate-50'}`}
                            >
                                <LayoutDashboard className="h-4 w-4" /> Talepler
                            </button>
                            <button
                                onClick={() => setActiveTab('blog')}
                                className={`px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-all ${activeTab === 'blog' ? 'bg-blue-600 text-white shadow' : 'text-slate-600 hover:bg-slate-50'}`}
                            >
                                <FileText className="h-4 w-4" /> Blog
                            </button>
                        </div>
                        <Button variant="outline" onClick={handleLogout}>Çıkış Yap</Button>
                    </div>
                </div>

                {activeTab === 'submissions' ? (
                    <>
                        {/* Filters */}
                        <div className="bg-white p-4 rounded-lg shadow flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
                            <div className="relative w-full lg:w-1/3">
                                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                                <input
                                    placeholder="İsim, E-posta veya Telefon Ara..."
                                    value={searchTerm}
                                    onChange={e => setSearchTerm(e.target.value)}
                                    className="pl-9 w-full h-10 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                                {/* Service Filter */}
                                <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
                                    <span className="text-sm font-medium text-slate-500 whitespace-nowrap">Hizmet:</span>
                                    <select
                                        value={filterService}
                                        onChange={(e) => setFilterService(e.target.value)}
                                        className="h-10 rounded border border-slate-300 text-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="all">Tümü</option>
                                        <option value="web-design">Web Tasarım</option>
                                        <option value="ecommerce">E-Ticaret</option>
                                        <option value="social">Sosyal Medya</option>
                                        <option value="ads">Google Ads</option>
                                        <option value="branding">Kurumsal Kimlik</option>
                                        <option value="printing">Baskı & Etkinlik</option>
                                        <option value="custom-dev">Özel Yazılım</option>
                                        <option value="other">Diğer</option>
                                    </select>
                                </div>

                                {/* Status Filter */}
                                <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
                                    {['all', 'new', 'read', 'contacted', 'archived'].map(status => (
                                        <button
                                            key={status}
                                            onClick={() => setFilterStatus(status)}
                                            className={`px-3 py-2 rounded-full text-xs font-medium whitespace-nowrap capitalize transition-colors ${filterStatus === status
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                                }`}
                                        >
                                            {status === 'all' ? 'Tümü' : status === 'new' ? 'Yeni' : status}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* List */}
                        <div className="bg-white rounded-lg shadow overflow-hidden">
                            {loading ? (
                                <div className="p-8 flex justify-center">
                                    <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead className="bg-slate-50 border-b">
                                            <tr>
                                                <th className="p-4 font-semibold text-slate-600">Tarih</th>
                                                <th className="p-4 font-semibold text-slate-600">Kişi Bilgileri</th>
                                                <th className="p-4 font-semibold text-slate-600">Hizmet / Paket</th>
                                                <th className="p-4 font-semibold text-slate-600">Durum</th>
                                                <th className="p-4 font-semibold text-slate-600">İşlemler</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y">
                                            {filteredSubmissions.map(sub => (
                                                <tr key={sub.id} className="hover:bg-slate-50 transition-colors">
                                                    <td className="p-4 align-top whitespace-nowrap">
                                                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                                                            <Calendar className="h-4 w-4" />
                                                            {new Date(sub.created_at).toLocaleDateString()}
                                                        </div>
                                                        <div className="flex items-center gap-2 text-slate-400 text-xs mt-1">
                                                            <Clock className="h-3 w-3" />
                                                            {new Date(sub.created_at).toLocaleTimeString()}
                                                        </div>
                                                    </td>
                                                    <td className="p-4 align-top">
                                                        <div className="font-medium text-slate-900">{sub.name || '-'}</div>
                                                        {sub.email && (
                                                            <div className="flex items-center gap-1 text-slate-500 text-sm mt-1">
                                                                <Mail className="h-3 w-3" /> {sub.email}
                                                            </div>
                                                        )}
                                                        {sub.phone && (
                                                            <div className="flex items-center gap-1 text-slate-500 text-sm mt-1">
                                                                <Phone className="h-3 w-3" /> {sub.phone}
                                                            </div>
                                                        )}
                                                    </td>
                                                    <td className="p-4 align-top max-w-xs">
                                                        <div className="inline-block px-2 py-1 rounded bg-blue-50 text-blue-700 text-xs font-semibold mb-1">
                                                            {sub.service || 'Seçilmedi'}
                                                        </div>
                                                        {sub.selected_package && sub.selected_package !== 'Karar Vermedim' && (
                                                            <div className="inline-block ml-1 px-2 py-1 rounded bg-purple-50 text-purple-700 text-xs font-semibold mb-1">
                                                                {sub.selected_package}
                                                            </div>
                                                        )}
                                                        <p className="text-sm text-slate-600 line-clamp-2 mt-1">{sub.message || '-'}</p>
                                                    </td>
                                                    <td className="p-4 align-top">
                                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                          ${sub.status === 'new' ? 'bg-yellow-100 text-yellow-800' : ''}
                          ${sub.status === 'read' ? 'bg-blue-100 text-blue-800' : ''}
                          ${sub.status === 'contacted' ? 'bg-green-100 text-green-800' : ''}
                          ${sub.status === 'archived' ? 'bg-gray-100 text-gray-800' : ''}
                        `}>
                                                            {sub.status === 'new' && 'Yeni'}
                                                            {sub.status === 'read' && 'Okundu'}
                                                            {sub.status === 'contacted' && 'İletişime Geçildi'}
                                                            {sub.status === 'archived' && 'Arşiv'}
                                                        </span>
                                                    </td>
                                                    <td className="p-4 align-top flex items-center gap-2">
                                                        <select
                                                            value={sub.status}
                                                            onChange={(e) => updateStatus(sub.id, e.target.value as SubmissionStatus)}
                                                            className="text-sm border rounded p-1"
                                                        >
                                                            <option value="new">Yeni</option>
                                                            <option value="read">Okundu</option>
                                                            <option value="contacted">İletişime Geçildi</option>
                                                            <option value="archived">Arşiv</option>
                                                        </select>
                                                        <Button
                                                            variant="default"
                                                            size="sm"
                                                            className="bg-red-500 hover:bg-red-600 text-white"
                                                            onClick={() => deleteSubmission(sub.id)}
                                                            title="Kaydı Sil"
                                                        >
                                                            <Trash2 className="h-3 w-3 mr-1" /> Sil
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))}
                                            {filteredSubmissions.length === 0 && (
                                                <tr>
                                                    <td colSpan={5} className="p-8 text-center text-slate-500">
                                                        Kayıt bulunamadı.
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <AdminBlog />
                )}
            </div>
        </div>
    );
};
