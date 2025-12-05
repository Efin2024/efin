import { Link } from 'react-router-dom';

const ELIGIBILITY_CRITERIA = [
  { label: 'Nationality', value: 'Indian' },
  { label: 'Monthly Salary', value: 'Starting from ₹25,000 based on the city you live in' },
  { label: 'CIBIL Score', value: '670 or higher' },
  { label: 'Employment', value: 'Employed with Public, Private, or MNC' },
  { label: 'Age', value: '21 to 58 years' },
];

const REQUIRED_DOCUMENTS = [
  {
    title: 'KYC Documents',
    items: ['Aadhar', 'Passport', "Voter's ID", 'Letter from NPR', 'NREGA Job card'],
  },
  { title: 'PAN Card', items: ['Valid PAN Card'] },
  { title: 'Employee ID Card', items: ['Company issued ID proof'] },
  { title: 'Salary Slip', items: ['Last 3 months salary slips'] },
  { title: 'Bank Statement', items: ['Previous 3 months bank account statement'] },
];

const FEES_AND_CHARGES = [
  { type: 'Rate of interest', charge: '18% to 30% per annum' },
  {
    type: 'Processing Fees',
    charge: 'Up to 4% of the loan amount (inclusive of applicable taxes)',
  },
  {
    type: 'Bounce Charges',
    charge: 'In case of default of repayment instrument, ₹1,500 per bounce will be levied',
  },
  {
    type: 'Penal Charges',
    charge:
      'Delay in Payment of Installment(s) shall attract Penal charges of ₹20 per day per installment from the respective due date until the date of receipt of full instalment(s) amount',
  },
  {
    type: 'Document Processing charges',
    charge: '₹2,500 (inclusive of applicable taxes)',
  },
  { type: 'Prepayment charges', charge: 'NIL' },
  {
    type: 'Stamp duty',
    charge: 'Payable as per respective state and deducted upfront from loan amount',
  },
  {
    type: 'Broken Period Interest',
    charge:
      'Scenario 1 - More than 30 days from the date of loan disbursal till the first EMI is charged: In this scenario, Broken Period interest shall be deducted from the loan disbursement. Scenario 2 - Less than 30 days from the date of loan disbursal till the first EMI is charged: In this scenario, interest is charged only for the actual number of days since the loan was disbursed.',
  },
];

function PersonalLoansPage() {
  return (
    <div className="page personal-loan-page">
      {/* Hero Section */}
      <section className="personal-loan-hero">
        <div className="hero-content-wrapper">
          <div className="hero-text">
            <span className="hero-badge">Personal Loan for Salaried</span>
            <h1>Get up to ₹2 lakhs directly in your bank</h1>
            <p className="hero-description">
              Get up to ₹2 lakhs directly in your bank account by applying for our quick online Personal
              Loan to fulfil your financial needs with a loan tenure of 3-12 Months.
            </p>
            <div className="hero-features">
              <div className="feature-pill">
                <span className="icon">⚡</span>
                <span>Quick Approval</span>
              </div>
              <div className="feature-pill">
                <span className="icon">💰</span>
                <span>Up to ₹2 Lakhs</span>
              </div>
              <div className="feature-pill">
                <span className="icon">📅</span>
                <span>3-12 Months Tenure</span>
              </div>
            </div>
            <div className="hero-actions">
              <Link to="/support/apply" className="primary-btn large">
                Explore Now →
              </Link>
              <Link to="/resources/personal-loan-emi-calculator" className="ghost-btn large">
                Calculate EMI
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-illustration">
              <img src="/personal-loan-hero.png" alt="Personal Loan Illustration" />
            </div>
            <div className="loan-highlight-card">
              <div className="card-icon">💳</div>
              <div className="highlight-amount">₹2,00,000</div>
              <div className="highlight-label">Maximum Loan Amount</div>
              <div className="highlight-stats">
                <div className="stat-item">
                  <div className="stat-icon">📆</div>
                  <strong>3-12</strong>
                  <span>Months</span>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">📊</div>
                  <strong>18-30%</strong>
                  <span>Interest p.a.</span>
                </div>
              </div>
              <div className="trust-badges">
                <div className="badge-item">
                  <span className="badge-icon">🔒</span>
                  <span>100% Secure</span>
                </div>
                <div className="badge-item">
                  <span className="badge-icon">✓</span>
                  <span>RBI Approved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="section-block eligibility-section">
        <div className="section-heading">
          <div className="section-illustration">
            <img src="/eligibility-check.png" alt="Eligibility Check" />
          </div>
          <h2>Eligibility Criteria</h2>
          <p>Check if you meet the requirements for our Personal Loan</p>
        </div>
        <div className="eligibility-grid">
          {ELIGIBILITY_CRITERIA.map((item, index) => (
            <div key={item.label} className="eligibility-card">
              <div className="card-number">{index + 1}</div>
              <div className="eligibility-label">{item.label}</div>
              <div className="eligibility-value">{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Documents Required */}
      <section className="section-block documents-section">
        <div className="section-heading">
          <div className="section-illustration">
            <img src="/documents-required.png" alt="Documents Required" />
          </div>
          <h2>Documents Required</h2>
          <p>Keep these documents ready for a smooth application process</p>
        </div>
        <div className="documents-grid">
          {REQUIRED_DOCUMENTS.map((doc, index) => (
            <div key={index} className="document-card">
              <div className="document-icon">📄</div>
              <h3>{doc.title}</h3>
              <ul>
                {doc.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Fees and Charges */}
      <section className="section-block fees-section">
        <div className="section-heading">
          <h2>Applicable Fees and Charges</h2>
          <p>Complete transparency on all costs associated with your loan</p>
        </div>
        <div className="fees-table-wrapper">
          <table className="fees-table">
            <thead>
              <tr>
                <th>Type of Fee</th>
                <th>Applicable Charges</th>
              </tr>
            </thead>
            <tbody>
              {FEES_AND_CHARGES.map((fee, index) => (
                <tr key={index}>
                  <td className="fee-type">{fee.type}</td>
                  <td className="fee-charge">{fee.charge}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* How to Apply */}
      <section className="section-block apply-steps-section">
        <div className="section-heading">
          <div className="section-illustration">
            <img src="/loan-approval-process.png" alt="Loan Approval Process" />
          </div>
          <h2>How to Apply</h2>
          <p>Simple 3-step process to get your loan approved</p>
        </div>
        <div className="steps-timeline">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Fill Application</h3>
            <p>Complete our simple online application form with your basic details</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Upload Documents</h3>
            <p>Submit the required KYC and income documents for verification</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Get Approved</h3>
            <p>Receive quick approval and get money directly in your bank account</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section personal-loan-cta">
        <div className="cta-content">
          <h2>Ready to get your Personal Loan?</h2>
          <p>Join thousands of satisfied customers who trust E-Fin for their financial needs</p>
          <div className="cta-buttons">
            <Link className="primary-btn large" to="/support/apply">
              Apply Now →
            </Link>
            <Link className="ghost-btn large" to="/support">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PersonalLoansPage;
