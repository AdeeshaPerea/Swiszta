import React, { useState } from 'react';
import { Building2, Globe2, Users, Award, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

// ============================================================================
// AUTHENTIC HOTEL PARTNER BRAND SVG LOGOS
// ============================================================================

const WyndhamLogo = () => (
  <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
    <path d="M6 12L13 28L20 12L27 28L34 12" stroke="#0A4996" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8C18 10 22 10 28 8" stroke="#C8102E" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const AccorLogo = () => (
  <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
    <path d="M20 6L32 30H25L23 25H17L15 30H8L20 6Z" fill="#13294B"/>
    <path d="M20 14L18 20H22L20 14Z" fill="#E8B049"/>
    <path d="M5 16C12 14 28 14 35 16" stroke="#E8B049" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const IHGLogo = () => (
  <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#002B49"/>
    <text x="50%" y="58%" textAnchor="middle" dominantBaseline="middle" fill="#FFFFFF" fontSize="14" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">IHG</text>
  </svg>
);

const HiltonLogo = () => (
  <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
    <rect x="2" y="2" width="36" height="36" rx="9" stroke="#002B49" strokeWidth="2.5" fill="#FFFFFF"/>
    <path d="M13 10V30M27 10V30M13 20H27" stroke="#002B49" strokeWidth="3.5" strokeLinecap="round"/>
    <circle cx="20" cy="20" r="2.5" fill="#C8102E"/>
  </svg>
);

const MarriottLogo = () => (
  <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
    <path d="M7 30V10L15 26L20 18L25 26L33 10V30" stroke="#B00020" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HyattLogo = () => (
  <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
    <polygon points="20,4 35,20 20,36 5,20" fill="#002B49"/>
    <text x="50%" y="58%" textAnchor="middle" dominantBaseline="middle" fill="#FFFFFF" fontSize="13" fontWeight="900" fontFamily="sans-serif">H</text>
  </svg>
);

const SheratonLogo = () => (
  <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="17" stroke="#1A365D" strokeWidth="2" strokeDasharray="3 2"/>
    <path d="M25 14C23 12 17 12 16 16C15 20 25 19 24 24C23 28 16 28 14 25" stroke="#C8102E" strokeWidth="3.5" strokeLinecap="round"/>
  </svg>
);

const RadissonLogo = () => (
  <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
    <path d="M12 30V10H22C26 10 28 12 28 15C28 18 26 20 22 20H12M20 20L28 30" stroke="#005B94" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="27" cy="11" r="3" fill="#C8102E"/>
  </svg>
);

const NovotelLogo = () => (
  <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="9" fill="#0F2042"/>
    <path d="M10 28V12L20 24L30 12V28" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="20" cy="8" r="2.5" fill="#41B6E6"/>
  </svg>
);

const CrownLogo = () => (
  <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
    <path d="M8 28L5 12L14 18L20 8L26 18L35 12L32 28H8Z" fill="#D4AF37"/>
    <circle cx="5" cy="10" r="2" fill="#D4AF37"/>
    <circle cx="20" cy="6" r="2.5" fill="#D4AF37"/>
    <circle cx="35" cy="10" r="2" fill="#D4AF37"/>
  </svg>
);

const ShangriLaLogo = () => (
  <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
    <path d="M20 4C14 12 6 16 6 24C6 31 12 36 20 36C28 36 34 31 34 24C34 16 26 12 20 4Z" fill="#B8860B" opacity="0.15"/>
    <path d="M20 8C16 14 10 17 10 23C10 28 14 32 20 32C26 32 30 28 30 23C30 17 24 14 20 8Z" stroke="#B8860B" strokeWidth="2.5"/>
    <circle cx="20" cy="22" r="4" fill="#C8102E"/>
  </svg>
);

const RitzCarltonLogo = () => (
  <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
    <path d="M20 6L25 14H15L20 6Z" fill="#0A2540"/>
    <circle cx="20" cy="22" r="10" stroke="#0A2540" strokeWidth="2.5"/>
    <path d="M16 22H24M20 18V26" stroke="#C8102E" strokeWidth="2"/>
  </svg>
);

// 2 Carousel Sets of Official Hotel Partner Brands
const clientLogosSets = [
  [
    { name: 'WYNDHAM', sub: 'HOTELS & RESORTS', tag: 'Global Resort', Logo: WyndhamLogo },
    { name: 'ACCOR', sub: 'HOTEL GROUP', tag: 'Luxury Collection', Logo: AccorLogo },
    { name: 'IHG', sub: 'HOTELS & RESORTS', tag: '5-Star Partner', Logo: IHGLogo },
    { name: 'Hilton', sub: 'HOTELS & RESORTS', tag: 'Premium Partner', Logo: HiltonLogo },
    { name: 'Marriott', sub: 'INTERNATIONAL', tag: 'Global Brand', Logo: MarriottLogo },
    { name: 'HYATT', sub: 'HOTELS & RESORTS', tag: '5-Star Resort', Logo: HyattLogo }
  ],
  [
    { name: 'SHERATON', sub: 'HOTELS & RESORTS', tag: 'Luxury Brand', Logo: SheratonLogo },
    { name: 'RADISSON', sub: 'HOTEL GROUP', tag: 'Global Portfolio', Logo: RadissonLogo },
    { name: 'NOVOTEL', sub: 'HOTELS & SUITES', tag: 'Boutique Suites', Logo: NovotelLogo },
    { name: 'CROWN', sub: 'HOTELS MELBOURNE', tag: '5-Star Luxury', Logo: CrownLogo },
    { name: 'SHANGRI-LA', sub: 'HOTELS & RESORTS', tag: 'Luxury Partner', Logo: ShangriLaLogo },
    { name: 'RITZ-CARLTON', sub: 'HOTELS & RESORTS', tag: 'Ultra Luxury', Logo: RitzCarltonLogo }
  ]
];

export default function StatsAndClients({ onOpenClientsModal }) {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  const prevClients = () => {
    setCurrentSetIndex((prev) => (prev === 0 ? clientLogosSets.length - 1 : prev - 1));
  };

  const nextClients = () => {
    setCurrentSetIndex((prev) => (prev === clientLogosSets.length - 1 ? 0 : prev + 1));
  };

  const currentLogos = clientLogosSets[currentSetIndex];

  return (
    <section 
      style={{ 
        backgroundColor: '#FFFFFF', 
        padding: '52px 0 56px', 
        borderTop: '1px solid #E2E8F0', 
        borderBottom: '1px solid #E2E8F0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Soft Glow */}
      <div style={{ position: 'absolute', top: 0, right: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(200, 16, 46, 0.025) 0%, rgba(255,255,255,0) 70%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 36px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '1.5px', color: '#C8102E', textTransform: 'uppercase', marginBottom: '6px' }}>
            <span style={{ width: '6px', height: '6px', backgroundColor: '#C8102E', transform: 'rotate(45deg)', display: 'inline-block' }}></span>
            PROVEN TRACK RECORD &amp; TRUSTED PARTNERS
            <span style={{ width: '6px', height: '6px', backgroundColor: '#C8102E', transform: 'rotate(45deg)', display: 'inline-block' }}></span>
          </div>

          <h2 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#1E252B', letterSpacing: '-0.5px', margin: 0 }}>
            Driving Hospitality Excellence <span style={{ color: '#C8102E' }}>Nationwide.</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1.15fr', gap: '36px', alignItems: 'center' }}>
          
          {/* Left Side - 4 Key Performance Metric Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            
            <div style={{
              backgroundColor: '#FAFAFA',
              border: '1px solid #E2E8F0',
              borderTop: '3.5px solid #C8102E',
              borderRadius: '14px',
              padding: '22px 18px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: '0 6px 18px rgba(0, 0, 0, 0.03)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: '#FFF0F2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#C8102E',
                marginBottom: '10px'
              }}>
                <Building2 size={24} />
              </div>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#C8102E', lineHeight: 1, marginBottom: '6px' }}>
                150+
              </div>
              <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#1E252B', lineHeight: 1.35 }}>
                Hotels &amp; Properties Serviced
              </div>
            </div>

            <div style={{
              backgroundColor: '#FAFAFA',
              border: '1px solid #E2E8F0',
              borderTop: '3.5px solid #C8102E',
              borderRadius: '14px',
              padding: '22px 18px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: '0 6px 18px rgba(0, 0, 0, 0.03)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: '#FFF0F2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#C8102E',
                marginBottom: '10px'
              }}>
                <Globe2 size={24} />
              </div>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#C8102E', lineHeight: 1, marginBottom: '6px' }}>
                12
              </div>
              <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#1E252B', lineHeight: 1.35 }}>
                Regions Worldwide
              </div>
            </div>

            <div style={{
              backgroundColor: '#FAFAFA',
              border: '1px solid #E2E8F0',
              borderTop: '3.5px solid #C8102E',
              borderRadius: '14px',
              padding: '22px 18px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: '0 6px 18px rgba(0, 0, 0, 0.03)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: '#FFF0F2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#C8102E',
                marginBottom: '10px'
              }}>
                <Users size={24} />
              </div>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#C8102E', lineHeight: 1, marginBottom: '6px' }}>
                2,000+
              </div>
              <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#1E252B', lineHeight: 1.35 }}>
                Trained Professionals
              </div>
            </div>

            <div style={{
              backgroundColor: '#FAFAFA',
              border: '1px solid #E2E8F0',
              borderTop: '3.5px solid #C8102E',
              borderRadius: '14px',
              padding: '22px 18px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: '0 6px 18px rgba(0, 0, 0, 0.03)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: '#FFF0F2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#C8102E',
                marginBottom: '10px'
              }}>
                <Award size={24} />
              </div>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#C8102E', lineHeight: 1, marginBottom: '6px' }}>
                30+
              </div>
              <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#1E252B', lineHeight: 1.35 }}>
                Years of Excellence
              </div>
            </div>

          </div>

          {/* Right Side - Brand Client Carousel & Official Logos */}
          <div style={{
            backgroundColor: '#F8FAFC',
            border: '1px solid #E2E8F0',
            borderRadius: '20px',
            padding: '28px 24px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              {/* Header with Navigation Controls */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '1.2px', color: '#C8102E', textTransform: 'uppercase' }}>
                    OUR TRUSTED PARTNERS
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#64748B', marginTop: '2px', fontWeight: 600 }}>
                    Premier Hotel Brands &amp; Resort Groups ({currentSetIndex + 1} of {clientLogosSets.length})
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button 
                    onClick={prevClients}
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      border: '1px solid #CBD5E0',
                      backgroundColor: '#FFFFFF',
                      color: '#1E252B',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                      transition: 'all 0.2s ease'
                    }}
                    aria-label="Previous partners"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button 
                    onClick={nextClients}
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      border: '1px solid #CBD5E0',
                      backgroundColor: '#FFFFFF',
                      color: '#1E252B',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                      transition: 'all 0.2s ease'
                    }}
                    aria-label="Next partners"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              {/* 6 Partner Logos Grid (3 cols x 2 rows) */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '22px' }}>
                {currentLogos.map((client, idx) => {
                  const LogoComponent = client.Logo;
                  return (
                    <div 
                      key={idx} 
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E2E8F0',
                        borderRadius: '14px',
                        padding: '16px 12px 14px',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
                        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.borderColor = '#C8102E';
                        e.currentTarget.style.boxShadow = '0 10px 24px rgba(200, 16, 46, 0.12)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.borderColor = '#E2E8F0';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.03)';
                      }}
                    >
                      {/* Brand Logo SVG */}
                      <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <LogoComponent />
                      </div>

                      {/* Brand Name Typography */}
                      <div style={{ fontSize: '0.94rem', fontWeight: 900, color: '#1E252B', letterSpacing: '0.5px', lineHeight: 1.1 }}>
                        {client.name}
                      </div>

                      {/* Subtitle */}
                      <div style={{ fontSize: '0.58rem', fontWeight: 700, color: '#64748B', marginTop: '3px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        {client.sub}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Modal Trigger Button */}
            <button 
              onClick={onOpenClientsModal}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '10px',
                border: '1.5px solid #1E252B',
                backgroundColor: '#FFFFFF',
                color: '#1E252B',
                fontSize: '0.82rem',
                fontWeight: 800,
                cursor: 'pointer',
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1E252B';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.color = '#1E252B';
              }}
            >
              VIEW ALL CLIENT PARTNERS <ExternalLink size={14} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
