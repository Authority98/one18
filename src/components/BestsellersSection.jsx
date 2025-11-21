import React, { useState } from 'react';
import { ShoppingBag, Star } from 'lucide-react';

const BestsellersSection = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Croissants', 'Cakes', 'Savory'];

    const products = [
        {
            title: "Pistachio Supreme Croissant",
            desc: "24-layer buttery croissant with Italian pistachio cream.",
            tag: "BESTSELLER",
            img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
            tagColor: "bg-[#E07A5F] text-white",
            height: "h-80 md:h-96",
            category: "Croissants"
        },
        {
            title: "Nutella Hazelnut Supreme",
            desc: "Overflowing with Nutella & roasted Italian hazelnuts.",
            tag: "NEW",
            img: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=800&q=80",
            tagColor: "bg-[#2C1810] text-[#F4F1DE]",
            height: "h-96 md:h-[500px]",
            category: "Croissants"
        },
        {
            title: "Viral Crookie",
            desc: "The TikTok sensation - croissant meets cookie.",
            tag: "VIRAL",
            img: "https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&w=800&q=80",
            tagColor: "bg-[#F4F1DE] text-[#2C1810]",
            height: "h-72 md:h-80",
            category: "Croissants"
        },
        {
            title: "Ondeh Ondeh Roll",
            desc: "Pandan sponge with gula melaka & fresh coconut.",
            tag: "LOCAL FAV",
            img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            tagColor: "bg-[#E07A5F] text-white",
            height: "h-80 md:h-96",
            category: "Cakes"
        },
        {
            title: "Basque Burnt Cheesecake",
            desc: "Creamy center with signature caramelized top.",
            tag: "CLASSIC",
            img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
            tagColor: "bg-[#2C1810] text-[#F4F1DE]",
            height: "h-72 md:h-80",
            category: "Cakes"
        },
        {
            title: "Sambal Ikan Bilis Bun",
            desc: "Soft brioche with spicy sambal & crispy anchovies.",
            tag: "SPICY",
            img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80",
            tagColor: "bg-[#F4F1DE] text-[#2C1810]",
            height: "h-80 md:h-96",
            category: "Savory"
        }
    ];

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(product => product.category === activeCategory);

    return (
        <section id="bestsellers" className="py-32 bg-[#F9F7F2] relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#E07A5F]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#2C1810]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

            {/* Abstract Background Shape */}
            <svg className="absolute top-20 left-0 w-full h-full pointer-events-none opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 0 C 30 20 70 20 100 0 L 100 100 L 0 100 Z" fill="none" stroke="#E07A5F" strokeWidth="0.5" />
            </svg>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="relative z-10">
                        <div className="inline-block bg-[#2C1810] text-[#F4F1DE] px-4 py-1 rounded-full text-sm font-bold tracking-widest mb-6 transform rotate-2 shadow-lg mx-auto">
                            CURATED FOR YOU • HANDCRAFTED DAILY
                        </div>
                        <h2 className="text-6xl md:text-8xl text-[#2C1810] font-abril leading-tight tracking-tight mb-8">
                            The Collection
                        </h2>

                        {/* Creative Category Filter */}
                        <div className="flex flex-wrap justify-center gap-3 mb-8">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`
                                        px-6 py-2 rounded-full text-sm font-bold tracking-wider transition-all duration-300 border-2
                                        ${activeCategory === cat
                                            ? 'bg-[#2C1810] text-[#F4F1DE] border-[#2C1810] shadow-lg scale-105'
                                            : 'bg-transparent text-[#2C1810] border-[#2C1810]/20 hover:border-[#2C1810] hover:bg-[#2C1810]/5'}
                                    `}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                    </div>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {filteredProducts.map((item, i) => (
                        <div key={i} className={`group relative break-inside-avoid rounded-[2rem] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${item.height} animate-fade-in-up`}>
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
                                <div className="mb-3">
                                    <h3 className="text-3xl font-abril text-[#F4F1DE] leading-tight">{item.title}</h3>
                                </div>
                                <p className="text-[#F4F1DE]/80 text-sm mb-0 line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a href="https://one18bakehouse.oddle.me/en_SG" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-4 text-[#2C1810] text-xl font-bold hover:text-[#E07A5F] transition-colors">
                        <span className="relative overflow-hidden">
                            <span className="block transform group-hover:-translate-y-full transition-transform duration-300">View All Items</span>
                            <span className="absolute top-0 left-0 block transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-[#E07A5F]">View All Items</span>
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2C1810] group-hover:bg-[#E07A5F] transition-colors"></span>
                        </span>
                        <div className="w-12 h-12 rounded-full border-2 border-[#2C1810] group-hover:border-[#E07A5F] flex items-center justify-center transition-all group-hover:rotate-45 group-hover:scale-110">
                            <ShoppingBag className="w-5 h-5" />
                        </div>
                    </a>
                </div>
            </div>
        </section >
    );
};

export default BestsellersSection;
