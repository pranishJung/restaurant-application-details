import React, { useState } from 'react';
import axios from 'axios';

const Order: React.FC = () => {
  const [order, setOrder] = useState<string>('');

  const handleSubmit = () => {
    axios.post('/api/orders', { order })
      .then(() => alert('Order placed successfully'))
      .catch(error => console.error('Error placing order:', error));
  };

  return (
    <div>
      <h1>Place Your Order</h1>
      <textarea value={order} onChange={e => setOrder(e.target.value)} />
      <button onClick={handleSubmit}>Submit Order</button>
    </div>
  );
};

export default Order;