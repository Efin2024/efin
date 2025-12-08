import { Link } from 'react-router-dom';
import './TermsAndConditionsPage.css';

function TermsAndConditionsPage() {
    return (
        <div className="page terms-page-modern">
            {/* Hero Section */}
            <section className="terms-hero">
                <div className="terms-hero-content">
                    <span className="terms-badge">📜 Legal Document</span>
                    <h1>Terms & Conditions</h1>
                    <p className="terms-hero-description">
                        Please read these terms and conditions carefully before using our services.
                        By accessing our website, you agree to be bound by these terms.
                    </p>
                    <div className="terms-meta">
                        <span>📅 Last Updated: December 2024</span>
                        <span>⏱️ 15 min read</span>
                    </div>
                </div>
            </section>

            {/* Table of Contents */}
            <section className="terms-toc-section">
                <div className="terms-toc">
                    <h3>Quick Navigation</h3>
                    <div className="toc-grid">
                        <a href="#introduction" className="toc-item">Introduction</a>
                        <a href="#who-we-are" className="toc-item">Who We Are</a>
                        <a href="#services" className="toc-item">Services</a>
                        <a href="#onboarding" className="toc-item">On-boarding</a>
                        <a href="#third-party" className="toc-item">Third Party Services</a>
                        <a href="#liability" className="toc-item">Limitation of Liability</a>
                        <a href="#termination" className="toc-item">Term & Termination</a>
                        <a href="#disclaimers" className="toc-item">Disclaimers</a>
                        <a href="#indemnity" className="toc-item">Indemnity</a>
                        <a href="#data-consent" className="toc-item">Data Consent</a>
                        <a href="#fees" className="toc-item">Fees/Charges</a>
                        <a href="#jurisdiction" className="toc-item">Jurisdiction</a>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="terms-content-section">
                {/* Introduction */}
                <div id="introduction" className="terms-section">
                    <div className="section-icon">📋</div>
                    <h2>Introduction</h2>
                    <div className="terms-text">
                        <p>
                            MLB Securities Private Limited (the <strong>"Company"</strong>, <strong>"we"</strong>, <strong>"us"</strong> or <strong>"our"</strong>) owns and operates a website i.e. <a href="https://www.mlbsecurities.com" target="_blank" rel="noopener noreferrer">https://www.mlbsecurities.com</a> including its mobile applications and the Website. These terms and conditions (<strong>"Terms"</strong>) shall govern the use or access to the Website and Services (as defined below). These Terms constitute a binding and enforceable legal contract between the Company and the user of the website (<strong>"you, your or user"</strong>).
                        </p>
                        <p>
                            Unless defined herein, capitalized terms shall have the meaning ascribed to them under the Privacy Policy.
                        </p>
                        <div className="info-box">
                            <div className="info-icon">ℹ️</div>
                            <div>
                                <strong>Important Notice</strong>
                                <p>No information provided on the Website shall be considered a substitute for your independent investigation. These Terms are collectively an electronic record for the purpose of the Information Technology Act, 2000 ("IT Act") and the rules made thereunder.</p>
                            </div>
                        </div>
                        <p>
                            These Terms do not require any digital or electronic signature. You must not modify the paper or digital copies of any materials you have printed, or downloaded from, our Websites in any way, and you must not use any illustrations, photographs, video or audio sequences or any graphics separately from any accompanying text.
                        </p>
                        <div className="highlight-box">
                            <strong>By using our Website, you confirm that you accept these Terms and that you agree to comply with them. If you do not agree to the Terms, you must not access this Website.</strong>
                        </div>
                    </div>
                </div>

                {/* Who We Are */}
                <div id="who-we-are" className="terms-section">
                    <div className="section-icon">🏢</div>
                    <h2>Who Are We and What Do We Do?</h2>
                    <div className="terms-text">
                        <p>
                            The Company is a private limited company incorporated under the Companies Act, 2013. The Company aims to deliver a unified platform wherein the company avail financing options and benefits accruing to customers in a single place.
                        </p>
                        <p>
                            The Website is owned and managed by the Company. Please read the Terms to acquaint yourself of the practices of the Company, with regard to your use of the domain and subdomains of our Website, which includes only the domains and subdomains being operated by the Company and does not include the domains or subdomains licensed out by the Company.
                        </p>
                        <div className="info-box warning">
                            <div className="info-icon">⚠️</div>
                            <div>
                                <strong>Service Availability</strong>
                                <p>We hereby clarify that the Services mentioned on the Website are subject to availability. The Company reserves the right to modify, amend and/or alter the said Service(s) based on its sole discretion and no such Services shall be deemed to be any offer or acceptance by the Company unless the same are accepted by the Company separately in writing through its authorized representatives.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services */}
                <div id="services" className="terms-section">
                    <div className="section-icon">💼</div>
                    <h2>Services</h2>
                    <div className="terms-text">
                        <p>
                            The Website allows you to work out your eligibility using our Calculator and after documentation offers financing options to you. Please note the website is generic and offers directional estimates.
                        </p>
                        <div className="info-box warning">
                            <div className="info-icon">⚠️</div>
                            <div>
                                <strong>Liability Disclaimer</strong>
                                <p>There is no liability for MLB Securities Private Limited for anything published on the website. Once the customers agree to take the services offered there would be a separate agreement between the parties concerned and all liabilities would be governed by that separate agreement. There would be a separate agreement between the borrower and the Lender.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* On-boarding */}
                <div id="onboarding" className="terms-section">
                    <div className="section-icon">👤</div>
                    <h2>On-boarding</h2>
                    <div className="terms-text">
                        <div className="terms-list">
                            <div className="list-item">
                                <span className="list-number">a.</span>
                                <div>
                                    <p>To avail the Services, you would be required to create a profile/sign-up on the Website (<strong>"Profile"</strong>) using your email ID and phone number, among other details. You warrant that all information furnished in connection with your Profile is and shall remain accurate and true in all respects. You further agree and undertake to promptly update your details on the Website in the event of any change or modification of such details.</p>
                                </div>
                            </div>
                            <div className="list-item">
                                <span className="list-number">b.</span>
                                <div>
                                    <p>You are solely responsible for maintaining the security and confidentiality of your username and password and agree to immediately notify the Company in writing of any disclosure or unauthorized use of your Profile or any other breach of security with respect to your Profile.</p>
                                </div>
                            </div>
                            <div className="list-item">
                                <span className="list-number">c.</span>
                                <div>
                                    <p>You expressly agree to be liable and accountable for all activities that take place through your Profile in furtherance of the use of the Website or the Service provided or otherwise. The Company expressly excludes any liability for any unauthorised access to your Profile.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Third Party Services */}
                <div id="third-party" className="terms-section">
                    <div className="section-icon">🔗</div>
                    <h2>Third Party Services</h2>
                    <div className="terms-text">
                        <div className="terms-list">
                            <div className="list-item">
                                <span className="list-number">a.</span>
                                <div>
                                    <p>The Services may include services, content, documents, and information owned by, licensed to, or otherwise made available by a third party (<strong>"Third Party Services"</strong>) or contain links to Third Party Services. You understand that Third Party Services are the responsibility of the third party that created or provided the services and acknowledge that use of such Third-Party Services is solely at your own risk.</p>
                                </div>
                            </div>
                            <div className="list-item">
                                <span className="list-number">b.</span>
                                <div>
                                    <p>The Company makes no representations and hereby expressly excludes all warranties and liabilities arising out of or pertaining to such Third-Party Services, including the accuracy or completeness. Further, all intellectual property rights in and to Third Party Services are the property of the respective third parties.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Limitation of Liability */}
                <div id="liability" className="terms-section">
                    <div className="section-icon">⚖️</div>
                    <h2>Limitation of Liability</h2>
                    <div className="terms-text">
                        <p>
                            The Company does not hold any liability for any occurrence arising from your usage of our Services resulting in any financial, material or human damage. You understand and agree that Company shall not be liable to you for any direct, indirect, incidental, special, consequential or exemplary damages, including without limitation damages for loss of profits, goodwill, use, data or other intangible losses (even if Company had been advised of the possibility of such damages), resulting from or relating to the Websites or Mobile application, whether based on warranty, contract, tort, or any other legal theory.
                        </p>
                        <div className="highlight-box">
                            <p>
                                <strong>Liability Cap:</strong> Notwithstanding anything to the contrary contained herein or elsewhere, Company's total liability for any user's claim which may arise out of availing our services through browsing websites/mobile app or elsewhere shall be limited up to the fees paid by such user at the time of availing the Services giving rise to such claim.
                            </p>
                        </div>
                        <div className="info-box warning">
                            <div className="info-icon">⏰</div>
                            <div>
                                <strong>Claims Timeline</strong>
                                <p>All claims/complaints arising from and in connection with the use of our Services shall be promptly submitted or reported to the Company and or/ its Partners within thirty (30) days of the consumption of such Services. Any claim or complaint that is submitted / reported after the expiry of such 30 days may be rejected, and the claimant will forfeit the right to claim any damage, cost or compensation.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Term and Termination */}
                <div id="termination" className="terms-section">
                    <div className="section-icon">🔚</div>
                    <h2>Term and Termination</h2>
                    <div className="terms-text">
                        <div className="terms-list">
                            <div className="list-item">
                                <span className="list-number">a.</span>
                                <div>
                                    <p>These Terms shall remain in effect unless terminated in accordance with the terms hereunder.</p>
                                </div>
                            </div>
                            <div className="list-item">
                                <span className="list-number">b.</span>
                                <div>
                                    <p>The Company may terminate your access to or use of the Services, or any portion thereof, immediately and at any point, at its sole discretion, if the user violates or breaches any of its obligations, responsibilities, or covenants under these Terms.</p>
                                </div>
                            </div>
                            <div className="list-item">
                                <span className="list-number">c.</span>
                                <div>
                                    <p>Upon termination these Terms shall terminate, except for those clauses that expressly or are intended to survive termination or expiry.</p>
                                </div>
                            </div>
                            <div className="list-item">
                                <span className="list-number">d.</span>
                                <div>
                                    <p>Notwithstanding anything to the contrary contained in the Terms, upon termination of your access to or use of the Services, all amounts or outstanding monies due by you in relation to your use of or access to the Services shall become immediately payable.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Disclaimers and Warranties */}
                <div id="disclaimers" className="terms-section">
                    <div className="section-icon">⚠️</div>
                    <h2>Disclaimers and Warranties</h2>
                    <div className="terms-text">
                        <div className="terms-list">
                            <div className="list-item">
                                <span className="list-number">a.</span>
                                <div>
                                    <p>The use of the Services is at your sole risk.</p>
                                </div>
                            </div>
                            <div className="list-item">
                                <span className="list-number">b.</span>
                                <div>
                                    <p>To the extent permitted by applicable law, the Services are provided on an "as is" and "as available" basis. The Company does not warrant that operation of the Services will be uninterrupted or error free or that the functions contained in the Services will meet your requirements.</p>
                                </div>
                            </div>
                            <div className="list-item">
                                <span className="list-number">c.</span>
                                <div>
                                    <p>To the fullest extent permissible under applicable law, the Company expressly disclaims all warranties of any kind, express or implied, arising out of the Services, including warranties of merchantability, fitness for a particular purpose, satisfactory quality, accuracy, title and non-infringement, compatibility, applicability, usability, appropriateness, and any warranty that may arise out of course of performance, course of dealing, or usage of trade.</p>
                                </div>
                            </div>
                            <div className="list-item">
                                <span className="list-number">d.</span>
                                <div>
                                    <p>You hereby accept full responsibility for any consequences that may arise from your use of the Services, and expressly agree and acknowledge that the Company shall have absolutely no liability with respect to the same.</p>
                                </div>
                            </div>
                            <div className="list-item">
                                <span className="list-number">e.</span>
                                <div>
                                    <p>To the fullest extent permissible by law, the Company, its affiliates, and its related parties each disclaim all liability to you for any loss or damage arising out of or due to:</p>
                                    <ul className="sub-list">
                                        <li>Your use of or inability to use, or availability or unavailability of the Services, including any Third Party Services.</li>
                                        <li>The occurrence or existence of any defect, interruption, or delays in the operation or transmission of information to, from, or through the Services, communications failure, theft, destruction or unauthorised access to the Company's records, programs, services, server, or other infrastructure relating to the Services;</li>
                                        <li>The failure of the Services to remain operational for any period of time.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="list-item">
                                <span className="list-number">f.</span>
                                <div>
                                    <p>Notwithstanding anything to the contrary contained herein, neither the Company nor any of its affiliates or related parties shall have any liability to you or any third party for any indirect, incidental, special or consequential damages or any loss of revenue or profits arising under, directly or indirectly, or relating, in any manner whatsoever, to these Terms or the Services. To the maximum extent permitted by law, you agree to waive, release, discharge, and hold harmless the Company, its affiliated and subsidiary companies, its parent companies, and each of their directors, officers, employees, and agents, from any and all claims, losses, damages, liabilities, expenses and causes of action arising out of the Services.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Indemnity */}
                <div id="indemnity" className="terms-section">
                    <div className="section-icon">🛡️</div>
                    <h2>Indemnity</h2>
                    <div className="terms-text">
                        <p>
                            You shall indemnify, defend at the Company's option, and hold the Company, its parent companies, subsidiaries, affiliates, and their officers, associates successors, assigns, licensors, employees, directors, agents, and representatives, harmless from and against any claim, demand, lawsuits, judicial proceeding, losses, liabilities, damages and costs (including, without limitation, from all damages, liabilities, settlements, costs and attorneys' fees) due to or arising out of your use of the Website or the Services provided, including any violation of these Terms or any infringement by you of any third party right or on account of any third party who may use your account with the Company.
                        </p>
                    </div>
                </div>

                {/* Consent to Use Data */}
                <div id="data-consent" className="terms-section">
                    <div className="section-icon">🔒</div>
                    <h2>Consent to Use Data</h2>
                    <div className="terms-text">
                        <div className="terms-list">
                            <div className="list-item">
                                <span className="list-number">a.</span>
                                <div>
                                    <p>You agree that the Company and any third-party service providers it engages, may, in accordance with its privacy policy, collect and use your information and technical data and related information.</p>
                                </div>
                            </div>
                            <div className="list-item">
                                <span className="list-number">b.</span>
                                <div>
                                    <p>The Company may use information and data pertaining to your use of the Services for analytics, trends identification, and purposes of statistics to further enhance the effectiveness and efficiency of the Website and transfer the same to its group companies and service providers in furtherance of your access to these Services. You provide your consent to such use and sharing of your information.</p>
                                </div>
                            </div>
                            <div className="list-item">
                                <span className="list-number">c.</span>
                                <div>
                                    <p>Subject to applicable laws, the Company may be directed by law enforcement agencies or the government and related bodies to disclose data in relation to users in connection with criminal proceedings. You understand and agree that in such instances, the Company shall have the right to share such data with relevant agencies or bodies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fees/Charges */}
                <div id="fees" className="terms-section">
                    <div className="section-icon">💰</div>
                    <h2>Fees/Charges</h2>
                    <div className="terms-text">
                        <p>
                            The Company reserves the right to charge a convenience fee for the Services and non-payment may result in denial of Services and/or action under applicable law.
                        </p>
                    </div>
                </div>

                {/* Modification */}
                <div id="modification" className="terms-section">
                    <div className="section-icon">🔄</div>
                    <h2>Modification</h2>
                    <div className="terms-text">
                        <p>
                            The Company reserves the right at any time to add, modify or discontinue, temporarily or permanently, the Services (or any part thereof) with or without cause. The Company shall not be liable for any such addition, modification, suspension or discontinuation of the Services.
                        </p>
                    </div>
                </div>

                {/* Jurisdiction */}
                <div id="jurisdiction" className="terms-section">
                    <div className="section-icon">⚖️</div>
                    <h2>Jurisdiction, Governing Laws, and Dispute Resolution</h2>
                    <div className="terms-text">
                        <p>
                            These Terms shall be governed by and construed and enforced in accordance with the laws of India. Subject to other provisions in this Clause, courts in Delhi shall have exclusive jurisdiction over all issues arising out of these Terms or the use of the Services.
                        </p>
                        <p>
                            Any controversies, conflicts, disputes, or differences arising out of these Terms shall be resolved by arbitration in Delhi in accordance with the Arbitration and Conciliation Act, 1996 for the time being in force, which is deemed to be incorporated by reference in this Clause. The tribunal shall consist of 1 (one) arbitrator appointed by the Company. The language of the arbitration shall be English.
                        </p>
                        <p>
                            The parties to the arbitration shall keep the arbitration confidential and not disclose to any person, other than on a need to basis or to legal advisors, unless required to do so by law. The decision of the arbitrator shall be final and binding on all the Parties hereto. Each party to the arbitration shall bear its own costs with respect to any dispute.
                        </p>
                    </div>
                </div>

                {/* Miscellaneous */}
                <div id="miscellaneous" className="terms-section">
                    <div className="section-icon">📝</div>
                    <h2>Miscellaneous Provisions</h2>
                    <div className="terms-text">
                        <div className="terms-list">
                            <div className="list-item">
                                <span className="list-number">a.</span>
                                <div>
                                    <strong>Modification</strong>
                                    <p>The Company reserves the right at any time to modify these Terms and to add new or additional terms or conditions on use of the Services. Such modifications and additional terms and conditions will be communicated to you and, unless expressly rejected (in which these Terms shall terminate), will be effective immediately and will be incorporated into these Terms. In the event you refuse to accept such changes, these Terms will terminate.</p>
                                </div>
                            </div>
                            <div className="list-item">
                                <span className="list-number">b.</span>
                                <div>
                                    <strong>Severability</strong>
                                    <p>If any provision of these Terms is determined by any court or other competent authority to be unlawful or unenforceable, the other provisions of these Terms will continue in effect. If any unlawful or unenforceable provision would be lawful or enforceable if part of it were deleted, that part will be deemed to be deleted, and the rest of the provision will continue in effect (unless that would contradict the clear intention of the clause, in which case the entirety of the relevant provision will be deemed to be deleted).</p>
                                </div>
                            </div>
                            <div className="list-item">
                                <span className="list-number">c.</span>
                                <div>
                                    <strong>Assignment</strong>
                                    <p>You shall not license, sell, transfer or assign your rights, obligations, or covenants under these Terms in any manner without the Company's prior written consent. The Company may grant or withhold this consent in its sole discretion and subject to any conditions it deems appropriate. The Company may assign its rights to any of its affiliates, subsidiaries, or parent companies, or to any successor in interest of any business associated with the Services without any prior notice to you.</p>
                                </div>
                            </div>
                            <div className="list-item">
                                <span className="list-number">d.</span>
                                <div>
                                    <strong>Notices</strong>
                                    <p>All notices, requests, demands, and determinations for the Company under these Terms (other than routine operational communications) shall be sent to <a href="mailto:Care@efin.co.in">Care@efin.co.in</a></p>
                                </div>
                            </div>
                            <div className="list-item">
                                <span className="list-number">e.</span>
                                <div>
                                    <strong>Third Party Rights</strong>
                                    <p>No third party shall have any right to enforce any terms contained herein.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="terms-contact-section">
                <div className="terms-contact-card">
                    <div className="contact-icon-large">📧</div>
                    <h2>Questions About These Terms?</h2>
                    <p>If you have any questions or concerns regarding these Terms and Conditions, please don't hesitate to contact us.</p>
                    <div className="contact-buttons">
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

export default TermsAndConditionsPage;
