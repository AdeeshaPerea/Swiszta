import React from 'react';
import { 
  CheckCircle2, ChevronRight, Sparkles, ShieldCheck, Clock, Users, Award, Leaf, 
  Smile, Heart, Eye, CheckSquare, Hotel, Star, Building2
} from 'lucide-react';

export default function HousekeepingServiceView({ onOpenQuote }) {
  const features = [
    { title: 'Spotless Cleanliness', desc: 'Thorough cleaning for guest-ready rooms.', icon: <Sparkles size={24} style={{ color: '#C8102E' }} /> },
    { title: 'Hygiene First', desc: 'Health and safety is our top priority.', icon: <ShieldCheck size={24} style={{ color: '#C8102E' }} /> },
    { title: 'On-Time Service', desc: 'Rooms ready on time, every time.', icon: <Clock size={24} style={{ color: '#C8102E' }} /> },
    { title: 'Trained Professionals', desc: 'Well-trained teams delivering with pride and care.', icon: <Users size={24} style={{ color: '#C8102E' }} /> },
    { title: 'Quality Assurance', desc: 'Regular inspections to maintain high standards.', icon: <Award size={24} style={{ color: '#C8102E' }} /> },
    { title: 'Sustainable Practices', desc: 'Eco-friendly products and responsible methods.', icon: <Leaf size={24} style={{ color: '#C8102E' }} /> }
  ];

  const processSteps = [
    { step: 1, title: 'Preparation', desc: 'We prepare our carts, supplies and schedule for the day.' },
    { step: 2, title: 'Room Entry', desc: 'Professional entry and room condition inspection.' },
    { step: 3, title: 'Cleaning & Sanitising', desc: 'Thorough cleaning of all areas with eco-friendly products.' },
    { step: 4, title: 'Restocking & Setup', desc: 'Restocking amenities and setting up room to perfection.' },
    { step: 5, title: 'Quality Check', desc: 'Supervisor inspection to ensure exceptional standards.' },
    { step: 6, title: 'Room Ready', desc: 'Guest-ready room delivered on time, every time.' }
  ];

  const stats = [
    { number: '150+', label: 'Hotels & Properties Serviced', icon: <Building2 size={24} /> },
    { number: '2,000+', label: 'Housekeeping Professionals', icon: <Users size={24} /> },
    { number: '1M+', label: 'Rooms Cleaned Annually', icon: <Hotel size={24} /> },
    { number: '98%', label: 'On-Time Room Readiness', icon: <Clock size={24} /> },
    { number: '4.8/5', label: 'Average Guest Satisfaction', icon: <Star size={24} /> }
  ];

  const standards = [
    { title: 'ISO 9001', label: 'Quality Management System' },
    { title: 'ISO 14001', label: 'Environmental Management' },
    { title: 'Safe Work Australia', label: 'Work Health & Safety Compliance' },
    { title: 'Aged Care Quality Standards', label: 'For Aged Care Facilities' }
  ];

  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '100vh' }}>
      
      {/* 1. Hero Section */}
      <div style={{ backgroundColor: '#FFFFFF', padding: '48px 0 64px', borderBottom: '1px solid #E5E9EC' }}>
        <div className="container">
          
          <div style={{ fontSize: '0.82rem', color: '#718096', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Home</span> &gt; <span>Services</span> &gt; <span style={{ color: '#1E252B', fontWeight: 700 }}>Housekeeping</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '1.5px', color: '#C8102E', textTransform: 'uppercase', marginBottom: '12px' }}>
                — HOUSEKEEPING SERVICES
              </div>
              <h1 style={{ fontSize: '3.2rem', fontWeight: 800, lineHeight: 1.12, color: '#1E252B', marginBottom: '18px' }}>
                Impeccable Rooms. <br />
                <span style={{ color: '#C8102E' }}>Exceptional Stays.</span>
              </h1>
              <p style={{ fontSize: '1rem', color: '#4A5568', lineHeight: 1.6, marginBottom: '24px' }}>
                At SWISZTA, we deliver superior housekeeping services that create clean, comfortable and welcoming environments for every guest, every time.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                {[
                  'Highest standards of cleanliness and hygiene',
                  'Trained, uniformed and professional staff',
                  'Attention to detail in every task',
                  'Consistent quality across every property'
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
                src="/images/housekeeping_hero.jpg" 
                alt="SWISZTA Housekeeping Attendant in Hotel Corridor" 
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

      {/* 3. Creating Comfort. Enhancing Experiences + We Care About */}
      <div className="container" style={{ padding: '80px 24px 64px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 0.9fr', gap: '32px', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '1.5px', color: '#C8102E', textTransform: 'uppercase', marginBottom: '8px' }}>
              — MORE THAN JUST CLEAN ROOMS
            </div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1E252B', lineHeight: 1.2, marginBottom: '16px' }}>
              Creating Comfort. <br /> Enhancing Experiences.
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#4A5568', lineHeight: 1.6, marginBottom: '24px' }}>
              Our housekeeping teams are the heart of your guest experience. We go beyond routine cleaning to create environments that reflect your brand's commitment to excellence.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Guest rooms, suites and extensions',
                'Public areas, corridors and back-of-house',
                'High-touch surface disinfection',
                'Turn-down service and special requests',
                'End-of-stay deep cleaning'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', fontWeight: 700, color: '#1E252B' }}>
                  <CheckCircle2 size={16} style={{ color: '#C8102E', flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ borderRadius: '16px', overflow: 'hidden', height: '340px', boxShadow: '0 8px 30px rgba(0,0,0,0.1)' }}>
            <img 
              src="/images/housekeeping_bedmaking.jpg" 
              alt="SWISZTA Housekeeper Preparing Luxury Hotel Suite Bed" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Right Card: We Care About */}
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '24px', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
            <div style={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '1px', color: '#C8102E', textTransform: 'uppercase', marginBottom: '16px' }}>
              WE CARE ABOUT
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { title: 'Guest Satisfaction', desc: 'Delighting guests with clean and comfortable spaces.', icon: <Smile size={18} style={{ color: '#C8102E' }} /> },
                { title: 'Health & Safety', desc: 'Following strict hygiene protocols and safety standards.', icon: <ShieldCheck size={18} style={{ color: '#C8102E' }} /> },
                { title: 'Environment', desc: 'Reducing impact through sustainable cleaning practices.', icon: <Leaf size={18} style={{ color: '#C8102E' }} /> },
                { title: 'Your Brand Standard', desc: 'Upholding your brand image in every detail.', icon: <Star size={18} style={{ color: '#C8102E' }} /> }
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#FFF0F2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {c.icon}
                  </div>
                  <div>
                    <h5 style={{ fontSize: '0.86rem', fontWeight: 800, color: '#1E252B' }}>{c.title}</h5>
                    <p style={{ fontSize: '0.74rem', color: '#718096', marginTop: '2px', lineHeight: 1.35 }}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. ISO & Standards Bar */}
      <div style={{ backgroundColor: '#FFFFFF', padding: '48px 0', borderTop: '1px solid #E5E9EC', borderBottom: '1px solid #E5E9EC' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '1px', color: '#C8102E', textTransform: 'uppercase', marginBottom: '4px' }}>
                OUR STANDARDS
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1E252B' }}>
                Cleanliness You Can Count On
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#718096', marginTop: '4px' }}>
                We follow internationally recognised standards and industry best practices to ensure the highest level of cleanliness.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {standards.map((st, i) => (
                <div key={i} style={{ backgroundColor: '#FAFAFA', borderRadius: '10px', border: '1px solid #E2E8F0', padding: '16px 20px', textAlign: 'center', minWidth: '140px' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 900, color: '#C8102E' }}>{st.title}</div>
                  <div style={{ fontSize: '0.72rem', color: '#657380', marginTop: '2px' }}>{st.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 5. Process Timeline */}
      <div style={{ backgroundColor: '#FAFAFA', padding: '72px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '2px', color: '#C8102E', textTransform: 'uppercase', marginBottom: '8px' }}>
              — OUR HOUSEKEEPING PROCESS —
            </div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1E252B' }}>
              6 Steps to Guest-Ready Perfection
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px' }}>
            {processSteps.map((p, idx) => (
              <div key={idx} style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid #E2E8F0',
                padding: '24px 14px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#FFF0F2',
                  color: '#C8102E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  fontSize: '0.88rem',
                  marginBottom: '12px'
                }}>
                  {p.step}
                </div>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#1E252B', marginBottom: '6px' }}>
                  {p.title}
                </h4>
                <p style={{ fontSize: '0.74rem', color: '#657380', lineHeight: 1.35 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. Dark Numbers Bar */}
      <div style={{ backgroundColor: '#111827', color: '#FFFFFF', padding: '60px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', textAlign: 'center' }}>
            {stats.map((st, i) => (
              <div key={i}>
                <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1, marginBottom: '6px' }}>
                  {st.number}
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#A0AEC0' }}>
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 7. Bottom Red CTA */}
      <div style={{ backgroundColor: '#C8102E', color: '#FFFFFF', padding: '36px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '4px' }}>
              Impeccable rooms. Happy guests.
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.9)' }}>
              Partner with SWISZTA for world-class housekeeping services.
            </p>
          </div>
          <button className="btn" onClick={onOpenQuote} style={{ backgroundColor: '#FFFFFF', color: '#C8102E', padding: '14px 28px', fontWeight: 800 }}>
            TALK TO OUR TEAM <ChevronRight size={16} />
          </button>
        </div>
      </div>

    </div>
  );
}
