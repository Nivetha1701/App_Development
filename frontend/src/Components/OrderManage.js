import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/OrderManage.css';

const OrderManage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:8080/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders', error);
      }
    };

    fetchOrders();
  }, []);

  const handleClose = () => {
    window.location.href = '/admin'; 
  };

  return (
    <div className="order-mana">
      <div className="order-management">
        <h1>Manage Orders</h1>

        {/* Close Icon */}
        <span className="close-icon" onClick={handleClose}>×</span>

        {/* Table View */}
        <table className="order-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Address</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(orders) && orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.mobile}</td>
                <td>{order.address}</td>
                <td>${order.totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManage;
