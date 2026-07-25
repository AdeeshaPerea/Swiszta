import React from 'react';

export default function WatermarkOverlay({ text = "PREVIEW MODE • DEMO VERSION • SWISZTA" }) {
  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 99999,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justify: 'space-around',
        overflow: 'hidden',
        opacity: 0.12,
        userSelect: 'none'
      }}
    >
      {Array.from({ length: 24 }).map((_, index) => (
        <div 
          key={index}
          style={{
            transform: 'rotate(-25deg)',
            fontSize: '1.6rem',
            fontWeight: 900,
            color: '#1E252B',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            padding: '40px 60px',
            whiteSpace: 'nowrap'
          }}
        >
          {text}
        </div>
      ))}
    </div>
  );
}
