// src/components/Services.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/components/Services.css';
import commImage from '../assets/images/comm2.png';
import eduImage from '../assets/images/Primary_Schools_14_09_25/WhatsApp Image 2025-09-04 at 23.41.35.jpeg';

const Services = () => {
  const navigate = useNavigate();

  const handleServicesClick = () => {
    navigate('/appointment');
  };

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive support for community welfare</p>
          <p className="click-hint">Click anywhere below to book an appointment</p>
          <div className="underline"></div>
        </div>
        <div className="services-grid" onClick={handleServicesClick}>
          <div className="service-card">
            <div className="service-img">
              <img
                src={commImage}
                alt="Community Support"
              />
            </div>
            <div className="service-info">
              <h3>Community Empowerment</h3>
              <p>Providing resources and support to uplift underprivileged families</p>
            </div>
          </div>
          <div className="service-card">
            <div className="service-img">
              <img
                src={eduImage}
                alt="Education"
              />
            </div>
            <div className="service-info">
              <h3>Educational Assistance</h3>
              <p>Supporting students with scholarships and learning resources</p>
            </div>
          </div>
          <div className="service-card">
            <div className="service-img">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
                alt="Medical"
              />
            </div>
            <div className="service-info">
              <h3>Healthcare Access</h3>
              <p>Free medical consultations for those in need</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;