import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Button } from '../ui/Button';
import { Card, CardContent } from '../ui/Card';
import { Loader2, Plus, Edit, Trash2, Globe, ArrowLeft, Save, Upload, Tag } from 'lucide-react';

interface BlogCategory {
    id: string;
    name: string;
    slug: string;
}

interface BlogPost {
    id: string;
    title: string;
    slug: string;
    status: 'draft' | 'published' | 'archived';
    published_at: string;
    related_service_key: string;
    created_at: string;
    category_id?: string; // Virtual field for UI
}

export const AdminBlog: React.FC = () => {
    // ... existing state ...
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [categories, setCategories] = useState<BlogCategory[]>([]);
    const [loading, setLoading] = useState(false);
    const [view, setView] = useState<'list' | 'editor' | 'categories' | 'import'>('list');
    const [editingId, setEditingId] = useState<string | null>(null);
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        content: '',
        excerpt: '',
        status: 'draft',
        seo_title: '',
        seo_description: '',
        related_service_key: '',
        custom_cta_text: '',
        category_id: ''
    });

    const [newCategoryName, setNewCategoryName] = useState('');
    const [jsonInput, setJsonInput] = useState('');
    const [importStatus, setImportStatus] = useState<{ success: number; error: number; message: string } | null>(null);

    useEffect(() => {
        fetchPosts();
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        const { data } = await supabase.from('blog_categories').select('*').order('name');
        if (data) setCategories(data as any);
    };

    const handleCreateCategory = async () => {
        if (!newCategoryName.trim()) return;
        const slug = generateSlug(newCategoryName);
        await supabase.from('blog_categories').insert([{ name: newCategoryName, slug }]);
        setNewCategoryName('');
        fetchCategories();
    };

    const handleDeleteCategory = async (id: string) => {
        if (!confirm('Kategoriyi silmek istediğinize emin misiniz?')) return;
        await supabase.from('blog_categories').delete().eq('id', id);
        fetchCategories();
    };

    const fetchPosts = async () => {
        setLoading(true);
        const { data } = await supabase.from('blog_posts').select('*').order('created_at', { ascending: false });
        if (data) setPosts(data as any);
        setLoading(false);
    };

    const handleCreateNew = () => {
        setFormData({
            title: '', slug: '', content: '', excerpt: '', status: 'draft',
            seo_title: '', seo_description: '', related_service_key: '', custom_cta_text: '', category_id: ''
        });
        setEditingId(null);
        setView('editor');
    };

    const handleEdit = async (post: BlogPost) => {
        setLoading(true);
        const { data } = await supabase.from('blog_posts').select('*').eq('id', post.id).single();

        // Fetch categories for this post
        const { data: catData } = await supabase
            .from('blog_posts_categories')
            .select('category_id')
            .eq('post_id', post.id);

        if (data) {
            setFormData({
                title: data.title || '',
                slug: data.slug || '',
                content: data.content || '',
                excerpt: data.excerpt || '',
                status: data.status || 'draft',
                seo_title: data.seo_title || '',
                seo_description: data.seo_description || '',
                related_service_key: data.related_service_key || '',
                custom_cta_text: data.custom_cta_text || '',
                category_id: catData && catData.length > 0 ? catData[0].category_id : ''
            });
            setEditingId(post.id);
            setView('editor');
        }
        setLoading(false);
    };

    const generateSlug = (text: string) => {
        return text.toString().toLowerCase()
            .replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c')
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, '');            // Trim - from end of text
    };

    const handleSave = async () => {
        setLoading(true);
        const { category_id, ...postData } = formData; // Separate category_id from post data

        const payload = {
            ...postData,
            updated_at: new Date().toISOString(),
            published_at: formData.status === 'published' ? new Date().toISOString() : null
        };

        let postId = editingId;

        if (postId) {
            await supabase.from('blog_posts').update(payload).eq('id', postId);
        } else {
            const { data, error } = await supabase.from('blog_posts').insert([payload]).select().single();
            if (data) postId = data.id;
        }

        // Handle Category Relationship
        if (postId) {
            // Clear existing categories (Simple 1-to-1 logic for UI, but M2M in DB)
            await supabase.from('blog_posts_categories').delete().eq('post_id', postId);

            if (category_id) {
                await supabase.from('blog_posts_categories').insert([{
                    post_id: postId,
                    category_id: category_id
                }]);
            }
        }

        await fetchPosts();
        setView('list');
        setLoading(false);
    };

    // ... deletePost, handleImportClick ... same
    const deletePost = async (id: string) => {
        if (!confirm('Bu yazıyı silmek istediğinize emin misiniz?')) return;
        await supabase.from('blog_posts').delete().eq('id', id);
        fetchPosts();
    };

    const handleImportClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = async (e) => {
            try {
                const json = JSON.parse(e.target?.result as string);
                await processJsonImport(json);
            } catch (err) {
                console.error('JSON Parse Error:', err);
                setImportStatus({ success: 0, error: 0, message: 'Hata: Dosya okunamadı veya geçerli bir JSON değil.' });
            } finally {
                if (fileInputRef.current) fileInputRef.current.value = '';
            }
        };
        reader.readAsText(file);
    };

    const processJsonImport = async (json: any) => {
        if (!Array.isArray(json)) {
            setImportStatus({ success: 0, error: 0, message: 'Hata: JSON verisi bir dizi (array) formatında olmalıdır.' });
            return;
        }

        setLoading(true);
        let successCount = 0;
        let errorCount = 0;

        for (const post of json) {
            if (!post.title || !post.slug) {
                errorCount++;
                continue;
            }

            // Find category by slug if needed
            let catId = null;
            if (post.category_slug) {
                const { data: cData } = await supabase.from('blog_categories').select('id').eq('slug', post.category_slug).single();
                if (cData) catId = cData.id;
            }

            const payload = {
                title: post.title,
                slug: post.slug,
                content: post.content || '',
                excerpt: post.excerpt || '',
                status: post.status || 'draft',
                seo_title: post.seo_title || post.title,
                seo_description: post.seo_description || post.excerpt || '',
                related_service_key: post.related_service_key || '',
                custom_cta_text: post.custom_cta_text || '',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
                published_at: post.status === 'published' ? new Date().toISOString() : null
            };

            const { data: newPost, error } = await supabase.from('blog_posts').insert([payload]).select().single();
            if (error) {
                console.error('Error inserting post:', post.title, error);
                errorCount++;
            } else if (newPost) {
                if (catId) {
                    await supabase.from('blog_posts_categories').insert([{ post_id: newPost.id, category_id: catId }]);
                }
                successCount++;
            }
        }

        setImportStatus({ success: successCount, error: errorCount, message: `İşlem Tamamlandı. Başarılı: ${successCount}, Hatalı: ${errorCount}` });
        setLoading(false);
        fetchPosts(); // Refresh list in background
        // Optional: Switch to list view automatically if desired, but user might want to see the result.
    };

    const handlePasteImport = async () => {
        if (!jsonInput.trim()) return;
        try {
            const json = JSON.parse(jsonInput);
            await processJsonImport(json);
        } catch (e) {
            setImportStatus({ success: 0, error: 0, message: 'Hata: Geçersiz JSON formatı.' });
        }
    };

    if (view === 'categories') {
        return (
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <Button variant="ghost" onClick={() => setView('list')} className="text-slate-600">
                        <ArrowLeft className="h-4 w-4 mr-2" /> Geri Dön
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="text-lg font-semibold mb-4">Yeni Kategori Ekle</h3>
                            <div className="flex gap-2">
                                <input
                                    className="w-full p-2 border rounded"
                                    placeholder="Kategori Adı (Örn: Teknoloji)"
                                    value={newCategoryName}
                                    onChange={e => setNewCategoryName(e.target.value)}
                                />
                                <Button onClick={handleCreateCategory}>Ekle</Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <h3 className="text-lg font-semibold mb-4">Kategoriler</h3>
                            <div className="space-y-2">
                                {categories.map(cat => (
                                    <div key={cat.id} className="flex items-center justify-between p-2 bg-slate-50 rounded">
                                        <span>{cat.name}</span>
                                        <Button size="sm" variant="ghost" className="text-red-500" onClick={() => handleDeleteCategory(cat.id)}>
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ))}
                                {categories.length === 0 && <p className="text-slate-500 text-sm">Hiç kategori yok.</p>}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }

if (view === 'import') {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <Button variant="ghost" onClick={() => setView('list')} className="text-slate-600">
                    <ArrowLeft className="h-4 w-4 mr-2" /> Geri Dön
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardContent className="p-6 space-y-4">
                        <h3 className="text-lg font-semibold">Dosya ile Yükle</h3>
                        <p className="text-sm text-slate-500">Bilgisayarınızdaki .json dosyasını seçerek yükleyin.</p>
                        <Button variant="outline" onClick={handleImportClick} disabled={loading} className="w-full h-32 border-dashed">
                            <Upload className="h-8 w-8 mb-2 text-slate-400" />
                            <span className="block text-slate-600">Dosya Seç (JSON)</span>
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6 space-y-4">
                        <h3 className="text-lg font-semibold">JSON Yapıştır</h3>
                        <p className="text-sm text-slate-500">JSON dizisini (array) aşağıdaki alana yapıştırın.</p>
                        <textarea
                            className="w-full p-2 border rounded font-mono text-xs bg-slate-50 h-32"
                            placeholder='[{"title": "...", ...}]'
                            value={jsonInput}
                            onChange={e => setJsonInput(e.target.value)}
                        />
                        <Button onClick={handlePasteImport} disabled={loading || !jsonInput} className="w-full">
                            {loading ? 'İşleniyor...' : 'İçe Aktar'}
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {importStatus && (
                <div className={`p-4 rounded-lg flex items-center gap-2 ${importStatus.error > 0 ? 'bg-yellow-50 text-yellow-800' : 'bg-green-50 text-green-800'}`}>
                    {importStatus.error > 0 ? <Loader2 className="h-4 w-4" /> : <Save className="h-4 w-4" />}
                    <div>
                        <p className="font-semibold">{importStatus.message}</p>
                        <p className="text-xs opacity-75">Listeye dönmek için yukarıdaki butonu kullanabilirsiniz.</p>
                    </div>
                </div>
            )}
        </div>
    );
}

if (view === 'editor') {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <Button variant="ghost" onClick={() => setView('list')} className="text-slate-600">
                    <ArrowLeft className="h-4 w-4 mr-2" /> Geri Dön
                </Button>
                <div className="flex gap-2">
                    <Button onClick={handleSave} disabled={loading}>
                        <Save className="h-4 w-4 mr-2" /> {loading ? 'Kaydediliyor...' : 'Kaydet'}
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <Card>
                        <CardContent className="p-6 space-y-4">
                            <h3 className="text-lg font-semibold">İçerik Detayları</h3>
                            <div>
                                <label className="block text-sm font-medium mb-1">Başlık (H1)</label>
                                <input
                                    className="w-full p-2 border rounded"
                                    value={formData.title}
                                    onChange={e => {
                                        setFormData({ ...formData, title: e.target.value });
                                        if (!editingId) setFormData(prev => ({ ...prev, title: e.target.value, slug: generateSlug(e.target.value) }));
                                    }}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Slug (URL)</label>
                                <input className="w-full p-2 border rounded bg-slate-50" value={formData.slug} onChange={e => setFormData({ ...formData, slug: e.target.value })} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Kısa Açıklama (Excerpt)</label>
                                <textarea className="w-full p-2 border rounded" rows={3} value={formData.excerpt} onChange={e => setFormData({ ...formData, excerpt: e.target.value })} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">İçerik (HTML)</label>
                                <p className="text-xs text-slate-500 mb-2">H2, H3 hiyerarşisine dikkat edin. {'<p>'}, {'<ul>'} gibi etiketleri kullanabilirsiniz.</p>
                                <textarea
                                    className="w-full p-2 border rounded font-mono text-sm"
                                    rows={15}
                                    value={formData.content}
                                    onChange={e => setFormData({ ...formData, content: e.target.value })}
                                    placeholder="<h2>Alt Başlık</h2><p>İçerik...</p>"
                                />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6 space-y-4">
                            <h3 className="text-lg font-semibold">SEO Ayarları</h3>
                            <div>
                                <label className="block text-sm font-medium mb-1">SEO Başlığı (Meta Title)</label>
                                <input className="w-full p-2 border rounded" value={formData.seo_title} onChange={e => setFormData({ ...formData, seo_title: e.target.value })} placeholder={formData.title} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">SEO Açıklaması (Meta Description)</label>
                                <textarea className="w-full p-2 border rounded" rows={2} value={formData.seo_description} onChange={e => setFormData({ ...formData, seo_description: e.target.value })} />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card>
                        <CardContent className="p-6 space-y-4">
                            <h3 className="text-lg font-semibold">Yayın Ayarları</h3>
                            <div>
                                <label className="block text-sm font-medium mb-1">Durum</label>
                                <select
                                    className="w-full p-2 border rounded"
                                    value={formData.status}
                                    onChange={e => setFormData({ ...formData, status: e.target.value as any })}
                                >
                                    <option value="draft">Taslak</option>
                                    <option value="published">Yayında</option>
                                    <option value="archived">Arşiv</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Kategori</label>
                                <select
                                    className="w-full p-2 border rounded"
                                    value={formData.category_id}
                                    onChange={e => setFormData({ ...formData, category_id: e.target.value })}
                                >
                                    <option value="">Kategori Seçiniz...</option>
                                    {categories.map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    ))}
                                </select>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6 space-y-4">
                            <h3 className="text-lg font-semibold">Hizmet Entegrasyonu</h3>
                            <p className="text-xs text-slate-500">Bu yazı hangi hizmetle ilgili? Sayfa sonunda o hizmetin teklif formu/butonu çıkar.</p>
                            <div>
                                <label className="block text-sm font-medium mb-1">İlgili Hizmet</label>
                                <select
                                    className="w-full p-2 border rounded"
                                    value={formData.related_service_key}
                                    onChange={e => setFormData({ ...formData, related_service_key: e.target.value })}
                                >
                                    <option value="">Seçiniz...</option>
                                    <option value="web-design">Web Tasarım</option>
                                    <option value="ecommerce">E-Ticaret</option>
                                    <option value="social">Sosyal Medya</option>
                                    <option value="ads">Google Ads</option>
                                    <option value="branding">Kurumsal Kimlik</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Özel CTA Metni</label>
                                <input
                                    className="w-full p-2 border rounded"
                                    value={formData.custom_cta_text}
                                    onChange={e => setFormData({ ...formData, custom_cta_text: e.target.value })}
                                    placeholder="Örn: Hemen E-Ticaret Teklifi Al"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

// List View
return (
    <div className="space-y-6">
        <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Blog Yazıları</h2>
            <div className="flex gap-2">
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept=".json"
                    className="hidden"
                />
                <Button variant="outline" onClick={() => setView('categories')}>
                    <Tag className="h-4 w-4 mr-2" /> Kategoriler
                </Button>
                <Button variant="outline" onClick={() => { setView('import'); setImportStatus(null); }}>
                    <Upload className="h-4 w-4 mr-2" /> JSON İçe Aktar
                </Button>
                <Button onClick={handleCreateNew}>
                    <Plus className="h-4 w-4 mr-2" /> Yeni Yazı
                </Button>
            </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
            {loading && <div className="p-8 text-center"><Loader2 className="animate-spin h-8 w-8 mx-auto" /></div>}
            {!loading && (
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b">
                        <tr>
                            <th className="p-4 font-semibold">Başlık</th>
                            <th className="p-4 font-semibold">Durum</th>
                            <th className="p-4 font-semibold">Tarih</th>
                            <th className="p-4 font-semibold text-right">İşlemler</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {posts.map(post => (
                            <tr key={post.id} className="hover:bg-slate-50">
                                <td className="p-4">
                                    <div className="font-medium">{post.title}</div>
                                    <div className="text-xs text-slate-400">/{post.slug}</div>
                                </td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded text-xs font-bold ${post.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                        }`}>
                                        {post.status === 'published' ? 'Yayında' : 'Taslak'}
                                    </span>
                                </td>
                                <td className="p-4 text-sm text-slate-500">
                                    {new Date(post.created_at).toLocaleDateString("tr-TR")}
                                </td>
                                <td className="p-4 text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button size="sm" variant="ghost" onClick={() => handleEdit(post)}>
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                        <Button size="sm" variant="ghost" className="text-red-500" onClick={() => deletePost(post.id)}>
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {posts.length === 0 && (
                            <tr><td colSpan={4} className="p-8 text-center text-slate-500">Henüz yazı yok.</td></tr>
                        )}
                    </tbody>
                </table>
            )}
        </div>
    </div>
);
};
