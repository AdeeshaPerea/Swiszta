import React, { useState } from 'react';
import { ChevronRight, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer({ onNavigate, onOpenQuote }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="logo" onClick={() => onNavigate('home')}>
              <div className="logo-grid">
                <div className="logo-sq"></div>
                <div className="logo-sq"></div>
                <div className="logo-sq"></div>
                <div className="logo-sq"></div>
              </div>
              <div className="logo-text">
                <span className="logo-brand">SWISZTA</span>
                <span className="logo-tagline" style={{ color: '#A0AEC0' }}>HOTEL & HOSPITALITY SERVICES</span>
              </div>
            </div>
            <p>
              SWISZTA provides premier integrated hospitality solutions across Australia and internationally, ensuring exceptional operational standards and unforgettable guest experiences.
            </p>
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.86rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={14} style={{ color: '#C8102E' }} />
                <span>1300 794 477</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={14} style={{ color: '#C8102E' }} />
                <span>info@swiszta.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin size={14} style={{ color: '#C8102E' }} />
                <span>1/42 Global Drive, Tullamarine VIC 3049, Australia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-title">QUICK LINKS</h4>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>About Us</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); onNavigate('services'); }}>Our Services</a></li>
              <li><a href="#solutions" onClick={(e) => { e.preventDefault(); onNavigate('solutions'); }}>Solutions</a></li>
              <li><a href="#clients" onClick={(e) => { e.preventDefault(); onNavigate('clients'); }}>Our Clients</a></li>
              <li><a href="#careers" onClick={(e) => { e.preventDefault(); onNavigate('careers'); }}>Careers</a></li>
              <li><a href="#quote" onClick={(e) => { e.preventDefault(); onOpenQuote(); }}>Request Quote</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer-title">SERVICES</h4>
            <ul className="footer-links">
              <li><a href="#services" onClick={(e) => { e.preventDefault(); onNavigate('services'); }}>Housekeeping</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); onNavigate('services'); }}>Laundry Services</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); onNavigate('services'); }}>Catering & F&B</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); onNavigate('services'); }}>Maintenance</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); onNavigate('services'); }}>Concierge Services</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); onNavigate('services'); }}>Procurement & Supply</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h4 className="footer-title">NEWSLETTER</h4>
            <p>Subscribe to receive industry insights, hospitality trends, and service updates.</p>
            {subscribed ? (
              <div style={{ background: 'rgba(200, 16, 46, 0.2)', border: '1px solid #C8102E', color: '#FFFFFF', padding: '10px', borderRadius: '4px', fontSize: '0.85rem' }}>
                ✓ Thank you! You have successfully subscribed.
              </div>
            ) : (
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  className="newsletter-input" 
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-red" style={{ padding: '10px 16px' }}>
                  <ChevronRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} SWISZTA Hotel & Hospitality Services. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert('Privacy Policy: SWISZTA respects your data privacy.'); }}>Privacy Policy</a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert('Terms of Service: Standard commercial hospitality terms apply.'); }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
