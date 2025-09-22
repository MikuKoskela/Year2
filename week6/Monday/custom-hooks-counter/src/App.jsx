import SingleCounter from './singleCounter';
import './App.css'
import { useState } from 'react';
import useField from './useField';
import useLocalStorage from './useLocalStorage';

const App = () => {
  const [name, setName] = useLocalStorage('name', '');
  const nameInput = useField('text');
  const bornInput = useField('date');
  const heightInput = useField('number');


    const handleSubmit = (event) => {
   

 event.preventDefault();
    // You can handle form submission logic here
  };

  return (
    <div>
       <div className="app-container">
          <SingleCounter/>
          <SingleCounter/>
          <SingleCounter/>
        </div>
        <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Your name is stored in localStorage: {name}</p>
    </div>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input {...nameInput} />
        </div>
        <br/>
        <div>
          Birthdate: <input {...bornInput} />
        </div>
        <br/>
        <div>
          Height: <input {...heightInput} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        {nameInput.value} {bornInput.value} {heightInput.value}
      </div>
    </div>
  );
};

export default App;