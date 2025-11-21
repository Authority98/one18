import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#2C1810] text-[#F4F1DE] pt-24 pb-12 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-5 select-none">
                <h1 className="text-[22vw] font-bold leading-none text-center translate-y-[20%]">ONE18</h1>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    <div className="max-w-sm">
                        <h2 className="text-4xl font-bold mb-4 font-abril">Let's get baked.</h2>
                        <p className="opacity-70 text-lg leading-relaxed">Your friendly Muslim-owned neighbourhood bakery serving artisanal French pastries with a local twist.</p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="uppercase tracking-widest font-bold text-sm opacity-50">Connect</h4>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/one18bakery/" target="_blank" rel="noreferrer" className="w-12 h-12 border border-[#F4F1DE]/30 rounded-full flex items-center justify-center hover:bg-[#E07A5F] hover:border-[#E07A5F] transition-all hover:scale-110">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-12 h-12 border border-[#F4F1DE]/30 rounded-full flex items-center justify-center hover:bg-[#E07A5F] hover:border-[#E07A5F] transition-all hover:scale-110">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="mailto:one18bakery@foodline.sg" className="w-12 h-12 border border-[#F4F1DE]/30 rounded-full flex items-center justify-center hover:bg-[#E07A5F] hover:border-[#E07A5F] transition-all hover:scale-110">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-24 pt-8 border-t border-[#F4F1DE]/10 flex flex-col md:flex-row justify-between items-center text-sm opacity-50">
                    <p>&copy; 2025 One18 Bakery. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
