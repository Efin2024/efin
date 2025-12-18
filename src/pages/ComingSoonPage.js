import React from 'react';
import { Link } from 'react-router-dom';
import './ComingSoonPage.css';
import { useLeadCapture } from '../hooks/useLeadCapture'; // Assuming the hook is located here

const ComingSoonPage = ({ type = 'portal' }) => {
    const isPortal = type === 'portal';
    const { captureLead, isLoading, isSuccess } = useLeadCapture();
    const [formData, setFormData] = React.useState({ name: '', contact: '' });

    const handleNotify = async (e) => {
        e.preventDefault();
        await captureLead({
            name: formData.name,
            email: formData.contact.includes('@') ? formData.contact : null,
            phone: !formData.contact.includes('@') ? formData.contact : null,
            source: isPortal ? 'Portal Waitlist' : 'Admin Waitlist',
            message: `User wants to be notified when ${isPortal ? 'Customer Portal' : 'Admin'} launches.`
        });
        if (!isLoading) setFormData({ name: '', contact: '' });
    };

    return (
        <div className="coming-soon-container">
            <div className="coming-soon-bg-blobs">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
            </div>

            <div className="coming-soon-content">
                <div className="coming-soon-icon">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" strokeLinecap="round" strokeLinejoin="round">
                            <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="10s" repeatCount="indefinite" />
                        </path>
                        <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <h1 className="coming-soon-title">Something Great is Under Construction</h1>

                <p className="coming-soon-text">
                    We're currently enhancing our {isPortal ? 'Customer Portal' : 'Admin experience'} to provide you with a more seamless financial journey.
                    We'll be live very soon!
                </p>

                {isSuccess ? (
                    <div className="waitlist-success">
                        <span className="success-icon">✨</span>
                        <h3>You're on the list!</h3>
                        <p>We'll notify you as soon as we launch.</p>
                    </div>
                ) : (
                    <form className="waitlist-form" onSubmit={handleNotify}>
                        <div className="waitlist-inputs">
                            <input
                                type="text"
                                placeholder="Your Name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Email or Phone"
                                required
                                value={formData.contact}
                                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                            />
                            <button type="submit" disabled={isLoading}>
                                {isLoading ? 'Joining...' : 'Notify Me'}
                            </button>
                        </div>
                    </form>
                )}

                <div className="coming-soon-actions">
                    <Link to="/" className="btn-back-home">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                        Back to Website
                    </Link>
                    <Link to="/support/contact" className="btn-contact-us">
                        Contact Support
                    </Link>
                </div>

                <div className="status-badge">
                    <span className="dot"></span>
                    Projected Live Date: Early 2025
                </div>
            </div>
        </div>
    );
};

export default ComingSoonPage;
