import React from 'react';
import { Calendar, Users, TrendingUp, CheckCircle } from 'lucide-react';

const CateringSection = () => {
    const stats = [
        { number: "100+", label: "Menu Items", icon: TrendingUp },
        { number: "100%", label: "Quality Guaranteed", icon: CheckCircle },
        { number: "50+", label: "Events Catered", icon: Calendar },
        { number: "100%", label: "Fresh Daily", icon: CheckCircle }
    ];

    return (
        <section className="py-24 bg-[#3D405B] text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#E07A5F]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F4F1DE]/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Content */}
                    <div>
                        <span className="font-dancing text-4xl md:text-5xl text-[#E07A5F] block mb-3">Special Events</span>
                        <h2 className="text-5xl md:text-6xl mb-6 font-abril leading-tight">
                            Corporate & Event Catering
                        </h2>
                        <p className="text-lg text-white/80 mb-8 leading-relaxed">
                            Make your special moments unforgettable with our premium catering services. From corporate events to weddings, we bring artisan quality to every occasion.
                        </p>
                        <a href="https://one18bakerynorthbridge.oddle.me/en_SG" target="_blank" rel="noreferrer" className="inline-block bg-[#E07A5F] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#F4F1DE] hover:text-[#2C1810] transition-all transform hover:scale-105 shadow-xl">
                            ORDER NOW
                        </a>
                    </div>

                    {/* Right side - Stats Card */}
                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
                        <div className="grid grid-cols-2 gap-8">
                            {stats.map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="w-16 h-16 bg-[#E07A5F]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <stat.icon className="w-8 h-8 text-[#E07A5F]" />
                                    </div>
                                    <div className="text-4xl md:text-5xl font-bold text-[#2C1810] mb-2 font-abril">
                                        {stat.number}
                                    </div>
                                    <p className="text-gray-600 font-medium text-sm">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CateringSection;
