import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../assets/css/Deals.css';
import deal1 from '../assets/images/deal1.jpg'; 
import deal2 from '../assets/images/deal2.jpg';
import deal3 from '../assets/images/deal3.jpg';
import deal4 from '../assets/images/deal4.jpg';

const Deals = () => {
  const deals = [
    { image: deal1, title: 'Eyeliner', price: '$10.00' },
    { image: deal2, title: 'Perfumes', price: '$20.00' },
    { image: deal3, title: 'Face Cream', price: '$30.00' },
    { image: deal4, title: 'Face wash', price: '$40.00' },
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
              {/* <Button variant="primary" className="deal-card-button">Add to Cart</Button> */}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Deals;
