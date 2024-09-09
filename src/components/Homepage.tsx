import React from 'react';
import { Link } from 'react-router-dom';

const Homepage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Our Restaurant</h1>
      <nav>
        <ul>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/order">Order</Link></li>
          <li><Link to="/reservation">Reservation</Link></li>
          <li><Link to="/reviews">Reviews</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Homepage;