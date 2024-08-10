import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import qrcode from '../assets/images/qrcode.jpg';
import '../assets/css/Payment.css';
import Feedback from './Feedback';

const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cvc, setCvc] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [order, setOrder] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await fetch('http://localhost:8080/orders');
                if (response.ok) {
                    const orders = await response.json();
                    setOrder(orders[orders.length - 1]); 
                } else {
                    console.error('Failed to fetch orders');
                }
            } catch (error) {
                console.error('Error fetching order:', error);
            }
        };
        fetchOrder();
    }, []);

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!order) {
            window.alert('Order not found. Please try again.');
            return;
        }

        const paymentDetails = paymentMethod === 'card' ? {
            name,
            cardNumber,
            cvc,
            expirationDate,
            order: order 
        } : {
            name,
            order: order 
        };

        try {
            const response = await fetch('http://localhost:8080/api/payments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(paymentDetails),
            });

            if (response.ok) {
                window.alert('Payment Successful!');
                setShowFeedback(true);
            } else {
                window.alert('Payment Failed!');
            }
        } catch (error) {
            console.error('Error:', error);
            window.alert('An error occurred while processing your payment.');
        }
    };

    if (showFeedback) {
        return <Feedback />;
    }

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
                        <span className="icon">&#128179;</span> Debit/Credit Card
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="upi"
                            checked={paymentMethod === 'upi'}
                            onChange={handlePaymentMethodChange}
                        />
                        <span className="icon">&#128179;</span> UPI
                    </label>
                </div>

                {paymentMethod === 'card' && (
                    <div className="card-details">
                        <div className="input-group">
                            <label>Name</label>
                            <input 
                                type="text" 
                                placeholder="Enter your Name" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required 
                            />
                        </div>
                        <div className="input-group">
                            <label>Card Number</label>
                            <input 
                                type="text" 
                                placeholder="Credit Card Number" 
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                required 
                            />
                        </div>
                        <div className="input-group">
                            <label>Security Code (CVC)</label>
                            <input 
                                type="text" 
                                placeholder="CVC" 
                                value={cvc}
                                onChange={(e) => setCvc(e.target.value)}
                                required 
                            />
                        </div>
                        <div className="input-group">
                            <label>Expiration Date</label>
                            <input
                                type="text"
                                placeholder="MM/YYYY"
                                pattern="\d{2}/\d{4}"
                                value={expirationDate}
                                onChange={(e) => setExpirationDate(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                )}

                {paymentMethod === 'upi' && (
                    <div className="upi-details">
                        <div className="input-group">
                            <label>UPI ID</label>
                            <input 
                                type="text" 
                                placeholder="Enter your UPI ID" 
                                required 
                            />
                        </div>
                        <div className="scan-qr">
                            <p>or scan with this qr code</p>
                            <img
                                src={qrcode}
                                alt="Scan with QR Code"
                                className="qr-image"
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
