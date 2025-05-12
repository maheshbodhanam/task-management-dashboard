import React from "react";

const TaskCard = ({ task, onDragStart }) => {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, task)}
      className="bg-white p-4 rounded shadow mb-2 mx-2 cursor-grab"
    >
      <h4 className="font-semibold">{task.title}</h4>
      <p className="text-sm text-gray-500">{task.description}</p>
    </div>
  );
};

export default TaskCard;
