//mini-apps/birthday/WishlistPage.js
import React from 'react';
import Wishlist from './Wishlist'; // Шлях до компонента вішлиста

function WishlistPage() {
  return (
    <div>
      <h1 className='pageTitle'>Сторінка Вішлиста</h1>
      <Wishlist />
    </div>
  );
}

export default WishlistPage;
