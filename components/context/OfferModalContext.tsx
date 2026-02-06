'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface OfferModalContextType {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

const OfferModalContext = createContext<OfferModalContextType | undefined>(undefined);

export const OfferModalProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <OfferModalContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
        </OfferModalContext.Provider>
    );
};

export const useOfferModal = () => {
    const context = useContext(OfferModalContext);
    if (context === undefined) {
        throw new Error('useOfferModal must be used within a OfferModalProvider');
    }
    return context;
};
