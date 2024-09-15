import { useState } from 'react'
import Board from './components/Board'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Board />
    </>
  )
}

export default App
