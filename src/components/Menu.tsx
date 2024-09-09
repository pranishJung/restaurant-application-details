import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface MenuItem {
  id: number;
  name: string;
  price: string;
}

const Menu: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    axios.get<MenuItem[]>('/api/menu')
      .then(response => setMenuItems(response.data))
      .catch(error => console.error('Error fetching menu items:', error));
  }, []);

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;