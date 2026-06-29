import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await API.get("/todos");
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo List</h1>
      <Link to="/create">
  <button>Create Todo</button>
</Link>

<br /><br />

      {todos.length === 0 ? (
        <p>No Todos Found</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <Link to={`/todo?id=${todo.id}`}>
                {todo.title}
              </Link>
              {" "}
              {todo.completed ? "✅" : "❌"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;