import { http, HttpResponse } from "msw";

let tasks = [
  {
    id: "1",
    title: "Task One",
    description: "Test desc",
    status: "To Do",
  },
  {
    id: "2",
    title: "Task Two",
    description: "Test desc",
    status: "In Progress",
  },
  {
    id: "3",
    title: "Task Three",
    description: "Test desc",
    status: "Done",
  },
  {
    id: "4",
    title: "Task Four",
    description: "Test desc",
    status: "To Do",
  },
  {
    id: "5",
    title: "Task Five",
    description: "Test desc",
    status: "In Progress",
  },
  {
    id: "6",
    title: "Task Six",
    description: "Test desc",
    status: "Done",
  },
  {
    id: "7",
    title: "Task Seven",
    description: "Test desc",
    status: "To Do",
  },
  {
    id: "8",
    title: "Task Eight",
    description: "Test desc",
    status: "In Progress",
  },
  {
    id: "9",
    title: "Task Nine",
    description: "Test desc",
    status: "Done",
  },
  {
    id: "10",
    title: "Task Ten",
    description: "Test desc",
    status: "To Do",
  },
  {
    id: "11",
    title: "Task Eleven",
    description: "Test desc",
    status: "In Progress",
  },
  {
    id: "12",
    title: "Task Twelve",
    description: "Test desc",
    status: "Done",
  },
  {
    id: "13",
    title: "Task Thirteen",
    description: "Test desc",
    status: "To Do",
  },
  {
    id: "14",
    title: "Task Fourteen",
    description: "Test desc",
    status: "In Progress",
  },
  {
    id: "15",
    title: "Task Fifteen",
    description: "Test desc",
    status: "Done",
  },
  {
    id: "16",
    title: "Task Sixteen",
    description: "Test desc",
    status: "To Do",
  },
  {
    id: "17",
    title: "Task Seventeen",
    description: "Test desc",
    status: "In Progress",
  },
  {
    id: "18",
    title: "Task Eighteen",
    description: "Test desc",
    status: "Done",
  },
];

// GET all tasks
export const handlers = [
  http.get("/tasks", () => {
    return HttpResponse.json(tasks);
  }),

  // POST create task
  http.post("/tasks", async ({ request }) => {
    const newTask = await request.json();
    newTask.id = Date.now(); // generate unique ID
    tasks.push(newTask);
    return HttpResponse.json(newTask);
  }),

  // PUT update task
  http.put("/tasks/:id", async ({ params, request }) => {
    const { id } = params;
    const updatedTask = await request.json();
    tasks = tasks.map((t) => (t.id === parseInt(id) ? updatedTask : t));
    return HttpResponse.json(updatedTask);
  }),
];
