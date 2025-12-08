import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ApplyPage.css';

const LOAN_TYPES = [
  'Personal Loan',
  'Loan Against Property',
  'Small Business Loan',
  'Two-Wheeler Loan',
  'Three-Wheeler Loan',
];

const EMPLOYMENT_TYPES = [
  'Salaried',
  'Self-Employed',
  'Business Owner',
  'Professional',
];

function ApplyPage() {
  const [formData, setFormData] = useState({
    // Personal Details
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',

    // Loan Details
    loanType: 'Personal Loan',
    loanAmount: '',
    employmentType: 'Salaried',
    monthlyIncome: '',

    // KYC Documents (Mandatory)
    aadhaarNumber: '',
    panNumber: '',

    // Additional Information
    city: '',
    pincode: '',

    // Consent
    agreeToTerms: false,
    agreeToWhatsApp: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Personal Details Validation
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number (10 digits starting with 6-9)';
    }
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';

    // Loan Details Validation
    if (!formData.loanAmount) {
      newErrors.loanAmount = 'Loan amount is required';
    } else if (formData.loanAmount < 25000) {
      newErrors.loanAmount = 'Minimum loan amount is ₹25,000';
    }
    if (!formData.monthlyIncome) {
      newErrors.monthlyIncome = 'Monthly income is required';
    }

    // KYC Validation (Mandatory)
    if (!formData.aadhaarNumber.trim()) {
      newErrors.aadhaarNumber = 'Aadhaar number is required';
    } else if (!/^\d{12}$/.test(formData.aadhaarNumber.replace(/\s/g, ''))) {
      newErrors.aadhaarNumber = 'Invalid Aadhaar number (12 digits)';
    }

    if (!formData.panNumber.trim()) {
      newErrors.panNumber = 'PAN number is required';
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panNumber.toUpperCase())) {
      newErrors.panNumber = 'Invalid PAN format (e.g., ABCDE1234F)';
    }

    // City and Pincode
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = 'Invalid pincode (6 digits)';
    }

    // Terms Agreement
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      setSubmitted(true);

      // Scroll to top to show success message
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to first error
      const firstError = document.querySelector('.form-error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  if (submitted) {
    return (
      <div className="page apply-page-modern">
        <section className="apply-success-section">
          <div className="success-card">
            <div className="success-icon">✓</div>
            <h1>Application Submitted Successfully!</h1>
            <p className="success-message">
              Thank you for choosing E-Fin! Your loan application has been received.
            </p>
            <div className="success-details">
              <div className="detail-item">
                <span className="detail-label">Application submitted for:</span>
                <span className="detail-value">{formData.loanType}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Loan amount:</span>
                <span className="detail-value">₹{Number(formData.loanAmount).toLocaleString('en-IN')}</span>
              </div>
            </div>
            <div className="next-steps">
              <h3>What Happens Next?</h3>
              <div className="steps-list">
                <div className="step-item">
                  <span className="step-number">1</span>
                  <div>
                    <strong>Verification</strong>
                    <p>Our team will verify your documents within 24 hours</p>
                  </div>
                </div>
                <div className="step-item">
                  <span className="step-number">2</span>
                  <div>
                    <strong>Callback</strong>
                    <p>Our loan advisor will call you to discuss the offer</p>
                  </div>
                </div>
                <div className="step-item">
                  <span className="step-number">3</span>
                  <div>
                    <strong>Disbursal</strong>
                    <p>Upon approval, funds will be disbursed to your account</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="success-actions">
              <Link to="/" className="primary-btn large">
                Back to Home
              </Link>
              <a href="tel:+919997842548" className="ghost-btn large">
                Call Us Now
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page apply-page-modern">
      {/* Hero Section */}
      <section className="apply-hero-modern">
        <div className="apply-hero-content">
          <span className="apply-badge">📝 Loan Application</span>
          <h1>Apply for a Loan</h1>
          <p className="apply-hero-description">
            Fill in your details below and get instant loan approval. Our team will reach out to you within 24 hours
            with personalized offers tailored to your needs.
          </p>
          <div className="apply-features">
            <span>✓ 100% Digital Process</span>
            <span>✓ Instant Approval</span>
            <span>✓ Minimal Documentation</span>
            <span>✓ Quick Disbursal</span>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="apply-form-section">
        <form className="apply-form" onSubmit={handleSubmit}>
          {/* Personal Details */}
          <div className="form-section">
            <div className="form-section-header">
              <div className="section-icon">👤</div>
              <div>
                <h2>Personal Details</h2>
                <p>Tell us about yourself</p>
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="fullName">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name as per PAN"
                  className={errors.fullName ? 'error' : ''}
                />
                {errors.fullName && <span className="form-error">{errors.fullName}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  Mobile Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  maxLength="10"
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <span className="form-error">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="dateOfBirth">
                  Date of Birth <span className="required">*</span>
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  max={new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split('T')[0]}
                  className={errors.dateOfBirth ? 'error' : ''}
                />
                {errors.dateOfBirth && <span className="form-error">{errors.dateOfBirth}</span>}
              </div>
            </div>
          </div>

          {/* Loan Details */}
          <div className="form-section">
            <div className="form-section-header">
              <div className="section-icon">💰</div>
              <div>
                <h2>Loan Details</h2>
                <p>Choose your loan type and amount</p>
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="loanType">
                  Loan Type <span className="required">*</span>
                </label>
                <select
                  id="loanType"
                  name="loanType"
                  value={formData.loanType}
                  onChange={handleChange}
                >
                  {LOAN_TYPES.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="loanAmount">
                  Loan Amount Required <span className="required">*</span>
                </label>
                <input
                  type="number"
                  id="loanAmount"
                  name="loanAmount"
                  value={formData.loanAmount}
                  onChange={handleChange}
                  placeholder="Enter amount (min ₹25,000)"
                  min="25000"
                  className={errors.loanAmount ? 'error' : ''}
                />
                {errors.loanAmount && <span className="form-error">{errors.loanAmount}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="employmentType">
                  Employment Type <span className="required">*</span>
                </label>
                <select
                  id="employmentType"
                  name="employmentType"
                  value={formData.employmentType}
                  onChange={handleChange}
                >
                  {EMPLOYMENT_TYPES.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="monthlyIncome">
                  Monthly Income <span className="required">*</span>
                </label>
                <input
                  type="number"
                  id="monthlyIncome"
                  name="monthlyIncome"
                  value={formData.monthlyIncome}
                  onChange={handleChange}
                  placeholder="Enter your monthly income"
                  min="0"
                  className={errors.monthlyIncome ? 'error' : ''}
                />
                {errors.monthlyIncome && <span className="form-error">{errors.monthlyIncome}</span>}
              </div>
            </div>
          </div>

          {/* KYC Documents */}
          <div className="form-section kyc-section">
            <div className="form-section-header">
              <div className="section-icon">🔐</div>
              <div>
                <h2>KYC Documents (Mandatory)</h2>
                <p>Please provide your Aadhaar and PAN details</p>
              </div>
            </div>

            <div className="kyc-note">
              <span className="note-icon">ℹ️</span>
              <p>
                <strong>Important:</strong> Aadhaar and PAN are mandatory documents for loan processing.
                Please ensure the details match your official documents.
              </p>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="aadhaarNumber">
                  Aadhaar Number <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="aadhaarNumber"
                  name="aadhaarNumber"
                  value={formData.aadhaarNumber}
                  onChange={handleChange}
                  placeholder="XXXX XXXX XXXX (12 digits)"
                  maxLength="14"
                  className={errors.aadhaarNumber ? 'error' : ''}
                />
                {errors.aadhaarNumber && <span className="form-error">{errors.aadhaarNumber}</span>}
                <span className="field-hint">Enter 12-digit Aadhaar number</span>
              </div>

              <div className="form-group">
                <label htmlFor="panNumber">
                  PAN Number <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="panNumber"
                  name="panNumber"
                  value={formData.panNumber}
                  onChange={handleChange}
                  placeholder="ABCDE1234F"
                  maxLength="10"
                  style={{ textTransform: 'uppercase' }}
                  className={errors.panNumber ? 'error' : ''}
                />
                {errors.panNumber && <span className="form-error">{errors.panNumber}</span>}
                <span className="field-hint">10-character alphanumeric PAN</span>
              </div>
            </div>
          </div>

          {/* Address Details */}
          <div className="form-section">
            <div className="form-section-header">
              <div className="section-icon">📍</div>
              <div>
                <h2>Address Details</h2>
                <p>Where do you currently reside?</p>
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="city">
                  City <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                  className={errors.city ? 'error' : ''}
                />
                {errors.city && <span className="form-error">{errors.city}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="pincode">
                  Pincode <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="6-digit pincode"
                  maxLength="6"
                  className={errors.pincode ? 'error' : ''}
                />
                {errors.pincode && <span className="form-error">{errors.pincode}</span>}
              </div>
            </div>
          </div>

          {/* Consent & Submit */}
          <div className="form-section consent-section">
            <div className="consent-checkboxes">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                />
                <span>
                  I agree to the <Link to="/policies/terms-and-conditions" target="_blank">Terms & Conditions</Link> and{' '}
                  <Link to="/policies/policies" target="_blank">Privacy Policy</Link> <span className="required">*</span>
                </span>
              </label>
              {errors.agreeToTerms && <span className="form-error">{errors.agreeToTerms}</span>}

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agreeToWhatsApp"
                  checked={formData.agreeToWhatsApp}
                  onChange={handleChange}
                />
                <span>
                  I agree to receive updates via WhatsApp
                </span>
              </label>
            </div>

            <button type="submit" className="submit-btn">
              Submit Application →
            </button>

            <p className="submit-note">
              By submitting this form, you authorize E-Fin to contact you and verify your information.
            </p>
          </div>
        </form>

        {/* Help Section */}
        <div className="apply-help-section">
          <div className="help-card">
            <h3>Need Help?</h3>
            <p>Our team is here to assist you with the application process</p>
            <div className="help-contacts">
              <a href="tel:+919997842548" className="help-link">
                <span className="help-icon">📞</span>
                <div>
                  <strong>Call Us</strong>
                  <span>+91-9997842548</span>
                </div>
              </a>
              <a href="mailto:Care@efin.co.in" className="help-link">
                <span className="help-icon">✉️</span>
                <div>
                  <strong>Email Us</strong>
                  <span>Care@efin.co.in</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ApplyPage;
