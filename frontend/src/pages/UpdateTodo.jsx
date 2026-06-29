import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";

function UpdateTodo() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    API.get(`/todos/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setDescription(response.data.description);
        setCompleted(response.data.completed);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/todos/${id}`, {
        title,
        description,
        completed,
      });

      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Failed to update todo");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Update Todo</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Description</label>
          <br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>
            <input
              type="checkbox"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            />
            Completed
          </label>
        </div>

        <br />

        <button type="submit">Update Todo</button>
      </form>
    </div>
  );
}

export default UpdateTodo;