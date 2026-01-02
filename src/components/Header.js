import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

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

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const headerRef = useRef(null);
  const location = useLocation();

  // Close menu on any route/navigation change
  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
    document.body.classList.remove('nav-open');
  }, [location.pathname, location.search]);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        headerRef.current.classList.toggle('has-shadow', window.scrollY > 10);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync body scroll lock with menu state
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }
    return () => document.body.classList.remove('nav-open');
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    if (!menuOpen) {
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (label) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
    document.body.classList.remove('nav-open');
  };

  const handleLinkClick = () => {
    // Force close everything
    setMenuOpen(false);
    setActiveDropdown(null);
    document.body.classList.remove('nav-open');
    // Ensure scroll to top on navigation if needed, though ScrollToTop component exists
  };

  const handleFocusOut = (event) => {
    if (headerRef.current && !headerRef.current.contains(event.relatedTarget)) {
      setActiveDropdown(null);
    }
  };

  const logoSrc = `${process.env.PUBLIC_URL || ''}/Png-01.png`;

  return (
    <header className="fibe-header" ref={headerRef}>
      <div className="header-shell">
        <Link to="/" className="brand-mark" onClick={handleLinkClick}>
          <img src={logoSrc} alt="E-Fin" className="brand-logo" />
        </Link>

        <button
          className={`nav-toggle${menuOpen ? ' is-active' : ''}`}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-overlay${menuOpen ? ' show' : ''}`} onClick={closeMenu} />

        <nav className={`primary-nav${menuOpen ? ' is-visible' : ''}`} aria-label="Primary">
          <ul>
            {NAV_LINKS.map((section) => (
              <li
                key={section.label}
                onBlur={handleFocusOut}
                className={activeDropdown === section.label ? 'expanded' : undefined}
              >
                <button
                  type="button"
                  className="nav-link"
                  onClick={() => toggleDropdown(section.label)}
                >
                  {section.label}
                  <span className="chevron" />
                </button>
                <div className={`mega-menu${activeDropdown === section.label ? ' show' : ''}`}>
                  {section.items.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="mega-card"
                      onClick={handleLinkClick}
                    >
                      <div className="card-text">
                        <h4>{item.label}</h4>
                        <p>{item.description}</p>
                      </div>
                      <span aria-hidden="true">→</span>
                    </Link>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          <div className="drawer-actions">
            <a className="ghost-btn" href="https://login.efin.co.in/">
              Login
            </a>
            <Link className="primary-btn" to="/support/contact" onClick={handleLinkClick}>
              Apply Now
            </Link>
          </div>
        </nav>

        <div className="nav-actions">
          <a className="ghost-btn" href="https://login.efin.co.in/">
            Login
          </a>
          <Link className="primary-btn" to="/support/contact" onClick={handleLinkClick}>
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
