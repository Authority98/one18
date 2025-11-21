import React from 'react';

const MarqueeDivider = () => {
    const items = [
        "🥐 100% French Butter",
        "Muslim Owned",
        "Freshly Baked in Tampines",
        "Viral Supreme Croissants",
        "Artisanal Quality"
    ];

    return (
        <div className="bg-[#E07A5F] text-[#F4F1DE] py-4 overflow-hidden transform -rotate-1 shadow-lg border-y-4 border-[#2C1810] relative z-20 mb-[-2px]">
            <div className="animate-marquee whitespace-nowrap flex gap-8 text-xl md:text-2xl font-bold uppercase tracking-wider items-center">
                {Array(2).fill(items).flat().map((text, i) => (
                    <React.Fragment key={i}>
                        <span>{text}</span>
                        <span className="w-2 h-2 bg-[#F4F1DE] rounded-full"></span>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default MarqueeDivider;
