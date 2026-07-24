import React, { useState } from 'react';
import { 
  Sparkles, Shirt, UtensilsCrossed, Wrench, ConciergeBell, ShoppingCart, 
  ChevronRight, CheckCircle2, ShieldCheck, Clock, Users, Award, Leaf, 
  Smile, Star, ShieldAlert, Heart, Calendar, PhoneCall, Search, 
  ClipboardCheck, BedDouble, Check
} from 'lucide-react';

export default function ServicesPage({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('housekeeping');

  const serviceTabs = [
    { id: 'housekeeping', name: 'Housekeeping', icon: Sparkles },
    { id: 'laundry', name: 'Laundry Services', icon: Shirt },
    { id: 'catering', name: 'Catering & F&B', icon: UtensilsCrossed },
    { id: 'maintenance', name: 'Maintenance', icon: Wrench },
    { id: 'concierge', name: 'Concierge', icon: ConciergeBell },
    { id: 'procurement', name: 'Procurement', icon: ShoppingCart }
  ];

  return (
    <div className="services-page-root">
      {/* Sub-header / Service Selector Tabs */}
      <div style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E9EC', padding: '12px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          {/* Breadcrumb */}
          <div style={{ fontSize: '0.82rem', color: '#718096', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Home</span> <ChevronRight size={12} />
            <span>Services</span> <ChevronRight size={12} />
            <span style={{ color: '#C8102E', fontWeight: 600, textTransform: 'capitalize' }}>{activeTab}</span>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
            {serviceTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
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
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon size={14} />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 1. Hero Section for Services */}
      <section 
        className="hero-section" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1920&q=80')`,
          minHeight: '500px',
          padding: '50px 0 120px'
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
                HOUSEKEEPING SERVICES
              </div>

              <h1 className="hero-title" style={{ color: '#1E252B', fontSize: '2.8rem', lineHeight: '1.1', marginBottom: '16px' }}>
                Impeccable Rooms. <br />
                <span style={{ color: '#C8102E' }}>Exceptional Stays.</span>
              </h1>

              <p style={{ color: '#4A5568', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '20px' }}>
                At SWISZTA, we deliver superior housekeeping services that create clean, comfortable and welcoming environments for every guest, every time.
              </p>

              {/* 4 Checklist Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                {[
                  'Highest standards of cleanliness and hygiene',
                  'Trained, uniformed and professional staff',
                  'Attention to detail in every task',
                  'Consistent quality across every property'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#2D3748' }}>
                    <CheckCircle2 size={16} style={{ color: '#C8102E', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button className="btn btn-red" onClick={onOpenQuote}>
                REQUEST A QUOTE <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Floating 6 Feature Cards Row */}
      <div className="container" style={{ position: 'relative', zIndex: 30, marginTop: '-60px', marginBottom: '70px' }}>
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
                    width: '46px',
                    height: '46px',
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

      {/* 3. Middle Section - MORE THAN JUST CLEAN ROOMS */}
      <section style={{ padding: '20px 0 80px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: '32px', alignItems: 'center' }}>
            {/* Left Column */}
            <div>
              <span className="about-subtitle" style={{ fontSize: '0.78rem' }}>MORE THAN JUST CLEAN ROOMS —</span>
              <h2 className="about-heading" style={{ fontSize: '2.2rem', marginBottom: '16px' }}>
                Creating Comfort. <br />
                Enhancing Experiences.
              </h2>
              <p style={{ fontSize: '0.88rem', color: '#4A5568', lineHeight: '1.6', marginBottom: '20px' }}>
                Our housekeeping teams are the heart of your guest experience. We go beyond routine cleaning to create environments that reflect your brand's commitment to excellence.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                {[
                  'Guest rooms, suites and extensions',
                  'Public areas, corridors and back-of-house',
                  'High-touch surface disinfection',
                  'Turn-down service and special requests',
                  'End-of-stay deep cleaning'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#2D3748' }}>
                    <CheckCircle2 size={16} style={{ color: '#C8102E', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button className="btn btn-outline-dark" onClick={onOpenQuote}>
                VIEW ALL SERVICES <ChevronRight size={14} />
              </button>
            </div>

            {/* Middle Image */}
            <div style={{ borderRadius: '12px', overflow: 'hidden', height: '380px', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" 
                alt="Housekeeper vacuuming luxury hotel suite" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Right Value List - WE CARE ABOUT */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '1.5px', color: '#C8102E', textTransform: 'uppercase' }}>
                WE CARE ABOUT —
              </span>

              {[
                { title: 'Guest Satisfaction', desc: 'Delighting guests with clean and comfortable spaces.', icon: Smile },
                { title: 'Health & Safety', desc: 'Following strict hygiene protocols and safety standards.', icon: ShieldCheck },
                { title: 'Environment', desc: 'Reducing impact through sustainable cleaning practices.', icon: Leaf },
                { title: 'Your Brand Standard', desc: 'Upholding your brand image in every detail.', icon: Star }
              ].map((val, idx) => {
                const IconC = val.icon;
                return (
                  <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(200, 16, 46, 0.08)', color: '#C8102E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <IconC size={18} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1E252B' }}>{val.title}</h4>
                      <p style={{ fontSize: '0.78rem', color: '#718096', lineHeight: '1.35', marginTop: '2px' }}>{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Standards & Certifications Bar */}
      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          <div style={{ background: '#F8F9FA', borderRadius: '16px', border: '1px solid #E5E9EC', padding: '32px', display: 'grid', gridTemplateColumns: '0.8fr 1.2fr 2fr', gap: '32px', alignItems: 'center' }}>
            {/* Towels Image */}
            <div style={{ height: '140px', borderRadius: '12px', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80" alt="Clean fluffy towels" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Heading */}
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#C8102E', letterSpacing: '1px', textTransform: 'uppercase' }}>OUR STANDARDS —</span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '6px 0 8px', color: '#1E252B' }}>Cleanliness You Can Count On</h3>
              <p style={{ fontSize: '0.8rem', color: '#718096', lineHeight: '1.4' }}>
                We follow internationally recognised standards and industry best practices to ensure the highest level of cleanliness and guest comfort.
              </p>
            </div>

            {/* Badges Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
              {[
                { name: 'ISO 9001', sub: 'Quality Management System', icon: Award },
                { name: 'ISO 14001', sub: 'Environmental Management', icon: Leaf },
                { name: 'Safe Work Australia', sub: 'Work Health & Safety Compliance', icon: ShieldCheck },
                { name: 'Aged Care Quality Standards', sub: '(For Aged Care Facilities)', icon: Users }
              ].map((badge, idx) => {
                const BIcon = badge.icon;
                return (
                  <div key={idx} style={{ background: '#FFFFFF', border: '1px solid #E5E9EC', borderRadius: '8px', padding: '16px 10px', textAlign: 'center' }}>
                    <BIcon size={24} style={{ color: '#C8102E', margin: '0 auto 8px' }} />
                    <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#1E252B' }}>{badge.name}</div>
                    <div style={{ fontSize: '0.68rem', color: '#718096', marginTop: '4px', lineHeight: '1.2' }}>{badge.sub}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Step-by-Step Housekeeping Process */}
      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
              OUR HOUSEKEEPING PROCESS
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '8px 0' }}>
              <div style={{ width: '6px', height: '6px', background: '#C8102E', transform: 'rotate(45deg)' }}></div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px', position: 'relative' }}>
            {[
              { step: '1', title: 'Preparation', desc: 'We prepare our carts, supplies and schedule for the day.', icon: ShoppingCart },
              { step: '2', title: 'Room Entry', desc: 'Professional entry and room condition inspection.', icon: ClipboardCheck },
              { step: '3', title: 'Cleaning & Sanitising', desc: 'Thorough cleaning of all areas with eco-friendly products.', icon: BedDouble },
              { step: '4', title: 'Restocking & Setup', desc: 'Restocking amenities and setting up room to perfection.', icon: Shirt },
              { step: '5', title: 'Quality Check', desc: 'Supervisor inspection to ensure exceptional standards.', icon: Search },
              { step: '6', title: 'Room Ready', desc: 'Guest-ready room delivered on time, every time.', icon: CheckCircle2 }
            ].map((proc, idx) => {
              const PIcon = proc.icon;
              return (
                <div key={idx} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ position: 'relative', marginBottom: '16px' }}>
                    <div style={{ width: '64px', height: '64px', borderRadius: '50%', border: '2px solid #E5E9EC', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4A5568' }}>
                      <PIcon size={26} />
                    </div>
                    <div style={{ position: 'absolute', bottom: '-4px', right: '-4px', width: '22px', height: '22px', borderRadius: '50%', background: '#C8102E', color: '#FFFFFF', fontSize: '0.72rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {proc.step}
                    </div>
                  </div>

                  <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1E252B', marginBottom: '6px' }}>{proc.title}</h4>
                  <p style={{ fontSize: '0.74rem', color: '#718096', lineHeight: '1.35' }}>{proc.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Dark Stats Bar */}
      <section style={{ background: '#1B2228', color: '#FFFFFF', padding: '36px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#C8102E' }}>150+</div>
              <div style={{ fontSize: '0.78rem', color: '#A0AEC0', fontWeight: 600, marginTop: '2px' }}>Hotels & Properties Serviced</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#C8102E' }}>2,000+</div>
              <div style={{ fontSize: '0.78rem', color: '#A0AEC0', fontWeight: 600, marginTop: '2px' }}>Housekeeping Professionals</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#C8102E' }}>1M+</div>
              <div style={{ fontSize: '0.78rem', color: '#A0AEC0', fontWeight: 600, marginTop: '2px' }}>Rooms Cleaned Annually</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#C8102E' }}>98%</div>
              <div style={{ fontSize: '0.78rem', color: '#A0AEC0', fontWeight: 600, marginTop: '2px' }}>On-Time Room Readiness</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#C8102E' }}>4.8/5</div>
              <div style={{ fontSize: '0.78rem', color: '#A0AEC0', fontWeight: 600, marginTop: '2px' }}>Average Guest Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Red Callout Footer Banner */}
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
  );
}
