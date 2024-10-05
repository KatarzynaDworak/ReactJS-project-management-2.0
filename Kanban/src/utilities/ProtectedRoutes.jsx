import { Outlet, Navigate } from 'react-router-dom';
import { useAuthStore } from '../stores/auth';
import { useLocation } from 'react-router-dom';

export default function ProtectedRoutes() {
  const user = useAuthStore((state) => state.user);
  const { pathname } = useLocation();

  const isValidatedUser = user;

  return isValidatedUser ? <Outlet /> : <Navigate to='/login' state={{ from: pathname }}/>;
}