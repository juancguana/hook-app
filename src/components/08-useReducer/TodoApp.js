import React, { useReducer } from 'react';
import './styles.css';
import { todoReducer } from './todoReducer';

const initialState = [
  {
    id: 1,
    desc: 'AprenderReact',
    done: false,
  },
];

export const TodoApp = () => {
  const [todos] = useReducer(todoReducer, initialState);

  console.log(todos);

  return (
    <div>
      <h1>Todo App</h1>
      <hr />
      <div className='row'>
        <div className='col-7'>
          <ul>
            {todos.map((todo, index) => (
              <li key={todo.id} className='list-group-item'>
                <p>{`${index + 1}. ${todo.desc}`}</p>
                <button className='btn btn-danger'>Borrar</button>
              </li>
            ))}
          </ul>
        </div>
        <div className='col-5'>
          <h4>Agregar TODO</h4>
          <hr />
          <form>
            <input
              type='text'
              name='description'
              className='form-control'
              placeholder='Aprender'
              autoComplete='off'
            />
            <button className='btn btn-outline-primary mt-1 w-100'>Agregar</button>
          </form>
        </div>
      </div>
    </div>
  );
};
