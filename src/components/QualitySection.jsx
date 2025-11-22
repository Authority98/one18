import React from 'react';
import { Globe, Scroll, Store, Sunrise } from 'lucide-react';
import SectionTag from './SectionTag';

const QualitySection = () => {
    const steps = [
        {
            icon: Sunrise,
            title: "4:00 AM Start",
            desc: "Our bakers start before dawn to ensure every pastry is fresh.",
            color: "bg-[#F4F1DE] text-[#2C1810]",
            rotate: "-rotate-2",
            delay: "0"
        },
        {
            icon: Globe,
            title: "Premium Sourcing",
            desc: "We import butter from France and source local herbs daily.",
            color: "bg-[#E07A5F] text-white",
            rotate: "rotate-2",
            delay: "100"
        },
        {
            icon: Scroll,
            title: "Artisan Craft",
            desc: "Hand-laminated dough with 27 layers of buttery perfection.",
            color: "bg-[#2C1810] text-[#F4F1DE]",
            rotate: "-rotate-1",
            delay: "200"
        },
        {
            icon: Store,
            title: "Served Fresh",
            desc: "Straight from our ovens to your plate at our 3 locations.",
            color: "bg-[#F4F1DE] text-[#2C1810]",
            rotate: "rotate-3",
            delay: "300"
        }
    ];

    return (
        <section id="quality" className="py-24 bg-[#F9F7F2] relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-[#E07A5F]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2C1810]/5 rounded-full blur-3xl" />
            </div>

            {/* Connecting Line for Desktop */}
            <div className="absolute top-1/2 left-0 w-full h-[400px] -translate-y-1/2 hidden lg:block pointer-events-none z-0">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 400">
                    <path
                        d="M100,150 C250,150 250,250 400,250 C550,250 550,150 700,150 C850,150 850,250 1000,250"
                        fill="none"
                        stroke="#E07A5F"
                        strokeWidth="3"
                        strokeDasharray="12 12"
                        className="opacity-40"
                    >
                        <animate attributeName="stroke-dashoffset" from="0" to="24" dur="1s" repeatCount="indefinite" />
                    </path>
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <div className="flex flex-col items-center">
                        <SectionTag rotate="-rotate-2">
                            BEHIND THE SCENES
                        </SectionTag>
                        <h2 className="text-6xl md:text-7xl text-[#2C1810] font-abril relative inline-block">
                            The One18 Difference
                            <svg className="absolute -bottom-4 left-0 w-full h-3 text-[#E07A5F]" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
                        </h2>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className={`relative group ${i % 2 === 0 ? 'lg:-mt-8' : 'lg:mt-8'}`}
                        >
                            {/* Connection Dot */}
                            <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#E07A5F] rounded-full z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_rgba(224,122,95,0.5)]" />

                            <div className={`
                                relative z-10 h-full p-6 rounded-[2rem] ${step.color}
                                shadow-xl hover:shadow-2xl transition-all duration-500
                                hover:-translate-y-2 hover:scale-105
                                border-4 border-white/20 ${step.rotate}
                            `}>
                                <div className="w-16 h-16 bg-white/20 rounded-2xl rotate-3 flex items-center justify-center mb-6 backdrop-blur-sm group-hover:rotate-12 transition-transform duration-500">
                                    <step.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 font-abril">{step.title}</h3>
                                <p className="opacity-90 leading-relaxed font-medium text-base">
                                    {step.desc}
                                </p>
                            </div>

                            {/* Number Background */}
                            <div className="absolute -top-8 -right-4 text-[6rem] font-abril text-black/5 select-none pointer-events-none group-hover:text-[#E07A5F]/10 transition-colors z-0 leading-none">
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
