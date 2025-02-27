import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <Card userTopic="The Role of Social Media in Activism:" userText="Social platforms have empowered individuals to mobilize large-scale protests and awareness campaigns around global issues, blurring the lines between online and offline activism, but also raising concerns about misinformation and echo chambers."/>
      <Card userTopic="The Future of Space Exploration:" userText='With advancements in rocket technology, humanity is looking towards Mars colonization, asteroid mining, and further exploration of the solar system, opening new avenues for scientific discovery and potential resource extraction.'/>
      <Card userText='AI is rapidly transforming medicine, enabling faster diagnoses, personalized treatment plans, and even surgical assistance, raising ethical concerns about patient privacy and potential job displacement in the medical field.' userTopic='The Impact of Artificial Intelligence on Healthcare:'/>
      </>
  )
}

export default App
