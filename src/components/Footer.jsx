// components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <img src="logo.png" alt="Jigisha Society" />
              <h3>Jigisha Society</h3>
            </div>
            <p>Providing free healthcare to underprivileged communities through our network of volunteer doctors across India.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#doc">Doctors</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#donate">Donate</a></li>
            </ul>
          </div>
          <div className="footer-col" id="contact">
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li><i className="fas fa-envelope"></i> <a href="mailto:contact@jigishasociety.org">contact@jigishasociety.org</a></li>
              <li><i className="fas fa-phone"></i> +91 90130 61308</li>
              <li><i className="fas fa-map-marker-alt"></i> B-121, Shyam Kunj, Gali No. 10, Goyla Extension, Najafgarh, New Delhi, India</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Jigisha Society | Designed & Powered by <a href="https://liveupx.com" target="_blank" rel="noopener noreferrer">Liveupx.com</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;