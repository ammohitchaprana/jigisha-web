// components/Mission.jsx
import React from 'react';

function Mission() {
  return (
    <section className="section mission-section">
      <div className="container">
        <div className="mission-content">
          <div className="section-header">
            <h2>Our Mission</h2>
            <p>To make quality healthcare accessible to everyone, regardless of their financial situation</p>
            <div className="underline"></div>
          </div>
          <p>We believe healthcare is a fundamental human right, not a privilege. Jigisha Society operates on three core principles:</p>
          <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '20px', borderRadius: '10px', maxWidth: '300px', color: 'var(--text-color)' }}>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Access</h3>
              <p>Remove financial barriers to healthcare by connecting patients with volunteer doctors</p>
            </div>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '20px', borderRadius: '10px', maxWidth: '300px', color: 'var(--text-color)' }}>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Quality</h3>
              <p>Ensure patients receive care from qualified, experienced medical professionals</p>
            </div>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '20px', borderRadius: '10px', maxWidth: '300px', color: 'var(--text-color)' }}>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Dignity</h3>
              <p>Treat every patient with respect, compassion and confidentiality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;