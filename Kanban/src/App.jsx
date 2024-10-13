import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Board from './components/Board';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import './index.css';
import ProtectedRoutes from './utilities/ProtectedRoutes.jsx';
import { useAuthStore } from './stores/auth.js';
import { useEffect } from 'react';
import RegisterForm from './components/RegisterForm.jsx';

function App() {

  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);
  const initLogin = useAuthStore((state) => state.initLogin);

  setTimeout(() => {
    console.log('user', user);
  }, 1000);

  useEffect(() => {
    initLogin();
  }, [initLogin]);

  return (
    <Router>
      <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <p>
          <Link className="text-3xl font-bold" to="/">Kanban Board</Link>
        </p>
        <nav>
          <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Login</Link>
          <Link to="/dashboard" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Dashboard</Link>
          <Link to="/register" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Register</Link>
        </nav>
        <button onClick={logout}>Log out</button>
      </div>

      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
