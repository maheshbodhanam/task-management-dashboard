# 🗂️ Task Management Dashboard (Kanban-style) - React + JSON Server

A simple and responsive Kanban-style task management dashboard built with React and Tailwind CSS. It allows users to add, view, and manage tasks across three columns: **To Do**, **In Progress**, and **Done**.

## 🚀 Features

- Add new tasks with title, description, and status.
- Drag and drop tasks between columns.
- Responsive design (mobile and desktop-friendly).
- Uses `json-server` to simulate a RESTful API backend.

---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend (Mock API):** json-server
- **State Management:** React Hooks (useState, useEffect)
- **Others:** Axios for API requests

---

## 📦 Getting Started


**1. Clone the Repository**
```
git clone https://github.com/maheshbodhanam/task-management-dashboard.git
```
```
cd task-management-dashboard
```
**2. Install Dependencies**
```
npm install
```
**3. Start Mock Backend (json-server)**

```
npx json-server --watch db.json --port 3001
```
Make sure db.json is at the project root and looks like this:
```
{
  "tasks": [
    { "id": 1, "title": "Task One", "description": "Test desc", "status": "To Do" }
  ]
}
```
**4. Start the React App**
```
npm start
```
Your app will be live at http://localhost:3000.

## 📁 Folder Structure

```
src/
├── api/
│   └── tasksApi.js     # Axios API calls
├── components/
│   ├── TaskCard.jsx    # Individual draggable task
│   ├── TaskColumn.jsx  # Task column by status
│   └── TaskFormModal.jsx  # Modal form for adding new task
├── pages/
│   └── Dashboard.jsx   # Main dashboard
├── App.jsx
├── index.jsx
└── index.css

```

## 🧠 Approach

Tasks are fetched from json-server and stored in local state.

Drag-and-drop is handled with native HTML5 dataTransfer.

Task updates are sent to the server on drop.

Component structure follows a logical breakdown by concern: form, card, column, and layout.
