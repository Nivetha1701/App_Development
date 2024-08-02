import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Payment.css';

const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState('card');
    const navigate = useNavigate();

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Show a browser alert
        window.alert('Payment Successful!');
        navigate('/'); // Redirect to home page
    };

    return (
        <div className="payment-form">
            <h2>Payment Methods</h2>
            <form onSubmit={handleSubmit}>
                <div className="payment-options">
                    <label>
                        <input
                            type="radio"
                            value="card"
                            checked={paymentMethod === 'card'}
                            onChange={handlePaymentMethodChange}
                        />
                        <span className="icon">&#128179;</span> Debit Card
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="credit"
                            checked={paymentMethod === 'credit'}
                            onChange={handlePaymentMethodChange}
                        />
                        <span className="icon">&#128179;</span> Credit Card
                    </label>
                </div>

                {paymentMethod === 'card' && (
                    <div className="card-details">
                        <div className="input-group">
                            <label>Name</label>
                            <input type="text" placeholder="Enter your Name" required />
                        </div>
                        <div className="input-group">
                            <label>Card Number</label>
                            <input type="text" placeholder="Credit Card Number" required />
                        </div>
                        <div className="input-group">
                            <label>Security Code (CVC)</label>
                            <input type="text" placeholder="CVC" required />
                        </div>
                        <div className="input-group">
                            <label>Expiration Date</label>
                            <input
                                type="text"
                                placeholder="MM/YYYY"
                                pattern="\d{2}/\d{4}"
                                required
                            />
                        </div>
                    </div>
                )}

                <button type="submit" className="submit-button">Submit Order</button>
            </form>
        </div>
    );
};

export default Payment;
