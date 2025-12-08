import { Link } from 'react-router-dom';
import './GrievanceRedressalPage.css';

function GrievanceRedressalPage() {
    return (
        <div className="page grievance-page-modern">
            {/* Hero Section */}
            <section className="grievance-hero">
                <div className="grievance-hero-content">
                    <span className="grievance-badge">🛡️ Customer Protection</span>
                    <h1>Grievance Redressal Policy</h1>
                    <p className="grievance-hero-description">
                        MLB Securities Private Limited is committed to providing exceptional customer service.
                        We value your feedback and have a structured framework to address your concerns efficiently.
                    </p>
                    <div className="grievance-meta">
                        <span>⏱️ Response: Within 7 days</span>
                        <span>✓ Fair & Prompt Resolution</span>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="grievance-intro-section">
                <div className="grievance-intro-card">
                    <div className="intro-icon-grievance">🤝</div>
                    <h2>Our Commitment to You</h2>
                    <p>
                        We, at <strong>MLB Securities Private Limited</strong>, (hereinafter referred as the 'Company') consider customer service as a crucial aspect of our business growth and always strive to provide exceptional service to our customers. We understand that prompt and efficient service is necessary to establish and maintain customer relationships, and their satisfaction is of utmost importance to us.
                    </p>
                    <p>
                        We value customer complaints as they provide us with valuable feedback. To handle complaints efficiently, we have a structured grievance redressal framework in place. The framework is supported by a review mechanism that helps us to identify and resolve similar issues in the future.
                    </p>

                    <div className="principles-grid">
                        <div className="principle-card">
                            <div className="principle-icon">⚖️</div>
                            <strong>Fair Treatment</strong>
                            <p>Customers will always be treated fairly</p>
                        </div>
                        <div className="principle-card">
                            <div className="principle-icon">⚡</div>
                            <strong>Prompt Service</strong>
                            <p>Complaints handled with courtesy and promptness</p>
                        </div>
                        <div className="principle-card">
                            <div className="principle-icon">📢</div>
                            <strong>Clear Communication</strong>
                            <p>Informed about escalation channels and rights</p>
                        </div>
                        <div className="principle-card">
                            <div className="principle-icon">✓</div>
                            <strong>Efficient Resolution</strong>
                            <p>Complaints addressed efficiently and fairly</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="grievance-content-section">
                {/* Section 1: How to Lodge a Complaint */}
                <div className="grievance-section-card">
                    <div className="section-number-grievance">1</div>
                    <div className="section-content-grievance">
                        <h3>How to Lodge a Complaint</h3>
                        <p>
                            The customer can approach any of our service touch points given below for grievance/complaint/feedback concerning the product and services offered by the Company:
                        </p>

                        <div className="contact-methods-grid">
                            <div className="contact-method-card">
                                <div className="method-icon">📞</div>
                                <h4>Phone</h4>
                                <a href="tel:+919326223885" className="method-link">+91 9326223885</a>
                                <p>Call us anytime</p>
                            </div>

                            <div className="contact-method-card">
                                <div className="method-icon">✉️</div>
                                <h4>Email</h4>
                                <a href="mailto:Care@efin.co.in" className="method-link">Care@efin.co.in</a>
                                <p>Write to us</p>
                            </div>

                            <div className="contact-method-card full-width">
                                <div className="method-icon">📍</div>
                                <h4>Postal Address</h4>
                                <p className="address-text">
                                    C-624, Tower C, Spectrum @Metro,<br />
                                    Sector 75 Noida, Uttar Pradesh 201301
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2: How to Make a Complaint */}
                <div className="grievance-section-card">
                    <div className="section-number-grievance">2</div>
                    <div className="section-content-grievance">
                        <h3>How a Complaint Should Be Made</h3>
                        <p>
                            Customers are requested to provide the following information when communicating:
                        </p>

                        <div className="requirements-list">
                            <div className="requirement-item">
                                <span className="req-icon">📋</span>
                                <div>
                                    <strong>Loan Details</strong>
                                    <p>Including Loan Account Number</p>
                                </div>
                            </div>
                            <div className="requirement-item">
                                <span className="req-icon">💬</span>
                                <div>
                                    <strong>Feedback/Complaint Details</strong>
                                    <p>Clear description of your concern</p>
                                </div>
                            </div>
                            <div className="requirement-item">
                                <span className="req-icon">📱</span>
                                <div>
                                    <strong>Contact Information</strong>
                                    <p>Phone number and email registered with the company</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3: Response Timeline */}
                <div className="grievance-section-card highlight">
                    <div className="section-number-grievance">3</div>
                    <div className="section-content-grievance">
                        <h3>When to Expect the Reply</h3>
                        <p>
                            The company will make every effort to respond to all queries and grievances within a reasonable time and keep the customer informed about the status of their complaints.
                        </p>

                        <div className="timeline-box">
                            <div className="timeline-icon">⏰</div>
                            <div>
                                <strong>Resolution Timeline</strong>
                                <p>Since each customer query or complaint is unique, it may take up to <strong>7 working days</strong> to resolve completely after investigation, provided the customer provides all the necessary information.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 4: Nodal Officer */}
                <div className="grievance-section-card">
                    <div className="section-number-grievance">4</div>
                    <div className="section-content-grievance">
                        <h3>Whom to Approach for Redressal</h3>
                        <p>
                            We kindly request our customers to initially raise their concerns through any of the channels mentioned above. If there is a delay or no response from the respective channel within the specified timelines, customers can escalate their complaints to the nodal officer:
                        </p>

                        <div className="nodal-officer-card">
                            <div className="nodal-header">
                                <div className="nodal-icon">👤</div>
                                <div>
                                    <h4>Nodal Officer</h4>
                                    <p>Grievance Redressal Official</p>
                                </div>
                            </div>

                            <div className="nodal-details">
                                <div className="nodal-detail-item">
                                    <span className="detail-label">Name</span>
                                    <span className="detail-value">Radhika Mishra</span>
                                </div>
                                <div className="nodal-detail-item">
                                    <span className="detail-label">Email</span>
                                    <a href="mailto:grievance@mlbsecurities.com" className="detail-value link">grievance@mlbsecurities.com</a>
                                </div>
                                <div className="nodal-detail-item full">
                                    <span className="detail-label">Office Address</span>
                                    <span className="detail-value">C-624, Tower C, Spectrum @Metro, Sector 75 Noida, Uttar Pradesh 201301</span>
                                </div>
                            </div>

                            <div className="nodal-footer">
                                <span className="footer-icon">⏱️</span>
                                <p>The Grievance Redressal Official will attempt to resolve complaints within <strong>5 days</strong> of receipt by email.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 5: RBI Escalation */}
                <div className="grievance-section-card rbi">
                    <div className="section-number-grievance">5</div>
                    <div className="section-content-grievance">
                        <h3>Escalation to the Reserve Bank of India</h3>
                        <p>
                            If the customer is not satisfied with the resolution received or if the customer does not hear from us in <strong>30 days</strong>, then he/she may lodge their complaint with RBI:
                        </p>

                        <div className="rbi-channels-grid">
                            <div className="rbi-channel">
                                <div className="rbi-icon">🌐</div>
                                <h4>CMS Portal</h4>
                                <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="rbi-link">
                                    cms.rbi.org.in →
                                </a>
                            </div>

                            <div className="rbi-channel">
                                <div className="rbi-icon">✉️</div>
                                <h4>Email</h4>
                                <a href="mailto:crpc@rbi.org.in" className="rbi-link">
                                    crpc@rbi.org.in →
                                </a>
                            </div>

                            <div className="rbi-channel">
                                <div className="rbi-icon">📞</div>
                                <h4>Toll-Free</h4>
                                <a href="tel:14448" className="rbi-link">
                                    14448 →
                                </a>
                                <p className="timing">9:30 am to 5:15 pm</p>
                            </div>
                        </div>

                        <div className="rbi-address-box">
                            <strong>📍 Postal Address:</strong>
                            <p>
                                The Officer In-charge,<br />
                                Centralised Receipt and Processing Centre,<br />
                                Reserve Bank of India, 4th Floor, Sector 17,<br />
                                Chandigarh – 160017
                            </p>
                            <p className="note-text">
                                <em>Format available on the website under Ombudsman scheme 2021</em>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resolution Section */}
            <section className="resolution-section">
                <div className="resolution-card">
                    <div className="resolution-icon">🎯</div>
                    <h2>Resolution of Grievance</h2>
                    <p>
                        Our goal is to resolve complaints through the official communication channel to the customer's satisfaction. We'll provide alternate solutions where possible. If the customer remains dissatisfied, they can escalate the issue through the grievance redressal mechanism mentioned above.
                    </p>

                    <div className="resolution-highlight">
                        <h3>Time Frame</h3>
                        <p>
                            Suitable timelines have been set for every complaint depending upon the investigations that would be involved in resolving the same. Complaints are suitably acknowledged on receipt and the customers are informed of delays if any, in the resolution.
                        </p>
                    </div>
                </div>
            </section>

            {/* Compliments Section */}
            <section className="compliments-section">
                <div className="compliments-card">
                    <div className="compliments-icon">⭐</div>
                    <h2>We Value Your Compliments Too!</h2>
                    <p>
                        "We aim to provide excellent service to all our customers. Let us know if we did something special or if you were happy with our service. Your feedback will help us serve you better in the future."
                    </p>
                    <div className="compliments-cta">
                        <a href="mailto:Care@efin.co.in" className="primary-btn large">
                            Share Your Feedback →
                        </a>
                        <Link to="/support" className="ghost-btn large">
                            Contact Support
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default GrievanceRedressalPage;
