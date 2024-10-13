import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainBoard from './pages/MainBoard.jsx';
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
      <div className="flex justify-between items-center p-4 bg-indigo-900 text-white">
        <p>
          <Link className="text-3xl font-bold" to="/">Management Board</Link>
        </p>
        <nav>
          {/* Przycisk "Login" */}
          {!user && (
            <Link to="/login" className="bg-white hover:bg-indigo-200 text-indigo-600 font-semibold py-2 px-4 rounded">Login</Link>
          )}

          {/* Przycisk "Register" */}
          {!user && (
            <Link to="/register" className="bg-white hover:bg-indigo-200 text-indigo-600 font-semibold py-2 px-4 rounded">Register</Link>
          )}

          {/* Przycisk "Dashboard" widoczny tylko po zalogowaniu */}
          {user && (
            <Link to="/dashboard" className="bg-white hover:bg-indigo-200 text-indigo-600 font-semibold py-2 px-4 rounded">Your projects board</Link>
          )}
        </nav>

        {/* Przycisk "Logout" widoczny tylko po zalogowaniu */}
        {user && (
          <button onClick={logout} className="bg-white hover:bg-indigo-200 text-indigo-600 font-semibold py-2 px-4 rounded">Log out</button>
        )}
      </div>

      <Routes>
        <Route path="/" element={<MainBoard />} />
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
