import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './components/InputBox'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex flex-col justify-center items-center 
     bg-no-repeat bg-cover bg-[url(https://images.pexels.com/photos/41949/earth-earth-at-night-night-lights-41949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] 
     text-white h-screen w-full'>
      <h1 className='block font-bold text-4xl font-serif m-2'>Currency Convertor</h1>
      <div className='inline-block h-4/5 w-2/5 bg-white rounded bg-opacity-75'>
        <form className='w-11/12'>
          <div><InputBox/></div>
          <button className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-full border border-black w-28 h-12 bg-gray-200 rounded-lg z-10 text-black '>SWAP</button>
          <div><InputBox/></div>
          <button type='submit' className='border ml-6 bg-blue-800 h-12 w-full rounded-lg hover:bg-blue-600'>Submit</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default App
