import "./HomePage.css";
import { AddTodo } from "../../components/AddTodo";
import { TodoList } from "../../components/TodoList";
import { SwitchTheme } from "../../components/SwitchTheme";

export function HomePage({ todos, addTodo }) {
  return (
    <div className="homepage-container">
      <TodoList todos={todos} />
      <div className="right-wrapper">
        <AddTodo addTodo={addTodo} />
        <SwitchTheme />
      </div>
    </div>
  );
}
