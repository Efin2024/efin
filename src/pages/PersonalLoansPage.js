import { Link } from 'react-router-dom';
import './PersonalLoansPage.css';

function PersonalLoansPage() {
  return (
    <div className="page personal-loan-page-modern">
      {/* Hero Section */}
      <section className="personal-hero-modern">
        <div className="personal-hero-grid">
          <div className="personal-hero-content">
            <span className="personal-badge">💳 Personal Loan for Salaried</span>
            <h1>
              Get up to <span className="gradient-text">₹2 Lakhs</span> Instantly
            </h1>
            <p className="personal-hero-description">
              Quick online Personal Loan to fulfill your financial needs with flexible tenure of 3-12 months.
              100% digital process, instant approval, and money directly in your bank account.
            </p>

            {/* Key Highlights */}
            <div className="personal-highlights-grid">
              <div className="highlight-chip-personal">
                <div className="chip-icon-personal">💰</div>
                <div className="chip-content">
                  <strong>Up to ₹2 Lakhs</strong>
                  <span>Loan Amount</span>
                </div>
              </div>
              <div className="highlight-chip-personal">
                <div className="chip-icon-personal">⚡</div>
                <div className="chip-content">
                  <strong>In 5 Minutes</strong>
                  <span>Quick Approval</span>
                </div>
              </div>
              <div className="highlight-chip-personal">
                <div className="chip-icon-personal">📅</div>
                <div className="chip-content">
                  <strong>3-12 Months</strong>
                  <span>Flexible Tenure</span>
                </div>
              </div>
            </div>

            <div className="personal-hero-cta">
              <a href="https://payday.efin.co.in/login" className="primary-btn large">
                Apply Now →
              </a>
              <Link to="/resources/personal-loan-emi-calculator" className="ghost-btn large">
                Calculate EMI
              </Link>
            </div>

            <div className="personal-trust-badges">
              <span>🏛️ RBI Registered</span>
              <span>🔒 100% Secure</span>
              <span>✓ No Hidden Charges</span>
            </div>
          </div>

          <div className="personal-hero-visual">
            <div className="personal-visual-card">
              <img src="/personal-loan-hero.png" alt="Personal Loan" className="personal-hero-image" />
              <div className="floating-badge badge-1">
                <strong>₹2 Lakh</strong>
                <span>Max Amount</span>
              </div>

              <div className="floating-badge badge-3">
                <strong>5 Mins</strong>
                <span>Approval</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="use-cases-section">
        <div className="section-heading">
          <span className="eyebrow">Perfect For Every Need</span>
          <h2>What Can You Use It For?</h2>
          <p>Flexible personal loans for all your financial requirements</p>
        </div>

        <div className="use-cases-grid">
          <div className="use-case-card">
            <div className="use-case-icon">💍</div>
            <h3>Wedding Expenses</h3>
            <p>Make your special day memorable without financial stress</p>
          </div>

          <div className="use-case-card">
            <div className="use-case-icon">🏥</div>
            <h3>Medical Emergency</h3>
            <p>Quick funds for unexpected medical expenses</p>
          </div>

          <div className="use-case-card">
            <div className="use-case-icon">🎓</div>
            <h3>Education</h3>
            <p>Invest in your or your family's education</p>
          </div>

          <div className="use-case-card">
            <div className="use-case-icon">🏠</div>
            <h3>Home Renovation</h3>
            <p>Give your home the makeover it deserves</p>
          </div>

          <div className="use-case-card">
            <div className="use-case-icon">✈️</div>
            <h3>Travel & Vacation</h3>
            <p>Plan your dream vacation without worries</p>
          </div>

          <div className="use-case-card">
            <div className="use-case-icon">💳</div>
            <h3>Debt Consolidation</h3>
            <p>Consolidate multiple debts into one easy EMI</p>
          </div>

          <div className="use-case-card">
            <div className="use-case-icon">🛍️</div>
            <h3>Shopping</h3>
            <p>Buy gadgets, appliances, or anything you need</p>
          </div>

          <div className="use-case-card">
            <div className="use-case-icon">🚗</div>
            <h3>Vehicle Purchase</h3>
            <p>Get your dream bike or fund down payment for car</p>
          </div>
        </div>
      </section>

      {/* Features Section - Bento Grid */}
      <section className="personal-features-section">
        <div className="section-heading">
          <span className="eyebrow">Why Choose Us</span>
          <h2>Benefits of Our Personal Loan</h2>
          <p>Experience hassle-free lending with unmatched benefits</p>
        </div>

        <div className="personal-features-bento">
          <div className="feature-bento-card large">
            <div className="feature-icon-large">🚀</div>
            <h3>Lightning Fast Approval</h3>
            <p>Get instant approval in just 5 minutes with our AI-powered credit assessment. No lengthy paperwork or waiting periods.</p>
            <ul className="feature-checklist">
              <li>✓ 100% Digital Process</li>
              <li>✓ Minimal Documentation</li>
              <li>✓ Instant Disbursal</li>
            </ul>
          </div>

          <div className="feature-bento-card">
            <div className="feature-icon">💯</div>
            <h3>No Collateral</h3>
            <p>Completely unsecured loans with no need for guarantors or collateral</p>
          </div>

          <div className="feature-bento-card">
            <div className="feature-icon">🎯</div>
            <h3>Flexible EMI Options</h3>
            <p>Choose tenure from 3-12 months that suits your budget</p>
          </div>

          <div className="feature-bento-card accent">
            <div className="feature-icon">📱</div>
            <h3>Fully Digital</h3>
            <p>Complete application process from home via mobile or web</p>
          </div>

          <div className="feature-bento-card">
            <div className="feature-icon">🔄</div>
            <h3>Zero Prepayment</h3>
            <p>No charges on early loan closure - complete flexibility</p>
          </div>

          <div className="feature-bento-card">
            <div className="feature-icon">🤝</div>
            <h3>Transparent Pricing</h3>
            <p>No hidden charges - complete clarity on all fees</p>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="personal-eligibility-modern">
        <div className="section-heading">
          <span className="eyebrow">Check If You Qualify</span>
          <h2>Eligibility Criteria</h2>
          <p>Simple requirements to get started with your loan application</p>
        </div>

        <div className="eligibility-modern-grid">
          <div className="eligibility-modern-card">
            <div className="eligibility-modern-icon">🇮🇳</div>
            <h4>Nationality</h4>
            <p>Indian Citizen</p>
          </div>

          <div className="eligibility-modern-card">
            <div className="eligibility-modern-icon">💼</div>
            <h4>Employment</h4>
            <p>Employed with Public, Private, or MNC</p>
          </div>

          <div className="eligibility-modern-card">
            <div className="eligibility-modern-icon">💰</div>
            <h4>Monthly Salary</h4>
            <p>Starting from ₹25,000 based on city</p>
          </div>

          <div className="eligibility-modern-card">
            <div className="eligibility-modern-icon">🎂</div>
            <h4>Age Criteria</h4>
            <p>21 to 58 years</p>
          </div>

          <div className="eligibility-modern-card">
            <div className="eligibility-modern-icon">📊</div>
            <h4>CIBIL Score</h4>
            <p>670 or higher</p>
          </div>
        </div>

        <div className="eligibility-cta">
          <Link to="/resources/eligibility-calculator" className="primary-btn">
            Check Your Eligibility →
          </Link>
        </div>
      </section>

      {/* Documents Required */}
      <section className="personal-documents-section">
        <div className="section-heading">
          <span className="eyebrow">Keep These Ready</span>
          <h2>Documents Required</h2>
          <p>Minimal documentation for quick processing</p>
        </div>

        <div className="personal-documents-grid">
          <div className="document-category-modern">
            <div className="doc-category-header">
              <div className="doc-category-icon">🆔</div>
              <h3>Identity Proof</h3>
            </div>
            <div className="doc-list-modern">
              <div className="doc-item-modern">
                <span className="doc-bullet">✓</span>
                <div>
                  <strong>Aadhaar Card</strong>
                  <p>For identity verification</p>
                </div>
              </div>
              <div className="doc-item-modern">
                <span className="doc-bullet">✓</span>
                <div>
                  <strong>PAN Card</strong>
                  <p>Mandatory for all applicants</p>
                </div>
              </div>
              <div className="doc-item-modern">
                <span className="doc-bullet">✓</span>
                <div>
                  <strong>Passport / Voter ID</strong>
                  <p>Additional ID proof (any one)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="document-category-modern">
            <div className="doc-category-header">
              <div className="doc-category-icon">💼</div>
              <h3>Employment Proof</h3>
            </div>
            <div className="doc-list-modern">
              <div className="doc-item-modern">
                <span className="doc-bullet">✓</span>
                <div>
                  <strong>Employee ID Card</strong>
                  <p>Company issued ID proof</p>
                </div>
              </div>
              <div className="doc-item-modern">
                <span className="doc-bullet">✓</span>
                <div>
                  <strong>Salary Slips</strong>
                  <p>Last 3 months</p>
                </div>
              </div>
              <div className="doc-item-modern">
                <span className="doc-bullet">✓</span>
                <div>
                  <strong>Bank Statement</strong>
                  <p>Previous 3 months</p>
                </div>
              </div>
            </div>
          </div>

          <div className="document-category-modern highlight">
            <div className="doc-category-header">
              <div className="doc-category-icon">📸</div>
              <h3>Additional</h3>
            </div>
            <div className="doc-list-modern">
              <div className="doc-item-modern">
                <span className="doc-bullet">✓</span>
                <div>
                  <strong>Photograph</strong>
                  <p>Recent passport size photo</p>
                </div>
              </div>
              <div className="doc-item-modern">
                <span className="doc-bullet">✓</span>
                <div>
                  <strong>Address Proof</strong>
                  <p>Utility bills or rent agreement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works-section">
        <div className="section-heading">
          <span className="eyebrow">Simple Process</span>
          <h2>How to Apply</h2>
          <p>Get your loan in just 3 easy steps</p>
        </div>

        <div className="steps-modern-grid">
          <div className="step-modern-card">
            <div className="step-number-modern">1</div>
            <div className="step-icon-modern">📝</div>
            <h3>Fill Application</h3>
            <p>Complete our simple online form with basic details in just 2 minutes</p>
          </div>

          <div className="step-connector">→</div>

          <div className="step-modern-card">
            <div className="step-number-modern">2</div>
            <div className="step-icon-modern">📤</div>
            <h3>Upload Documents</h3>
            <p>Submit KYC and income documents for quick verification</p>
          </div>

          <div className="step-connector">→</div>

          <div className="step-modern-card">
            <div className="step-number-modern">3</div>
            <div className="step-icon-modern">✅</div>
            <h3>Get Money</h3>
            <p>Receive instant approval and amount in your bank account</p>
          </div>
        </div>
      </section>

      {/* Fees and Charges */}
      <section className="personal-fees-section">
        <div className="section-heading">
          <span className="eyebrow">Transparent Pricing</span>
          <h2>Fees & Charges</h2>
          <p>Complete transparency on all costs - no hidden charges</p>
        </div>

        <div className="personal-fees-table">
          <div className="fees-row-modern fees-header-modern">
            <div className="fees-label-modern">Particulars</div>
            <div className="fees-value-modern">Charges</div>
          </div>


          <div className="fees-row-modern">
            <div className="fees-label-modern">
              <span className="fees-icon-modern">⚙️</span>
              <div>
                <strong>Processing Fee</strong>
                <p>One-time charge</p>
              </div>
            </div>
            <div className="fees-value-modern">
              <strong>Up to 4% + GST</strong>
              <span>Of loan amount</span>
            </div>
          </div>

          <div className="fees-row-modern">
            <div className="fees-label-modern">
              <span className="fees-icon-modern">🔄</span>
              <div>
                <strong>Prepayment Charges</strong>
                <p>Early closure</p>
              </div>
            </div>
            <div className="fees-value-modern">
              <strong className="highlight-value">NIL</strong>
              <span>Zero charges</span>
            </div>
          </div>

          <div className="fees-row-modern">
            <div className="fees-label-modern">
              <span className="fees-icon-modern">⚠️</span>
              <div>
                <strong>Late Payment</strong>
                <p>Per day per installment</p>
              </div>
            </div>
            <div className="fees-value-modern">
              <strong>₹20 per day</strong>
            </div>
          </div>

          <div className="fees-row-modern">
            <div className="fees-label-modern">
              <span className="fees-icon-modern">💳</span>
              <div>
                <strong>Bounce Charges</strong>
                <p>Per repayment default</p>
              </div>
            </div>
            <div className="fees-value-modern">
              <strong>₹1,500</strong>
            </div>
          </div>

          <div className="fees-row-modern">
            <div className="fees-label-modern">
              <span className="fees-icon-modern">📄</span>
              <div>
                <strong>Document Processing</strong>
                <p>Including GST</p>
              </div>
            </div>
            <div className="fees-value-modern">
              <strong>₹2,500</strong>
            </div>
          </div>

          <div className="fees-row-modern">
            <div className="fees-label-modern">
              <span className="fees-icon-modern">🏛️</span>
              <div>
                <strong>Stamp Duty</strong>
                <p>State-wise variation</p>
              </div>
            </div>
            <div className="fees-value-modern">
              <strong>As per state</strong>
              <span>Deducted upfront</span>
            </div>
          </div>
        </div>

        <p className="fees-note-modern">
          * All charges are indicative and subject to change. Final rates communicated at sanction. Terms & conditions apply.
        </p>
      </section>

      {/* CTA Section */}
      <section className="personal-cta-section">
        <div className="personal-cta-card">
          <div className="cta-icon-large">💰</div>
          <h2>Ready to Get Your Personal Loan?</h2>
          <p>Join thousands of satisfied customers who trust E-Fin for instant personal loans</p>
          <div className="personal-cta-buttons">
            <Link to="/support/contact" className="primary-btn large">
              Apply for Loan →
            </Link>
            <Link to="/support" className="ghost-btn large">
              Talk to Expert
            </Link>
          </div>
          <div className="cta-features-list">
            <span>✓ 5 Min Approval</span>
            <span>✓ 100% Digital</span>
            <span>✓ No Hidden Charges</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PersonalLoansPage;
