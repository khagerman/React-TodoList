import React, { useState } from "react";

const Todo = ({ id, todo, deleteTodo }) => {
  return (
    <li>
      {todo} <button onClick={() => deleteTodo(id)}>x</button>
    </li>
  );
};
export default Todo;
