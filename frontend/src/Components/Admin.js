import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/Admin.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import adminImage from '../assets/images/admin.png';
import incomeImage from '../assets/images/income.png';
import earningsImage from '../assets/images/earning.png';

function Admin() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!isUserDropdownOpen);
  };

  const handleLogout = () => {
    navigate('/');
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <>
            <section className="stats-section">
              <div className="stat-card pending-orders">
                <h3>New Users</h3>
                <p>20</p>
              </div>
              <div className="stat-card active-orders">
                <h3>Total Orders</h3>
                <p>530</p>
              </div>
              <div className="stat-card delivered-orders">
                <h3>Delivered Orders</h3>
                <p>275</p>
              </div>
            </section>
            <section className="income-section">
              <div className="income-chart">
                <h3>Income</h3>
                <img src={incomeImage} alt="Income Chart" />
              </div>
              <div className="earnings-item">
                <h3>Earnings by Item</h3>
                <img src={earningsImage} alt="Earnings by Item Chart" />
              </div>
            </section>
          </>
        );
      case 'users':
        return (
          <section className="users-section">
            <div className="user-stat-box">
              <div className="user-stat-card">
                <h3>Active Users</h3>
                <p>378</p>
              </div>
              <div className="user-stat-card">
                <h3>New Users</h3>
                <p>120</p>
              </div>
            </div>
          </section>
        );
      case 'messages':
        return (
          <section className="messages-section">
            <h3>User Feedback</h3>
            <div className="reviews">
              <div className="review">
                <p>"This is a wonderful easy to use, VERY EASY to use service, both for your client as well as staff. I h..."</p>
                <p><strong>Angled North</strong></p>
              </div>
              <div className="review">
                <p>"We have been using Repuso for the past 8 months and it was absolutely brilliant, the team is s..."</p>
                <p><strong>Seb Marouani</strong></p>
              </div>
              <div className="review">
                <p>"Use in your site what other say about your company en #socialmedia... check @getrepu..."</p>
                <p><strong>Germán Castaño</strong></p>
              </div>
              <div className="review">
                <p>"Exactly what I was looking for our e-commerce sites. Easy to set up and simple to use. Extra credits t..."</p>
                <p><strong>Ivar Arulaid</strong></p>
              </div>
              <div className="review">
                <p>"What's more important than showing current customers and (more importantly) potential cust..."</p>
                <p><strong>Greg Watson</strong></p>
              </div>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="admin-dashboard">
      <header className="main-header">
        <i className="fas fa-bars menu-icon" onClick={toggleSidebar}></i>
        <div className="header-right">
          <input type="text" placeholder="Search" />
          <i className="fas fa-user-circle" onClick={toggleUserDropdown}></i>
          {isUserDropdownOpen && (
            <div className="user-dropdown">
              <div className="user-info">
                <img src={adminImage} alt="User Avatar" className="admin-avatar" />
                <div>
                  <p className="user-name">Nivetha</p>
                  <p className="user-email">nivethabs2004@gmail.com</p>
                </div>
                <button onClick={handleLogout} className="logout-button">Logout</button>
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
            <li className={activeSection === 'dashboard' ? 'active' : ''} onClick={() => setActiveSection('dashboard')}>
              <i className="fas fa-tachometer-alt"></i> Dashboard
            </li>
            <li className={activeSection === 'users' ? 'active' : ''} onClick={() => setActiveSection('users')}>
              <i className="fas fa-users"></i> <Link to="/usermanage"> Users </Link>
            </li>
            <li className={activeSection === 'orders' ? 'active' : ''} onClick={() => setActiveSection('orders')}>
              <i className="fas fa-box"></i> <Link to="/order">Orders</Link>
            </li>
            <li className={activeSection === 'messages' ? 'active' : ''} onClick={() => setActiveSection('messages')}>
              <i className="fas fa-envelope"></i><Link to="/feedbackmanage">Feedbacks</Link>
            </li>
            <li className={activeSection === 'products' ? 'active' : ''} onClick={() => setActiveSection('products')}>
              <i className="fas fa-cubes"></i> <Link to="/product">Products</Link>
            </li>
            <li onClick={handleLogout}>
              <i className="fas fa-sign-out-alt"></i> Logout
            </li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        {renderSection()}
      </main>
    </div>
  );
}

export default Admin;
