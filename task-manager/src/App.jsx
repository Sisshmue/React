import "./App.css";
import { HomePage } from "../src/pages/home/HomePage";
import { Route, Routes, UNSAFE_useFogOFWarDiscovery } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchtodos = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    setTodos(response.data);
  };

  const addTodo = (newTitle) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title: newTitle,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  useEffect(() => {
    fetchtodos();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage todos={todos}  addTodo={addTodo}/>} />
    </Routes>
  );
}

export default App;
