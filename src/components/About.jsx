import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-header">
          <h2>About Jigisha Society</h2>
          <p>Our mission to provide quality healthcare to those who need it most</p>
          <div className="underline"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>Jigisha Society was founded in 2016 with a simple yet powerful vision - to ensure that no one is denied healthcare due to financial constraints...</p>
            <p>What began as a small initiative in New Delhi has now grown into a network of hundreds of doctors...</p>
            <p>Our unique model connects patients with specialists in their area...</p>
            <Link to="/about" className="btn-primary">Learn More About Us</Link>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef" alt="Jigisha Society Team" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;