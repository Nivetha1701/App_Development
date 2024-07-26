import React from 'react';
import '../assets/css/About.css'; // Import the CSS for styling
import aboutImage1 from '../assets/images/about-image1.jpg';
import aboutImage2 from '../assets/images/about-image2.jpg';
import aboutImage3 from '../assets/images/about-image3.jpg';
import aboutImage4 from '../assets/images/about-image4.jpg';
import chooseProductImage from '../assets/images/choose-product.png';
import makePaymentImage from '../assets/images/make-payment.png';
import fastDeliveryImage from '../assets/images/fast-delivery.png';

const About = () => {
  return (
    <div className="about-section">
      <div className="about-text">
        <h3 className="about-title">About Us</h3>
        <h1 className="welcome-text">Welcome to SHOPTIMIZ</h1>
        <p className="about-content">
          Welcome to Shoptimist, your ultimate destination for fresh produce and daily essentials.
          At Shoptimist, we believe in delivering quality and convenience to your doorstep.
          Explore a wide range of products curated to meet your everyday needs.
          Our commitment is to provide you with the best shopping experience.
          Join us in our journey towards a healthier, happier lifestyle.
          Shop smart, shop with Shoptimist!
        </p>
        <div className="stats-box">
          <div className="stat-item">
            <img src={chooseProductImage} alt="Choose Product" className="stat-icon" />
            <p className="stat-title">Choose Product</p>
            <p>Select from a variety of products tailored to your needs.</p>
          </div>
          <div className="stat-item">
            <img src={makePaymentImage} alt="Make Payment" className="stat-icon" />
            <p className="stat-title">Make Payment</p>
            <p>Experience a seamless and secure payment process.</p>
          </div>
          <div className="stat-item">
            <img src={fastDeliveryImage} alt="Fast Delivery" className="stat-icon" />
            <p className="stat-title">Fast Delivery</p>
            <p>Enjoy quick and reliable delivery to your doorstep.</p>
          </div>
        </div>
      </div>
      <div className="image-section">
        <img src={aboutImage1} alt="Supermarket 1" className="supermarket-image image-1" />
        <img src={aboutImage2} alt="Supermarket 2" className="supermarket-image image-2" />
        <img src={aboutImage3} alt="Supermarket 3" className="supermarket-image image-3" />
        <img src={aboutImage4} alt="Supermarket 4" className="supermarket-image image-4" />
      </div>
    </div>
  );
};

export default About;
