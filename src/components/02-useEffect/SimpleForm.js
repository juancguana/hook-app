import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './effects.css';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log('hey');
  }, []);

  useEffect(() => {
    console.log('state changed');
  }, [formState]);

  useEffect(() => {
    console.log('email changed');
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };
  return (
    <>
      <h1>useEffect</h1>
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
      {name === '123' && <Message />}
    </>
  );
};
