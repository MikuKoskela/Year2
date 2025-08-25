import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)





  return (
     <div>
      <Hello />
      <Bye />
    </div>
    
      
  )

}
export default App


function Hello(){
  return <p>Hello, React!</p>
}

function Bye(){
  return <p>Goodbye, React!</p>
}