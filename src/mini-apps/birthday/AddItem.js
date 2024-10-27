import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function AddItem({ onAdd, existingItem, onSave }) {
  const [name, setName] = useState(existingItem?.name || '');
  const [description, setDescription] = useState(existingItem?.description || '');
  const [imageUrl, setImageUrl] = useState(existingItem?.imageUrl || '');
  const [link, setLink] = useState(existingItem?.link || '');
  const [author, setAuthor] = useState(existingItem?.author || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: existingItem?.id || uuidv4(),
      name,
      description,
      imageUrl,
      link,
      author,
    };
    existingItem ? onSave(newItem) : onAdd(newItem);
    setName('');
    setDescription('');
    setImageUrl('');
    setLink('');
    setAuthor('');
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
      <input
        type="text"
        placeholder="Автор"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <button type="submit">{existingItem ? 'Зберегти' : 'Додати'}</button>
    </form>
  );
}

export default AddItem;
