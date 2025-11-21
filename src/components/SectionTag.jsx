import React from 'react';

const SectionTag = ({ children, className = "", rotate = "rotate-2" }) => {
    return (
        <div className={`inline-block bg-[#2C1810] text-[#F4F1DE] px-4 py-1 rounded-full text-sm font-bold tracking-widest mb-6 transform ${rotate} shadow-lg ${className}`}>
            {children}
        </div>
    );
};

export default SectionTag;
