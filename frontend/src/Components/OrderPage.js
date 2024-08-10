import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../assets/css/Orderpage.css';

const Orderpage = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [showForm, setShowForm] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve totalPrice from location state
  const totalPrice = location.state?.totalPrice || 0;

  const handleClose = () => {
    setShowForm(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create an order object to send to the backend
    const orderData = {
      name,
      email,
      mobile,
      address,
      paymentMethod,
      totalPrice, 
    };

    try {
      const response = await fetch('http://localhost:8080/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        const createdOrder = await response.json();
        if (paymentMethod === 'card') {
          // Redirect to Payment page for online payment
          navigate('/payment', { state: { orderId: createdOrder.id } });
        } else if (paymentMethod === 'cash-on-delivery') {
          // Show notification for cash on delivery
          alert('Order successful! Your order will be delivered soon.');
          navigate('/'); // Redirect to home or order summary page
        }
      } else {
        alert('Failed to place order. Please try again.');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('An error occurred. Please try again later.');
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
            <input 
              type="text" 
              placeholder="Your Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Your E-mail</label>
            <input 
              type="email" 
              placeholder="example@example.com" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Mobile Number</label>
            <input 
              type="text" 
              placeholder="Your Mobile Number" 
              value={mobile} 
              onChange={(e) => setMobile(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Shipping Address</label>
            <input 
              type="text" 
              placeholder="Street Address" 
              value={address} 
              onChange={(e) => setAddress(e.target.value)} 
              required 
            />
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
                <input 
                  type="radio" 
                  id="card" 
                  name="payment-method" 
                  value="card" 
                  checked={paymentMethod === 'card'} 
                  onChange={() => setPaymentMethod('card')} 
                />
                <label htmlFor="card">Credit/Debit Card</label>
              </div>
              <div>
                <input 
                  type="radio" 
                  id="cash-on-delivery" 
                  name="payment-method" 
                  value="cash-on-delivery" 
                  checked={paymentMethod === 'cash-on-delivery'} 
                  onChange={() => setPaymentMethod('cash-on-delivery')} 
                />
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
