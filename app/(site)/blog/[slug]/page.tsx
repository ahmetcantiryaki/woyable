import React from 'react';
import { createClient } from '@/utils/supabase/server';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { BlogTableOfContents } from '@/components/views/BlogTableOfContents';

interface PageProps {
    params: {
        slug: string;
    }
}

async function getPost(slug: string) {
    const supabase = await createClient();
    // Fetch post and its categories
    const { data } = await supabase
        .from('blog_posts')
        .select(`
            *,
            blog_categories:blog_posts_categories(
                blog_categories(name, slug)
            )
        `)
        .eq('slug', slug)
        .eq('status', 'published')
        .single();

    return data;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);
    if (!post) return { title: 'Yazı Bulunamadı' };

    return {
        title: post.seo_title || post.title,
        description: post.seo_description || post.excerpt,
    };
}

// Helper to generate IDs and separate TOC
function processContent(content: string) {
    if (!content) return { processedContent: '', toc: [] };

    const toc: { id: string; text: string; level: number; number: string }[] = [];
    const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    const counters = { h2: 0, h3: 0 };

    // Replace headers with versions having IDs
    // Note: This regex assumes simple H2/H3 usage. 
    const processedContent = content.replace(/<(h[23])>(.*?)<\/\1>/g, (match, tag, text) => {
        const id = slugify(text);
        const level = parseInt(tag.replace('h', ''));

        let number = '';
        if (level === 2) {
            counters.h2++;
            counters.h3 = 0;
            number = `${counters.h2}.`;
        } else if (level === 3) {
            counters.h3++;
            number = `${counters.h2}.${counters.h3}.`;
        }

        toc.push({ id, text, level, number });
        return `<${tag} id="${id}">${text}</${tag}>`;
    });

    // Also format paragraphs (from previous step)
    const finalContent = processedContent.includes('<p>') ? processedContent : processedContent.split('\n\n').map(p => `<p>${p.replace(/\n/g, '<br/>')}</p>`).join('');

    return { processedContent: finalContent, toc };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    const category = post.blog_categories?.[0]?.blog_categories;
    const { processedContent, toc } = processContent(post.content);

    return (
        <article className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
            {/* Inject Custom CSS */}
            <link rel="stylesheet" href="/styles/blog-content.css" />

            {/* Simple Clean Guide Header */}
            <div className="bg-slate-50/50 border-b border-slate-100 pt-32 pb-12">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb */}
                    <div className="mb-8">
                        <Breadcrumb items={[
                            { label: 'Blog', href: '/blog' },
                            ...(category ? [{ label: category.name, href: `/blog?category=${category.slug}` }] : []),
                            { label: post.title }
                        ]} />
                    </div>

                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-6">
                            {category && (
                                <Link href={`/blog?category=${category.slug}`} className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold hover:bg-blue-100 transition-colors border border-blue-100 uppercase tracking-wider">
                                    <Tag className="h-3 w-3 mr-1" /> {category.name}
                                </Link>
                            )}
                            <div className="flex items-center text-slate-500 text-sm font-medium">
                                <Calendar className="h-4 w-4 mr-2" />
                                {new Date(post.published_at).toLocaleDateString("tr-TR", { year: 'numeric', month: 'long', day: 'numeric' })}
                            </div>
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
                            {post.title}
                        </h1>

                        {post.excerpt && (
                            <p className="text-xl text-slate-600 leading-relaxed font-light max-w-3xl">
                                {post.excerpt}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Content Area with Sidebar */}
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Sidebar / TOC (Desktop: Sticky Left, Mobile: Top) */}
                    <aside className="lg:w-1/4 order-2 lg:order-1 relative min-h-full">
                        <BlogTableOfContents toc={toc} />
                    </aside>

                    {/* Article Content */}
                    <div className="lg:w-3/4 order-1 lg:order-2">
                        <div
                            className="blog-content w-full"
                            dangerouslySetInnerHTML={{ __html: processedContent }}
                        />

                        {/* CTA Section (Embedded at bottom of content) */}
                        {post.related_service_key && (
                            <div className="mt-16 relative overflow-hidden rounded-3xl group isolate">
                                {/* Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 grayscale" />

                                <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                                    <div className="max-w-xl">
                                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                                            İşinizi Büyütmeye Hazır mısınız?
                                        </h3>
                                        <p className="text-blue-100 text-lg leading-relaxed">
                                            {post.custom_cta_text || 'Bu alandaki uzmanlığımızla projelerinizi hayata geçirelim. Hemen ücretsiz ön görüşme planlayın.'}
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <Link href={`/iletisim?service=${post.related_service_key}`}>
                                            <Button className="h-14 px-8 bg-white text-blue-900 hover:bg-blue-50 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-2 border border-white/50">
                                                Teklif Alın <ArrowRight className="w-5 h-5 text-blue-600" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </article>
    );
}
