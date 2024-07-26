import React from 'react';
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <About/>
      <Contact/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;



          // <Route path="/about" element={<About />} />
          // <Route path="/app-support" element={<AppSupport />} />
          // <Route path="/login" element={<Login />} />
          // <Route path="/policies" element={<Policies />} />
          // <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          // <Route path="/refund-policy" element={<RefundPolicy />} />
          // <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          // <Route path="/contact" element={<Contact />} />
