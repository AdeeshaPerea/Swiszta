import React from 'react';
import { 
  CheckCircle2, ChevronRight, WashingMachine, Leaf, Clock, ShieldCheck, 
  Layers, Headphones, Truck, Filter, Sun, ClipboardCheck, Award, Users, Globe, Building2
} from 'lucide-react';

export default function LaundryServiceView({ onOpenQuote }) {
  const features = [
    { title: 'Premium Care', desc: 'Gentle yet effective cleaning for all textiles.', icon: <WashingMachine size={24} style={{ color: '#C8102E' }} /> },
    { title: 'Eco-Friendly', desc: 'Environmentally responsible products and practices.', icon: <Leaf size={24} style={{ color: '#C8102E' }} /> },
    { title: 'Timely Delivery', desc: 'Reliable pick-up and delivery schedules.', icon: <Clock size={24} style={{ color: '#C8102E' }} /> },
    { title: 'Hygiene Guaranteed', desc: 'Strict quality control for health and safety.', icon: <ShieldCheck size={24} style={{ color: '#C8102E' }} /> },
    { title: 'Linen Management', desc: 'Inventory tracking and linen optimisation.', icon: <Layers size={24} style={{ color: '#C8102E' }} /> },
    { title: 'Dedicated Support', desc: 'Responsive service and account management.', icon: <Headphones size={24} style={{ color: '#C8102E' }} /> }
  ];

  const processSteps = [
    { step: 1, title: 'Collection', desc: 'Scheduled pick-up of linens and laundry from your property.', icon: <Truck size={20} /> },
    { step: 2, title: 'Sorting & Inspection', desc: 'Careful sorting and inspection to ensure quality and safety.', icon: <Filter size={20} /> },
    { step: 3, title: 'Washing', desc: 'Advanced washing with premium, eco-friendly detergents.', icon: <WashingMachine size={20} /> },
    { step: 4, title: 'Drying & Finishing', desc: 'Precision drying, pressing and folding for a crisp, fresh finish.', icon: <Sun size={20} /> },
    { step: 5, title: 'Quality Check', desc: 'Rigorous quality checks to meet our high standards.', icon: <ClipboardCheck size={20} /> },
    { step: 6, title: 'Delivery', desc: 'On-time delivery of fresh, perfectly clean linens.', icon: <Truck size={20} /> }
  ];

  const stats = [
    { number: '150+', label: 'Hotels Served', icon: <Building2 size={24} style={{ color: '#C8102E' }} /> },
    { number: '2M+', label: 'Items Washed Monthly', icon: <WashingMachine size={24} style={{ color: '#C8102E' }} /> },
    { number: '50+', label: 'Laundry Professionals', icon: <Users size={24} style={{ color: '#C8102E' }} /> },
    { number: '12', label: 'Regions Worldwide', icon: <Globe size={24} style={{ color: '#C8102E' }} /> },
    { number: '98%', label: 'Client Satisfaction Rate', icon: <Award size={24} style={{ color: '#C8102E' }} /> }
  ];

  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '100vh' }}>
      
      {/* 1. Hero Section */}
      <div style={{ backgroundColor: '#FFFFFF', padding: '48px 0 64px', borderBottom: '1px solid #E5E9EC' }}>
        <div className="container">
          
          <div style={{ fontSize: '0.82rem', color: '#718096', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Home</span> &gt; <span>Services</span> &gt; <span style={{ color: '#1E252B', fontWeight: 700 }}>Laundry Services</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '1.5px', color: '#C8102E', textTransform: 'uppercase', marginBottom: '12px' }}>
                — LAUNDRY SERVICES
              </div>
              <h1 style={{ fontSize: '3.2rem', fontWeight: 800, lineHeight: 1.12, color: '#1E252B', marginBottom: '18px' }}>
                Impeccable Laundry. <br />
                <span style={{ color: '#C8102E' }}>Exceptional Standards.</span>
              </h1>
              <p style={{ fontSize: '1rem', color: '#4A5568', lineHeight: 1.6, marginBottom: '24px' }}>
                SWISZTA delivers premium laundry and linen services that ensure freshness, hygiene and comfort for your guests every time.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                {[
                  'High-quality laundry and linen care',
                  'Advanced equipment and eco-friendly detergents',
                  'On-time delivery, every time'
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
                src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1000&q=80" 
                alt="Hotel Laundry Staff Folding Clean Linens" 
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

      {/* 3. Why Hotels Trust SWISZTA Laundry Services */}
      <div className="container" style={{ padding: '80px 24px 64px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '1.5px', color: '#C8102E', textTransform: 'uppercase', marginBottom: '8px' }}>
              — THE SWISZTA ADVANTAGE
            </div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1E252B', lineHeight: 1.2, marginBottom: '16px' }}>
              Why Hotels Trust SWISZTA Laundry Services
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#4A5568', lineHeight: 1.6, marginBottom: '24px' }}>
              We understand that clean linens and guest laundry are essential to your reputation. Our state-of-the-art facilities and experienced team ensure consistency, quality and care in every load.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Advanced washing and drying technology',
                'Soft, fresh and hygienic linens',
                'Specialised care for delicate fabrics',
                'Scalable solutions for hotels of all sizes'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', fontWeight: 700, color: '#1E252B' }}>
                  <CheckCircle2 size={18} style={{ color: '#C8102E', flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ borderRadius: '16px', overflow: 'hidden', height: '360px', boxShadow: '0 8px 30px rgba(0,0,0,0.1)' }}>
            <img 
              src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=1000&q=80" 
              alt="Commercial laundry operator loading washing machine" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      {/* 4. Our Laundry Process Timeline */}
      <div style={{ backgroundColor: '#FFFFFF', padding: '72px 0', borderTop: '1px solid #E5E9EC', borderBottom: '1px solid #E5E9EC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '2px', color: '#C8102E', textTransform: 'uppercase', marginBottom: '8px' }}>
              — OUR LAUNDRY PROCESS —
            </div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1E252B' }}>
              6 Steps to Crisp, Fresh Linens
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px' }}>
            {processSteps.map((p, idx) => (
              <div key={idx} style={{
                backgroundColor: '#FAFAFA',
                borderRadius: '12px',
                border: '1px solid #E2E8F0',
                padding: '24px 14px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#FFF0F2',
                  color: '#C8102E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  fontSize: '0.88rem',
                  marginBottom: '12px'
                }}>
                  {p.step}
                </div>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#1E252B', marginBottom: '6px' }}>
                  {p.title}
                </h4>
                <p style={{ fontSize: '0.74rem', color: '#657380', lineHeight: 1.35 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Numbers Bar (Dark) */}
      <div style={{ backgroundColor: '#111827', color: '#FFFFFF', padding: '60px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '2px', color: '#C8102E', textTransform: 'uppercase' }}>
              LAUNDRY SERVICES BY THE NUMBERS
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', textAlign: 'center' }}>
            {stats.map((st, i) => (
              <div key={i}>
                <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1, marginBottom: '6px' }}>
                  {st.number}
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#A0AEC0' }}>
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. Bottom CTA */}
      <div style={{ backgroundColor: '#FFFFFF', padding: '48px 0' }}>
        <div className="container">
          <div style={{
            backgroundColor: '#F8F9FA',
            borderRadius: '16px',
            border: '1px solid #E2E8F0',
            padding: '32px 48px',
            display: 'flex',
            alignItems: 'center',
            justify: 'space-between',
            flexWrap: 'wrap',
            gap: '24px'
          }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#1E252B', marginBottom: '4px' }}>
                Fresh Linens. Happy Guests.
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#657380' }}>
                Let us take care of your laundry, so you can focus on delivering exceptional hospitality.
              </p>
            </div>
            <button className="btn btn-red" onClick={onOpenQuote} style={{ padding: '14px 28px' }}>
              TALK TO OUR TEAM <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
