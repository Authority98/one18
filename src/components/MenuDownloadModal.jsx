import React, { useEffect } from 'react';
import { X, Download, FileText } from 'lucide-react';

const MenuDownloadModal = ({ isOpen, onClose }) => {
    const menus = [
        {
            title: 'Bakery Menu',
            description: 'Our full range of pastries, breads, and baked goods',
            icon: '🥐',
            size: '2.4 MB'
        },
        {
            title: 'Catering Menu',
            description: 'Special offerings for events and corporate catering',
            icon: '🎉',
            size: '1.8 MB'
        },
        {
            title: 'Seasonal Specials',
            description: 'Limited time offerings and seasonal favorites',
            icon: '⭐',
            size: '1.2 MB'
        }
    ];

    const handleDownload = (menuTitle) => {
        // Simulate download - in production, this would trigger actual PDF download
        alert(`Downloading ${menuTitle}... (This is a demo)`);
    };

    // Prevent background scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
            <div className="bg-gradient-to-br from-[#2C1810] to-[#1a1410] rounded-[2rem] max-w-2xl w-full max-h-[90vh] overflow-y-auto hide-scrollbar shadow-2xl transform animate-scaleIn">
                {/* Header */}
                <div className="sticky top-0 bg-gradient-to-br from-[#2C1810] to-[#1a1410] text-[#F4F1DE] p-8 rounded-t-[2rem] relative overflow-hidden z-10">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#E07A5F]/20 rounded-full blur-3xl"></div>
                    <button
                        onClick={onClose}
                        className=\"absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors z-20\"
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-[#E07A5F]/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4">
                            <FileText className="w-8 h-8 text-[#F4F1DE]" />
                        </div>
                        <h2 className="text-4xl font-abril mb-2">Download Our Menus</h2>
                        <p className="text-[#F4F1DE]/80">Browse our offerings at your convenience</p>
                    </div>
                </div>

                {/* Menu Cards */}
                <div className="p-8 space-y-4 rounded-b-[2rem] bg-[#F4F1DE]">
                    {menus.map((menu, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 border-2 border-[#2C1810]/5 hover:border-[#E07A5F]/50 transition-all hover:shadow-lg group text-center"
                        >
                            <div className="w-20 h-20 bg-[#E07A5F]/10 rounded-xl flex items-center justify-center text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                                {menu.icon}
                            </div>
                            <h3 className="text-xl font-abril text-[#2C1810] mb-2">{menu.title}</h3>
                            <p className="text-[#2C1810]/60 text-sm mb-4">{menu.description}</p>
                            <button
                                onClick={() => handleDownload(menu.title)}
                                className="w-full flex items-center justify-center gap-2 bg-[#E07A5F] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#2C1810] transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                            >
                                <Download className="w-4 h-4" />
                                Download
                            </button>
                        </div>
                    ))}

                    {/* Info Box */}
                    <div className="bg-[#2C1810] text-[#F4F1DE] rounded-2xl p-6 mt-6">
                        <p className="text-sm leading-relaxed">
                            <span className="font-bold">💡 Note:</span> All prices and items are subject to availability.
                            For the most up-to-date offerings, please visit our online ordering platform or contact us directly.
                        </p>
                    </div>

                    {/* Order Online Button */}
                    <a
                        href="https://one18bakerynorthbridge.oddle.me/en_SG"
                        target="_blank"
                        rel="noreferrer"
                        className="block w-full bg-[#E07A5F] text-white text-center py-4 rounded-full font-bold text-lg hover:bg-[#2C1810] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mt-4"
                    >
                        Order Online Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MenuDownloadModal;

