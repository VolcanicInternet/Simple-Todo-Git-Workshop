import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";

const initialStateTodos = [
  { id: 1, title: "Complete online Javascript curse", completed: true },
  { id: 2, title: "Jog aroung the park 3x", completed: false },
  { id: 3, title: "10 minutes meditation", completed: false },
  { id: 4, title: "Pick up groceries", completed: false },
  { id: 5, title: "Complete Todo app and Frontend Mentor", completed: false },
];
function App() {
  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodos = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const itemLeft = todos.filter((todo) => !todo.completed).length;
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState("all");
  const cambiofiltro = (filter) => setFilter(filter);

  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        break;
    }
  };

  return (
    <div className=" min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <Header />
      <main className="container mx-auto mt-8 px-4">
        <TodoCreate createTodo={createTodo} />
        <TodoList
          todos={filteredTodos()}
          removeTodo={removeTodo}
          updateTodos={updateTodos}
        />
        <TodoComputed itemLeft={itemLeft} clearCompleted={clearCompleted} />
        <TodoFilter cambiofiltro={cambiofiltro} />
      </main>

      <footer className=" mt-8 text-center">
        Drag and drop to reorder list
      </footer>
    </div>
  );
}

export default App;
