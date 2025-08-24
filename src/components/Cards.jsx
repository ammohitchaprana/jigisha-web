// src/components/Cards.js
import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/gallery?notification=13">
              Free Food & Water Distribution for PCS Main Exam Candidates at Public Service Commission Center (Day 1) - June 29, 2025
            </Link>
          </li>
          <li>
            <Link to="/gallery?notification=14">
              Free Food & Water Distribution for PCS Main Exam Candidates at Public Service Commission Center (Day 2) - June 30, 2025
            </Link>
          </li>
          <li>
            <Link to="/gallery?notification=15">
              Free Food & Water Distribution for PCS Main Exam Candidates at Public Service Commission Center (Day 3) - July 1, 2025
            </Link>
          </li>
          <li>
            <Link to="/gallery?notification=16">
              Free Food & Water Distribution for PCS Main Exam Candidates at Public Service Commission Center (Day 4) - July 2, 2025
            </Link>
          </li>
          <li>
            <Link to="/gallery?notification=1">
              Free Food & Water Distribution at Queen Mary Hospital, KGMU for Patient Attendants - Dec 26, 2024
            </Link>
          </li>
          <li>
            <Link to="/gallery?notification=2">
              Free Food & Water Distribution for PCS-Pre Candidates from Remote Districts - Dec 22, 2024
            </Link>
          </li>
          <li>
            <Link to="/gallery?notification=5">
              Free Food & Fruit distribution at KGMU Trauma Center during COVID-19 Wave 2 - June 22, 2021
            </Link>
          </li>
          <li>
            <Link to="/gallery?notification=6">
              Free Food & Fruit distribution at KGMU Trauma Center during COVID-19 Wave 2 - June 15, 2021
            </Link>
          </li>
          <li>
            <Link to="/gallery?notification=7">
              Free Food & Fruit distribution at KGMU Trauma Center during COVID-19 Wave 2 - June 8, 2021
            </Link>
          </li>
          <li>
            <Link to="/gallery?notification=4">
              Free Food & Fruit distribution at KGMU Trauma Center during COVID-19 Wave 2 - June 1, 2021
            </Link>
          </li>
          <li>
            <Link to="/gallery?notification=10">
              Children's Day Celebration at Both Free Tuition Centers - November 14, 2020
            </Link>
          </li>
          <li>
            <Link to="/gallery?notification=11">
              Warm Clothes Distribution at Both Free Tuition Centers - December 2020
            </Link>
          </li>
          <li>
            <Link to="/gallery?notification=12">
              New Year Celebration at Both Free Tuition Centers - January 1, 2020
            </Link>
          </li>
          <li>
            <Link to="/gallery?notification=3">
              Free Food & Fruit distribution at KGMU Trauma Center during COVID-19 Wave 2 - May 29, 2021
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Cards;