import { useState } from 'react';
import './DashboardPage.css';

function DashboardPage() {
    const [showApplyModal, setShowApplyModal] = useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [showStatementModal, setShowStatementModal] = useState(false);
    const [showSupportModal, setShowSupportModal] = useState(false);
    const [showClosureModal, setShowClosureModal] = useState(false);
    const [selectedLoanType, setSelectedLoanType] = useState('');
    const [selectedLoanForPayment, setSelectedLoanForPayment] = useState(null);

    const [user, setUser] = useState({
        name: 'Ravi Shekhar',
        email: 'ravi@example.com',
        phone: '+91 99999 99999',
        kycStatus: 'Verified'
    });

    const [stats] = useState({
        creditScore: 750,
        availableCredit: '5,00,000',
        activeLoans: 2,
        upcomingPayment: '18,690'
    });

    const [loans] = useState([
        {
            id: 1,
            type: 'Personal Loan',
            amount: '5,00,000',
            status: 'Active',
            emi: '15,234',
            dueDate: '15 Dec 2025',
            progress: 35,
            accountNumber: 'PL2025001'
        },
        {
            id: 2,
            type: 'Two-Wheeler Loan',
            amount: '80,000',
            status: 'Active',
            emi: '3,456',
            dueDate: '20 Dec 2025',
            progress: 60,
            accountNumber: 'TW2025042'
        }
    ]);

    const [disbursements] = useState([
        {
            id: 1,
            date: '15 Jan 2024',
            loanType: 'Personal Loan',
            accountNumber: 'PL2025001',
            amount: '5,00,000',
            status: 'Completed'
        },
        {
            id: 2,
            date: '08 Mar 2024',
            loanType: 'Two-Wheeler Loan',
            accountNumber: 'TW2025042',
            amount: '80,000',
            status: 'Completed'
        },
        {
            id: 3,
            date: '22 Nov 2023',
            loanType: 'Business Loan',
            accountNumber: 'BL2023189',
            amount: '3,50,000',
            status: 'Closed'
        }
    ]);

    const totalDisbursed = disbursements.reduce((sum, d) => {
        return sum + parseInt(d.amount.replace(',', ''));
    }, 0);

    const handleApplyLoan = (loanType) => {
        setSelectedLoanType(loanType);
        setShowApplyModal(true);
    };

    const handlePayEMI = (loan) => {
        setSelectedLoanForPayment(loan);
        setShowPaymentModal(true);
    };

    const handleSubmitApplication = (e) => {
        e.preventDefault();
        alert('Loan application submitted successfully! Our team will contact you shortly.');
        setShowApplyModal(false);
        setSelectedLoanType('');
    };

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        alert('Payment processed successfully! Your EMI has been paid.');
        setShowPaymentModal(false);
        setSelectedLoanForPayment(null);
    };

    const handleProfileUpdate = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        setUser({
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            kycStatus: user.kycStatus
        });
        alert('Profile updated successfully!');
        setShowProfileModal(false);
    };

    const handleStatementRequest = (e) => {
        e.preventDefault();
        alert('Your loan statement will be sent to your email shortly.');
        setShowStatementModal(false);
    };

    const handleSupportSubmit = (e) => {
        e.preventDefault();
        alert('Support ticket created! Our team will reach out to you soon.');
        setShowSupportModal(false);
    };

    const handleClosureRequest = (e) => {
        e.preventDefault();
        alert('Loan closure request submitted! Documents will be sent to your email within 24 hours.');
        setShowClosureModal(false);
    };

    const closeAllModals = () => {
        setShowApplyModal(false);
        setShowPaymentModal(false);
        setShowProfileModal(false);
        setShowStatementModal(false);
        setShowSupportModal(false);
        setShowClosureModal(false);
    };

    return (
        <div className="dashboard-page-new">
            {/* Welcome Section */}
            <div className="welcome-section">
                <div>
                    <h1>Welcome back, {user.name.split(' ')[0]}! 👋</h1>
                    <p className="welcome-subtitle">Manage your finances and track your loans</p>
                </div>
                <button className="btn-primary" onClick={() => handleApplyLoan('')}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    Apply for Loan
                </button>
            </div>

            {/* Stats Cards */}
            <div className="stats-cards">
                <div className="stat-card-new primary-card">
                    <div className="stat-header">
                        <span className="stat-icon">📊</span>
                        <span className="stat-label">Credit Score</span>
                    </div>
                    <div className="stat-value-large">{stats.creditScore}</div>
                    <div className="stat-footer">
                        <span className="stat-change positive">+12 this month</span>
                    </div>
                    <div className="score-bar">
                        <div className="score-fill" style={{ width: `${(stats.creditScore / 900) * 100}%` }}></div>
                    </div>
                </div>

                <div className="stat-card-new">
                    <div className="stat-header">
                        <span className="stat-icon">💰</span>
                        <span className="stat-label">Available Credit</span>
                    </div>
                    <div className="stat-value-large">₹{stats.availableCredit}</div>
                    <div className="stat-footer">
                        <span className="stat-badge">Pre-approved</span>
                    </div>
                </div>

                <div className="stat-card-new">
                    <div className="stat-header">
                        <span className="stat-icon">📋</span>
                        <span className="stat-label">Active Loans</span>
                    </div>
                    <div className="stat-value-large">{stats.activeLoans}</div>
                    <div className="stat-footer">
                        <span className="stat-text">In good standing</span>
                    </div>
                </div>

                <div className="stat-card-new accent-card">
                    <div className="stat-header">
                        <span className="stat-icon">💳</span>
                        <span className="stat-label">Upcoming Payment</span>
                    </div>
                    <div className="stat-value-large">₹{stats.upcomingPayment}</div>
                    <div className="stat-footer">
                        <span className="stat-text">Due in 5 days</span>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="dashboard-content-grid">
                {/* Active Loans */}
                <div className="content-section loans-section-new">
                    <div className="section-header-new">
                        <h2>Your Active Loans</h2>
                        <span className="loan-count">{loans.length} loans</span>
                    </div>

                    <div className="loans-grid">
                        {loans.map((loan) => (
                            <div key={loan.id} className="loan-card-new">
                                <div className="loan-card-header">
                                    <div>
                                        <h3>{loan.type}</h3>
                                        <span className="account-number">{loan.accountNumber}</span>
                                    </div>
                                    <span className={`status-badge ${loan.status.toLowerCase()}`}>
                                        {loan.status}
                                    </span>
                                </div>

                                <div className="loan-amount-display">
                                    <span className="amount-label">Loan Amount</span>
                                    <span className="amount-value">₹{loan.amount}</span>
                                </div>

                                <div className="loan-info-grid">
                                    <div className="info-item">
                                        <span className="info-label">Monthly EMI</span>
                                        <span className="info-value">₹{loan.emi}</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="info-label">Next Due</span>
                                        <span className="info-value">{loan.dueDate}</span>
                                    </div>
                                </div>

                                <div className="loan-progress-section">
                                    <div className="progress-label">
                                        <span>Repayment</span>
                                        <span className="progress-percent">{loan.progress}%</span>
                                    </div>
                                    <div className="progress-bar-new">
                                        <div className="progress-bar-fill" style={{ width: `${loan.progress}%` }}></div>
                                    </div>
                                </div>

                                <button className="btn-pay-emi" onClick={() => handlePayEMI(loan)}>Pay EMI</button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="content-section">
                    <div className="section-header-new">
                        <h2>Quick Actions</h2>
                    </div>

                    <div className="quick-actions-grid">
                        <button className="action-card" onClick={() => handleApplyLoan('Personal Loan')}>
                            <div className="action-icon">📝</div>
                            <span>Apply Personal Loan</span>
                        </button>
                        <button className="action-card" onClick={() => handleApplyLoan('Two-Wheeler Loan')}>
                            <div className="action-icon">🏍️</div>
                            <span>Two-Wheeler Loan</span>
                        </button>
                        <button className="action-card" onClick={() => handleApplyLoan('Three-Wheeler Loan')}>
                            <div className="action-icon">🛺</div>
                            <span>Three-Wheeler Loan</span>
                        </button>
                        <button className="action-card" onClick={() => setShowProfileModal(true)}>
                            <div className="action-icon">👤</div>
                            <span>Update Profile</span>
                        </button>
                        <button className="action-card" onClick={() => setShowStatementModal(true)}>
                            <div className="action-icon">📄</div>
                            <span>Loan Statement</span>
                        </button>
                        <button className="action-card" onClick={() => setShowClosureModal(true)}>
                            <div className="action-icon">📋</div>
                            <span>Loan Closure Doc</span>
                        </button>
                        <button className="action-card" onClick={() => setShowSupportModal(true)}>
                            <div className="action-icon">💬</div>
                            <span>Support</span>
                        </button>
                    </div>
                </div>

                {/* Disbursement History */}
                <div className="content-section">
                    <div className="section-header-new">
                        <h2>Disbursement History</h2>
                        <span className="history-count">{disbursements.length} transactions</span>
                    </div>

                    <div className="disbursement-table">
                        <div className="table-header">
                            <div className="table-col">Date</div>
                            <div className="table-col">Loan Type</div>
                            <div className="table-col">Account Number</div>
                            <div className="table-col">Amount Disbursed</div>
                            <div className="table-col">Status</div>
                        </div>
                        {disbursements.map((disbursement) => (
                            <div key={disbursement.id} className="table-row">
                                <div className="table-cell">
                                    <span className="cell-label">Date</span>
                                    <span className="cell-value">{disbursement.date}</span>
                                </div>
                                <div className="table-cell">
                                    <span className="cell-label">Loan Type</span>
                                    <span className="cell-value">{disbursement.loanType}</span>
                                </div>
                                <div className="table-cell">
                                    <span className="cell-label">Account</span>
                                    <span className="cell-value account-num">{disbursement.accountNumber}</span>
                                </div>
                                <div className="table-cell">
                                    <span className="cell-label">Amount</span>
                                    <span className="cell-value amount-disbursed">₹{disbursement.amount}</span>
                                </div>
                                <div className="table-cell">
                                    <span className="cell-label">Status</span>
                                    <span className={`status-pill ${disbursement.status.toLowerCase()}`}>
                                        {disbursement.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="total-disbursed">
                        <span>Total Amount Disbursed</span>
                        <strong>₹{totalDisbursed.toLocaleString('en-IN')}</strong>
                    </div>
                </div>
            </div>

            {/* Apply Loan Modal */}
            {showApplyModal && (
                <div className="modal-overlay" onClick={closeAllModals}>
                    <div className="loan-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeAllModals}>×</button>

                        <h2>Apply for {selectedLoanType || 'Loan'}</h2>
                        <p className="modal-subtitle">Fill in the details below to apply</p>

                        <form onSubmit={handleSubmitApplication}>
                            <div className="form-group">
                                <label>Loan Type *</label>
                                <select required value={selectedLoanType} onChange={(e) => setSelectedLoanType(e.target.value)}>
                                    <option value="">Select loan type</option>
                                    <option value="Personal Loan">Personal Loan</option>
                                    <option value="Two-Wheeler Loan">Two-Wheeler Loan</option>
                                    <option value="Three-Wheeler Loan">Three-Wheeler Loan</option>
                                    <option value="Loan Against Property">Loan Against Property</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Loan Amount (₹) *</label>
                                <input type="number" required placeholder="Enter amount" min="10000" />
                            </div>

                            <div className="form-group">
                                <label>Purpose *</label>
                                <textarea rows="3" required placeholder="Explain the purpose of the loan"></textarea>
                            </div>

                            <div className="form-group">
                                <label>Monthly Income (₹) *</label>
                                <input type="number" required placeholder="Enter monthly income" />
                            </div>

                            <div className="form-actions">
                                <button type="button" className="btn-secondary" onClick={closeAllModals}>
                                    Cancel
                                </button>
                                <button type="submit" className="btn-primary">
                                    Submit Application
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Payment Modal */}
            {showPaymentModal && selectedLoanForPayment && (
                <div className="modal-overlay" onClick={closeAllModals}>
                    <div className="loan-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeAllModals}>×</button>

                        <h2>Pay EMI - {selectedLoanForPayment.type}</h2>
                        <p className="modal-subtitle">Account: {selectedLoanForPayment.accountNumber}</p>

                        <form onSubmit={handlePaymentSubmit}>
                            <div className="payment-summary">
                                <div className="summary-item">
                                    <span>EMI Amount</span>
                                    <strong>₹{selectedLoanForPayment.emi}</strong>
                                </div>
                                <div className="summary-item">
                                    <span>Due Date</span>
                                    <strong>{selectedLoanForPayment.dueDate}</strong>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Payment Method *</label>
                                <select required>
                                    <option value="">Select payment method</option>
                                    <option value="upi">UPI</option>
                                    <option value="netbanking">Net Banking</option>
                                    <option value="debit">Debit Card</option>
                                    <option value="credit">Credit Card</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Amount (₹) *</label>
                                <input type="number" required defaultValue={selectedLoanForPayment.emi.replace(',', '')} min="1" />
                            </div>

                            <div className="form-actions">
                                <button type="button" className="btn-secondary" onClick={closeAllModals}>
                                    Cancel
                                </button>
                                <button type="submit" className="btn-primary">
                                    Proceed to Pay
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Profile Update Modal */}
            {showProfileModal && (
                <div className="modal-overlay" onClick={closeAllModals}>
                    <div className="loan-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeAllModals}>×</button>

                        <h2>Update Profile</h2>
                        <p className="modal-subtitle">Keep your information up to date</p>

                        <form onSubmit={handleProfileUpdate}>
                            <div className="form-group">
                                <label>Full Name *</label>
                                <input type="text" name="name" required defaultValue={user.name} />
                            </div>

                            <div className="form-group">
                                <label>Email *</label>
                                <input type="email" name="email" required defaultValue={user.email} />
                            </div>

                            <div className="form-group">
                                <label>Phone *</label>
                                <input type="tel" name="phone" required defaultValue={user.phone} />
                            </div>

                            <div className="form-actions">
                                <button type="button" className="btn-secondary" onClick={closeAllModals}>
                                    Cancel
                                </button>
                                <button type="submit" className="btn-primary">
                                    Update Profile
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Loan Statement Modal */}
            {showStatementModal && (
                <div className="modal-overlay" onClick={closeAllModals}>
                    <div className="loan-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeAllModals}>×</button>

                        <h2>Request Loan Statement</h2>
                        <p className="modal-subtitle">Get your loan statement via email</p>

                        <form onSubmit={handleStatementRequest}>
                            <div className="form-group">
                                <label>Select Loan *</label>
                                <select required>
                                    <option value="">Select loan account</option>
                                    {loans.map(loan => (
                                        <option key={loan.id} value={loan.accountNumber}>
                                            {loan.type} - {loan.accountNumber}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Statement Period *</label>
                                <select required>
                                    <option value="">Select period</option>
                                    <option value="last-month">Last Month</option>
                                    <option value="last-3-months">Last 3 Months</option>
                                    <option value="last-6-months">Last 6 Months</option>
                                    <option value="last-year">Last Year</option>
                                    <option value="all">Complete Statement</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Email *</label>
                                <input type="email" required defaultValue={user.email} />
                            </div>

                            <div className="form-actions">
                                <button type="button" className="btn-secondary" onClick={closeAllModals}>
                                    Cancel
                                </button>
                                <button type="submit" className="btn-primary">
                                    Request Statement
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Loan Closure Document Modal */}
            {showClosureModal && (
                <div className="modal-overlay" onClick={closeAllModals}>
                    <div className="loan-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeAllModals}>×</button>

                        <h2>Request Loan Closure Document</h2>
                        <p className="modal-subtitle">Get closure documents for your paid-off loans</p>

                        <form onSubmit={handleClosureRequest}>
                            <div className="form-group">
                                <label>Select Loan *</label>
                                <select required>
                                    <option value="">Select loan account</option>
                                    {loans.map(loan => (
                                        <option key={loan.id} value={loan.accountNumber}>
                                            {loan.type} - {loan.accountNumber}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Document Type *</label>
                                <select required>
                                    <option value="">Select document type</option>
                                    <option value="noc">No Objection Certificate (NOC)</option>
                                    <option value="closure-letter">Closure Letter</option>
                                    <option value="foreclosure-statement">Foreclosure Statement</option>
                                    <option value="all">All Documents</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Email *</label>
                                <input type="email" required defaultValue={user.email} />
                            </div>

                            <div className="form-group">
                                <label>Additional Notes</label>
                                <textarea rows="3" placeholder="Any specific requirements or notes..."></textarea>
                            </div>

                            <div className="form-actions">
                                <button type="button" className="btn-secondary" onClick={closeAllModals}>
                                    Cancel
                                </button>
                                <button type="submit" className="btn-primary">
                                    Request Documents
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Support Modal */}
            {showSupportModal && (
                <div className="modal-overlay" onClick={closeAllModals}>
                    <div className="loan-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeAllModals}>×</button>

                        <h2>Contact Support</h2>
                        <p className="modal-subtitle">We're here to help you</p>

                        <form onSubmit={handleSupportSubmit}>
                            <div className="form-group">
                                <label>Issue Category *</label>
                                <select required>
                                    <option value="">Select category</option>
                                    <option value="payment">Payment Issue</option>
                                    <option value="loan-details">Loan Details Inquiry</option>
                                    <option value="documents">Document Related</option>
                                    <option value="technical">Technical Issue</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Subject *</label>
                                <input type="text" required placeholder="Brief subject of your issue" />
                            </div>

                            <div className="form-group">
                                <label>Description *</label>
                                <textarea rows="4" required placeholder="Describe your issue in detail..."></textarea>
                            </div>

                            <div className="form-group">
                                <label>Contact Number *</label>
                                <input type="tel" required defaultValue={user.phone} />
                            </div>

                            <div className="form-actions">
                                <button type="button" className="btn-secondary" onClick={closeAllModals}>
                                    Cancel
                                </button>
                                <button type="submit" className="btn-primary">
                                    Submit Ticket
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DashboardPage;
