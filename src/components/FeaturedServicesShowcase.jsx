import React from 'react';
import { ChevronRight, Sparkles, CheckCircle2, ShieldCheck, Clock, Layers, Flame, Wrench, Package } from 'lucide-react';

const featuredServices = [
  {
    id: 'housekeeping',
    title: 'Housekeeping & Room Operations',
    tag: 'CORE HOSPITALITY',
    image: '/images/housekeeping_bedmaking.jpg',
    desc: 'Complete hotel room turnarounds, public area cleaning, and luxury turndown services delivered with 5-star precision.',
    features: ['5-Star Bedmaking & Linen Change', 'Deep Cleaning & Sanitisation', 'Public Area Maintenance', 'Quality Assurance Audits'],
    stat: '99.4% SLA Compliance'
  },
  {
    id: 'laundry',
    title: 'Commercial Laundry & Linen Logistics',
    tag: 'LOGISTICS & LINEN',
    image: '/images/laundry_hero.jpg',
    desc: 'High-capacity eco-friendly linen processing, uniform management, and timely scheduled property deliveries.',
    features: ['Eco-Wash Fabric Care', 'Daily Scheduled Property Delivery', 'Linen RFID Tracking', 'Uniform Cleaning & Pressing'],
    stat: '50,000+ Items Daily'
  },
  {
    id: 'catering',
    title: 'Catering & Culinary Operations',
    tag: 'FOOD & BEVERAGE',
    image: '/images/catering_hero.jpg',
    desc: 'Banquet service staffing, kitchen stewarding, commercial kitchen cleaning, and culinary support staff.',
    features: ['Kitchen Stewarding & Sanitation', 'Banquet & Event Staffing', 'HACCP Hygiene Compliance', 'Buffet & Dining Room Support'],
    stat: 'HACCP Certified'
  },
  {
    id: 'concierge',
    title: 'Concierge & Front Office Support',
    tag: 'GUEST EXPERIENCE',
    image: '/images/concierge_hero.jpg',
    desc: 'Professional front-of-house personnel, luggage assistance, porter services, and VIP guest relations.',
    features: ['Bilingual Reception Staff', '24/7 Porter & Luggage Service', 'VIP Guest Management', 'Porters & Valet Parking'],
    stat: '24/7 Front Office'
  },
  {
    id: 'maintenance',
    title: 'Property Maintenance & Engineering',
    tag: 'FACILITY MANAGEMENT',
    image: '/images/maintenance_hero.jpg',
    desc: 'Preventative maintenance, rapid repair dispatch, HVAC oversight, and full building asset management.',
    features: ['24/7 Emergency Dispatch', 'HVAC & Plumbing Repairs', 'Preventative Maintenance Plans', 'Asset Life Extension'],
    stat: '15-Min Emergency Response'
  },
  {
    id: 'procurement',
    title: 'Procurement & Supply Chain',
    tag: 'ASSET PROCUREMENT',
    image: '/images/procurement_hero.jpg',
    desc: 'Bulk hospitality consumables, guest amenities, eco-friendly chemical supplies, and equipment sourcing.',
    features: ['Eco-Certified Amenities', 'Bulk Purchasing Discounts', 'Inventory Management', 'Sustainable Chemical Sourcing'],
    stat: '100% Green Supply'
  }
];

export default function FeaturedServicesShowcase({ onNavigate, onOpenQuote }) {
  return (
    <section style={{ backgroundColor: '#F8FAFC', padding: '64px 0', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 44px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '1.5px', color: '#C8102E', textTransform: 'uppercase', marginBottom: '8px' }}>
            <span style={{ width: '6px', height: '6px', backgroundColor: '#C8102E', transform: 'rotate(45deg)', display: 'inline-block' }}></span>
            INTEGRATED HOSPITALITY CAPABILITIES
            <span style={{ width: '6px', height: '6px', backgroundColor: '#C8102E', transform: 'rotate(45deg)', display: 'inline-block' }}></span>
          </div>

          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1E252B', letterSpacing: '-0.5px', marginBottom: '10px' }}>
            Tailored Services Built For <span style={{ color: '#C8102E' }}>Premium Properties.</span>
          </h2>

          <p style={{ fontSize: '0.94rem', color: '#4A5568', lineHeight: 1.5, margin: 0 }}>
            From single-department support to turnkey facility management, SWISZTA delivers seamless operational excellence across Australia.
          </p>
        </div>

        {/* 6 Featured Service Cards Grid (3 cols x 2 rows) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '36px' }}>
          {featuredServices.map((svc) => (
            <div 
              key={svc.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
                overflow: 'hidden',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = '#C8102E';
                e.currentTarget.style.boxShadow = '0 20px 35px -10px rgba(200, 16, 46, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.05)';
              }}
            >
              {/* Image Banner */}
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img 
                  src={svc.image} 
                  alt={svc.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onError={(e) => { e.target.src = '/images/contact_hero.png'; }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(19, 24, 28, 0.8) 0%, rgba(19, 24, 28, 0.1) 60%)' }} />
                
                {/* Category Tag */}
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  backgroundColor: '#C8102E',
                  color: '#FFFFFF',
                  fontSize: '0.64rem',
                  fontWeight: 800,
                  letterSpacing: '0.8px',
                  padding: '3px 10px',
                  borderRadius: '10px',
                  textTransform: 'uppercase'
                }}>
                  {svc.tag}
                </div>

                {/* Stat Metric Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '14px',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  color: '#1E252B',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  padding: '4px 10px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                }}>
                  ✨ {svc.stat}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1E252B', marginBottom: '8px' }}>
                  {svc.title}
                </h3>
                
                <p style={{ fontSize: '0.84rem', color: '#4A5568', lineHeight: 1.45, marginBottom: '16px' }}>
                  {svc.desc}
                </p>

                {/* Feature Bullet Points */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px', flex: 1 }}>
                  {svc.features.map((feat, fIdx) => (
                    <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: '#334155', fontWeight: 600 }}>
                      <CheckCircle2 size={14} style={{ color: '#C8102E', flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <button
                  onClick={() => onNavigate('services', svc.id)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E0',
                    backgroundColor: '#FFFFFF',
                    color: '#C8102E',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#C8102E';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.borderColor = '#C8102E';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.color = '#C8102E';
                    e.currentTarget.style.borderColor = '#CBD5E0';
                  }}
                >
                  EXPLORE SERVICE DETAILS <ChevronRight size={14} />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div style={{
          backgroundColor: '#1E252B',
          color: '#FFFFFF',
          borderRadius: '16px',
          padding: '24px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
          boxShadow: '0 12px 32px rgba(0,0,0,0.15)'
        }}>
          <div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF' }}>
              Need a Custom Hospitality Service Solution?
            </div>
            <div style={{ fontSize: '0.84rem', color: '#CBD5E0', marginTop: '3px' }}>
              We tailor multi-department service agreements specifically for your property requirements.
            </div>
          </div>

          <button
            onClick={onOpenQuote}
            className="btn btn-red"
            style={{ padding: '12px 24px', fontSize: '0.88rem', fontWeight: 800 }}
          >
            REQUEST A TAILORED QUOTE <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
