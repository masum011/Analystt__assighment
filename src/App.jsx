import React, { useState, useEffect } from 'react';
import './App.css';
function App() {
  const [count, setCount] = useState(0);
  // for tsx
  // const [count, setCount] = useState<Number>(0);

  useEffect(() => {
    console.log('Component mounted');
  }, []);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    console.log('State changed: count = ' + count);
  }, [count]);

  return (
    <div className='contaner'>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Add</button>
    </div>
  );
}

export default App;
