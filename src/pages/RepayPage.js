import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

function RepayPage() {
  const [panNumber, setPanNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [showNoLoansPopup, setShowNoLoansPopup] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 2000);
  };

  const sendOtpSms = async (phone, otpCode) => {
    try {
      const url = new URL("https://bulksmsplans.com/api/verify");
      url.searchParams.append("api_id", "API74MHaj82147462");
      url.searchParams.append("api_password", "YBHXhk5P");
      url.searchParams.append("sms_type", "Transactional");
      url.searchParams.append("sms_encoding", "1");
      url.searchParams.append("sender", "MLBFIN");
      url.searchParams.append("number", phone);
      url.searchParams.append("message", `Dear client your otp is ${otpCode}. Thanks Team efin Mlb Securities Private Limited`);

      await fetch(url.toString(), { mode: 'no-cors' });
    } catch (err) {
      console.error("SMS API error", err);
    }
  };

  // Validate PAN format (e.g., ABCDE1234F)
  const isValidPan = (pan) => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return panRegex.test(pan);
  };

  const handleRequestOtp = async (e) => {
    e.preventDefault();
    if (isValidPan(panNumber) && phoneNumber.length === 10) {
      setIsLoading(true);
      
      const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedOtp(newOtp);
      await sendOtpSms(phoneNumber, newOtp);

      setIsLoading(false);
      setShowOtpInput(true);
      showToast(`OTP has been sent to +91 ${phoneNumber}`);
    } else {
      if (!isValidPan(panNumber)) {
        showToast('Please enter a valid PAN card number');
      } else {
        showToast('Please enter a valid mobile number');
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
      if (otpValue !== generatedOtp) {
        showToast('Invalid OTP. Please try again.');
        return;
      }

      setIsLoading(true);
      // Simulate API call to verify OTP and fetch loans
      setTimeout(() => {
        setIsLoading(false);
        // Show default message: No loans found
        setShowNoLoansPopup(true);
        setShowOtpInput(false);
        setPanNumber('');
        setPhoneNumber('');
        setOtp(['', '', '', '', '', '']);
      }, 1500);
    } else {
      showToast('Please enter a valid 6-digit OTP.');
    }
  };

  return (
    <>
      {toastMessage && (
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#333',
          color: '#fff',
          padding: '12px 24px',
          borderRadius: '8px',
          zIndex: 9999,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          {toastMessage}
        </div>
      )}

      {showNoLoansPopup && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10000
        }}>
          <div style={{
            background: '#fff',
            padding: '2.5rem',
            borderRadius: '16px',
            textAlign: 'center',
            maxWidth: '400px',
            width: '90%',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }}>
            <h2 style={{ color: '#d32f2f', marginBottom: '1rem', marginTop: 0 }}>No Active Loans</h2>
            <p style={{ color: '#555', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.5' }}>You do not have any active loans linked with this PAN number.</p>
            <button
              type="button"
              onClick={() => setShowNoLoansPopup(false)}
              className="submit-btn"
              style={{ width: '100%' }}
            >
              OK
            </button>
          </div>
        </div>
      )}

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
              {showOtpInput
                ? 'Enter the verification code sent to your registered mobile'
                : 'Enter your PAN card number to check your active loans'}
            </p>

            {/* PAN Input Form */}
            {!showOtpInput && (
              <form className="auth-form" onSubmit={handleRequestOtp}>
                    <div className="form-group">
                      <label htmlFor="pan">PAN Card Number</label>
                      <input
                        id="pan"
                        type="text"
                        placeholder="Enter Pan Number"
                        value={panNumber}
                        onChange={(e) => {
                          setPanNumber(e.target.value.toUpperCase());
                        }}
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
                          onChange={(e) => {
                            setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10));
                          }}
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
                        onClick={async () => {
                          const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
                          setGeneratedOtp(newOtp);
                          await sendOtpSms(phoneNumber, newOtp);
                          showToast(`OTP has been resent to +91 ${phoneNumber}`);
                        }}
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
          </div>
        </div>

        {/* Right Section - Visual */}
        <div className="login-visual-section" style={{ padding: 0, overflow: 'hidden' }}>
          <img src={`${process.env.PUBLIC_URL || ''}/repay.jpg`} alt="Repay Loan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </div>
    </>
  );
}

export default RepayPage;
