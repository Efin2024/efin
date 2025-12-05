import { Link } from 'react-router-dom';
import './SmallBusinessLoanPage.css';
import businessLoanIcon from '../assets/product-icons/instant-cash-loan.png';

function SmallBusinessLoanPage() {
    return (
        <div className="page business-loan-page">
            {/* Hero Section */}
            <section className="business-loan-hero">
                <div className="hero-content">
                    <span className="hero-badge">Unsecured Business Loan</span>
                    <h1>Small Business Loan</h1>
                    <p className="hero-description">
                        Elevate your business with an unsecured business loan up to ₹5 lakhs with a loan tenor of 3-36 months
                        without any collateral and empower your business journey with us.
                    </p>
                    <div className="hero-cta">
                        <Link to="/support/apply" className="primary-btn">Apply Now</Link>
                        <Link to="/support" className="ghost-btn">Check Eligibility</Link>
                    </div>
                    <div className="hero-highlights">
                        <div className="highlight-chip">
                            <div className="chip-icon">₹</div>
                            <div>
                                <strong>Up to ₹5 Lakhs</strong>
                                <span>Loan Amount</span>
                            </div>
                        </div>
                        <div className="highlight-chip">
                            <div className="chip-icon">📅</div>
                            <div>
                                <strong>3-36 Months</strong>
                                <span>Flexible Tenure</span>
                            </div>
                        </div>
                        <div className="highlight-chip">
                            <div className="chip-icon">🔓</div>
                            <div>
                                <strong>No Collateral</strong>
                                <span>Unsecured Loan</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="visual-card">
                        <img src={businessLoanIcon} alt="Small Business Loan" />
                        <div className="visual-stats">
                            <div>
                                <strong>12-30%</strong>
                                <span>Interest Rate p.a.</span>
                            </div>
                            <div>
                                <strong>Quick</strong>
                                <span>Approval</span>
                            </div>
                            <div>
                                <strong>100%</strong>
                                <span>Digital Process</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is Business Loan Section */}
            <section className="info-section what-is-section">
                <div className="section-heading">
                    <p className="eyebrow">Understanding Business Loans</p>
                    <h2>What is Business Loan</h2>
                </div>
                <div className="what-is-content">
                    <p>
                        Business loans provide funds for a variety of purposes, such as covering day-to-day expenses,
                        purchasing inventory or new equipment, hiring employees, expanding operations, or consolidating
                        existing business debt.
                    </p>
                    <div className="purpose-grid">
                        <div className="purpose-card">
                            <div className="purpose-icon">💼</div>
                            <h4>Day-to-Day Expenses</h4>
                            <p>Cover operational costs and maintain cash flow</p>
                        </div>
                        <div className="purpose-card">
                            <div className="purpose-icon">📦</div>
                            <h4>Inventory Purchase</h4>
                            <p>Stock up inventory and equipment</p>
                        </div>
                        <div className="purpose-card">
                            <div className="purpose-icon">👥</div>
                            <h4>Hiring Employees</h4>
                            <p>Expand your team and grow operations</p>
                        </div>
                        <div className="purpose-card">
                            <div className="purpose-icon">📈</div>
                            <h4>Business Expansion</h4>
                            <p>Scale your business to new heights</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Eligibility Criteria Section */}
            <section className="info-section eligibility-section">
                <div className="section-heading">
                    <p className="eyebrow">Are You Eligible?</p>
                    <h2>Eligibility Criteria</h2>
                </div>
                <div className="eligibility-grid">
                    <div className="eligibility-card">
                        <div className="eligibility-icon">🇮🇳</div>
                        <div>
                            <h4>Nationality</h4>
                            <p>Indian</p>
                        </div>
                    </div>
                    <div className="eligibility-card">
                        <div className="eligibility-icon">🏢</div>
                        <div>
                            <h4>Business Vintage</h4>
                            <p>At least 3 years</p>
                        </div>
                    </div>
                    <div className="eligibility-card">
                        <div className="eligibility-icon">📊</div>
                        <div>
                            <h4>CIBIL Score</h4>
                            <p>680 or higher</p>
                        </div>
                    </div>
                    <div className="eligibility-card">
                        <div className="eligibility-icon">💼</div>
                        <div>
                            <h4>Work Status</h4>
                            <p>Self Employed</p>
                        </div>
                    </div>
                    <div className="eligibility-card">
                        <div className="eligibility-icon">🎂</div>
                        <div>
                            <h4>Age</h4>
                            <p>24 to 58 Years</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Documents Required Section */}
            <section className="info-section documents-section">
                <div className="section-heading">
                    <p className="eyebrow">Keep These Ready</p>
                    <h2>Documents Required</h2>
                </div>
                <div className="documents-grid">
                    <div className="document-card">
                        <div className="document-icon">🪪</div>
                        <div>
                            <h4>KYC Documents</h4>
                            <ul>
                                <li>Aadhar Card</li>
                                <li>Passport</li>
                                <li>Voter's ID</li>
                                <li>Letter from NPR</li>
                                <li>NREGA Job card</li>
                            </ul>
                        </div>
                    </div>
                    <div className="document-card">
                        <div className="document-icon">💳</div>
                        <div>
                            <h4>PAN Card</h4>
                            <p>Mandatory for all applicants</p>
                        </div>
                    </div>
                    <div className="document-card">
                        <div className="document-icon">🏪</div>
                        <div>
                            <h4>Business Proof</h4>
                            <p>Proof of Business ownership</p>
                        </div>
                    </div>
                    <div className="document-card">
                        <div className="document-icon">🏦</div>
                        <div>
                            <h4>Bank Statement</h4>
                            <p>Last 3 months</p>
                        </div>
                    </div>
                    <div className="document-card">
                        <div className="document-icon">📄</div>
                        <div>
                            <h4>Financial Documents</h4>
                            <p>ITR/other financial documents</p>
                        </div>
                    </div>
                    <div className="document-card">
                        <div className="document-icon">🤝</div>
                        <div>
                            <h4>Partnership/Company Docs</h4>
                            <p>Partnership Deed/Company PAN (for Partnership, Pvt.Ltd or LLC companies)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fees and Charges Section */}
            <section className="info-section fees-section">
                <div className="section-heading">
                    <p className="eyebrow">Transparent Pricing</p>
                    <h2>Applicable Fees and Charges</h2>
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
                            <tr>
                                <td>
                                    <strong>Rate of interest</strong>
                                </td>
                                <td>12% to 30% per annum</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Processing Fees</strong>
                                </td>
                                <td>Up to 4% of the loan amount (inclusive of applicable taxes)</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Bounce Charges</strong>
                                </td>
                                <td>In case of default of repayment instrument, Rs. 1,500 per bounce will be levied</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Penal Charges</strong>
                                </td>
                                <td>Delay in Payment of Installment(s) shall attract Penal charges of Rs 40 per day per installment from the respective due date until the date of receipt of full instalment(s) amount.</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Document Processing charges</strong>
                                </td>
                                <td>Rs. 2,500 (inclusive of applicable taxes)</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Prepayment charges</strong>
                                </td>
                                <td>Up to 4.72% (inclusive of applicable taxes) on the outstanding loan amount as on the date of full prepayment.</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Stamp duty</strong>
                                </td>
                                <td>Payable as per respective state.</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Broken Period Interest</strong>
                                </td>
                                <td>
                                    <strong>Scenario 1:</strong> More than 30 days from the date of loan disbursal till the first EMI is charged: In this scenario, Broken Period interest shall be deducted from the loan disbursement.<br /><br />
                                    <strong>Scenario 2:</strong> Less than 30 days from the date of loan disbursal till the first EMI is charged: In this scenario, interest is charged only for the actual number of days since the loan was disbursed.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Installment default charges</strong>
                                </td>
                                <td>Rs. 450 per month from the first instalment due date for mandates rejected by customers bank until the new mandate is registered.</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Cash collection handling charges</strong>
                                </td>
                                <td>Rs. 177 (inclusive of applicable taxes) will be charged if customer opts to make payment in cash when the collection is done by the collection agents. This fee is charged only once per month</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Cash deposit charges</strong>
                                </td>
                                <td>Customers will incur a cash deposition charge of Rs. 50 (Inclusive of Applicable taxes) when making cash payments at our branch offices</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>PG facility charges</strong>
                                </td>
                                <td>Rs. 11 (Inclusive of Applicable taxes) will be charged for utilizing the payment gateway to make part or full payments towards the loan through digital properties.</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Switch fees</strong>
                                </td>
                                <td>Up to 1.18% of the loan amount (inclusive of applicable taxes) on the outstanding loan amount</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-card">
                    <h2>Ready to Elevate Your Business?</h2>
                    <p>Apply now and get your business loan approved in minutes</p>
                    <div className="cta-buttons">
                        <Link to="/support/apply" className="primary-btn">Apply for Loan</Link>
                        <Link to="/support" className="ghost-btn">Contact Support</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SmallBusinessLoanPage;
