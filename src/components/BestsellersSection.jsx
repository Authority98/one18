import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';

const BestsellersSection = () => {
    const products = [
        {
            title: "Almond Honey Croissant",
            price: "$5.50",
            desc: "Flaky croissant topped with almond cream and honey glaze.",
            tag: "Best Seller",
            img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tagColor: "bg-[#E07A5F] text-white",
            height: "h-80 md:h-96"
        },
        {
            title: "Triple Chocolate Supreme",
            price: "$6.50",
            desc: "Decadent chocolate ganache filled supreme croissant.",
            tag: "Must Try",
            img: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tagColor: "bg-[#2C1810] text-[#F4F1DE]",
            height: "h-96 md:h-[500px]"
        },
        {
            title: "Garlic Knot",
            price: "$4.80",
            desc: "Savory garlic butter knot with fresh herbs.",
            tag: "Savory",
            img: "https://images.unsplash.com/photo-1573140247632-f84660f67627?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tagColor: "bg-[#F4F1DE] text-[#2C1810]",
            height: "h-72 md:h-80"
        },
        {
            title: "Pulled Beef Roll",
            price: "$7.20",
            desc: "Slow-cooked pulled beef in a soft brioche roll.",
            tag: "Lunch Special",
            img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tagColor: "bg-[#E07A5F] text-white",
            height: "h-80 md:h-96"
        },
        {
            title: "Spicy Chicken Floss",
            price: "$5.00",
            desc: "Soft bun topped with spicy chicken floss and mayo.",
            tag: "Local Fav",
            img: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tagColor: "bg-[#2C1810] text-[#F4F1DE]",
            height: "h-72 md:h-80"
        },
        {
            title: "Herbal Tea With Egg",
            price: "$3.50",
            desc: "Traditional herbal tea served with a tea egg.",
            tag: "Classic",
            img: "https://images.unsplash.com/photo-1517093725432-a9ac7d7d0da7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tagColor: "bg-[#F4F1DE] text-[#2C1810]",
            height: "h-80 md:h-96"
        }
    ];

    return (
        <section id="bestsellers" className="py-32 bg-[#F9F7F2] relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E07A5F]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2C1810]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

            {/* Floating Text Texture */}
            <div className="absolute top-20 left-10 font-abril text-[200px] leading-none text-[#2C1810]/5 pointer-events-none select-none rotate-12">
                Fresh
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <div className="max-w-2xl">
                        <span className="font-dancing text-4xl md:text-5xl text-[#E07A5F] block mb-4 transform -rotate-2">Curated Favorites</span>
                        <h2 className="text-6xl md:text-8xl text-[#2C1810] font-abril leading-[0.9]">
                            Today's <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E07A5F] to-[#2C1810]">Bestsellers</span>
                        </h2>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <a href="https://one18bakerynorthbridge.oddle.me/en_SG" target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-[#2C1810] text-xl font-bold hover:text-[#E07A5F] transition-colors">
                            <span className="border-b-2 border-[#2C1810] group-hover:border-[#E07A5F] transition-colors">View Full Menu</span>
                            <div className="w-12 h-12 rounded-full border-2 border-[#2C1810] group-hover:border-[#E07A5F] flex items-center justify-center transition-all group-hover:rotate-45">
                                <ShoppingBag className="w-5 h-5" />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {products.map((item, i) => (
                        <div key={i} className={`group relative break-inside-avoid rounded-[2rem] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${item.height}`}>
                            <img
                                src={item.img}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                alt={item.title}
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/90 via-[#2C1810]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                            {/* Tag */}
                            <div className="absolute top-6 left-6">
                                <span className={`${item.tagColor} px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg backdrop-blur-sm`}>
                                    {item.tag}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex justify-between items-end mb-3">
                                    <h3 className="text-3xl font-abril text-[#F4F1DE] leading-tight max-w-[70%]">{item.title}</h3>
                                    <span className="text-2xl font-bold text-[#E07A5F]">{item.price}</span>
                                </div>
                                <p className="text-[#F4F1DE]/80 text-sm mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.desc}</p>

                                <button className="w-full py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl font-bold hover:bg-[#E07A5F] hover:border-[#E07A5F] transition-all flex items-center justify-center gap-2">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestsellersSection;
