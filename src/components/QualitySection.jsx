import React from 'react';
import { Award, ChefHat, Clock, MapPin } from 'lucide-react';

const QualitySection = () => {
    const steps = [
        {
            icon: Clock,
            title: "4:00 AM Start",
            desc: "Our bakers start before dawn to ensure every pastry is fresh.",
            color: "bg-[#F4F1DE] text-[#2C1810]"
        },
        {
            icon: Award,
            title: "Premium Sourcing",
            desc: "We import butter from France and source local herbs daily.",
            color: "bg-[#E07A5F] text-white"
        },
        {
            icon: ChefHat,
            title: "Artisan Craft",
            desc: "Hand-laminated dough with 27 layers of buttery perfection.",
            color: "bg-[#2C1810] text-[#F4F1DE]"
        },
        {
            icon: MapPin,
            title: "Served Fresh",
            desc: "Straight from our ovens to your plate at our 3 locations.",
            color: "bg-[#F4F1DE] text-[#2C1810]"
        }
    ];

    return (
        <section className="py-32 bg-[#F9F7F2] relative overflow-hidden">
            {/* Svg Path Line connecting steps */}
            <div className="absolute top-1/2 left-0 w-full h-20 -translate-y-1/2 hidden lg:block pointer-events-none">
                <svg className="w-full h-full" preserveAspectRatio="none">
                    <path d="M0,40 Q 250,80 500,40 T 1000,40 T 1500,40" fill="none" stroke="#E07A5F" strokeWidth="2" strokeDasharray="10 10" className="opacity-30" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <span className="font-dancing text-4xl text-[#E07A5F] block mb-2">Behind The Scenes</span>
                    <h2 className="text-6xl md:text-7xl text-[#2C1810] font-abril">The One18 Difference</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="relative group">
                            <div className={`relative z-10 h-full p-8 rounded-[2.5rem] ${step.color} shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-4 border-white/20`}>
                                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-8 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                                    <step.icon className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-abril">{step.title}</h3>
                                <p className="opacity-80 leading-relaxed font-medium">
                                    {step.desc}
                                </p>
                            </div>

                            {/* Number Background */}
                            <div className="absolute -top-6 -right-4 text-9xl font-abril text-black/5 select-none pointer-events-none group-hover:text-[#E07A5F]/10 transition-colors">
                                {i + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QualitySection;
