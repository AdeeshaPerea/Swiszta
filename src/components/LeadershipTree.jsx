import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, X, Crown, ShieldCheck, TrendingUp, DollarSign, Wrench, Building2, UserCheck, Sparkles, User } from 'lucide-react';
import './LeadershipTree.css';

const LinkedinIcon = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94Z" />
  </svg>
);

export default function LeadershipTree() {
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [isPeterExpanded, setIsPeterExpanded] = useState(true);
  const [hoveredNodeId, setHoveredNodeId] = useState(null);

  // Executive Team Hierarchy with High-Res Cropped Face Headshots
  const ceo = {
    id: 'ceo',
    name: 'Natasha McGrath',
    role: 'Chief Executive Officer (CEO)',
    displayRole: 'Chief Executive Officer (CEO)',
    shortRole: 'Chief Executive Officer',
    tag: 'EXECUTIVE LEADERSHIP',
    image: '/images/team/natasha.jpg',
    fallbackImage: '/images/team/natasha mcgrath.png',
    color: '#C8102E',
    icon: Crown,
    bio: 'Visionary Chief Executive Officer driving strategic direction, operational excellence, and transformative growth across SWISZTA hospitality operations nationwide.',
    email: 'natasha.m@swiszta.com',
    linkedin: 'https://linkedin.com',
    experience: '25+ Years Hospitality Leadership',
    responsibilities: ['Corporate Strategy & Vision', 'National Operations Growth', 'Executive Stakeholder Relations', 'Brand Leadership & Culture']
  };

  const level2Leaders = [
    {
      id: 'peter',
      name: 'Peter Pitchers',
      role: 'General Manager',
      displayRole: 'General Manager (Peter)',
      shortRole: 'General Manager',
      tag: 'OPERATIONS EXECUTIVE',
      image: '/images/team/peter.jpg',
      fallbackImage: '/images/team/peter pitchers.png',
      color: '#1E3A8A',
      icon: ShieldCheck,
      bio: 'Experienced senior executive driving operational strategy, team leadership, and executive hospitality service management across all divisions.',
      email: 'peter.p@swiszta.com',
      linkedin: 'https://linkedin.com',
      experience: '20+ Years Executive Management',
      hasChildren: true,
      responsibilities: ['Divisional Operations Strategy', 'Service Quality Standards', 'Regional Leadership Teams', 'Resource Allocation']
    },
    {
      id: 'deshani',
      name: 'Deshani Gomas',
      role: 'Chief Financial Officer',
      displayRole: 'Chief Financial Officer (Deshani)',
      shortRole: 'Chief Financial Officer',
      tag: 'FINANCIAL EXECUTIVE',
      image: '/images/team/deshani.jpg',
      fallbackImage: '/images/team/Deshani gomas.png',
      color: '#059669',
      icon: DollarSign,
      bio: 'Finance leader focused on sustainable growth, financial governance, risk management, and delivering strong performance metrics across all regions.',
      email: 'deshani.g@swiszta.com',
      linkedin: 'https://linkedin.com',
      experience: '18+ Years Financial Leadership',
      hasChildren: false,
      responsibilities: ['Financial Strategy & Governance', 'Capital Allocation', 'Risk & Compliance Management', 'Performance Analytics']
    },
    {
      id: 'robert',
      name: 'Robert Di Giulio',
      role: 'Head of Growth & Client Retention',
      displayRole: 'Head of Growth & Client Retention (Robert)',
      shortRole: 'Head of Growth & Client Retention',
      tag: 'STRATEGIC GROWTH',
      image: '/images/team/robert.jpg',
      fallbackImage: '/images/team/robert di giulio.png',
      color: '#D97706',
      icon: TrendingUp,
      bio: 'Leads business growth and client relationships with a focus on strategic partnerships, client retention, and long-term value creation.',
      email: 'robert.d@swiszta.com',
      linkedin: 'https://linkedin.com',
      experience: '15+ Years Commercial Strategy',
      hasChildren: false,
      responsibilities: ['National Growth Strategy', 'Key Client Partnerships', 'Client Retention Programs', 'Market Expansion']
    }
  ];

  const level3Leaders = [
    {
      id: 'markus',
      parentId: 'peter',
      name: 'Markus Williams',
      role: 'National Service Manager',
      displayRole: 'National Service Manager (Markus)',
      shortRole: 'National Service Manager',
      tag: 'NATIONAL OPERATIONS',
      image: '/images/team/markus.jpg',
      fallbackImage: '/images/team/markus williams.png',
      color: '#2563EB',
      icon: UserCheck,
      bio: 'National service operations leader dedicated to ensuring service excellence, client satisfaction, and operational efficiency across all client properties.',
      email: 'markus.w@swiszta.com',
      linkedin: 'https://linkedin.com',
      experience: '14+ Years Field Operations',
      responsibilities: ['Nationwide Service Audits', 'Client SLA Management', 'On-site Service Excellence', 'Training & Standards']
    },
    {
      id: 'danny',
      parentId: 'peter',
      name: 'Danny Fernandez',
      role: 'Head of Assets',
      displayRole: 'Head of Assets (Danny)',
      shortRole: 'Head of Assets',
      tag: 'ASSET MANAGEMENT',
      image: '/images/team/danny.jpg',
      fallbackImage: '/images/team/danny fernadez.png',
      color: '#7C3AED',
      icon: Wrench,
      bio: 'Asset management expert overseeing property assets, equipment lifecycle, procurement, and facility maintenance standards across all regions.',
      email: 'danny.f@swiszta.com',
      linkedin: 'https://linkedin.com',
      experience: '16+ Years Asset Strategy',
      responsibilities: ['Facility Maintenance Standards', 'Equipment Lifecycle Management', 'Procurement Strategy', 'Asset Auditing']
    },
    {
      id: 'vivien',
      parentId: 'peter',
      name: 'Vivien Leong',
      role: 'General Manager (Second Division)',
      displayRole: 'General Manager (Second Division) (Vivien)',
      shortRole: 'GM - Second Division',
      tag: 'DIVISIONAL LEADERSHIP',
      image: '/images/team/vivien.jpg',
      fallbackImage: '/images/team/vivien leong.png',
      color: '#DB2777',
      icon: Building2,
      bio: 'Accomplished hospitality executive specializing in strategic management, operational excellence, and luxury guest service standards.',
      email: 'vivien.l@swiszta.com',
      linkedin: 'https://linkedin.com',
      experience: '12+ Years Hospitality Leadership',
      responsibilities: ['Division II Operational Management', 'Luxury Guest Service Standards', 'Regional Team Oversight', 'Quality Assurance']
    }
  ];

  // Path Highlight Helper
  const isLineActive = (fromId, toId) => {
    if (!hoveredNodeId) return false;
    if (hoveredNodeId === fromId || hoveredNodeId === toId) return true;
    
    // CEO -> Peter -> Sub-Nodes path
    if ((hoveredNodeId === 'markus' || hoveredNodeId === 'danny' || hoveredNodeId === 'vivien') &&
        ((fromId === 'ceo' && toId === 'peter') || (fromId === 'peter' && (toId === 'markus' || toId === 'danny' || toId === 'vivien')))) {
      return true;
    }
    return false;
  };

  return (
    <section id="leadership-section" style={{ backgroundColor: '#F8FAFC', padding: '32px 0 32px', borderBottom: '1px solid #E5E9EC', position: 'relative', overflow: 'hidden' }}>
      
      {/* Subtle Background Radial Glow */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '1100px', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '15%', left: '8%', width: '320px', height: '320px', background: 'radial-gradient(circle, rgba(200, 16, 46, 0.035) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: '45%', right: '8%', width: '320px', height: '320px', background: 'radial-gradient(circle, rgba(200, 16, 46, 0.03) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%' }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1100px' }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 16px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '1.5px', color: '#1E252B', textTransform: 'uppercase', marginBottom: '4px' }}>
            <span style={{ width: '6px', height: '6px', backgroundColor: '#C8102E', transform: 'rotate(45deg)', display: 'inline-block' }}></span>
            OUR LEADERSHIP TEAM
            <span style={{ width: '6px', height: '6px', backgroundColor: '#C8102E', transform: 'rotate(45deg)', display: 'inline-block' }}></span>
          </div>

          <h2 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#1E252B', marginBottom: '4px', letterSpacing: '-0.5px' }}>
            Experienced Leaders. <span style={{ color: '#C8102E' }}>Exceptional Results.</span>
          </h2>

          <p style={{ fontSize: '0.88rem', color: '#4A5568', lineHeight: 1.4, maxWidth: '660px', margin: '0 auto' }}>
            Our executive leadership structure drives operational excellence, financial governance, and client retention nationwide.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* ORGANIZATIONAL TREE VIEW WITH LARGE CIRCULAR FACE HEADSHOTS               */}
        {/* ========================================================================= */}
        <div style={{ width: '100%', maxWidth: '1020px', margin: '0 auto' }}>
          
          {/* ------------------------------------------------------------- */}
          {/* LEVEL 1: CEO NODE                                             */}
          {/* ------------------------------------------------------------- */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0px' }}>
            <div
              className="tree-card ceo-card tree-node-appear level-1-delay"
              onMouseEnter={() => setHoveredNodeId('ceo')}
              onMouseLeave={() => setHoveredNodeId(null)}
              onClick={() => setSelectedLeader(ceo)}
              style={{
                width: '280px',
                cursor: 'pointer',
                padding: '16px 14px 16px',
                textAlign: 'center',
                position: 'relative',
                borderRadius: '16px',
                backgroundColor: '#FFFFFF',
                border: '2px solid #C8102E',
                boxShadow: '0 8px 24px rgba(200, 16, 46, 0.16)'
              }}
            >
              {/* Role Tag Pill */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                backgroundColor: '#C8102E',
                color: '#FFFFFF',
                fontSize: '0.66rem',
                fontWeight: 900,
                letterSpacing: '0.8px',
                padding: '3px 10px',
                borderRadius: '12px',
                textTransform: 'uppercase',
                boxShadow: '0 2px 6px rgba(200, 16, 46, 0.25)',
                marginBottom: '10px'
              }}>
                <Crown size={12} /> {ceo.tag}
              </div>

              {/* CEO FACE HEADSHOT (130px × 130px) */}
              <div style={{
                margin: '0 auto 10px',
                width: '130px',
                height: '130px',
                borderRadius: '50%',
                border: '3.5px solid #C8102E',
                padding: '3px',
                backgroundColor: '#FFFFFF',
                boxShadow: '0 6px 18px rgba(200, 16, 46, 0.2)',
                overflow: 'hidden'
              }}>
                <img
                  src={ceo.image}
                  alt={ceo.name}
                  onError={(e) => { e.target.src = ceo.fallbackImage; }}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%'
                  }}
                />
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1E252B', marginBottom: '2px' }}>
                {ceo.name}
              </h3>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#C8102E', marginBottom: '6px' }}>
                {ceo.displayRole}
              </div>
              
              <p style={{ fontSize: '0.78rem', color: '#475569', lineHeight: 1.38, marginBottom: '8px', minHeight: '36px' }}>
                {ceo.bio}
              </p>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.74rem', fontWeight: 800, color: '#C8102E', textTransform: 'uppercase' }}>
                View Profile <ExternalLink size={12} />
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* SVG CONNECTOR LINES: LEVEL 1 TO LEVEL 2 (24px height)         */}
          {/* ------------------------------------------------------------- */}
          <div style={{ height: '24px', position: 'relative', width: '100%' }}>
            <svg style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, overflow: 'visible' }}>
              <defs>
                <linearGradient id="treeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#C8102E" stopOpacity="1" />
                  <stop offset="100%" stopColor="#94A3B8" stopOpacity="1" />
                </linearGradient>
              </defs>

              {/* Central line down from CEO */}
              <line 
                x1="50%" y1="0" x2="50%" y2="12" 
                stroke="#C8102E" 
                strokeWidth={isLineActive('ceo', 'peter') || isLineActive('ceo', 'deshani') || isLineActive('ceo', 'robert') ? '3' : '2'} 
              />

              {/* Horizontal branch line covering 3 Level-2 nodes */}
              <line 
                x1="16.66%" y1="12" x2="83.33%" y2="12" 
                stroke="url(#treeGrad)" 
                strokeWidth="2.5" 
                strokeDasharray="5 5" 
                className="tree-connector-line" 
              />

              {/* Drop lines to each Level 2 node */}
              <line 
                x1="16.66%" y1="12" x2="16.66%" y2="24" 
                stroke={isLineActive('ceo', 'peter') ? '#C8102E' : '#94A3B8'} 
                strokeWidth={isLineActive('ceo', 'peter') ? '3' : '2'} 
              />
              <line 
                x1="50%" y1="12" x2="50%" y2="24" 
                stroke={isLineActive('ceo', 'deshani') ? '#C8102E' : '#C8102E'} 
                strokeWidth={isLineActive('ceo', 'deshani') ? '3' : '2'} 
              />
              <line 
                x1="83.33%" y1="12" x2="83.33%" y2="24" 
                stroke={isLineActive('ceo', 'robert') ? '#C8102E' : '#94A3B8'} 
                strokeWidth={isLineActive('ceo', 'robert') ? '3' : '2'} 
              />

              {/* Junction nodes */}
              <circle cx="50%" cy="12" r="4" fill="#C8102E" />
              <circle cx="16.66%" cy="12" r="3.5" fill={isLineActive('ceo', 'peter') ? '#C8102E' : '#94A3B8'} />
              <circle cx="83.33%" cy="12" r="3.5" fill={isLineActive('ceo', 'robert') ? '#C8102E' : '#94A3B8'} />
            </svg>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* LEVEL 2: EXECUTIVE DIRECTORS ROW (PETER, DESHANI, ROBERT)    */}
          {/* ------------------------------------------------------------- */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', position: 'relative', alignItems: 'stretch' }}>
            {level2Leaders.map((leader, index) => (
              <div key={leader.id} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div
                  className={`tree-card tree-node-appear level-2-delay-${index}`}
                  onMouseEnter={() => setHoveredNodeId(leader.id)}
                  onMouseLeave={() => setHoveredNodeId(null)}
                  onClick={() => setSelectedLeader(leader)}
                  style={{
                    width: '100%',
                    height: '100%',
                    cursor: 'pointer',
                    padding: '14px 12px 14px',
                    textAlign: 'center',
                    position: 'relative',
                    borderRadius: '14px',
                    backgroundColor: '#FFFFFF',
                    border: leader.id === 'peter' ? '2px solid #C8102E' : '1px solid #E2E8F0',
                    boxShadow: hoveredNodeId === leader.id ? '0 12px 28px rgba(200, 16, 46, 0.16)' : '0 6px 16px rgba(0, 0, 0, 0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    {/* Role Tag */}
                    <div style={{
                      display: 'inline-block',
                      backgroundColor: leader.id === 'peter' ? '#FFF0F2' : '#F1F5F9',
                      color: leader.id === 'peter' ? '#C8102E' : '#475569',
                      fontSize: '0.62rem',
                      fontWeight: 800,
                      letterSpacing: '0.6px',
                      padding: '3px 8px',
                      borderRadius: '10px',
                      marginBottom: '8px',
                      textTransform: 'uppercase'
                    }}>
                      {leader.tag}
                    </div>

                    {/* LEVEL 2 FACE HEADSHOT (115px × 115px) */}
                    <div style={{
                      margin: '0 auto 8px',
                      width: '115px',
                      height: '115px',
                      borderRadius: '50%',
                      border: '3px solid #E2E8F0',
                      backgroundColor: '#EDF2F7',
                      boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
                      overflow: 'hidden'
                    }}>
                      <img
                        src={leader.image}
                        alt={leader.name}
                        onError={(e) => { e.target.src = leader.fallbackImage; }}
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          objectPosition: 'center 15%'
                        }}
                      />
                    </div>

                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#1E252B', marginBottom: '2px' }}>
                      {leader.name}
                    </h3>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#C8102E', marginBottom: '6px', minHeight: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {leader.displayRole}
                    </div>
                    
                    {/* Compact Bio */}
                    <p style={{ fontSize: '0.76rem', color: '#475569', lineHeight: 1.38, marginBottom: '10px', minHeight: '44px' }}>
                      {leader.bio}
                    </p>
                  </div>

                  {/* Equal Height Bottom Action Element for All Cards */}
                  <div style={{ marginTop: 'auto', paddingTop: '4px' }}>
                    {leader.hasChildren ? (
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsPeterExpanded(!isPeterExpanded);
                        }}
                        className="branch-toggle-btn"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '0.7rem',
                          fontWeight: 800,
                          backgroundColor: '#FFF0F2',
                          color: '#C8102E',
                          padding: '4px 10px',
                          borderRadius: '14px',
                          cursor: 'pointer',
                          boxShadow: '0 2px 6px rgba(200, 16, 46, 0.12)'
                        }}
                      >
                        {isPeterExpanded ? (
                          <><span>3 Direct Reports</span> <ChevronUp size={13} /></>
                        ) : (
                          <><span>Expand Direct Reports</span> <ChevronDown size={13} /></>
                        )}
                      </div>
                    ) : (
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '0.7rem',
                          fontWeight: 800,
                          backgroundColor: '#F8FAFC',
                          color: '#475569',
                          padding: '4px 10px',
                          borderRadius: '14px',
                          border: '1px solid #E2E8F0'
                        }}
                      >
                        <span>Executive Profile</span> <ExternalLink size={12} />
                      </div>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* ------------------------------------------------------------- */}
          {/* SVG CONNECTOR LINES: LEVEL 2 (PETER) TO LEVEL 3 (24px)        */}
          {/* ------------------------------------------------------------- */}
          {isPeterExpanded && (
            <>
              <div style={{ height: '24px', position: 'relative', width: '100%' }}>
                <svg style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, overflow: 'visible' }}>
                  {/* Stem from Peter Pitchers (located at 16.66% horizontal center) */}
                  <line 
                    x1="16.66%" y1="0" x2="16.66%" y2="12" 
                    stroke="#C8102E" 
                    strokeWidth="2.5" 
                  />

                  {/* Sub-branch horizontal line spreading to 3 sub-reports under Peter */}
                  <line 
                    x1="16.66%" y1="12" x2="83.33%" y2="12" 
                    stroke="#C8102E" 
                    strokeWidth="2.5" 
                    strokeDasharray="5 5" 
                    className="tree-connector-line" 
                  />

                  {/* Drop lines to Level 3 nodes */}
                  <line 
                    x1="16.66%" y1="12" x2="16.66%" y2="24" 
                    stroke={isLineActive('peter', 'markus') ? '#C8102E' : '#C8102E'} 
                    strokeWidth={hoveredNodeId === 'markus' ? '3' : '2'} 
                  />
                  <line 
                    x1="50%" y1="12" x2="50%" y2="24" 
                    stroke={isLineActive('peter', 'danny') ? '#C8102E' : '#C8102E'} 
                    strokeWidth={hoveredNodeId === 'danny' ? '3' : '2'} 
                  />
                  <line 
                    x1="83.33%" y1="12" x2="83.33%" y2="24" 
                    stroke={isLineActive('peter', 'vivien') ? '#C8102E' : '#C8102E'} 
                    strokeWidth={hoveredNodeId === 'vivien' ? '3' : '2'} 
                  />

                  <circle cx="16.66%" cy="12" r="4" fill="#C8102E" />
                  <circle cx="50%" cy="12" r="3.5" fill="#C8102E" />
                  <circle cx="83.33%" cy="12" r="3.5" fill="#C8102E" />
                </svg>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* LEVEL 3: DIRECT REPORTS UNDER PETER (MARKUS, DANNY, VIVIEN)  */}
              {/* ------------------------------------------------------------- */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
                backgroundColor: '#FFFFFF',
                padding: '14px 16px',
                borderRadius: '16px',
                border: '1px dashed #CBD5E0',
                boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
              }}>
                <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.7rem', fontWeight: 800, color: '#475569', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '-4px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#C8102E' }}></span>
                  MANAGEMENT &amp; OPERATIONS DIVISION (REPORTING TO GENERAL MANAGER PETER)
                </div>

                {level3Leaders.map((leader, index) => (
                  <div
                    key={leader.id}
                    className={`tree-card tree-node-appear level-3-delay-${index}`}
                    onMouseEnter={() => setHoveredNodeId(leader.id)}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    onClick={() => setSelectedLeader(leader)}
                    style={{
                      cursor: 'pointer',
                      padding: '12px 10px 12px',
                      textAlign: 'center',
                      backgroundColor: '#FAFAFA',
                      borderRadius: '12px',
                      border: '1px solid #E2E8F0',
                      boxShadow: hoveredNodeId === leader.id ? '0 12px 28px rgba(200, 16, 46, 0.16)' : '0 4px 12px rgba(0, 0, 0, 0.03)',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <div style={{
                      display: 'inline-block',
                      backgroundColor: '#F8FAFC',
                      color: '#475569',
                      fontSize: '0.6rem',
                      fontWeight: 800,
                      letterSpacing: '0.5px',
                      padding: '2px 6px',
                      borderRadius: '8px',
                      marginBottom: '6px',
                      textTransform: 'uppercase'
                    }}>
                      {leader.tag}
                    </div>

                    {/* LEVEL 3 FACE HEADSHOT (100px × 100px) */}
                    <div style={{
                      margin: '0 auto 6px',
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      border: '3px solid #E2E8F0',
                      backgroundColor: '#EDF2F7',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                      overflow: 'hidden'
                    }}>
                      <img
                        src={leader.image}
                        alt={leader.name}
                        onError={(e) => { e.target.src = leader.fallbackImage; }}
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          objectPosition: 'center 15%'
                        }}
                      />
                    </div>

                    {/* Body Content */}
                    <h4 style={{ fontSize: '0.98rem', fontWeight: 800, color: '#1E252B', marginBottom: '2px' }}>
                      {leader.name}
                    </h4>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#C8102E', marginBottom: '4px' }}>
                      {leader.displayRole}
                    </div>
                    
                    <p style={{ fontSize: '0.74rem', color: '#475569', lineHeight: 1.35, margin: 0, flex: 1, minHeight: '32px' }}>
                      {leader.bio}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Bottom Leadership Summary Banner */}
          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 14px', borderRadius: '20px', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', fontSize: '0.76rem', fontWeight: 700, color: '#334155', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <Crown size={13} style={{ color: '#C8102E' }} /> Executive &amp; Operational Governance
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 14px', borderRadius: '20px', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', fontSize: '0.76rem', fontWeight: 700, color: '#334155', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <Building2 size={13} style={{ color: '#C8102E' }} /> Nationwide Property Service Leadership
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 14px', borderRadius: '20px', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', fontSize: '0.76rem', fontWeight: 700, color: '#334155', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <ShieldCheck size={13} style={{ color: '#C8102E' }} /> 98% Client Retention Driven by Leadership
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* EXECUTIVE PROFILE MODAL                                                   */}
        {/* ========================================================================= */}
        {selectedLeader && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(12, 16, 20, 0.78)',
              backdropFilter: 'blur(6px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
            onClick={() => setSelectedLeader(null)}
          >
            <div
              className="modal-content-animated"
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                maxWidth: '560px',
                width: '100%',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                position: 'relative'
              }}
            >
              {/* Modal Top Banner */}
              <div style={{ backgroundColor: '#13181C', padding: '24px', color: '#FFFFFF', position: 'relative' }}>
                <button
                  onClick={() => setSelectedLeader(null)}
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    color: '#FFFFFF',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <X size={18} />
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                  <div style={{ width: '88px', height: '88px', borderRadius: '50%', border: '3px solid #C8102E', overflow: 'hidden', backgroundColor: '#FFFFFF', flexShrink: 0 }}>
                    <img
                      src={selectedLeader.image}
                      alt={selectedLeader.name}
                      onError={(e) => { e.target.src = selectedLeader.fallbackImage; }}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }}
                    />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#C8102E', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>
                      {selectedLeader.tag}
                    </div>
                    <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
                      {selectedLeader.name}
                    </h3>
                    <div style={{ fontSize: '0.9rem', color: '#CBD5E0', marginTop: '2px', fontWeight: 600 }}>
                      {selectedLeader.displayRole || selectedLeader.role}
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div style={{ padding: '24px' }}>
                <div style={{ marginBottom: '18px' }}>
                  <h4 style={{ fontSize: '0.82rem', fontWeight: 800, color: '#1E252B', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <User size={14} style={{ color: '#C8102E' }} /> Executive Biography
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: '#334155', lineHeight: 1.6, margin: 0 }}>
                    {selectedLeader.bio}
                  </p>
                </div>

                {selectedLeader.responsibilities && (
                  <div style={{ marginBottom: '18px' }}>
                    <h4 style={{ fontSize: '0.82rem', fontWeight: 800, color: '#1E252B', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '10px' }}>
                      Key Responsibilities &amp; Focus Areas
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      {selectedLeader.responsibilities.map((resp, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 600, color: '#334155', backgroundColor: '#F8FAFC', padding: '6px 10px', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
                          <Sparkles size={12} style={{ color: '#C8102E', flexShrink: 0 }} />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
                  <div style={{ backgroundColor: '#F8FAFC', padding: '12px 14px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>Leadership Track</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#1E252B', marginTop: '2px' }}>{selectedLeader.experience}</div>
                  </div>
                  <div style={{ backgroundColor: '#F8FAFC', padding: '12px 14px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>Governance</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#1E252B', marginTop: '2px' }}>SWISZTA Leadership Team</div>
                  </div>
                </div>

                {/* Actions Footer */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #E2E8F0', paddingTop: '16px' }}>
                  <a
                    href={selectedLeader.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 18px',
                      borderRadius: '8px',
                      backgroundColor: '#0A66C2',
                      color: '#FFFFFF',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      textDecoration: 'none'
                    }}
                  >
                    <LinkedinIcon size={16} color="#FFFFFF" /> LinkedIn Profile
                  </a>

                  <button
                    onClick={() => setSelectedLeader(null)}
                    style={{
                      padding: '10px 20px',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E0',
                      backgroundColor: '#FFFFFF',
                      color: '#475569',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    Close Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
