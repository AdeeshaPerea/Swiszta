import React from 'react';

/**
 * Official SWISZTA Logo Component
 * @param {string} variant - 'light' (default, black text) or 'dark' (white text for dark backgrounds)
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {boolean} showTagline - whether to show "CARE. COMFORT. EXCELLENCE."
 * @param {string} className - extra CSS classes
 * @param {object} style - inline styles
 * @param {function} onClick - click event handler
 */
export default function Logo({
  variant = 'light',
  size = 'md',
  showTagline = true,
  className = '',
  style = {},
  onClick
}) {
  const isDark = variant === 'dark';

  // Size scaling multipliers
  const scale = size === 'sm' ? 0.75 : size === 'lg' ? 1.25 : 1;

  const textColor = isDark ? '#FFFFFF' : '#111111';
  const taglineColor = isDark ? '#A0AEC0' : '#64748B';

  return (
    <div 
      className={`swiszta-brand-logo ${className}`}
      onClick={onClick}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        cursor: onClick ? 'pointer' : 'default',
        userSelect: 'none',
        lineHeight: 1,
        ...style
      }}
    >
      {/* Top Row: 4-Square Icon Grid + Brand Name SWISZTA™ */}
      <div style={{ display: 'flex', alignItems: 'center', gap: `${10 * scale}px` }}>
        
        {/* 2x2 Square Icon Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: `${2.5 * scale}px`,
          width: `${24 * scale}px`,
          height: `${24 * scale}px`,
          flexShrink: 0
        }}>
          <div style={{ background: '#8C0E1E', borderRadius: `${3 * scale}px` }} />
          <div style={{ background: '#EE1C25', borderRadius: `${3 * scale}px` }} />
          <div style={{ background: '#FF4D30', borderRadius: `${3 * scale}px` }} />
          <div style={{ background: '#E5185D', borderRadius: `${3 * scale}px` }} />
        </div>

        {/* SWISZTA™ Typography */}
        <div style={{ display: 'flex', alignItems: 'baseline', fontFamily: 'Outfit, Inter, sans-serif', fontWeight: 800, fontSize: `${1.5 * scale}rem`, letterSpacing: '1px' }}>
          <span style={{ color: textColor }}>SWIS</span>
          <span style={{ color: '#EE1C25', display: 'inline-flex', alignItems: 'center' }}>
            ZT
            {/* Custom Apex Chevron 'A' */}
            <svg 
              width={`${20 * scale}`} 
              height={`${20 * scale}`} 
              viewBox="0 0 24 24" 
              fill="none" 
              style={{ display: 'inline-block', marginLeft: '1px', verticalAlign: 'middle' }}
            >
              <path d="M 4 22 L 12 4 L 20 22" stroke="#EE1C25" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="miter" />
            </svg>
          </span>
          <sup style={{ color: '#EE1C25', fontSize: `${0.55 * scale}rem`, fontWeight: 700, marginLeft: '1px', top: '-0.7em' }}>TM</sup>
        </div>
      </div>

      {/* Subtitle: HOTEL & HOSPITALITY SERVICES */}
      <div style={{
        marginTop: `${4 * scale}px`,
        fontSize: `${0.62 * scale}rem`,
        fontWeight: 700,
        letterSpacing: `${2.2 * scale}px`,
        color: textColor,
        textTransform: 'uppercase',
        fontFamily: 'Outfit, Inter, sans-serif',
        whiteSpace: 'nowrap'
      }}>
        HOTEL &amp; HOSPITALITY SERVICES
      </div>

      {/* Tagline: CARE. COMFORT. EXCELLENCE. */}
      {showTagline && (
        <div style={{
          marginTop: `${3 * scale}px`,
          fontSize: `${0.52 * scale}rem`,
          fontWeight: 600,
          letterSpacing: `${2.8 * scale}px`,
          color: taglineColor,
          textTransform: 'uppercase',
          fontFamily: 'Inter, sans-serif',
          whiteSpace: 'nowrap'
        }}>
          CARE. COMFORT. EXCELLENCE.
        </div>
      )}
    </div>
  );
}
