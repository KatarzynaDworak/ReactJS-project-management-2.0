// import { useState } from 'react'
import { useCounterStore } from './store';
// import Board from './components/Board'
import './index.css'

function App() {
  // const [count, setCount] = useState(0)
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);


  return (
    <>
    <h1>Count: {count}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
      {/* <Board /> */}
    </>
  )
}

export default App;
