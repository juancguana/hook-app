import React from 'react';
import './counter.css';
import { useCounter } from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter();
  return (
    <>
      <h1>Counter with hook: {state}</h1>
      <br />
      <button onClick={() => decrement(2)} className='btn btn-primary' onClic>
        -1
      </button>
      <button onClick={() => reset(2)} className='btn btn-primary'>
        reset
      </button>
      <button onClick={() => increment(2)} className='btn btn-primary'>
        +1
      </button>
    </>
  );
};
