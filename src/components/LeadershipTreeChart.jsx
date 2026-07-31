import React, { useState } from 'react';
import { 
  Crown, 
  ShieldCheck, 
  TrendingUp, 
  DollarSign, 
  Wrench, 
  Building2, 
  UserCheck, 
  ChevronDown, 
  ChevronUp, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  LayoutGrid, 
  GitFork, 
  X, 
  Info,
  Sparkles
} from 'lucide-react';

const LinkedinIcon = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94Z" />
  </svg>
);

export default function LeadershipTreeChart() {
  const [viewMode, setViewMode] = useState('tree'); // 'tree' | 'grid'
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [isPeterExpanded, setIsPeterExpanded] = useState(true);
  const [zoomScale, setZoomScale] = useState(1);

  // Hierarchy Data Structure
  const leadersData = {
    ceo: {
      id: 'ceo',
      name: 'Natasha McGrath',
      role: 'Chief Executive Officer (CEO)',
      displayRole: 'Chief Executive Officer (CEO)',
      shortRole: 'CEO',
      image: '/images/team/natasha mcgrath.png',
      badge: 'Executive Leader',
      icon: Crown,
      color: '#C8102E',
      bio: 'Visionary Chief Executive Officer driving strategic direction, operational excellence, and transformative growth across SWISZTA hospitality operations nationwide.',
      experience: '20+ Years Hospitality & Executive Leadership',
      responsibilities: ['Corporate Strategy & Vision', 'National Operational Growth', 'Stakeholder Relations', 'Brand Leadership'],
      linkedin: 'https://linkedin.com'
    },
    level2: [
      {
        id: 'peter',
        name: 'Peter Pitchers',
        role: 'General Manager',
        displayRole: 'General Manager (Peter)',
        shortRole: 'GM - Operations',
        image: '/images/team/peter pitchers.png',
        badge: 'Operations Executive',
        icon: ShieldCheck,
        color: '#1E3A8A',
        bio: 'Experienced senior executive driving operational strategy, team leadership, and executive hospitality service management across all divisions.',
        experience: '18+ Years Executive Management',
        responsibilities: ['Divisional Oversight', 'Operational Strategy', 'Service Quality Standards', 'Team Leadership'],
        linkedin: 'https://linkedin.com',
        hasChildren: true
      },
      {
        id: 'deshani',
        name: 'Deshani Gomas',
        role: 'Chief Financial Officer',
        displayRole: 'Chief Financial Officer (Deshani)',
        shortRole: 'CFO',
        image: '/images/team/Deshani gomas.png',
        badge: 'Finance Executive',
        icon: DollarSign,
        color: '#059669',
        bio: 'Finance leader focused on sustainable growth, financial governance, risk management, and delivering strong performance metrics.',
        experience: '15+ Years Financial Management',
        responsibilities: ['Financial Strategy & Governance', 'Capital Allocation', 'Risk & Compliance', 'Performance Analytics'],
        linkedin: 'https://linkedin.com'
      },
      {
        id: 'robert',
        name: 'Robert Di Giulio',
        role: 'Head of Growth & Client Retention',
        displayRole: 'Head of Growth & Client Retention (Robert)',
        shortRole: 'Head of Growth',
        image: '/images/team/robert di giulio.png',
        badge: 'Commercial Executive',
        icon: TrendingUp,
        color: '#D97706',
        bio: 'Leads business growth and client relationships with a focus on strategic partnerships, retention, and long-term value creation.',
        experience: '16+ Years Client Relations & Sales Strategy',
        responsibilities: ['National Growth Strategy', 'Key Client Partnerships', 'Client Retention Programs', 'Market Expansion'],
        linkedin: 'https://linkedin.com'
      }
    ],
    level3Peter: [
      {
        id: 'markus',
        parentId: 'peter',
        name: 'Markus Williams',
        role: 'National Service Manager',
        displayRole: 'National Service Manager (Markus)',
        shortRole: 'Service Manager',
        image: '/images/team/markus williams.png',
        badge: 'Service Operations',
        icon: UserCheck,
        color: '#2563EB',
        bio: 'National service operations leader dedicated to ensuring service excellence, client satisfaction, and operational efficiency across all properties.',
        experience: '12+ Years Field Operations',
        responsibilities: ['Nationwide Service Audits', 'Client Satisfaction SLA', 'On-site Operations', 'Training & Compliance'],
        linkedin: 'https://linkedin.com'
      },
      {
        id: 'danny',
        parentId: 'peter',
        name: 'Danny Fernandez',
        role: 'Head of Assets',
        displayRole: 'Head of Assets (Danny)',
        shortRole: 'Head of Assets',
        image: '/images/team/danny fernadez.png',
        badge: 'Asset & Facilities',
        icon: Wrench,
        color: '#7C3AED',
        bio: 'Asset management expert overseeing property assets, equipment lifecycle, procurement, and facility maintenance standards across all regions.',
        experience: '14+ Years Asset Strategy',
        responsibilities: ['Facility Maintenance', 'Equipment Lifecycle', 'Procurement Optimization', 'Asset Auditing'],
        linkedin: 'https://linkedin.com'
      },
      {
        id: 'vivien',
        parentId: 'peter',
        name: 'Vivien Leong',
        role: 'General Manager (Second Division)',
        displayRole: 'General Manager - Second Division (Vivien)',
        shortRole: 'GM - 2nd Division',
        image: '/images/team/vivien leong.png',
        badge: 'Division Executive',
        icon: Building2,
        color: '#DB2777',
        bio: 'Accomplished hospitality executive specializing in strategic management, operational excellence, and luxury guest service standards.',
        experience: '15+ Years Hotel Leadership',
        responsibilities: ['Division II Operations', 'Luxury Guest Standards', 'Regional Property Teams', 'Resource Management'],
        linkedin: 'https://linkedin.com'
      }
    ]
  };

  // Helper to check if node is in active hover path
  const isNodeHighlighted = (id) => {
    if (!hoveredId) return false;
    if (hoveredId === id) return true;
    
    // CEO is connected to all Level 2
    if (id === 'ceo' && (hoveredId === 'peter' || hoveredId === 'deshani' || hoveredId === 'robert' || hoveredId === 'markus' || hoveredId === 'danny' || hoveredId === 'vivien')) {
      return true;
    }
    
    // Peter is connected to CEO and Level 3 items
    if (hoveredId === 'peter' && (id === 'ceo' || id === 'markus' || id === 'danny' || id === 'vivien')) {
      return true;
    }

    // Level 3 item hovered highlights Peter and CEO
    if ((hoveredId === 'markus' || hoveredId === 'danny' || hoveredId === 'vivien') && (id === 'peter' || id === 'ceo')) {
      return true;
    }

    return false;
  };

  // Controls for tree view zoom
  const handleZoomIn = () => setZoomScale(prev => Math.min(prev + 0.15, 1.3));
  const handleZoomOut = () => setZoomScale(prev => Math.max(prev - 0.15, 0.75));
  const handleResetZoom = () => setZoomScale(1);

  return (
    <div className="leadership-tree-wrapper" style={{ width: '100%', position: 'relative' }}>
      
      {/* Dynamic Keyframes for Animations */}
      <style>{`
        @keyframes pulseLine {
          0% { stroke-dashoffset: 24; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes nodeGlow {
          0% { box-shadow: 0 0 10px rgba(200, 16, 46, 0.2); }
          50% { box-shadow: 0 0 25px rgba(200, 16, 46, 0.6); }
          100% { box-shadow: 0 0 10px rgba(200, 16, 46, 0.2); }
        }
        @keyframes floatGentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes fadeInTree {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .tree-node-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .tree-node-card:hover {
          transform: translateY(-6px) scale(1.02) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12), 0 0 0 2px #C8102E !important;
        }
        .highlighted-path {
          stroke: #C8102E !important;
          stroke-width: 3.5px !important;
          filter: drop-shadow(0 0 6px rgba(200, 16, 46, 0.7));
        }
      `}</style>

      {/* Control Toolbar Header */}
      <div style={{
        display: 'flex',
        justify: 'space-between',
        alignItems: 'center',
        marginBottom: '28px',
        flexWrap: 'wrap',
        gap: '16px',
        backgroundColor: '#F8FAFC',
        padding: '12px 20px',
        borderRadius: '16px',
        border: '1px solid #E2E8F0'
      }}>
        {/* Left: View Mode Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748B', marginRight: '4px' }}>
            VIEW MODE:
          </span>
          <button
            onClick={() => setViewMode('tree')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '10px',
              fontSize: '0.85rem',
              fontWeight: 800,
              cursor: 'pointer',
              border: viewMode === 'tree' ? '1px solid #C8102E' : '1px solid #CBD5E1',
              backgroundColor: viewMode === 'tree' ? '#C8102E' : '#FFFFFF',
              color: viewMode === 'tree' ? '#FFFFFF' : '#475569',
              boxShadow: viewMode === 'tree' ? '0 4px 12px rgba(200, 16, 46, 0.3)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <GitFork size={16} /> Interactive Tree View
          </button>
          
          <button
            onClick={() => setViewMode('grid')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '10px',
              fontSize: '0.85rem',
              fontWeight: 800,
              cursor: 'pointer',
              border: viewMode === 'grid' ? '1px solid #C8102E' : '1px solid #CBD5E1',
              backgroundColor: viewMode === 'grid' ? '#C8102E' : '#FFFFFF',
              color: viewMode === 'grid' ? '#FFFFFF' : '#475569',
              boxShadow: viewMode === 'grid' ? '0 4px 12px rgba(200, 16, 46, 0.3)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <LayoutGrid size={16} /> Executive Cards Grid
          </button>
        </div>

        {/* Right: Zoom Controls for Tree */}
        {viewMode === 'tree' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748B', marginRight: '6px' }}>
              Hover cards to highlight reporting paths
            </span>
            <div style={{ display: 'flex', backgroundColor: '#FFFFFF', borderRadius: '10px', border: '1px solid #CBD5E1', padding: '2px' }}>
              <button
                onClick={handleZoomOut}
                title="Zoom Out"
                style={{ border: 'none', background: 'transparent', padding: '6px 10px', cursor: 'pointer', color: '#475569' }}
              >
                <ZoomOut size={16} />
              </button>
              <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#1E293B', padding: '6px 4px', minWidth: '42px', textAlign: 'center' }}>
                {Math.round(zoomScale * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                title="Zoom In"
                style={{ border: 'none', background: 'transparent', padding: '6px 10px', cursor: 'pointer', color: '#475569' }}
              >
                <ZoomIn size={16} />
              </button>
              <button
                onClick={handleResetZoom}
                title="Reset Zoom"
                style={{ border: 'none', background: 'transparent', padding: '6px 10px', cursor: 'pointer', color: '#475569', borderLeft: '1px solid #E2E8F0' }}
              >
                <RotateCcw size={14} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* MODE 1: INTERACTIVE HIERARCHICAL TREE VIEW                                */}
      {/* ========================================================================= */}
      {viewMode === 'tree' && (
        <div 
          style={{
            overflowX: 'auto',
            padding: '20px 10px 40px',
            animation: 'fadeInTree 0.5s ease-out forwards',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <div 
            style={{
              minWidth: '1020px',
              maxWidth: '1200px',
              transform: `scale(${zoomScale})`,
              transformOrigin: 'top center',
              transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            {/* LEVEL 1: CEO NODE */}
            <div style={{ position: 'relative', zIndex: 10, marginBottom: '40px' }}>
              <LeadershipCard 
                leader={leadersData.ceo} 
                isCEO={true}
                isHighlighted={isNodeHighlighted('ceo')}
                onHover={(id) => setHoveredId(id)}
                onSelect={(leader) => setSelectedLeader(leader)}
              />
            </div>

            {/* SVG CONNECTION PIPELINES: CEO TO LEVEL 2 */}
            <div style={{ width: '100%', height: '50px', position: 'relative', margin: '-10px 0 10px' }}>
              <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, overflow: 'visible' }}>
                <defs>
                  <linearGradient id="treeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#C8102E" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.6" />
                  </linearGradient>
                </defs>

                {/* Main Vertical Stem from CEO */}
                <line 
                  x1="50%" y1="0" x2="50%" y2="25" 
                  stroke={hoveredId ? '#CBD5E1' : '#94A3B8'} 
                  strokeWidth="3" 
                  className={isNodeHighlighted('ceo') ? 'highlighted-path' : ''}
                />

                {/* Horizontal Rail connecting Peter, Deshani, Robert */}
                <line 
                  x1="18%" y1="25" x2="82%" y2="25" 
                  stroke={hoveredId ? '#CBD5E1' : '#94A3B8'} 
                  strokeWidth="3" 
                />

                {/* Vertical Drops to 3 Level 2 Executives */}
                {/* Drop 1: Left (Peter) */}
                <line 
                  x1="18%" y1="25" x2="18%" y2="50" 
                  stroke={hoveredId ? '#CBD5E1' : '#94A3B8'} 
                  strokeWidth="3" 
                  className={isNodeHighlighted('peter') ? 'highlighted-path' : ''}
                />
                
                {/* Drop 2: Middle (Deshani) */}
                <line 
                  x1="50%" y1="25" x2="50%" y2="50" 
                  stroke={hoveredId ? '#CBD5E1' : '#94A3B8'} 
                  strokeWidth="3" 
                  className={isNodeHighlighted('deshani') ? 'highlighted-path' : ''}
                />
                
                {/* Drop 3: Right (Robert) */}
                <line 
                  x1="82%" y1="25" x2="82%" y2="50" 
                  stroke={hoveredId ? '#CBD5E1' : '#94A3B8'} 
                  strokeWidth="3" 
                  className={isNodeHighlighted('robert') ? 'highlighted-path' : ''}
                />

                {/* Pulsing Dots on Active/Hovered Connections */}
                {hoveredId && (
                  <circle cx="50%" cy="25" r="5" fill="#C8102E">
                    <animate attributeName="r" values="4;7;4" dur="1.2s" repeatCount="indefinite" />
                  </circle>
                )}
              </svg>
            </div>

            {/* LEVEL 2: EXECUTIVE MANAGERS (PETER, DESHANI, ROBERT) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '32px',
              width: '100%',
              position: 'relative',
              zIndex: 8,
              marginBottom: '30px'
            }}>
              {leadersData.level2.map((leader) => (
                <div key={leader.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <LeadershipCard 
                    leader={leader} 
                    isHighlighted={isNodeHighlighted(leader.id)}
                    onHover={(id) => setHoveredId(id)}
                    onSelect={(l) => setSelectedLeader(l)}
                  />

                  {/* If Peter, show Expand/Collapse Button for Sub-Branch */}
                  {leader.id === 'peter' && (
                    <button
                      onClick={() => setIsPeterExpanded(!isPeterExpanded)}
                      style={{
                        marginTop: '12px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        backgroundColor: isPeterExpanded ? '#EFF6FF' : '#1E3A8A',
                        color: isPeterExpanded ? '#1E3A8A' : '#FFFFFF',
                        border: '1.5px solid #1E3A8A',
                        fontSize: '0.76rem',
                        fontWeight: 800,
                        cursor: 'pointer',
                        boxShadow: '0 2px 8px rgba(30, 58, 138, 0.15)',
                        transition: 'all 0.2s ease',
                        zIndex: 12
                      }}
                    >
                      {isPeterExpanded ? (
                        <>
                          <ChevronUp size={14} /> Collapse Sub-Team (3)
                        </>
                      ) : (
                        <>
                          <ChevronDown size={14} /> View Direct Reports (3)
                        </>
                      )}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* SVG PIPELINE FROM PETER TO LEVEL 3 SUB-TEAM */}
            {isPeterExpanded && (
              <div style={{ width: '100%', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* Connection Lines from Peter down to 3 Sub-Managers */}
                <div style={{ width: '100%', height: '55px', position: 'relative', marginTop: '-12px' }}>
                  <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, overflow: 'visible' }}>
                    {/* Vertical stem down from Peter */}
                    <line 
                      x1="18%" y1="0" x2="18%" y2="28" 
                      stroke={hoveredId ? '#CBD5E1' : '#1E3A8A'} 
                      strokeWidth="3" 
                      strokeDasharray="4 2"
                      className={isNodeHighlighted('peter') ? 'highlighted-path' : ''}
                    />

                    {/* Horizontal connector line under Peter */}
                    <line 
                      x1="8%" y1="28" x2="42%" y2="28" 
                      stroke={hoveredId ? '#CBD5E1' : '#1E3A8A'} 
                      strokeWidth="3" 
                    />

                    {/* Branch Drop 1: Markus (8%) */}
                    <line 
                      x1="8%" y1="28" x2="8%" y2="55" 
                      stroke={hoveredId ? '#CBD5E1' : '#1E3A8A'} 
                      strokeWidth="3" 
                      className={isNodeHighlighted('markus') ? 'highlighted-path' : ''}
                    />

                    {/* Branch Drop 2: Danny (25%) */}
                    <line 
                      x1="25%" y1="28" x2="25%" y2="55" 
                      stroke={hoveredId ? '#CBD5E1' : '#1E3A8A'} 
                      strokeWidth="3" 
                      className={isNodeHighlighted('danny') ? 'highlighted-path' : ''}
                    />

                    {/* Branch Drop 3: Vivien (42%) */}
                    <line 
                      x1="42%" y1="28" x2="42%" y2="55" 
                      stroke={hoveredId ? '#CBD5E1' : '#1E3A8A'} 
                      strokeWidth="3" 
                      className={isNodeHighlighted('vivien') ? 'highlighted-path' : ''}
                    />
                  </svg>
                </div>

                {/* LEVEL 3: DIRECT REPORTS UNDER PETER (MARKUS, DANNY, VIVIEN) */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '24px',
                  width: '68%',
                  marginRight: 'auto',
                  position: 'relative',
                  zIndex: 6,
                  transition: 'all 0.3s ease'
                }}>
                  {leadersData.level3Peter.map((subLeader) => (
                    <LeadershipCard 
                      key={subLeader.id}
                      leader={subLeader}
                      isSubBranch={true}
                      isHighlighted={isNodeHighlighted(subLeader.id)}
                      onHover={(id) => setHoveredId(id)}
                      onSelect={(l) => setSelectedLeader(l)}
                    />
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODE 2: GRID VIEW                                                        */}
      {/* ========================================================================= */}
      {viewMode === 'grid' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          animation: 'fadeInTree 0.4s ease-out forwards'
        }}>
          {[
            leadersData.ceo,
            ...leadersData.level2,
            ...leadersData.level3Peter
          ].map((leader) => (
            <div 
              key={leader.id}
              onClick={() => setSelectedLeader(leader)}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 32px rgba(200, 16, 46, 0.12)';
                e.currentTarget.style.borderColor = '#C8102E';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.04)';
                e.currentTarget.style.borderColor = '#E2E8F0';
              }}
            >
              <div style={{ position: 'relative', height: '220px', backgroundColor: '#F1F5F9', overflow: 'hidden' }}>
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  backgroundColor: leader.color || '#C8102E',
                  color: '#FFFFFF',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  padding: '4px 12px',
                  borderRadius: '20px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                }}>
                  {leader.badge}
                </div>
              </div>

              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1E293B', marginBottom: '4px' }}>
                  {leader.name}
                </h3>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#C8102E', marginBottom: '10px' }}>
                  {leader.role}
                </div>
                <p style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: 1.5, marginBottom: '16px', flex: 1 }}>
                  {leader.bio}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: '1px solid #F1F5F9' }}>
                  <span style={{ fontSize: '0.76rem', fontWeight: 700, color: '#0F172A', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <Info size={14} style={{ color: '#C8102E' }} /> View Executive Bio
                  </span>
                  <a 
                    href={leader.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '28px',
                      height: '28px',
                      borderRadius: '6px',
                      backgroundColor: '#EFF6FF',
                      color: '#2563EB',
                      textDecoration: 'none'
                    }}
                  >
                    <LinkedinIcon size={14} color="#2563EB" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ========================================================================= */}
      {/* EXECUTIVE MODAL POPUP FOR FULL BIO & RESPONSIBILITIES                      */}
      {/* ========================================================================= */}
      {selectedLeader && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.75)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px'
          }}
          onClick={() => setSelectedLeader(null)}
        >
          <div 
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              maxWidth: '680px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              position: 'relative',
              animation: 'fadeInTree 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedLeader(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1E293B',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                zIndex: 10
              }}
            >
              <X size={20} />
            </button>

            {/* Header Banner */}
            <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
              <div style={{ width: '200px', height: '220px', flexShrink: 0, overflow: 'hidden' }}>
                <img 
                  src={selectedLeader.image} 
                  alt={selectedLeader.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                />
              </div>

              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: selectedLeader.color || '#C8102E',
                  backgroundColor: '#FFF0F2',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  marginBottom: '10px',
                  width: 'fit-content'
                }}>
                  {selectedLeader.icon && <selectedLeader.icon size={14} />} {selectedLeader.badge}
                </div>

                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                  {selectedLeader.name}
                </h3>
                
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#C8102E', marginBottom: '12px' }}>
                  {selectedLeader.role}
                </div>

                <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>
                  🏆 {selectedLeader.experience}
                </div>
              </div>
            </div>

            {/* Body Content */}
            <div style={{ padding: '28px' }}>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '8px' }}>
                Executive Biography
              </h4>
              <p style={{ fontSize: '0.92rem', color: '#334155', lineHeight: 1.6, marginBottom: '24px' }}>
                {selectedLeader.bio}
              </p>

              {selectedLeader.responsibilities && (
                <>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '12px' }}>
                    Key Focus Areas & Leadership Responsibilities
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '24px' }}>
                    {selectedLeader.responsibilities.map((resp, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155', backgroundColor: '#F8FAFC', padding: '8px 12px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                        <Sparkles size={14} style={{ color: '#C8102E', flexShrink: 0 }} />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', paddingTop: '16px', borderTop: '1px solid #F1F5F9' }}>
                <a
                  href={selectedLeader.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '10px 20px',
                    borderRadius: '10px',
                    backgroundColor: '#0A66C2',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 12px rgba(10, 102, 194, 0.25)'
                  }}
                >
                  <LinkedinIcon size={16} color="#FFFFFF" /> Connect on LinkedIn
                </a>
                <button
                  onClick={() => setSelectedLeader(null)}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '10px',
                    backgroundColor: '#F1F5F9',
                    color: '#475569',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    border: 'none',
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
  );
}

// =================================================================================
// REUSABLE LEADERSHIP NODE CARD COMPONENT
// =================================================================================
function LeadershipCard({ leader, isCEO, isSubBranch, isHighlighted, onHover, onSelect }) {
  const IconComp = leader.icon || ShieldCheck;

  return (
    <div
      className="tree-node-card"
      onMouseEnter={() => onHover(leader.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onSelect(leader)}
      style={{
        width: isCEO ? '290px' : isSubBranch ? '220px' : '250px',
        backgroundColor: '#FFFFFF',
        borderRadius: isCEO ? '20px' : '16px',
        border: isHighlighted ? '2px solid #C8102E' : isCEO ? '2px solid #C8102E' : '1px solid #E2E8F0',
        boxShadow: isHighlighted 
          ? '0 16px 36px rgba(200, 16, 46, 0.22)' 
          : isCEO 
          ? '0 12px 28px rgba(200, 16, 46, 0.15)' 
          : '0 6px 18px rgba(0,0,0,0.04)',
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative',
        animation: isCEO ? 'floatGentle 4s ease-in-out infinite' : 'none'
      }}
    >
      {/* CEO Crown / Executive Top Accent Banner */}
      <div style={{
        height: isCEO ? '6px' : '4px',
        backgroundColor: leader.color || '#C8102E',
        width: '100%'
      }}></div>

      <div style={{ padding: isCEO ? '20px 18px 18px' : '16px 14px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Avatar Image Frame */}
        <div style={{
          position: 'relative',
          width: isCEO ? '96px' : isSubBranch ? '72px' : '84px',
          height: isCEO ? '96px' : isSubBranch ? '72px' : '84px',
          borderRadius: '50%',
          padding: '3px',
          backgroundColor: '#FFFFFF',
          border: isCEO ? '3px solid #C8102E' : '2px solid #E2E8F0',
          boxShadow: isCEO ? '0 8px 20px rgba(200, 16, 46, 0.2)' : '0 4px 12px rgba(0,0,0,0.06)',
          marginBottom: '12px'
        }}>
          <img 
            src={leader.image} 
            alt={leader.name} 
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover',
              objectPosition: 'top center'
            }}
          />
          
          {/* Badge Icon Overlay */}
          <div style={{
            position: 'absolute',
            bottom: '-2px',
            right: '-2px',
            width: isCEO ? '28px' : '24px',
            height: isCEO ? '28px' : '24px',
            borderRadius: '50%',
            backgroundColor: leader.color || '#C8102E',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
          }}>
            <IconComp size={isCEO ? 14 : 12} />
          </div>
        </div>

        {/* Name */}
        <h3 style={{
          fontSize: isCEO ? '1.25rem' : isSubBranch ? '0.98rem' : '1.08rem',
          fontWeight: 800,
          color: '#0F172A',
          marginBottom: '4px',
          lineHeight: 1.2
        }}>
          {leader.name}
        </h3>

        {/* Display Role Label */}
        <div style={{
          fontSize: isCEO ? '0.84rem' : isSubBranch ? '0.74rem' : '0.78rem',
          fontWeight: 800,
          color: '#C8102E',
          lineHeight: 1.3,
          marginBottom: '8px',
          minHeight: isSubBranch ? '32px' : 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {leader.displayRole || leader.role}
        </div>

        {/* Tag / Division Badge */}
        <span style={{
          fontSize: '0.68rem',
          fontWeight: 700,
          letterSpacing: '0.3px',
          textTransform: 'uppercase',
          padding: '3px 10px',
          borderRadius: '12px',
          backgroundColor: '#F1F5F9',
          color: '#475569',
          marginBottom: isCEO ? '10px' : '4px'
        }}>
          {leader.badge}
        </span>

        {/* Hover Click Hint */}
        <div style={{
          fontSize: '0.68rem',
          fontWeight: 700,
          color: '#94A3B8',
          marginTop: '6px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          Click for profile →
        </div>

      </div>
    </div>
  );
}
