import React, { useState } from "react";
import firebase from "../firebase.js";
const Task = ({ task }) => {
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
      className="taskItem"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      {!edit && (
        <>
          <div className="taskDescription">
            <p
              onClick={() => {
                completeTaskHandler();
              }}
              className="taskTodo"
            >
              {task.title}
            </p>
            <p className="taskTimeLeft">{`${hoursLeft()}h`}</p>
          </div>
          <div className="buttons">
            <button type="button" onClick={() => setEdit(true)}>
              <i class="far fa-edit fa-2x"></i>
            </button>
            <button
              onClick={() => {
                removeTaskHandler();
              }}
            >
              <i class="far fa-trash-alt fa-2x"></i>
            </button>
          </div>
        </>
      )}
      {edit && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            value={newTitle}
            autoFocus
            className="inputEdit"
          />
        </form>
      )}
    </li>
  );
};

export default Task;
