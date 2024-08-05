import React from 'react';
import Card from 'react-bootstrap/Card';
import '../assets/css/Deals.css';
import deal1 from '../assets/images/deal1.jpg'; 
import deal2 from '../assets/images/deal2.jpg';
import deal3 from '../assets/images/deal3.jpg';
import deal4 from '../assets/images/deal4.jpg';
import deal5 from '../assets/images/deal5.jpg';
import deal6 from '../assets/images/deal6.jpg';
import deal7 from '../assets/images/deal7.jpg';
import deal8 from '../assets/images/deal8.jpg';

const Deals = () => {
  const deals = [
    { image: deal1, title: 'Eyeliner', price: '₹10.00' },
    { image: deal2, title: 'Perfumes', price: '₹20.00' },
    { image: deal3, title: 'Face Cream', price: '₹30.00' },
    { image: deal4, title: 'Face wash', price: '₹40.00' },
    { image: deal5, title: 'Slipper', price: '₹70.00' },
    { image: deal6, title: 'Sunscreen', price: '₹40.00' },
    { image: deal7, title: 'Moisturizer', price: '₹40.00' },
    { image: deal8, title: 'Herbal hair oil', price: '₹45.00' },
  ];

  return (
    <div className="deals">
      <h2>Hot Deals</h2>
      <div className="cards">
        {deals.map((deal, idx) => (
          <Card key={idx} className="deal-card">
            <Card.Img variant="top" src={deal.image} className="deal-card-img" />
            <Card.Body className="deal-card-body">
              <Card.Text className="deal-card-price">{deal.price}</Card.Text>
              <Card.Title className="deal-card-title">{deal.title}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Deals;
