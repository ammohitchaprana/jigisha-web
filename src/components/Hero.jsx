// src/components/Hero.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/components/Hero.css';
import heroImage from '../assets/images/hero.png';

const Hero = () => {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      className="hero"
      style={{
        background: `
          linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),
          url(${heroImage}) no-repeat center center/cover
        `,
      }}
    >
      <div className="hero-content">
        <h1>Empowering Communities Together</h1>
        <p>Supporting the underprivileged through various welfare programs</p>
        <div className="hero-btns">
          <NavLink
            to="/#services"
            className="btn-primary"
            onClick={(e) => handleNavClick(e, '#services')}
          >
            Our Services
          </NavLink>
          <NavLink
            to="/#donate"
            className="btn-secondary"
            onClick={(e) => handleNavClick(e, '#donate')}
          >
            Support Us
          </NavLink>
        </div>
      </div>
      {/* <div
        className="floating-button"
        onClick={(e) => handleNavClick(e, '#services')} // Change to desired section, e.g., '#appointment'
      >
        <i className="fas fa-hand-holding-heart"></i>
      </div> */}
    </section>
  );
};

export default Hero;