import React from 'react';
import { CheckCircle2, ChevronRight, ShieldCheck, Star, Users, Handshake, Leaf, UserCheck, Play } from 'lucide-react';
import LeadershipTree from './LeadershipTree';

export default function AboutSection({ onNavigate, onOpenVideo, onOpenQuote }) {
  const milestones = [
    { number: '1992', label: 'Founded', desc: 'Established with a vision to transform hospitality services in Australia.' },
    { number: '30+', label: 'Years of Excellence', desc: 'Three decades of delivering outstanding hospitality solutions.' },
    { number: '150+', label: 'Hotels & Properties', desc: 'Proudly servicing premium hotels and hospitality venues.' },
    { number: '12', label: 'Regions', desc: 'Nationwide presence across major cities and regional areas.' },
    { number: '2,000+', label: 'People', desc: 'A dedicated team of hospitality professionals and experts.' },
    { number: '98%', label: 'Client Retention', desc: 'Long-term partnerships built on trust, quality and results.' }
  ];

  const timelineSteps = [
    { year: '1992', title: 'The Beginning', desc: 'SWISZTA was founded with a commitment to deliver exceptional cleaning and support services to hotels.', image: '/images/news/academy.png' },
    { year: '1998', title: 'Expanding Services', desc: 'We expanded our capabilities to include laundry, concierge and specialised hospitality services.', image: '/images/news/expo.png' },
    { year: '2008', title: 'National Growth', desc: 'Expanded our footprint across Australia, partnering with leading hotel brands and hospitality groups.', image: '/images/melbourne.png' },
    { year: '2015', title: 'Integrated Solutions', desc: 'Introduced integrated facility solutions including maintenance, catering and procurement.', image: '/images/contact_hero.png' },
    { year: '2020', title: 'Innovation & Sustainability', desc: 'Invested in technology and sustainable practices to deliver smarter, greener hospitality solutions.', image: '/images/news/ev.png' },
    { year: 'Today', title: 'Looking Ahead', desc: 'Continuing to innovate and elevate hospitality experiences for a better tomorrow.', image: '/images/swiszta_team.png' }
  ];

  const values = [
    { title: 'Integrity', desc: 'We do the right thing, always.', icon: <ShieldCheck size={20} style={{ color: '#FF2A4B' }} /> },
    { title: 'Excellence', desc: 'We strive for the highest standards.', icon: <Star size={20} style={{ color: '#FF2A4B' }} /> },
    { title: 'Teamwork', desc: 'We collaborate and deliver results.', icon: <Users size={20} style={{ color: '#FF2A4B' }} /> },
    { title: 'Collaboration', desc: 'We work together to create better outcomes.', icon: <Handshake size={20} style={{ color: '#FF2A4B' }} /> },
    { title: 'Sustainability', desc: 'We care for our people, communities and planet.', icon: <Leaf size={20} style={{ color: '#FF2A4B' }} /> },
    { title: 'Accountability', desc: 'We own our actions and deliver results.', icon: <UserCheck size={20} style={{ color: '#FF2A4B' }} /> }
  ];

  return (
    <section id="about" style={{ backgroundColor: '#FAFAFA', paddingTop: '0px', paddingBottom: '32px' }}>
      
      {/* 1. Who We Are & Our Milestones Grid WITH BALANCED BACKGROUND VIDEO */}
      <div 
        style={{
          position: 'relative',
          padding: '80px 0',
          overflow: 'hidden',
          backgroundColor: '#0A0E17',
          color: '#FFFFFF'
        }}
      >
        {/* YouTube Background Video Container (Balanced 68% Opacity) */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '120%',
          height: '140%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.68 // Reduced slightly for a balanced, elegant background video look
        }}>
          <iframe
            src="https://www.youtube.com/embed/Am6-Kg_Fjgs?autoplay=1&mute=1&controls=0&loop=1&playlist=Am6-Kg_Fjgs&playsinline=1&enablejsapi=1&rel=0"
            title="SWISZTA Corporate Background Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>

        {/* Smooth Dark Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(10, 14, 23, 0.48) 0%, rgba(5, 8, 15, 0.42) 100%)',
          zIndex: 1
        }} />

        {/* Content Layer */}
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '52px', alignItems: 'center' }}>
            
            {/* Left Column: Who We Are */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.82rem',
                fontWeight: 900,
                letterSpacing: '2px',
                color: '#FF2A4B',
                backgroundColor: 'rgba(10, 14, 23, 0.75)',
                padding: '6px 16px',
                borderRadius: '20px',
                border: '1px solid rgba(255, 42, 75, 0.4)',
                textTransform: 'uppercase',
                marginBottom: '16px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
              }}>
                — WHO WE ARE
              </div>
              
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 900,
                color: '#FFFFFF',
                lineHeight: 1.2,
                marginBottom: '20px',
                textShadow: '0 3px 12px rgba(0, 0, 0, 0.9), 0 1px 3px rgba(0,0,0,0.9)'
              }}>
                We're Passionate About Hospitality. <span style={{ color: '#FF2A4B' }}>And It Shows.</span>
              </h2>

              <p style={{
                fontSize: '1rem',
                color: '#F8FAFC',
                lineHeight: 1.65,
                marginBottom: '28px',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.9)',
                fontWeight: 600
              }}>
                SWISZTA is a leading provider of integrated hotel and hospitality services across Australia. From housekeeping to maintenance, catering to concierge, we deliver tailored solutions that enhance guest satisfaction and elevate your brand.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                {[
                  'Proudly Australian Owned',
                  'Industry Experts & Hospitality Specialists',
                  'Commitment to Quality, Safety & Sustainability',
                  'People Focused, Performance Driven'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.94rem', fontWeight: 800, color: '#FFFFFF', textShadow: '0 2px 6px rgba(0,0,0,0.9)' }}>
                    <CheckCircle2 size={20} style={{ color: '#FF2A4B', flexShrink: 0, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Watch Corporate Video Button */}
              <button 
                onClick={onOpenVideo} 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '14px 28px',
                  borderRadius: '30px',
                  backgroundColor: '#C8102E',
                  color: '#FFFFFF',
                  border: 'none',
                  fontSize: '0.92rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6), 0 4px 16px rgba(200, 16, 46, 0.5)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(200, 16, 46, 0.7)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.6)';
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  color: '#C8102E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Play size={16} style={{ marginLeft: '2px', fill: 'currentColor' }} />
                </div>
                WATCH CORPORATE VIDEO
              </button>
            </div>

            {/* Right Column: High-Contrast Milestone Cards */}
            <div>
              <div style={{
                display: 'inline-block',
                fontSize: '0.82rem',
                fontWeight: 900,
                letterSpacing: '2px',
                color: '#FF2A4B',
                backgroundColor: 'rgba(10, 14, 23, 0.75)',
                padding: '6px 16px',
                borderRadius: '20px',
                border: '1px solid rgba(255, 42, 75, 0.4)',
                textTransform: 'uppercase',
                marginBottom: '18px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
              }}>
                — OUR MILESTONES
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px' }}>
                {milestones.map((m, idx) => (
                  <div 
                    key={idx}
                    style={{
                      backgroundColor: 'rgba(15, 23, 42, 0.68)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: '16px',
                      border: '1px solid rgba(255, 255, 255, 0.22)',
                      padding: '24px 16px',
                      textAlign: 'center',
                      boxShadow: '0 10px 32px rgba(0, 0, 0, 0.5)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.borderColor = '#FF2A4B';
                      e.currentTarget.style.backgroundColor = 'rgba(15, 23, 42, 0.85)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.22)';
                      e.currentTarget.style.backgroundColor = 'rgba(15, 23, 42, 0.68)';
                    }}
                  >
                    <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#FF2A4B', lineHeight: 1, marginBottom: '8px', textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
                      {m.number}
                    </div>
                    <div style={{ fontSize: '0.94rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px', textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
                      {m.label}
                    </div>
                    <p style={{ fontSize: '0.82rem', color: '#E2E8F0', lineHeight: 1.45, margin: 0, fontWeight: 500 }}>
                      {m.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. OUR JOURNEY Timeline Section */}
      <div style={{ backgroundColor: '#F8FAFC', padding: '72px 0', borderTop: '1px solid #E5E9EC', borderBottom: '1px solid #E5E9EC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '2px', color: '#C8102E', textTransform: 'uppercase', marginBottom: '10px' }}>
              <span style={{ width: '8px', height: '8px', backgroundColor: '#C8102E', transform: 'rotate(45deg)', display: 'inline-block' }}></span>
              OUR JOURNEY
              <span style={{ width: '8px', height: '8px', backgroundColor: '#C8102E', transform: 'rotate(45deg)', display: 'inline-block' }}></span>
            </div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#1E252B', marginBottom: '14px' }}>
              A Legacy of Growth <span style={{ color: '#C8102E' }}>and Trust</span>
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#657380', lineHeight: 1.6 }}>
              From our humble beginnings to becoming a trusted hospitality partner nationwide, explore our milestone moments over the years.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {timelineSteps.map((step, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  overflow: 'hidden',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.05)';
                }}
              >
                {/* Large Photo Header with Floating Year Badge */}
                <div style={{ position: 'relative', height: '190px', overflow: 'hidden' }}>
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    backgroundColor: '#C8102E',
                    color: '#FFFFFF',
                    fontSize: '0.92rem',
                    fontWeight: 900,
                    padding: '6px 16px',
                    borderRadius: '30px',
                    boxShadow: '0 4px 12px rgba(200, 16, 46, 0.4)',
                    letterSpacing: '0.5px'
                  }}>
                    {step.year}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#1E252B', marginBottom: '10px' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#4A5568', lineHeight: 1.6, margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. OUR LEADERSHIP TEAM Section (Animated Org Tree) */}
      <LeadershipTree />

      {/* 4. OUR VALUES Section (Redesigned Rich Dark Layout with 2-Line Heading & Image) */}
      <div style={{ backgroundColor: '#0B0F17', color: '#FFFFFF', padding: '56px 0', borderTop: '2px solid rgba(255, 42, 75, 0.4)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', position: 'relative', overflow: 'hidden' }}>
        
        {/* Subtle Ambient Red Glow */}
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '360px', height: '360px', background: 'radial-gradient(circle, rgba(200, 16, 46, 0.22) 0%, rgba(11,15,23,0) 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(200, 16, 46, 0.15) 0%, rgba(11,15,23,0) 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          
          {/* Main Grid: Left Image Banner, Right Values Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.35fr', gap: '44px', alignItems: 'center' }}>
            
            {/* Left Column: Featured Image with Overlay Cards */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}>
                <img 
                  src="/images/swiszta_team.png" 
                  alt="SWISZTA Leadership & Team Values" 
                  style={{
                    width: '100%',
                    height: '460px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  onError={(e) => { e.target.src = '/images/contact_hero.png'; }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(11, 15, 23, 0.88) 0%, rgba(11, 15, 23, 0.2) 60%)'
                }} />

                {/* Floating Top Badge */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  backgroundColor: 'rgba(11, 15, 23, 0.85)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 42, 75, 0.4)',
                  padding: '6px 16px',
                  borderRadius: '20px',
                  fontSize: '0.76rem',
                  fontWeight: 800,
                  color: '#FF2A4B',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
                }}>
                  — OUR GUIDING PRINCIPLES
                </div>

                {/* Floating Bottom Card */}
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  right: '20px',
                  backgroundColor: 'rgba(22, 31, 48, 0.92)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '14px',
                  padding: '16px 20px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.4)'
                }}>
                  <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '2px' }}>
                    Excellence in Action
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#CBD5E0', fontWeight: 500 }}>
                    Delivering trusted, high-standard hospitality solutions nationwide since 1992.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Values Header & 6-Cards Grid */}
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 900, letterSpacing: '1.5px', color: '#FF2A4B', textTransform: 'uppercase', marginBottom: '6px' }}>
                — OUR VALUES
              </div>

              {/* 2-Line Heading */}
              <h2 style={{ fontSize: '2.1rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '12px', lineHeight: 1.25 }}>
                The Principles That Guide <br />
                <span style={{ color: '#FF2A4B' }}>Everything We Do.</span>
              </h2>

              <p style={{ fontSize: '0.9rem', color: '#CBD5E0', lineHeight: 1.5, marginBottom: '24px', fontWeight: 500 }}>
                Our values reflect our commitment to service quality, client satisfaction, and fostering strong long-term partnerships across Australia.
              </p>

              {/* 6 Values Grid (2 columns x 3 rows) */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '24px' }}>
                {values.map((v, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    gap: '14px',
                    alignItems: 'flex-start',
                    backgroundColor: '#161F30',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '14px',
                    padding: '16px',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
                    transition: 'all 0.25s ease'
                  }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 42, 75, 0.15)',
                      border: '1px solid rgba(255, 42, 75, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {v.icon}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#FFFFFF', margin: '0 0 3px 0' }}>
                        {v.title}
                      </h4>
                      <p style={{ fontSize: '0.82rem', color: '#CBD5E0', margin: 0, lineHeight: 1.4, fontWeight: 500 }}>
                        {v.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom CTA Banner inside Values Column */}
              <div style={{
                background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
                color: '#FFFFFF',
                borderRadius: '14px',
                border: '1px solid rgba(255, 42, 75, 0.3)',
                padding: '18px 22px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'
              }}>
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FFFFFF' }}>
                    Build the Future of Hospitality Together
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#E2E8F0', marginTop: '2px', fontWeight: 500 }}>
                    Partner with Australia's premier hospitality service providers.
                  </div>
                </div>

                <button 
                  onClick={onOpenQuote}
                  className="btn btn-red"
                  style={{
                    padding: '10px 18px',
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    boxShadow: '0 4px 14px rgba(200, 16, 46, 0.4)'
                  }}
                >
                  GET IN TOUCH <ChevronRight size={15} />
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
