import React from 'react';
import { Calendar, ChevronRight, ArrowUpRight } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: 'SWISZTA Hospitality Training Academy Expands National Footprint',
    category: 'COMPANY NEWS',
    date: 'July 24, 2026',
    image: '/images/news/academy.png',
    summary: 'Our state-of-the-art training program introduces advanced 5-star turndown certification and WHS compliance modules for room attendants.'
  },
  {
    id: 2,
    title: 'Showcasing Next-Gen Facility Operations at the National Hotel Expo',
    category: 'INDUSTRY EVENT',
    date: 'June 18, 2026',
    image: '/images/news/expo.png',
    summary: 'Executive leadership highlighted integrated service technology, RFID linen tracking, and smart maintenance management for hotel groups.'
  },
  {
    id: 3,
    title: 'Accelerating Sustainability: Zero-Emission Logistics & Eco-Wash Initiative',
    category: 'SUSTAINABILITY',
    date: 'May 12, 2026',
    image: '/images/news/ev.png',
    summary: 'SWISZTA rolls out electric delivery fleets and bio-degradable chemical solutions to reduce property carbon footprints nationwide.'
  }
];

export default function LatestNewsSection({ onNavigate }) {
  return (
    <section 
      style={{ 
        position: 'relative',
        padding: '72px 0', 
        borderTop: '2px solid rgba(255, 42, 75, 0.4)',
        backgroundImage: `linear-gradient(180deg, rgba(10, 14, 23, 0.88) 0%, rgba(10, 14, 23, 0.94) 100%), url('/images/concierge_hero.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#FFFFFF',
        overflow: 'hidden'
      }}
    >
      {/* Subtle Glow Accents */}
      <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '320px', height: '320px', background: 'radial-gradient(circle, rgba(200, 16, 46, 0.2) 0%, rgba(10,14,23,0) 70%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '44px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 900, letterSpacing: '1.5px', color: '#FF2A4B', textTransform: 'uppercase', marginBottom: '6px' }}>
              <span style={{ width: '6px', height: '6px', backgroundColor: '#FF2A4B', transform: 'rotate(45deg)', display: 'inline-block' }}></span>
              NEWS &amp; HOSPITALITY INSIGHTS
            </div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.5px', margin: 0 }}>
              Latest Updates &amp; Industry Innovations.
            </h2>
          </div>

          <button
            onClick={() => onNavigate('whatsnew')}
            className="btn btn-red"
            style={{ padding: '12px 24px', fontSize: '0.84rem', fontWeight: 800, boxShadow: '0 4px 14px rgba(200, 16, 46, 0.4)' }}
          >
            VIEW ALL NEWS &amp; INSIGHTS <ChevronRight size={16} />
          </button>
        </div>

        {/* News Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {newsArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => onNavigate('whatsnew')}
              style={{
                backgroundColor: 'rgba(22, 31, 48, 0.88)',
                backdropFilter: 'blur(12px)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                overflow: 'hidden',
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = '#FF2A4B';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(200, 16, 46, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.4)';
              }}
            >
              {/* Image Banner */}
              <div style={{ position: 'relative', height: '210px', overflow: 'hidden' }}>
                <img 
                  src={article.image} 
                  alt={article.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { e.target.src = '/images/contact_hero.png'; }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(22, 31, 48, 0.9) 0%, rgba(22, 31, 48, 0.1) 60%)'
                }} />
                
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  backgroundColor: '#C8102E',
                  color: '#FFFFFF',
                  fontSize: '0.64rem',
                  fontWeight: 900,
                  padding: '4px 12px',
                  borderRadius: '10px',
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.4)'
                }}>
                  {article.category}
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.76rem', color: '#94A3B8', marginBottom: '8px', fontWeight: 600 }}>
                  <Calendar size={13} style={{ color: '#FF2A4B' }} />
                  <span>{article.date}</span>
                </div>

                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.35, marginBottom: '10px' }}>
                  {article.title}
                </h3>

                <p style={{ fontSize: '0.82rem', color: '#CBD5E0', lineHeight: 1.45, margin: 0, flex: 1, marginBottom: '18px', fontWeight: 500 }}>
                  {article.summary}
                </p>

                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem', fontWeight: 800, color: '#FF2A4B', textTransform: 'uppercase' }}>
                  Read Article <ArrowUpRight size={14} />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
