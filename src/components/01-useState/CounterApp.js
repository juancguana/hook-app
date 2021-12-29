import React, { useState } from 'react';
import './counter.css';
export const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
  });

  const { counter1, counter2 } = state;

  return (
    <>
      <h1>Counter1 {counter1} </h1>
      <h1>Counter1 {counter2} </h1>

      <br />
      <button
        className='btn btn-primary'
        onClick={() => {
          setState({ ...state, counter1: counter1 + 1 });
        }}
      >
        +1
      </button>
    </>
  );
};
