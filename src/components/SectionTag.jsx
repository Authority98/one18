import React from 'react';

const SectionTag = ({ children, className = "", rotate = "rotate-2", colorClass = "bg-brand-dark text-brand-cream" }) => {
    return (
        <div className={`inline-block ${colorClass} px-4 py-1 rounded-full text-sm font-bold tracking-widest mb-3 md:mb-6 transform ${rotate} shadow-lg ${className}`}>
            {children}
        </div>
    );
};

export default SectionTag;
