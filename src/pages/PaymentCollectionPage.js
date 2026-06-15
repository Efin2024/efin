import { Link } from 'react-router-dom';
import './PaymentCollectionPage.css';

const collectionModes = [
  {
    title: 'UPI collections',
    text: 'Enable fast customer payments through interoperable UPI flows designed for digital-first businesses.',
  },
  {
    title: 'Virtual accounts',
    text: 'Assign account references for marketplaces, partners, or merchants and track incoming payments with clarity.',
  },
  {
    title: 'Bank transfers',
    text: 'Support NEFT, RTGS, and IMPS based collection journeys for higher-ticket or scheduled payment use cases.',
  },
];

const workflowSteps = [
  {
    number: '01',
    title: 'Collect from customers',
    text: 'Businesses can offer digital payment rails including UPI, virtual accounts, and bank transfers through Efin APIs.',
  },
  {
    number: '02',
    title: 'Reconcile automatically',
    text: 'Incoming transactions are mapped, validated, and made easier to reconcile through structured references and status visibility.',
  },
  {
    number: '03',
    title: 'Settle merchants',
    text: 'The platform supports merchant and vendor payout processing according to approved business rules and banking workflows.',
  },
  {
    number: '04',
    title: 'Monitor with control',
    text: 'Operations teams get a cleaner view of collections, payout activity, exceptions, and settlement cycles.',
  },
];

const capabilities = [
  'API-based payment collection infrastructure for online businesses and platforms',
  'Automated reconciliation support for incoming customer transactions',
  'Merchant settlement management aligned to configured commercial arrangements',
  'Payout processing support for registered merchants and vendors',
  'Operational controls built around transparency, security, and auditability',
  'Technology-led workflows delivered with regulated banking and financial institution partners',
];

const trustPillars = [
  {
    title: 'Security-first operations',
    text: 'Designed to support secure transaction handling, controlled access, and clear operational visibility across collection and settlement journeys.',
  },
  {
    title: 'Built for scale',
    text: 'Suitable for marketplaces, e-commerce platforms, and online businesses managing growing payment volumes across multiple merchant relationships.',
  },
  {
    title: 'Compliance-aware design',
    text: 'Workflows are structured to align with business arrangements, internal controls, and applicable banking guidelines.',
  },
];

const faqs = [
  {
    question: 'Who is this solution for?',
    answer:
      'It is designed for marketplaces, e-commerce platforms, aggregators, and online businesses that need structured collection and merchant settlement operations.',
  },
  {
    question: 'What payment modes are supported?',
    answer:
      'The solution is built around digital payment modes including UPI, virtual accounts, and bank transfer-based collection workflows.',
  },
  {
    question: 'Does Efin hold customer funds as a bank?',
    answer:
      'No. Efin acts strictly as a technology service provider and facilitates workflows through regulated banking and financial institution partners.',
  },
  {
    question: 'Can this help with reconciliations and payouts?',
    answer:
      'Yes. The platform supports automated reconciliation, merchant settlement management, and payout processing for registered merchants or vendors.',
  },
];

const paymentGallery = [
  {
    src: '/paymentimage1.png',
    alt: 'Payment processing and collection workflow illustration',
  },
  {
    src: '/paymentimage2.png',
    alt: 'AI-enhanced merchant underwriting illustration',
  },
  {
    src: '/paymentimage3.png',
    alt: 'AI-driven payments technology illustration',
  },
  {
    src: '/paymentimage4.png',
    alt: 'Payment collection and merchant settlement flow diagram',
  },
];

function PaymentCollectionPage() {
  return (
    <div className="page payments-solution-page">
      <div style={{ backgroundColor: 'transparent', color: 'black', padding: '10px 0', fontWeight: 'bold', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px', width: '100%', maxWidth: '100%', margin: '0 0 3rem 0', zIndex: 10 }}>
          <div className="css-marquee-content">
              <span style={{ margin: '0 4rem' }}>Coming Soon</span>
              <span style={{ margin: '0 4rem' }}>Coming Soon</span>
              <span style={{ margin: '0 4rem' }}>Coming Soon</span>
          </div>
      </div>
      <section className="payments-hero">
        <div className="payments-hero-copy">
          <span className="payments-badge">Payment Infrastructure Solutions</span>
          <h1>
            Payment Collection &
            <span> Merchant Settlement Solutions</span>
          </h1>
          <p>
            Efin provides technology-enabled payment collection and merchant settlement solutions
            for marketplaces, e-commerce platforms, and online businesses through API-based
            infrastructure and partner-led banking rails.
          </p>

          <div className="payments-hero-cta">
            <Link to="/support/contact" className="primary-btn large">
              Talk to Our Team
            </Link>
            <Link to="/about" className="ghost-btn large">
              Learn About Efin
            </Link>
          </div>

          <div className="payments-trust-row">
            <span>API-led collections</span>
            <span>Automated reconciliation</span>
            <span>Merchant settlement support</span>
          </div>
        </div>

        <div className="payments-hero-visual" aria-hidden="true">
          <div className="payments-hero-image-frame">
            <img src="/paymentimage1.png" alt="Payment collection solution overview" />
          </div>
        </div>
      </section>

      <section className="payments-overview">
        <div className="payments-overview-card">
          <span className="eyebrow">What The Platform Supports</span>
          <h2>Built to streamline digital collections and downstream merchant payouts</h2>
          <p>
            Through Efin&apos;s API-based infrastructure, businesses can facilitate customer
            collections via digital payment modes while improving visibility across reconciliation,
            settlement management, and vendor payout operations.
          </p>
          <div className="payments-mode-grid">
            {collectionModes.map((mode) => (
              <article key={mode.title} className="payments-mode-card">
                <h3>{mode.title}</h3>
                <p>{mode.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="payments-section">
        <div className="section-heading payments-heading">
          <span className="eyebrow">Solution Visuals</span>
          <h2>See the payment collection ecosystem in action</h2>
          <p>
            A quick visual look at collection flows, merchant underwriting, AI-led payments, and
            settlement operations.
          </p>
        </div>
        <div className="payments-gallery-grid">
          {paymentGallery.map((image) => (
            <article key={image.src} className="payments-gallery-card">
              <img src={image.src} alt={image.alt} loading="lazy" />
            </article>
          ))}
        </div>
      </section>

      <section className="payments-section">
        <div className="section-heading payments-heading">
          <span className="eyebrow">How It Works</span>
          <h2>A cleaner operating layer from collection to settlement</h2>
          <p>
            The solution is designed to reduce manual effort and improve operational confidence at
            every stage of the payment lifecycle.
          </p>
        </div>

        <div className="payments-steps-grid">
          {workflowSteps.map((step) => (
            <article key={step.number} className="payments-step-card">
              <span className="payments-step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="payments-section payments-section-accent">
        <div className="payments-capability-panel">
          <div>
            <span className="eyebrow">Core Capabilities</span>
            <h2>Technology-enabled workflows for modern platforms</h2>
          </div>
          <div className="payments-capability-list">
            {capabilities.map((item) => (
              <div key={item} className="payments-capability-item">
                <span>✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="payments-section">
        <div className="section-heading payments-heading">
          <span className="eyebrow">Why Businesses Choose This</span>
          <h2>Focused on transparency, efficiency, and operational control</h2>
        </div>
        <div className="payments-pillars-grid">
          {trustPillars.map((pillar) => (
            <article key={pillar.title} className="payments-pillar-card">
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="payments-section">
        <div className="payments-disclaimer-card">
          <span className="eyebrow">Important Disclosure</span>
          <h2>Technology provider model</h2>
          <p>
            Efin acts strictly as a technology service provider and facilitates payment processing
            and settlement workflows through its regulated banking and financial institution
            partners.
          </p>
        </div>
      </section>

      <section className="payments-section">
        <div className="section-heading payments-heading">
          <span className="eyebrow">FAQs</span>
          <h2>Quick answers for teams evaluating the solution</h2>
        </div>
        <div className="payments-faq-grid">
          {faqs.map((item) => (
            <article key={item.question} className="payments-faq-card">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section payments-cta">
        <div className="cta-content">
          <h2>Need payment collection and merchant settlement infrastructure?</h2>
          <p>Let&apos;s help your team simplify collections, payouts, and settlement operations.</p>
          <div className="cta-buttons">
            <Link className="primary-btn large" to="/support/contact">
              Contact Us
            </Link>
            <a className="ghost-btn large" href="https://login.efin.co.in/">
              Merchant Login
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PaymentCollectionPage;
