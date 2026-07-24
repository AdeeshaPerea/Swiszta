import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function CareersPage() {
  const [appliedRole, setAppliedRole] = useState(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const openings = [
    { title: 'Executive Housekeeper / Supervisor', location: 'Melbourne, VIC', type: 'Full Time', dept: 'Housekeeping' },
    { title: 'Commercial Laundry Operations Manager', location: 'Tullamarine, VIC', type: 'Full Time', dept: 'Laundry Logistics' },
    { title: 'Hotel Maintenance Engineer', location: 'Sydney, NSW', type: 'Full Time', dept: 'Facilities' },
    { title: '5-Star Hotel Housekeeping Attendants', location: 'Brisbane & Gold Coast, QLD', type: 'Casual / Part Time', dept: 'Housekeeping' },
    { title: 'Front Desk Concierge Specialist', location: 'Melbourne, VIC', type: 'Full Time', dept: 'Guest Relations' }
  ];

  const handleApply = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '60px 0 80px', background: '#FAFAFA' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '2px', color: '#C8102E', textTransform: 'uppercase' }}>
            CAREERS AT SWISZTA
          </span>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginTop: '10px', marginBottom: '20px' }}>
            Join Australia’s Leading Hospitality Team
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#4A5568', lineHeight: '1.7' }}>
            Build a rewarding career with SWISZTA. We offer industry-leading training, fair compensation, career advancement opportunities, and a supportive workplace culture.
          </p>
        </div>

        {/* Current Openings */}
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '24px' }}>Current Job Openings</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '60px' }}>
            {openings.map((job, idx) => (
              <div key={idx} style={{ background: '#FFFFFF', padding: '24px', borderRadius: '12px', border: '1px solid #E5E9EC', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1E252B' }}>{job.title}</h3>
                  <div style={{ display: 'flex', gap: '20px', marginTop: '8px', fontSize: '0.84rem', color: '#718096' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <MapPin size={14} style={{ color: '#C8102E' }} /> {job.location}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Clock size={14} style={{ color: '#C8102E' }} /> {job.type}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Briefcase size={14} style={{ color: '#C8102E' }} /> {job.dept}
                    </span>
                  </div>
                </div>
                <button className="btn btn-outline-dark" onClick={() => setAppliedRole(job.title)}>
                  APPLY NOW
                </button>
              </div>
            ))}
          </div>

          {/* Quick Application Modal / Form */}
          {appliedRole && (
            <div style={{ background: '#FFFFFF', padding: '36px', borderRadius: '16px', border: '2px solid #C8102E', boxShadow: '0 12px 36px rgba(0,0,0,0.1)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <CheckCircle2 size={56} style={{ color: '#C8102E', margin: '0 auto 16px' }} />
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '8px' }}>Application Received!</h3>
                  <p style={{ color: '#657380' }}>Thank you <strong>{applicantName}</strong> for applying for <strong>{appliedRole}</strong>. Our HR team will reach out via email.</p>
                </div>
              ) : (
                <form onSubmit={handleApply}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>Quick Apply: {appliedRole}</h3>
                  <p style={{ fontSize: '0.88rem', color: '#657380', marginBottom: '20px' }}>Submit your details to start your application process.</p>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input type="text" className="form-input" required value={applicantName} onChange={(e) => setApplicantName(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input type="email" className="form-input" required value={applicantEmail} onChange={(e) => setApplicantEmail(e.target.value)} />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Hospitality Experience Summary</label>
                    <textarea className="form-textarea" rows="3" placeholder="Briefly describe your hotel or housekeeping experience..."></textarea>
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button type="submit" className="btn btn-red">
                      SUBMIT APPLICATION <Send size={16} />
                    </button>
                    <button type="button" className="btn btn-outline-dark" onClick={() => setAppliedRole(null)}>
                      CANCEL
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
