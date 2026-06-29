import CreateTodo from "./pages/CreateTodo";
import UpdateTodo from "./pages/UpdateTodo";
import { Routes, Route } from "react-router-dom";
import TodoList from "./pages/TodoList";
import TodoDetails from "./pages/TodoDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoList />} />
      <Route path="/todo" element={<TodoDetails />} />
      <Route path="/create" element={<CreateTodo />} />
      <Route path="/update/:id" element={<UpdateTodo />} />
    </Routes>
  );
}

export default App;