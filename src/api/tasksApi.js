import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3001" });

export const fetchTasks = () => API.get("/tasks");
export const createTask = (task) => API.post("/tasks", task);
export const updateTask = (id, updatedTask) =>
  API.put(`/tasks/${id}`, updatedTask);
