import React from 'react';
import { 
  CheckCircle2, ChevronRight, ConciergeBell, ShieldCheck, Clock, Users, Award, 
  Smile, Star, Building2, MapPin, Key, HeartHandshake, PhoneCall
} from 'lucide-react';

export default function ConciergeServiceView({ onOpenQuote }) {
  const features = [
    { title: 'VIP Guest Arrival', desc: 'Warm, professional greetings and seamless check-in support.', icon: <ConciergeBell size={24} style={{ color: '#C8102E' }} /> },
    { title: 'Front Office Support', desc: 'Skilled front desk staff trained to international luxury hotel standards.', icon: <Users size={24} style={{ color: '#C8102E' }} /> },
    { title: 'Luggage & Porterage', desc: 'Prompt luggage handling and valet assistance upon arrival.', icon: <Key size={24} style={{ color: '#C8102E' }} /> },
    { title: '24/7 Availability', desc: 'Round-the-clock guest services and emergency assistance.', icon: <Clock size={24} style={{ color: '#C8102E' }} /> },
    { title: 'Local Expertise', desc: 'Curated recommendations, transport and local tour bookings.', icon: <MapPin size={24} style={{ color: '#C8102E' }} /> },
    { title: 'Brand Loyalty', desc: 'Creating memorable guest impressions that drive 5-star reviews.', icon: <Star size={24} style={{ color: '#C8102E' }} /> }
  ];

  const processSteps = [
    { step: 1, title: 'Warm Welcome', desc: 'Greeting guests upon arrival with genuine care and assistance.' },
    { step: 2, title: 'Luggage Escort', desc: 'Safe and swift transport of guest luggage to rooms.' },
    { step: 3, title: 'Guest Orientation', desc: 'Providing property details, amenities, and local recommendations.' },
    { step: 4, title: 'Special Requests', desc: 'Handling reservations, bookings, and custom guest needs.' },
    { step: 5, title: 'Express Checkout', desc: 'Assisting guests with departure logistics and transport.' },
    { step: 6, title: 'Feedback & Care', desc: 'Capturing guest impressions to ensure lasting brand loyalty.' }
  ];

  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '100vh' }}>
      
      {/* 1. Hero Section */}
      <div style={{ backgroundColor: '#FFFFFF', padding: '48px 0 64px', borderBottom: '1px solid #E5E9EC' }}>
        <div className="container">
          
          <div style={{ fontSize: '0.82rem', color: '#718096', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Home</span> &gt; <span>Services</span> &gt; <span style={{ color: '#1E252B', fontWeight: 700 }}>Concierge Services</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '1.5px', color: '#C8102E', textTransform: 'uppercase', marginBottom: '12px' }}>
                — CONCIERGE &amp; FRONT OF HOUSE
              </div>
              <h1 style={{ fontSize: '3.2rem', fontWeight: 800, lineHeight: 1.12, color: '#1E252B', marginBottom: '18px' }}>
                Warm Welcomes. <br />
                <span style={{ color: '#C8102E' }}>Unforgettable Stays.</span>
              </h1>
              <p style={{ fontSize: '1rem', color: '#4A5568', lineHeight: 1.6, marginBottom: '24px' }}>
                SWISZTA Concierge services deliver world-class front-of-house support, luggage assistance, and guest care that elevate every touchpoint of the guest journey.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                {[
                  'Polished, uniformed front office and luggage staff',
                  'Extensive hospitality training & local knowledge',
                  'Seamless check-in and VIP guest assistance',
                  'Flexible staffing models tailored to peak occupancy'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', fontWeight: 700, color: '#1E252B' }}>
                    <CheckCircle2 size={18} style={{ color: '#C8102E', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button className="btn btn-red" onClick={onOpenQuote} style={{ padding: '14px 28px' }}>
                REQUEST A QUOTE <ChevronRight size={16} />
              </button>
            </div>

            <div style={{ borderRadius: '16px', overflow: 'hidden', height: '420px', boxShadow: '0 12px 36px rgba(0,0,0,0.1)' }}>
              <img 
                src="/images/reception_frontdesk.jpg" 
                alt="SWISZTA Receptionist Checking In Hotel Guest" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* 2. Feature Highlights Bar */}
      <div className="container" style={{ marginTop: '-40px', position: 'relative', zIndex: 20 }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(6, 1fr)', 
          backgroundColor: '#FFFFFF', 
          borderRadius: '16px', 
          boxShadow: '0 12px 36px rgba(0,0,0,0.06)', 
          border: '1px solid #E2E8F0',
          overflow: 'hidden'
        }}>
          {features.map((f, i) => (
            <div key={i} style={{ 
              padding: '24px 16px', 
              textAlign: 'center', 
              borderRight: i < 5 ? '1px solid #F0F4F8' : 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '50%', 
                backgroundColor: '#FFF0F2', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '12px' 
              }}>
                {f.icon}
              </div>
              <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#1E252B', marginBottom: '6px' }}>
                {f.title}
              </h4>
              <p style={{ fontSize: '0.75rem', color: '#718096', lineHeight: 1.35 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Section Overview */}
      <div className="container" style={{ padding: '80px 24px 64px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '1.5px', color: '#C8102E', textTransform: 'uppercase', marginBottom: '12px' }}>
              — VIP CONCIERGE &amp; PORTERAGE
            </div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#1E252B', lineHeight: 1.2, marginBottom: '20px' }}>
              First Impressions That Last a Lifetime
            </h2>
            <p style={{ fontSize: '0.98rem', color: '#4A5568', lineHeight: 1.65, marginBottom: '24px' }}>
              The lobby is the heart of every luxury hotel. Our dedicated concierge team ensures that from the moment guests step through the doors, they experience warm hospitality, flawless luggage service, and attentive care.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[
                { title: 'Valet & Parking', desc: 'Professional arrival logistics and parking management.' },
                { title: 'VIP Guest Escort', desc: 'Personalised check-in and in-room orientation.' },
                { title: 'Executive Lounges', desc: 'Bespoke concierge staffing for executive floor lounges.' },
                { title: 'Event Logistics', desc: 'Coordinating guest arrivals for major hotel conferences.' }
              ].map((item, idx) => (
                <div key={idx} style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1E252B', marginBottom: '4px' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.78rem', color: '#718096', lineHeight: 1.4 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ borderRadius: '16px', overflow: 'hidden', height: '400px', boxShadow: '0 12px 36px rgba(0,0,0,0.1)' }}>
            <img 
              src="/images/concierge_hero.jpg" 
              alt="SWISZTA Luggage Attendant Welcoming Hotel Guest" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
