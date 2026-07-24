import React from 'react';
import { Award, Users, ShieldCheck, HeartHandshake, ChevronRight } from 'lucide-react';

export default function AboutPage({ onOpenQuote }) {
  return (
    <div style={{ padding: '60px 0 80px', background: '#FAFAFA' }}>
      <div className="container">
        {/* Banner */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '2px', color: '#C8102E', textTransform: 'uppercase' }}>
            ABOUT SWISZTA
          </span>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginTop: '10px', marginBottom: '20px' }}>
            Setting the Benchmark for Hospitality Operations
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#4A5568', lineHeight: '1.7' }}>
            For over three decades, SWISZTA has been Australia's trusted partner for integrated hotel services, managing operations for world-class hotel groups, boutique accommodations, and luxury resorts.
          </p>
        </div>

        {/* Pillars Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '80px' }}>
          {[
            { title: 'Uncompromising Quality', icon: Award, text: 'Rigorously trained teams implementing 5-star hospitality benchmarks daily.' },
            { title: 'Empowered Workforce', icon: Users, text: 'Continuous staff development, safety protocols, and career growth pathways.' },
            { title: 'Strict Integrity', icon: ShieldCheck, text: 'Full compliance with Australian employment awards, OH&S, and ISO standards.' },
            { title: 'Client Partnership', icon: HeartHandshake, text: 'Tailored SLA management designed around your property’s unique identity.' }
          ].map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} style={{ background: '#FFFFFF', padding: '32px 24px', borderRadius: '12px', border: '1px solid #E5E9EC', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(200, 16, 46, 0.08)', color: '#C8102E', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <Icon size={24} />
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px' }}>{pillar.title}</h3>
                <p style={{ fontSize: '0.86rem', color: '#718096', lineHeight: '1.6' }}>{pillar.text}</p>
              </div>
            );
          })}
        </div>

        {/* Callout */}
        <div style={{ background: '#1B2228', color: '#FFFFFF', borderRadius: '16px', padding: '50px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '8px', color: '#FFFFFF' }}>Ready to Elevate Your Hotel Operations?</h3>
            <p style={{ color: '#A0AEC0', fontSize: '0.95rem' }}>Speak with our Melbourne-based operations management team today.</p>
          </div>
          <button className="btn btn-red" onClick={onOpenQuote}>
            REQUEST A PROPOSAL <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
