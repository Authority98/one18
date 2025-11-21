import React from 'react';
import { MapPin, Utensils, Phone } from 'lucide-react';

const LocationsSection = () => {
    const locations = [
        {
            number: "01",
            title: "Tampines St 81",
            subtitle: "The Original",
            address: ["Blk 826 Tampines Street 81", "#01-118", "Singapore 520826"],
            icon: MapPin,
            bgColor: "bg-[#F4F1DE]",
            textColor: "text-[#2C1810]",
            iconBg: "bg-[#E07A5F]"
        },
        {
            number: "02",
            title: "Tampines St 23",
            subtitle: "The New Spot",
            address: ["Blk 201E Tampines St 23", "#01-64", "Singapore 527201"],
            icon: MapPin,
            bgColor: "bg-[#F4F1DE]",
            textColor: "text-[#2C1810]",
            iconBg: "bg-[#E07A5F]"
        },
        {
            number: "03",
            title: "North Bridge",
            subtitle: "Buffet & Cafe",
            address: ["757 North Bridge Rd", "Singapore 198725"],
            icon: Utensils,
            bgColor: "bg-[#E07A5F]",
            textColor: "text-white",
            iconBg: "bg-[#2C1810]",
            hasPhone: true
        }
    ];

    return (
        <section id="locations" className="py-24 bg-[#3D405B] text-[#F4F1DE] relative overflow-hidden">
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16">
                    <div className="text-center md:text-left">
                        <h2 className="text-5xl md:text-6xl mb-4 font-abril">Visit Us <br /> Today</h2>
                    </div>
                    <p className="text-lg opacity-70 max-w-xs mt-6 md:mt-0 text-center md:text-right font-light border-l-2 border-[#E07A5F] pl-6">Three convenient locations serving fresh pastries daily. Come taste the difference.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {locations.map((location, i) => (
                        <div key={i} className={`${location.bgColor} ${location.textColor} p-8 rounded-[2rem] hover:transform hover:-translate-y-2 transition-all duration-300 group ${location.bgColor === 'bg-[#E07A5F]' ? 'shadow-2xl relative overflow-hidden' : ''}`}>
                            {location.bgColor === 'bg-[#E07A5F]' && (
                                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                            )}
                            <div className="flex justify-between items-start mb-8 relative z-10">
                                <div className={`w-14 h-14 ${location.iconBg} rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                                    <location.icon className="w-6 h-6" />
                                </div>
                                <span className="text-6xl font-abril opacity-10 font-bold">{location.number}</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2 relative z-10">{location.title}</h3>
                            <p className={`${location.bgColor === 'bg-[#E07A5F]' ? 'opacity-90' : 'opacity-60'} text-sm uppercase tracking-wider mb-6 font-bold relative z-10`}>{location.subtitle}</p>
                            <div className={`space-y-3 text-base font-medium border-t ${location.bgColor === 'bg-[#E07A5F]' ? 'border-white/20' : 'border-[#2C1810]/10'} pt-6 relative z-10`}>
                                {location.address.map((line, j) => (
                                    <p key={j}>{line}</p>
                                ))}
                                {location.hasPhone && (
                                    <p className="mt-4 pt-2 text-sm italic flex items-center gap-2">
                                        <Phone className="w-4 h-4" /> Reservations Recommended
                                    </p>
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
