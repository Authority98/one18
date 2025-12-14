import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import SectionTag from './SectionTag';

const CTASection = () => {
    return (
        <section className="py-32 relative overflow-hidden bg-texture">
            {/* Decorative Blobs (Matching Hero) */}
            <div className="absolute top-20 left-[-100px] w-64 h-64 bg-brand-gold rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse pointer-events-none"></div>
            <div className="absolute bottom-20 right-[-100px] w-72 h-72 bg-brand-accent rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse delay-1000 pointer-events-none"></div>

            {/* Animated Particles (Darker for light bg) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-20 left-20 w-4 h-4 bg-brand-accent rounded-full animate-ping"></div>
                <div className="absolute bottom-40 right-40 w-6 h-6 bg-brand-dark rounded-full animate-pulse delay-700"></div>
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-brand-accent rounded-full animate-ping delay-300"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <SectionTag rotate="rotate-2" className="mx-auto mb-8">
                    <Sparkles className="w-4 h-4 inline-block mr-2" /> TASTE THE MAGIC
                </SectionTag>

                <h2 className="text-6xl md:text-8xl font-abril text-brand-dark mb-8 leading-tight">
                    Ready to Taste <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-dark">Excellence?</span>
                </h2>

                <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto mb-16 leading-relaxed font-light">
                    Join thousands of happy customers and experience the finest artisan pastries in Singapore.
                    Baked fresh daily, just for you.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <a href="https://one18bakerynorthbridge.oddle.me/en_SG" target="_blank" rel="noreferrer" className="group relative px-12 py-6 bg-brand-dark text-brand-cream rounded-full font-bold text-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                        <span className="relative z-10 flex items-center gap-3 group-hover:text-brand-dark transition-colors duration-300">
                            Place an Order <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                    </a>

                    <a href="#locations" className="px-12 py-6 bg-transparent border-2 border-brand-dark text-brand-dark rounded-full font-bold text-xl hover:bg-brand-dark hover:text-brand-cream transition-all hover:-translate-y-1">
                        Find a Location
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
