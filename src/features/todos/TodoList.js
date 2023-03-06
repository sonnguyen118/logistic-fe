import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo } from './todosSlice';

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  function handleToggle(id) {
    dispatch(toggleTodo(id));
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => handleToggle(todo.id)}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
