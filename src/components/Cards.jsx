// src/components/Cards.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Cards.css';
// import cardImage from '../assets/images/card_image.jpeg';
import GalleryLogo from '../assets/images/Gallery_Logo.jpeg'

const Cards = () => {
  return (
    <section className="cards-container container">
      <div className="gallery-card">
        <h3>Latest Gallery</h3>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img
              src={GalleryLogo}
              alt="Event"
            />
            <div className="gallery-overlay">
              <h3>Recent Event</h3>
            </div>
          </div>
        </div>
        <Link to="/gallery" className="btn-primary">
          View More
        </Link>
      </div>
      <div className="notification-card">
        <h3>Notifications</h3>
        <ul className="notification-list">
          <li>
            <Link to="/gallery?notification=17">
              Free Stationery and National Flag Distribution for All Students at Rural Government Primary Schools - August 3, 2025
            </Link>
          </li>
          <li>
            <Link to="/gallery?notification=16">
              Free Food & Water Distribution for PCS Main Exam Candidates at Public Service Commission Center (Day 4) - July 2, 2025
            </Link>
          </li>
          <li>
            <Link to="/gallery?notification=15">
              Free Food & Water Distribution for PCS Main Exam Candidates at Public Service Commission Center (Day 3) - July 1, 2025
            </Link>
          </li>
          <li>
            <Link to="/gallery?notification=14">
              Free Food & Water Distribution for PCS Main Exam Candidates at Public Service Commission Center (Day 2) - June 30, 2025
            </Link>
          </li>
          <li>
            <Link to="/gallery?notification=13">
              Free Food & Water Distribution for PCS Main Exam Candidates at Public Service Commission Center (Day 1) - June 29, 2025
            </Link>
          </li>
        </ul>
        <Link to="/notifications" className="btn-primary">
          View More Notifications
        </Link>
      </div>
    </section>
  );
};

export default Cards;