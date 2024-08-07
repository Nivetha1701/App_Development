import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../assets/css/Products.css';
import { useCart } from './CartContext'; // Import useCart hook
import { useNavigate, useLocation } from 'react-router-dom';
import { FaStar } from 'react-icons/fa'; // Import star icon

// Product images
import product1 from '../assets/images/product1.jpg';
import product2 from '../assets/images/product2.jpg';
import product3 from '../assets/images/product3.jpg';
import product4 from '../assets/images/product4.jpg';
import product5 from '../assets/images/product5.jpg';
import product6 from '../assets/images/product6.jpg';
import product7 from '../assets/images/product7.jpg';
import product8 from '../assets/images/product8.jpg';
import product9 from '../assets/images/product9.jpg';
import product10 from '../assets/images/product10.jpg';
import product11 from '../assets/images/product11.jpg';
import product12 from '../assets/images/product12.jpg';
import product13 from '../assets/images/product13.jpg';
import product14 from '../assets/images/product14.jpg';
import product15 from '../assets/images/product15.jpg';
import product16 from '../assets/images/product16.jpg';
import product17 from '../assets/images/product17.jpg';
import product18 from '../assets/images/product18.jpg';
import product19 from '../assets/images/product19.jpg';
import product20 from '../assets/images/product20.jpg';
import product21 from '../assets/images/product21.jpg';
import product22 from '../assets/images/product22.jpg';
import product23 from '../assets/images/product23.jpg';
import product24 from '../assets/images/product24.jpg';
import product25 from '../assets/images/deal1.jpg';
import product26 from '../assets/images/deal2.jpg';
import product27 from '../assets/images/deal3.jpg';
import product28 from '../assets/images/deal4.jpg';
import product29 from '../assets/images/deal5.jpg';
import product30 from '../assets/images/deal6.jpg';
import product31 from '../assets/images/deal7.jpg';

const allProducts = [
  { id: 1, name: 'Orange', image: product1, price: '10.00', category: 'fruits-vegetables' },
  { id: 2, name: 'Apple', image: product2, price: '15.50', category: 'fruits-vegetables' },
  { id: 3, name: 'Pomegranate', image: product3, price: '8.99', category: 'fruits-vegetables' },
  { id: 4, name: 'Mango', image: product4, price: '12.49', category: 'fruits-vegetables' },
  { id: 5, name: 'Carrot', image: product5, price: '9.75', category: 'fruits-vegetables' },
  { id: 6, name: 'Ladys Finger', image: product6, price: '14.30', category: 'fruits-vegetables' },
  { id: 7, name: 'Brinjal', image: product7, price: '18.60', category: 'fruits-vegetables' },
  { id: 8, name: 'Tomato', image: product8, price: '20.00', category: 'fruits-vegetables' },
  { id: 9, name: 'Atta wheat flour', image: product9, price: '7.20', category: 'staples' },
  { id: 10, name: 'Rice', image: product10, price: '25.00', category: 'staples' },
  { id: 11, name: 'Badam dry fruits', image: product11, price: '11.50', category: 'staples' },
  { id: 12, name: 'Ghee', image: product12, price: '13.75', category: 'staples' },
  { id: 13, name: '3Roses', image: product13, price: '22.30', category: 'snacks-beverage' },
  { id: 14, name: 'Maaza', image: product14, price: '19.99', category: 'snacks-beverage' },
  { id: 15, name: 'Dairy Milk', image: product15, price: '6.99', category: 'snacks-beverage' },
  { id: 16, name: 'Chocos', image: product16, price: '15.00', category: 'snacks-beverage' },
  { id: 17, name: 'Pressure cooker', image: product17, price: '35.00', category: 'home-kitchen' },
  { id: 18, name: 'Container', image: product18, price: '45.00', category: 'home-kitchen' },
  { id: 19, name: 'Rin liquid', image: product19, price: '10.50', category: 'home-kitchen' },
  { id: 20, name: 'Water bottle', image: product20, price: '5.75', category: 'home-kitchen' },
  { id: 21, name: 'Vim dish wash liquid', image: product21, price: '35.00', category: 'cleaning-household' },
  { id: 22, name: 'Surf excel powder', image: product22, price: '45.00', category: 'cleaning-household' },
  { id: 23, name: 'Buckets', image: product23, price: '10.50', category: 'cleaning-household' },
  { id: 24, name: 'Freshener', image: product24, price: '5.75', category: 'cleaning-household' },
  { id: 25, name: 'Eye Liner', image: product25, price: '13.75', category: 'Hot deals' },
  { id: 26, name: 'Perfume', image: product26, price: '10.75', category: 'Hot deals' },
  { id: 27, name: 'Face Cream', image: product27, price: '5.75', category: 'Hot deals' },
  { id: 28, name: 'Face wash', image: product28, price: '8.75', category: 'Hot deals' },
  { id: 29, name: 'Slipper', image: product29, price: '20.75', category: 'Hot deals' },
  { id: 30, name: 'Sunscreen', image: product30, price: '10.75', category: 'Hot deals' },
  { id: 31, name: 'Moisturizer', image: product31, price: '14.75', category: 'Hot deals' },
];

const Products = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const category = state ? state.category : 'all';
  const products = category === 'all' ? allProducts : allProducts.filter(product => product.category === category);

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate('/add-to-cart'); // Redirect to AddToCart page
  };

  const handleBuyNow = (product) => {
    addToCart(product);
    navigate('/orderpage', { state: { totalPrice: product.price } }); // Pass totalPrice
  };

  return (
    <div className="products">
      <h2>Products</h2>
      <div className="product-cards">
        {products.map((product) => (
          <Card key={product.id} className="product-card">
            <Card.Img variant="top" src={product.image} className="product-card-img" />
            <Card.Body className="product-card-body">
              <Card.Title className="product-card-title">{product.name}
              <span className="star-rating">
              {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1;
              return (
                 <FaStar
                 key={index}
                  color={ratingValue <= product.rating ? 'gold' : '#ffc30b'}
                  size={14}
                  />
                );
                  })}
              </span>

              </Card.Title>
              <Card.Text className="product-card-price">₹{product.price}</Card.Text>
              <div className="product-card-buttons">
                <Button className="add-to-cart-btn" variant="primary" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                <Button className="buy-now-btn" variant="success" onClick={() => handleBuyNow(product)}>Buy Now</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
