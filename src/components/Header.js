import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import landingPages, { NAV_STRUCTURE } from '../content/landingPages';
import './Header.css';

const NAV_LINKS = NAV_STRUCTURE.map((section) => ({
  label: section.label,
  items: section.items
    .map((key) => {
      const page = landingPages[key];
      if (!page) {
        return null;
      }
      return {
        label: page.title,
        description: page.excerpt,
        to: `/${key}`,
      };
    })
    .filter(Boolean),
}));

// ─── Scroll-lock helpers ─────────────────────────────────────
function lockBodyScroll() {
  document.body.classList.add('nav-open');
}

function unlockBodyScroll() {
  document.body.classList.remove('nav-open');
}
// ────────────────────────────────────────────────────────────────────

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const toggleRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Close menu on route change
  useLayoutEffect(() => {
    closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key, location.pathname, location.search]);

  // Scroll shadow on header
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        headerRef.current.classList.toggle('has-shadow', window.scrollY > 10);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock with iOS fix
  useEffect(() => {
    if (menuOpen) {
      lockBodyScroll();
    } else {
      unlockBodyScroll();
    }
    return () => unlockBodyScroll();
  }, [menuOpen]);

  // Close when tapping outside the drawer
  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleOutside = (e) => {
      if (
        navRef.current?.contains(e.target) ||
        toggleRef.current?.contains(e.target)
      ) {
        return;
      }
      closeMenu();
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape') closeMenu();
    };

    // Use touchstart for faster response on iOS
    document.addEventListener('touchstart', handleOutside, { passive: true, capture: true });
    document.addEventListener('pointerdown', handleOutside, true);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('touchstart', handleOutside, { capture: true });
      document.removeEventListener('pointerdown', handleOutside, true);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [menuOpen]);

  // Close active dropdown when clicking outside the header
  useEffect(() => {
    if (!activeDropdown) return undefined;

    const handleOutsideDropdown = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('pointerdown', handleOutsideDropdown);
    document.addEventListener('touchstart', handleOutsideDropdown, { passive: true });

    return () => {
      document.removeEventListener('pointerdown', handleOutsideDropdown);
      document.removeEventListener('touchstart', handleOutsideDropdown);
    };
  }, [activeDropdown]);

  // ── Actions ─────────────────────────────────────────────────────

  const openMenu = () => {
    setActiveDropdown(null);
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleMenu = () => {
    if (menuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const toggleDropdown = (label) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  // Navigate then close — no flushSync needed, route change closes menu
  const handleNavLinkClick = (to) => {
    closeMenu();
    navigate(to);
  };

  const handleOverlayClick = () => {
    closeMenu();
  };

  const handleLogoClick = () => {
    closeMenu();
  };

  const logoSrc = `${process.env.PUBLIC_URL || ''}/Png-01.png`;

  return (
    <header className="fibe-header" ref={headerRef}>
      <div className="header-shell">
        {/* ── Logo ── */}
        <Link
          to="/loans/personal-loan"
          className="brand-mark"
          onClick={handleLogoClick}
        >
          <img src={logoSrc} alt="E-Fin" className="brand-logo" />
        </Link>

        {/* ── Hamburger toggle ── */}
        <button
          ref={toggleRef}
          className={`nav-toggle${menuOpen ? ' is-active' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>

        {/* ── Overlay ── */}
        <div
          className={`nav-overlay${menuOpen ? ' show' : ''}`}
          onClick={handleOverlayClick}
          aria-hidden="true"
        />

        {/* ── Drawer / Desktop nav ── */}
        <nav
          ref={navRef}
          className={`primary-nav${menuOpen ? ' is-visible' : ''}`}
          aria-label="Primary navigation"
        >
          <ul>
            {NAV_LINKS.map((section) => (
              <li
                key={section.label}
                className={activeDropdown === section.label ? 'expanded' : undefined}
              >
                {/* Section heading button */}
                <button
                  type="button"
                  className="nav-link"
                  onClick={() => toggleDropdown(section.label)}
                  aria-expanded={activeDropdown === section.label}
                >
                  {section.label}
                  <span className="chevron" aria-hidden="true" />
                </button>

                {/* Dropdown / accordion */}
                <div
                  className={`mega-menu${activeDropdown === section.label ? ' show' : ''}`}
                  aria-hidden={activeDropdown !== section.label}
                >
                  {section.items.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      className="mega-card"
                      onClick={() => handleNavLinkClick(item.to)}
                    >
                      <div className="card-text">
                        <h4>{item.label}</h4>
                        <p>{item.description}</p>
                        {section.label === 'Our Products' &&
                          item.label !== 'Personal Loan' &&
                          item.label !== 'Pay-day Loan' && (
                            <div className="coming-soon-animated">Coming Soon</div>
                          )}
                      </div>
                      <span aria-hidden="true">→</span>
                    </button>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          {/* Drawer footer buttons (mobile only) */}
          <div className="drawer-actions">
            <a
              className="primary-btn"
              href="https://loan.efin.co.in/login"
              onClick={closeMenu}
            >
              Login
            </a>
            <a
              className="primary-btn"
              href="https://loan.efin.co.in/login"
              onClick={closeMenu}
            >
              Apply Now
            </a>
            <button
              type="button"
              className="primary-btn"
              onClick={() => handleNavLinkClick('/repay')}
            >
              Repay
            </button>
          </div>
        </nav>

        {/* ── Desktop action buttons ── */}
        <div className="nav-actions">
          <a className="primary-btn" href="https://loan.efin.co.in/login">
            Login
          </a>
          <a className="primary-btn" href="https://loan.efin.co.in/login">
            Apply Now
          </a>
          <Link className="primary-btn" to="/repay">
            Repay
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
