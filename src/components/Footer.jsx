import React from 'react';
import { Phone, Mail, Globe } from 'lucide-react';
import Logo from './Logo';

export default function Footer({ onNavigate }) {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-columns-grid">
          
          {/* Column 1: SWISZTA Logo & Description */}
          <div className="footer-col">
            <div style={{ marginBottom: '18px' }}>
              <Logo 
                variant="dark" 
                size="md" 
                showTagline={true} 
                showIcon={true}
                onClick={() => onNavigate('home')} 
              />
            </div>
            <p style={{ fontSize: '0.82rem', color: '#A0AEC0', lineHeight: 1.5 }}>
              Delivering excellence in hotel & hospitality services across Australia and New Zealand.
            </p>
          </div>

          {/* Column 2: QUICK LINKS */}
          <div className="footer-col">
            <h4 className="footer-heading">QUICK LINKS</h4>
            <ul className="footer-list">
              <li><a href="#about" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>About Us</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); onNavigate('services'); }}>Our Services</a></li>
              <li><a href="#solutions" onClick={(e) => { e.preventDefault(); onNavigate('solutions'); }}>Solutions</a></li>
              <li><a href="#clients" onClick={(e) => { e.preventDefault(); onNavigate('clients'); }}>Our Clients</a></li>
              <li><a href="#careers" onClick={(e) => { e.preventDefault(); onNavigate('careers'); }}>Careers</a></li>
              <li><a href="#whats-new" onClick={(e) => { e.preventDefault(); alert("What's New: Check back soon for company updates."); }}>What's New</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: SERVICES */}
          <div className="footer-col">
            <h4 className="footer-heading">SERVICES</h4>
            <ul className="footer-list">
              <li><a href="#services" onClick={(e) => { e.preventDefault(); onNavigate('services'); }}>Housekeeping</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); onNavigate('services'); }}>Laundry Services</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); onNavigate('services'); }}>Catering & F&B</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); onNavigate('services'); }}>Maintenance</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); onNavigate('services'); }}>Concierge</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); onNavigate('services'); }}>Facility Management</a></li>
            </ul>
          </div>

          {/* Column 4: ACCREDITATIONS & MEMBERSHIPS */}
          <div className="footer-col">
            <h4 className="footer-heading">ACCREDITATIONS & MEMBERSHIPS</h4>
            <div className="accreditations-grid">
              
              {/* ISO 9001 Bureau Veritas */}
              <div style={{
                backgroundColor: '#C8102E',
                color: '#FFFFFF',
                borderRadius: '4px',
                padding: '6px 8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '6px'
              }}>
                <div style={{ fontSize: '0.62rem', fontWeight: 800, lineHeight: 1.2 }}>
                  ISO 9001<br />
                  <span style={{ fontSize: '0.58rem', fontWeight: 700 }}>BUREAU VERITAS</span><br />
                  <span style={{ fontSize: '0.54rem', fontWeight: 400, opacity: 0.9 }}>Certification</span>
                </div>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  color: '#C8102E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.65rem',
                  fontWeight: 900,
                  flexShrink: 0
                }}>
                  1828
                </div>
              </div>

              {/* Facility Management Association */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#00A3E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="#00A3E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="#00A3E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div style={{ fontSize: '0.62rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.15 }}>
                  FACILITY MANAGEMENT<br />
                  ASSOCIATION<br />
                  <span style={{ fontSize: '0.55rem', fontWeight: 600, color: '#A0AEC0' }}>OF AUSTRALIA</span>
                </div>
              </div>

              {/* Kinaway */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ color: '#E53E3E', fontSize: '1.2rem', fontWeight: 900, lineHeight: 1 }}>
                  ✦
                </div>
                <div style={{ lineHeight: 1.15 }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.5px' }}>
                    Kinaway
                  </div>
                  <div style={{ fontSize: '0.52rem', color: '#A0AEC0', textTransform: 'uppercase' }}>
                    Chamber of Commerce
                  </div>
                </div>
              </div>

              {/* Supply Nation */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'conic-gradient(from 0deg, #E53E3E, #DD6B20, #319795, #3182CE, #E53E3E)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#111518' }}></div>
                </div>
                <div style={{ lineHeight: 1.15 }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#FFFFFF' }}>
                    Supply Nation
                  </div>
                  <div style={{ fontSize: '0.55rem', fontWeight: 700, color: '#A0AEC0', letterSpacing: '0.5px' }}>
                    REGISTERED
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Column 5: GET IN TOUCH */}
          <div className="footer-col">
            <h4 className="footer-heading">GET IN TOUCH</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              
              {/* Phone */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: '#C8102E',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Phone size={12} />
                </div>
                <a href="tel:1300794477" style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>
                  1300 794 477
                </a>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: '#C8102E',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Mail size={12} />
                </div>
                <a href="mailto:info@swiszta.com" style={{ fontSize: '0.85rem', color: '#CBD5E0' }}>
                  info@swiszta.com
                </a>
              </div>

              {/* Website */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: '#C8102E',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Globe size={12} />
                </div>
                <a href="https://www.swiszta.com" target="_blank" rel="noreferrer" style={{ fontSize: '0.85rem', color: '#CBD5E0' }}>
                  www.swiszta.com
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © 2024 SWISZTA™ Hotel & Hospitality Services. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert('Privacy Policy: SWISZTA values your data privacy.'); }} style={{ color: '#A0AEC0' }}>
              Privacy Policy
            </a>
            <span style={{ color: '#4A5568' }}>|</span>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert('Terms & Conditions: Standard commercial hospitality terms apply.'); }} style={{ color: '#A0AEC0' }}>
              Terms & Conditions
            </a>
            <span style={{ color: '#4A5568' }}>|</span>
            <a href="#sitemap" onClick={(e) => { e.preventDefault(); alert('Site Map: SWISZTA site overview.'); }} style={{ color: '#A0AEC0' }}>
              Site Map
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
