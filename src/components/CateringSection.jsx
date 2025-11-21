import React from 'react';
import { Calendar, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const CateringSection = () => {
    const stats = [
        { number: "200+", label: "Events Catered", icon: Calendar },
        { number: "1k+", label: "Happy Clients", icon: Users },
        { number: "50+", label: "Menu Items", icon: TrendingUp },
        { number: "100%", label: "Satisfaction", icon: CheckCircle }
    ];

    return (
        <section className="py-32 bg-[#2C1810] text-[#F4F1DE] relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>

            {/* Decorative Circles */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#E07A5F] rounded-full mix-blend-overlay filter blur-[100px] opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#F4F1DE] rounded-full mix-blend-overlay filter blur-[80px] opacity-10"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Content Side */}
                    <div className="relative">
                        <div className="absolute -top-10 -left-10 w-20 h-20 border-t-4 border-l-4 border-[#E07A5F]/30 rounded-tl-3xl"></div>

                        <span className="font-dancing text-4xl md:text-5xl text-[#E07A5F] block mb-4">Elevate Your Events</span>
                        <h2 className="text-6xl md:text-7xl font-abril leading-tight mb-8">
                            Corporate & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4F1DE] to-[#E07A5F]">Event Catering</span>
                        </h2>
                        <p className="text-xl text-[#F4F1DE]/70 mb-10 leading-relaxed max-w-lg">
                            From intimate gatherings to grand corporate functions, we bring the art of French pastry to your table. Impress your guests with our signature croissants and artisanal bakes.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <a href="https://one18bakerynorthbridge.oddle.me/en_SG" target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-3 bg-[#E07A5F] text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white hover:text-[#2C1810] transition-all shadow-lg hover:shadow-[#E07A5F]/50">
                                Request Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <button className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full text-lg font-bold border border-[#F4F1DE]/30 hover:bg-[#F4F1DE]/10 transition-all">
                                Download Menu
                            </button>
                        </div>
                    </div>

                    {/* Visual Side */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-6 mt-12">
                                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group">
                                    <div className="w-14 h-14 bg-[#E07A5F] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                                        <Calendar className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-4xl font-bold font-abril mb-1">{stats[0].number}</h3>
                                    <p className="text-[#F4F1DE]/60 text-sm uppercase tracking-wider">{stats[0].label}</p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group">
                                    <div className="w-14 h-14 bg-[#2C1810] border border-[#E07A5F] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                                        <Users className="w-7 h-7 text-[#E07A5F]" />
                                    </div>
                                    <h3 className="text-4xl font-bold font-abril mb-1">{stats[1].number}</h3>
                                    <p className="text-[#F4F1DE]/60 text-sm uppercase tracking-wider">{stats[1].label}</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group">
                                    <div className="w-14 h-14 bg-[#F4F1DE] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                                        <TrendingUp className="w-7 h-7 text-[#2C1810]" />
                                    </div>
                                    <h3 className="text-4xl font-bold font-abril mb-1 text-[#E07A5F]">{stats[2].number}</h3>
                                    <p className="text-[#F4F1DE]/60 text-sm uppercase tracking-wider">{stats[2].label}</p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group">
                                    <div className="w-14 h-14 bg-[#E07A5F]/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                                        <CheckCircle className="w-7 h-7 text-[#E07A5F]" />
                                    </div>
                                    <h3 className="text-4xl font-bold font-abril mb-1">{stats[3].number}</h3>
                                    <p className="text-[#F4F1DE]/60 text-sm uppercase tracking-wider">{stats[3].label}</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-56 md:h-56 bg-white rounded-full p-2 shadow-2xl animate-spin-slow hidden lg:block">
                            <div className="w-full h-full rounded-full border-2 border-dashed border-[#2C1810] flex items-center justify-center bg-[#F4F1DE]">
                                <div className="text-center">
                                    <span className="block text-3xl font-abril text-[#2C1810]">100%</span>
                                    <span className="text-xs font-bold uppercase tracking-widest text-[#E07A5F]">Halal Certified</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CateringSection;
