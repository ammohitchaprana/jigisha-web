// components/Cities.jsx
import React from 'react';

function Cities() {
  return (
    <section className="section cities-section" id="city">
      <div className="container">
        <div className="section-header">
          <h2>Where We Work</h2>
          <p>Currently serving patients in these cities across India</p>
          <div className="underline"></div>
        </div>
        <div className="cities-grid">
          <div className="city-card">
            <div className="city-icon">
              <i className="fas fa-city"></i>
            </div>
            <h3>Delhi/NCR</h3>
            <p>25+ doctors volunteering</p>
          </div>
          <div className="city-card">
            <div className="city-icon">
              <i className="fas fa-hospital"></i>
            </div>
            <h3>Mumbai</h3>
            <p>18+ doctors volunteering</p>
          </div>
          <div className="city-card">
            <div className="city-icon">
              <i className="fas fa-clinic-medical"></i>
            </div>
            <h3>Bangalore</h3>
            <p>15+ doctors volunteering</p>
          </div>
          <div className="city-card">
            <div className="city-icon">
              <i className="fas fa-ambulance"></i>
            </div>
            <h3>Hyderabad</h3>
            <p>12+ doctors volunteering</p>
          </div>
          <div className="city-card">
            <div className="city-icon">
              <i className="fas fa-heartbeat"></i>
            </div>
            <h3>Chennai</h3>
            <p>10+ doctors volunteering</p>
          </div>
          <div className="city-card">
            <div className="city-icon">
              <i className="fas fa-user-md"></i>
            </div>
            <h3>Kolkata</h3>
            <p>8+ doctors volunteering</p>
          </div>
          <div className="city-card">
            <div className="city-icon">
              <i className="fas fa-pills"></i>
            </div>
            <h3>Pune</h3>
            <p>7+ doctors volunteering</p>
          </div>
          <div className="city-card">
            <div className="city-icon">
              <i className="fas fa-stethoscope"></i>
            </div>
            <h3>Jaipur</h3>
            <p>5+ doctors volunteering</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cities;