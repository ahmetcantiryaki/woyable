import React from 'react';
import { Metadata } from 'next';
import { Admin as AdminView } from '../../components/views/Admin';

export const metadata: Metadata = {
    title: 'Woyable Admin Paneli',
    description: 'Yönetim Paneli',
    robots: 'noindex, nofollow',
};

export default function AdminPage() {
    return <AdminView />;
}
