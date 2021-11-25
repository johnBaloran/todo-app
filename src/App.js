import { useState } from "react";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
function App() {
  const [complete, setComplete] = useState(0);
  const [incomplete, setIncomplete] = useState(0);

  const handleComplete = (tasksArr) => {
    // get number of complete tasks from array
    const completeNumber = tasksArr.filter((task) => task.completed).length;
    // get number of incompleted tasks
    const incompleteNumber = tasksArr.length - completeNumber;
    // update state function
    setComplete(completeNumber);
    setIncomplete(incompleteNumber);
  };

  return (
    <div className="App wrapper">
      <Navbar complete={complete} incomplete={incomplete} />
      <Todo handleComplete={handleComplete} />
    </div>
  );
}

export default App;
