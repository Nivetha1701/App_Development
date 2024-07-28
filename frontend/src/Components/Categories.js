import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../assets/css/Categories.css';

// Product images
import fruits from '../assets/images/fruits.jpg';
import fruits1 from '../assets/images/fruits1.jpg';
import herbs from '../assets/images/herbs.jpg';
import staple1 from '../assets/images/staple1.jpg';
import staple2 from '../assets/images/staple2.jpg';
import staple3 from '../assets/images/staple3.jpg';
import staple4 from '../assets/images/staple4.jpg';
import snacks1 from '../assets/images/snacks1.jpg';
import snacks2 from '../assets/images/snacks2.jpg';
import snacks3 from '../assets/images/snacks3.jpg';
import snacks4 from '../assets/images/snacks4.jpg';
import kitchen1 from '../assets/images/kitchen1.jpg';
import kitchen2 from '../assets/images/kitchen2.jpg';
import kitchen3 from '../assets/images/kitchen3.jpg';
import kitchen4 from '../assets/images/kitchen4.jpg';
import household1 from '../assets/images/household1.jpg';
import household2 from '../assets/images/household2.jpg';
import household3 from '../assets/images/household3.jpg';
import household4 from '../assets/images/household4.jpg';
import vegetable from '../assets/images/vegetable.jpg';
import all1 from '../assets/images/all1.jpg';
import all2 from '../assets/images/all2.jpg';
import all3 from '../assets/images/all3.jpg';
import all4 from '../assets/images/all4.jpg';

const Categories = () => {
  const navigate = useNavigate();

  const handleCardClick = (category) => {
    navigate('/products', { state: { category } });
  };

  const categories = [
    {
      header: 'Fruits and Vegetables',
      items: [
        { image: fruits, title: 'Fresh Fruits', offer: 'Min 30% offer' },
        { image: vegetable, title: 'Fresh Vegetables', offer: 'Min 30% offer' },
        { image: fruits1, title: 'Cuts and Exotics', offer: 'Min 30% offer' },
        { image: herbs, title: 'Herbs and Seasonings', offer: 'Min 30% offer' },
      ],
      key: 'fruits-vegetables',
    },
    {
      header: 'Your Daily Staples',
      items: [
        { image: staple1, title: 'Atta Flour' },
        { image: staple2, title: 'Rice & Rice Products' },
        { image: staple3, title: 'Oils and Ghee' },
        { image: staple4, title: 'Dry Fruits' },
      ],
      key: 'staples',
    },
    {
      header: 'Snacks and Beverage',
      items: [
        { image: snacks1, title: 'Morning Starters' },
        { image: snacks2, title: 'Sweet cravings' },
        { image: snacks3, title: 'Soft drinks' },
        { image: snacks4, title: 'Tea and coffee' },
      ],
      key: 'snacks-beverage',
    },
    {
      header: 'Cleaning and Household',
      items: [
        { image: household1, title: 'Detergent and Fabric care' },
        { image: household2, title: 'Fresheners' },
        { image: household3, title: 'Dishwash liquid' },
        { image: household4, title: 'Cleaners' },
      ],
      key: 'cleaning-household',
    },
    {
      header: 'Home & Kitchen Products',
      items: [
        { image: kitchen1, title: 'Pressure cooker' },
        { image: kitchen2, title: 'Bath tubs' },
        { image: kitchen3, title: 'Bowls and containers' },
        { image: kitchen4, title: 'Stationary items' },
      ],
      key: 'home-kitchen',
    },
    {
      header: 'All Products',
      items: [
        { image: all1, title: 'Fruits' },
        { image: all2, title: 'Vegetables' },
        { image: all3, title: 'Chocolates' },
        { image: all4, title: 'Utensils' },
      ],
      key: 'all',
    },
  ];

  return (
    <div className="categories">
      <h1>Categories</h1>
      {categories.map((category, index) => (
        <div key={index} className="category-section">
          <h2>{category.header}</h2>
          <div className="cards">
            {category.items.map((item, idx) => (
              <Card key={idx} className="category-card" onClick={() => handleCardClick(category.key)}>
                <Card.Img variant="top" src={item.image} className="category-card-img" />
                <Card.Body className="category-card-body">
                  <Card.Title className="category-card-title">{item.title}</Card.Title>
                  {item.offer && <Card.Text className="category-card-text">{item.offer}</Card.Text>}
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
