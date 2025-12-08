import { useState } from 'react';

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

const OPEN_ROLES = [
  {
    title: 'Senior Credit Analyst',
    location: 'Noida • Risk',
    tags: ['NBFC', 'Underwriting', 'Policy'],
  },
  {
    title: 'Growth Product Manager',
    location: 'Bengaluru • Product',
    tags: ['Lifecycle', 'Martech', 'CX'],
  },
  {
    title: 'Lead Android Engineer',
    location: 'Hybrid • Engineering',
    tags: ['Kotlin', 'Jetpack', 'Payments'],
  },
];

const PERKS = [
  'Market-leading health cover for families & parents',
  'ESOP program across mid-senior roles',
  'Women-in-credit leadership cohorts',
  'Exposure to RBI committees & fintech councils',
];

function CareersPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  return (
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

      <section className="section roles-section">
        <header className="section-heading">
          <span className="eyebrow">Open roles</span>
          <h2>We&apos;re hiring across risk, product, and tech</h2>
        </header>
        <div className="roles-grid">
          {OPEN_ROLES.map((role) => (
            <article key={role.title} className="role-card">
              <div>
                <h3>{role.title}</h3>
                <p>{role.location}</p>
              </div>
              <div className="tag-row">
                {role.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <button type="button" className="ghost-btn">
                View details
              </button>
            </article>
          ))}
        </div>
        <p className="section-note">Didn&apos;t find your role? Write to Care@efin.co.in with your portfolio.</p>
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
            <a className="primary-btn" href="mailto:Care@efin.co.in">
              Email Care@efin.co.in
            </a>
            <a className="ghost-btn" href="mailto:Care@efin.co.in">
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
                <input id="career-name" name="name" type="text" required placeholder="Your name" />
              </label>
              <label htmlFor="career-email">
                Email
                <input
                  id="career-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
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
              />
            </label>
            <button type="submit" className="primary-btn">
              Submit application
            </button>
            {formSubmitted && <p className="form-note success">Thanks! Our team will reach out shortly.</p>}
          </form>
        </div>
      </section>
    </div>
  );
}

export default CareersPage;
