import { useState, useEffect } from 'react';
import AddItem from './AddItem';
import WishlistItem from './WishlistItem';
import '../../styles/Wishlist.css';

function Wishlist() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    fetch('/api/wishlist')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Помилка завантаження даних:", err));
  }, []);

  const addItem = (item) => {
    fetch('/api/wishlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((newItem) => setItems((prevItems) => [...prevItems, newItem]))
      .catch((err) => console.error("Помилка додавання елементу:", err));
  };

  const saveItem = (updatedItem) => {
    fetch(`/api/wishlist/${updatedItem.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedItem),
    })
      .then((res) => res.json())
      .then((savedItem) => {
        setItems((prevItems) =>
          prevItems.map((item) => (item.id === savedItem.id ? savedItem : item))
        );
        setEditingItem(null);
      })
      .catch((err) => console.error("Помилка збереження елементу:", err));
  };

  return (
    <div>
      <AddItem
        onAdd={addItem}
        existingItem={editingItem}
        onSave={saveItem}
      />
      <div className="wishlist">
        {items.map((item) => (
          <WishlistItem
            key={item.id}
            item={item}
            onEdit={() => setEditingItem(item)}
          />
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
