import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { text: "Learn React", completed: false },
    { text: "Build Todo App", completed: false }
  ]);

  const addTodo = (text) => setTodos([...todos, { text, completed: false }]);
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };
  const deleteTodo = (index) => setTodos(todos.filter((_, i) => i !== index));

  return (
    <div>
      <AddTodoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer"
              }}
              onClick={() => toggleTodo(index)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
