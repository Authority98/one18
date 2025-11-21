import React from 'react';
import { Croissant, Cake, Cookie, Wheat, Sparkles, Gift } from 'lucide-react';

const CategorySection = () => {
    const categories = [
        { icon: Croissant, name: "Croissants", color: "bg-[#E07A5F]/10", iconColor: "text-[#E07A5F]" },
        { icon: Wheat, name: "Bread", color: "bg-[#2C1810]/10", iconColor: "text-[#2C1810]" },
        { icon: Cake, name: "Cakes", color: "bg-[#E07A5F]/10", iconColor: "text-[#E07A5F]" },
        { icon: Sparkles, name: "Pastries", color: "bg-[#2C1810]/10", iconColor: "text-[#2C1810]" },
        { icon: Cookie, name: "Cookies", color: "bg-[#E07A5F]/10", iconColor: "text-[#E07A5F]" },
        { icon: Gift, name: "Special Orders", color: "bg-[#2C1810]/10", iconColor: "text-[#2C1810]" }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-5xl md:text-6xl text-[#2C1810] mb-3 font-abril">Shop By Category</h2>
                    <p className="text-gray-600 text-lg">Explore our delicious collection</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {categories.map((category, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className={`${category.color} w-24 h-24 md:w-28 md:h-28 mx-auto rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl border-4 border-transparent group-hover:border-[#E07A5F]/20`}>
                                <category.icon className={`w-12 h-12 md:w-14 md:h-14 ${category.iconColor} transition-transform group-hover:rotate-12`} />
                            </div>
                            <p className="text-center mt-4 font-semibold text-[#2C1810] group-hover:text-[#E07A5F] transition-colors">
                                {category.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategorySection;
