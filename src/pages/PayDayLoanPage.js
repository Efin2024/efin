import { Link } from 'react-router-dom';
import './PayDayLoanPage.css';

const paydayUses = [
  { icon: '💊', title: 'Medical Need', text: 'Cover urgent medicines, diagnostics, or sudden doctor visits before salary day.' },
  { icon: '🏠', title: 'Household Bills', text: 'Manage electricity, rent top-ups, groceries, and utility payments without disruption.' },
  { icon: '🧾', title: 'Unexpected Expenses', text: 'Handle repairs, fees, or last-minute commitments with a short-term buffer.' },
  { icon: '🚌', title: 'Travel & Commute', text: 'Stay on track with work travel, fuel, and transport costs during a tight month.' },
];

const paydayBenefits = [
  {
    title: 'Fast digital approval',
    text: 'Share basic details, complete verification online, and move from application to decision in minutes.',
  },
  {
    title: 'Salary-cycle repayment',
    text: 'Built for salaried borrowers with repayment timed around the next paycheck for better cash-flow control.',
  },
  {
    title: 'No collateral stress',
    text: 'Access short-term support without pledging assets or running through a heavy paperwork process.',
  },
  {
    title: 'Clear, upfront pricing',
    text: 'Review charges, tenure, and repayment amount before you confirm your application.',
  },
];

const paydayEligibility = [
  { icon: '🇮🇳', title: 'Resident', text: 'Indian citizen with valid KYC documents' },
  { icon: '💼', title: 'Employment', text: 'Salaried professional with regular monthly income' },
  { icon: '🎂', title: 'Age', text: '21 to 58 years' },
  { icon: '🏦', title: 'Bank Account', text: 'Active salary account for disbursal and repayment' },
];

const paydaySteps = [
  { number: '01', title: 'Check your eligibility', text: 'Fill in basic details and verify mobile information to begin.' },
  { number: '02', title: 'Complete digital KYC', text: 'Upload PAN, Aadhaar, and income details through the online journey.' },
  { number: '03', title: 'Select your amount', text: 'Choose a suitable short-term loan amount based on your requirement.' },
  { number: '04', title: 'Receive funds quickly', text: 'Once approved, the amount is transferred directly to your bank account.' },
];

const paydayFaqs = [
  {
    question: 'What is a PayDay loan?',
    answer:
      'A PayDay loan is a short-term loan designed to help salaried customers manage urgent expenses until their next salary credit.',
  },
  {
    question: 'Who can apply for a PayDay loan?',
    answer:
      'Salaried Indian residents who meet the age, KYC, and income requirements can apply through the digital journey.',
  },
  {
    question: 'How quickly can I get the money?',
    answer:
      'After successful verification and approval, disbursal is designed to be fast and typically goes directly to your bank account.',
  },
  {
    question: 'Do I need collateral?',
    answer:
      'No. The PayDay product is structured as a short-term unsecured loan, so no collateral is required.',
  },
];

function PayDayLoanPage() {
  return (
    <div className="page payday-page">
      <section className="payday-hero">
        <div className="payday-hero-grid">
          <div className="payday-hero-copy">
            <span className="payday-badge">💸 Short-Term Salary Support</span>
            <h1>
              Meet Urgent Expenses Before Your <span className="gradient-text">PayDay</span>
            </h1>
            <p className="payday-description">
              Access a quick short-term loan for salary-cycle needs with a simple digital process,
              fast approval, and repayment designed around your next paycheck.
            </p>

            <div className="payday-highlight-grid">
              <div className="payday-highlight-card">
                <strong>Up to ₹50,000</strong>
                <span>Loan amount</span>
              </div>
              <div className="payday-highlight-card">
                <strong>Quick approval</strong>
                <span>Fast online process</span>
              </div>
              <div className="payday-highlight-card">
                <strong>Short tenure</strong>
                <span>Repay with salary cycle</span>
              </div>
            </div>

            <div className="payday-cta">
              <Link to="/support/contact" className="primary-btn large">
                Apply Now →
              </Link>
              <Link to="/resources/eligibility-calculator" className="ghost-btn large">
                Check Eligibility
              </Link>
            </div>

            <div className="payday-trust-row">
              <span>🔒 Secure digital flow</span>
              <span>📄 Minimal documentation</span>
              <span>⚡ Built for urgent needs</span>
            </div>
          </div>

          <div className="payday-hero-visual">
            <div className="payday-visual-card">
              <div className="payday-visual-top">
                <span className="payday-visual-chip">Salary-linked support</span>
                <h3>Short-term cash support when timing matters</h3>
                <p>Built for planned bills, unexpected costs, and end-of-month cash gaps.</p>
              </div>
              <div className="payday-stat-stack">
                <div className="payday-stat-card">
                  <strong>Minutes</strong>
                  <span>Digital review journey</span>
                </div>
                <div className="payday-stat-card">
                  <strong>No collateral</strong>
                  <span>Unsecured support</span>
                </div>
                <div className="payday-stat-card accent">
                  <strong>Next salary cycle</strong>
                  <span>Repayment focus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="payday-section">
        <div className="section-heading">
          <span className="eyebrow">Useful When Time Is Tight</span>
          <h2>What You Can Use a PayDay Loan For</h2>
          <p>Short-term support for everyday situations that cannot wait for the next salary credit.</p>
        </div>
        <div className="payday-card-grid">
          {paydayUses.map((item) => (
            <article key={item.title} className="payday-use-card">
              <span className="payday-card-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="payday-feature-panel">
        <div className="section-heading">
          <span className="eyebrow">Why Choose E-Fin</span>
          <h2>Made for Quick, Responsible Borrowing</h2>
          <p>A focused short-term product with the same clean, transparent experience as the rest of the website.</p>
        </div>
        <div className="payday-benefit-grid">
          {paydayBenefits.map((item, index) => (
            <article key={item.title} className={`payday-benefit-card${index === 0 ? ' wide' : ''}`}>
              <span className="payday-benefit-index">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="payday-section">
        <div className="section-heading">
          <span className="eyebrow">Simple Qualification</span>
          <h2>Eligibility Criteria</h2>
          <p>Basic requirements that support a smooth digital application process.</p>
        </div>
        <div className="payday-eligibility-grid">
          {paydayEligibility.map((item) => (
            <article key={item.title} className="payday-eligibility-card">
              <span className="payday-card-icon">{item.icon}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="payday-process">
        <div className="section-heading">
          <span className="eyebrow">How It Works</span>
          <h2>Apply in 4 Simple Steps</h2>
          <p>From checking eligibility to receiving funds, the process stays simple and fully online.</p>
        </div>
        <div className="payday-process-grid">
          {paydaySteps.map((step) => (
            <article key={step.number} className="payday-step-card">
              <span className="payday-step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="payday-section">
        <div className="payday-pricing-panel">
          <div>
            <span className="eyebrow">Transparent Overview</span>
            <h2>What To Expect</h2>
            <p>
              The final offer depends on your profile and verification results, but the journey is designed
              to keep the product clear, short-term, and easy to understand.
            </p>
          </div>
          <div className="payday-pricing-grid">
            <div className="payday-pricing-card">
              <strong>Loan amount</strong>
              <span>Up to ₹50,000</span>
            </div>
            <div className="payday-pricing-card">
              <strong>Tenure</strong>
              <span>Short-term, salary aligned</span>
            </div>
            <div className="payday-pricing-card">
              <strong>Process</strong>
              <span>Digital application and KYC</span>
            </div>
            <div className="payday-pricing-card">
              <strong>Security</strong>
              <span>No collateral required</span>
            </div>
          </div>
        </div>
      </section>

      <section className="payday-section payday-faq-section">
        <div className="section-heading">
          <span className="eyebrow">FAQs</span>
          <h2>PayDay Loan, Explained Simply</h2>
          <p>Quick answers to the most common questions users may have before applying.</p>
        </div>
        <div className="payday-faq-grid">
          {paydayFaqs.map((faq) => (
            <details key={faq.question} className="payday-faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="payday-bottom-cta">
        <div>
          <span className="eyebrow">Ready To Apply?</span>
          <h2>Get Started with E-Fin PayDay</h2>
          <p>Take the next step with a short-term loan page that stays aligned with your current website design.</p>
        </div>
        <Link to="/support/contact" className="primary-btn large">
          Apply for PayDay Loan
        </Link>
      </section>
    </div>
  );
}

export default PayDayLoanPage;
