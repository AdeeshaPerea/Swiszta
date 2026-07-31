import React, { useState } from 'react';
import { MapPin, Building2, Users, ShieldCheck, ChevronRight, Phone } from 'lucide-react';

const regions = [
  {
    id: 'sydney',
    city: 'Sydney',
    state: 'New South Wales (NSW)',
    image: '/images/sydney.png',
    properties: '45+ Properties',
    staff: '650+ Staff',
    hub: 'State Operational HQ — CBD & Regional NSW',
    services: ['Housekeeping & Turndown', 'Commercial Laundry Logistics', 'Concierge & Front Desk', 'Facilities Maintenance']
  },
  {
    id: 'melbourne',
    city: 'Melbourne',
    state: 'Victoria (VIC)',
    image: '/images/melbourne.png',
    properties: '50+ Properties',
    staff: '700+ Staff',
    hub: 'National Executive HQ — Melbourne Hub',
    services: ['Complete Property Turnaround', 'Banquet & F&B Staffing', 'Hotel Procurement', 'Asset Management']
  },
  {
    id: 'brisbane',
    city: 'Brisbane & Gold Coast',
    state: 'Queensland (QLD)',
    image: '/images/brisbane.png',
    properties: '30+ Properties',
    staff: '400+ Staff',
    hub: 'Resort & Tropical Hospitality Hub',
    services: ['Resort Housekeeping', 'Pool & Public Area Maintenance', 'Event Stewarding', 'Linen Supply Logistics']
  },
  {
    id: 'adelaide',
    city: 'Adelaide',
    state: 'South Australia (SA)',
    image: '/images/adelaide.png',
    properties: '15+ Properties',
    staff: '200+ Staff',
    hub: 'Central Australia Operations',
    services: ['Boutique Hotel Housekeeping', 'Property Engineering', 'Uniform & Linen Care', 'Hygiene Audits']
  },
  {
    id: 'auckland',
    city: 'Auckland',
    state: 'New Zealand (NZ)',
    image: '/images/auckland.png',
    properties: '12+ Properties',
    staff: '180+ Staff',
    hub: 'Trans-Tasman Operations Hub',
    services: ['5-Star Room Operations', 'Laundry Management', 'Concierge & Valet', 'Sustainable Supply Chain']
  }
];

export default function NationwideCoverage({ onOpenQuote }) {
  const [selectedRegion, setSelectedRegion] = useState(regions[1]); // Default Melbourne

  return (
    <section style={{ backgroundColor: '#0D131D', color: '#FFFFFF', padding: '64px 0', borderTop: '2px solid rgba(255, 42, 75, 0.4)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', position: 'relative', overflow: 'hidden' }}>
      {/* Background Soft Glow */}
      <div style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(200, 16, 46, 0.18) 0%, rgba(13,19,29,0) 70%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 900, letterSpacing: '1.5px', color: '#FF2A4B', textTransform: 'uppercase', marginBottom: '8px' }}>
            <span style={{ width: '6px', height: '6px', backgroundColor: '#FF2A4B', transform: 'rotate(45deg)', display: 'inline-block' }}></span>
            NATIONWIDE COVERAGE &amp; REGIONAL HUBS
            <span style={{ width: '6px', height: '6px', backgroundColor: '#FF2A4B', transform: 'rotate(45deg)', display: 'inline-block' }}></span>
          </div>

          <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.5px', marginBottom: '10px' }}>
            Servicing Key Hospitality Destinations <span style={{ color: '#FF2A4B' }}>Nationwide.</span>
          </h2>

          <p style={{ fontSize: '0.94rem', color: '#CBD5E0', lineHeight: 1.5, margin: 0, fontWeight: 500 }}>
            With regional command centers and trained response teams across Australia &amp; New Zealand, SWISZTA ensures seamless SLA delivery in every major city.
          </p>
        </div>

        {/* Interactive City Selector Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '32px' }}>
          {regions.map((r) => (
            <button
              key={r.id}
              onClick={() => setSelectedRegion(r)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '30px',
                fontSize: '0.86rem',
                fontWeight: 800,
                border: selectedRegion.id === r.id ? '1px solid #FF2A4B' : '1px solid rgba(255, 255, 255, 0.15)',
                backgroundColor: selectedRegion.id === r.id ? '#C8102E' : 'rgba(255, 255, 255, 0.06)',
                color: selectedRegion.id === r.id ? '#FFFFFF' : '#E2E8F0',
                cursor: 'pointer',
                boxShadow: selectedRegion.id === r.id ? '0 4px 16px rgba(200, 16, 46, 0.5)' : '0 2px 6px rgba(0,0,0,0.2)',
                transition: 'all 0.25s ease'
              }}
            >
              <MapPin size={15} style={{ color: selectedRegion.id === r.id ? '#FFFFFF' : '#FF2A4B' }} /> {r.city}
            </button>
          ))}
        </div>

        {/* Selected Region Showcase Box */}
        <div style={{
          backgroundColor: '#161F30',
          border: '1px solid rgba(255, 255, 255, 0.14)',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          alignItems: 'center'
        }}>
          {/* Left: Region Image & Badge Overlay */}
          <div style={{ position: 'relative', height: '380px' }}>
            <img 
              src={selectedRegion.image} 
              alt={selectedRegion.city} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => { e.target.src = '/images/contact_hero.png'; }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13, 19, 29, 0.9) 0%, rgba(13, 19, 29, 0.2) 60%)' }} />

            {/* City Title Overlay */}
            <div style={{ position: 'absolute', bottom: '24px', left: '24px', color: '#FFFFFF' }}>
              <div style={{ fontSize: '0.76rem', fontWeight: 900, color: '#FF2A4B', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>
                — {selectedRegion.state}
              </div>
              <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#FFFFFF', margin: 0 }}>
                {selectedRegion.city} Operational Hub
              </h3>
              <div style={{ fontSize: '0.86rem', color: '#E2E8F0', marginTop: '2px', fontWeight: 600 }}>
                {selectedRegion.hub}
              </div>
            </div>
          </div>

          {/* Right: Hub Metrics & Available Services */}
          <div style={{ padding: '36px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
              <div style={{ backgroundColor: '#1E293B', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FF2A4B', marginBottom: '4px' }}>
                  <Building2 size={18} />
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', color: '#94A3B8' }}>Serviced Properties</span>
                </div>
                <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#FFFFFF' }}>{selectedRegion.properties}</div>
              </div>

              <div style={{ backgroundColor: '#1E293B', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FF2A4B', marginBottom: '4px' }}>
                  <Users size={18} />
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', color: '#94A3B8' }}>Active Workforce</span>
                </div>
                <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#FFFFFF' }}>{selectedRegion.staff}</div>
              </div>
            </div>

            <h4 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>
              Core Regional Capabilities:
            </h4>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '28px' }}>
              {selectedRegion.services.map((svc, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', fontWeight: 600, color: '#E2E8F0', backgroundColor: '#1E293B', padding: '8px 12px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <ShieldCheck size={14} style={{ color: '#FF2A4B', flexShrink: 0 }} />
                  <span>{svc}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenQuote}
              className="btn btn-red"
              style={{ width: '100%', padding: '12px', fontSize: '0.86rem', fontWeight: 800, boxShadow: '0 4px 14px rgba(200, 16, 46, 0.4)' }}
            >
              CONNECT WITH {selectedRegion.city.toUpperCase()} HUB <ChevronRight size={16} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
