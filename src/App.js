import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <AddTodo />
      <Todo />
    </div>
  );
}
