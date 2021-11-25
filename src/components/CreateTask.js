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
      dateTodoIsSet: Date.now(),
    };
    addTask(todo);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="createTask">
      <input
        type="text"
        className="input"
        value={value}
        placeholder="New Task..."
        onChange={handleChange}
      />
    </form>
  );
};

export default CreateTask;
