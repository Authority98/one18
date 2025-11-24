import React from 'react';
import { MapPin, Utensils, Phone, Navigation } from 'lucide-react';

const LocationsSection = () => {
    const locations = [
        {
            title: "Tampines St 81",
            subtitle: "The Original",
            address: ["Blk 826 Tampines Street 81", "#01-118", "Singapore 520826"],
            icon: MapPin,
            rotate: "-rotate-2",
            img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "North Bridge Rd",
            subtitle: "Buffet & Cafe",
            address: ["757 North Bridge Rd", "Singapore 198725"],
            icon: Utensils,
            rotate: "rotate-2",
            hasPhone: true,
            img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <section id="locations" className="py-32 bg-[#3D405B] relative overflow-hidden">
            {/* Map Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/shattered-island.png")' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center justify-center mb-20 text-center">
                    <div className="relative">
                        <h2 className="text-6xl md:text-8xl text-white font-abril mb-4">Find Us</h2>
                        <p className="text-xl text-white/70 max-w-md mx-auto">Come say hello at one of our cozy locations.</p>
                        <div className="hidden lg:block absolute -right-32 top-1/2 -translate-y-1/2">
                            <Navigation className="w-24 h-24 text-[#E07A5F] opacity-50 animate-bounce" />
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 max-w-5xl mx-auto">
                    {locations.map((location, i) => (
                        <div key={i} className={`group relative bg-white p-4 pb-8 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-0 hover:z-20 ${location.rotate}`}>
                            {/* Tape Effect */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/30 backdrop-blur-sm transform -rotate-1 shadow-sm z-10"></div>

                            {/* Image Area */}
                            <div className="h-64 w-full bg-gray-200 mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                                <img src={location.img} className="w-full h-full object-cover" alt={location.title} />
                                <div className="absolute top-4 right-4 w-12 h-12 bg-[#E07A5F] rounded-full flex items-center justify-center text-white shadow-lg">
                                    <location.icon className="w-6 h-6" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="px-4 text-center">
                                <h3 className="text-3xl font-abril text-[#2C1810] mb-1">{location.title}</h3>
                                <p className="text-[#E07A5F] font-bold text-sm uppercase tracking-widest mb-6">{location.subtitle}</p>

                                <div className="space-y-2 text-gray-600 font-medium font-handwriting text-lg">
                                    {location.address.map((line, j) => (
                                        <p key={j}>{line}</p>
                                    ))}
                                </div>

                                {location.hasPhone && (
                                    <div className="mt-6 pt-4 border-t border-dashed border-gray-300 inline-block">
                                        <p className="text-sm flex items-center gap-2 text-[#2C1810]">
                                            <Phone className="w-4 h-4" /> Reservations: +65 1234 5678
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LocationsSection;
