import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, PhoneCall, Mail } from 'lucide-react';

const faqItems = [
  {
    question: 'How quickly can SWISZTA mobilize service teams for a new hotel property?',
    answer: 'We offer rapid mobilization capabilities. Depending on the size of your property, our executive onboarding team can deploy trained room attendants, laundry logistics, and management staff within 7 to 14 days, complete with full SLA alignment.'
  },
  {
    question: 'How does SWISZTA ensure 5-star housekeeping quality and SLA compliance?',
    answer: 'Every property is assigned a dedicated Quality Assurance Manager. We utilize real-time digital inspection checklists, daily room audits, and rigorous training at our SWISZTA Academy to maintain a consistent 99.4%+ SLA compliance record.'
  },
  {
    question: 'What WHS, insurance, and sustainability accreditations does SWISZTA hold?',
    answer: 'SWISZTA operates under ISO-certified Safety, Quality, and Environmental Management systems. We maintain full WorkCover compliance, $20M Public Liability Insurance, and utilize eco-certified biodegradable cleaning products across all client sites.'
  },
  {
    question: 'Can SWISZTA handle peak seasonal fluctuations and sudden occupancy spikes?',
    answer: 'Yes. Our nationwide workforce of over 2,000 trained professionals allows us to scale staffing levels seamlessly during high-occupancy seasons, major regional events, and unexpected surge demands.'
  },
  {
    question: 'What service contract models and pricing structures do you offer?',
    answer: 'We offer flexible agreement models including Cost-Per-Occupied-Room (CPOR), fixed monthly facility management fees, or hybrid performance-based SLAs designed to optimize property operating margins.'
  }
];

export default function FAQSection({ onOpenQuote }) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (index) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section style={{ backgroundColor: '#FFFFFF', padding: '64px 0 72px', borderTop: '1px solid #E2E8F0' }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '1.5px', color: '#C8102E', textTransform: 'uppercase', marginBottom: '8px' }}>
            <span style={{ width: '6px', height: '6px', backgroundColor: '#C8102E', transform: 'rotate(45deg)', display: 'inline-block' }}></span>
            FREQUENTLY ASKED QUESTIONS
            <span style={{ width: '6px', height: '6px', backgroundColor: '#C8102E', transform: 'rotate(45deg)', display: 'inline-block' }}></span>
          </div>

          <h2 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#1E252B', letterSpacing: '-0.5px', marginBottom: '10px' }}>
            Everything You Need to Know About <span style={{ color: '#C8102E' }}>Partnering With Us.</span>
          </h2>

          <p style={{ fontSize: '0.92rem', color: '#4A5568', margin: 0 }}>
            Have questions about our service agreements, onboarding, or SLA guarantees? Here are quick answers.
          </p>
        </div>

        {/* Accordion FAQ Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
          {faqItems.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                style={{
                  backgroundColor: isOpen ? '#FFFFFF' : '#FAFAFA',
                  border: isOpen ? '1.5px solid #C8102E' : '1px solid #E2E8F0',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  boxShadow: isOpen ? '0 8px 24px rgba(200, 16, 46, 0.1)' : 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '18px 24px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <HelpCircle size={20} style={{ color: isOpen ? '#C8102E' : '#64748B', flexShrink: 0 }} />
                    <span style={{ fontSize: '1rem', fontWeight: 800, color: isOpen ? '#C8102E' : '#1E252B' }}>
                      {faq.question}
                    </span>
                  </div>

                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: isOpen ? '#FFF0F2' : '#EDF2F7',
                    color: isOpen ? '#C8102E' : '#64748B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                {isOpen && (
                  <div style={{ padding: '0 24px 20px 56px', fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, borderTop: '1px solid #F1F5F9', paddingTop: '14px' }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Contact Box */}
        <div style={{
          backgroundColor: '#F8FAFC',
          border: '1px solid #E2E8F0',
          borderRadius: '16px',
          padding: '24px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
          textAlign: 'left'
        }}>
          <div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#1E252B' }}>
              Have Specific Property Questions?
            </div>
            <div style={{ fontSize: '0.82rem', color: '#64748B', marginTop: '2px' }}>
              Our executive partnership team is ready to discuss your custom hospitality requirements.
            </div>
          </div>

          <button
            onClick={onOpenQuote}
            className="btn btn-red"
            style={{ padding: '12px 24px', fontSize: '0.86rem', fontWeight: 800 }}
          >
            SPEAK WITH AN EXECUTIVE <PhoneCall size={15} style={{ marginLeft: '6px' }} />
          </button>
        </div>

      </div>
    </section>
  );
}
