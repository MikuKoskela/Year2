import "./App.css";
import Random from "./random";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>      

    </div>
  );
}

export default App;
