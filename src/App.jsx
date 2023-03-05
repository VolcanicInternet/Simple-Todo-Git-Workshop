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
  { id: 5, title: "Complete Todo app an Fronted Mentor", completed: false },
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

  return (
    <div className=" min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <Header />
      <main className="container mx-auto mt-8 px-4">
        <TodoCreate createTodo={createTodo} />
        <TodoList todos={todos} />
        <TodoComputed />
        <TodoFilter />
      </main>

      <footer className=" mt-8 text-center">
        Drag and drop to reorder list
      </footer>
    </div>
  );
}

export default App;
