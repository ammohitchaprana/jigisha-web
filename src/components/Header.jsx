import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsMenuOpen(false);
      }
    }
  }, [location]);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const handleAppointmentClick = (e) => {
    e.preventDefault();
    window.open('/appointment', '_blank');
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <img src="favi.png" alt="Jigisha Society" className="logo-img" />
          <div className="logo-text">
            <h1>Jigisha Society</h1>
            <p>Healthcare for the Needy</p>
          </div>
        </div>
        <nav className="navbar">
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <NavLink
                to="/"
                exact
                activeClassName="active"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/#about"
                activeClassName="active"
                onClick={(e) => handleNavClick(e, '#about')}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/#process"
                activeClassName="active"
                onClick={(e) => handleNavClick(e, '#process')}
              >
                Process
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/#doc"
                activeClassName="active"
                onClick={(e) => handleNavClick(e, '#doc')}
              >
                Doctors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/#gallery"
                activeClassName="active"
                onClick={(e) => handleNavClick(e, '#gallery')}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/#contact"
                activeClassName="active"
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/#donate"
                className="donate-btn"
                activeClassName="active"
                onClick={(e) => handleNavClick(e, '#donate')}
              >
                Donate
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/appointment"
                className="appointment-btn"
                activeClassName="active"
                onClick={handleAppointmentClick}
              >
                Book Appointment
              </NavLink>
            </li>
          </ul>
          <div
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;