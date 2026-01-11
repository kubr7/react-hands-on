import { useTodos } from "./hooks/useTodos";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/todo.css";

function App() {
  const {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    filter,
    setFilter,
  } = useTodos();

  return (
    <div className="app-container">
      <Header />
      <div className="todo-app">
        <TodoInput onAdd={addTodo} />
        <TodoFilter filter={filter} setFilter={setFilter} />
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
