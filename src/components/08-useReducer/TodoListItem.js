import React from 'react';

const TodoListItem = ({ todo, index, handleToggle, handleDelete }) => {
  return (
    <li key={todo.id} className='list-group-item'>
      <p
        className={`${todo.done && 'complete'}`}
        onClick={() => handleToggle(todo.id)}
      >{`${index + 1}. ${todo.desc}`}</p>
      <button className='btn btn-danger' onClick={() => handleDelete(todo.id)}>
        Borrar
      </button>
    </li>
  );
};

export default TodoListItem;
