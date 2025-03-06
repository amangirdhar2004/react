import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let arr=["1","2","3","4","5","aman", "reya", "CGC", "React", "Tailwind"]

  return (
    <>
      <div className="flex flex-col items-center gap-4 p-6">
      {arr.map((item) => (
        <Card title={item} />
      ))}
    </div>
      <Card text="Captures high-resolution images of distant galaxies, stars, and planets, helping astronomers study the universe's evolution." title="Hubble Space Telescope (HST)"/>
      <Card text="A phonograph record aboard Voyager 1 & 2 carrying sounds and images from Earth, intended for potential extraterrestrial life." title="Voyager Golden Record "/>
      <Card text="Maps the Moon’s surface in detail, aiding in lunar exploration and landing site selection." title="Lunar Reconnaissance Orbiter (LRO) Camera"/>
      <Card text="Observes high-energy cosmic events like black holes and supernovae using X-ray detection." title="Chandra X-ray Observatory"/>
      <Card text="Converts Mars’ carbon dioxide-rich atmosphere into oxygen, testing technology for future human exploration." title="Perseverance Rover's MOXIE"/>
    </>
  )
}

export default App
