import React, { useState } from 'react';
import { Star, Play } from 'lucide-react';
import VideoModal from './VideoModal';
import SectionTag from './SectionTag';

const Hero = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <header id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 bg-texture">
            {/* Decorative Blobs */}
            <div className="absolute top-20 left-[-100px] w-64 h-64 bg-[#F2CC8F] rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse pointer-events-none"></div>
            <div className="absolute top-40 right-[-100px] w-72 h-72 bg-[#E07A5F] rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse delay-1000 pointer-events-none"></div>

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="text-center lg:text-left order-2 lg:order-1">
                    <SectionTag rotate="-rotate-2">
                        SINGAPORE'S FINEST • MUSLIM OWNED
                    </SectionTag>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-6 text-[#2C1810] font-abril">
                        Singapore's <br />
                        <span className="text-stroke">Finest Artisan Bakery</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-md mx-auto lg:mx-0 font-light leading-relaxed">
                        Discover our world-famous <span className="font-bold text-[#E07A5F] relative inline-block">
                            Supreme Circular Croissants
                            <svg className="absolute w-full h-2 bottom-0 left-0 text-[#E07A5F]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
                        </span> — from luxury in the oven to perfection on your plate. Handcrafted with premium French butter and filled with extraordinary flavors.
                    </p>
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
                <div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center order-1 lg:order-2">
                    {/* Rotating Text Ring */}
                    <div className="absolute w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] border border-[#2C1810]/10 rounded-full flex items-center justify-center animate-spin-slow pointer-events-none">
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
                    <div className="relative z-30 w-64 h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden border-[10px] border-[#F4F1DE] shadow-2xl animate-float-slow bg-stone-300 flex items-center justify-center group cursor-pointer"
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
                                <div className="absolute inset-0 w-20 h-20 lg:w-24 lg:h-24 bg-white/30 rounded-full animate-ping"></div>

                                {/* Play Button */}
                                <div className="relative w-20 h-20 lg:w-24 lg:h-24 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                                    <Play className="w-8 h-8 lg:w-10 lg:h-10 text-[#E07A5F] fill-[#E07A5F] ml-1 transition-transform duration-300 group-hover:scale-110" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Review Card */}
                    <div className="absolute bottom-10 left-0 lg:left-10 bg-white p-5 rounded-2xl shadow-xl transform -rotate-3 animate-float-delay z-30 max-w-[200px]">
                        <div className="flex items-center gap-1 text-amber-500 mb-2">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                        </div>
                        <p className="text-sm font-bold text-[#2C1810] leading-tight">"The Pistachio Supreme is gorgeous!"</p>
                        <p className="text-xs text-gray-500 mt-2 font-medium">— Eatbook.sg</p>
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
        </header>
    );
};

export default Hero;
