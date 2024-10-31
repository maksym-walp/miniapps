function WishlistItem({ item }) {
  const truncatedDescription = item.description.length > 64
    ? item.description.slice(0, 64) + "..." 
    : item.description;

  return (
    <div className="wishlist-item">
      <img src={item.imageUrl} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{truncatedDescription}</p>
      <a href={item.link} target="_blank" rel="noopener noreferrer">Посилання</a>
    </div>
  );
}

export default WishlistItem;
