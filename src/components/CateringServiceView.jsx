import React from 'react';
import { 
  CheckCircle2, ChevronRight, Utensils, ShieldCheck, Clock, Award, 
  ChefHat, BookOpen, Smile, ShoppingCart, ClipboardList, Users, Building2, Globe
} from 'lucide-react';

export default function CateringServiceView({ onOpenQuote }) {
  const features = [
    {
      title: 'Quality Ingredients',
      desc: 'Sourced from trusted suppliers for freshness and nutrition.',
      icon: <Utensils size={24} style={{ color: '#C8102E' }} />
    },
    {
      title: 'Expert Chefs',
      desc: 'Experienced culinary professionals delivering excellence every day.',
      icon: <ChefHat size={24} style={{ color: '#C8102E' }} />
    },
    {
      title: 'Food Safety First',
      desc: 'Rigorous food safety standards and HACCP compliance.',
      icon: <ShieldCheck size={24} style={{ color: '#C8102E' }} />
    },
    {
      title: 'Customised Menus',
      desc: 'Tailored menus to suit your guests, theme and dietary requirements.',
      icon: <BookOpen size={24} style={{ color: '#C8102E' }} />
    },
    {
      title: 'Presentation Matters',
      desc: 'Beautifully presented dishes for a memorable dining experience.',
      icon: <Award size={24} style={{ color: '#C8102E' }} />
    },
    {
      title: 'Reliable & On-Time',
      desc: 'Consistent service delivery that you can count on.',
      icon: <Clock size={24} style={{ color: '#C8102E' }} />
    }
  ];

  const solutions = [
    {
      title: 'Banquet & Events',
      desc: 'Exceptional catering for weddings, galas, social events and celebrations.',
      image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Corporate Catering',
      desc: 'Productive meetings with delicious, energising food and beverages.',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'In-Room Dining',
      desc: 'Restaurant-quality meals delivered to your guests with care and discretion.',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Buffet & Live Stations',
      desc: 'Wide variety with live counters and interactive food experiences.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Special Diet Meals',
      desc: 'Healthy, balanced and custom meals for special dietary requirements.',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const stats = [
    { number: '1M+', label: 'Meals Served Annually', icon: <Utensils size={24} style={{ color: '#C8102E' }} /> },
    { number: '200+', label: 'Trained Culinary Professionals', icon: <Users size={24} style={{ color: '#C8102E' }} /> },
    { number: '150+', label: 'Hotel & Venues Served', icon: <Building2 size={24} style={{ color: '#C8102E' }} /> },
    { number: '100%', label: 'Food Safety Compliance', icon: <ShieldCheck size={24} style={{ color: '#C8102E' }} /> }
  ];

  const processSteps = [
    { step: 1, title: 'Consultation', desc: 'We understand your requirements, preferences and event details.', icon: <Users size={20} /> },
    { step: 2, title: 'Menu Planning', desc: 'Our chefs create customised menus tailored to your needs and budget.', icon: <ClipboardList size={20} /> },
    { step: 3, title: 'Sourcing', desc: 'We source the freshest, high-quality ingredients from trusted suppliers.', icon: <ShoppingCart size={20} /> },
    { step: 4, title: 'Preparation', desc: 'Expert chefs prepare meals with precision, passion and hygiene.', icon: <ChefHat size={20} /> },
    { step: 5, title: 'Service', desc: 'Meals are served on time with professional service and presentation.', icon: <Utensils size={20} /> },
    { step: 6, title: 'Feedback', desc: 'We continuously review and improve to ensure guest satisfaction.', icon: <Smile size={20} /> }
  ];

  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '100vh' }}>
      
      {/* 1. Breadcrumbs & Hero Header */}
      <div style={{ backgroundColor: '#FFFFFF', padding: '48px 0 64px', borderBottom: '1px solid #E5E9EC' }}>
        <div className="container">
          
          {/* Breadcrumb */}
          <div style={{ fontSize: '0.82rem', color: '#718096', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Home</span> &gt; <span>Services</span> &gt; <span style={{ color: '#1E252B', fontWeight: 700 }}>Catering &amp; F&amp;B</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            
            {/* Left Content */}
            <div>
              <div style={{ 
                fontSize: '0.82rem', 
                fontWeight: 800, 
                letterSpacing: '1.5px', 
                color: '#C8102E', 
                textTransform: 'uppercase', 
                marginBottom: '12px' 
              }}>
                — CATERING &amp; F&amp;B
              </div>

              <h1 style={{ fontSize: '3.2rem', fontWeight: 800, lineHeight: 1.12, color: '#1E252B', marginBottom: '18px' }}>
                Delicious Experiences. <br />
                <span style={{ color: '#C8102E' }}>Delivered with Care.</span>
              </h1>

              <p style={{ fontSize: '1rem', color: '#4A5568', lineHeight: 1.6, marginBottom: '24px' }}>
                SWISZTA Catering &amp; F&amp;B services are designed to delight your guests with exceptional food, impeccable presentation and world-class hygiene standards.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                {[
                  'Fresh, high-quality ingredients',
                  'Customised menus for every occasion',
                  'Trained chefs and hospitality professionals',
                  'Strict food safety and hygiene compliance'
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

            {/* Right Hero Image */}
            <div style={{ borderRadius: '16px', overflow: 'hidden', height: '420px', boxShadow: '0 12px 36px rgba(0,0,0,0.1)' }}>
              <img 
                src="/images/catering_hero.jpg" 
                alt="SWISZTA Catering Staff Arranging Gourmet Dining Table" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

          </div>

        </div>
      </div>

      {/* 2. Feature Highlights Bar (6 Icon Columns) */}
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

      {/* 3. OUR CATERING SOLUTIONS Section */}
      <div className="container" style={{ padding: '80px 24px 64px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.2fr', gap: '40px', alignItems: 'start' }}>
          
          {/* Left Text */}
          <div>
            <div style={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '1.5px', color: '#C8102E', textTransform: 'uppercase', marginBottom: '8px' }}>
              — OUR CATERING SOLUTIONS
            </div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1E252B', lineHeight: 1.2, marginBottom: '16px' }}>
              Catering for Every Need
            </h2>
            <p style={{ fontSize: '0.92rem', color: '#4A5568', lineHeight: 1.6, marginBottom: '24px' }}>
              From fine dining to casual meals, we offer a complete range of catering solutions for hotels, banquets, conferences, events and in-room dining.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
              {[
                'Banquet & Event Catering',
                'Conference & Corporate Catering',
                'In-Room Dining',
                'Buffet & Live Stations',
                'Special Dietary & Nutritional Meals'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', fontWeight: 700, color: '#1E252B' }}>
                  <CheckCircle2 size={16} style={{ color: '#C8102E', flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button className="btn btn-red" onClick={onOpenQuote}>
              VIEW ALL SOLUTIONS <ChevronRight size={16} />
            </button>
          </div>

          {/* Right 5 Solution Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '14px' }}>
            {solutions.map((s, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '10px',
                  border: '1px solid #E2E8F0',
                  overflow: 'hidden',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ height: '120px', overflow: 'hidden' }}>
                  <img src={s.image} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '14px 10px', flex: 1, display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                  <h4 style={{ fontSize: '0.82rem', fontWeight: 800, color: '#1E252B', marginBottom: '6px' }}>
                    {s.title}
                  </h4>
                  <p style={{ fontSize: '0.72rem', color: '#657380', lineHeight: 1.35 }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* 4. OUR COMMITMENT Section */}
      <div style={{ backgroundColor: '#FFFFFF', padding: '64px 0', borderTop: '1px solid #E5E9EC', borderBottom: '1px solid #E5E9EC' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: '48px', alignItems: 'center' }}>
            
            {/* Left Content */}
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '1.5px', color: '#C8102E', textTransform: 'uppercase', marginBottom: '8px' }}>
                — OUR COMMITMENT
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1E252B', lineHeight: 1.2, marginBottom: '16px' }}>
                Nutrition. Hygiene. Consistency.
              </h2>
              <p style={{ fontSize: '0.92rem', color: '#4A5568', lineHeight: 1.6 }}>
                We are committed to delivering nutritious, safe and delicious meals that exceed guest expectations while maintaining the highest standards of hygiene and sustainability.
              </p>
            </div>

            {/* Right 4 Metric Cards Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
              {stats.map((st, i) => (
                <div 
                  key={i}
                  style={{
                    backgroundColor: '#FAFAFA',
                    borderRadius: '12px',
                    border: '1px solid #E2E8F0',
                    padding: '24px 16px',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ 
                    width: '44px', 
                    height: '44px', 
                    borderRadius: '50%', 
                    backgroundColor: '#FFF0F2', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    margin: '0 auto 12px' 
                  }}>
                    {st.icon}
                  </div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#C8102E', lineHeight: 1, marginBottom: '6px' }}>
                    {st.number}
                  </div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#1E252B', lineHeight: 1.3 }}>
                    {st.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* 5. OUR CATERING PROCESS Timeline */}
      <div style={{ backgroundColor: '#111518', color: '#FFFFFF', padding: '72px 0' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '2px', color: '#C8102E', textTransform: 'uppercase', marginBottom: '8px' }}>
              OUR CATERING PROCESS
            </div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#FFFFFF' }}>
              6 Steps to Exceptional Dining
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px', position: 'relative' }}>
            {processSteps.map((p, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  padding: '24px 16px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: '#C8102E',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  fontSize: '0.9rem',
                  marginBottom: '14px',
                  boxShadow: '0 4px 12px rgba(200,16,46,0.3)'
                }}>
                  {p.step}
                </div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>
                  {p.title}
                </h4>
                <p style={{ fontSize: '0.75rem', color: '#A0AEC0', lineHeight: 1.4 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* 6. Bottom Call to Action Banner */}
      <div style={{ backgroundColor: '#FFFFFF', padding: '64px 0', borderTop: '1px solid #E5E9EC' }}>
        <div className="container">
          <div style={{
            backgroundColor: '#F8F9FA',
            borderRadius: '16px',
            border: '1px solid #E2E8F0',
            padding: '36px 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', maxWidth: '640px' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0 }}>
                <img src="/images/catering/chef.png" alt="Gourmet Catering" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#1E252B', marginBottom: '4px' }}>
                  Let's Create Memorable Dining Experiences
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#657380', lineHeight: 1.45 }}>
                  Partner with SWISZTA for catering services that impress your guests and reflect your brand's commitment to excellence.
                </p>
              </div>
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
