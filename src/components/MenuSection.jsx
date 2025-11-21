import React from 'react';
import { Croissant, Wheat, ArrowUpRight } from 'lucide-react';

const MenuSection = () => {
    const sweetItems = [
        {
            name: "Pain Au Chocolat",
            desc: "Premium dark chocolate batons wrapped in buttery, flaky perfection.",
            price: "$4.00",
            img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
        },
        {
            name: "Ondeh Ondeh Roll",
            desc: "Pandan sponge with gula melaka cream and fresh coconut — a local favorite.",
            price: "$11.80",
            img: "https://images.unsplash.com/photo-1514517521153-1be72277b32f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
        }
    ];

    const savoryItems = [
        {
            name: "Sourdough Loaf",
            desc: "Artisan sourdough with crispy crust and perfectly chewy crumb.",
            price: "$11.70",
            img: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
        },
        {
            name: "Chicken Satay Supreme",
            desc: "Spiced chicken with authentic peanut sauce notes — Singapore fusion at its best.",
            price: "$7.80",
            img: "https://images.unsplash.com/photo-1550950158-d0d960dff51b?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
        }
    ];

    const MenuItem = ({ item }) => (
        <li className="group flex justify-between items-start hover:bg-[#F4F1DE]/50 p-4 rounded-xl transition-all cursor-pointer border border-transparent hover:border-[#2C1810]/5">
            <div className="flex gap-4">
                <img src={item.img} className="w-20 h-20 rounded-lg object-cover shadow-sm" alt={item.name} />
                <div>
                    <span className="text-xl font-bold text-[#2C1810] group-hover:text-[#E07A5F] transition-colors">{item.name}</span>
                    <p className="text-sm text-gray-500 font-light mt-1 leading-relaxed">{item.desc}</p>
                </div>
            </div>
            <span className="text-xl font-bold text-[#2C1810]">{item.price}</span>
        </li>
    );

    return (
        <section id="menu" className="py-24 bg-white relative">
            {/* Paper tear visual at top */}
            <div className="absolute top-0 left-0 w-full h-6 bg-[#F4F1DE]" style={{ clipPath: 'polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%)' }}></div>

            <div className="container mx-auto px-6 mt-10">
                <div className="text-center mb-16">
                    <h2 className="text-6xl text-[#2C1810] mb-4 font-abril">Fresh Daily Bakes</h2>
                    <div className="w-24 h-1.5 bg-[#E07A5F] mx-auto rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Sweet Comforts */}
                    <div className="space-y-10">
                        <h3 className="text-3xl text-[#E07A5F] mb-8 flex items-center gap-3 font-abril italic border-b-2 border-[#E07A5F]/20 pb-4">
                            <Croissant className="w-8 h-8" /> Sweet Comforts
                        </h3>
                        <ul className="space-y-8">
                            {sweetItems.map((item, i) => (
                                <MenuItem key={i} item={item} />
                            ))}
                        </ul>
                    </div>

                    {/* Savory & Breads */}
                    <div className="space-y-10">
                        <h3 className="text-3xl text-[#E07A5F] mb-8 flex items-center gap-3 font-abril italic border-b-2 border-[#E07A5F]/20 pb-4">
                            <Wheat className="w-8 h-8" /> Savory & Breads
                        </h3>
                        <ul className="space-y-8">
                            {savoryItems.map((item, i) => (
                                <MenuItem key={i} item={item} />
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <a href="https://one18bakerynorthbridge.oddle.me/en_SG" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 bg-[#2C1810] text-[#F4F1DE] px-10 py-4 rounded-full text-lg font-bold hover:bg-[#E07A5F] transition-all transform hover:-translate-y-1 shadow-xl">
                        See Full Delivery Menu <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MenuSection;
