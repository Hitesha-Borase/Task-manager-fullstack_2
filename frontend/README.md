# 📌 Task Manager (Full Stack Project)

## 📖 Project Description

This is a simple **Task Manager Application** built using:

* **Frontend:** React.js
* **Backend:** Node.js + Express

The application allows users to manage daily tasks with features like adding, editing, deleting, and marking tasks as completed.

---

## 🚀 Features

* ➕ Add new tasks (Title + Description)
* ✏️ Edit existing tasks
* ❌ Delete tasks
* ✅ Mark tasks as completed using checkbox
* 📋 View tasks in table format
* 🔄 Real-time updates (without page reload)

---

## 🛠️ Tech Stack

* **Frontend:** React.js, CSS
* **Backend:** Node.js, Express.js
* **API Communication:** Axios

---

## 📂 Project Structure

task-manager-fullstack/
│
├── backend/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
│
└── README.md

---

## ⚙️ Installation & Setup

### 🔹 Step 1: Clone Project

```bash
git clone <your-repo-link>
cd task-manager-fullstack
```

---

### 🔹 Step 2: Setup Backend

```bash
cd backend
npm install
node server.js
```

Backend will run on:

```
http://localhost:5000
```

---

### 🔹 Step 3: Setup Frontend

```bash
cd frontend
npm install
npm start
```

Frontend will run on:

```
http://localhost:3000
```

---

## 🔌 API Endpoints

| Method | Endpoint   | Description     |
| ------ | ---------- | --------------- |
| GET    | /tasks     | Fetch all tasks |
| POST   | /tasks     | Add new task    |
| PUT    | /tasks/:id | Update task     |
| DELETE | /tasks/:id | Delete task     |

---

## 🖥️ Usage

1. Enter **Title and Description**
2. Click **Add** to create a task
3. Use checkbox to mark task as complete
4. Click **Edit** to update task
5. Click **Delete** to remove task

---

## 🎯 Future Improvements

* Add database (MongoDB)
* User authentication (Login/Signup)
* Task priority & due date
* Filter tasks (Completed / Pending)
* Better UI design

---

## 👩‍💻 Author

**Hitesha Borse**

---

## 📄 License

This project is for educational purposes.
