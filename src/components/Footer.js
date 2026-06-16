import { Link, useLocation } from 'react-router-dom';

const footerNav = [
  {
    title: 'Loans',
    links: [
      { path: '/loans/instant-cash-loan', label: 'Small Business Loan' },
      { path: '/loans/personal-loan', label: 'Personal Loan' },
      { path: '/loans/loan-against-property', label: 'Loan Against Property' },
      { path: '/loans/two-wheeler-loan', label: 'Two-Wheeler Loan' },
      { path: '/loans/three-wheeler-loan', label: 'Three-Wheeler Loan' },
      {
        path: '/solutions/payment-collection-merchant-settlement',
        label: 'Payment Collection & Settlement',
      },
    ],
  },
  {
    title: 'Marketplace Solutions',
    links: [
      {
        path: '/solutions/payment-collection-merchant-settlement',
        label: 'Payment Collection & Settlement',
      },
    ],
  },
  {
    title: 'Calculators',
    links: [
      { path: '/resources/personal-loan-emi-calculator', label: 'Personal Loan EMI' },
      { path: '/resources/two-three-wheeler-emi-calculator', label: '2 & 3 Wheeler EMI' },
      { path: '/resources/eligibility-calculator', label: 'Eligibility Calculator' },
    ],
  },
  {
    title: 'Company',
    links: [
      { path: '/about', label: 'About E-Fin' },
      { path: '/about/careers', label: 'Careers' },
      { path: '/support/contact', label: 'Contact Us' },
    ],
  },
];

const footerSocial = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: 'https://img.icons8.com/color/48/facebook.png',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: 'https://img.icons8.com/color/48/linkedin.png',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/',
    icon: 'https://img.icons8.com/color/48/twitter--v1.png',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: 'https://img.icons8.com/color/48/instagram-new.png',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919997842548',
    icon: 'https://img.icons8.com/color/48/whatsapp.png',
  },
];

const officeLocations = [
  {
    label: 'Delhi Rohini Office',
    type: 'Registered Office',
    address:
      'Plot No. 88, 3rd Floor, BLK-B PKT-8, Rohini Sector 3, Near NDPL, New Delhi - 110085',
    mapsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Plot%20No.%2088%2C%203rd%20Floor%2C%20BLK-B%20PKT-8%2C%20Rohini%20Sector%203%2C%20Near%20NDPL%2C%20New%20Delhi%20-%20110085&travelmode=driving',
  },
  {
    label: 'Kolkata West Bengal Office',
    type: 'Branch Office',
    address:
      'MLB Securities Private Limited, 5th Floor, RDB Boulevard, Plot K1, Block EP & GP, Sector V, Bidhan Nagar, CK Market, North 24 Parganas, Salt Lake, Kolkata, West Bengal - 700019, India',
    mapsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=MLB%20Securities%20Private%20Limited%2C%205th%20Floor%2C%20RDB%20Boulevard%2C%20Plot%20K1%2C%20Block%20EP%20%26%20GP%2C%20Sector%20V%2C%20Bidhan%20Nagar%2C%20CK%20Market%2C%20North%2024%20Parganas%2C%20Salt%20Lake%2C%20Kolkata%2C%20West%20Bengal%20-%20700019%2C%20India&travelmode=driving',
  },
  {
    label: 'Gurugram Haryana Office',
    type: 'Branch Office',
    address:
      'MLB Securities Private Limited, Unit No. 557, 5th Floor, Tower-B1, Spaze ITech Park, Sector-49, Sohna Road, Gurugram, Haryana - 122018, India',
    mapsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=MLB%20Securities%20Private%20Limited%2C%20Unit%20No.%20557%2C%205th%20Floor%2C%20Tower-B1%2C%20Spaze%20ITech%20Park%2C%20Sector-49%2C%20Sohna%20Road%2C%20Gurugram%2C%20Haryana%20-%20122018%2C%20India&travelmode=driving',
  },
];

function Footer() {
  const location = useLocation();
  const currentYear = new Date().getFullYear();
  const logoSrc = `${process.env.PUBLIC_URL || ''}/Png-01.png`;

  const handleFooterLinkClick = (path) => {
    if (path === '/loans/payday-loan' && location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {location.pathname !== '/repay' && (
          <div className="footer-location-picker" aria-labelledby="footer-location-title">
            <div className="footer-location-copy">
              <span className="footer-location-eyebrow">Office Locations</span>
              <h2 id="footer-location-title">E-Fin offices</h2>
              <p>Select a location to start directions in Google Maps.</p>
            </div>
            <div className="footer-location-options">
              {officeLocations.map((office) => (
                <a
                  key={office.label}
                  href={office.mapsUrl}
                  className="footer-location-card"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${office.label} in Google Maps`}
                >
                  <span className="footer-location-icon" aria-hidden="true">⌖</span>
                  <span className="footer-location-type">{office.type}</span>
                  <strong>{office.label}</strong>
                  <span>{office.address}</span>
                  <span className="footer-location-action">Start journey</span>
                </a>
              ))}
            </div>
          </div>
        )}
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand" aria-label="E-Fin">
              <img className="brand-logo brand-logo--footer" src={logoSrc} alt="E-Fin logo" loading="lazy" decoding="async" />
            </div>
            <p>
              India's fastest growing lending platform. We serve the community when you borrow from us.
            </p>
            <div className="footer-social">
              {footerSocial.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                  <img src={link.icon} alt={`${link.label} icon`} loading="lazy" />
                </a>
              ))}
            </div>
            <div className="iso-badge-circle footer-badge">
              <span className="iso-top">ISO</span>
              <span className="iso-mid">9001 & 27001</span>
              <span className="iso-bot">CERTIFIED</span>
            </div>
            <div className="pci-dss-badge" style={{ marginTop: '1rem', marginLeft: '0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
              <img
                src="https://cdn.goinfinito.com/fm/4349/root/0c1718dc4148f986763371b4d839f735.png"
                alt="PCI DSS Certified"
                style={{ maxHeight: '55px', maxWidth: '100%', width: 'auto', height: 'auto', objectFit: 'contain' }}
              />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginLeft: '-0.5rem' }}>
                <img
                  src={`${process.env.PUBLIC_URL || ''}/certi01.png`}
                  alt="Certificate 1"
                  style={{ maxHeight: '220px', maxWidth: '100%', width: 'auto', height: 'auto', objectFit: 'contain' }}
                />
                <img
                  src={`${process.env.PUBLIC_URL || ''}/certi02.png`}
                  alt="Certificate 2"
                  style={{ maxHeight: '220px', maxWidth: '100%', width: 'auto', height: 'auto', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
          <div className="footer-links">
            {footerNav.map((section) => (
              <div key={section.title} className="footer-links-column">
                <p className="footer-links-title">{section.title}</p>
                <div className="footer-links-list">
                  {section.links.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="footer-link"
                      onClick={() => handleFooterLinkClick(item.path)}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span>{item.label}</span>
                        {section.title === 'Loans' && item.label !== 'Personal Loan' && (
                          <span className="coming-soon-animated" style={{ marginTop: '2px', fontSize: '0.65rem', textAlign: 'left' }}>COMING SOON</span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="footer-visit">
            <h3>Visit E-Fin</h3>
            <p>
              <strong>Registered Office:</strong><br />
              Plot No. 88, 3rd Floor, BLK-B PKT-8,<br />
              Rohini Sector 3, Near NDPL, New Delhi - 110085
              <br />
              <br />
              <strong>Branch Office:</strong><br />
              MLB Securities Private Limited, 5th Floor, RDB Boulevard,<br />
              Plot K1, Block EP & GP, Sector V, Bidhan Nagar,<br />
              CK Market, North 24 Parganas, Salt Lake,<br />
              Kolkata, West Bengal - 700019, India
              <span className="footer-address-divider" aria-hidden="true" />
              MLB Securities Private Limited, Unit No. 557, 5th Floor,
              Tower-B1, Spaze ITech Park, Sector-49, Sohna Road, Gurugram,<br />
              Haryana - 122018, India
            </p>
            <div className="footer-contact">
              <span>+91-9997842548</span>
              <span>care@mlbsecurities.com</span>
            </div>
            <a href="https://payday.efin.co.in/login" className="footer-cta">
              Apply for a loan
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {currentYear} E-Fin (MLB Securities Pvt. Ltd.). All rights reserved.</span>
          <div className="footer-bottom-links">
            <Link to="/policies/policies">Privacy policy</Link>
            <Link to="/policies/terms-and-conditions">Terms of use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
