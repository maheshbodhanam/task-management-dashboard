import { http, HttpResponse } from "msw";

let tasks = [
  { id: 1, title: "Task One", description: "Test desc", status: "To Do" },
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
