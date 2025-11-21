import React from 'react';
import { ShoppingBag } from 'lucide-react';

const SupremeSection = () => {
    const products = [
        {
            title: "Pistachio",
            price: "$6.00",
            desc: "Rich roasted pistachio cream with crushed nut topping.",
            tag: "Crowd Favorite",
            img: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            tagColor: "bg-[#F4F1DE] text-[#2C1810]"
        },
        {
            title: "Nutella",
            price: "$6.00",
            desc: "Hazelnut praline meets creamy Nutella ganache.",
            tag: "Sweet Tooth",
            img: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            tagColor: "bg-[#E07A5F] text-white",
            className: "md:translate-y-12"
        },
        {
            title: "Beef Rendang",
            price: "$7.80",
            desc: "Tender, slow-cooked beef rendang in flaky pastry.",
            tag: "Savory Hit",
            img: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            tagColor: "bg-[#2C1810] text-[#F4F1DE]"
        }
    ];

    return (
        <section id="supreme" className="py-32 relative overflow-hidden bg-[#F4F1DE]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16">
                    <div className="relative z-10">
                        <span className="font-dancing text-4xl md:text-5xl text-[#E07A5F] block mb-2 transform -rotate-6 ml-4">Our Signatures</span>
                        <h2 className="text-5xl md:text-7xl text-[#2C1810] font-abril">The Supreme <br /> Collection</h2>
                    </div>
                    <p className="text-lg md:text-xl max-w-md text-gray-600 mt-6 lg:mt-0 relative z-10">
                        Circular layers of joy. Crisp on the outside, exploding with house-made creams on the inside.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                    {products.map((item, i) => (
                        <div key={i} className={`group relative h-[450px] md:h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 ${item.className || ''}`}>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-80"></div>
                            <img src={item.img} className="card-zoom-image absolute inset-0 w-full h-full object-cover" alt={item.title} />

                            <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <div className={`${item.tagColor} inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-md`}>{item.tag}</div>
                                <h3 className="text-4xl text-white mb-2 font-abril">{item.title}</h3>
                                <p className="text-white/90 text-base md:text-lg opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-500 transform translate-y-4 group-hover:translate-y-0">{item.desc}</p>
                                <div className="mt-6 flex items-center justify-between border-t border-white/30 pt-4">
                                    <span className="text-2xl font-bold text-[#E07A5F]">{item.price}</span>
                                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#2C1810] hover:bg-[#E07A5F] hover:text-white transition-colors shadow-lg">
                                        <ShoppingBag className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SupremeSection;
