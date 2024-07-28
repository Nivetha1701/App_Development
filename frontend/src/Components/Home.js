import React, { useState, useEffect } from 'react';
import '../assets/css/Home.css';

import home1 from '../assets/images/home1.jpg'; 
import home2 from '../assets/images/home2.jpg'; 
import home3 from '../assets/images/home3.jpg'; 
import About from './About';
import Categories from './Categories';
import Deals from './Deals';
import Contact from './Contact';
import Footer from './Footer';

const images = [home1, home2, home3];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <img
        src={images[currentIndex]}
        alt="Carousel"
        className="home-image"
      />
      <div className="home-content">
        <About />
        <Categories />
        <Deals />
        <Contact />
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
