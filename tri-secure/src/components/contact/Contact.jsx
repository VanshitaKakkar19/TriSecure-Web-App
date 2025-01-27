import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Template parameters to send to EmailJS
    const templateParams = {
      user_email: email,
      user_name: fullName,
    };

    // Send the email using EmailJS
    emailjs
      .send('service_ID', 'template_ID', templateParams, 'public_key')
      .then(
        (response) => {
          console.log('Success:', response);
          setStatus('Your message has been sent successfully!');
          setEmail('');
          setFullName('');
        },
        (error) => {
          console.error('Error:', error);
          setStatus('Sorry, something went wrong. Please try again.');
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-image-section">
        <img
          src=""
          alt="Contact us illustration"
          className="contact-image"
        />
      </div>
      <div className="contact-form-section">
        <h2>Get Newsletter</h2>
        <p>Get every weekly updates feeds</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="contact-submit-button">
            Subscribe me
          </button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
