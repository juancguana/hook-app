import React from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>
      <br />
      <div className='form-group'>
        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='Your name'
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className='form-group'>
        <input
          type='text'
          name='email'
          className='form-control'
          placeholder='example@email.com'
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div className='form-group'>
        <input
          type='password'
          name='password'
          className='form-control'
          placeholder='****'
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type='submit' className='btn btn-primary'>Save</button>
    </form>
  );
};
