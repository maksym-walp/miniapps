import { useState } from 'react';

function AddItem({ onAdd }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, description, imageUrl, link });
    setName('');
    setDescription('');
    setImageUrl('');
    setLink('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Назва"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Опис"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Посилання на зображення"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Посилання на товар"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        required
      />
      <button type="submit">Додати</button>
    </form>
  );
}

export default AddItem;
