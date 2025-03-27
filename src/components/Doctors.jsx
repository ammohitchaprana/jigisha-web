// components/Doctors.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Doctors() {
  return (
    <section id="doc" className="section doctors-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Volunteer Doctors</h2>
          <p>Meet some of the dedicated medical professionals who serve with us</p>
          <div className="underline"></div>
        </div>
        <div className="doctors-grid">
          <div className="doctor-card">
            <div className="doctor-img">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2" alt="Dr. Sharma" />
            </div>
            <div className="doctor-info">
              <h3>Dr. Anil Sharma</h3>
              <div className="doctor-specialty">Cardiologist</div>
              <p>10+ years experience, specializes in heart diseases and preventive care</p>
              <p><i className="fas fa-map-marker-alt"></i> Delhi</p>
            </div>
          </div>
          <div className="doctor-card">
            <div className="doctor-img">
              <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f" alt="Dr. Patel" />
            </div>
            <div className="doctor-info">
              <h3>Dr. Priya Patel</h3>
              <div className="doctor-specialty">Pediatrician</div>
              <p>Specializes in child healthcare, nutrition and developmental disorders</p>
              <p><i className="fas fa-map-marker-alt"></i> Mumbai</p>
            </div>
          </div>
          <div className="doctor-card">
            <div className="doctor-img">
              <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d" alt="Dr. Gupta" />
            </div>
            <div className="doctor-info">
              <h3>Dr. Neha Gupta</h3>
              <div className="doctor-specialty">Gynecologist</div>
              <p>Women's health expert with focus on affordable maternal care</p>
              <p><i className="fas fa-map-marker-alt"></i> Bangalore</p>
            </div>
          </div>
          <div className="doctor-card">
            <div className="doctor-img">
              <img src="https://images.unsplash.com/photo-1527613426441-4da17471b66d" alt="Dr. Kumar" />
            </div>
            <div className="doctor-info">
              <h3>Dr. Rajesh Kumar</h3>
              <div className="doctor-specialty">Orthopedic Surgeon</div>
              <p>Specializes in joint replacements and trauma surgeries</p>
              <p><i className="fas fa-map-marker-alt"></i> Hyderabad</p>
            </div>
          </div>
        </div>
        <div className="text-center" style={{ marginTop: '40px' }}>
          <Link to="/services" className="btn-primary">View All Doctors</Link>
        </div>
      </div>
    </section>
  );
}

export default Doctors;