import React, { useState } from 'react';

const LoginForm = ({ login }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        login(email, password); // wywołanie funkcji logowania przekazanej jako props
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-semibold text-center text-gray-700">Zaloguj się</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="login" className="block mb-2 text-sm font-medium text-gray-600">Login</label>
                        <input 
                            type="text" 
                            id="login" 
                            value={email}
                            className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300" 
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Wpisz login"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Hasło</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={password}
                            className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300" 
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Wpisz hasło"
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="w-full px-4 py-2 font-semibold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-300">
                        Zaloguj się
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
