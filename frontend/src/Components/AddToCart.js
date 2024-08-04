import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import '../assets/css/AddToCart.css';

const AddToCart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  // Calculate the total price of items in the cart
  const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price), 0);

  const handleBuyNow = () => {
    navigate('/orderpage', { state: { totalPrice } }); // Pass totalPrice to Orderpage
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>${parseFloat(item.price).toFixed(2)}</p>
                <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <div className="cart-summary">
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
        <button className="buy-now-btn" onClick={handleBuyNow}>Buy Now</button>
      </div>
      <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default AddToCart;
