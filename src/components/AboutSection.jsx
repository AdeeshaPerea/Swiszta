import React from 'react';
import { ChevronRight, Play } from 'lucide-react';

export default function AboutSection({ onNavigate, onOpenVideo }) {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Text Content */}
          <div className="about-content">
            <span className="about-subtitle">ABOUT SWISZTA</span>
            <h2 className="about-heading">
              Your Trusted Partner in Hospitality Excellence
            </h2>
            <p className="about-text">
              With over 30 years of experience, SWISZTA delivers innovative hospitality services tailored to your unique needs. Our expert teams are committed to creating exceptional guest experiences every day.
            </p>
            <button className="btn btn-red" onClick={() => onNavigate('about')}>
              DISCOVER MORE <ChevronRight size={16} />
            </button>
          </div>

          {/* Right Video / Image Media Box */}
          <div className="about-media-box">
            <img 
              src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80" 
              alt="Housekeeper preparing luxury hotel room bed" 
              className="about-media-img"
            />
            <button 
              className="play-video-btn" 
              onClick={onOpenVideo} 
              aria-label="Play SWISZTA Video"
            >
              <Play size={28} style={{ marginLeft: '4px', fill: 'currentColor' }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
