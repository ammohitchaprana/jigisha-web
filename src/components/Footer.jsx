// src/components/Footer.js
import React from 'react';
import '../assets/styles/components/Footer.css';
import logo from '../assets/images/logoWithoutBG.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <img src={logo} alt="Jigisha Society" />
              <h3>Jigisha Society</h3>
            </div>
            <p>
            Determined to help those who want to win.
            </p>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/donate">Donate</a>
              </li>
            </ul>
          </div>
          <div className="footer-col" id="contact">
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li>
                <i className="fas fa-envelope"></i>{' '}
                <a href="mailto:contact@jigishasociety.org">
                  contact@jigishasociety.org
                </a>
              </li>
              <li>
                <i className="fas fa-phone"></i> +91 92509 82996
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i> 6478/P-036, Jankipuram Garden, Lucknow - 226021
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © 2025 Jigisha Society | Designed by{' '}
            <a href="https://liveupx.com" target="_blank" rel="noopener noreferrer">
              Liveupx.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;