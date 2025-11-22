import React, { useState } from 'react';
import { X, Send, Calendar, Users, Mail, User, Phone, MessageSquare } from 'lucide-react';

const CateringModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        guestCount: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            onClose();
            setFormData({ name: '', email: '', phone: '', eventDate: '', guestCount: '', message: '' });
        }, 2000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
            <div className="bg-[#F4F1DE] rounded-[2rem] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform animate-scaleIn">
                {/* Header */}
                <div className="sticky top-0 bg-gradient-to-br from-[#2C1810] to-[#1a1410] text-[#F4F1DE] p-8 rounded-t-[2rem] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#E07A5F]/20 rounded-full blur-3xl"></div>
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors z-10"
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <h2 className="text-4xl font-abril mb-2 relative z-10">Request a Catering Quote</h2>
                    <p className="text-[#F4F1DE]/80 relative z-10">Let us make your event unforgettable</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    {isSubmitted ? (
                        <div className="text-center py-12">
                            <div className="w-20 h-20 bg-[#E07A5F] rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                                <Send className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-3xl font-abril text-[#2C1810] mb-3">Request Sent!</h3>
                            <p className="text-[#2C1810]/70">We'll get back to you within 24 hours.</p>
                        </div>
                    ) : (
                        <>
                            {/* Name */}
                            <div>
                                <label className="flex items-center gap-2 text-[#2C1810] font-bold mb-2">
                                    <User className="w-4 h-4 text-[#E07A5F]" />
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border-2 border-[#2C1810]/10 focus:border-[#E07A5F] outline-none transition-colors bg-white"
                                    placeholder="John Doe"
                                />
                            </div>

                            {/* Email & Phone */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="flex items-center gap-2 text-[#2C1810] font-bold mb-2">
                                        <Mail className="w-4 h-4 text-[#E07A5F]" />
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border-2 border-[#2C1810]/10 focus:border-[#E07A5F] outline-none transition-colors bg-white"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="flex items-center gap-2 text-[#2C1810] font-bold mb-2">
                                        <Phone className="w-4 h-4 text-[#E07A5F]" />
                                        Phone *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border-2 border-[#2C1810]/10 focus:border-[#E07A5F] outline-none transition-colors bg-white"
                                        placeholder="+65 1234 5678"
                                    />
                                </div>
                            </div>

                            {/* Event Date & Guest Count */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="flex items-center gap-2 text-[#2C1810] font-bold mb-2">
                                        <Calendar className="w-4 h-4 text-[#E07A5F]" />
                                        Event Date *
                                    </label>
                                    <input
                                        type="date"
                                        name="eventDate"
                                        value={formData.eventDate}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border-2 border-[#2C1810]/10 focus:border-[#E07A5F] outline-none transition-colors bg-white"
                                    />
                                </div>
                                <div>
                                    <label className="flex items-center gap-2 text-[#2C1810] font-bold mb-2">
                                        <Users className="w-4 h-4 text-[#E07A5F]" />
                                        Guest Count *
                                    </label>
                                    <input
                                        type="number"
                                        name="guestCount"
                                        value={formData.guestCount}
                                        onChange={handleChange}
                                        required
                                        min="1"
                                        className="w-full px-4 py-3 rounded-xl border-2 border-[#2C1810]/10 focus:border-[#E07A5F] outline-none transition-colors bg-white"
                                        placeholder="50"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="flex items-center gap-2 text-[#2C1810] font-bold mb-2">
                                    <MessageSquare className="w-4 h-4 text-[#E07A5F]" />
                                    Additional Details
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-[#2C1810]/10 focus:border-[#E07A5F] outline-none transition-colors resize-none bg-white"
                                    placeholder="Tell us about your event, dietary requirements, preferences..."
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#E07A5F] text-white py-4 rounded-full font-bold text-lg hover:bg-[#2C1810] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                Send Request
                            </button>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
};

export default CateringModal;
