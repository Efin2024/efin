import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

function RepayPage() {
  const [panNumber, setPanNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Validate PAN format (e.g., ABCDE1234F)
  const isValidPan = (pan) => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return panRegex.test(pan);
  };

  const handleRequestOtp = (e) => {
    e.preventDefault();
    if (isValidPan(panNumber) && phoneNumber.length === 10) {
      setIsLoading(true);
      // Simulate API call to send OTP
      setTimeout(() => {
        setIsLoading(false);
        setShowOtpInput(true);
        // Simulate OTP sent
        alert(`Development Mode: OTP has been sent to +91 ${phoneNumber} for PAN ${panNumber}`);
      }, 1000);
    } else {
      if (!isValidPan(panNumber)) {
        alert('Please enter a valid PAN card number');
      } else {
        alert('Please enter a valid mobile number');
      }
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

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    const otpValue = otp.join('');

    if (otpValue.length === 6) {
      setIsLoading(true);
      // Simulate API call to verify OTP and fetch loans
      setTimeout(() => {
        setIsLoading(false);
        // Show default message: No loans found
        setMessage('You do not have any active loans');
      }, 1500);
    } else {
      alert('Please enter a valid 6-digit OTP.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Section - Repay Form */}
        <div className="login-form-section">
          <Link to="/" className="login-logo">
            <img src={`${process.env.PUBLIC_URL || ''}/logo.png`} alt="E-Fin" />
          </Link>

          <div className="login-content">
            <h1>Repay Your Loan</h1>
            <p className="login-subtitle">
              {message ? '' : showOtpInput
                ? 'Enter the verification code sent to your registered mobile'
                : 'Enter your PAN card number to check your active loans'}
            </p>

            {message ? (
              <div className="message-box" style={{ padding: '2rem', background: '#f8d7da', color: '#721c24', borderRadius: '12px', marginTop: '2rem', textAlign: 'center', border: '1px solid #f5c6cb' }}>
                <h3 style={{ margin: 0 }}>{message}</h3>
                <button
                  type="button"
                  className="submit-btn"
                  style={{ marginTop: '2rem' }}
                  onClick={() => {
                    setMessage('');
                    setShowOtpInput(false);
                    setPanNumber('');
                    setPhoneNumber('');
                    setOtp(['', '', '', '', '', '']);
                  }}
                >
                  Check Another PAN
                </button>
              </div>
            ) : (
              <>
                {/* PAN Input Form */}
                {!showOtpInput && (
                  <form className="auth-form" onSubmit={handleRequestOtp} style={{ marginTop: '2rem' }}>
                    <div className="form-group">
                      <label htmlFor="pan">PAN Card Number</label>
                      <input
                        id="pan"
                        type="text"
                        placeholder="Enter Pan Number"
                        value={panNumber}
                        onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                        maxLength="10"
                        required
                        style={{ textTransform: 'uppercase' }}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Mobile Number</label>
                      <div className="input-wrapper">
                        <input
                          id="phone"
                          type="tel"
                          placeholder="Enter mobile number"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                          maxLength="10"
                          required
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="submit-btn"
                      disabled={panNumber.length !== 10 || phoneNumber.length !== 10 || isLoading}
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
                )}

                {/* OTP Verification Form */}
                {showOtpInput && (
                  <form className="auth-form" onSubmit={handleVerifyOtp} style={{ marginTop: '2rem' }}>
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
                        onClick={() => alert(`Development Mode: OTP has been resent to +91 ${phoneNumber} for PAN ${panNumber}`)}
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
                        'Verify & Check Loans'
                      )}
                    </button>

                    <button
                      type="button"
                      className="change-number-btn"
                      onClick={() => {
                        setShowOtpInput(false);
                        setOtp(['', '', '', '', '', '']);
                      }}
                    >
                      Change PAN Number
                    </button>
                  </form>
                )}
              </>
            )}
          </div>
        </div>

        {/* Right Section - Visual */}
        <div className="login-visual-section" style={{ padding: 0, overflow: 'hidden' }}>
          <img src={`${process.env.PUBLIC_URL || ''}/repay.jpg`} alt="Repay Loan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </div>
  );
}

export default RepayPage;
