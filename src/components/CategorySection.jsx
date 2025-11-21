import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CategorySection = () => {
    const categories = [
        {
            name: "Croissants & Danishes",
            count: "12 Items",
            img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            color: "from-orange-900/80 to-black/40"
        },
        {
            name: "Cakes & Whole Cakes",
            count: "8 Items",
            img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            color: "from-blue-900/80 to-black/40"
        },
        {
            name: "Savoury Pastries",
            count: "15 Items",
            img: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            color: "from-amber-900/80 to-black/40"
        },
        {
            name: "Cookies & Beverages",
            count: "20 Items",
            img: "https://images.unsplash.com/photo-1499636138143-bd630f5cfdeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            color: "from-yellow-900/80 to-black/40"
        }
    ];

    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h2 className="text-6xl md:text-8xl text-[#2C1810] font-abril mb-4">Shop By <br /> Category</h2>
                        <div className="h-2 w-32 bg-[#E07A5F] rounded-full"></div>
                    </div>
                    <p className="text-xl text-gray-500 max-w-md text-right mt-6 md:mt-0">
                        Explore our wide range of artisanal bakes, from flaky croissants to decadent cakes.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 h-[600px] md:h-[500px]">
                    {categories.map((category, i) => (
                        <div key={i} className="group relative h-full rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:flex-[2]">
                            <img
                                src={category.img}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                alt={category.name}
                            />
                            <div className={`absolute inset-0 bg-gradient-to-b ${category.color} transition-opacity duration-300`}></div>

                            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                <div className="flex justify-end">
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        <ArrowUpRight className="w-6 h-6" />
                                    </div>
                                </div>

                                <div>
                                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-widest mb-3 border border-white/10">
                                        {category.count}
                                    </span>
                                    <h3 className="text-3xl font-abril text-white leading-tight transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        {category.name}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategorySection;
