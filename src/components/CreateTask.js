import { useState } from "react";

const CreateTask = ({ addTask }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;

    addTask(value);

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
    </form>
  );
};

export default CreateTask;
