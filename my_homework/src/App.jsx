import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homeworkroom from './homeworkroom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>안녕하세요</div>
      <Homeworkroom />
    </>
  )
}

export default App
