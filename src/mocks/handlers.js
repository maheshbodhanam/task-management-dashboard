import { http } from "msw";

let tasks = [
  { id: "1", title: "Sample Task 1", status: "todo" },
  { id: "2", title: "Sample Task 2", status: "inprogress" },
];

export const handlers = [
  // GET all tasks
  http.get("http://localhost:3001/tasks", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(tasks));
  }),

  // POST a new task
  http.post("http://localhost:3001/tasks", async (req, res, ctx) => {
    const newTask = await req.json();
    newTask.id = Date.now().toString(); // mock ID
    tasks.push(newTask);
    return res(ctx.status(201), ctx.json(newTask));
  }),

  // PUT to update a task
  http.put("http://localhost:3001/tasks/:id", async (req, res, ctx) => {
    const { id } = req.params;
    const updatedTask = await req.json();
    tasks = tasks.map((task) =>
      task.id === id ? { ...task, ...updatedTask } : task
    );
    return res(ctx.status(200), ctx.json({ id, ...updatedTask }));
  }),
];
