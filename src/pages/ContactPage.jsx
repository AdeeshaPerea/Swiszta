import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '60px 0 80px', background: '#FAFAFA' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '2px', color: '#C8102E', textTransform: 'uppercase' }}>
            CONTACT SWISZTA
          </span>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginTop: '10px', marginBottom: '20px' }}>
            We're Here to Help Your Property Succeed
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#4A5568', lineHeight: '1.7' }}>
            Get in touch with our client support team for inquiries regarding hotel service contracts, partnerships, or operational support.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '48px', alignItems: 'start' }}>
          {/* Contact Details Card */}
          <div style={{ background: '#FFFFFF', padding: '36px', borderRadius: '16px', border: '1px solid #E5E9EC', boxShadow: '0 8px 24px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '24px' }}>Headquarters & Contact</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(200, 16, 46, 0.08)', color: '#C8102E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1E252B' }}>Phone Enquiries</h4>
                  <p style={{ fontSize: '1.05rem', fontWeight: 700, color: '#C8102E', marginTop: '2px' }}>1300 794 477</p>
                  <p style={{ fontSize: '0.8rem', color: '#718096' }}>Toll Free Australia-Wide</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(200, 16, 46, 0.08)', color: '#C8102E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1E252B' }}>Email Support</h4>
                  <p style={{ fontSize: '1rem', fontWeight: 600, color: '#1E252B', marginTop: '2px' }}>info@swiszta.com</p>
                  <p style={{ fontSize: '0.8rem', color: '#718096' }}>24/7 Service Desk Monitored</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(200, 16, 46, 0.08)', color: '#C8102E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1E252B' }}>Office Address</h4>
                  <p style={{ fontSize: '0.92rem', color: '#4A5568', marginTop: '2px', lineHeight: '1.5' }}>
                    1/42 Global Drive, Tullamarine VIC 3049, Australia
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(200, 16, 46, 0.08)', color: '#C8102E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Clock size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1E252B' }}>Operating Hours</h4>
                  <p style={{ fontSize: '0.86rem', color: '#4A5568', marginTop: '2px' }}>
                    Monday – Friday: 8:00 AM – 6:00 PM AEST<br />
                    Emergency On-Call Operations: 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ background: '#FFFFFF', padding: '36px', borderRadius: '16px', border: '1px solid #E5E9EC', boxShadow: '0 8px 24px rgba(0,0,0,0.05)' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <CheckCircle2 size={56} style={{ color: '#C8102E', margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '8px' }}>Message Sent!</h3>
                <p style={{ color: '#657380' }}>Thank you <strong>{formData.name}</strong>. Your message has been routed to our client management team.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '20px' }}>Send Us a Message</h3>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input type="text" className="form-input" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input type="email" className="form-input" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input type="tel" className="form-input" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input type="text" className="form-input" placeholder="e.g. Contract Inquiry" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Your Message *</label>
                  <textarea className="form-textarea" rows="4" required placeholder="How can SWISZTA assist your hotel..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
                </div>

                <button type="submit" className="btn btn-red" style={{ width: '100%', padding: '14px' }}>
                  SEND MESSAGE <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
