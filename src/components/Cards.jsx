// src/components/Cards.js
import React from 'react';
import '../assets/styles/components/Cards.css';
import cardImage from '../assets/images/card_image.jpeg';

const Cards = () => {
  return (
    <section className="cards-container container">
      <div className="gallery-card">
        <h3>Latest Gallery</h3>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img
              src={cardImage}
              alt="Event"
            />
            <div className="gallery-overlay">
              <h3>Recent Event</h3>
            </div>
          </div>
        </div>
        <a href="#gallery" className="btn-primary">
          View More
        </a>
      </div>
      <div className="notification-card">
        <h3>Notifications</h3>
        <ul className="notification-list">
          <li>Community Help Event - April 10, 2025</li>
          <li>Volunteer Registration Open</li>
          <li>Annual Fundraiser - May 1, 2025</li>
        </ul>
      </div>
    </section>
  );
};

export default Cards;