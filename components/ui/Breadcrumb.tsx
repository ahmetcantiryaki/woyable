import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import React from 'react';

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
    return (
        <nav aria-label="Breadcrumb" className={`flex items-center text-sm text-slate-500 ${className}`}>
            <Link href="/" className="hover:text-blue-600 flex items-center transition-colors">
                <Home className="h-4 w-4" />
            </Link>

            {items.map((item, index) => (
                <div key={index} className="flex items-center">
                    <ChevronRight className="h-4 w-4 mx-2 text-slate-300" />
                    {item.href ? (
                        <Link href={item.href} className="hover:text-blue-600 transition-colors">
                            {item.label}
                        </Link>
                    ) : (
                        <span className="font-medium text-slate-900 line-clamp-1 max-w-[200px] md:max-w-xs" title={item.label}>
                            {item.label}
                        </span>
                    )}
                </div>
            ))}
        </nav>
    );
};
