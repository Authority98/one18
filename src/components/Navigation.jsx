import React from 'react';
import { Menu } from 'lucide-react';

const Navigation = ({ isScrolled, onMobileMenuToggle }) => {
    return (
        <nav className="fixed w-full z-50 px-4 md:px-6 py-4 transition-all duration-300">
            <div className={`max-w-7xl mx-auto backdrop-blur-md border border-[#2C1810]/10 rounded-full px-6 transition-all duration-300 flex justify-between items-center shadow-lg relative z-50 ${isScrolled ? 'bg-white/95 py-2' : 'bg-white/80 py-3'}`}>
                <a href="#hero" className="text-2xl font-bold tracking-tighter relative group text-[#2C1810]">
                    ONE<span className="text-[#E07A5F]">18</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2C1810] transition-all group-hover:w-full"></span>
                </a>

                <div className="hidden md:flex items-center space-x-6 font-medium text-sm uppercase tracking-widest text-[#2C1810]">
                    <a href="#hero" className="hover:text-[#E07A5F] transition-colors">Home</a>
                    <a href="#bestsellers" className="hover:text-[#E07A5F] transition-colors">Best Sellers</a>
                    <a href="#catering" className="hover:text-[#E07A5F] transition-colors">Catering</a>
                    <a href="#quality" className="hover:text-[#E07A5F] transition-colors">Our Story</a>
                    <a href="#testimonials" className="hover:text-[#E07A5F] transition-colors">Testimonials</a>
                    <a href="#locations" className="hover:text-[#E07A5F] transition-colors">Locations</a>
                    <a href="https://one18bakerynorthbridge.oddle.me/en_SG" target="_blank" rel="noreferrer" className="bg-[#2C1810] text-[#F4F1DE] px-6 py-2 rounded-full hover:bg-[#E07A5F] transition-all transform hover:scale-105">
                        Order Now
                    </a>
                </div>

                <button className="md:hidden text-[#2C1810] focus:outline-none" onClick={onMobileMenuToggle}>
                    <Menu className="w-6 h-6" />
                </button>
            </div>
        </nav>
    );
};

export default Navigation;
