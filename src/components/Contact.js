import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to a server or API)
    alert('Message sent!');
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out with any questions, suggestions, or just to say hello!</p>

      <div className="contact-info">
        <h3>Contact Information</h3>
        <ul>
          <li>Email: <a href="mailto:youremail@example.com">sanjana113btcsai22@igdtuw.ac.in</a></li>
          <li>Phone: +91-9319084525</li>
          <li>Social: <a href="https://www.linkedin.com/in/sanjana-bamnavat-368759259/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>

      <div className="contact-form">
        <h3>Send Me a Message</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Optional: Embed Google Map */}
      <div className="map">
        <h3>Our Location</h3>
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAP_EMBED_LINK"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;

