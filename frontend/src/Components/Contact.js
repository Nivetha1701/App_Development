import React from 'react';
import '../assets/css/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-container">
        <div className="contact-cards">
          <div className="contact-card">
            <i className="fas fa-map-marker-alt"></i>
            <h3>OUR MAIN OFFICE</h3>
            <p>123 Fresh Street, Grocery Town, GT 12345</p>
          </div>
          <div className="contact-card">
            <i className="fas fa-phone"></i>
            <h3>PHONE NUMBER</h3>
            <p>123-456-7890<br/>800-123-4567 (Toll Free)</p>
          </div>
          <div className="contact-card">
            <i className="fas fa-fax"></i>
            <h3>FAX</h3>
            <p>1-800-234-5678</p>
          </div>
          <div className="contact-card">
            <i className="fas fa-envelope"></i>
            <h3>EMAIL</h3>
            <p>support@shoptimist.com</p>
          </div>
        </div>
        <div className="contact-form-section">
          <div className="contact-info">
            <h2>Get in touch</h2>
            <p className="sustainability">
              We are committed to providing fresh and high-quality products.
            </p>
            <p>
              Have any questions or feedback? Feel free to reach out to us. We value your input and strive to continuously improve our services to better meet your needs. Let's work together to create a healthier and happier community.
            </p>
            <div className="social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter a valid email address" />
              </div>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Enter your Name" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Enter your message"></textarea>
              </div>
              <button type="submit">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
