// src/components/Donate.js
import React, { useState } from 'react';
import '../assets/styles/components/Donate.css';
import qrCode from '../assets/images/upi-jigisha.png';

const Donate = () => {
  const [copiedMessage, setCopiedMessage] = useState('');

  const copyUPI = () => {
    const upiText = 'boim-683991891189@boi';
    navigator.clipboard.writeText(upiText).then(() => {
      setCopiedMessage('UPI ID copied to clipboard!');
      setTimeout(() => {
        setCopiedMessage('');
      }, 3000);
    });
  };

  return (
    <section className="donate-section" id="donate">
      <div className="container">
        <div className="donate-content">
          <div className="section-header">
            <h2>Support Our Mission</h2>
            <p>Your donation helps us provide free healthcare to those in need</p>
            <div className="underline"></div>
          </div>
          <div className="donate-methods">
            <div className="donate-method">
              <h3>Scan QR Code</h3>
              <div className="qr-code">
                <img src={qrCode} alt="Donation QR Code" />
              </div>
              <p>Scan this code with any UPI app to donate instantly</p>
            </div>
            <div className="donate-method">
              <h3>UPI Payment</h3>
              <p>Send to our UPI ID:</p>
              <div className="upi-id" onClick={copyUPI}>
                boim-683991891189@boi
              </div>
              <button className="copy-btn" onClick={copyUPI}>
                <i className="fas fa-copy"></i> Copy UPI ID
              </button>
              <p style={{ color: 'var(--accent-color)', height: '20px' }}>
                {copiedMessage}
              </p>
            </div>
            <div className="donate-method">
              <h3>Bank Transfer</h3>
              <div className="bank-details">
                <p>
                  <strong>Account Name:</strong> Jigisha Society
                </p>
                <p>
                  <strong>Account Number:</strong> 683-910-110011189
                </p>
                <p>
                  <strong>Bank Name:</strong> Bank of India
                </p>
                <p>
                  <strong>IFSC Code:</strong> BKID0006839
                </p>
                <p>
                  <strong>Branch:</strong> Sitapur road, Lucknow - 226020
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;