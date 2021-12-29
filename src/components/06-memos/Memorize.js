import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';
import { Small } from './Small';

export const Memorize = () => {
  const [show, setShow] = useState(true);
  const { counter, increment } = useCounter(10);
  return (
    <div>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />
      <button className='btn btn-primary' onClick={increment}>
        +1
      </button>
      <button
        className='btn btn-outline-primary m-4'
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
