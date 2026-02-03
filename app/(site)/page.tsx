'use client';

import React from 'react';
import { Home as HomeView } from '@/components/views/Home';

export default function HomePage() {
    // onNavigate is no longer needed by HomeView internally, 
    // BUT HomeView still expects it as a prop. 
    // I need to update HomeView to not require it, OR pass a dummy function for now.
    // I will refactor HomeView in the next step to remove the prop completely.
    // For now, I'll update HomeView FIRST or pass a dummy.
    // Actually, I'll update HomeView first.

    return <HomeView />;
}
