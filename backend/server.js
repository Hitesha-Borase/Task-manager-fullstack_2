const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [];


app.get("/tasks", (req, res) => {
  res.json(tasks);
});


app.post("/tasks", (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ error: "Title required" });
  }

  const task = {
    id: Date.now(),
    title: req.body.title,
    description: req.body.description || "",
    completed: false,
    createdAt: new Date().toLocaleString(), 
  };

  tasks.push(task);
  res.json(task);
});


app.put("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);

  tasks = tasks.map((t) => {
    if (t.id === id) {
      return {
        ...t,
        title: req.body.title !== undefined ? req.body.title : t.title,
        description:
          req.body.description !== undefined
            ? req.body.description
            : t.description,
        completed:
          req.body.completed !== undefined
            ? req.body.completed
            : t.completed,
      };
    }
    return t;
  });

  res.json({ message: "Updated successfully" });
});


app.delete("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter((t) => t.id !== id);

  res.json({ message: "Deleted" });
});


app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});