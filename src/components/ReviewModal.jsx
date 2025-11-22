import React, { useState } from 'react';
import { X, Star, Send, User, MessageSquare } from 'lucide-react';

const ReviewModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        rating: 0,
        review: ''
    });
    const [hoveredRating, setHoveredRating] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.rating === 0) {
            alert('Please select a rating');
            return;
        }
        // Simulate form submission
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            onClose();
            setFormData({ name: '', rating: 0, review: '' });
        }, 2000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
            <div className="bg-[#F4F1DE] rounded-[2rem] max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl transform animate-scaleIn">
                {/* Header */}
                <div className="sticky top-0 bg-gradient-to-br from-[#E07A5F] to-[#2C1810] text-white p-8 rounded-t-[2rem] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors z-10"
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4">
                            <Star className="w-8 h-8 text-white fill-white" />
                        </div>
                        <h2 className="text-4xl font-abril mb-2">Leave a Review</h2>
                        <p className="text-white/80">Share your experience with us</p>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    {isSubmitted ? (
                        <div className="text-center py-12">
                            <div className="w-20 h-20 bg-[#E07A5F] rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                                <Star className="w-10 h-10 text-white fill-white" />
                            </div>
                            <h3 className="text-3xl font-abril text-[#2C1810] mb-3">Thank You!</h3>
                            <p className="text-[#2C1810]/70">Your review means the world to us.</p>
                        </div>
                    ) : (
                        <>
                            {/* Name */}
                            <div>
                                <label className="flex items-center gap-2 text-[#2C1810] font-bold mb-2">
                                    <User className="w-4 h-4 text-[#E07A5F]" />
                                    Your Name *
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

                            {/* Star Rating */}
                            <div>
                                <label className="text-[#2C1810] font-bold mb-3 block">
                                    Rate Your Experience *
                                </label>
                                <div className="flex gap-2 justify-center py-4">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, rating: star })}
                                            onMouseEnter={() => setHoveredRating(star)}
                                            onMouseLeave={() => setHoveredRating(0)}
                                            className="transform hover:scale-110 transition-transform"
                                        >
                                            <Star
                                                className={`w-12 h-12 transition-colors ${star <= (hoveredRating || formData.rating)
                                                        ? 'text-[#E07A5F] fill-[#E07A5F]'
                                                        : 'text-[#2C1810]/20'
                                                    }`}
                                            />
                                        </button>
                                    ))}
                                </div>
                                {formData.rating > 0 && (
                                    <p className="text-center text-[#2C1810]/70 text-sm mt-2">
                                        {formData.rating === 5 && "🎉 Outstanding!"}
                                        {formData.rating === 4 && "😊 Great!"}
                                        {formData.rating === 3 && "👍 Good!"}
                                        {formData.rating === 2 && "😐 Could be better"}
                                        {formData.rating === 1 && "😞 We'll do better"}
                                    </p>
                                )}
                            </div>

                            {/* Review Text */}
                            <div>
                                <label className="flex items-center gap-2 text-[#2C1810] font-bold mb-2">
                                    <MessageSquare className="w-4 h-4 text-[#E07A5F]" />
                                    Your Review *
                                </label>
                                <textarea
                                    name="review"
                                    value={formData.review}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-[#2C1810]/10 focus:border-[#E07A5F] outline-none transition-colors resize-none bg-white"
                                    placeholder="Tell us about your experience at One18..."
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#E07A5F] text-white py-4 rounded-full font-bold text-lg hover:bg-[#2C1810] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                Submit Review
                            </button>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ReviewModal;
