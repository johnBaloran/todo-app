import { useState } from "react";

const CreateTask = ({ addTask }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    const todo = {
      title: value,
      completed: false,
    };
    addTask(todo);

    setValue("");
  };
  return (
    <form onSubmit={handleSubmit} className="create-task">
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add a new task"
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default CreateTask;
