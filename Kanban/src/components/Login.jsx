import React from 'react';
import { useAuthStore } from '../stores/auth';
import { Navigate, useLocation } from 'react-router-dom';
import LoginForm from './LoginForm';

const Login = () => {
    const login = useAuthStore((state) => state.login); // funkcja do logowania
    const user = useAuthStore((state) => state.user); // dane użytkownika
    const initiatingLogin = useAuthStore((state) => state.initiatingLogin); // status logowania
    const location = useLocation();
    const from = location.state?.from || '/'; // domyślna ścieżka przekierowania

    // Jeżeli użytkownik jest zalogowany, przekieruj na poprzednią stronę (lub domyślną)
    if (user) {
        return <Navigate to={from} />;
    }

    // Gdy trwa proces logowania, wyświetl placeholder (np. loader)
    if (initiatingLogin) {
        return <div>Logging in...</div>;
    }

    return (
        <LoginForm login={login} /> // przekazujemy funkcję logowania do formularza
    );
};

export default Login;
