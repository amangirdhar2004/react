import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let c=0
  let [counter,setCounter]= useState(c);
  const addValue= ()=> {
    counter+=1
    setCounter(counter)
  }
  const decreaseValue= ()=> {
    counter-=1
    setCounter(counter)
  }
  return (
    <>
    
    <p>Aman learns react</p>
    <h1> reach</h1>
    <h3>The counter variable is: <span>{counter}</span></h3>
    <button onClick={addValue}>add value</button>
    <button onClick={decreaseValue}>decrease value</button>
    
    </>
  )
}

export default App
