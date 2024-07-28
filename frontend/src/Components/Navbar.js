import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/Navbar.css';
import logo from '../assets/images/logo.png'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate(); 

  const handleLoginClick = () => {
    navigate('/login'); 
  };

  const handleUserIconClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Supermarket Logo" />
      </div>
      <div className="title">SHOPTIMIZ</div>
      <div className="navbar-center">
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/deals">Deals</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Type here to Search" />
        <i className="fas fa-search search-icon"></i>
      </div>
      <div className="user-icon" onClick={handleUserIconClick}>
        <i className="fas fa-user"></i>
        {dropdownVisible && (
          <div className="dropdown-menu">
            <Link to="/login">Login</Link>
            <Link to="/register">Signup</Link>
            <Link to="/user">My Account</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
