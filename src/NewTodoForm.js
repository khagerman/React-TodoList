import React, { useState } from "react";
// import "./NewTodoForm.css";

const NewTodoForm = ({ addTodo }) => {
  const INITIAL_STATE = { todo: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);
  // add item and reset form
  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTodo(formData);
    setFormData(INITIAL_STATE);
  };
  // get data from form and make into object
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">New To Do:</label>
      <input
        id="todo"
        name="todo"
        value={formData.todo}
        onChange={handleChange}
      />

      <button>Add a new To Do!</button>
    </form>
  );
};

export default NewTodoForm;
