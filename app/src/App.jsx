import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ImageSlider from './components/ImageSlider/ImageSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <ImageSlider></ImageSlider>
    </div>
  )
}

export default App
