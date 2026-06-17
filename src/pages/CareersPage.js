import React, { useState } from 'react';
import { useLeadCapture } from '../hooks/useLeadCapture';

const CULTURE_VALUES = [
  {
    title: 'Ownership mindset',
    copy: 'Small, empowered pods ship end-to-end journeys—from underwriting models to partner integrations.',
  },
  {
    title: 'Learning wallets',
    copy: 'Every teammate gets an annual budget for certifications, conferences, and mentorship programs.',
  },
  {
    title: 'Flexibility with guardrails',
    copy: 'We run hybrid hubs in NCR and Bengaluru with asynchronous rituals, wellbeing days, and no-meeting Fridays.',
  },
];

const PERKS = [
  'Market-leading health cover for families & parents',
  'ESOP program across mid-senior roles',
  'Women-in-credit leadership cohorts',
  'Exposure to RBI committees & fintech councils',
];

function CareersPage() {
  const { captureLead, isLoading } = useLeadCapture();
  const [localSuccess, setLocalSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataToSubmit = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      source: 'Career Application',
      message: formData.message,
      additionalData: { type: 'Job Application' }
    };
    if (formData.resume) {
      dataToSubmit.additionalData.resumeFileName = formData.resume.name;
    }
    
    const result = await captureLead(dataToSubmit);
    
    if (result) {
      // Clear form state
      setFormData({ name: '', email: '', phone: '', message: '', resume: null });
      
      // Clear file input visually
      const fileInput = document.getElementById('career-resume');
      if (fileInput) fileInput.value = '';

      // Show toast
      setLocalSuccess(true);
      setTimeout(() => {
        setLocalSuccess(false);
      }, 5000);
    }
  };

  return (
    <>
      {/* Top Toast Notification */}
      {localSuccess && (
          <div className="contact-toast-top" style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#4caf50', color: 'white', padding: '15px 30px', borderRadius: '8px', zIndex: 1000, display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <span className="toast-icon">✓</span>
              <p style={{ margin: 0 }}>Application submitted successfully! Our team will reach out to you.</p>
          </div>
      )}
      <div className="page careers-page">
        <section className="page-hero">
        <div className="page-hero-body">
          <span className="badge">Careers @ E-Fin</span>
          <h1>Build credit products India trusts</h1>
          <p>
            Join MLB Securities Private Limited (E-Fin) to craft lending experiences that keep young professionals and
            MSMEs financially confident. We blend compliance-first rigour with startup speed.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="grid three">
          {CULTURE_VALUES.map((value) => (
            <article key={value.title} className="benefit-card">
              <h3>{value.title}</h3>
              <p>{value.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section perks-section">
        <div className="company-card">
          <h2>Life at E-Fin</h2>
          <ul className="mission-list">
            {PERKS.map((perk) => (
              <li key={perk}>{perk}</li>
            ))}
          </ul>
        </div>
        <div className="contact-cta">
          <div>
            <h3>Ready to apply?</h3>
            <p>Share your resume and a short note on how you plan to reshape inclusive credit.</p>
          </div>
          <div className="contact-buttons">
            <a className="primary-btn" href="mailto:care@mlbsecurities.com">
              Email care@mlbsecurities.com
            </a>
            <a className="ghost-btn" href="mailto:care@mlbsecurities.com">
              Talk to People Ops
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="company-card career-form-card">
          <h2>Send us your profile</h2>
          <p>Drop your details and our Talent team will get back to you.</p>
          <form className="career-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <label htmlFor="career-name">
                Full name
                <input
                  id="career-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="career-email">
                Email
                <input
                  id="career-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="career-phone">
                Phone
                <input
                  id="career-phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 99999 99999"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="career-resume">
                Resume (PDF/Doc)
                <input
                  id="career-resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  required
                  onChange={handleChange}
                />
              </label>
            </div>
            <label className="career-message" htmlFor="career-message">
              Message
              <textarea
                id="career-message"
                name="message"
                rows="4"
                placeholder="Tell us about your experience and the role you’re interested in"
                value={formData.message}
                onChange={handleChange}
              />
            </label>
            <button type="submit" className="primary-btn" disabled={isLoading}>
              {isLoading ? 'Submitting...' : 'Submit application'}
            </button>
          </form>
        </div>
      </section>
    </div>
    </>
  );
}

export default CareersPage;
