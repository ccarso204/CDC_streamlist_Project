import { useState } from 'react';

function StreamList() {
  const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.trim()) {
      console.log(`Added to StreamList: ${item}`);
      setItem('');
    }
  };

  return (
    <div className="container">
      <h1>My StreamList</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a movie or show"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default StreamList;
