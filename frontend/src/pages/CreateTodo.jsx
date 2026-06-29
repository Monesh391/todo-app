import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function CreateTodo() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/todos", {
        title,
        description,
        completed,
      });

      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Failed to create todo");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Create Todo</h1>

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

        <button type="submit">Create Todo</button>
      </form>
    </div>
  );
}

export default CreateTodo;