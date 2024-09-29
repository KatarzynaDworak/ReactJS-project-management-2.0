import { useState } from 'react'
import { useCounterStore } from './store';
import Board from './components/Board'
import './index.css'
import Login from './components/Login';

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Board />
      <Login />
    </>
  )
}

export default App;
