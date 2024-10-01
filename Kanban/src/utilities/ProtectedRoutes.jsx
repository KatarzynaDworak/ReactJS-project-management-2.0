import { Outlet, Navigate } from 'react-router-dom';
import { useAuthStore } from '../stores/auth';

export default function ProtectedRoutes() {
  const user = useAuthStore((state) => state.user);

  const isValidatedUser = user;

  return isValidatedUser ? <Outlet /> : <Navigate to='/login' />;
}