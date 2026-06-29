
import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import API from "../services/api";

function TodoDetails() {

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    API.get(`/todos/${id}`)
      .then((response) => setTodo(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!todo) return <h2>Loading...</h2>;
  const handleDelete = async () => {
  try {
    await API.delete(`/todos/${todo.id}`);
    navigate("/");
  } catch (error) {
    console.error(error);
    alert("Failed to delete todo");
  }
};
  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo Details</h1>

      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      <p>Status: {todo.completed ? "Completed ✅" : "Pending ❌"}</p>
   <br />
<br />

<button onClick={handleDelete}>
  Delete Todo
</button>

<Link to={`/update/${todo.id}`}>
  <button>Edit Todo</button>
</Link>
    </div>
  );
}

export default TodoDetails;