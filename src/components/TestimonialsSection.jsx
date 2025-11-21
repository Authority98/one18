import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Sarah L.",
            role: "Regular Customer",
            rating: 5,
            text: "The pistachio supreme croissant is absolutely divine! I come here every weekend without fail.",
            initial: "S",
            color: "bg-[#E07A5F]"
        },
        {
            name: "Ahmad R.",
            role: "Event Organizer",
            rating: 5,
            text: "One18 catered our corporate event and everyone was blown away. Professional service and amazing pastries!",
            initial: "A",
            color: "bg-[#2C1810]"
        },
        {
            name: "Michelle T.",
            role: "Food Blogger",
            rating: 5,
            text: "Authentic French techniques with local flavors. One18 is a hidden gem in Singapore's bakery scene.",
            initial: "M",
            color: "bg-[#E07A5F]"
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-white to-[#F4F1DE]/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="font-dancing text-4xl md:text-5xl text-[#E07A5F] block mb-3">What They Say</span>
                    <h2 className="text-5xl md:text-6xl text-[#2C1810] mb-4 font-abril">Loyalty Testimonials</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Hear from our valued customers who keep coming back for more
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#2C1810]/5 relative">
                            {/* Quote icon */}
                            <div className="absolute top-6 right-6 opacity-10">
                                <Quote className="w-16 h-16 text-[#E07A5F]" />
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, j) => (
                                    <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                ))}
                            </div>

                            {/* Testimonial text */}
                            <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                                "{testimonial.text}"
                            </p>

                            {/* Customer info */}
                            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                                <div className={`${testimonial.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                                    {testimonial.initial}
                                </div>
                                <div>
                                    <p className="font-bold text-[#2C1810]">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
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
