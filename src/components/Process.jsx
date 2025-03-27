// components/Process.jsx
import React from 'react';

function Process() {
  return (
    <section className="section process-section" id="process">
      <div className="container">
        <div className="section-header">
          <h2>How It Works</h2>
          <p>Simple steps to get free medical consultation from top doctors</p>
          <div className="underline"></div>
        </div>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Book Appointment</h3>
              <p>Fill our simple online form or call our helpline to schedule your free consultation</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Choose Doctor</h3>
              <p>Select from our network of volunteer doctors based on specialty and location</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Get Confirmation</h3>
              <p>Receive appointment details via SMS/email with doctor's information and clinic address</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Visit Doctor</h3>
              <p>Meet the doctor at the scheduled time with your ID proof for free consultation</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">5</div>
            <div className="step-content">
              <h3>Follow-up Care</h3>
              <p>If needed, receive referrals for further tests or treatments at subsidized rates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;