import React, { useState } from 'react';
import { 
  Sparkles, Shirt, UtensilsCrossed, Wrench, ConciergeBell, ShoppingCart, 
  ChevronRight, ChevronLeft, CheckCircle2, ShieldCheck, Clock, Users, Award, Leaf, 
  Smile, Star, PhoneCall, Search, ClipboardCheck, BedDouble, Globe, Building2, Calendar
} from 'lucide-react';

export default function ServicesPage({ onOpenQuote, onSelectService }) {
  // activeSubView: 'overview' | 'housekeeping' | 'laundry' | 'catering' | 'maintenance' | 'concierge' | 'procurement'
  const [activeSubView, setActiveSubView] = useState('overview');

  const mainServicesList = [
    {
      id: 'housekeeping',
      title: 'Housekeeping',
      desc: 'Impeccable cleanliness and room care for a perfect stay.',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'laundry',
      title: 'Laundry Services',
      desc: 'High-quality laundry and linen care with on-time delivery.',
      icon: Shirt,
      image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'catering',
      title: 'Catering & F&B',
      desc: 'Delicious culinary experiences tailored to every need.',
      icon: UtensilsCrossed,
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'maintenance',
      title: 'Maintenance',
      desc: 'Preventive and corrective maintenance for smooth operations.',
      icon: Wrench,
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'concierge',
      title: 'Concierge',
      desc: 'Personalised guest assistance and local expertise.',
      icon: ConciergeBell,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'procurement',
      title: 'Procurement',
      desc: 'Smart sourcing and cost-effective supply chain solutions.',
      icon: ShoppingCart,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div className="services-page-root">
      {/* Overview View (New Reference Design) */}
      {activeSubView === 'overview' && (
        <>
          {/* 1. Services Hero Section */}
          <section 
            className="hero-section" 
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80')`,
              minHeight: '520px',
              padding: '60px 0 100px'
            }}
          >
            <div className="hero-overlay" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.75) 45%, rgba(255,255,255,0.2) 100%)' }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
              <div className="hero-content-wrapper" style={{ maxWidth: '600px' }}>
                <div 
                  style={{
                    background: 'rgba(255, 255, 255, 0.88)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.9)',
                    padding: '40px',
                    borderRadius: '12px',
                    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.08)'
                  }}
                >
                  <div className="hero-badge-line" style={{ color: '#C8102E' }}>
                    OUR SERVICES
                  </div>

                  <h1 className="hero-title" style={{ color: '#1E252B', fontSize: '2.8rem', lineHeight: '1.1', marginBottom: '16px' }}>
                    Comprehensive Hospitality <br />
                    Solutions <span style={{ color: '#C8102E' }}>Tailored to You.</span>
                  </h1>

                  {/* Red Diamond Marker */}
                  <div style={{ display: 'flex', gap: '6px', margin: '12px 0 16px' }}>
                    <div style={{ width: '6px', height: '6px', background: '#C8102E', transform: 'rotate(45deg)' }}></div>
                    <div style={{ width: '8px', height: '8px', background: '#C8102E', transform: 'rotate(45deg)' }}></div>
                    <div style={{ width: '6px', height: '6px', background: '#C8102E', transform: 'rotate(45deg)' }}></div>
                  </div>

                  <p className="hero-desc" style={{ color: '#4A5568', fontSize: '0.94rem', lineHeight: '1.6', marginBottom: '28px' }}>
                    At SWISZTA, we deliver a full spectrum of hospitality support services designed to elevate guest experiences, enhance operational efficiency and protect your brand reputation.
                  </p>

                  <div className="hero-actions">
                    <button className="btn btn-red" onClick={() => setActiveSubView('housekeeping')}>
                      VIEW ALL SERVICES <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. 6 Service Image Cards Grid */}
          <section style={{ padding: '60px 0 80px' }}>
            <div className="container">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px' }}>
                {mainServicesList.map((svc) => {
                  const IconComp = svc.icon;
                  return (
                    <div 
                      key={svc.id}
                      style={{
                        background: '#FFFFFF',
                        borderRadius: '12px',
                        border: '1px solid #E5E9EC',
                        overflow: 'hidden',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                        display: 'flex',
                        flexDirection: 'column',
                        justify: 'space-between',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.04)';
                      }}
                    >
                      {/* Image Top with Floating Icon */}
                      <div style={{ position: 'relative', height: '140px' }}>
                        <img 
                          src={svc.image} 
                          alt={svc.title} 
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                        />
                        <div 
                          style={{
                            position: 'absolute',
                            bottom: '-20px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '42px',
                            height: '42px',
                            borderRadius: '50%',
                            background: '#FFFFFF',
                            border: '1px solid #E5E9EC',
                            color: '#C8102E',
                            display: 'flex',
                            alignItems: 'center',
                            justify: 'center',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.08)'
                          }}
                        >
                          <IconComp size={20} />
                        </div>
                      </div>

                      {/* Content */}
                      <div style={{ padding: '32px 14px 20px', textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                          <h3 style={{ fontSize: '0.94rem', fontWeight: 800, color: '#1E252B', marginBottom: '8px' }}>
                            {svc.title}
                          </h3>
                          <p style={{ fontSize: '0.76rem', color: '#718096', lineHeight: '1.45', marginBottom: '16px' }}>
                            {svc.desc}
                          </p>
                        </div>

                        <button 
                          style={{ 
                            background: 'none', 
                            border: 'none', 
                            color: '#C8102E', 
                            fontSize: '0.78rem', 
                            fontWeight: 800, 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            justify: 'center', 
                            gap: '4px',
                            cursor: 'pointer',
                            padding: '4px 0'
                          }}
                          onClick={() => setActiveSubView(svc.id)}
                        >
                          LEARN MORE <ChevronRight size={14} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 3. Delivering Excellence by Numbers */}
          <section style={{ padding: '0 0 80px' }}>
            <div className="container">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '48px', alignItems: 'center' }}>
                {/* Left Fine Dining Panoramic Image */}
                <div style={{ borderRadius: '16px', overflow: 'hidden', height: '360px', boxShadow: '0 8px 30px rgba(0,0,0,0.1)' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80" 
                    alt="Luxury hotel dining restaurant with skyline view" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>

                {/* Right Metrics Grid */}
                <div>
                  <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1E252B' }}>
                      Delivering <span style={{ color: '#C8102E' }}>Excellence</span> by Numbers
                    </h2>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '8px' }}>
                      <div style={{ width: '6px', height: '6px', background: '#C8102E', transform: 'rotate(45deg)' }}></div>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', textAlign: 'center' }}>
                    <div>
                      <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(200,16,46,0.06)', color: '#C8102E', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                        <Building2 size={24} />
                      </div>
                      <div style={{ fontSize: '2rem', fontWeight: 800, color: '#C8102E', lineHeight: 1 }}>150+</div>
                      <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#4A5568', marginTop: '4px', lineHeight: '1.3' }}>Hotels & Properties Serviced</div>
                    </div>

                    <div>
                      <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(200,16,46,0.06)', color: '#C8102E', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                        <Globe size={24} />
                      </div>
                      <div style={{ fontSize: '2rem', fontWeight: 800, color: '#C8102E', lineHeight: 1 }}>12</div>
                      <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#4A5568', marginTop: '4px', lineHeight: '1.3' }}>Regions Worldwide</div>
                    </div>

                    <div>
                      <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(200,16,46,0.06)', color: '#C8102E', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                        <Users size={24} />
                      </div>
                      <div style={{ fontSize: '2rem', fontWeight: 800, color: '#C8102E', lineHeight: 1 }}>2,000+</div>
                      <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#4A5568', marginTop: '4px', lineHeight: '1.3' }}>Trained Professionals</div>
                    </div>

                    <div>
                      <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(200,16,46,0.06)', color: '#C8102E', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                        <Award size={24} />
                      </div>
                      <div style={{ fontSize: '2rem', fontWeight: 800, color: '#C8102E', lineHeight: 1 }}>30+</div>
                      <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#4A5568', marginTop: '4px', lineHeight: '1.3' }}>Years of Hospitality Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Bottom Custom Solution Bar */}
          <section style={{ padding: '0 0 80px' }}>
            <div className="container">
              <div 
                style={{ 
                  background: '#F8F9FA', 
                  border: '1px solid #E5E9EC', 
                  borderRadius: '16px', 
                  padding: '24px 32px',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'space-between',
                  flexWrap: 'wrap',
                  gap: '16px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#C8102E', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <PhoneCall size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#1E252B' }}>Need a Custom Solution for Your Property?</h3>
                    <p style={{ fontSize: '0.86rem', color: '#718096', marginTop: '2px' }}>Our team is ready to create a tailored plan that fits your unique needs.</p>
                  </div>
                </div>

                <button className="btn btn-red" onClick={onOpenQuote}>
                  LET'S TALK <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Detail Sub-View (Housekeeping / Laundry / etc.) */}
      {activeSubView !== 'overview' && (
        <div>
          {/* Sub-header / Service Selector Tabs */}
          <div style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E9EC', padding: '12px 0' }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
              <button 
                style={{ background: 'none', border: 'none', color: '#C8102E', fontSize: '0.84rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}
                onClick={() => setActiveSubView('overview')}
              >
                <ChevronLeft size={16} /> BACK TO OVERVIEW
              </button>

              <div style={{ display: 'flex', gap: '8px', overflowX: 'auto' }}>
                {mainServicesList.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeSubView === tab.id;
                  return (
                    <button
                      key={tab.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        border: isActive ? '1px solid #C8102E' : '1px solid #E5E9EC',
                        background: isActive ? '#C8102E' : '#F8F9FA',
                        color: isActive ? '#FFFFFF' : '#4A5568',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap'
                      }}
                      onClick={() => setActiveSubView(tab.id)}
                    >
                      <Icon size={14} />
                      <span>{tab.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Hero for Housekeeping Detail */}
          <section 
            className="hero-section" 
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1920&q=80')`,
              minHeight: '480px',
              padding: '50px 0 100px'
            }}
          >
            <div className="hero-overlay" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.8) 45%, rgba(255,255,255,0.15) 100%)' }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
              <div className="hero-content-wrapper" style={{ maxWidth: '580px' }}>
                <div 
                  style={{
                    background: 'rgba(255, 255, 255, 0.88)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.9)',
                    padding: '36px',
                    borderRadius: '12px',
                    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.08)'
                  }}
                >
                  <div className="hero-badge-line" style={{ color: '#C8102E', fontSize: '0.78rem', fontWeight: 800 }}>
                    {activeSubView.toUpperCase()} SERVICES
                  </div>

                  <h1 className="hero-title" style={{ color: '#1E252B', fontSize: '2.8rem', lineHeight: '1.1', marginBottom: '16px' }}>
                    Impeccable Rooms. <br />
                    <span style={{ color: '#C8102E' }}>Exceptional Stays.</span>
                  </h1>

                  <p style={{ color: '#4A5568', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '20px' }}>
                    At SWISZTA, we deliver superior housekeeping services that create clean, comfortable and welcoming environments for every guest, every time.
                  </p>

                  <button className="btn btn-red" onClick={onOpenQuote}>
                    REQUEST A QUOTE <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* 6 Feature Cards Row */}
          <div className="container" style={{ position: 'relative', zIndex: 30, marginTop: '-50px', marginBottom: '60px' }}>
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(6, 1fr)',
                background: '#FFFFFF',
                borderRadius: '16px',
                boxShadow: '0 12px 36px rgba(0, 0, 0, 0.08)',
                border: '1px solid #E5E9EC',
                overflow: 'hidden'
              }}
            >
              {[
                { title: 'Spotless Cleanliness', desc: 'Thorough cleaning for guest-ready rooms.', icon: Sparkles },
                { title: 'Hygiene First', desc: 'Health and safety is our top priority.', icon: ShieldCheck },
                { title: 'On-Time Service', desc: 'Rooms ready on time, every time.', icon: Clock },
                { title: 'Trained Professionals', desc: 'Well-trained teams delivering with pride and care.', icon: Users },
                { title: 'Quality Assurance', desc: 'Regular inspections to maintain high standards.', icon: Award },
                { title: 'Sustainable Practices', desc: 'Eco-friendly products and responsible methods.', icon: Leaf }
              ].map((card, idx) => {
                const IconComp = card.icon;
                return (
                  <div 
                    key={idx}
                    style={{
                      padding: '24px 14px',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                      borderRight: idx === 5 ? 'none' : '1px solid #E5E9EC'
                    }}
                  >
                    <div 
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        background: 'rgba(200, 16, 46, 0.06)',
                        color: '#C8102E',
                        display: 'flex',
                        alignItems: 'center',
                        justify: 'center'
                      }}
                    >
                      <IconComp size={22} />
                    </div>
                    <h4 style={{ fontSize: '0.86rem', fontWeight: 800, color: '#1E252B', marginTop: '2px' }}>
                      {card.title}
                    </h4>
                    <p style={{ fontSize: '0.74rem', color: '#718096', lineHeight: '1.35' }}>
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Red Callout Banner */}
          <section style={{ background: '#C8102E', color: '#FFFFFF', padding: '24px 0' }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <PhoneCall size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF' }}>Impeccable rooms. Happy guests.</h3>
                  <p style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.9)' }}>Partner with SWISZTA for world-class housekeeping services.</p>
                </div>
              </div>

              <button 
                className="btn" 
                style={{ background: '#FFFFFF', color: '#C8102E', padding: '12px 24px', fontWeight: 800 }}
                onClick={onOpenQuote}
              >
                TALK TO OUR TEAM <ChevronRight size={16} />
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
