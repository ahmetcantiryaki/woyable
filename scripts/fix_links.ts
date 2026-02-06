
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

// Load env vars
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase URL or Anon Key');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function fixLinks() {
    console.log('Logging in...');
    const { data: { session }, error: authError } = await supabase.auth.signInWithPassword({
        email: 'admin@admin.com',
        password: '123123',
    });

    if (authError || !session) {
        console.error('Login failed:', authError?.message);
        process.exit(1);
    }

    console.log('Logged in successfully.');

    // Fetch all posts
    const { data: posts, error: fetchError } = await supabase
        .from('blog_posts')
        .select('id, title, content');

    if (fetchError) {
        console.error('Error fetching posts:', fetchError.message);
        process.exit(1);
    }

    console.log(`Found ${posts?.length} posts. Checking for broken links...`);

    let updatedCount = 0;

    for (const post of posts || []) {
        let content = post.content || '';
        let isModified = false;

        // Pattern 1: /hizmetlerimiz/e-ticaret-ve-pazaryeri-yonetimi -> /sektorler/e-ticaret-cozumleri
        if (content.includes('/hizmetlerimiz/e-ticaret-ve-pazaryeri-yonetimi')) {
            content = content.replaceAll('/hizmetlerimiz/e-ticaret-ve-pazaryeri-yonetimi', '/sektorler/e-ticaret-cozumleri');
            isModified = true;
        }

        // Pattern 2: /hizmetlerimiz/web-tasarim-yazilim -> /hizmetlerimiz/web-tasarim
        if (content.includes('/hizmetlerimiz/web-tasarim-yazilim')) {
            content = content.replaceAll('/hizmetlerimiz/web-tasarim-yazilim', '/hizmetlerimiz/web-tasarim');
            isModified = true;
        }

        if (isModified) {
            console.log(`Updating post: ${post.title} (${post.id})`);
            const { error: updateError } = await supabase
                .from('blog_posts')
                .update({ content })
                .eq('id', post.id);

            if (updateError) {
                console.error(`Failed to update post ${post.id}:`, updateError.message);
            } else {
                updatedCount++;
            }
        }
    }

    console.log(`Finished. Updated ${updatedCount} posts.`);
}

fixLinks().catch(console.error);
