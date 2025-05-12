
---

# ✅ 3. **Self-Evaluation Document**


## 🧾 Self-Evaluation: Task Management Dashboard (React)

## a. Half-Page Summary

- This project is a fully functional, client-side Kanban-style task management dashboard. It uses React for the UI and `json-server` to simulate backend operations such as task creation and updates. Tasks can be added via a modal form and dragged across columns (To Do, In Progress, Done). 

- The drag-and-drop behavior is achieved using simple HTML5 events rather than external libraries, keeping the solution lightweight. Tailwind CSS ensures the UI is responsive and modern.

- The project fulfills the core requirements — task CRUD, column view, and drag-and-drop interaction — in a clean and intuitive interface.

## b. Self-Criticism

- **No real authentication**: Any user can access and manipulate tasks without restriction.
- **No persistent state** beyond the mock API — refreshing after API failure could cause data loss.
- **Error handling is missing** for API calls (no try/catch or user alerts).
- **Drag-and-drop UX could be enhanced** using libraries like `react-beautiful-dnd`.

## c. Improvements with More Time

- Add real authentication (e.g., Firebase Auth).
- Improve drag-and-drop with better feedback using `react-beautiful-dnd` or `dnd-kit`.
- Use context or Redux for global state instead of local component state.
- Add task editing and deletion capabilities.

## d. Technology Rating (Out of 10)

| Technology       | Self Rating |
|------------------|-------------|
| React            | 9/10        |
| Tailwind CSS     | 8.5/10      |
| Axios            | 9/10        |
| json-server      | 8/10        |
| Drag & Drop (native) | 7.5/10  |

