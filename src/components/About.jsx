// src/components/About.js
import React from 'react';
import '../assets/styles/components/About.css';
import aboutLogo from  '../assets/images/about_logo.jpeg';

const About = () => {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-header">
          <h2>About Jigisha Society</h2>
          <p>Committed to uplifting communities since 2016</p>
          <div className="underline"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
          <p>The aim of Jigisha Society is to promote national unity among different sections of society and work towards their growth and development for the welfare of the world.</p>
          <p>With a commitment to environmental protection, the organization focuses on the all-round development of rural areas and makes every possible effort to support the health, education, employment, and food security of marginalized groups such as Scheduled Castes, Scheduled Tribes, backward classes, the poor, helpless individuals, widows, women, children, the elderly, and persons with disabilities.</p>
          <p>One of its key roles is also to raise awareness about various schemes run by the central and state governments from time to time and help people benefit from them.</p>
            <a href="/about" className="btn-primary">
              Learn More
            </a>
          </div>
          <div className="about-image">
            <img
              src={aboutLogo}
              alt="Community Work"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;