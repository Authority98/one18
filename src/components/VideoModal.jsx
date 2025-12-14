import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const VideoModal = ({ isOpen, onClose }) => {
    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fadeIn"
            onClick={onClose}
        >
            {/* Backdrop with blur */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl"></div>

            {/* Modal Content */}
            <div
                className="relative w-full max-w-5xl aspect-video bg-gradient-to-br from-brand-dark/90 to-black/90 rounded-3xl shadow-2xl overflow-hidden border border-white/10 animate-scaleIn"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/10 via-transparent to-brand-gold/10 pointer-events-none"></div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 group border border-white/20 hover:scale-110"
                    aria-label="Close video"
                >
                    <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
                </button>

                {/* Video Container */}
                <div className="relative w-full h-full flex items-center justify-center p-8">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-black">
                        {/* Replace this with your actual video URL */}
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/syMmU_qM2Ck?autoplay=1&rel=0&modestbranding=1"
                            title="One18 Bakery Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* Bottom gradient accent */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
            </div>
        </div>
    );
};

export default VideoModal;
