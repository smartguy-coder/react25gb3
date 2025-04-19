import React, { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ setItems }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(itemText);
    if (!itemText) {
      inputRef.current.focus();
      return;
    }

    const newItem = {
      name: itemText,
      packed: false,
      id: new Date().getTime(),
    };
    setItems((items) => [...items, newItem]);
    setItemText("");
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Item</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Item name"
        onChange={(e) => {
          setItemText(e.target.value);
        }}
        value={itemText}
        autoFocus
      />
      <Button>Add to list</Button>
    </form>
  );
}
