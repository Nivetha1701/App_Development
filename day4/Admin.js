import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Admin.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import adminImage from '../assets/images/admin.png';
import incomeImage from '../assets/images/income.png';
import earningsImage from '../assets/images/earning.png';

function Admin() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
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

  const filterOrders = (rows) => {
    return rows.filter(row => {
      const rowDate = new Date(row.date);
      const start = new Date(startDate);
      const end = new Date(endDate);
      return (!startDate || rowDate >= start) && (!endDate || rowDate <= end);
    });
  };

  const renderSection = () => {
    const orders = [
      { id: '#2632', name: 'Brooklyn Zoe', address: '302 Snider Street, RUTLAND, VT, 05701', date: '2020-07-31', price: '$64.00', status: 'Pending' },
      { id: '#2633', name: 'John McCormick', address: '1096 Wiseman Street, CALMAR, IA, 52132', date: '2020-08-01', price: '$35.00', status: 'Dispatch' },
      { id: '#2634', name: 'Sandra Pugh', address: '1640 Thom Street, SALE CITY, GA, 98105', date: '2020-08-02', price: '$74.00', status: 'Completed' },
      { id: '#2635', name: 'Vernie Hart', address: '3898 Oak Drive, DOVER, DE, 19905', date: '2020-08-02', price: '$62.00', status: 'Pending' },
      { id: '#2636', name: 'Mark Clark', address: '195 Augusta Park, NASSAU, NY, 12062', date: '2020-08-02', price: '$39.00', status: 'Dispatch' },
      { id: '#2637', name: 'Rebekah Foster', address: '3445 Park Boulevard, BOCA, CA, 93065', date: '2020-08-03', price: '$67.00', status: 'Pending' },
    ];

    const filteredOrders = filterOrders(orders);

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
                <h3>Total orders</h3>
                <p>530</p>
              </div>
              <div className="stat-card delivered-orders">
                <h3>Delivered orders</h3>
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
      case 'orders':
        return (
          <section className="orders-section">
            <h3>Orders</h3>
            <div className="orders-filters">
              <button className="filter-button active" onClick={() => setActiveSection('orders')}>All orders</button>
              <button className="filter-button" onClick={() => setActiveSection('dispatch')}>Dispatch</button>
              <button className="filter-button" onClick={() => setActiveSection('pending')}>Pending</button>
              <button className="filter-button" onClick={() => setActiveSection('completed')}>Completed</button>
              {/* <div className="date-filter">
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                <span>to</span>
                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
              </div> */}
            </div>
            <table className="orders-table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Date</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.name}</td>
                    <td>{order.address}</td>
                    <td>{order.date}</td>
                    <td>{order.price}</td>
                    <td className={`status ${order.status.toLowerCase()}`}>{order.status}</td>
                    <td><i className="fas fa-cog"></i></td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              <i className="fas fa-users"></i> Users
            </li>
            <li className={activeSection === 'orders' ? 'active' : ''} onClick={() => setActiveSection('orders')}>
              <i className="fas fa-box"></i> Orders
            </li>
            <li className={activeSection === 'messages' ? 'active' : ''} onClick={() => setActiveSection('messages')}>
              <i className="fas fa-envelope"></i> Messages
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
