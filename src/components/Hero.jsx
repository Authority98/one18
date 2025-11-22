import React, { useState } from 'react';
import { Star, Play, Users, ShoppingBag, MapPin, Award } from 'lucide-react';
import VideoModal from './VideoModal';
import SectionTag from './SectionTag';

const Hero = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <header id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-28 md:pb-24 bg-texture">
            {/* Decorative Blobs */}
            <div className="absolute top-20 left-[-100px] w-64 h-64 bg-[#F2CC8F] rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse pointer-events-none"></div>
            <div className="absolute top-40 right-[-100px] w-72 h-72 bg-[#E07A5F] rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse delay-1000 pointer-events-none"></div>

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-0 lg:gap-12 items-center relative z-10">
                <div className="text-center lg:text-left order-2 lg:order-1">
                    <SectionTag rotate="-rotate-2">
                        SINGAPORE'S FINEST • MUSLIM OWNED
                    </SectionTag>
                    <h1 className="text-4xl md:text-7xl lg:text-8xl leading-[0.9] mb-6 text-[#2C1810] font-abril">
                        Singapore's <br />
                        <span className="text-stroke">Finest Artisan Bakery</span>
                    </h1>
                    <div className="mb-10 relative">
                        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#E07A5F] to-transparent opacity-50 rounded-full"></div>
                        <div className="pl-6">
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 mb-4 text-sm font-medium tracking-widest text-[#E07A5F]">
                                <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#2C1810]"></span>
                                    HANDCRAFTED DAILY
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#2C1810]"></span>
                                    PREMIUM INGREDIENTS
                                </span>
                            </div>
                            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                                Where <span className="font-serif italic text-[#2C1810] font-medium">European mastery</span> meets <span className="font-serif italic text-[#2C1810] font-medium">Asian flavors</span>.
                                <br />
                                Every pastry is a work of art, baked fresh throughout the day using only the finest imported ingredients.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a href="#bestsellers" className="group relative px-8 py-4 bg-[#2C1810] text-[#F4F1DE] font-bold rounded-full overflow-hidden shadow-lg">
                            <span className="relative z-10 group-hover:text-[#2C1810] transition-colors duration-300">Explore Menu</span>
                            <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-[#E07A5F]"></div>
                        </a>
                        <a href="#locations" className="px-8 py-4 border-2 border-[#2C1810] text-[#2C1810] font-bold rounded-full hover:bg-[#2C1810] hover:text-[#F4F1DE] transition-all">
                            Find Us
                        </a>
                    </div>
                </div>

                {/* Hero Image Composition */}
                <div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center order-1 lg:order-2 mb-44 lg:mb-0">
                    {/* Rotating Text Ring */}
                    <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] border border-[#2C1810]/10 rounded-full flex items-center justify-center animate-spin-slow pointer-events-none">
                        <svg viewBox="0 0 100 100" width="100%" height="100%">
                            <defs>
                                <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                            </defs>
                            <text fontSize="10.5" fontWeight="bold" letterSpacing="2.2">
                                <textPath href="#circle" className="fill-[#2C1810] uppercase opacity-40">
                                    One18 Bakery • Fresh Daily • Premium Butter •
                                </textPath>
                            </text>
                        </svg>
                    </div>

                    {/* Main Hero Image */}
                    <div className="relative z-30 w-56 h-56 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden border-[10px] border-[#F4F1DE] shadow-2xl animate-float-slow bg-stone-300 flex items-center justify-center group cursor-pointer"
                        onClick={() => setIsVideoOpen(true)}>
                        <div className="w-full h-full overflow-hidden rounded-full">
                            <div className="w-full h-full transition-transform duration-700 group-hover:scale-110">
                                <img
                                    src="/hero-croissant-v2.png"
                                    alt="Supreme Circular Croissant"
                                    className="w-full h-full object-cover animate-ken-burns"
                                />
                            </div>
                        </div>

                        {/* Blurry Overlay with Play Button */}
                        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:backdrop-blur-md group-hover:bg-black/30">
                            <div className="relative">
                                {/* Pulsing Ring */}
                                <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/30 rounded-full animate-ping"></div>

                                {/* Play Button */}
                                <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                                    <Play className="w-8 h-8 lg:w-10 lg:h-10 text-[#E07A5F] fill-[#E07A5F] ml-1 transition-transform duration-300 group-hover:scale-110" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Statistics Grid */}
                    {/* Statistics - Floating Glass Pill */}
                    <div className="absolute -bottom-32 lg:-bottom-8 left-1/2 lg:left-auto lg:right-1/2 transform -translate-x-1/2 lg:translate-x-1/2 z-40 w-full max-w-[90%] lg:max-w-none">
                        <div className="bg-white/60 backdrop-blur-xl border border-white/80 p-4 rounded-2xl shadow-2xl grid grid-cols-2 lg:flex lg:flex-row justify-between lg:justify-center gap-4 lg:gap-12 animate-float">
                            <div className="flex flex-col items-center justify-center text-center group">
                                <div className="bg-[#E07A5F]/10 p-2 rounded-full mb-1 group-hover:scale-110 transition-transform">
                                    <Users size={18} className="text-[#E07A5F]" />
                                </div>
                                <p className="text-lg font-bold text-[#2C1810] leading-none">50K+</p>
                                <p className="text-[10px] uppercase tracking-wider text-gray-500 font-medium mt-1">Happy Customers</p>
                            </div>
                            <div className="w-px h-10 bg-[#2C1810]/10 self-center hidden lg:block"></div>
                            <div className="flex flex-col items-center justify-center text-center group">
                                <div className="bg-[#E07A5F]/10 p-2 rounded-full mb-1 group-hover:scale-110 transition-transform">
                                    <ShoppingBag size={18} className="text-[#E07A5F]" />
                                </div>
                                <p className="text-lg font-bold text-[#2C1810] leading-none">100+</p>
                                <p className="text-[10px] uppercase tracking-wider text-gray-500 font-medium mt-1">Daily Items</p>
                            </div>
                            <div className="w-px h-10 bg-[#2C1810]/10 self-center hidden lg:block"></div>
                            <div className="flex flex-col items-center justify-center text-center group">
                                <div className="bg-[#E07A5F]/10 p-2 rounded-full mb-1 group-hover:scale-110 transition-transform">
                                    <Star size={18} className="text-[#E07A5F]" fill="#E07A5F" />
                                </div>
                                <p className="text-lg font-bold text-[#2C1810] leading-none">4.9★</p>
                                <p className="text-[10px] uppercase tracking-wider text-gray-500 font-medium mt-1">Google Rating</p>
                            </div>
                            <div className="w-px h-10 bg-[#2C1810]/10 self-center hidden lg:block"></div>
                            <div className="flex flex-col items-center justify-center text-center group">
                                <div className="bg-[#E07A5F]/10 p-2 rounded-full mb-1 group-hover:scale-110 transition-transform">
                                    <MapPin size={18} className="text-[#E07A5F]" />
                                </div>
                                <p className="text-lg font-bold text-[#2C1810] leading-none">2</p>
                                <p className="text-[10px] uppercase tracking-wider text-gray-500 font-medium mt-1">Locations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
        </header>
    );
};

export default Hero;
