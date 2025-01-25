import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [projectDetails, setProjectDetails] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Template parameters to send to EmailJS
    const templateParams = {
      user_email: email,
      project_details: projectDetails,
    };

    // Send the email using EmailJS
    emailjs.send('service_ID', 'template_ID', templateParams,'public_key')
      .then((response) => {
        console.log('Success:', response);
        setStatus('Your message has been sent successfully!');
        setEmail('');
        setProjectDetails('');
      }, (error) => {
        console.error('Error:', error);
        setStatus('Sorry, something went wrong. Please try again.');
      });
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Your Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Project Details:</label>
          <textarea
            value={projectDetails}
            onChange={(e) => setProjectDetails(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
};

export default Contact;
