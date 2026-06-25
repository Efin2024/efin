import { Link } from 'react-router-dom';
import './PayDayLoanPage.css';

const trustPoints = ['Instant approval flow', '100% digital journey', 'Salary-linked repayment'];

const snapshotMetrics = [
  { value: 'Up to ₹1,00,000', label: 'Flexible loan amount' },
  { value: 'Minutes', label: 'Approval can move quickly' },
  { value: 'No collateral', label: 'Unsecured short-term loan' },
  { value: 'Salary-linked plan', label: 'Repayment built around payday' },
];

const snapshotBullets = [
  'Quick digital process from application to approval',
  'Minimal documentation and simple online verification',
  'Short-term support for urgent salary-cycle needs',
];

const statCards = [
  { value: '₹1,00,000', label: 'Flexible loan amount for urgent needs' },
  { value: 'Minutes', label: 'Approval and review can move quickly' },
  { value: 'Custom plan', label: 'Short-term repayment around salary timing' },
];

const featureCards = [
  {
    title: 'Instant loan approval experience',
    text: 'Get approved in minutes, not days. E-Fin keeps the process simple so urgent needs do not wait for traditional timelines.',
    highlight: 'Fast approval',
  },
  {
    title: 'Completely digital from your phone',
    text: 'Finish the journey online with minimal paperwork, no branch runs, and a cleaner borrowing experience for salaried users.',
    highlight: 'Digital journey',
  },
  {
    title: 'Flexible repayment that fits your cycle',
    text: 'Choose a short-term structure that works around your salary date so repayment stays practical and easy to track.',
    highlight: 'Custom repayment',
  },
];

const useCases = [
  {
    title: 'Monthly bills and essentials',
    text: 'Manage rent, groceries, utility bills, and other urgent costs when the month moves faster than payday.',
  },
  {
    title: 'Medical and family emergencies',
    text: 'Cover medicines, diagnostics, travel, or sudden family expenses before your next salary credit comes in.',
  },
  {
    title: 'Commute, repairs, and work expenses',
    text: 'Stay prepared for fuel, repairs, office travel, or other unplanned expenses that cannot be pushed to next week.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Apply online',
    text: 'Start with your basic personal and salary details to begin your E-Fin loan application.',
  },
  {
    number: '02',
    title: 'Complete verification',
    text: 'Upload PAN, Aadhaar, and supporting details through a quick digital KYC process.',
  },
  {
    number: '03',
    title: 'Approval review',
    text: 'E-Fin reviews your application and matches you with a suitable short-term offer.',
  },
  {
    number: '04',
    title: 'Money received',
    text: 'Once approved, the amount is transferred to your bank account, often within minutes.',
  },
];

const eligibility = [
  'Indian resident with valid PAN and Aadhaar',
  'Salaried professional with regular monthly income',
  'Net monthly income that supports short-term repayment',
  'Active bank account for disbursal and repayment',
];

const faqItems = [
  {
    question: 'What is a payday loan?',
    answer:
      'An E-Fin payday loan is a short-term salaried loan designed to help you manage urgent expenses until your next salary day.',
  },
  {
    question: 'How fast can I get the money?',
    answer:
      'After successful verification and approval, disbursal is designed to be quick and the amount is transferred directly to your bank account.',
  },
  {
    question: 'How much can I borrow?',
    answer:
      'Your final sanctioned amount depends on your profile, income, and verification results, with short-term support designed for urgent salary-cycle needs.',
  },
  {
    question: 'Do I need collateral to apply?',
    answer:
      'No. E-Fin payday loans are structured as unsecured short-term loans, so collateral is not required.',
  },
];

function PayDayLoanPage() {
  return (
    <div className="page payday-page payday-page--salaryadda">
      <section className="payday-sa-hero">
        <div className="payday-sa-hero-copy">
          <span className="payday-sa-badge">E-Fin Salary Support</span>
          <h1>
            WHEN LIFE MOVES
            <span>FASTER THAN SALARY DAY</span>
          </h1>
          <p className="payday-sa-subcopy">
            Get quick funds with E-Fin when urgent expenses show up before payday. A fast, digital,
            salary-linked short-term loan built for real monthly cash gaps.
          </p>

          <div className="payday-sa-cta">
            <a href="https://loan.efin.co.in/login" className="primary-btn large">
              Apply Now
            </a>
            <Link to="/resources/eligibility-calculator" className="ghost-btn large">
              Check Eligibility
            </Link>
          </div>

          <div className="payday-sa-trust">
            {trustPoints.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="payday-sa-hero-side">
          <div className="payday-sa-hero-visual">
            <img
              src="/illustration one.png"
              alt="E-Fin payday loan illustration"
              className="payday-sa-hero-image"
            />
          </div>
        </div>
      </section>

      <section className="payday-sa-snapshot-section">
        <div className="payday-sa-snapshot-card">
          <div className="payday-sa-snapshot-copy">
            <span className="payday-sa-snapshot-kicker">Quick loan snapshot</span>
            <h2>E-Fin Payday Loan</h2>
            <p>
              Fast approval, digital processing, and short-term repayment support for salaried
              customers.
            </p>
          </div>

          <div className="payday-sa-snapshot-grid">
            {snapshotMetrics.map((item) => (
              <article key={item.value} className="payday-sa-snapshot-metric">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>

          <div className="payday-sa-snapshot-footer">
            <div className="payday-sa-snapshot-note">
              <h3>Why E-Fin works</h3>
              <ul>
                {snapshotBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <Link to="/support/contact" className="payday-sa-snapshot-button">
              Start Application
            </Link>
          </div>
        </div>
      </section>

      <section className="payday-sa-stats">
        {statCards.map((item) => (
          <article key={item.label} className="payday-sa-stat-card">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <section className="payday-sa-section">
        <div className="payday-sa-section-heading">
          <span>WHY E-FIN PAYDAY</span>
          <h2>Why borrowers choose E-Fin for short-term cash support</h2>
          <p>
            Built for speed, simplicity, and convenience when salary timing and urgent expenses do not match.
          </p>
        </div>

        <div className="payday-sa-feature-grid">
          {featureCards.map((item) => (
            <article key={item.title} className="payday-sa-feature-card">
              <span className="payday-sa-feature-highlight">{item.highlight}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="payday-sa-section payday-sa-section--accent">
        <div className="payday-sa-section-heading">
          <span>USE CASES</span>
          <h2>Useful when your salary date feels too far away</h2>
        </div>

        <div className="payday-sa-use-grid">
          {useCases.map((item, index) => (
            <article key={item.title} className="payday-sa-use-card">
              <span className="payday-sa-use-index">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="payday-sa-section">
        <div className="payday-sa-section-heading">
          <span>HOW IT WORKS</span>
          <h2>How E-Fin works, just like we promise</h2>
          <p>From online application to money received, the process stays simple and digital.</p>
        </div>

        <div className="payday-sa-steps">
          {steps.map((step) => (
            <article key={step.number} className="payday-sa-step-card">
              <span className="payday-sa-step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="payday-sa-qualify">
        <div className="payday-sa-qualify-card">
          <span>ELIGIBILITY</span>
          <h2>Check if you are a good fit for an E-Fin payday loan</h2>
          <ul>
            {eligibility.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="payday-sa-qualify-card payday-sa-qualify-card--dark">
          <span>WHY BORROWERS LIKE THIS FORMAT</span>
          <h2>Transparent. Simple. Hassle-free.</h2>
          <p>
            No hidden fees, no complicated terms, and no unnecessary confusion. Just straightforward
            short-term lending from E-Fin that works around your salary cycle.
          </p>
          <div className="payday-sa-mini-points">
            <strong>Instant approval flow</strong>
            <strong>Digital application journey</strong>
            <strong>Salary-linked repayment support</strong>
          </div>
        </div>
      </section>

      <section className="payday-sa-section">
        <div className="payday-sa-section-heading">
          <span>FAQS</span>
          <h2>E-Fin payday loan, explained simply</h2>
        </div>

        <div className="payday-sa-faq-grid">
          {faqItems.map((item) => (
            <details key={item.question} className="payday-sa-faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="payday-sa-bottom-cta">
        <div>
          <span>READY TO APPLY?</span>
          <h2>Get quick funds with E-Fin before payday</h2>
          <p>Start your E-Fin application today and move ahead with a faster, simpler short-term loan journey.</p>
        </div>
        <Link to="/support/contact" className="primary-btn large">
          Apply for E-Fin Payday Loan
        </Link>
      </section>
    </div>
  );
}

export default PayDayLoanPage;
