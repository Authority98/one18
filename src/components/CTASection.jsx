import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Rich Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2C1810] via-[#3D405B] to-[#2C1810]"></div>

            {/* Animated Particles */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-20 w-4 h-4 bg-[#E07A5F] rounded-full animate-ping"></div>
                <div className="absolute bottom-40 right-40 w-6 h-6 bg-[#F4F1DE] rounded-full animate-pulse delay-700"></div>
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full animate-ping delay-300"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-[#E07A5F] font-bold text-sm uppercase tracking-widest mb-8 border border-white/10">
                    <Sparkles className="w-4 h-4" /> Taste The Magic
                </div>

                <h2 className="text-6xl md:text-8xl font-abril text-white mb-8 leading-tight">
                    Ready to Taste <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E07A5F] to-[#F2CC8F]">Excellence?</span>
                </h2>

                <p className="text-xl text-white/70 max-w-2xl mx-auto mb-16 leading-relaxed font-light">
                    Join thousands of happy customers and experience the finest artisan pastries in Singapore.
                    Baked fresh daily, just for you.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <a href="https://one18bakerynorthbridge.oddle.me/en_SG" target="_blank" rel="noreferrer" className="group relative px-12 py-6 bg-[#E07A5F] text-white rounded-full font-bold text-xl overflow-hidden shadow-2xl hover:shadow-[#E07A5F]/50 transition-all hover:-translate-y-1">
                        <span className="relative z-10 flex items-center gap-3">
                            Place an Order <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                        <span className="absolute inset-0 z-10 flex items-center justify-center gap-3 text-[#E07A5F] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            Place an Order <ArrowRight className="w-6 h-6" />
                        </span>
                    </a>

                    <a href="#locations" className="px-12 py-6 bg-transparent border-2 border-white/20 text-white rounded-full font-bold text-xl hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-sm">
                        Find a Location
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
