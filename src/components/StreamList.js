import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faCheck } from "@fortawesome/free-solid-svg-icons";
import "./StreamList.css";

function StreamList() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    if (editingIndex !== null) {
      const updated = [...items];
      updated[editingIndex] = input;
      setItems(updated);
      setEditingIndex(null);
    } else {
      setItems([...items, input]);
    }
    setInput("");
  };

  const handleEdit = (index) => {
    setInput(items[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleComplete = (index) => {
    const updated = [...items];
    updated[index] = "✅ " + updated[index];
    setItems(updated);
  };

  return (
    <div className="streamlist-container">
      <h2>My Stream List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a movie or show"
        />
        <button type="submit">{editingIndex !== null ? "Update" : "Add"}</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <span className="icon-bar">
              <FontAwesomeIcon icon={faPen} onClick={() => handleEdit(index)} />
              <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(index)} />
              <FontAwesomeIcon icon={faCheck} onClick={() => handleComplete(index)} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;