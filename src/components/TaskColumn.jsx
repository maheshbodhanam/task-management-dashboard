import React from "react";
import TaskCard from "./TaskCard";

const TaskColumn = ({ status, tasks, onDrop, onDragStart }) => {
  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => onDrop(e, status)}
      className="bg-gray-100 rounded w-full min-h-[400px] overflow-y-auto relative"
    >
      <h2 className="text-xl font-bold sticky bg-gray-100 top-0 p-4">
        {status}
      </h2>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onDragStart={onDragStart} />
      ))}
    </div>
  );
};

export default TaskColumn;
