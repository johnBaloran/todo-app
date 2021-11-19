import React, { useState } from "react";

const Task = ({ task, completeTask, removeTask, index, id }) => {
  return (
    <li
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      <p> {task.title}</p>
      <button
        onClick={() => {
          completeTask(index);
        }}
      >
        {!task.completed ? "finished" : "unfinished"}
      </button>
      <button
        onClick={() => {
          removeTask(id);
        }}
      >
        remove
      </button>
    </li>
  );
};

export default Task;
