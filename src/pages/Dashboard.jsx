import React, { useEffect, useState } from "react";
import { fetchTasks, createTask, updateTask } from "../api/tasksApi";
import TaskColumn from "../components/TaskColumn";
import TaskFormModal from "../components/TaskFormModal";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const loadTasks = async () => {
    const res = await fetchTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleAddTask = async (task) => {
    const res = await createTask(task);
    setTasks((prev) => [...prev, res.data]);
  };

  const handleDrop = async (e, newStatus) => {
    const taskData = JSON.parse(e.dataTransfer.getData("task"));
    const updated = { ...taskData, status: newStatus };
    await updateTask(taskData.id, updated);
    setTasks((prev) => prev.map((t) => (t.id === taskData.id ? updated : t)));
  };

  const handleDragStart = (e, task) => {
    e.dataTransfer.setData("task", JSON.stringify(task));
  };

  const columns = ["To Do", "In Progress", "Done"];

  return (
    <div className="h-screen p-4 max-w-7xl mx-auto flex flex-col overflow-hidden">
      <div className="flex flex-col gap-y-4 md:flex-row md:justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Task Management Dashboard</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          + Add New Task
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-4 flex-1 md:overflow-hidden overflow-y-auto">
        {columns.map((status) => (
          <TaskColumn
            key={status}
            status={status}
            tasks={tasks.filter((t) => t.status === status)}
            onDrop={handleDrop}
            onDragStart={handleDragStart}
          />
        ))}
      </div>

      {showModal && (
        <TaskFormModal
          onClose={() => setShowModal(false)}
          onSave={handleAddTask}
        />
      )}
    </div>
  );
};

export default Dashboard;
