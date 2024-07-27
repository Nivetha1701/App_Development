import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../assets/css/Products.css';
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

const products = [
  { id: 1, name: 'Product 1', image: product1, price: '10.00' },
  { id: 2, name: 'Product 2', image: product2, price: '15.50' },
  { id: 3, name: 'Product 3', image: product3, price: '8.99' },
  { id: 4, name: 'Product 4', image: product4, price: '12.49' },
  { id: 5, name: 'Product 5', image: product5, price: '9.75' },
  { id: 6, name: 'Product 6', image: product6, price: '14.30' },
  { id: 7, name: 'Product 7', image: product7, price: '18.60' },
  { id: 8, name: 'Product 8', image: product8, price: '20.00' },
  { id: 9, name: 'Product 9', image: product9, price: '7.20' },
  { id: 10, name: 'Product 10', image: product10, price: '25.00' },
  { id: 11, name: 'Product 11', image: product11, price: '11.50' },
  { id: 12, name: 'Product 12', image: product12, price: '13.75' },
  { id: 13, name: 'Product 13', image: product13, price: '22.30' },
  { id: 14, name: 'Product 14', image: product14, price: '19.99' },
  { id: 15, name: 'Product 15', image: product15, price: '6.99' },
  { id: 16, name: 'Product 16', image: product16, price: '30.00' },
  { id: 17, name: 'Product 17', image: product17, price: '17.45' },
  { id: 18, name: 'Product 18', image: product18, price: '24.89' },
  { id: 19, name: 'Product 19', image: product19, price: '5.99' },
  { id: 20, name: 'Product 20', image: product20, price: '21.00' },
];

const Products = () => {
  return (
    <div className="products">
      <h2>Our Products</h2>
      <div className="product-cards">
        {products.map((product) => (
          <Card key={product.id} className="product-card">
            <div className="product-card-img-container">
              <Card.Img variant="top" src={product.image} className="product-card-img" />
            </div>
            <Card.Body className="product-card-body">
              <Card.Title className="product-card-title">{product.name}</Card.Title>
              <Card.Text className="product-card-price">${product.price}</Card.Text>
              <div className="product-card-buttons">
                <Button variant="primary" className="add-to-cart-btn">Add to Cart</Button>
                <Button variant="success" className="buy-now-btn">Buy Now</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
