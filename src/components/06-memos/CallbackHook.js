import React, { useCallback, useState } from 'react';
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(
    (num) => {
      setCounter((counter) => counter + num);
    },
    [setCounter]
  );

  return (
    <div>
      <h1>UseCallbackHook: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  );
};
