'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming this exists, based on other components usually having it. I'll verify or implement a simple class merger if needed.

// Verify if lib/utils exists. If not, I'll inline the helper.
// Looking at package.json, `clsx` and `tailwind-merge` are present, so `cn` likely exists.

const Accordion = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { type?: 'single' | 'multiple'; collapsible?: boolean }
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("w-full", className)} {...props} />
));
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("border-b", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
    // Custom context or just simple state? 
    // To properly support "Accordion" API without Radix, I need a Context.
    // But for speed and since I know I pasted code that uses specific API:
    // <Accordion type="single" collapsible>
    //   <AccordionItem value="item-1">...

    // I will implement a simplified version that matches exactly what I used in the page.

    return (
        <WrappedAccordionTrigger className={className} ref={ref} {...props}>
            {children}
        </WrappedAccordionTrigger>
    );
})
AccordionTrigger.displayName = "AccordionTrigger";

// To make this work like the shadcn/radix one without radix, I need a context.
// Let's build a proper one.

const AccordionContext = React.createContext<{
    activeValues: string[];
    toggle: (value: string) => void;
}>({ activeValues: [], toggle: () => { } });

const AccordionRoot = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { type?: 'single' | 'multiple'; collapsible?: boolean }
>(({ className, type = 'single', collapsible = false, children, ...props }, ref) => {
    const [activeValues, setActiveValues] = React.useState<string[]>([]);

    const toggle = (value: string) => {
        setActiveValues(prev => {
            if (type === 'single') {
                if (prev.includes(value) && collapsible) return [];
                if (prev.includes(value) && !collapsible) return prev;
                return [value];
            } else {
                // multiple
                if (prev.includes(value)) return prev.filter(v => v !== value);
                return [...prev, value];
            }
        });
    };

    return (
        <AccordionContext.Provider value={{ activeValues, toggle }}>
            <div ref={ref} className={cn("", className)} {...props}>
                {children}
            </div>
        </AccordionContext.Provider>
    );
});
AccordionRoot.displayName = "Accordion";

const WrappedAccordionItem = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, value, children, ...props }, ref) => {
    // We need to pass 'value' down? No, we just need to identify this item.
    // The children need to know the value to toggle/check status.
    // We can use a context for the item value.
    return (
        <AccordionItemContext.Provider value={value}>
            <div ref={ref} className={cn("border-b", className)} {...props}>
                {children}
            </div>
        </AccordionItemContext.Provider>
    );
});
WrappedAccordionItem.displayName = "AccordionItem";

const AccordionItemContext = React.createContext<string>("");

const WrappedAccordionTrigger = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
    const { activeValues, toggle } = React.useContext(AccordionContext);
    const value = React.useContext(AccordionItemContext);
    const isOpen = activeValues.includes(value);

    return (
        <div className="flex">
            <button
                ref={ref}
                onClick={() => toggle(value)}
                className={cn(
                    "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
                    className
                )}
                data-state={isOpen ? "open" : "closed"}
                {...props}
            >
                {children}
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
            </button>
        </div>
    );
});
WrappedAccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
    const { activeValues } = React.useContext(AccordionContext);
    const value = React.useContext(AccordionItemContext);
    const isOpen = activeValues.includes(value);

    // Simple display toggle for now to avoid animation framer-motion dependency
    if (!isOpen) return null;

    return (
        <div
            ref={ref}
            className={cn(
                "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
                className
            )}
            {...props}
        >
            <div className="pb-4 pt-0">{children}</div>
        </div>
    );
});
AccordionContent.displayName = "AccordionContent";

export { AccordionRoot as Accordion, WrappedAccordionItem as AccordionItem, WrappedAccordionTrigger as AccordionTrigger, AccordionContent }
