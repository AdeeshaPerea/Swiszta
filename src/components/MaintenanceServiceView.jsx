import React from 'react';
import { 
  CheckCircle2, ChevronRight, ShieldCheck, Wrench, Calendar, Clock, DollarSign, Award, 
  Wind, Zap, Droplet, Paintbrush, Cog, TreePine, Eye, TrendingUp, CheckSquare, Building2, Globe, Users
} from 'lucide-react';

export default function MaintenanceServiceView({ onOpenQuote }) {
  const features = [
    { title: 'Safety First', desc: 'We prioritise safety in every job, every time.', icon: <ShieldCheck size={24} style={{ color: '#C8102E' }} /> },
    { title: 'Expert Technicians', desc: 'Highly trained and experienced across all trades.', icon: <Wrench size={24} style={{ color: '#C8102E' }} /> },
    { title: 'Preventive Care', desc: 'Proactive maintenance to prevent costly breakdowns.', icon: <Calendar size={24} style={{ color: '#C8102E' }} /> },
    { title: '24/7 Support', desc: "We're here when you need us most.", icon: <Clock size={24} style={{ color: '#C8102E' }} /> },
    { title: 'Cost Efficient', desc: 'Smart solutions that reduce costs and maximise value.', icon: <DollarSign size={24} style={{ color: '#C8102E' }} /> },
    { title: 'Quality Assured', desc: 'Quality workmanship backed by proven processes.', icon: <Award size={24} style={{ color: '#C8102E' }} /> }
  ];

  const maintenanceSolutions = [
    { title: 'HVAC Maintenance', desc: 'Heating, ventilation and air conditioning systems servicing and repair.', icon: <Wind size={22} />, image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80' },
    { title: 'Electrical Services', desc: 'Installation, inspection and maintenance of electrical systems.', icon: <Zap size={22} />, image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' },
    { title: 'Plumbing Services', desc: 'Plumbing repairs, maintenance and preventive solutions for all systems.', icon: <Droplet size={22} />, image: 'https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&w=600&q=80' },
    { title: 'Building Maintenance', desc: 'General repairs, painting, plastering and carpentry services.', icon: <Paintbrush size={22} />, image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80' },
    { title: 'Equipment Maintenance', desc: 'Planned and reactive maintenance for all critical equipment.', icon: <Cog size={22} />, image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80' },
    { title: 'Grounds Maintenance', desc: 'Garden care, landscaping and outdoor asset maintenance.', icon: <TreePine size={22} />, image: 'https://images.unsplash.com/photo-1558904541-efa8c196b27d?auto=format&fit=crop&w=600&q=80' }
  ];

  const processSteps = [
    { step: 1, title: 'ASSESS', desc: 'We assess your needs and inspect your assets.' },
    { step: 2, title: 'PLAN', desc: 'We create a customised maintenance plan.' },
    { step: 3, title: 'EXECUTE', desc: 'Our experts deliver scheduled maintenance.' },
    { step: 4, title: 'MONITOR', desc: 'We monitor performance and ensure compliance.' },
    { step: 5, title: 'OPTIMISE', desc: 'We provide reports and recommend improvements.' },
    { step: 6, title: 'SUPPORT', desc: 'Ongoing support to keep your operations running.' }
  ];

  const stats = [
    { number: '150+', label: 'Hotels & Properties Serviced', icon: <Building2 size={24} /> },
    { number: '12', label: 'Regions Worldwide', icon: <Globe size={24} /> },
    { number: '2,000+', label: 'Trained Professionals', icon: <Users size={24} /> },
    { number: '24/7', label: 'Emergency Support', icon: <Clock size={24} /> },
    { number: '100%', label: 'Safety & Compliance Commitment', icon: <ShieldCheck size={24} /> }
  ];

  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '100vh' }}>
      
      {/* 1. Hero Section */}
      <div style={{ backgroundColor: '#FFFFFF', padding: '48px 0 64px', borderBottom: '1px solid #E5E9EC' }}>
        <div className="container">
          
          <div style={{ fontSize: '0.82rem', color: '#718096', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Home</span> &gt; <span>Services</span> &gt; <span style={{ color: '#1E252B', fontWeight: 700 }}>Maintenance Services</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '1.5px', color: '#C8102E', textTransform: 'uppercase', marginBottom: '12px' }}>
                — MAINTENANCE SERVICES
              </div>
              <h1 style={{ fontSize: '3.2rem', fontWeight: 800, lineHeight: 1.12, color: '#1E252B', marginBottom: '18px' }}>
                Reliable Maintenance. <br />
                <span style={{ color: '#C8102E' }}>Seamless Operations.</span>
              </h1>
              <p style={{ fontSize: '1rem', color: '#4A5568', lineHeight: 1.6, marginBottom: '24px' }}>
                SWISZTA provides comprehensive maintenance solutions to ensure your property, facilities and assets operate safely, efficiently and without interruption.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                {[
                  'Preventive and corrective maintenance',
                  'Skilled and certified technicians',
                  'Minimised downtime and disruption',
                  'Compliance, safety and quality assured'
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
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80" 
                alt="Maintenance Technician Inspecting Facility Equipment" 
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

      {/* 3. OUR COMPREHENSIVE MAINTENANCE SOLUTIONS (6 Cards Grid) */}
      <div className="container" style={{ padding: '80px 24px 64px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '1.5px', color: '#C8102E', textTransform: 'uppercase', marginBottom: '8px' }}>
            — OUR COMPREHENSIVE MAINTENANCE SOLUTIONS —
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1E252B' }}>
            Complete Care for Your Property
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px' }}>
          {maintenanceSolutions.map((ms, idx) => (
            <div 
              key={idx}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid #E2E8F0',
                overflow: 'hidden',
                boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ height: '120px', overflow: 'hidden', position: 'relative' }}>
                <img src={ms.image} alt={ms.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute',
                  bottom: '-16px',
                  left: '16px',
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  color: '#C8102E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                }}>
                  {ms.icon}
                </div>
              </div>
              <div style={{ padding: '24px 12px 16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h4 style={{ fontSize: '0.86rem', fontWeight: 800, color: '#1E252B', marginBottom: '6px' }}>
                  {ms.title}
                </h4>
                <p style={{ fontSize: '0.74rem', color: '#657380', lineHeight: 1.35, marginBottom: '14px', flex: 1 }}>
                  {ms.desc}
                </p>
                <button 
                  onClick={onOpenQuote}
                  style={{
                    border: 'none',
                    background: 'none',
                    color: '#C8102E',
                    fontWeight: 800,
                    fontSize: '0.75rem',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: 0
                  }}
                >
                  LEARN MORE <ChevronRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Your Property. Our Priority + Image */}
      <div style={{ backgroundColor: '#FFFFFF', padding: '64px 0', borderTop: '1px solid #E5E9EC', borderBottom: '1px solid #E5E9EC' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '1.5px', color: '#C8102E', textTransform: 'uppercase', marginBottom: '8px' }}>
                — WHY PARTNER WITH SWISZTA?
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1E252B', lineHeight: 1.2, marginBottom: '16px' }}>
                Your Property. Our Priority.
              </h2>
              <p style={{ fontSize: '0.94rem', color: '#4A5568', lineHeight: 1.6, marginBottom: '24px' }}>
                We deliver reliable, compliant and cost-effective maintenance services tailored to the unique needs of hotels, healthcare facilities and commercial properties.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Single point of contact',
                  'Customised maintenance plans',
                  'Detailed reporting and transparency',
                  'Compliance with Australian standards'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', fontWeight: 700, color: '#1E252B' }}>
                    <CheckCircle2 size={18} style={{ color: '#C8102E', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ borderRadius: '16px', overflow: 'hidden', height: '360px', boxShadow: '0 8px 30px rgba(0,0,0,0.1)' }}>
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80" 
                alt="Technician testing HVAC electrical unit with multimeter" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 5. Our Maintenance Process Timeline */}
      <div style={{ backgroundColor: '#FAFAFA', padding: '72px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '2px', color: '#C8102E', textTransform: 'uppercase', marginBottom: '8px' }}>
              — OUR MAINTENANCE PROCESS —
            </div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1E252B' }}>
              6 Steps to Reliable Operations
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

      {/* 6. Dark Numbers Bar with Red CTA Box */}
      <div style={{ backgroundColor: '#111827', color: '#FFFFFF', padding: '48px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr) 1.5fr', gap: '16px', alignItems: 'center' }}>
            {stats.map((st, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1, marginBottom: '6px' }}>
                  {st.number}
                </div>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#A0AEC0' }}>
                  {st.label}
                </div>
              </div>
            ))}

            {/* Red Box on Right */}
            <div style={{ backgroundColor: '#C8102E', borderRadius: '12px', padding: '24px 20px', textAlign: 'center' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '6px' }}>
                Need a reliable maintenance partner?
              </h4>
              <p style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.9)', marginBottom: '14px' }}>
                Let us take care of your facility, so you can focus on delivering exceptional hospitality.
              </p>
              <button 
                onClick={onOpenQuote}
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#C8102E',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '10px 18px',
                  fontWeight: 800,
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                LET'S TALK <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
