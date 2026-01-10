import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend API
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="contact-page">
      <section className="hero-section">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="hero-description">
            We'd love to hear from you. Get in touch with us for questions, inquiries, or to learn more about our programs.
          </p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-content">
            {/* Contact Form */}
            <div className="contact-form-container">
              <h2 className="section-title">Send Us a Message</h2>
              {submitted ? (
                <div className="success-message">
                  <p>Thank you for your message! We'll get back to you soon.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="events">Events Information</option>
                      <option value="donations">Donations</option>
                      <option value="dhammaschool">Dhamma School</option>
                      <option value="meditation">Meditation Classes</option>
                      <option value="counseling">Spiritual Counseling</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-submit">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="contact-info-container">
              <h2 className="section-title">Contact Information</h2>
              <div className="contact-info">
                <div className="info-item">
                  <h3>Address</h3>
                  <p>
                    123 Temple Street<br />
                    City, State 12345<br />
                    United States
                  </p>
                </div>
                <div className="info-item">
                  <h3>Phone</h3>
                  <p>
                    Main: (123) 456-7890<br />
                    Mobile: (123) 456-7891
                  </p>
                </div>
                <div className="info-item">
                  <h3>Email</h3>
                  <p>
                    General: info@temple.org<br />
                    Events: events@temple.org
                  </p>
                </div>
                <div className="info-item">
                  <h3>Office Hours</h3>
                  <p>
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday - Sunday: 8:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
              <div className="map-placeholder">
                <p>Map would be embedded here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="section additional-info">
        <div className="container">
          <div className="info-cards">
            <div className="info-card">
              <h3>Visit Us</h3>
              <p>
                We welcome visitors during our office hours. For special visits or group tours, 
                please contact us in advance to arrange a suitable time.
              </p>
            </div>
            <div className="info-card">
              <h3>Volunteer Opportunities</h3>
              <p>
                Interested in volunteering? We have various opportunities available. Contact us 
                to learn more about how you can contribute to our community.
              </p>
            </div>
            <div className="info-card">
              <h3>Media Inquiries</h3>
              <p>
                For media inquiries or press information, please contact us via email with 
                "Media Inquiry" in the subject line.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

