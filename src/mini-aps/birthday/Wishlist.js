import { useState } from 'react';
import AddItem from './AddItem';
import WishlistItem from './WishlistItem';
import '../../styles/Wishlist.css';

function Wishlist() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <div>
      <h1>Мій Вішлист</h1>
      <AddItem onAdd={addItem} />
      <div className="wishlist">
        {items.map((item, index) => (
          <WishlistItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
