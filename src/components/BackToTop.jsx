import React from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = ({ show, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`fixed bottom-8 right-8 bg-[#E07A5F] text-white p-4 rounded-full shadow-xl transition-all duration-500 hover:scale-110 z-40 ${show ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        >
            <ArrowUp className="w-6 h-6" />
        </button>
    );
};

export default BackToTop;
