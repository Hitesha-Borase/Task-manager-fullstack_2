import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);

  const API = "http://localhost:5000/tasks";

  const fetchTasks = async () => {
    const res = await axios.get(API);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleSubmit = async () => {
    if (!title.trim()) {
      alert("Title required");
      return;
    }

    if (editId !== null) {
      await axios.put(`${API}/${editId}`, {
        title,
        description,
      });
    } else {
      await axios.post(API, {
        title,
        description,
      });
    }

    setTitle("");
    setDescription("");
    setEditId(null);
    fetchTasks();
  };

  const editTask = (task) => {
    setTitle(task.title);
    setDescription(task.description);
    setEditId(task.id);
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchTasks();
  };

  const toggleTask = async (task) => {
    await axios.put(`${API}/${task.id}`, {
      completed: !task.completed,
    });
    fetchTasks();
  };

  return (
    <div className="container">
      <h2>Task Manager</h2>

     
      <div className="form">
        <input
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="addbtn" onClick={handleSubmit}>
          {editId ? "Update" : "Add"}
        </button>
      </div>

      
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Title</th>
            <th>Description</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>

       <tbody>
  {tasks.map((task) => (
    <tr key={task.id}>
      <td>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task)}
        />
      </td>

      <td className={task.completed ? "completed" : ""}>
        {task.title}
      </td>

      <td>{task.description}</td>

     
      <td>{task.createdAt}</td>

      <td>
        <button className="editbtn" onClick={() => editTask(task)}>
          Edit
        </button>

        <button className="delbtn" onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </td>
    </tr>
  ))}
</tbody>
      </table>
    </div>
  );
}

export default App;