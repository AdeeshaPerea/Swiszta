import React, { useState } from 'react';
import { Phone, Mail, MapPin, Globe, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    agree: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const locations = [
    {
      city: 'Melbourne (Head Office)',
      address: '1/42 Global Drive, Tullamarine VIC 3049 Australia',
      image: '/images/melbourne.png'
    },
    {
      city: 'Sydney',
      address: "Level 23, 1 O'Connell Street Sydney NSW 2000 Australia",
      image: '/images/sydney.png'
    },
    {
      city: 'Brisbane',
      address: 'Level 11, 300 Queen Street Brisbane QLD 4000 Australia',
      image: '/images/brisbane.png'
    },
    {
      city: 'Adelaide',
      address: 'Level 8, 91 King William Street Adelaide SA 5000 Australia',
      image: '/images/adelaide.png'
    },
    {
      city: 'Auckland',
      address: 'Level 5, 205 Queen Street Auckland CBD 1010 New Zealand',
      image: '/images/auckland.png'
    }
  ];

  return (
    <div style={{ backgroundColor: '#F8F9FA', minHeight: '100vh' }}>
      {/* Top Hero Section with Dark Luxury Hotel Background */}
      <div 
        style={{
          position: 'relative',
          backgroundImage: `linear-gradient(to right, rgba(12, 16, 20, 0.88) 0%, rgba(12, 16, 20, 0.68) 55%, rgba(12, 16, 20, 0.45) 100%), url('/images/contact_hero.png')`,
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
              LET'S CONNECT
            </div>
            
            <h1 style={{ fontSize: '3.2rem', fontWeight: 800, lineHeight: 1.12, marginBottom: '18px', color: '#FFFFFF', letterSpacing: '-0.5px' }}>
              We'd Love to <br />
              <span style={{ color: '#C8102E' }}>Hear From You.</span>
            </h1>

            <p style={{ fontSize: '1.05rem', color: '#CBD5E0', lineHeight: 1.6 }}>
              Whether you have a question, need more information, or want to partner with us, our team is here to help. Let's start a conversation.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="container" style={{ padding: '48px 24px 80px' }}>
        <div className="contact-grid">

          {/* Left Column: GET IN TOUCH */}
          <div className="contact-col-touch">
            <h3 style={{
              fontSize: '0.85rem',
              fontWeight: 800,
              letterSpacing: '1.5px',
              color: '#C8102E',
              textTransform: 'uppercase',
              marginBottom: '24px'
            }}>
              GET IN TOUCH
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Phone */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: '#FFF0F2',
                  border: '1px solid rgba(200, 16, 46, 0.15)',
                  color: '#C8102E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Phone size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1E252B' }}>Phone</h4>
                  <a href="tel:1300794477" style={{ fontSize: '1.05rem', fontWeight: 800, color: '#1E252B', display: 'block', marginTop: '2px' }}>
                    1300 794 477
                  </a>
                  <p style={{ fontSize: '0.8rem', color: '#718096', marginTop: '2px' }}>
                    Mon – Fri: 8:30am – 5:30pm AEST
                  </p>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: '#FFF0F2',
                  border: '1px solid rgba(200, 16, 46, 0.15)',
                  color: '#C8102E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Mail size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1E252B' }}>Email</h4>
                  <a href="mailto:info@swiszta.com" style={{ fontSize: '0.95rem', fontWeight: 700, color: '#C8102E', display: 'block', marginTop: '2px' }}>
                    info@swiszta.com
                  </a>
                  <p style={{ fontSize: '0.8rem', color: '#718096', marginTop: '2px' }}>
                    We aim to respond within 24 hours.
                  </p>
                </div>
              </div>

              {/* Head Office */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: '#FFF0F2',
                  border: '1px solid rgba(200, 16, 46, 0.15)',
                  color: '#C8102E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1E252B' }}>Head Office</h4>
                  <p style={{ fontSize: '0.88rem', color: '#4A5568', marginTop: '2px', lineHeight: 1.4 }}>
                    1/42 Global Drive,<br />
                    Tullamarine VIC 3049, Australia
                  </p>
                </div>
              </div>

              {/* Website */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: '#FFF0F2',
                  border: '1px solid rgba(200, 16, 46, 0.15)',
                  color: '#C8102E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Globe size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1E252B' }}>Website</h4>
                  <a href="https://www.swiszta.com" target="_blank" rel="noreferrer" style={{ fontSize: '0.88rem', color: '#4A5568', marginTop: '2px', display: 'block' }}>
                    www.swiszta.com
                  </a>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div style={{ marginTop: '36px' }}>
              <h4 style={{
                fontSize: '0.8rem',
                fontWeight: 800,
                letterSpacing: '1px',
                color: '#C8102E',
                textTransform: 'uppercase',
                marginBottom: '14px'
              }}>
                FOLLOW US
              </h4>
              <div style={{ display: 'flex', gap: '12px' }}>
                {/* LinkedIn */}
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-circle-btn">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>
                {/* Facebook */}
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="social-circle-btn">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-circle-btn">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                {/* YouTube */}
                <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="social-circle-btn">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Middle Column: SEND US A MESSAGE */}
          <div className="contact-col-message">
            <h3 style={{
              fontSize: '0.85rem',
              fontWeight: 800,
              letterSpacing: '1.5px',
              color: '#C8102E',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              SEND US A MESSAGE
            </h3>

            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              border: '1px solid #E2E8F0',
              padding: '32px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
            }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 10px' }}>
                  <CheckCircle2 size={56} style={{ color: '#C8102E', margin: '0 auto 16px' }} />
                  <h4 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1E252B', marginBottom: '8px' }}>
                    Message Sent Successfully!
                  </h4>
                  <p style={{ color: '#657380', fontSize: '0.95rem', marginBottom: '24px' }}>
                    Thank you <strong>{formData.name}</strong>. Our client management team will respond to your inquiry shortly.
                  </p>
                  <button 
                    className="btn btn-red" 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', company: '', email: '', phone: '', subject: '', message: '', agree: false });
                    }}
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Row 1 */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <input 
                        type="text" 
                        required 
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '6px',
                          border: '1px solid #CBD5E0',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                    <div>
                      <input 
                        type="text" 
                        required 
                        placeholder="Company / Organization *"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '6px',
                          border: '1px solid #CBD5E0',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <input 
                        type="email" 
                        required 
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '6px',
                          border: '1px solid #CBD5E0',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                    <div>
                      <input 
                        type="tel" 
                        required 
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '6px',
                          border: '1px solid #CBD5E0',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div style={{ marginBottom: '16px' }}>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '6px',
                        border: '1px solid #CBD5E0',
                        fontSize: '0.9rem',
                        color: formData.subject ? '#1E252B' : '#718096',
                        backgroundColor: '#FFFFFF',
                        outline: 'none'
                      }}
                    >
                      <option value="">Subject *</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Hotel Housekeeping">Hotel Housekeeping Services</option>
                      <option value="Laundry Services">Laundry & Linen Services</option>
                      <option value="Maintenance & Facilities">Maintenance & Facilities</option>
                      <option value="Catering & F&B">Catering & F&B Management</option>
                      <option value="Careers">Careers & Recruitment</option>
                    </select>
                  </div>

                  {/* Row 4 */}
                  <div style={{ marginBottom: '20px' }}>
                    <textarea 
                      required 
                      rows={5}
                      placeholder="Your Message *"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '6px',
                        border: '1px solid #CBD5E0',
                        fontSize: '0.9rem',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  {/* Bottom Controls */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#4A5568', cursor: 'pointer' }}>
                      <input 
                        type="checkbox" 
                        required 
                        checked={formData.agree}
                        onChange={(e) => setFormData({...formData, agree: e.target.checked})}
                        style={{ accentColor: '#C8102E', width: '16px', height: '16px' }}
                      />
                      <span>I agree to the <a href="#privacy" style={{ color: '#C8102E', fontWeight: 700 }}>Privacy Policy.</a></span>
                    </label>

                    <button 
                      type="submit" 
                      style={{
                        backgroundColor: '#C8102E',
                        color: '#FFFFFF',
                        padding: '12px 28px',
                        borderRadius: '6px',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 4px 12px rgba(200, 16, 46, 0.25)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      SEND MESSAGE <ChevronRight size={16} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: OUR OFFICES */}
          <div className="contact-col-offices">
            <h3 style={{
              fontSize: '0.85rem',
              fontWeight: 800,
              letterSpacing: '1.5px',
              color: '#C8102E',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              OUR OFFICES
            </h3>

            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              border: '1px solid #E2E8F0',
              padding: '20px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {locations.map((loc, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <img 
                      src={loc.image} 
                      alt={loc.city} 
                      style={{
                        width: '76px',
                        height: '52px',
                        borderRadius: '6px',
                        objectFit: 'cover',
                        flexShrink: 0,
                        border: '1px solid #E2E8F0'
                      }}
                    />
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <MapPin size={14} style={{ color: '#C8102E', flexShrink: 0 }} />
                        <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#1E252B' }}>
                          {loc.city}
                        </h4>
                      </div>
                      <p style={{ fontSize: '0.78rem', color: '#657380', marginTop: '2px', lineHeight: 1.35 }}>
                        {loc.address}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Locations Button */}
              <div style={{ marginTop: '24px', textAlign: 'center' }}>
                <button
                  onClick={() => alert('SWISZTA operates offices in Melbourne, Sydney, Brisbane, Adelaide, and Auckland.')}
                  style={{
                    width: '100%',
                    padding: '10px 16px',
                    borderRadius: '6px',
                    border: '1px solid #E2E8F0',
                    backgroundColor: '#FFFFFF',
                    color: '#1E252B',
                    fontWeight: 700,
                    fontSize: '0.78rem',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#C8102E';
                    e.currentTarget.style.color = '#C8102E';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E2E8F0';
                    e.currentTarget.style.color = '#1E252B';
                  }}
                >
                  VIEW ALL LOCATIONS <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Team Banner & Quote Block - Full width across Column 1 & Column 2 */}
          <div className="team-banner-card">
            {/* Left Team Photo */}
            <div className="team-photo-container">
              <img 
                src="/images/swiszta_team.png" 
                alt="SWISZTA Leadership Team" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block'
                }}
              />
            </div>
            {/* Right Quote Content */}
            <div style={{
              padding: '28px 36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              backgroundColor: '#13181C',
              color: '#FFFFFF',
              position: 'relative'
            }}>
              <div style={{
                fontSize: '2.8rem',
                lineHeight: 1,
                color: '#C8102E',
                fontWeight: 900,
                marginBottom: '12px',
                fontFamily: 'serif'
              }}>
                “
              </div>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.6,
                color: '#E2E8F0',
                fontWeight: 500,
                fontStyle: 'italic'
              }}>
                Our team is dedicated to delivering exceptional hospitality experiences through partnership, innovation and excellence.
              </p>
              <div style={{
                width: '40px',
                height: '3px',
                backgroundColor: '#C8102E',
                marginTop: '18px'
              }}></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
