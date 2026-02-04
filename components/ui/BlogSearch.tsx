"use client";

import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useTransition } from 'react';
import { useDebounce } from '@/hooks/use-debounce'; // If available, otherwise simple timeout or direct enter

export function BlogSearch() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialSearch = searchParams.get('search') || '';
    const [term, setTerm] = useState(initialSearch);
    const [isPending, startTransition] = useTransition();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams(searchParams.toString());
        if (term) {
            params.set('search', term);
        } else {
            params.delete('search');
        }
        startTransition(() => {
            router.push(`/blog?${params.toString()}`);
        });
    };

    return (
        <form onSubmit={handleSearch} className="relative max-w-lg mx-auto mb-12">
            <div className="relative group">
                <div className="absolute inset-0 bg-blue-100 rounded-full blur transition-opacity opacity-50 group-hover:opacity-100"></div>
                <div className="relative flex items-center bg-white rounded-full shadow-sm border border-slate-200 focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-300 transition-all">
                    <input
                        type="text"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        placeholder="Bloglarda ara... (Örn: SEO, Tasarım)"
                        className="w-full py-4 pl-6 pr-12 text-slate-700 bg-transparent rounded-full focus:outline-none placeholder:text-slate-400"
                    />
                    <button
                        type="submit"
                        disabled={isPending}
                        className="absolute right-2 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50"
                    >
                        <Search className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </form>
    );
}
