import { useState, useEffect,useCallback} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [length,setLength]=useState(8)
  const [numAllowed,setNumAllowed]=useState(true)
  const [charAllowed,setCharAllowed]=useState(true)
  const [password, setPassword]=useState("")
  const passwordGenerator= useCallback(()=>{
    let str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let pass=''
        if(numAllowed) str+='1234567890'
        if(charAllowed) str+='!@#$%^&*()_+=-{}[]?'
        for (let i = 0; i < length; i++) {
            pass+=str.charAt(Math.floor(Math.random()*str.length))
        }
        setPassword(pass)
  },[length,numAllowed,charAllowed])

  useEffect(()=>{passwordGenerator()}, [length, numAllowed, charAllowed])

  return (
    <>
    <div className='text-center text-white border border-white border-solid w-11/12 ml-8 bg-gray-900 m-0 rounded-2xl overflow-hidden h-56'>
        <br/>
        <h1 className='text-4xl'>Password Generator</h1>
        <br/>
        <span><input 
        type='text'
        className='w-4/6 h-12 text-black' value={password}>
        </input>
        <button id="button" className='bg-orange-500 h-14 rounded-xl w-16'>Copy</button></span>
        <br/><br/>
        <label className='text-white ml-2'>Length {length}<input value={length} 
        onChange={(e) => setLength(Number(e.target.value))} 
        className='ml-1'id="lengthPassword"type='range' min="0" max="100"/></label>
        <label className='text-white ml-2'><input checked={numAllowed} onChange={() => setNumAllowed((prev) => !prev)} id='numAllowed' type='checkbox'/>Numbers {numAllowed}</label>
        <label className='text-white ml-1'><input checked={charAllowed} onChange={() => setCharAllowed((prev) => !prev)} id='charAllowed' type='checkbox'/>Characters</label>
        </div>
      </>
  )
}

export default App
