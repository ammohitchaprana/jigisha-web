import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  const handleAppointmentClick = (e) => {
    e.preventDefault();
    window.open('/appointment', '_blank');
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Free Healthcare for Those in Need</h1>
        <p>Connecting underprivileged patients with top doctors who volunteer their time</p>
        <div className="hero-btns">
          <Link to="/appointment" className="btn-primary" onClick={handleAppointmentClick}>
            Book Free Appointment
          </Link>
          <Link to="#doctors" className="btn-secondary">
            Meet Our Doctors
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;