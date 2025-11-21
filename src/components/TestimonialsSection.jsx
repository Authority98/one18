import React from 'react';
import { Star, Quote } from 'lucide-react';

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
        }
    ];

    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="font-dancing text-4xl text-[#E07A5F] block mb-2">Community Love</span>
                    <h2 className="text-6xl md:text-7xl text-[#2C1810] font-abril">Loved By Thousands</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-[#F9F7F2] p-10 rounded-[3rem] relative group hover:bg-[#2C1810] transition-colors duration-500">
                            <Quote className="absolute top-10 left-10 w-12 h-12 text-[#E07A5F]/20 group-hover:text-[#E07A5F] transition-colors" />

                            <div className="relative z-10 mt-8">
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, j) => (
                                        <Star key={j} className="w-5 h-5 fill-[#E07A5F] text-[#E07A5F]" />
                                    ))}
                                </div>
                                <p className="text-xl text-[#2C1810] group-hover:text-[#F4F1DE] leading-relaxed mb-8 font-medium transition-colors duration-500">
                                    "{t.text}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <img src={t.img} className="w-14 h-14 rounded-full object-cover border-2 border-[#E07A5F]" alt={t.name} />
                                    <div>
                                        <h4 className="font-bold text-[#2C1810] group-hover:text-white text-lg transition-colors duration-500">{t.name}</h4>
                                        <p className="text-sm text-gray-500 group-hover:text-white/60 transition-colors duration-500">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
