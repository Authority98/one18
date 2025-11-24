import React from 'react';
import { Instagram, Facebook, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gradient-to-br from-[#1a1410] via-[#2a1e19] to-[#1a1410] text-[#F4F1DE] relative">
            {/* SVG Wave Separator - positioned to overlap into section above */}
            <svg
                className="absolute top-0 left-0 w-full -translate-y-[99%]"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                style={{ height: '100px' }}
            >
                {/* Organic wave layers transitioning from light to dark */}
                <path
                    d="M0 0 L0 50 Q 300 100 600 50 T 1200 50 L1200 120 L0 120 Z"
                    fill="url(#footerGradient1)"
                    opacity="0.6"
                />
                <path
                    d="M0 0 L0 60 Q 200 110 400 60 T 800 60 T 1200 60 L1200 120 L0 120 Z"
                    fill="url(#footerGradient2)"
                    opacity="0.8"
                />
                <path
                    d="M0 0 L0 70 Q 150 100 300 70 T 600 70 T 900 70 T 1200 70 L1200 120 L0 120 Z"
                    fill="url(#footerGradient3)"
                />

                {/* Gradient definitions matching footer */}
                <defs>
                    <linearGradient id="footerGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1a1410" />
                        <stop offset="50%" stopColor="#2a1e19" />
                        <stop offset="100%" stopColor="#1a1410" />
                    </linearGradient>
                    <linearGradient id="footerGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1a1410" />
                        <stop offset="50%" stopColor="#2a1e19" />
                        <stop offset="100%" stopColor="#1a1410" />
                    </linearGradient>
                    <linearGradient id="footerGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1a1410" />
                        <stop offset="50%" stopColor="#2a1e19" />
                        <stop offset="100%" stopColor="#1a1410" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Subtle Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E07A5F]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F4F1DE]/3 rounded-full blur-3xl"></div>
            </div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-6 pt-32 pb-12 relative z-10">
                {/* Top Section - Brand & Newsletter */}
                <div className="grid lg:grid-cols-2 gap-16 mb-0 pb-12 border-b border-white/5">
                    {/* Left - Brand */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-6xl md:text-7xl font-abril mb-4 leading-none">
                                One<span className="text-[#E07A5F]">18</span>
                            </h2>
                            <p className="text-lg text-[#F4F1DE]/60 font-dancing">
                                Singapore's Finest Artisan Bakery
                            </p>
                        </div>

                        <p className="text-[#F4F1DE]/70 leading-relaxed max-w-md">
                            Crafting premium French pastries with authentic local flavors.
                            Home of the viral Supreme Circular Croissants.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            <a
                                href="https://www.instagram.com/one18bakery/"
                                target="_blank"
                                rel="noreferrer"
                                className="group relative w-12 h-12 rounded-full border border-[#F4F1DE]/20 flex items-center justify-center hover:border-[#E07A5F] transition-all overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-[#E07A5F] scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
                                <Instagram className="w-5 h-5 relative z-10 group-hover:text-white transition-colors" />
                            </a>
                            <a
                                href="#"
                                className="group relative w-12 h-12 rounded-full border border-[#F4F1DE]/20 flex items-center justify-center hover:border-[#E07A5F] transition-all overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-[#E07A5F] scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
                                <Facebook className="w-5 h-5 relative z-10 group-hover:text-white transition-colors" />
                            </a>
                            <a
                                href="mailto:one18bakery@foodline.sg"
                                className="group relative w-12 h-12 rounded-full border border-[#F4F1DE]/20 flex items-center justify-center hover:border-[#E07A5F] transition-all overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-[#E07A5F] scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
                                <Mail className="w-5 h-5 relative z-10 group-hover:text-white transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Right - Newsletter */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-abril mb-2">Stay Updated</h3>
                            <p className="text-[#F4F1DE]/60 text-sm">
                                Subscribe for exclusive offers and the latest updates
                            </p>
                        </div>

                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-4 pr-32 focus:outline-none focus:border-[#E07A5F] focus:bg-white/10 transition-all text-white placeholder:text-[#F4F1DE]/40"
                            />
                            <button className="absolute right-2 top-2 bg-[#E07A5F] text-white px-6 py-2 rounded-full font-bold hover:bg-white hover:text-[#2C1810] transition-all hover:scale-105 flex items-center gap-2 group">
                                Subscribe <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Copyright & Back to Top */}
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-[#F4F1DE]/40">
                        © 2025 One18 Bakery. Crafted with <span className="text-[#E07A5F]">❤</span> in Singapore
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-sm font-bold text-[#F4F1DE]/70 hover:text-[#E07A5F] transition-colors"
                    >
                        <span className="hidden md:inline">Back to Top</span>
                        <div className="w-8 h-8 rounded-full border border-[#F4F1DE]/20 group-hover:border-[#E07A5F] flex items-center justify-center transition-all group-hover:rotate-180">
                            <ArrowRight className="w-4 h-4 -rotate-90" />
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
