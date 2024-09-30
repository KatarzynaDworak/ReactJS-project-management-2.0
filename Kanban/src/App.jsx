import Board from './components/Board'
import './index.css'
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Board from './components/Board';

function App() {

  return (
    <Router>
      <Login />
      <Board />
    </Router>
  )
}

export default App;
