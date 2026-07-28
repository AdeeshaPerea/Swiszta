import React from 'react';
import { Building2, Hotel, Home, Briefcase, ChevronRight } from 'lucide-react';

export default function SolutionsPage({ onOpenQuote }) {
  const sectors = [
    {
      title: 'Luxury 5-Star Hotels & Resorts',
      icon: Hotel,
      desc: 'Flawless housekeeping, VIP concierge, and fine dining operations designed to exceed demanding guest expectations.',
      image: '/images/concierge_hero.jpg'
    },
    {
      title: 'Boutique Accommodations',
      icon: Building2,
      desc: 'Agile and scalable staffing models tailored for unique boutique properties needing high attention to detail.',
      image: '/images/housekeeping_hero.jpg'
    },
    {
      title: 'Serviced Apartments & Extended Stay',
      icon: Home,
      desc: 'Streamlined turnover cleaning, laundry rotation, and preventive maintenance for long-term residential guest suites.',
      image: '/images/laundry_hero.jpg'
    },
    {
      title: 'Commercial Hospitality Venues',
      icon: Briefcase,
      desc: 'Full-spectrum facilities management, event catering, and commercial cleaning for conventions and event centers.',
      image: '/images/catering_hero.jpg'
    }
  ];

  return (
    <div style={{ padding: '60px 0 80px', background: '#FAFAFA' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '2px', color: '#C8102E', textTransform: 'uppercase' }}>
            TAILORED INDUSTRY SOLUTIONS
          </span>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginTop: '10px', marginBottom: '20px' }}>
            Solutions for Every Hospitality Sector
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#4A5568', lineHeight: '1.7' }}>
            Whether managing a multi-tower 5-star hotel in Melbourne or an exclusive resort complex, SWISZTA delivers operational framework tailored to your business model.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div key={idx} style={{ background: '#FFFFFF', borderRadius: '16px', overflow: 'hidden', border: '1px solid #E5E9EC', boxShadow: '0 8px 24px rgba(0,0,0,0.05)' }}>
                <img src={sec.image} alt={sec.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                <div style={{ padding: '28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <Icon size={24} style={{ color: '#C8102E' }} />
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>{sec.title}</h3>
                  </div>
                  <p style={{ color: '#657380', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
                    {sec.desc}
                  </p>
                  <button className="btn btn-red" style={{ padding: '10px 18px', fontSize: '0.8rem' }} onClick={onOpenQuote}>
                    DISCUSS PROPERTY SOLUTION <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
