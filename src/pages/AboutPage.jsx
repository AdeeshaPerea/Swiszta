import React, { useState } from 'react';
import { Users, ShieldCheck, Handshake, Target, Globe, Building2, ChevronRight, Play, Quote } from 'lucide-react';

export default function AboutPage({ onOpenQuote, onOpenVideo }) {
  return (
    <div className="about-page-root">
      {/* 1. Hero Section for About Us */}
      <section 
        className="hero-section" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80')`,
          minHeight: '520px',
          padding: '60px 0 120px'
        }}
      >
        <div className="hero-overlay" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.75) 45%, rgba(255,255,255,0.2) 100%)' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="hero-content-wrapper" style={{ maxWidth: '600px' }}>
            <div 
              style={{
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.08)'
              }}
            >
              <div className="hero-badge-line" style={{ color: '#C8102E' }}>
                ABOUT SWISZTA
              </div>

              <h1 className="hero-title" style={{ color: '#1E252B', fontSize: '3rem' }}>
                Redefining Hospitality <br />
                <span style={{ color: '#C8102E' }}>Through Excellence.</span>
              </h1>

              {/* Decorative Red Grid Marker */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', margin: '14px 0 18px' }}>
                <div style={{ width: '6px', height: '6px', background: '#C8102E', transform: 'rotate(45deg)' }}></div>
                <div style={{ width: '8px', height: '8px', background: '#C8102E', transform: 'rotate(45deg)' }}></div>
                <div style={{ width: '6px', height: '6px', background: '#C8102E', transform: 'rotate(45deg)' }}></div>
              </div>

              <p className="hero-desc" style={{ color: '#4A5568', fontSize: '0.96rem', lineHeight: '1.6', marginBottom: '28px' }}>
                With over 30 years of experience, SWISZTA is a trusted partner to hotels, resorts and hospitality venues around the world. We deliver integrated solutions that elevate guest satisfaction, enhance operational performance and protect your brand.
              </p>

              <div className="hero-actions">
                <button className="btn btn-red" onClick={onOpenQuote}>
                  OUR STORY <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Floating 4 Pillars Row */}
      <div className="container" style={{ position: 'relative', zIndex: 30, marginTop: '-60px', marginBottom: '70px' }}>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            background: '#FFFFFF',
            borderRadius: '16px',
            boxShadow: '0 12px 36px rgba(0, 0, 0, 0.08)',
            border: '1px solid #E5E9EC',
            overflow: 'hidden'
          }}
        >
          {[
            {
              title: 'OUR PEOPLE',
              desc: 'Trained, empowered and committed professionals delivering every day.',
              icon: Users
            },
            {
              title: 'OUR QUALITY',
              desc: 'International standards, rigorous processes and a passion for perfection.',
              icon: ShieldCheck
            },
            {
              title: 'OUR PARTNERSHIPS',
              desc: 'Long-term relationships built on trust, transparency and shared success.',
              icon: Handshake
            },
            {
              title: 'OUR PURPOSE',
              desc: 'To create exceptional guest experiences and lasting value for our clients.',
              icon: Target
            }
          ].map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div 
                key={idx}
                style={{
                  padding: '28px 20px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px',
                  borderRight: idx === 3 ? 'none' : '1px solid #E5E9EC'
                }}
              >
                <div 
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    background: 'rgba(200, 16, 46, 0.06)',
                    color: '#C8102E',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center'
                  }}
                >
                  <IconComponent size={26} />
                </div>
                <h3 style={{ fontSize: '0.92rem', fontWeight: 800, letterSpacing: '0.5px', color: '#1E252B', marginTop: '4px' }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '0.78rem', color: '#657380', lineHeight: '1.45', maxWidth: '220px' }}>
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Middle Section - WHO WE ARE */}
      <section style={{ padding: '20px 0 80px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '48px', alignItems: 'center' }}>
            {/* Left Media Box - Resort Pool Deck Sunset */}
            <div className="about-media-box" style={{ height: '380px', borderRadius: '12px' }}>
              <img 
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80" 
                alt="Luxury resort pool deck at sunset overlooking city skyline" 
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

            {/* Right Text & 3 Metrics */}
            <div>
              <span className="about-subtitle">WHO WE ARE</span>
              <h2 className="about-heading" style={{ fontSize: '2.4rem' }}>
                A Global Hospitality Partner <br />
                <span style={{ color: '#718096', fontWeight: 600 }}>You Can</span> Rely On
              </h2>
              <p className="about-text" style={{ fontSize: '0.92rem', marginBottom: '28px' }}>
                SWISZTA provides a full suite of hospitality support services designed to meet the unique needs of hotels and accommodation providers. From back-of-house to guest-facing services, we ensure every detail contributes to a seamless guest experience.
              </p>

              {/* 3 Metrics Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.1fr', gap: '12px' }}>
                <div style={{ background: '#FFFFFF', border: '1px solid #E5E9EC', borderRadius: '8px', padding: '16px 14px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ color: '#C8102E' }}>
                    <Globe size={28} />
                  </div>
                  <div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#C8102E', lineHeight: 1 }}>12+</div>
                    <div style={{ fontSize: '0.72rem', color: '#718096', fontWeight: 600, marginTop: '3px' }}>Countries Served</div>
                  </div>
                </div>

                <div style={{ background: '#FFFFFF', border: '1px solid #E5E9EC', borderRadius: '8px', padding: '16px 14px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ color: '#C8102E' }}>
                    <Building2 size={28} />
                  </div>
                  <div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#C8102E', lineHeight: 1 }}>150+</div>
                    <div style={{ fontSize: '0.72rem', color: '#718096', fontWeight: 600, marginTop: '3px' }}>Hotel Sites</div>
                  </div>
                </div>

                <div style={{ background: '#FFFFFF', border: '1px solid #E5E9EC', borderRadius: '8px', padding: '16px 14px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ color: '#C8102E' }}>
                    <Users size={28} />
                  </div>
                  <div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#C8102E', lineHeight: 1 }}>2,000+</div>
                    <div style={{ fontSize: '0.72rem', color: '#718096', fontWeight: 600, marginTop: '3px' }}>Dedicated Professionals</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Chairman Quote Section */}
      <section style={{ background: '#F8F9FA', borderTop: '1px solid #E5E9EC', padding: '40px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px', maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1, minWidth: '300px' }}>
              <div style={{ fontSize: '3rem', color: '#C8102E', fontFamily: 'serif', lineHeight: 1, flexShrink: 0 }}>
                “
              </div>
              <p style={{ fontSize: '1.05rem', fontWeight: 500, color: '#2D3748', lineHeight: '1.5', fontStyle: 'italic' }}>
                At SWISZTA, we don't just deliver services – we create environments where guests feel valued, and our clients achieve success.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', borderLeft: '1px solid #E2E8F0', paddingLeft: '24px' }}>
              {/* Cursive Signature Graphic */}
              <div style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '1.8rem', fontWeight: 700, color: '#2D3748', letterSpacing: '-1px' }}>
                Danny
              </div>
              <div>
                <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#1E252B' }}>Danny Fernandes</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#C8102E' }}>Chairman</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
