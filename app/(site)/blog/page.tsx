import React from 'react';
import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';
import { Calendar, ArrowRight, Tag, Search as SearchIcon } from 'lucide-react';
import { Metadata } from 'next';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { BlogSearch } from '@/components/ui/BlogSearch';

export const metadata: Metadata = {
    title: 'Blog | Woyable - Dijital Pazarlama ve Yazılım Dünyasından Haberler',
    description: 'Dijital pazarlama, web tasarım, e-ticaret ve sosyal medya yönetimi hakkında en güncel ipuçları, rehberler ve sektör haberleri.',
};

async function getCategories() {
    const supabase = await createClient();
    const { data } = await supabase.from('blog_categories').select('*').order('name');
    return data || [];
}

async function getPosts(categorySlug?: string, searchTerm?: string, sort: 'newest' | 'oldest' = 'newest') {
    const supabase = await createClient();

    let query = supabase
        .from('blog_posts')
        .select('*, blog_categories!blog_posts_categories(*)')
        .eq('status', 'published')
        .order('published_at', { ascending: sort === 'oldest' }); // Sort Logic

    // Category Filter
    if (categorySlug) {
        const { data: cat } = await supabase.from('blog_categories').select('id').eq('slug', categorySlug).single();
        if (cat) {
            const { data: relations } = await supabase.from('blog_posts_categories').select('post_id').eq('category_id', cat.id);
            const postIds = relations?.map(r => r.post_id) || [];
            query = query.in('id', postIds);
        } else {
            return [];
        }
    }

    // Search Filter
    if (searchTerm) {
        // Search in title OR content
        query = query.or(`title.ilike.%${searchTerm}%,content.ilike.%${searchTerm}%`);
    }

    const { data } = await query;
    return data || [];
}

interface PageProps {
    searchParams: {
        category?: string;
        search?: string;
        sort?: 'newest' | 'oldest';
    }
}

import { BlogSort } from '@/components/ui/BlogSort';

export default async function BlogListingPage({ searchParams }: PageProps) {
    const { category, search, sort = 'newest' } = await searchParams;
    const posts = await getPosts(category, search, sort);
    const categories = await getCategories();

    const currentCategory = categories.find((c: any) => c.slug === category);

    return (
        <div className="bg-[#FAFAFA] min-h-screen font-sans pb-24">
            {/* Hero Section with Gradient */}
            <div className="relative overflow-hidden bg-slate-900 pb-24 pt-32 lg:pt-40">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-900" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 grayscale" />

                <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                        Woyable <span className="text-blue-200">Blog</span>
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        Dijital dünyada iz bırakmanız için gereken içgörüler, stratejiler ve güncel haberler.
                    </p>

                    <div className="mb-12">
                        <BlogSearch />
                    </div>

                </div>
            </div>

            <div className="container mx-auto px-4 max-w-5xl -mt-8 relative z-20">

                {/* Filter & Sort Bar - Floating Card */}
                <div className="bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 flex-1">
                        <Link
                            href={`/blog?${new URLSearchParams({ ...(search && { search }), ...(sort && { sort }) }).toString()}`}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 
                                ${!category
                                    ? 'bg-slate-900 text-white shadow-md'
                                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                                }`}
                        >
                            Tümü
                        </Link>
                        {categories.map((cat: any) => (
                            <Link
                                key={cat.id}
                                href={`/blog?${new URLSearchParams({ category: cat.slug, ...(search && { search }), ...(sort && { sort }) }).toString()}`}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 
                                    ${category === cat.slug
                                        ? 'bg-blue-600 text-white shadow-md'
                                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                                    }`}
                            >
                                {cat.name}
                            </Link>
                        ))}
                    </div>

                    {/* Sort Dropdown */}
                    <div className="min-w-[160px]">
                        <BlogSort />
                    </div>
                </div>

                {/* Breadcrumb */}
                <div className="mb-8 pl-2 opacity-60 hover:opacity-100 transition-opacity">
                    <Breadcrumb items={[
                        { label: 'Blog', href: '/blog' },
                        ...(category ? [{ label: currentCategory?.name || category }] : []),
                        ...(search ? [{ label: `Arama: "${search}"` }] : [])
                    ]} />
                </div>

                {/* Posts Grid - Typography Focused */}
                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {posts.map((post: any) => (
                            <Link href={`/blog/${post.slug}`} key={post.id} className="group relative bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_4px_20px_-12px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_40px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                                {/* Decorator Line */}
                                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex gap-2">
                                        {post.blog_categories?.[0]?.blog_categories && (
                                            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100">
                                                {post.blog_categories[0].blog_categories.name}
                                            </span>
                                        )}
                                    </div>
                                    <time className="text-slate-400 text-xs font-medium flex items-center">
                                        <Calendar className="w-3 h-3 mr-1.5" />
                                        {new Date(post.published_at).toLocaleDateString("tr-TR", { year: 'numeric', month: 'long', day: 'numeric' })}
                                    </time>
                                </div>

                                <h2 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                                    {post.title}
                                </h2>

                                <p className="text-slate-500 mb-8 line-clamp-3 leading-relaxed flex-grow">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center text-slate-900 font-semibold text-sm mt-auto group-hover:text-blue-600 transition-colors">
                                    Devamını Oku
                                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-24 bg-white rounded-3xl border border-slate-100 shadow-sm">
                        <div className="inline-flex items-center justify-center p-6 rounded-full bg-slate-50 mb-6 group transition-colors hover:bg-red-50">
                            <SearchIcon className="h-10 w-10 text-slate-400 group-hover:text-red-400 transition-colors" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">
                            {search ? `"${search}" için sonuç bulunamadı.` : 'Bu kategoride henüz yazı yok.'}
                        </h3>
                        <p className="text-slate-500 max-w-md mx-auto mb-8">
                            Arama terimini değiştirmeyi veya filtreleri temizlemeyi deneyin.
                        </p>
                        <Link href="/blog" className="inline-flex items-center px-6 py-3 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors">
                            Tüm Yazıları Gör
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
