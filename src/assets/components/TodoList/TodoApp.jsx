import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", done: false },
    {id: 2, text: "Learn JavaScript",done: false, },
  ]);

  const handleAdd = (text) => {
    setTodos([...todos, {id: Date.now(), text, done: false}]);
  }

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const handleToggle = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, done: !todo.done} : todo));
  };
  const doneCount = todos.filter((t) => t.done).length;
  const totalCount = todos.length;
  return (
  <div>
    <h1>To do List</h1>
    <p>{doneCount}/{totalCount} tasks completed.</p>
    <TodoInput onAdd={handleAdd}/>
    <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete}/>
  </div>
  );

};

export default TodoApp;
