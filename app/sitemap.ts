import { MetadataRoute } from 'next';
import { createClient } from '@/utils/supabase/server';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://woyable.com';

    // Static routes
    const routes = [
        '',
        '/hakkimizda',
        '/iletisim',
        '/blog',
        '/hizmetlerimiz/web-tasarim',
        '/hizmetlerimiz/e-ticaret',
        '/hizmetlerimiz/sosyal-medya-yonetimi',
        '/hizmetlerimiz/google-reklamlari',
        '/hizmetlerimiz/kurumsal-kimlik-tasarimi',
        '/hizmetlerimiz/baski-etkinlik',
        '/hizmetlerimiz/yazilim-cozumleri',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Fetch dynamic blog posts
    const supabase = await createClient();
    const { data: posts } = await supabase
        .from('blog_posts')
        .select('slug, updated_at')
        .eq('status', 'published');

    const blogRoutes = (posts || []).map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updated_at),
        changeFrequency: 'daily' as const,
        priority: 0.7,
    }));

    return [...routes, ...blogRoutes];
}
