// App.js
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Categories from './Components/Categories';
import Deals from './Components/Deals';
import Products from './Components/Products';
import AddToCart from './Components/AddToCart'; // Import AddToCart
import { CartProvider } from './Components/CartContext'; // Import CartProvider
import Orderpage from './Components/OrderPage';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/add-to-cart" element={<AddToCart />} /> 
          <Route path="/orderpage" element={<Orderpage/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
