import { useState, useEffect } from "react";
import firebase from "../firebase.js";
import CreateTask from "./CreateTask";
import Task from "./Task";
const Todo = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    // make a reference to our database

    const dbRef = firebase.database().ref();
    // add event listener to watch for changes to our database
    dbRef.on("value", (response) => {
      // variable to store a new state
      const newTasks = [];
      const data = response.val();
      for (let property in data) {
        newTasks.push({
          completed: false,
          title: data[property],
          id: property,
        });
      }

      // update state with new state
      setTasks(newTasks);
    });
  }, []);

  const addTaskHandler = (task) => {
    const dbRef = firebase.database().ref();
    dbRef.push(task);
  };
  const completeTaskHandler = (index) => {
    const newTasks = [...tasks];
    if (!newTasks[index].completed) {
      newTasks[index].completed = true;
    } else {
      newTasks[index].completed = false;
    }
    setTasks(newTasks);
  };
  const removeTaskHandler = (id) => {
    const dbRef = firebase.database().ref();
    dbRef.child(id).remove();
    // const newTasks = [...tasks].filter((task) => task.id !== id);
    // setTasks(newTasks);
  };
  return (
    <div className="todo-container">
      <h2 className="header">TODO - ITEMS</h2>
      <ul className="tasks">
        {tasks.map((task, index) => {
          return (
            <Task
              task={task}
              key={task.id}
              completeTask={completeTaskHandler}
              removeTask={removeTaskHandler}
              index={index}
              id={task.id}
            />
          );
        })}
      </ul>
      <CreateTask addTask={addTaskHandler} />
    </div>
  );
};

export default Todo;
