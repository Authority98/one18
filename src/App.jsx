import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import BestsellersSection from './components/BestsellersSection';
import CateringSection from './components/CateringSection';
import QualitySection from './components/QualitySection';
import LocationsSection from './components/LocationsSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

const App = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);

    // Handle scroll effects
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
                setShowBackToTop(true);
            } else {
                setIsScrolled(false);
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Toggle mobile menu body scroll lock
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <div className="font-dm-sans text-brand-dark bg-brand-cream min-h-screen overflow-x-hidden md:overflow-x-visible">
            <Navigation isScrolled={isScrolled} onMobileMenuToggle={toggleMobileMenu} />
            <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
            <Hero />
            <BestsellersSection />
            <CateringSection />
            <QualitySection />
            <LocationsSection />
            <TestimonialsSection />
            <CTASection />
            <Footer />
            <BackToTop show={showBackToTop} onClick={scrollToTop} />
        </div>
    );
};

export default App;
