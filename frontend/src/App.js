import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Categories from './Components/Categories';
import Deals from './Components/Deals';
import Products from './Components/Products';
import AddToCart from './Components/AddToCart';
import Orderpage from './Components/OrderPage';
import Admin from './Components/Admin';
import Layout from './Components/Layout'; // Import Layout
import { CartProvider } from './Components/CartContext';
import User from './Components/User';
import Payment from './Components/Payment';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="about" element={<About />} />
            <Route path="categories" element={<Categories />} />
            <Route path="deals" element={<Deals />} />
            <Route path="products" element={<Products />} />
            <Route path="contact" element={<Contact />} />
            <Route path="add-to-cart" element={<AddToCart />} />
            <Route path="orderpage" element={<Orderpage />} />
            <Route path="payment" element={<Payment/>} />
          </Route>
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
