import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../assets/css/Orderpage.css';

const Orderpage = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [showForm, setShowForm] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve totalPrice from location state
  const totalPrice = location.state?.totalPrice || 0;

  const handleClose = () => {
    setShowForm(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (paymentMethod === 'card') {
      // Redirect to Payment page for online payment
      navigate('/payment');
    } else if (paymentMethod === 'cash-on-delivery') {
      // Show notification for cash on delivery
      alert('Order successful! Your order will be delivered soon.');
    }
  };

  if (!showForm) {
    return null;
  }

  return (
    <div className="order-page">
      <div className="payment-page">
        <div className="close-button" onClick={handleClose}>×</div>
        <h2>Purchase Order</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Name</label>
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label>Your E-mail</label>
            <input type="email" placeholder="example@example.com" required />
          </div>
          <div className="form-group">
            <label>Mobile Number</label>
            <input type="text" placeholder="Your Mobile Number" required />
          </div>
          <div className="form-group">
            <label>Shipping Address</label>
            <input type="text" placeholder="Street Address" required />
            <div className="address-input">
              <input type="text" placeholder="City" />
              <input type="text" placeholder="State / Province" required />
              <input type="text" placeholder="ZIP Code" required />
            </div>
          </div>
          <div className="form-group">
            <label>Payment Method</label>
            <div className="payment-methods">
              <div>
                <input type="radio" id="card" name="payment-method" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} />
                <label htmlFor="card">Credit/Debit Card</label>
              </div>
              <div>
                <input type="radio" id="cash-on-delivery" name="payment-method" value="cash-on-delivery" checked={paymentMethod === 'cash-on-delivery'} onChange={() => setPaymentMethod('cash-on-delivery')} />
                <label htmlFor="cash-on-delivery">Cash on Delivery</label>
              </div>
            </div>
          </div>
          <div className="order-summary">
            <h3>Order Summary</h3>
            <p>Total Price: ₹{totalPrice}</p>
          </div>
          <button type="submit" className="submit-btn">Place Order</button>
        </form>
      </div>
    </div>
  );
};

export default Orderpage;
