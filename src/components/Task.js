import React, { useState } from "react";
import firebase from "../firebase.js";

import CreateTask from "./CreateTask";

const Task = ({ task, id }) => {
  const [edit, setEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const completeTaskHandler = () => {
    const dbRef = firebase.database().ref("Todo").child(id);
    dbRef.update({ completed: !task.completed });
  };
  const removeTaskHandler = () => {
    const dbRef = firebase.database().ref("Todo");
    dbRef.child(id).remove();
  };

  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const dbRef = firebase.database().ref("Todo").child(id);
    dbRef.update({
      title: newTitle,
    });
    setEdit(false);
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
