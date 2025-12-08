import './PoliciesPage.css';

function PoliciesPage() {
    return (
        <div className="page policies-page">
            {/* Hero Section */}
            <section className="policies-hero">
                <div className="policies-container">
                    <span className="policies-badge">Legal & Privacy</span>
                    <h1>Privacy Policy</h1>
                    <p className="policies-subtitle">
                        Last updated: December 2024 | MLB Securities Private Limited
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="policies-main">
                <div className="policies-container">
                    <div className="policies-intro">
                        <p>
                            This Privacy Policy outlines the practices of MLB Securities Private Limited regarding the collection, use, disclosure, and protection of personal information of individuals who visit our website or mobile application or use our services. MLB is dedicated to safeguarding your privacy and ensuring the security of your personal information. By accessing our website or using our services, you are agreeing to the terms and conditions of this Privacy Policy.
                        </p>
                    </div>

                    <div className="policies-section">
                        <h2>INFORMATION WE COLLECT</h2>
                        <p>
                            We may gather personal information from you when you willingly provide it to us, for example, by filling out forms on our website, communicating with us via email or phone, or applying for our services. The types of personal information we may collect include:
                        </p>
                        <ul>
                            <li>Contact information (e.g., name, email address, phone number, postal address)</li>
                            <li>Photographic identification or proof of address documents</li>
                            <li>Information about your financing needs or preferences</li>
                            <li>Information about your interactions with our website and services</li>
                        </ul>
                    </div>

                    <div className="policies-section">
                        <h2>USE OF PERSONAL INFORMATION</h2>
                        <p>We may use the personal information we collect for the following purposes:</p>
                        <ul>
                            <li>To provide our services and process your financing applications</li>
                            <li>To communicate with you concerning your inquiries, applications, or account-related matters</li>
                            <li>To personalize your experience and improve our website and services</li>
                            <li>To send you marketing or promotional materials (with your consent)</li>
                            <li>To comply with legal obligations or respond to lawful requests from public authorities</li>
                        </ul>
                    </div>

                    <div className="policies-section">
                        <h2>DISCLOSURE OF PERSONAL INFORMATION</h2>
                        <p>We may disclose your personal information to third parties in the following circumstances:</p>
                        <ul>
                            <li>With your consent or at your direction</li>
                            <li>To our affiliates, subsidiaries, or related entities for business purposes</li>
                            <li>To service providers who assist us in operating our business and providing our services</li>
                            <li>To comply with legal obligations, enforce our policies, or protect our rights, property, or safety</li>
                            <li>In connection with a merger, acquisition, or sale of all or a portion of our business</li>
                        </ul>
                        <div className="policies-highlight">
                            <strong>Important:</strong> We do not sell, trade, or rent your personal information to third parties for their marketing purposes.
                        </div>
                    </div>

                    <div className="policies-section">
                        <h2>DATA SECURITY</h2>
                        <p>
                            We implement reasonable physical, technical, and administrative security measures to protect the personal information we collect. However, no method of transmission over the Internet or electronic storage is completely secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
                        </p>
                    </div>

                    <div className="policies-section">
                        <h2>YOUR RIGHTS</h2>
                        <p>You have certain rights regarding your personal information, subject to applicable law. These rights may include:</p>
                        <ul>
                            <li>Accessing, correcting, or deleting your personal information</li>
                            <li>Restricting or objecting to the processing of your personal information</li>
                            <li>Withdrawing consent for certain processing activities</li>
                            <li>Requesting the portability of your personal information</li>
                            <li>Filing a complaint with a supervisory authority</li>
                        </ul>
                        <div className="policies-highlight">
                            To exercise your rights or if you have any questions or concerns regarding our Privacy Policy, please contact us using the information provided in the Contact Us section.
                        </div>
                    </div>

                    <div className="policies-section">
                        <h2>COOKIES AND TRACKING TECHNOLOGIES</h2>
                        <p>
                            Our website may use cookies and similar tracking technologies to enhance your browsing experience and collect information about how you use our site. You can manage your cookie preferences through your browser settings.
                        </p>
                    </div>

                    <div className="policies-section">
                        <h2>CONTACT US</h2>
                        <p>
                            If you have any questions, concerns, or requests regarding this Privacy Policy or the processing of your personal information, please contact us at:
                        </p>
                        <div className="policies-contact">
                            <div className="contact-item">
                                <span className="contact-label">Email:</span>
                                <a href="mailto:Care@efin.co.in">Care@efin.co.in</a>
                            </div>
                            <div className="contact-item">
                                <span className="contact-label">Phone:</span>
                                <a href="tel:+919997842548">+91 9997842548</a>
                            </div>
                        </div>
                    </div>

                    <div className="policies-section">
                        <h2>CHANGES TO THIS PRIVACY POLICY</h2>
                        <p>
                            We may update this Privacy Policy from time to time. Any changes will be effective upon posting the revised Privacy Policy on our website. We encourage you to review this Privacy Policy periodically to stay informed about how we collect, use, and protect your personal information.
                        </p>
                        <div className="policies-highlight">
                            By using our website or services after any changes to this Privacy Policy, you acknowledge and agree to the revised terms.
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PoliciesPage;
