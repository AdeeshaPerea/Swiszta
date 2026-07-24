import React, { useState } from 'react';
import { Building2, Globe2, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react';

const clientLogosSets = [
  [
    { name: 'WYNDHAM', sub: 'HOTELS & RESORTS' },
    { name: 'ACCOR', sub: 'HOTEL GROUP' },
    { name: 'IHG', sub: 'HOTELS & RESORTS' },
    { name: 'Hilton', sub: 'HOTELS & RESORTS' },
    { name: 'Marriott', sub: 'INTERNATIONAL' },
    { name: 'HYATT', sub: 'HOTELS & RESORTS' }
  ],
  [
    { name: 'SHERATON', sub: 'HOTELS' },
    { name: 'RADISSON', sub: 'HOTEL GROUP' },
    { name: 'NOVOTEL', sub: 'HOTELS & SUITES' },
    { name: 'CROWN', sub: 'HOTELS MELBOURNE' },
    { name: 'SHANGRI-LA', sub: 'HOTELS & RESORTS' },
    { name: 'RITZ-CARLTON', sub: 'HOTELS' }
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
    <section className="stats-clients-section">
      <div className="container">
        <div className="stats-clients-grid">
          {/* Left Side - 4 Key Performance Metrics */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <Building2 size={32} />
              </div>
              <div className="stat-number">150+</div>
              <div className="stat-label">Hotels & Properties Serviced</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <Globe2 size={32} />
              </div>
              <div className="stat-number">12</div>
              <div className="stat-label">Regions Worldwide</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <Users size={32} />
              </div>
              <div className="stat-number">2,000+</div>
              <div className="stat-label">Trained Professionals</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <Award size={32} />
              </div>
              <div className="stat-number">30+</div>
              <div className="stat-label">Years of Hospitality Excellence</div>
            </div>
          </div>

          {/* Right Side - Brand Client Carousel */}
          <div className="clients-wrapper">
            <div>
              <div className="clients-carousel-header">
                <span style={{ fontSize: '0.82rem', fontWeight: 700, letterSpacing: '1.5px', color: '#657380', textTransform: 'uppercase' }}>
                  OUR TRUSTED PARTNERS
                </span>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button className="btn-outline-dark" style={{ padding: '6px 12px' }} onClick={prevClients}>
                    <ChevronLeft size={16} />
                  </button>
                  <button className="btn-outline-dark" style={{ padding: '6px 12px' }} onClick={nextClients}>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              <div className="clients-logos-grid">
                {currentLogos.map((client, idx) => (
                  <div key={idx} className="client-logo-card">
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '1rem', fontWeight: 800 }}>{client.name}</div>
                      <div style={{ fontSize: '0.55rem', fontWeight: 600, color: '#718096' }}>{client.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="btn btn-outline-dark clients-footer-btn" onClick={onOpenClientsModal}>
              VIEW ALL CLIENTS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
