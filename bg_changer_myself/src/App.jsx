import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col place-content-center rounded-2xl bg-blue-500 w-5/6 h-12 ml-20 mt-96'>
      <span className='bg-slate-400 flex'><button className='outline-1 text-opacity-0 text-gray-400 bg-black rounded-xl font-'>Click Me</button></span>
      </div>
    </>
  )
}

export default App
