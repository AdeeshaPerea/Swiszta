import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, onOpenQuote }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);

  const handleNavClick = (page) => {
    setActivePage(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="main-header">
      <div className="container nav-container">
        {/* Brand Logo */}
        <div className="logo" onClick={() => handleNavClick('home')}>
          <div className="logo-grid">
            <div className="logo-sq"></div>
            <div className="logo-sq"></div>
            <div className="logo-sq"></div>
            <div className="logo-sq"></div>
          </div>
          <div className="logo-text">
            <span className="logo-brand">SWISZTA</span>
            <span className="logo-tagline">HOTEL & HOSPITALITY SERVICES</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="nav-menu">
          <li>
            <a 
              href="#home" 
              className={`nav-link ${activePage === 'home' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
            >
              HOME
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={`nav-link ${activePage === 'about' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
            >
              ABOUT US
            </a>
          </li>
          <li 
            style={{ position: 'relative' }}
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <a 
              href="#services" 
              className={`nav-link ${activePage === 'services' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}
            >
              SERVICES <ChevronDown size={14} />
            </a>
            {servicesDropdown && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                width: '220px',
                background: '#FFFFFF',
                boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                borderRadius: '8px',
                padding: '12px 0',
                zIndex: 100
              }}>
                {['Housekeeping', 'Laundry Services', 'Catering & F&B', 'Maintenance', 'Concierge', 'Procurement'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    style={{
                      display: 'block',
                      padding: '10px 20px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#1E252B'
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('services');
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#C8102E'}
                    onMouseLeave={(e) => e.target.style.color = '#1E252B'}
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </li>
          <li
            style={{ position: 'relative' }}
            onMouseEnter={() => setSolutionsDropdown(true)}
            onMouseLeave={() => setSolutionsDropdown(false)}
          >
            <a 
              href="#solutions" 
              className={`nav-link ${activePage === 'solutions' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick('solutions'); }}
            >
              SOLUTIONS <ChevronDown size={14} />
            </a>
            {solutionsDropdown && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                width: '240px',
                background: '#FFFFFF',
                boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                borderRadius: '8px',
                padding: '12px 0',
                zIndex: 100
              }}>
                {['Luxury Hotels & Resorts', 'Boutique Accommodations', 'Serviced Apartments', 'Commercial Facilities'].map((item) => (
                  <a
                    key={item}
                    href="#solution-item"
                    style={{
                      display: 'block',
                      padding: '10px 20px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#1E252B'
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('solutions');
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#C8102E'}
                    onMouseLeave={(e) => e.target.style.color = '#1E252B'}
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </li>
          <li>
            <a 
              href="#clients" 
              className={`nav-link ${activePage === 'clients' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick('clients'); }}
            >
              OUR CLIENTS
            </a>
          </li>
          <li>
            <a 
              href="#careers" 
              className={`nav-link ${activePage === 'careers' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick('careers'); }}
            >
              CAREERS
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={`nav-link ${activePage === 'contact' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
            >
              CONTACT US
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button className="btn btn-red" onClick={onOpenQuote}>
            GET A QUOTE <ChevronRight size={16} />
          </button>

          <button 
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div style={{
          background: '#FFFFFF',
          borderTop: '1px solid #E5E9EC',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {['home', 'about', 'services', 'solutions', 'clients', 'careers', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: activePage === item ? '#C8102E' : '#1E252B'
              }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item);
              }}
            >
              {item === 'home' ? 'HOME' : item === 'about' ? 'ABOUT US' : item === 'clients' ? 'OUR CLIENTS' : item === 'contact' ? 'CONTACT US' : item.toUpperCase()}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
