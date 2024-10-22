function WishlistItem({ item }) {
  return (
    <div className="wishlist-item">
      <img src={item.imageUrl} alt={item.name} style={{ width: '100px', height: '100px' }} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <a href={item.link} target="_blank" rel="noopener noreferrer">Посилання</a>
    </div>
  );
}

export default WishlistItem;
