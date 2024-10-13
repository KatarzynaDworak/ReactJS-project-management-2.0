import React, { useState } from 'react';
import { auth } from '../plugins/firebase'; // import Firebase auth
import { createUserWithEmailAndPassword } from 'firebase/auth';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');  // clear error before submission
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setSuccess(`User created: ${userCredential.user.email}`);
      navigate('/dashboard'); // przekierowanie po rejestracji
      setEmail('');
      setPassword('');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-semibold text-center text-gray-700">Register</h2>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300" 
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password}
              className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300" 
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <button 
            type="submit" 
            className="w-full px-4 py-2 font-semibold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-300">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;