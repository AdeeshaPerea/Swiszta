import React from 'react';
import { servicesData } from '../components/ServicesBar';
import { ChevronRight, Check } from 'lucide-react';

export default function ServicesPage({ onOpenQuote, onSelectService }) {
  return (
    <div style={{ padding: '60px 0 80px', background: '#FAFAFA' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '2px', color: '#C8102E', textTransform: 'uppercase' }}>
            SWISZTA SERVICE PORTFOLIO
          </span>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginTop: '10px', marginBottom: '20px' }}>
            End-to-End Hospitality Management
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#4A5568', lineHeight: '1.7' }}>
            From luxury housekeeping to total facility engineering, we customize our service delivery to seamlessly align with your property’s operational goals.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
          {servicesData.map((svc) => {
            const Icon = svc.icon;
            return (
              <div 
                key={svc.id} 
                style={{ 
                  background: '#FFFFFF', 
                  borderRadius: '16px', 
                  padding: '36px', 
                  border: '1px solid #E5E9EC',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(200, 16, 46, 0.08)', color: '#C8102E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={28} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>{svc.title}</h3>
                      <p style={{ fontSize: '0.82rem', color: '#C8102E', fontWeight: 600 }}>{svc.desc}</p>
                    </div>
                  </div>

                  <p style={{ color: '#4A5568', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '20px' }}>
                    {svc.details}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
                  <button className="btn btn-red" style={{ padding: '10px 18px', fontSize: '0.8rem' }} onClick={() => onSelectService(svc)}>
                    LEARN MORE <ChevronRight size={14} />
                  </button>
                  <button className="btn btn-outline-dark" style={{ padding: '10px 18px', fontSize: '0.8rem' }} onClick={onOpenQuote}>
                    GET QUOTE
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
