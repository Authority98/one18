import React from 'react';
import { Instagram, Facebook, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#1a0f0a] text-[#F4F1DE] pt-32 pb-12 relative overflow-hidden">
            {/* Giant Watermark */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none opacity-[0.03]">
                <h1 className="text-[25vw] font-abril leading-none">ONE18</h1>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 mb-24">
                    {/* Brand Column */}
                    <div className="lg:col-span-5">
                        <h2 className="text-5xl font-abril mb-8">Come Get Baked.</h2>
                        <p className="text-xl opacity-60 leading-relaxed mb-10 max-w-md">
                            Your go-to Muslim-owned artisan bakery bringing you premium French pastries with authentic local flavors.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/one18bakery/" target="_blank" rel="noreferrer" className="w-14 h-14 border border-[#F4F1DE]/20 rounded-full flex items-center justify-center hover:bg-[#E07A5F] hover:border-[#E07A5F] transition-all hover:scale-110 group">
                                <Instagram className="w-6 h-6 group-hover:text-white" />
                            </a>
                            <a href="#" className="w-14 h-14 border border-[#F4F1DE]/20 rounded-full flex items-center justify-center hover:bg-[#E07A5F] hover:border-[#E07A5F] transition-all hover:scale-110 group">
                                <Facebook className="w-6 h-6 group-hover:text-white" />
                            </a>
                            <a href="mailto:one18bakery@foodline.sg" className="w-14 h-14 border border-[#F4F1DE]/20 rounded-full flex items-center justify-center hover:bg-[#E07A5F] hover:border-[#E07A5F] transition-all hover:scale-110 group">
                                <Mail className="w-6 h-6 group-hover:text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-3">
                        <h4 className="text-[#E07A5F] font-bold uppercase tracking-widest mb-8">Explore</h4>
                        <ul className="space-y-4 text-lg opacity-70">
                            <li><a href="#menu" className="hover:text-white hover:translate-x-2 transition-all inline-block">Our Menu</a></li>
                            <li><a href="#locations" className="hover:text-white hover:translate-x-2 transition-all inline-block">Locations</a></li>
                            <li><a href="#about" className="hover:text-white hover:translate-x-2 transition-all inline-block">Our Story</a></li>
                            <li><a href="#careers" className="hover:text-white hover:translate-x-2 transition-all inline-block">Careers</a></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-4">
                        <h4 className="text-[#E07A5F] font-bold uppercase tracking-widest mb-8">Newsletter</h4>
                        <p className="opacity-60 mb-6">Subscribe for the latest updates and exclusive offers.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-[#E07A5F] transition-colors text-white"
                            />
                            <button className="absolute right-2 top-2 bg-[#E07A5F] text-white px-6 py-2 rounded-full font-bold hover:bg-white hover:text-[#2C1810] transition-colors">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="opacity-40 text-sm">&copy; 2025 One18 Bakery. All rights reserved.</p>

                    <button onClick={scrollToTop} className="flex items-center gap-2 text-[#E07A5F] font-bold hover:text-white transition-colors">
                        Back to Top <ArrowUp className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
