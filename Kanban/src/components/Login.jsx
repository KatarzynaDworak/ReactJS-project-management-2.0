import React from 'react';
import { useAuthStore } from '../stores/auth';

const Login = () => {
    const login = useAuthStore((state) => state.login);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('ok');
        login('k.dw@poczta.onet.pl', '123456');
    }
    return (
        <div>
                    <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-semibold text-center text-gray-700">Zaloguj się</h2>
                
                <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <label htmlFor="login" class="block mb-2 text-sm font-medium text-gray-600">Login</label>
                    <input 
                    type="text" 
                    id="login" 
                    className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300" 
                    placeholder="Wpisz login"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-600">Hasło</label>
                    <input 
                    type="password" 
                    id="password" 
                    className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300" 
                    placeholder="Wpisz hasło"
                    />
                </div>

                <button 
                    type="submit" 
                    class="w-full px-4 py-2 font-semibold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-300">
                    Zaloguj się
                </button>
                </form>
            </div>
            </div>
        </div>
    );
};

export default Login;