import React from 'react';
import { Quote, Star } from 'lucide-react';

export default function TestimonialQuote() {
  return (
    <section 
      style={{ 
        position: 'relative',
        backgroundColor: '#0A0E17',
        color: '#FFFFFF',
        padding: '56px 0',
        backgroundImage: `linear-gradient(180deg, rgba(10, 14, 23, 0.93) 0%, rgba(10, 14, 23, 0.96) 100%), url('/images/contact_hero.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden'
      }}
    >
      {/* Ambient Red Glow Backdrop */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '500px', height: '300px', background: 'radial-gradient(circle, rgba(200, 16, 46, 0.22) 0%, rgba(10,14,23,0) 70%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '920px' }}>
        <div style={{
          backgroundColor: 'rgba(22, 31, 48, 0.82)',
          backdropFilter: 'blur(14px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '20px',
          padding: '36px 40px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          gap: '28px'
        }}>
          {/* Quote Icon Badge */}
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 42, 75, 0.15)',
            border: '1px solid rgba(255, 42, 75, 0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FF2A4B',
            flexShrink: 0
          }}>
            <Quote size={30} style={{ transform: 'scaleX(-1)' }} />
          </div>

          {/* Quote Content */}
          <div style={{ flex: 1 }}>
            {/* 5 Gold Stars Rating */}
            <div style={{ display: 'flex', gap: '4px', color: '#FFB800', marginBottom: '10px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#FFB800" stroke="none" />
              ))}
            </div>

            <p style={{
              fontSize: '1.22rem',
              fontWeight: 600,
              color: '#FFFFFF',
              fontStyle: 'italic',
              lineHeight: 1.55,
              margin: '0 0 10px 0',
              textShadow: '0 2px 8px rgba(0,0,0,0.5)'
            }}>
              "SWISZTA consistently delivers exceptional service with attention to detail and professionalism."
            </p>

            <div style={{
              fontSize: '0.88rem',
              fontWeight: 800,
              color: '#FF2A4B',
              letterSpacing: '0.5px'
            }}>
              — General Manager, Novotel Melbourne
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
