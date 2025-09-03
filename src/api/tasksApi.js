import axios from "axios";

const API = axios.create({ baseURL: "/" });

export const fetchTasks = () => API.get("/tasks");
export const createTask = (task) => API.post("/tasks", task);
export const updateTask = (id, updatedTask) =>
  API.put(`/tasks/${id}`, updatedTask);
