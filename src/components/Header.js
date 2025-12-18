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

  // Close menu on any route/navigation change (use location.key to catch search/hash changes)
  useEffect(() => {
    if (menuOpen) {
      setMenuOpen(false);
    }
    setActiveDropdown(null);
    document.body.classList.remove('nav-open');
  }, [location.key]);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        headerRef.current.classList.toggle('has-shadow', window.scrollY > 10);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen);
    return () => document.body.classList.remove('nav-open');
  }, [menuOpen]);

  // Close mobile nav when any link inside the header is clicked (safety for links without onClick)
  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (!menuOpen) return;
      const anchor = e.target.closest && e.target.closest('a');
      if (anchor && headerRef.current && headerRef.current.contains(anchor)) {
        // small delay to allow navigation to start, then close menu
        setTimeout(() => {
          setActiveDropdown(null);
          setMenuOpen(false);
          document.body.classList.remove('nav-open');
        }, 0);
      }
    };

    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    if (menuOpen) {
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (label) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  const closeMenu = () => {
    setActiveDropdown(null);
    setMenuOpen(false);
    document.body.classList.remove('nav-open');
  };

  const handleLinkClick = () => {
    // Immediately close menu and remove body class
    setActiveDropdown(null);
    setMenuOpen(false);
    document.body.classList.remove('nav-open');
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
            <Link className="ghost-btn" to="/login" onClick={handleLinkClick}>
              Login <span className="soon-badge">Soon</span>
            </Link>
            <Link className="primary-btn" to="/support/apply" onClick={handleLinkClick}>
              Apply Now
            </Link>
          </div>
        </nav>

        <div className="nav-actions">
          <Link className="ghost-btn" to="/login" onClick={handleLinkClick}>
            Login <span className="soon-badge">Soon</span>
          </Link>
          <Link className="primary-btn" to="/support/apply" onClick={handleLinkClick}>
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
