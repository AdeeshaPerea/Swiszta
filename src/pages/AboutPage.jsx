import React from 'react';
import { CheckCircle2, Phone, Mail, MapPin, ChevronRight, ShieldCheck, Star, Users, Handshake, Leaf, UserCheck } from 'lucide-react';
import LeadershipTree from '../components/LeadershipTree';

export default function AboutPage({ onOpenQuote }) {
  const milestones = [
    { number: '1992', label: 'Founded', desc: 'Established with a vision to transform hospitality services in Australia.' },
    { number: '30+', label: 'Years of Excellence', desc: 'Three decades of delivering outstanding hospitality solutions.' },
    { number: '150+', label: 'Hotels & Properties', desc: 'Proudly servicing premium hotels and hospitality venues.' },
    { number: '12', label: 'Regions', desc: 'Nationwide presence across major cities and regional areas.' },
    { number: '2,000+', label: 'People', desc: 'A dedicated team of hospitality professionals and experts.' },
    { number: '98%', label: 'Client Retention', desc: 'Long-term partnerships built on trust, quality and results.' }
  ];

  const leaders = [
    {
      name: 'Natasha McGrath',
      role: 'Chief Executive Officer',
      image: '/images/team/natasha.jpg',
      bio: 'Visionary Chief Executive Officer driving strategic direction, operational excellence, and transformative growth across SWISZTA hospitality operations.',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Peter Pitchers',
      role: 'General Manager',
      image: '/images/team/peter.jpg',
      bio: 'Experienced senior executive driving operational strategy, team leadership, and executive hospitality service management across all divisions.',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Robert Di Giulio',
      role: 'Head of Growth & Client Retention',
      image: '/images/team/robert.jpg',
      bio: 'Leads business growth and client relationships with a focus on strategic partnerships and long-term value creation.',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Deshani Gomas',
      role: 'Chief Financial Officer',
      image: '/images/team/deshani.jpg',
      bio: 'Finance leader focused on sustainable growth, governance and delivering strong financial performance.',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Markus Williams',
      role: 'National Service Manager',
      image: '/images/team/markus.jpg',
      bio: 'National service operations leader dedicated to ensuring service excellence, client satisfaction, and operational efficiency across all properties.',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Danny Fernandez',
      role: 'Head of Assets',
      image: '/images/team/danny.jpg',
      bio: 'Asset management expert overseeing property assets, equipment lifecycle, procurement, and facility maintenance standards across all regions.',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Vivien Leong',
      role: 'General Manager',
      image: '/images/team/vivien.jpg',
      bio: 'Accomplished hospitality executive specializing in strategic management, operational excellence, and luxury guest service standards.',
      linkedin: 'https://linkedin.com'
    }
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
    { title: 'Integrity', desc: 'We do the right thing, always.', icon: <ShieldCheck size={20} style={{ color: '#C8102E' }} /> },
    { title: 'Excellence', desc: 'We strive for the highest standards.', icon: <Star size={20} style={{ color: '#C8102E' }} /> },
    { title: 'Teamwork', desc: 'We collaborate and deliver results.', icon: <Users size={20} style={{ color: '#C8102E' }} /> },
    { title: 'Collaboration', desc: 'We work together to create better outcomes.', icon: <Handshake size={20} style={{ color: '#C8102E' }} /> },
    { title: 'Sustainability', desc: 'We care for our people, communities and planet.', icon: <Leaf size={20} style={{ color: '#C8102E' }} /> },
    { title: 'Accountability', desc: 'We own our actions and deliver results.', icon: <UserCheck size={20} style={{ color: '#C8102E' }} /> }
  ];

  const clientBrands = ['Wyndham Hotels & Resorts', 'IHG Hotels & Resorts', 'Hilton', 'Marriott International', 'Hyatt'];

  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '100vh' }}>

      {/* 1. Hero Section: Built on Experience. Driven by Excellence. */}
      <div
        style={{
          position: 'relative',
          backgroundImage: `linear-gradient(to right, rgba(12, 16, 20, 0.9) 0%, rgba(12, 16, 20, 0.7) 60%, rgba(12, 16, 20, 0.5) 100%), url('/images/contact_hero.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF',
          padding: '72px 0 84px'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '640px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '0.85rem',
              fontWeight: 800,
              letterSpacing: '2px',
              color: '#C8102E',
              marginBottom: '12px',
              textTransform: 'uppercase'
            }}>
              <span style={{ width: '24px', height: '2px', backgroundColor: '#C8102E', display: 'inline-block' }}></span>
              ABOUT SWISZTA
            </div>

            <h1 style={{ fontSize: '3.2rem', fontWeight: 800, lineHeight: 1.12, marginBottom: '18px', color: '#FFFFFF', letterSpacing: '-0.5px' }}>
              Built on Experience. <br />
              <span style={{ color: '#C8102E' }}>Driven by Excellence.</span>
            </h1>

            <p style={{ fontSize: '1.05rem', color: '#CBD5E0', lineHeight: 1.6, marginBottom: '28px' }}>
              For over 30 years, SWISZTA Hotel & Hospitality Services has been a trusted partner to the hospitality industry, delivering integrated solutions that create exceptional guest experiences and operational efficiency.
            </p>

            <button
              className="btn btn-red"
              onClick={() => {
                const el = document.getElementById('leadership-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{ padding: '14px 28px', fontSize: '0.88rem' }}
            >
              GET TO KNOW US <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Who We Are & Our Milestones Grid */}
      <div className="container" style={{ padding: '64px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '48px', alignItems: 'start' }}>

          {/* Left: Who We Are */}
          <div>
            <div style={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '1.5px', color: '#C8102E', textTransform: 'uppercase', marginBottom: '12px' }}>
              — WHO WE ARE
            </div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1E252B', lineHeight: 1.2, marginBottom: '20px' }}>
              We're Passionate About Hospitality. And It Shows.
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#4A5568', lineHeight: 1.6, marginBottom: '24px' }}>
              SWISZTA is a leading provider of integrated hotel and hospitality services across Australia. From housekeeping to maintenance, catering to concierge, we deliver tailored solutions that enhance guest satisfaction and elevate your brand.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {['Proudly Australian Owned', 'Industry Experts & Hospitality Specialists', 'Commitment to Quality, Safety & Sustainability', 'People Focused, Performance Driven'].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', fontWeight: 700, color: '#1E252B' }}>
                  <CheckCircle2 size={18} style={{ color: '#C8102E', flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Our Milestones 6-Stat Grid */}
          <div>
            <div style={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '1.5px', color: '#C8102E', textTransform: 'uppercase', marginBottom: '16px' }}>
              — OUR MILESTONES
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {milestones.map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    border: '1px solid #E2E8F0',
                    padding: '24px 18px',
                    textAlign: 'center',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
                  }}
                >
                  <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#C8102E', lineHeight: 1, marginBottom: '6px' }}>
                    {m.number}
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1E252B', marginBottom: '8px' }}>
                    {m.label}
                  </div>
                  <p style={{ fontSize: '0.78rem', color: '#657380', lineHeight: 1.4 }}>
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* 3. Our Journey Timeline Section (Moved above Leadership Team) */}
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

      {/* 4. Leadership Team Section (Animated Org Tree) */}
      <LeadershipTree />

      {/* 5. Our Values Section */}
      <div style={{ backgroundColor: '#FFFFFF', padding: '64px 0', borderTop: '1px solid #E5E9EC' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px' }}>

            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '1.5px', color: '#C8102E', textTransform: 'uppercase', marginBottom: '8px' }}>
                — OUR VALUES
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#1E252B', marginBottom: '24px' }}>
                The Principles That Guide Everything We Do.
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', maxWidth: '820px' }}>
                {values.map((v, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: '#FFF0F2',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {v.icon}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1E252B' }}>
                        {v.title}
                      </h4>
                      <p style={{ fontSize: '0.78rem', color: '#657380', marginTop: '2px', lineHeight: 1.35 }}>
                        {v.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right CTA Box */}
            <div style={{
              backgroundColor: '#13181C',
              color: '#FFFFFF',
              borderRadius: '12px',
              padding: '32px',
              maxWidth: '320px',
              textAlign: 'center',
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
            }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '12px' }}>
                Let's Build the Future of Hospitality Together
              </h4>
              <button
                onClick={onOpenQuote}
                className="btn btn-red"
                style={{ width: '100%', marginTop: '12px', padding: '12px' }}
              >
                GET IN TOUCH <ChevronRight size={16} />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 6. Our Clients Row */}
      <div className="container" style={{ padding: '48px 24px 72px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '1.5px', color: '#C8102E', textTransform: 'uppercase', marginBottom: '6px' }}>
              — OUR CLIENTS
            </div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1E252B' }}>
              Trusted by Leading Brands Worldwide
            </h2>
          </div>
          <button
            onClick={onOpenQuote}
            style={{
              padding: '10px 20px',
              borderRadius: '6px',
              border: '1px solid #C8102E',
              backgroundColor: '#FFFFFF',
              color: '#C8102E',
              fontWeight: 800,
              fontSize: '0.78rem',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            VIEW ALL CLIENTS <ChevronRight size={14} />
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
          {clientBrands.map((brand, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '8px',
                border: '1px solid #E2E8F0',
                padding: '20px 16px',
                textAlign: 'center',
                fontWeight: 800,
                fontSize: '0.9rem',
                color: '#1E252B',
                boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
              }}
            >
              {brand}
            </div>
          ))}
        </div>
      </div>

      {/* 7. Bottom Dark Contact Banner */}
      <div style={{ backgroundColor: '#13181C', color: '#FFFFFF', padding: '40px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>

          {/* Left Title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', maxWidth: '520px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#C8102E',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Phone size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '4px' }}>
                Strong Leadership. Shared Vision. <br />
                <span style={{ color: '#C8102E' }}>Creating Exceptional Hospitality Experiences.</span>
              </h4>
              <p style={{ fontSize: '0.82rem', color: '#A0AEC0', lineHeight: 1.4 }}>
                Our leadership team is dedicated to building lasting partnerships and delivering value for today and the future.
              </p>
            </div>
          </div>

          {/* Right Contact Info & Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', fontWeight: 700 }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#C8102E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Phone size={14} />
              </div>
              <span>1300 794 477</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#C8102E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Mail size={14} />
              </div>
              <span style={{ color: '#CBD5E0' }}>info@swiszta.com</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#C8102E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MapPin size={14} />
              </div>
              <span style={{ color: '#A0AEC0' }}>1/42 Global Drive, Tullamarine VIC 3049, Australia</span>
            </div>

            <button className="btn btn-red" onClick={onOpenQuote} style={{ padding: '12px 24px' }}>
              GET IN TOUCH <ChevronRight size={16} />
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
