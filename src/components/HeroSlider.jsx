import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    badge: 'CARE. COMFORT. EXCELLENCE.',
    titleFirst: 'Elevating Hospitality ',
    titleHighlight: 'Every Day.',
    desc: 'SWISZTA delivers integrated hospitality solutions that enhance guest satisfaction and operational excellence across hotels and premium properties.',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80',
    primaryAction: 'OUR SERVICES',
    secondaryAction: 'ABOUT US'
  },
  {
    id: 2,
    badge: 'PREMIUM QUALITY & RELIABILITY',
    titleFirst: 'World-Class ',
    titleHighlight: 'Hotel Support.',
    desc: 'Over 30 years of specialized expertise in luxury housekeeping, catering, facilities maintenance, and concierge management across 150+ top properties.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80',
    primaryAction: 'OUR CLIENTS',
    secondaryAction: 'GET A QUOTE'
  },
  {
    id: 3,
    badge: 'TAILORED OPERATIONAL SOLUTIONS',
    titleFirst: 'Seamless Guest ',
    titleHighlight: 'Experiences.',
    desc: 'Empowering 5-star hotel brands with rigorously trained hospitality professionals, sustainable practices, and strict quality control standards.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920&q=80',
    primaryAction: 'EXPLORE SOLUTIONS',
    secondaryAction: 'CONTACT US'
  }
];

export default function HeroSlider({ onNavigate, onOpenQuote }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentIndex];

  const handlePrimary = () => {
    if (currentIndex === 0) onNavigate('services');
    else if (currentIndex === 1) onNavigate('clients');
    else onNavigate('solutions');
  };

  const handleSecondary = () => {
    if (currentIndex === 1) onOpenQuote();
    else onNavigate('about');
  };

  return (
    <section className="hero-section" style={{ backgroundImage: `url(${slide.image})` }}>
      <div className="hero-overlay"></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-content-wrapper">
          <div className="hero-card-glass">
            <div className="hero-badge-line">
              {slide.badge}
            </div>

            <h1 className="hero-title">
              {slide.titleFirst}
              <span>{slide.titleHighlight}</span>
            </h1>

            <p className="hero-desc">
              {slide.desc}
            </p>

            <div className="hero-actions">
              <button className="btn btn-red" onClick={handlePrimary}>
                {slide.primaryAction} <ChevronRight size={16} />
              </button>
              <button className="btn btn-outline-white" onClick={handleSecondary}>
                {slide.secondaryAction} <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button className="hero-nav-btn prev" onClick={prevSlide} aria-label="Previous slide">
        <ChevronLeft size={24} />
      </button>
      <button className="hero-nav-btn next" onClick={nextSlide} aria-label="Next slide">
        <ChevronRight size={24} />
      </button>

      {/* Pagination Dots */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
