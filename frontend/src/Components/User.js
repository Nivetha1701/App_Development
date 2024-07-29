import React, { useState } from 'react';
import '../assets/css/User.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import admin from '../assets/images/admin.png';
import cabbage from '../assets/images/cabbage.jpg';
import cooker from '../assets/images/cooker.jpg';
import kiwi from '../assets/images/kiwi.jpg';

const User = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!isUserDropdownOpen);
  };

  const handleLogout = () => {
    // Perform any logout logic here (e.g., clearing tokens)
    window.location.href = '/'; // Redirect to home page
  };

  return (
    <div className="user-dashboard">
      <header className="main-header">
        <i className="fas fa-bars menu-icon" onClick={toggleSidebar}></i>
        {/* <h1>Welcome, User <span>🎉</span></h1> */}
        <div className="header-right">
          <input type="text" placeholder="Search" />
          <i className="fas fa-bell"></i>
          <i className="fas fa-user-circle" onClick={toggleUserDropdown}></i>
          {isUserDropdownOpen && (
            <div className="user-dropdown">
              <div className="user-info">
                <img src={admin} alt="User Avatar" className="user-avatar" />
                <p className="user-name">Nivetha</p>
                <p className="user-email">nivetha@gmail.com</p>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
              </div>
            </div>
          )}
        </div>
      </header>

      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>ShopTimiz</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className="active"><i className="fas fa-user"></i> My Profile</li>
            <li><i className="fas fa-box"></i> My Orders</li>
            <li><i className="fas fa-credit-card"></i> Payment</li>
            <li><i className="fas fa-cog"></i> Settings</li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <div className="user-info">
            <img src={admin} alt="User Avatar" className="user-avatar" />
            <p>Nivetha</p>
            <p>nivetha@gmail.com</p>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <section id="profile">
          <h2>My Profile</h2>
          <div className="profile-info">
            <img src={admin} alt="Profile" className="profile-avatar" />
            <div className="profile-details">
              <p><strong>Name:</strong> Nivetha</p>
              <p><strong>Email:</strong> nivetha@gmail.com</p>
              <p><strong>Address:</strong> 123 Main St, Anytown, USA</p>
              <p><strong>Contact:</strong> +91 8148735736</p>
            </div>
          </div>
        </section>

        <section id="orders">
          <h2>My Orders</h2>
          <table className="orders-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Order Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src={cabbage} alt="Order 1" className="order-image" /></td>
                <td>Product 1</td>
                <td>$29.99</td>
                <td>July 25, 2024</td>
              </tr>
              <tr>
                <td><img src={cooker} alt="Order 2" className="order-image" /></td>
                <td>Product 2</td>
                <td>$19.99</td>
                <td>July 20, 2024</td>
              </tr>
              <tr>
                <td><img src={kiwi} alt="Order 3" className="order-image" /></td>
                <td>Product 3</td>
                <td>$49.99</td>
                <td>July 15, 2024</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="payment">
          <h2>Payment</h2>
          <div className="payment-info">
            <p><strong>Amount Paid:</strong> $99.97</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default User;
