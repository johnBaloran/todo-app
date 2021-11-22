import React, { useState } from "react";
import firebase from "../firebase.js";

import CreateTask from "./CreateTask";

const Task = ({ task, date }) => {
  const [edit, setEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const completeTaskHandler = () => {
    const dbRef = firebase.database().ref("Todo");
    dbRef.child(task.id).update({ completed: !task.completed });
  };
  const removeTaskHandler = () => {
    const dbRef = firebase.database().ref("Todo");
    dbRef.child(task.id).remove();
  };

  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const dbRef = firebase.database().ref("Todo").child(task.id);
    dbRef.update({
      title: newTitle,
    });
    setEdit(false);
  };

  const hoursLeft = () => {
    const dateAppIsUsed = Date.now(); // date now in milliseconds since 1970
    return (24 - Number(dateAppIsUsed - task.dateTodoIsSet) / 3600000).toFixed(
      0
    );
  };

  return (
    <li
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      {!edit && (
        <>
          <p
            onClick={() => {
              completeTaskHandler();
            }}
          >
            {task.title}
          </p>
          <p>{`${hoursLeft()}h`}</p>
          <button type="button" onClick={() => setEdit(true)}>
            edit
          </button>
          <button
            onClick={() => {
              removeTaskHandler();
            }}
          >
            remove
          </button>
        </>
      )}
      {edit && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            value={newTitle}
            autoFocus
          />
          <button type="submit">Edit</button>
        </form>
      )}
    </li>
  );
};

export default Task;
