import './Counter.css';
import { useState } from 'react';


const Counter = () => {
    const [theme, setTheme] = useState('light');
    const [counter, setCounter] = useState(0);

  const handleToggle = () => setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')

  return (
      <div className={`state ${theme}`}>
        <h1>UseState Component</h1>
      <button onClick={() =>setTheme('dark')}>Dark</button>
      <button onClick={() =>setTheme('light')}>Light</button>
     
      <button onClick={handleToggle}>Toggle Theme</button>

     
      <h2>{counter}</h2>
      <button onClick={() =>setCounter(counter+1)}>
        Increment
      </button>
      <button onClick={() =>setCounter(counter-1)}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
