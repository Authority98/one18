import React from 'react';
import { Star, Quote } from 'lucide-react';
import SectionTag from './SectionTag';

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Sarah L.",
            role: "Regular Customer",
            text: "The pistachio supreme croissant is absolutely divine! I come here every weekend without fail.",
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
        },
        {
            name: "Ahmad R.",
            role: "Event Organizer",
            text: "One18 catered our corporate event and everyone was blown away. Professional service and amazing pastries!",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
        },
        {
            name: "Michelle T.",
            role: "Food Blogger",
            text: "Authentic French techniques with local flavors. One18 is a hidden gem in Singapore's bakery scene.",
            img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
        },
        {
            name: "James K.",
            role: "Chef",
            text: "The sourdough is world-class. You can taste the passion and quality ingredients in every bite.",
            img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
        }
    ];

    return (
        <section className="py-32 bg-[#F9F7F2] relative overflow-hidden">
            {/* Creative Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#E07A5F]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#2C1810]/5 rounded-full blur-3xl"></div>
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 50 Q 25 0 50 50 T 100 50" fill="none" stroke="#2C1810" strokeWidth="0.5" />
                    <path d="M0 30 Q 25 80 50 30 T 100 30" fill="none" stroke="#E07A5F" strokeWidth="0.5" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <SectionTag>
                        COMMUNITY LOVE
                    </SectionTag>
                    <h2 className="text-5xl md:text-7xl text-[#2C1810] font-abril leading-none">
                        Loved By <br />
                        <span className="relative inline-block">
                            <span className="relative z-10">Thousands</span>
                            <svg className="absolute bottom-2 left-0 w-full h-3 text-[#E07A5F] -z-10 opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Horizontal Scroll Container */}
                    <div className="flex overflow-x-auto pb-12 gap-8 snap-x snap-mandatory hide-scrollbar">
                        {testimonials.map((t, i) => (
                            <div key={i} className="min-w-[350px] md:min-w-[450px] snap-center">
                                <div className="bg-white p-10 rounded-[3rem] relative group hover:-translate-y-2 transition-transform duration-500 shadow-xl hover:shadow-2xl border border-[#2C1810]/5 h-full flex flex-col">
                                    <Quote className="w-12 h-12 text-[#E07A5F] mb-6 transform group-hover:scale-110 transition-transform" />

                                    <p className="text-xl text-[#2C1810] leading-relaxed mb-8 font-medium flex-grow italic">
                                        "{t.text}"
                                    </p>

                                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-[#2C1810]/5">
                                        <div className="relative">
                                            <img src={t.img} className="w-16 h-16 rounded-full object-cover border-2 border-[#E07A5F] p-1" alt={t.name} />
                                            <div className="absolute -bottom-1 -right-1 bg-[#E07A5F] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                                5.0 ★
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#2C1810] text-lg font-abril tracking-wide">{t.name}</h4>
                                            <p className="text-sm text-[#E07A5F] font-bold tracking-wider uppercase">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Call to Action Card */}
                        <div className="min-w-[350px] md:min-w-[450px] snap-center flex items-center justify-center">
                            <div className="bg-[#2C1810] p-10 rounded-[3rem] text-center text-[#F4F1DE] flex flex-col items-center justify-center h-full w-full shadow-xl transform hover:scale-[1.02] transition-transform cursor-pointer group">
                                <div className="w-20 h-20 bg-[#E07A5F] rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                                    <Star className="w-10 h-10 text-white fill-current" />
                                </div>
                                <h3 className="text-3xl font-abril mb-4">Join the Family</h3>
                                <p className="text-[#F4F1DE]/70 mb-8 max-w-xs">Share your experience and get featured on our wall of love.</p>
                                <button className="bg-[#F4F1DE] text-[#2C1810] px-8 py-3 rounded-full font-bold hover:bg-white transition-colors">
                                    Leave a Review
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
