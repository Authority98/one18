import React, { useState, useEffect } from 'react';
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
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
            onClick={onClose}
        >
            <div
                className="bg-gradient-to-br from-brand-dark to-black rounded-[2rem] max-w-2xl w-full max-h-[90vh] overflow-y-auto hide-scrollbar shadow-2xl transform animate-scaleIn"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="sticky top-0 z-50 bg-gradient-to-br from-brand-dark to-black text-brand-cream p-8 rounded-t-[2rem] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 rounded-full blur-3xl"></div>
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors z-20"
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <h2 className="text-4xl font-abril mb-2 relative z-10">Request a Catering Quote</h2>
                    <p className="text-brand-cream/80 relative z-10">Let us make your event unforgettable</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-8 space-y-6 rounded-b-[2rem] bg-brand-cream">
                    {isSubmitted ? (
                        <div className="text-center py-12">
                            <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                                <Send className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-3xl font-abril text-brand-dark mb-3">Request Sent!</h3>
                            <p className="text-brand-dark/70">We'll get back to you within 24 hours.</p>
                        </div>
                    ) : (
                        <>
                            {/* Name */}
                            <div>
                                <label className="flex items-center gap-2 text-brand-dark font-bold mb-2">
                                    <User className="w-4 h-4 text-brand-accent" />
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border-2 border-brand-dark/10 focus:border-brand-accent outline-none transition-colors bg-white text-gray-900"
                                    placeholder="John Doe"
                                />
                            </div>

                            {/* Email & Phone */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="flex items-center gap-2 text-brand-dark font-bold mb-2">
                                        <Mail className="w-4 h-4 text-brand-accent" />
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border-2 border-brand-dark/10 focus:border-brand-accent outline-none transition-colors bg-white text-gray-900"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="flex items-center gap-2 text-brand-dark font-bold mb-2">
                                        <Phone className="w-4 h-4 text-brand-accent" />
                                        Phone *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border-2 border-brand-dark/10 focus:border-brand-accent outline-none transition-colors bg-white text-gray-900"
                                        placeholder="+65 1234 5678"
                                    />
                                </div>
                            </div>

                            {/* Event Date & Guest Count */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="flex items-center gap-2 text-brand-dark font-bold mb-2">
                                        <Calendar className="w-4 h-4 text-brand-accent" />
                                        Event Date *
                                    </label>
                                    <input
                                        type="date"
                                        name="eventDate"
                                        value={formData.eventDate}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border-2 border-brand-dark/10 focus:border-brand-accent outline-none transition-colors bg-white text-gray-900"
                                    />
                                </div>
                                <div>
                                    <label className="flex items-center gap-2 text-brand-dark font-bold mb-2">
                                        <Users className="w-4 h-4 text-brand-accent" />
                                        Guest Count *
                                    </label>
                                    <input
                                        type="number"
                                        name="guestCount"
                                        value={formData.guestCount}
                                        onChange={handleChange}
                                        required
                                        min="1"
                                        className="w-full px-4 py-3 rounded-xl border-2 border-brand-dark/10 focus:border-brand-accent outline-none transition-colors bg-white text-gray-900"
                                        placeholder="50"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="flex items-center gap-2 text-brand-dark font-bold mb-2">
                                    <MessageSquare className="w-4 h-4 text-brand-accent" />
                                    Additional Details
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-brand-dark/10 focus:border-brand-accent outline-none transition-colors resize-none bg-white text-gray-900"
                                    placeholder="Tell us about your event, dietary requirements, preferences..."
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-brand-accent text-white py-4 rounded-full font-bold text-lg hover:bg-brand-dark transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
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
