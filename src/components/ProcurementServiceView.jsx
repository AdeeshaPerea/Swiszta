import React from 'react';
import { 
  CheckCircle2, ChevronRight, ShoppingCart, ShieldCheck, Clock, Users, Award, 
  Package, DollarSign, RefreshCw, Truck, Layers, Leaf
} from 'lucide-react';

export default function ProcurementServiceView({ onOpenQuote }) {
  const features = [
    { title: 'OS&E Sourcing', desc: 'Hotel operating supplies, equipment, and guest room amenities.', icon: <Package size={24} style={{ color: '#C8102E' }} /> },
    { title: 'Cost Optimisation', desc: 'Leveraging economies of scale for competitive bulk pricing.', icon: <DollarSign size={24} style={{ color: '#C8102E' }} /> },
    { title: 'Linen & Textiles', desc: 'Premium commercial bed sheets, towels, and table linens.', icon: <Layers size={24} style={{ color: '#C8102E' }} /> },
    { title: 'Reliable Supply Chain', desc: 'On-time delivery across regional and major Australian cities.', icon: <Truck size={24} style={{ color: '#C8102E' }} /> },
    { title: 'Eco-Friendly Products', desc: 'Sustainable, biodegradable, and eco-certified hotel supplies.', icon: <Leaf size={24} style={{ color: '#C8102E' }} /> },
    { title: 'Vendor Management', desc: 'End-to-end supplier management, quality control, and auditing.', icon: <ShieldCheck size={24} style={{ color: '#C8102E' }} /> }
  ];

  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '100vh' }}>
      
      {/* 1. Hero Section */}
      <div style={{ backgroundColor: '#FFFFFF', padding: '48px 0 64px', borderBottom: '1px solid #E5E9EC' }}>
        <div className="container">
          
          <div style={{ fontSize: '0.82rem', color: '#718096', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Home</span> &gt; <span>Services</span> &gt; <span style={{ color: '#1E252B', fontWeight: 700 }}>Procurement Services</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '1.5px', color: '#C8102E', textTransform: 'uppercase', marginBottom: '12px' }}>
                — PROCUREMENT &amp; SUPPLY CHAIN
              </div>
              <h1 style={{ fontSize: '3.2rem', fontWeight: 800, lineHeight: 1.12, color: '#1E252B', marginBottom: '18px' }}>
                Smart Sourcing. <br />
                <span style={{ color: '#C8102E' }}>Efficient Supply Chains.</span>
              </h1>
              <p style={{ fontSize: '1rem', color: '#4A5568', lineHeight: 1.6, marginBottom: '24px' }}>
                SWISZTA Procurement delivers cost-effective supply chain management, quality hotel OS&amp;E sourcing, and sustainable product solutions tailored for hospitality operators.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                {[
                  'Consolidated sourcing for operating supplies & linen',
                  'Rigorous quality control and supplier auditing',
                  'Cost savings through group purchasing power',
                  'Sustainable, eco-certified product lines'
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
                src="/images/swiszta_team.png" 
                alt="SWISZTA Supply Chain and Operations Management Team" 
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
    </div>
  );
}
