import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [showOtp, setShowOtp] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.length === 10 && termsAccepted) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setShowOtp(true);
        setIsLoading(false);
      }, 1000);
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join('');
    if (otpValue.length === 6) {
      setIsLoading(true);
      // Simulate login
      setTimeout(() => {
        setIsLoading(false);
        alert('Login successful!');
      }, 1000);
    }
  };

  const handleSocialLogin = (provider) => {
    alert(`Login with ${provider} - Integration pending`);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Section - Login Form */}
        <div className="login-form-section">
          <Link to="/" className="login-logo">
            <img src={`${process.env.PUBLIC_URL || ''}/logo.png`} alt="E-Fin" />
          </Link>

          <div className="login-content">
            <h1>Welcome to E-Fin</h1>
            <p className="login-subtitle">
              {showOtp
                ? 'Enter the verification code sent to your mobile'
                : 'Login or create your account to get started'}
            </p>

            {!showOtp ? (
              <form className="auth-form" onSubmit={handlePhoneSubmit}>
                <div className="form-group">
                  <label htmlFor="phone">Mobile Number</label>
                  <div className="input-wrapper">
                    <span className="input-prefix">+91</span>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="Enter 10-digit mobile number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      maxLength="10"
                      required
                    />
                  </div>
                </div>

                <div className="form-checkbox">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    required
                  />
                  <label htmlFor="terms">
                    I agree to the <Link to="/privacy">Terms & Conditions</Link> and{' '}
                    <Link to="/privacy">Privacy Policy</Link>
                  </label>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={phoneNumber.length !== 10 || !termsAccepted || isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner"></span> Sending OTP...
                    </>
                  ) : (
                    'Get OTP'
                  )}
                </button>
              </form>
            ) : (
              <form className="auth-form" onSubmit={handleOtpSubmit}>
                <div className="form-group">
                  <label>Enter OTP</label>
                  <div className="otp-inputs">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        inputMode="numeric"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Backspace' && !digit && index > 0) {
                            document.getElementById(`otp-${index - 1}`).focus();
                          }
                        }}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    className="resend-btn"
                    onClick={() => alert('OTP resent!')}
                  >
                    Resend OTP
                  </button>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={otp.join('').length !== 6 || isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner"></span> Verifying...
                    </>
                  ) : (
                    'Verify & Login'
                  )}
                </button>

                <button
                  type="button"
                  className="change-number-btn"
                  onClick={() => {
                    setShowOtp(false);
                    setOtp(['', '', '', '', '', '']);
                  }}
                >
                  Change Mobile Number
                </button>
              </form>
            )}

            {!showOtp && (
              <>
                <div className="divider">
                  <span>Or continue with</span>
                </div>

                <div className="social-login">
                  <button
                    type="button"
                    className="social-btn google"
                    onClick={() => handleSocialLogin('Google')}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Continue with Google
                  </button>

                  <button
                    type="button"
                    className="social-btn apple"
                    onClick={() => handleSocialLogin('Apple')}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                    Continue with Apple
                  </button>
                </div>
              </>
            )}
          </div>

          <p className="login-footer">
            New to E-Fin? <Link to="/support/apply">Download our app</Link>
          </p>
        </div>

        {/* Right Section - Visual */}
        <div className="login-visual-section">
          <div className="visual-content">
            <div className="floating-card card-1">
              <div className="card-icon">💳</div>
              <h4>Instant Approval</h4>
              <p>Get approved in minutes</p>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">🔒</div>
              <h4>Secure & Safe</h4>
              <p>Bank-grade security</p>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">⚡</div>
              <h4>Lightning Fast</h4>
              <p>Money in your account instantly</p>
            </div>
          </div>

          <div className="visual-stats">
            <div className="stat-item">
              <h3>5M+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat-item">
              <h3>₹1000Cr+</h3>
              <p>Loans Disbursed</p>
            </div>
            <div className="stat-item">
              <h3>4.8★</h3>
              <p>App Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
