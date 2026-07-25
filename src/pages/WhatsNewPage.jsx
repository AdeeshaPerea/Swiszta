import React, { useState } from 'react';
import { Search, Calendar, ChevronRight, Mail, CheckCircle2 } from 'lucide-react';

export default function WhatsNewPage() {
  const [selectedCategory, setSelectedCategory] = useState('ALL NEWS');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const categories = [
    'ALL NEWS',
    'PARTNERSHIPS',
    'EXHIBITIONS',
    'SEMINARS & EVENTS',
    'TRAINING & ACADEMY',
    'ACHIEVEMENTS',
    'MEDIA',
    'COMPANY UPDATES'
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Strategic Partnership with Kinaway for Social Procurement',
      category: 'PARTNERSHIPS',
      tag: 'PARTNERSHIP',
      date: '21 MAY 2025',
      image: '/images/news/kinaway.png',
      summary: 'Proud to partner with Kinaway to promote Indigenous businesses and create opportunities through social procurement.'
    },
    {
      id: 2,
      title: 'Silver Partner of Football Victoria',
      category: 'PARTNERSHIPS',
      tag: 'PARTNERSHIP',
      date: '15 APR 2025',
      image: '/images/news/football.png',
      summary: "We're excited to continue our partnership with Football Victoria in supporting community football across the state."
    },
    {
      id: 3,
      title: 'SWISZTA at Facility Management Expo 2024',
      category: 'EXHIBITIONS',
      tag: 'EXHIBITION',
      date: '16 OCT 2024',
      image: '/images/news/expo.png',
      summary: 'Thank you to everyone who visited our stand. Great conversations, new connections and exciting opportunities ahead!'
    },
    {
      id: 4,
      title: 'Hospitality Leadership Seminar Melbourne',
      category: 'SEMINARS & EVENTS',
      tag: 'SEMINAR',
      date: '12 SEP 2024',
      image: '/images/news/seminar.png',
      summary: "An insightful session on 'Leading High Performance Teams in Hospitality' with industry experts and leaders."
    },
    {
      id: 5,
      title: 'Launch of SWISZTA Hospitality Academy',
      category: 'TRAINING & ACADEMY',
      tag: 'TRAINING',
      date: '28 AUG 2024',
      image: '/images/news/academy.png',
      summary: 'Investing in our people! Our academy provides world-class training to build skills, confidence and career growth.'
    },
    {
      id: 6,
      title: 'Partnering with Cancer Council Australia',
      category: 'PARTNERSHIPS',
      tag: 'PARTNERSHIP',
      date: '05 JUL 2024',
      image: '/images/news/cancer.png',
      summary: "Together, we're creating cleaner, safer environments that support healthier communities."
    },
    {
      id: 7,
      title: 'ITB Asia 2024 – Singapore',
      category: 'EXHIBITIONS',
      tag: 'EXHIBITION',
      date: '23 OCT 2024',
      image: '/images/news/itb.png',
      summary: 'Connecting with global travel and hospitality leaders and showcasing our integrated hospitality solutions.'
    },
    {
      id: 8,
      title: 'Celebrating Our People',
      category: 'COMPANY UPDATES',
      tag: 'COMPANY UPDATE',
      date: '10 JUN 2024',
      image: '/images/news/people.png',
      summary: 'Recognising the dedication and hard work of our incredible team members across Australia. You make us proud!'
    }
  ];

  const highlights = [
    {
      title: 'Supply Nation – Proud Corporate Member',
      subtitle: 'Supporting local and Indigenous businesses.',
      iconBg: '#C8102E'
    },
    {
      title: 'St Vincent de Paul Partnership',
      subtitle: 'Working together for stronger communities.',
      iconBg: '#1B365D'
    },
    {
      title: 'Red Cross Australia Supporter',
      subtitle: 'Making a difference when it matters most.',
      iconBg: '#E53E3E'
    },
    {
      title: 'Western United FC Partner',
      subtitle: 'Backing community through sport.',
      iconBg: '#2B6CB0'
    }
  ];

  const filteredArticles = newsArticles.filter((article) => {
    const matchesCategory = selectedCategory === 'ALL NEWS' || article.category === selectedCategory || article.tag === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setNewsletterEmail('');
    }
  };

  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '100vh' }}>
      
      {/* Top Hero Section */}
      <div 
        style={{
          position: 'relative',
          backgroundImage: `linear-gradient(to right, rgba(12, 16, 20, 0.9) 0%, rgba(12, 16, 20, 0.72) 55%, rgba(12, 16, 20, 0.5) 100%), url('/images/contact_hero.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF',
          padding: '64px 0 76px'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '680px' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px', 
              fontSize: '0.85rem', 
              fontWeight: 800, 
              letterSpacing: '2px', 
              color: '#C8102E', 
              marginBottom: '12px',
              textTransform: 'uppercase'
            }}>
              <span style={{ width: '24px', height: '2px', backgroundColor: '#C8102E', display: 'inline-block' }}></span>
              WHAT'S NEW
            </div>
            
            <h1 style={{ fontSize: '3.2rem', fontWeight: 800, lineHeight: 1.12, marginBottom: '18px', color: '#FFFFFF', letterSpacing: '-0.5px' }}>
              Stay Informed. <br />
              <span style={{ color: '#C8102E' }}>Stay Inspired.</span>
            </h1>

            <p style={{ fontSize: '1.05rem', color: '#CBD5E0', lineHeight: 1.6 }}>
              Explore the latest news, partnerships, events, training programs and achievements from SWISZTA as we continue to raise standards and create exceptional hospitality experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Tabs Bar + Search Input */}
      <div style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E5E9EC', padding: '16px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          
          {/* Category Filter Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentPage(1);
                }}
                style={{
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.5px',
                  border: cat === selectedCategory ? '1px solid #C8102E' : '1px solid #E2E8F0',
                  backgroundColor: cat === selectedCategory ? '#C8102E' : '#FFFFFF',
                  color: cat === selectedCategory ? '#FFFFFF' : '#4A5568',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div style={{ position: 'relative', width: '260px' }}>
            <input 
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '9px 14px 9px 36px',
                borderRadius: '6px',
                border: '1px solid #CBD5E0',
                fontSize: '0.85rem',
                outline: 'none'
              }}
            />
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#A0AEC0' }} />
          </div>

        </div>
      </div>

      {/* Main Content Grid: Left 8 Cards + Right Sidebar */}
      <div className="container" style={{ padding: '48px 24px 70px' }}>
        <div className="whats-new-main-grid">

          {/* Left Side: Cards Grid (2 cols) */}
          <div>
            {filteredArticles.length === 0 ? (
              <div style={{ backgroundColor: '#FFFFFF', padding: '60px 20px', textAlign: 'center', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1E252B', marginBottom: '8px' }}>No News Found</h4>
                <p style={{ color: '#718096', fontSize: '0.9rem' }}>Try clearing your search query or selecting a different category filter.</p>
                <button 
                  onClick={() => { setSelectedCategory('ALL NEWS'); setSearchQuery(''); }} 
                  className="btn btn-red" 
                  style={{ marginTop: '16px' }}
                >
                  RESET FILTERS
                </button>
              </div>
            ) : (
              <div className="news-cards-grid">
                {filteredArticles.map((article) => (
                  <div 
                    key={article.id}
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '12px',
                      border: '1px solid #E2E8F0',
                      overflow: 'hidden',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.03)';
                    }}
                  >
                    {/* Card Image */}
                    <div style={{ height: '180px', position: 'relative', overflow: 'hidden' }}>
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>

                    {/* Card Body */}
                    <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      {/* Date & Tag Row */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#718096', fontWeight: 600 }}>
                          <Calendar size={13} style={{ color: '#C8102E' }} />
                          <span>{article.date}</span>
                        </div>
                        <span style={{
                          fontSize: '0.68rem',
                          fontWeight: 800,
                          color: '#C8102E',
                          backgroundColor: '#FFF0F2',
                          border: '1px solid rgba(200, 16, 46, 0.2)',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          letterSpacing: '0.5px'
                        }}>
                          {article.tag}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 style={{ fontSize: '1.02rem', fontWeight: 800, color: '#1E252B', lineHeight: 1.35, marginBottom: '10px' }}>
                        {article.title}
                      </h3>

                      {/* Summary */}
                      <p style={{ fontSize: '0.85rem', color: '#657380', lineHeight: 1.5, marginBottom: '20px', flex: 1 }}>
                        {article.summary}
                      </p>

                      {/* Read More Link */}
                      <div style={{ marginTop: 'auto' }}>
                        <button
                          onClick={() => alert(`Article: ${article.title}\n\n${article.summary}\n\nPublished: ${article.date}`)}
                          style={{
                            fontSize: '0.8rem',
                            fontWeight: 800,
                            color: '#C8102E',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            border: 'none',
                            background: 'none',
                            cursor: 'pointer',
                            padding: 0
                          }}
                        >
                          READ MORE <ChevronRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination Controls */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '40px' }}>
              <button 
                onClick={() => setCurrentPage(1)}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: currentPage === 1 ? '#C8102E' : '#FFFFFF',
                  color: currentPage === 1 ? '#FFFFFF' : '#1E252B',
                  border: '1px solid #E2E8F0',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                1
              </button>
              <button 
                onClick={() => setCurrentPage(2)}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: currentPage === 2 ? '#C8102E' : '#FFFFFF',
                  color: currentPage === 2 ? '#FFFFFF' : '#1E252B',
                  border: '1px solid #E2E8F0',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                2
              </button>
              <button 
                onClick={() => setCurrentPage(3)}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: currentPage === 3 ? '#C8102E' : '#FFFFFF',
                  color: currentPage === 3 ? '#FFFFFF' : '#1E252B',
                  border: '1px solid #E2E8F0',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                3
              </button>
              <span style={{ color: '#718096', fontWeight: 700 }}>..</span>
              <button 
                onClick={() => setCurrentPage(currentPage + 1)}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  color: '#1E252B',
                  border: '1px solid #E2E8F0',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                &gt;
              </button>
            </div>
          </div>

          {/* Right Side: Sidebar */}
          <div>
            
            {/* FEATURED NEWS Card */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              border: '1px solid #E2E8F0',
              overflow: 'hidden',
              boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
              marginBottom: '28px'
            }}>
              <div style={{ padding: '16px 20px 0' }}>
                <h4 style={{
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  letterSpacing: '1px',
                  color: '#1E252B',
                  textTransform: 'uppercase'
                }}>
                  FEATURED NEWS
                </h4>
              </div>

              <div style={{ height: '160px', margin: '14px 16px 0', borderRadius: '8px', overflow: 'hidden' }}>
                <img 
                  src="/images/news/ev.png" 
                  alt="EV Charging Stations" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ padding: '16px 20px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#718096', fontWeight: 600 }}>
                    <Calendar size={13} style={{ color: '#C8102E' }} />
                    <span>20 JUL 2024</span>
                  </div>
                  <span style={{
                    fontSize: '0.65rem',
                    fontWeight: 800,
                    color: '#C8102E',
                    backgroundColor: '#FFF0F2',
                    border: '1px solid rgba(200, 16, 46, 0.2)',
                    padding: '2px 6px',
                    borderRadius: '4px'
                  }}>
                    COMPANY UPDATE
                  </span>
                </div>

                <h4 style={{ fontSize: '0.98rem', fontWeight: 800, color: '#1E252B', lineHeight: 1.35, marginBottom: '8px' }}>
                  Driving Sustainability: Free EV Charging Stations for Aged Care Sites
                </h4>

                <p style={{ fontSize: '0.82rem', color: '#657380', lineHeight: 1.45, marginBottom: '16px' }}>
                  As part of our ESG commitment, we are providing a free EV charging station to every aged care site we service.
                </p>

                <button
                  onClick={() => alert("Driving Sustainability: SWISZTA ESG EV Charging Initiative.")}
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    color: '#C8102E',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  READ MORE <ChevronRight size={14} />
                </button>
              </div>
            </div>

            {/* RECENT HIGHLIGHTS Card */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              border: '1px solid #E2E8F0',
              padding: '20px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
            }}>
              <h4 style={{
                fontSize: '0.82rem',
                fontWeight: 800,
                letterSpacing: '1px',
                color: '#1E252B',
                textTransform: 'uppercase',
                marginBottom: '18px'
              }}>
                RECENT HIGHLIGHTS
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  {
                    title: 'Supply Nation – Proud Corporate Member',
                    subtitle: 'Supporting local and Indigenous businesses.',
                    logo: (
                      <div style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '8px',
                        backgroundColor: '#F8F9FA',
                        border: '1px solid #E2E8F0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <div style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '50%',
                          background: 'conic-gradient(from 0deg, #E53E3E, #DD6B20, #319795, #3182CE, #805AD5, #E53E3E)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFFFFF' }}></div>
                        </div>
                      </div>
                    )
                  },
                  {
                    title: 'St Vincent de Paul Partnership',
                    subtitle: 'Working together for stronger communities.',
                    logo: (
                      <div style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '8px',
                        backgroundColor: '#EDF2F7',
                        border: '1px solid #E2E8F0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="9" stroke="#1B365D" strokeWidth="2"/>
                          <path d="M12 6V18M6 12H18" stroke="#1B365D" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    )
                  },
                  {
                    title: 'Red Cross Australia Supporter',
                    subtitle: 'Making a difference when it matters most.',
                    logo: (
                      <div style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '8px',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E2E8F0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
                      }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#C8102E">
                          <path d="M9 2H15V9H22V15H15V22H9V15H2V9H9V2Z"/>
                        </svg>
                      </div>
                    )
                  },
                  {
                    title: 'Western United FC Partner',
                    subtitle: 'Backing community through sport.',
                    logo: (
                      <div style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '8px',
                        backgroundColor: '#112218',
                        border: '1px solid #1A3626',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2L3 6V12C3 17.5 7 21.5 12 23C17 21.5 21 17.5 21 12V6L12 2Z" fill="#2F855A" stroke="#48BB78" strokeWidth="1.5"/>
                          <path d="M8 9L12 15L16 9" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )
                  }
                ].map((item, i, arr) => (
                  <div 
                    key={i} 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      cursor: 'pointer',
                      paddingBottom: i < arr.length - 1 ? '14px' : '0',
                      borderBottom: i < arr.length - 1 ? '1px solid #F0F4F8' : 'none'
                    }}
                    onClick={() => alert(`Highlight: ${item.title}`)}
                  >
                    {item.logo}
                    <div style={{ flex: 1 }}>
                      <h5 style={{ fontSize: '0.82rem', fontWeight: 800, color: '#1E252B', lineHeight: 1.25 }}>
                        {item.title}
                      </h5>
                      <p style={{ fontSize: '0.74rem', color: '#718096', marginTop: '2px' }}>
                        {item.subtitle}
                      </p>
                    </div>
                    <ChevronRight size={14} style={{ color: '#1E252B', flexShrink: 0 }} />
                  </div>
                ))}
              </div>

              {/* View All News Button */}
              <button
                onClick={() => setSelectedCategory('ALL NEWS')}
                style={{
                  width: '100%',
                  marginTop: '20px',
                  padding: '12px 16px',
                  borderRadius: '6px',
                  border: '1px solid #C8102E',
                  backgroundColor: '#FFFFFF',
                  color: '#C8102E',
                  fontWeight: 800,
                  fontSize: '0.8rem',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 8px rgba(200, 16, 46, 0.08)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#C8102E';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = '#C8102E';
                }}
              >
                VIEW ALL NEWS <ChevronRight size={14} />
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Newsletter Banner */}
      <div style={{ backgroundColor: '#F0F3F6', borderTop: '1px solid #E2E8F0', padding: '36px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
          
          {/* Left Icon + Text */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#C8102E',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 4px 14px rgba(200, 16, 46, 0.3)'
            }}>
              <Mail size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1E252B', marginBottom: '2px' }}>
                Never miss an update
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#657380' }}>
                Subscribe to receive our latest news, events and insights.
              </p>
            </div>
          </div>

          {/* Middle Form */}
          <div style={{ flex: 1, maxWidth: '440px' }}>
            {subscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#C8102E', fontWeight: 700, fontSize: '0.9rem' }}>
                <CheckCircle2 size={20} />
                <span>Thank you! You have successfully subscribed to SWISZTA news.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', gap: '8px' }}>
                <input 
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '11px 16px',
                    borderRadius: '6px',
                    border: '1px solid #CBD5E0',
                    fontSize: '0.88rem',
                    outline: 'none',
                    backgroundColor: '#FFFFFF'
                  }}
                />
                <button 
                  type="submit"
                  style={{
                    backgroundColor: '#C8102E',
                    color: '#FFFFFF',
                    padding: '11px 24px',
                    borderRadius: '6px',
                    fontWeight: 700,
                    fontSize: '0.82rem',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(200, 16, 46, 0.25)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  SUBSCRIBE
                </button>
              </form>
            )}
          </div>

          {/* Right Social Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1E252B' }}>Follow Us</span>
            <div style={{ display: 'flex', gap: '8px' }}>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-circle-btn" style={{ width: '32px', height: '32px' }}>
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-circle-btn" style={{ width: '32px', height: '32px' }}>
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-circle-btn" style={{ width: '32px', height: '32px' }}>
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-circle-btn" style={{ width: '32px', height: '32px' }}>
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
