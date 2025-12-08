import { Link } from 'react-router-dom';
import './DisclaimerPage.css';

function DisclaimerPage() {
    return (
        <div className="page disclaimer-page-modern">
            {/* Hero Section */}
            <section className="disclaimer-hero">
                <div className="disclaimer-hero-content">
                    <span className="disclaimer-badge">⚠️ Important Notice</span>
                    <h1>Disclaimer</h1>
                    <p className="disclaimer-hero-description">
                        Please read this disclaimer carefully before using our website and mobile application.
                        By accessing our services, you agree to be bound by these terms.
                    </p>
                    <div className="disclaimer-meta">
                        <span>📅 Last Updated: December 2024</span>
                        <span>🏢 Issued by MLB Securities Private Limited</span>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="disclaimer-intro-section">
                <div className="disclaimer-intro-card">
                    <div className="intro-icon">📋</div>
                    <h2>About This Disclaimer</h2>
                    <p>
                        This Disclaimer is issued by <strong>MLB Securities Private Limited</strong>.
                    </p>
                    <p>
                        By visiting the site <a href="https://www.mlbsecurities.com" target="_blank" rel="noopener noreferrer">https://www.mlbsecurities.com</a> (<strong>"Website"</strong>) and the official Mobile Application (<strong>"App"</strong>), you (<strong>"User"</strong>) agree to be bound by the disclaimer and the terms and conditions as stated herein below.
                    </p>
                    <div className="warning-box-disclaimer">
                        <div className="warning-icon">⚠️</div>
                        <div>
                            <strong>Important Notice</strong>
                            <p>User understands, agrees, and undertakes that User is free to not accept these Disclaimers and in such an event, User is advised to not use or access this Website/App in any manner. Use and/or access of this Website/App by the User in any manner shall constitute an irrevocable acceptance and be bound by of the following terms and conditions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="disclaimer-content-section">
                {/* Section 1 */}
                <div className="disclaimer-section-card">
                    <div className="section-number">1</div>
                    <div className="section-content-disclaimer">
                        <h3>User Responsibility & Professional Advice</h3>
                        <p>
                            Placing any reliance on the Website/App or any material available through this website/App, is at the sole risk of the User. Users should seek professional advice before acting on the basis of the information contained on the website.
                        </p>
                        <div className="highlight-box-disclaimer">
                            <p>
                                The decision with respect to any financial product or opportunity or nature or suitable or choice or the viability of any product or service shall always be the <strong>sole responsibility and decision of the User</strong>.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="disclaimer-section-card">
                    <div className="section-number">2</div>
                    <div className="section-content-disclaimer">
                        <h3>Third-Party Content & Links</h3>
                        <p>
                            MLB never endorses any advertisement on the Website or the web pages therein. You are advised to verify the veracity of all information on your own before placing any reliance on the same.
                        </p>
                        <div className="info-box-disclaimer">
                            <div className="info-icon-disclaimer">ℹ️</div>
                            <div>
                                <strong>External Links</strong>
                                <p>The linked sites present links available on the website/App are not under our control and we are not responsible for the contents of any linked site, or any link contained in a linked site including microsite, or any changes or updates to such sites. We are providing these links to you only as a convenience, and the inclusion of any link is not an endorsement by us of such site.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3 */}
                <div className="disclaimer-section-card">
                    <div className="section-number">3</div>
                    <div className="section-content-disclaimer">
                        <h3>Limitation of Liability</h3>
                        <p>
                            In no event shall MLB or any of its agents or any other party involved in creating, producing, or delivering this website/App be liable for any direct, indirect, punitive, incidental, special, consequential damages (including lost revenue or profits, loss of business or loss of data) or any damages whatsoever connected with the use or performance of the Website, with the delay or inability to use the Website or related services, the provision or failure to provide services or any information, product, services and related graphics obtained through the Website, or otherwise arising out of the use of the Website, whether based on contract, tort, negligence, strict, liability or otherwise.
                        </p>
                        <div className="liability-grid">
                            <div className="liability-item">
                                <div className="liability-icon">💔</div>
                                <strong>No Liability For</strong>
                                <ul>
                                    <li>Direct or indirect damages</li>
                                    <li>Lost revenue or profits</li>
                                    <li>Loss of business or data</li>
                                    <li>Service delays or failures</li>
                                </ul>
                            </div>
                            <div className="liability-item">
                                <div className="liability-icon">⚖️</div>
                                <strong>Applies To</strong>
                                <ul>
                                    <li>Contract claims</li>
                                    <li>Tort claims</li>
                                    <li>Negligence claims</li>
                                    <li>Strict liability</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 4 */}
                <div className="disclaimer-section-card">
                    <div className="section-number">4</div>
                    <div className="section-content-disclaimer">
                        <h3>Intellectual Property Rights</h3>
                        <p>
                            Any person who is accessing or has accessed any information or data from this Website/App acknowledges and agrees that all proprietary rights, statutory or otherwise, and the information received by such person shall remain the exclusive property of MLB.
                        </p>
                        <div className="warning-box-disclaimer">
                            <div className="warning-icon">🔒</div>
                            <div>
                                <strong>Strict Prohibition</strong>
                                <p>Unless otherwise provided or agreed by the MLB in writing any reproduction, distribution transmission, or modification, for consideration or otherwise, of any such information contained in this Website/App is strictly prohibited and would constitute a breach of the intellectual property and other applicable laws.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 5 */}
                <div className="disclaimer-section-card">
                    <div className="section-number">5</div>
                    <div className="section-content-disclaimer">
                        <h3>Geographic Restrictions</h3>
                        <p>
                            This Website/App is not to be and should not be construed as purporting to offer or inviting to offer any information or services to residents of the countries/locations where MLB is not licensed or authorized to perform its business activity.
                        </p>
                        <div className="info-box-disclaimer">
                            <div className="info-icon-disclaimer">🌍</div>
                            <div>
                                <strong>Service Availability</strong>
                                <p>Our services are only available in jurisdictions where we are properly licensed and authorized to operate.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 6 */}
                <div className="disclaimer-section-card">
                    <div className="section-number">6</div>
                    <div className="section-content-disclaimer">
                        <h3>"As Is, Where Is" Basis</h3>
                        <div className="highlight-box-disclaimer">
                            <p>
                                Access to any information through this Website/App is provided only on an <strong>"as is where is basis"</strong>
                            </p>
                        </div>
                        <p className="disclaimer-note">
                            This means we provide the information and services without any warranties or guarantees of any kind, either express or implied. Users should exercise their own judgment and due diligence when using our services.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="disclaimer-contact-section">
                <div className="disclaimer-contact-card">
                    <div className="contact-icon-large">📧</div>
                    <h2>Questions About This Disclaimer?</h2>
                    <p>If you have any questions or concerns regarding this disclaimer, please don't hesitate to contact us.</p>
                    <div className="contact-buttons-disclaimer">
                        <a href="mailto:Care@efin.co.in" className="primary-btn large">
                            Email Us →
                        </a>
                        <Link to="/support" className="ghost-btn large">
                            Support Center
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default DisclaimerPage;
