import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";
import { v4 as uuid } from "uuid";

const TodoList = () => {
  const [todos, setTodo] = useState([]);

  const renderTodos = () => {
    return (
      <div>
        <ul>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              todo={todo.todo}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </div>
    );
  };

  const addTodo = (todo) => {
    let newTodo = { ...todo, id: uuid() };
    setTodo((todos) => [...todos, newTodo]);
  };
  const deleteTodo = (id) => {
    setTodo(todos.filter((t) => t.id !== id));
  };
  return (
    <div className="TodoList">
      <NewTodoForm addTodo={addTodo} />
      {renderTodos()}
    </div>
  );
};

export default TodoList;
