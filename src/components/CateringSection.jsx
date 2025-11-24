import React, { useState } from 'react';
import { ArrowRight, Star, Check, Play } from 'lucide-react';
import SectionTag from './SectionTag';
import CateringModal from './CateringModal';
import MenuDownloadModal from './MenuDownloadModal';

const CateringSection = () => {
    const [isCateringModalOpen, setIsCateringModalOpen] = useState(false);
    const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
    return (
        <section id="catering" className="py-32 bg-gradient-to-br from-[#1a1410] via-[#2a1e19] to-[#1a1410] text-[#F4F1DE] relative overflow-hidden">
            {/* Background Creative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Soft glows only - no lines */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#E07A5F]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#F4F1DE]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/2"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Text Content - Spans 5 columns */}
                    <div className="lg:col-span-5 space-y-8">
                        <SectionTag rotate="-rotate-2">
                            PREMIUM SERVICE
                        </SectionTag>

                        <div>
                            <span className="font-dancing text-4xl md:text-5xl text-[#E07A5F] block mb-2">Elevate Your Events</span>
                            <h2 className="text-5xl md:text-7xl font-abril leading-[0.9]">
                                Unforgettable <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4F1DE] to-[#E07A5F]">Catering</span>
                            </h2>
                        </div>

                        <p className="text-lg text-[#F4F1DE]/80 leading-relaxed">
                            From intimate boardroom lunches to grand gala dinners, we bring the artistry of French pastry to your table. Impress your guests with our signature croissants, artisanal bakes, and impeccable service.
                        </p>

                        <ul className="space-y-3">
                            {['Customized Menus', 'On-site Live Stations', 'Halal Certified', 'Professional Setup'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-[#F4F1DE]/90">
                                    <div className="w-6 h-6 rounded-full bg-[#E07A5F] flex items-center justify-center flex-shrink-0">
                                        <Check className="w-3 h-3 text-[#2C1810] stroke-[3]" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="pt-6 flex flex-wrap gap-4">
                            <button
                                onClick={() => setIsCateringModalOpen(true)}
                                className="group inline-flex items-center justify-center gap-3 bg-[#E07A5F] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-[#2C1810] transition-all shadow-lg hover:shadow-[#E07A5F]/50"
                            >
                                Get a Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => setIsMenuModalOpen(true)}
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-lg font-bold border border-[#F4F1DE]/30 hover:bg-[#F4F1DE]/10 transition-all"
                            >
                                Download Menu
                            </button>
                        </div>
                    </div>

                    {/* Creative Masonry Grid - Spans 7 columns */}
                    <div className="lg:col-span-7 relative h-[600px] hidden lg:block">
                        {/* Main Large Image - Croissants with Play Icon */}
                        <div className="absolute top-0 left-10 w-[60%] h-[85%] rounded-[2rem] overflow-hidden transform hover:scale-[1.02] transition-transform duration-700 z-10 shadow-2xl group cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=80"
                                alt="Fresh Croissants"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Creative Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative">
                                    {/* Pulsing rings */}
                                    <div className="absolute inset-0 w-20 h-20 bg-[#E07A5F]/30 rounded-full animate-ping"></div>
                                    <div className="absolute inset-0 w-20 h-20 bg-[#E07A5F]/20 rounded-full animate-pulse delay-100"></div>

                                    {/* Play button */}
                                    <div className="relative w-20 h-20 bg-[#F4F1DE]/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:bg-[#F4F1DE] border-4 border-[#E07A5F]/30">
                                        <Play className="w-9 h-9 text-[#E07A5F] fill-[#E07A5F] ml-1 transition-transform duration-300 group-hover:scale-110" />
                                    </div>

                                    {/* Decorative text */}
                                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="text-[#F4F1DE] text-sm font-bold tracking-wider uppercase bg-[#2C1810]/80 px-4 py-2 rounded-full backdrop-blur-sm">
                                            Watch Video
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Secondary Overlapping Image - Pastries Display with Play Icon */}
                        <div className="absolute bottom-0 right-0 w-[50%] h-[60%] rounded-[2rem] overflow-hidden transform hover:scale-[1.02] transition-transform duration-700 z-20 shadow-2xl border-8 border-[#2a1e19] group cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
                                alt="Artisan Pastries"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />

                            {/* Creative Play Button Overlay - Smaller */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative">
                                    {/* Pulsing rings */}
                                    <div className="absolute inset-0 w-16 h-16 bg-[#E07A5F]/30 rounded-full animate-ping"></div>

                                    {/* Play button */}
                                    <div className="relative w-16 h-16 bg-[#F4F1DE]/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:bg-[#F4F1DE] border-4 border-[#E07A5F]/30">
                                        <Play className="w-7 h-7 text-[#E07A5F] fill-[#E07A5F] ml-0.5 transition-transform duration-300 group-hover:scale-110" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Stats Card */}
                        <div className="absolute top-32 right-10 bg-[#F4F1DE] text-[#2C1810] p-6 rounded-3xl shadow-xl z-30 animate-float max-w-[180px]">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-[#F4F1DE] overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <p className="font-bold text-lg leading-tight">Trusted by 500+ Companies</p>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute bottom-10 left-0 w-24 h-24 bg-[#E07A5F] rounded-full blur-2xl opacity-40 animate-pulse"></div>
                    </div>

                    {/* Mobile Image (Simpler version for small screens) */}
                    <div className="lg:hidden mt-8 relative rounded-[2rem] overflow-hidden shadow-xl group cursor-pointer">
                        <img
                            src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=80"
                            alt="Fresh Croissants"
                            className="w-full h-64 object-cover"
                        />

                        {/* Mobile Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 w-16 h-16 bg-[#E07A5F]/30 rounded-full animate-ping"></div>
                                <div className="relative w-16 h-16 bg-[#F4F1DE]/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border-4 border-[#E07A5F]/30">
                                    <Play className="w-7 h-7 text-[#E07A5F] fill-[#E07A5F] ml-0.5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modals */}
            <CateringModal isOpen={isCateringModalOpen} onClose={() => setIsCateringModalOpen(false)} />
            <MenuDownloadModal isOpen={isMenuModalOpen} onClose={() => setIsMenuModalOpen(false)} />
        </section>
    );
};

export default CateringSection;
