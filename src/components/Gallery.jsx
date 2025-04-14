// src/components/Gallery.js
import React from 'react';
import '../assets/styles/components/Gallery.css';

const Gallery = () => {
  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <div className="section-header">
          <h2>Our Work in Action</h2>
          <p>Moments from our community events and initiatives</p>
          <div className="underline"></div>
        </div>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
              alt="Medical Camp"
            />
            <div className="gallery-overlay">
              <h3>Free Medical Camp</h3>
            </div>
          </div>
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1581056771107-24ca5f033842"
              alt="Doctor Consultation"
            />
            <div className="gallery-overlay">
              <h3>Doctor Consultation</h3>
            </div>
          </div>
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
              alt="Health Checkup"
            />
            <div className="gallery-overlay">
              <h3>Health Checkup</h3>
            </div>
          </div>
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1584466977773-e625c37cdd50"
              alt="Patient Care"
            />
            <div className="gallery-overlay">
              <h3>Patient Care</h3>
            </div>
          </div>
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528"
              alt="Community Health"
            />
            <div className="gallery-overlay">
              <h3>Community Health</h3>
            </div>
          </div>
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1579684453423-f84349ef60b0"
              alt="Health Awareness"
            />
            <div className="gallery-overlay">
              <h3>Health Awareness</h3>
            </div>
          </div>
        </div>
        <div className="load-more">
          <a href="/gallery" className="btn-primary">
            View More Photos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;