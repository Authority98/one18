import React from 'react';
import { X } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose }) => {
    return (
        <div className={`fixed inset-0 bg-[#F4F1DE] z-40 flex flex-col items-center justify-center space-y-6 text-2xl font-bold text-[#2C1810] transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <button className="absolute top-8 right-8 p-2" onClick={onClose}>
                <X className="w-8 h-8" />
            </button>
            <a href="#hero" className="hover:text-[#E07A5F] transition-colors" onClick={onClose}>Home</a>
            <a href="#bestsellers" className="hover:text-[#E07A5F] transition-colors" onClick={onClose}>Best Sellers</a>
            <a href="#catering" className="hover:text-[#E07A5F] transition-colors" onClick={onClose}>Catering</a>
            <a href="#quality" className="hover:text-[#E07A5F] transition-colors" onClick={onClose}>Our Story</a>
            <a href="#testimonials" className="hover:text-[#E07A5F] transition-colors" onClick={onClose}>Testimonials</a>
            <a href="#locations" className="hover:text-[#E07A5F] transition-colors" onClick={onClose}>Locations</a>
            <a href="https://one18bakerynorthbridge.oddle.me/en_SG" target="_blank" rel="noreferrer" className="text-lg bg-[#E07A5F] text-white px-8 py-3 rounded-full mt-4 hover:bg-[#2C1810] transition-colors">
                Order Online
            </a>
        </div>
    );
};

export default MobileMenu;
