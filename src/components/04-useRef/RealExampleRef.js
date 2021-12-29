import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import './effects.css';

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Real example ref</h1>
      <hr />
      {show && <MultipleCustomHooks />}
      <br />
      <button className='btn btn-primary' onClick={() => setShow(!show)}>
        Show/Hide
      </button>
    </div>
  );
};
