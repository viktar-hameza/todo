import React from 'react';
import "./TodoListItem.css"

const TodoListItem = ({ label, important = false }) => {
  const spanStyle = {
    color: important ? 'tomato' : 'black'
  };
  return (
    <span style={spanStyle} className="todo-list-item">{label}</span>
  );
};

export default TodoListItem;