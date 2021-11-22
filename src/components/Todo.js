import { useState, useEffect } from "react";
import firebase from "../firebase.js";
import CreateTask from "./CreateTask";
import Task from "./Task";
const Todo = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // make a reference to our database
    const myDate = new Date(); // your date object
    myDate.setHours(myDate.getHours() + 24);
    console.log(myDate);

    const dbRef = firebase.database().ref("Todo");
    // add event listener to watch for changes to our database

    dbRef.on("value", (response) => {
      // variable to store a new state
      const data = response.val();
      const newTasks = [];

      for (let property in data) {
        console.log(data[property]);

        newTasks.push({ id: property, ...data[property] });
      }
      console.log(newTasks);

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
