// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../assets/styles/components/Header.css';
import logo from '../assets/images/favi.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scrolling when hash changes
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu on navigation
  }, [location]);

  // Handle navigation click for smooth scrolling
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  // Handle Home click to scroll to top
  const handleHomeClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Jigisha Society" className="logo-img" />
          <div className="logo-text">
            <h1>Jigisha Society</h1>
            <p>Serving the Community</p>
          </div>
        </div>
        <nav className="navbar">
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <NavLink
                to="/"
                exact
                activeClassName="active"
                onClick={handleHomeClick}
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
                to="/#services"
                activeClassName="active"
                onClick={(e) => handleNavClick(e, '#services')}
              >
                Services
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
};

export default Header;