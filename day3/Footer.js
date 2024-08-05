import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section links">
          <h4>Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/app-support">App Support</Link></li>
            <li><Link to="/login">Login / Register</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-section policies">
          <h4>Policies</h4>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/refund-policy">Refund Policy</Link></li>
            <li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
          </ul>
        </div>
        <div className="footer-section customer-service">
          <h4>Customer Service</h4>
          <ul>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/shipping">Shipping Information</Link></li>
            <li><Link to="/returns">Returns & Exchanges</Link></li>
            <li><Link to="/order-tracking">Order Tracking</Link></li>
          </ul>
        </div>
        <div className="footer-section contact-info">
          <h4>Contact Us</h4>
          <p>No 17, Periyar Nagar, Ayanavaram</p>
          <p>Chennai, Tamil Nadu - 600023</p>
          <p>Call Us: 7845646019</p>
        </div>
        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="footer-section newsletter">
          <h4>Newsletter Signup</h4>
          <p>Subscribe to our newsletter for the latest updates and offers.</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button className="newsletter-submit" type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
