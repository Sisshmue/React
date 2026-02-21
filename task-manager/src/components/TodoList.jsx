import "../components/TodoList.css";

export function TodoList({ todos }) {
  return (
    <ul className="todolist-container">
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <input type="checkbox" />
            {todo.title}
          </li>
        );
      })}
    </ul>
  );
}
