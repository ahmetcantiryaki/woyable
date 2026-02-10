import { Suspense } from 'react';
import { PackageComparisonContent } from './PackageComparisonContent';
import { Loader2 } from 'lucide-react';

// Loading fallback component
function LoadingFallback() {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
                <p className="text-slate-500 font-medium">Yükleniyor...</p>
            </div>
        </div>
    );
}

export default function PackageComparisonPage() {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <PackageComparisonContent />
        </Suspense>
    );
}
