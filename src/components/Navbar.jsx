import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ activePage, setActivePage, onOpenQuote }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);

  // Mobile accordion state
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  const handleNavClick = (page, subview = 'overview') => {
    setActivePage(page, subview);
    setServicesDropdown(false);
    setSolutionsDropdown(false);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const servicesSubItems = [
    { label: 'Housekeeping', key: 'housekeeping' },
    { label: 'Laundry Services', key: 'laundry' },
    { label: 'Catering & F&B', key: 'catering' },
    { label: 'Maintenance', key: 'maintenance' },
    { label: 'Concierge', key: 'concierge' },
    { label: 'Procurement', key: 'procurement' }
  ];

  const solutionsSubItems = [
    { label: 'Luxury 5-Star Hotels & Resorts', key: 'luxury' },
    { label: 'Boutique Accommodations', key: 'boutique' },
    { label: 'Serviced Apartments & Extended Stay', key: 'serviced' },
    { label: 'Commercial Hospitality Venues', key: 'commercial' }
  ];

  return (
    <header className="main-header">
      <div className="container nav-container">
        {/* Brand Logo */}
        <Logo 
          variant="light" 
          size="md" 
          showTagline={true} 
          onClick={() => handleNavClick('home')} 
        />

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
                {servicesSubItems.map((item) => (
                  <a
                    key={item.key}
                    href={`#${item.key}`}
                    style={{
                      display: 'block',
                      padding: '10px 20px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#1E252B'
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('services', item.key);
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#C8102E'}
                    onMouseLeave={(e) => e.target.style.color = '#1E252B'}
                  >
                    {item.label}
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
                width: '260px',
                background: '#FFFFFF',
                boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                borderRadius: '8px',
                padding: '12px 0',
                zIndex: 100
              }}>
                {solutionsSubItems.map((item) => (
                  <a
                    key={item.key}
                    href={`#${item.key}`}
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
                    {item.label}
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
              href="#whatsnew" 
              className={`nav-link ${activePage === 'whatsnew' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick('whatsnew'); }}
            >
              WHAT'S NEW
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

        {/* CTA Button & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button className="btn btn-red header-quote-btn" onClick={onOpenQuote}>
            GET A QUOTE <ChevronRight size={16} />
          </button>

          <button 
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '6px',
              color: '#1E252B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              outline: 'none'
            }}
          >
            {mobileOpen ? <X size={28} style={{ color: '#C8102E' }} /> : <Menu size={28} style={{ color: '#1E252B' }} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Accordion */}
      {mobileOpen && (
        <div style={{
          background: '#FFFFFF',
          borderTop: '1px solid #E5E9EC',
          boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          zIndex: 999,
          maxHeight: 'calc(100vh - 80px)',
          overflowY: 'auto'
        }}>
          {/* HOME */}
          <div style={{ borderBottom: '1px solid #F0F4F8', paddingBottom: '10px' }}>
            <a
              href="#home"
              style={{
                fontSize: '1.05rem',
                fontWeight: 800,
                color: activePage === 'home' ? '#C8102E' : '#1E252B',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
              onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
            >
              <span>HOME</span>
              <ChevronRight size={18} style={{ opacity: 0.4 }} />
            </a>
          </div>

          {/* SERVICES (Expandable Accordion) */}
          <div style={{ borderBottom: '1px solid #F0F4F8', paddingBottom: '10px' }}>
            <div 
              style={{
                fontSize: '1.05rem',
                fontWeight: 800,
                color: activePage === 'services' ? '#C8102E' : '#1E252B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer'
              }}
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              <span onClick={(e) => { e.stopPropagation(); handleNavClick('services'); }}>SERVICES</span>
              <button 
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex', alignItems: 'center' }}
                onClick={(e) => { e.stopPropagation(); setMobileServicesOpen(!mobileServicesOpen); }}
              >
                {mobileServicesOpen ? (
                  <ChevronDown size={22} style={{ color: '#C8102E' }} />
                ) : (
                  <ChevronRight size={22} style={{ color: '#C8102E' }} />
                )}
              </button>
            </div>

            {/* Sub-services list */}
            {mobileServicesOpen && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px', paddingLeft: '12px' }}>
                {servicesSubItems.map((item) => (
                  <a
                    key={item.key}
                    href={`#${item.key}`}
                    style={{
                      fontSize: '0.92rem',
                      fontWeight: 700,
                      color: '#4A5568',
                      textDecoration: 'none',
                      padding: '4px 0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('services', item.key);
                    }}
                  >
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#C8102E' }}></span>
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* SOLUTIONS (Expandable Accordion) */}
          <div style={{ borderBottom: '1px solid #F0F4F8', paddingBottom: '10px' }}>
            <div 
              style={{
                fontSize: '1.05rem',
                fontWeight: 800,
                color: activePage === 'solutions' ? '#C8102E' : '#1E252B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer'
              }}
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
            >
              <span onClick={(e) => { e.stopPropagation(); handleNavClick('solutions'); }}>SOLUTIONS</span>
              <button 
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex', alignItems: 'center' }}
                onClick={(e) => { e.stopPropagation(); setMobileSolutionsOpen(!mobileSolutionsOpen); }}
              >
                {mobileSolutionsOpen ? (
                  <ChevronDown size={22} style={{ color: '#C8102E' }} />
                ) : (
                  <ChevronRight size={22} style={{ color: '#C8102E' }} />
                )}
              </button>
            </div>

            {/* Sub-solutions list */}
            {mobileSolutionsOpen && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px', paddingLeft: '12px' }}>
                {solutionsSubItems.map((item) => (
                  <a
                    key={item.key}
                    href={`#${item.key}`}
                    style={{
                      fontSize: '0.92rem',
                      fontWeight: 700,
                      color: '#4A5568',
                      textDecoration: 'none',
                      padding: '4px 0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('solutions');
                    }}
                  >
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#C8102E' }}></span>
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* OUR CLIENTS */}
          <div style={{ borderBottom: '1px solid #F0F4F8', paddingBottom: '10px' }}>
            <a
              href="#clients"
              style={{
                fontSize: '1.05rem',
                fontWeight: 800,
                color: activePage === 'clients' ? '#C8102E' : '#1E252B',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
              onClick={(e) => { e.preventDefault(); handleNavClick('clients'); }}
            >
              <span>OUR CLIENTS</span>
              <ChevronRight size={18} style={{ opacity: 0.4 }} />
            </a>
          </div>

          {/* CAREERS */}
          <div style={{ borderBottom: '1px solid #F0F4F8', paddingBottom: '10px' }}>
            <a
              href="#careers"
              style={{
                fontSize: '1.05rem',
                fontWeight: 800,
                color: activePage === 'careers' ? '#C8102E' : '#1E252B',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
              onClick={(e) => { e.preventDefault(); handleNavClick('careers'); }}
            >
              <span>CAREERS</span>
              <ChevronRight size={18} style={{ opacity: 0.4 }} />
            </a>
          </div>

          {/* WHAT'S NEW */}
          <div style={{ borderBottom: '1px solid #F0F4F8', paddingBottom: '10px' }}>
            <a
              href="#whatsnew"
              style={{
                fontSize: '1.05rem',
                fontWeight: 800,
                color: activePage === 'whatsnew' ? '#C8102E' : '#1E252B',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
              onClick={(e) => { e.preventDefault(); handleNavClick('whatsnew'); }}
            >
              <span>WHAT'S NEW</span>
              <ChevronRight size={18} style={{ opacity: 0.4 }} />
            </a>
          </div>

          {/* CONTACT US */}
          <div style={{ borderBottom: '1px solid #F0F4F8', paddingBottom: '10px' }}>
            <a
              href="#contact"
              style={{
                fontSize: '1.05rem',
                fontWeight: 800,
                color: activePage === 'contact' ? '#C8102E' : '#1E252B',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
              onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
            >
              <span>CONTACT US</span>
              <ChevronRight size={18} style={{ opacity: 0.4 }} />
            </a>
          </div>

          <button 
            className="btn btn-red" 
            onClick={() => {
              setMobileOpen(false);
              onOpenQuote();
            }}
            style={{ width: '100%', marginTop: '8px', padding: '14px', justifyContent: 'center' }}
          >
            GET A QUOTE <ChevronRight size={16} />
          </button>
        </div>
      )}

    </header>
  );
}
