"use client";

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';

interface TocItem {
    id: string;
    text: string;
    level: number;
    number: string;
}

interface BlogTableOfContentsProps {
    toc: TocItem[];
}

export const BlogTableOfContents: React.FC<BlogTableOfContentsProps> = ({ toc }) => {
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-100px 0px -60% 0px', // Trigger when element is near top
                threshold: 0
            }
        );

        toc.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [toc]);

    if (toc.length === 0) return null;

    return (
        <div className="sticky top-32 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all">
            <h4 className="font-bold text-slate-900 mb-6 text-base flex items-center">
                <span className="w-1 h-6 bg-blue-600 rounded-full mr-3"></span>
                İÇİNDEKİLER
            </h4>
            <nav className="flex flex-col gap-3">
                {toc.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(item.id)?.scrollIntoView({
                                behavior: 'smooth'
                            });
                            // setActiveId(item.id); // Observer will handle this
                        }}
                        className={`text-sm transition-all flex items-start group
                            ${item.level === 3 ? 'ml-4' : ''}
                            ${activeId === item.id
                                ? 'text-blue-600 font-bold'
                                : 'text-slate-600 hover:text-blue-500 font-medium'
                            }
                        `}
                    >
                        {/* Number Container - Fixed Width for Alignment */}
                        <span className={`
                            inline-block shrink-0 mr-2 font-mono 
                            ${activeId === item.id ? 'text-blue-500' : 'text-slate-400 group-hover:text-blue-400'}
                            ${item.level === 3 ? 'text-xs w-8' : 'text-sm w-6'}
                        `}>
                            {item.number}
                        </span>
                        <span className="leading-snug">{item.text}</span>
                    </a>
                ))}
            </nav>

            <hr className="my-8 border-slate-100" />

            <div className="text-center">
                <p className="text-xs text-slate-500 mb-4 font-medium">Bu yazıyı paylaşın</p>
                <div className="flex gap-2 justify-center">
                    <Button size="sm" variant="outline" className="w-full text-xs hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all">
                        Paylaş
                    </Button>
                </div>
            </div>
        </div>
    );
};
