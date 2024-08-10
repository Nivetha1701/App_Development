import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = async (product) => {
    try {
      const token = localStorage.getItem('token'); // Get token from local storage
      const config = {
        headers: { Authorization: `Bearer ${token}` } // Attach token to request header
      };
      const response = await axios.post('http://localhost:8080/cart', {
        productName: product.name,
        price: product.price,
        totalPrice: product.price, // Assuming totalPrice is the price for a single item here
        product: { id: product.id } // Send the product ID
      }, config);

      // If successful, update the frontend cart
      setCart((prevCart) => [...prevCart, { ...product, id: response.data.id }]);
    } catch (error) {
      console.error('Error adding product to cart', error);
    }
  };

  const removeFromCart = async (id) => {
    try {
      const token = localStorage.getItem('token'); // Get token from local storage
      const config = {
        headers: { Authorization: `Bearer ${token}` } // Attach token to request header
      };
      await axios.delete(`http://localhost:8080/cart/${id}`, config);

      // Update the frontend cart
      setCart((prevCart) => prevCart.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error removing product from cart', error);
    }
  };

  const clearCart = async () => {
    try {
      const token = localStorage.getItem('token'); // Get token from local storage
      const config = {
        headers: { Authorization: `Bearer ${token}` } // Attach token to request header
      };
      const requests = cart.map(item => axios.delete(`http://localhost:8080/cart/${item.id}`, config));
      await Promise.all(requests);

      // Clear the frontend cart
      setCart([]);
    } catch (error) {
      console.error('Error clearing cart', error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
