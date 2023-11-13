import './App.css';
import { useState } from 'react';

const App = () => {
  const [num, setNum] = useState(0);
  const inc = () => setNum(num + 1);
  const dec = () => setNum(num - 1);
  return (
    <>
      <div className='counter-main'>
        <h1>{num}</h1>
        <div className='counter-btn'>
          <button onClick={inc}>Increment</button>
          <button onClick={dec}>Decrement</button>
        </div>
      </div>
    </>
  );
};

export default App;
