import React from 'react';
import { Button } from './Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './Card';
import { Check } from 'lucide-react';

export interface PricingCardProps {
    title: string;
    price: string;
    oldPrice?: string;
    period?: string;
    description: string;
    features: string[];
    buttonText: string;
    isPopular?: boolean;
    onClick: () => void;
}

export const PricingCard = ({
    title,
    price,
    oldPrice,
    period = "",
    description,
    features,
    buttonText,
    isPopular,
    onClick
}: PricingCardProps) => (
    <Card className={`relative flex flex-col h-full border-slate-200 ${isPopular ? 'border-blue-500 ring-1 ring-blue-500 shadow-md' : ''}`}>
        {isPopular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                En Popüler
            </div>
        )}
        <CardHeader className="text-center pb-2">
            <CardTitle className="text-xl mb-2">{title}</CardTitle>
            <div className="flex items-baseline justify-center gap-2">
                {oldPrice && <span className="text-lg text-slate-400 line-through decoration-slate-400/50">{oldPrice}</span>}
                <span className="text-3xl font-bold text-slate-900">{price}</span>
                {period && <span className="text-sm text-slate-500">{period}</span>}
            </div>
            <CardDescription className="text-sm pt-2">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow pt-4">
            <ul className="space-y-3">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check className={`h-4 w-4 mt-0.5 shrink-0 ${isPopular ? 'text-blue-600' : 'text-slate-400'}`} />
                        <span className="text-sm">{feature}</span>
                    </li>
                ))}
            </ul>
        </CardContent>
        <CardFooter className="pt-2 pb-6">
            <Button
                className={`w-full ${isPopular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-900 hover:bg-slate-800'}`}
                onClick={onClick}
            >
                {buttonText}
            </Button>
        </CardFooter>
    </Card>
);
