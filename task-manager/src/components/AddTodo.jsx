import { useState } from "react";
import "./AddTodo.css";

export function AddTodo({ addTodo }) {
  const [title, setTitle] = useState("");

  const getTodoTitle = (event) => {
    const title = event.target.value;
    setTitle(title);
  };

  const AddTodo = () => {
    if (title.trim() === "") {
      return;
    }
    addTodo(title);
    setTitle("");
  };

  const OnKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (title.trim() === "") {
        return;
      }
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <div className="addtodo-container">
      <textarea
        className="todo-title"
        placeholder="Enter task..."
        onChange={getTodoTitle}
        value={title}
        onKeyDown={OnKeyDown}
      ></textarea>
      <button className="add-btn" onClick={AddTodo}>
        Add
      </button>
    </div>
  );
}
