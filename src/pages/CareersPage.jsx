import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, Send, CheckCircle2, ChevronRight, Award, Users, Heart, GraduationCap, ShieldCheck, Sparkles } from 'lucide-react';
import LeadershipTree from '../components/LeadershipTree';

export default function CareersPage() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [appliedRole, setAppliedRole] = useState(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const benefits = [
    {
      title: 'Growth & Training',
      desc: 'Accredited training programs via the SWISZTA Academy for fast career progression.',
      icon: <GraduationCap size={24} style={{ color: '#C8102E' }} />
    },
    {
      title: 'Competitive Pay',
      desc: 'Above-award wages, superannuation, and performance-based incentives.',
      icon: <Award size={24} style={{ color: '#C8102E' }} />
    },
    {
      title: 'Work-Life Balance',
      desc: 'Flexible roster schedules across Australia’s premier 5-star hotel properties.',
      icon: <Heart size={24} style={{ color: '#C8102E' }} />
    },
    {
      title: 'Inclusive Culture',
      desc: 'A diverse, supportive team environment where every culture and voice is celebrated.',
      icon: <Users size={24} style={{ color: '#C8102E' }} />
    }
  ];

  const openings = [
    { id: 1, title: 'Executive Housekeeper / Supervisor', location: 'Melbourne, VIC', type: 'Full Time', dept: 'Housekeeping', category: 'HOUSEKEEPING' },
    { id: 2, title: 'Commercial Laundry Operations Manager', location: 'Tullamarine, VIC', type: 'Full Time', dept: 'Laundry Logistics', category: 'LAUNDRY' },
    { id: 3, title: 'Hotel Maintenance Engineer', location: 'Sydney, NSW', type: 'Full Time', dept: 'Facilities', category: 'MAINTENANCE' },
    { id: 4, title: '5-Star Hotel Housekeeping Attendants', location: 'Brisbane & Gold Coast, QLD', type: 'Casual / Part Time', dept: 'Housekeeping', category: 'HOUSEKEEPING' },
    { id: 5, title: 'Front Desk Concierge Specialist', location: 'Melbourne, VIC', type: 'Full Time', dept: 'Guest Relations', category: 'CONCIERGE' },
    { id: 6, title: 'Senior Procurement Coordinator', location: 'Sydney, NSW', type: 'Full Time', dept: 'Supply Chain', category: 'PROCUREMENT' }
  ];

  const filteredOpenings = activeFilter === 'ALL' 
    ? openings 
    : openings.filter(o => o.category === activeFilter);

  const handleApply = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '100vh' }}>
      
      {/* 1. Hero Header Banner with Team Image */}
      <div 
        style={{ 
          position: 'relative',
          backgroundImage: `url('/images/swiszta_team.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '480px',
          display: 'flex',
          alignItems: 'center',
          color: '#FFFFFF'
        }}
      >
        <div 
          style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'linear-gradient(90deg, rgba(17,24,39,0.92) 0%, rgba(17,24,39,0.78) 55%, rgba(17,24,39,0.4) 100%)' 
          }} 
        />

        <div className="container" style={{ position: 'relative', zIndex: 10, padding: '60px 24px' }}>
          <div style={{ maxWidth: '640px' }}>
            <div style={{ 
              fontSize: '0.84rem', 
              fontWeight: 800, 
              letterSpacing: '2px', 
              color: '#C8102E', 
              textTransform: 'uppercase', 
              marginBottom: '12px' 
            }}>
              — CAREERS AT SWISZTA
            </div>

            <h1 style={{ fontSize: '3.2rem', fontWeight: 800, lineHeight: 1.12, color: '#FFFFFF', marginBottom: '18px' }}>
              Build Your Future <br />
              <span style={{ color: '#C8102E' }}>in Hospitality.</span>
            </h1>

            <p style={{ fontSize: '1.05rem', color: '#E2E8F0', lineHeight: 1.6, marginBottom: '28px' }}>
              Join Australia’s leading hotel and support services team. We invest in your skills, provide accredited training, and empower you to deliver world-class guest experiences.
            </p>

            <a 
              href="#openings" 
              className="btn btn-red"
              style={{ padding: '14px 28px' }}
            >
              EXPLORE OPENINGS <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* 2. Why Work With Us Section */}
      <div style={{ backgroundColor: '#FFFFFF', padding: '72px 0 84px', borderBottom: '1px solid #E5E9EC' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
            <div style={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '1.5px', color: '#C8102E', textTransform: 'uppercase', marginBottom: '8px' }}>
              — WHY JOIN SWISZTA?
            </div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#1E252B' }}>
              Empowering People. Elevating Careers.
            </h2>
            <p style={{ fontSize: '0.94rem', color: '#657380', marginTop: '8px' }}>
              We believe our people are our greatest strength. Here is why hospitality professionals love working with SWISZTA.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {benefits.map((b, i) => (
              <div 
                key={i}
                style={{
                  backgroundColor: '#FAFAFA',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  padding: '28px 20px',
                  textAlign: 'center',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
                }}
              >
                <div style={{ 
                  width: '52px', 
                  height: '52px', 
                  borderRadius: '50%', 
                  backgroundColor: '#FFF0F2', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 16px' 
                }}>
                  {b.icon}
                </div>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#1E252B', marginBottom: '8px' }}>
                  {b.title}
                </h4>
                <p style={{ fontSize: '0.82rem', color: '#657380', lineHeight: 1.45 }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* 3. Culture & Team Banner */}
      <div style={{ backgroundColor: '#FAFAFA', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '48px', alignItems: 'center' }}>
            
            <div style={{ borderRadius: '16px', overflow: 'hidden', height: '380px', boxShadow: '0 12px 36px rgba(0,0,0,0.1)' }}>
              <img 
                src="/images/contact_hero.png" 
                alt="SWISZTA Hotel Staff Teamwork" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '1.5px', color: '#C8102E', textTransform: 'uppercase', marginBottom: '8px' }}>
                — LIFE AT SWISZTA
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1E252B', lineHeight: 1.2, marginBottom: '16px' }}>
                A Culture Built on Excellence &amp; Care
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#4A5568', lineHeight: 1.6, marginBottom: '24px' }}>
                From your very first day, you'll be part of an encouraging team environment that values teamwork, safety and performance.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                {[
                  'Over 2,000+ dedicated team members across Australia',
                  'Recognised workplace safety and wellness standards',
                  'Clear pathways from Entry Level to Management'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', fontWeight: 700, color: '#1E252B' }}>
                    <CheckCircle2 size={18} style={{ color: '#C8102E', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 4. Current Openings Section */}
      <div id="openings" style={{ backgroundColor: '#FFFFFF', padding: '80px 0 100px', borderTop: '1px solid #E5E9EC' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
            <div style={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '1.5px', color: '#C8102E', textTransform: 'uppercase', marginBottom: '8px' }}>
              — CURRENT OPPORTUNITIES
            </div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#1E252B' }}>
              Explore Open Positions
            </h2>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '36px' }}>
            {['ALL', 'HOUSEKEEPING', 'LAUNDRY', 'MAINTENANCE', 'CONCIERGE', 'PROCUREMENT'].map((cat) => (
              <button
                key={cat}
                style={{
                  padding: '8px 18px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  letterSpacing: '0.5px',
                  border: activeFilter === cat ? '1px solid #C8102E' : '1px solid #E2E8F0',
                  backgroundColor: activeFilter === cat ? '#C8102E' : '#FAFAFA',
                  color: activeFilter === cat ? '#FFFFFF' : '#4A5568',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Job List */}
          <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {filteredOpenings.map((job) => (
              <div 
                key={job.id} 
                style={{ 
                  backgroundColor: '#FAFAFA', 
                  padding: '24px 28px', 
                  borderRadius: '12px', 
                  border: '1px solid #E2E8F0', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  flexWrap: 'wrap', 
                  gap: '16px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#1E252B', marginBottom: '6px' }}>{job.title}</h3>
                  <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '0.82rem', color: '#657380' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <MapPin size={14} style={{ color: '#C8102E' }} /> {job.location}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Clock size={14} style={{ color: '#C8102E' }} /> {job.type}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Briefcase size={14} style={{ color: '#C8102E' }} /> {job.dept}
                    </span>
                  </div>
                </div>
                
                <button 
                  className="btn btn-red" 
                  onClick={() => { setAppliedRole(job.title); setSubmitted(false); }}
                  style={{ padding: '10px 20px', fontSize: '0.8rem' }}
                >
                  APPLY NOW <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>

          {/* Quick Application Box */}
          {appliedRole && (
            <div style={{ maxWidth: '800px', margin: '40px auto 0', backgroundColor: '#FFFFFF', padding: '36px', borderRadius: '16px', border: '2px solid #C8102E', boxShadow: '0 12px 36px rgba(0,0,0,0.08)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <CheckCircle2 size={56} style={{ color: '#C8102E', margin: '0 auto 16px' }} />
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '8px' }}>Application Received!</h3>
                  <p style={{ color: '#657380' }}>
                    Thank you <strong>{applicantName}</strong> for applying for <strong>{appliedRole}</strong>. Our HR recruitment team will review your application and reach out soon.
                  </p>
                  <button className="btn btn-outline-dark" onClick={() => setAppliedRole(null)} style={{ marginTop: '20px' }}>
                    CLOSE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApply}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#1E252B' }}>Apply for: <span style={{ color: '#C8102E' }}>{appliedRole}</span></h3>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#1E252B', marginBottom: '6px' }}>Full Name *</label>
                      <input 
                        type="text" 
                        required 
                        value={applicantName} 
                        onChange={(e) => setApplicantName(e.target.value)} 
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #CBD5E0', fontSize: '0.88rem' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#1E252B', marginBottom: '6px' }}>Email Address *</label>
                      <input 
                        type="email" 
                        required 
                        value={applicantEmail} 
                        onChange={(e) => setApplicantEmail(e.target.value)} 
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #CBD5E0', fontSize: '0.88rem' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#1E252B', marginBottom: '6px' }}>Phone Number *</label>
                      <input 
                        type="tel" 
                        required 
                        value={applicantPhone} 
                        onChange={(e) => setApplicantPhone(e.target.value)} 
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #CBD5E0', fontSize: '0.88rem' }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#1E252B', marginBottom: '6px' }}>Hospitality Experience Summary</label>
                    <textarea 
                      rows="3" 
                      placeholder="Briefly state your relevant experience..."
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #CBD5E0', fontSize: '0.88rem' }}
                    ></textarea>
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button type="submit" className="btn btn-red">
                      SUBMIT APPLICATION <Send size={16} />
                    </button>
                    <button type="button" className="btn btn-outline-dark" onClick={() => setAppliedRole(null)}>
                      CANCEL
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

        </div>
      </div>

      {/* Leadership Section */}
      <div style={{ backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0', padding: '20px 0' }}>
        <LeadershipTree />
      </div>

    </div>
  );
}
