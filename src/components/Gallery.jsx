// src/components/Gallery.js
import React from 'react';
import '../assets/styles/components/Gallery.css';
import WiA from '../assets/images/WiA1.jpeg';
import WiA2 from '../assets/images/WiA2.jpeg';
import WiA3 from '../assets/images/WiA3.jpeg';
import WiA4 from '../assets/images/WiA4.jpeg';
import WiA5 from '../assets/images/WiA5.jpeg';
import WiA6 from '../assets/images/WiA6.jpeg';

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
              src={WiA}
              alt="Food & Fruit Distribution at KGMU During COVID-2"
            />
            <div className="gallery-overlay">
              <h3>Food & Fruit Distribution at KGMU During COVID-2</h3>
            </div>
          </div>
          <div className="gallery-item">
            <img
              src={WiA2}
              alt="KGMU camp"
            />
            <div className="gallery-overlay">
              <h3>Food & Fruit Distribution at KGMU During COVID-2</h3>
            </div>
          </div>
          <div className="gallery-item">
            <img
              src={WiA3}
              alt="KGMU camp"
            />
            <div className="gallery-overlay">
              <h3>Food & Fruit Distribution at KGMU During COVID-2</h3>
            </div>
          </div>
          <div className="gallery-item">
            <img
              src={WiA4}
              alt="KGMU camp"
            />
            <div className="gallery-overlay">
              <h3>Food & Fruit Distribution at KGMU During COVID-2</h3>
            </div>
          </div>
          <div className="gallery-item">
            <img
              src={WiA5}
              alt="PCS Aspirants"
            />
            <div className="gallery-overlay">
              <h3>PCS Aspirants</h3>
            </div>
          </div>
          <div className="gallery-item">
            <img
              src={WiA6}
              alt="Health Awareness"
            />
            <div className="gallery-overlay">
              <h3>At Queen Marys Hospital</h3>
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