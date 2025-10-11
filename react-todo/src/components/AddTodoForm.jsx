import React, { useState } from "react";

export default function AddTodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}
