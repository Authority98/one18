import React from 'react';
import { Award, ChefHat, Clock, MapPin } from 'lucide-react';

const QualitySection = () => {
    const differences = [
        {
            icon: Award,
            title: "Premium Ingredients",
            desc: "Only the finest French butter and authentic ingredients in every pastry."
        },
        {
            icon: ChefHat,
            title: "Expert Bakers",
            desc: "Skilled artisans with years of French pastry expertise and passion."
        },
        {
            icon: Clock,
            title: "Fresh Daily",
            desc: "Baked from scratch every morning to ensure maximum freshness."
        },
        {
            icon: MapPin,
            title: "Local & Authentic",
            desc: "Singapore-based with authentic French techniques and local flavors."
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl text-[#2C1810] mb-4 font-abril">
                        The One18 Difference
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        What sets us apart from the rest — our commitment to excellence in every bite
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {differences.map((item, i) => (
                        <div key={i} className="group">
                            <div className="bg-gradient-to-br from-[#F2CC8F] to-[#E8B968] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-[#E8B968]/20 h-full">
                                <div className="w-16 h-16 bg-white/90 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-8 h-8 text-[#2C1810]" />
                                </div>
                                <h3 className="text-xl font-bold text-[#2C1810] mb-3">{item.title}</h3>
                                <p className="text-[#2C1810]/80 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QualitySection;

