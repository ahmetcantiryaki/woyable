"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { ChevronDown, ArrowUpDown } from 'lucide-react';

export function BlogSort() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentSort = searchParams.get('sort') || 'newest';

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('sort', e.target.value);
        router.push(`/blog?${params.toString()}`);
    };

    return (
        <div className="relative inline-block w-40">
            <div className="relative">
                <select
                    value={currentSort}
                    onChange={handleSortChange}
                    className="w-full appearance-none bg-white border border-slate-200 text-slate-700 py-2.5 pl-4 pr-10 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 cursor-pointer shadow-sm hover:border-slate-300 transition-all"
                >
                    <option value="newest">En Yeni</option>
                    <option value="oldest">En Eski</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-slate-500">
                    <ArrowUpDown className="h-4 w-4" />
                </div>
            </div>
        </div>
    );
}
