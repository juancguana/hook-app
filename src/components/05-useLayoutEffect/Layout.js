import React, { useLayoutEffect, useState } from 'react';
import { useRef } from 'react/cjs/react.development';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './effects.css';

export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote } = !!data && data[0];
  const [boxSize, setBoxSize] = useState({});
  const pTag = useRef();

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Layout effect</h1>
      <hr />
      <blockquote className='blockquote'>
        <p ref={pTag}>{quote}</p>
      </blockquote>
      <pre>{JSON.stringify(boxSize, null, 3)}</pre>
      <button className='btn btn-primary' onClick={increment}>
        Siguiente quote
      </button>
    </div>
  );
};
