import { useState, useEffect } from "react";
import firebase from "../firebase.js";
import CreateTask from "./CreateTask";
import Task from "./Task";
const Todo = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // make a reference to our database
    const dbRef = firebase.database().ref("Todo");
    // add event listener to watch for changes to our database

    dbRef.on("value", (response) => {
      // variable to store a new state
      const data = response.val();
      const newTasks = [];
      const dateAppIsUsed = Date.now(); // date now in milliseconds since 1970
      for (let property in data) {
        if (dateAppIsUsed - data[property].dateTodoIsSet > 86400000) {
          const dbRef = firebase.database().ref("Todo");
          dbRef.child(property).remove();
        }

        newTasks.push({ id: property, ...data[property] });
      }

      // update state with new state
      setTasks(newTasks);
    });
  }, []);

  const addTaskHandler = (task) => {
    const dbRef = firebase.database().ref("Todo");
    dbRef.push(task);
  };

  return (
    <div className="todo-container">
      <h2 className="header">TODO - ITEMS</h2>
      <CreateTask addTask={addTaskHandler} />

      <ul className="tasks">
        {tasks.length >= 1 ? (
          tasks.map((task) => <Task task={task} key={task.id} id={task.id} />)
        ) : (
          <h2>"Hooray You're Free For Today"</h2>
        )}
      </ul>
    </div>
  );
};

export default Todo;
