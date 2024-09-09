import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Menu from './components/Menu';
import Order from './components/Order';
import Reservation from './components/Reservation';
import Review from './components/Review';
import Navbar from './components/Navbar';


const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/reviews" element={<Review />} />
      </Routes>
    </Router>
  );
};

export default App;