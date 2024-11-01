import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useNavigate();

    const handleLogin = async () => {
        try {
            if (!username || !password) {
                setError('Please enter both username and password.');
                return;
            }

            const response = await axios.post('http://localhost:8080/api/auth/signin', { username, password });
            console.log('Login successful:', response.data);
            history('/dashboard');
        } catch (error) {
            console.error('Login failed:', error.response ? error.response.data : error.message);
            setError('Invalid username or password.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8" style={{ width: '400px' }}>
                <h2 className="text-2xl font-bold mb-6 text-center">Login Page</h2>
                <input
                    className="mb-4 p-2 w-full border border-gray-300 rounded-md"
                    placeholder="Email address"
                    type="email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className="mb-4 p-2 w-full border border-gray-300 rounded-md"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p className="text-red-500">{error}</p>}
                <button
                    className="bg-blue-500 text-white p-2 w-full rounded-md hover:bg-blue-600"
                    onClick={handleLogin}
                >
                    Sign in
                </button>
                <div className="text-center mt-4">
                    <p>Not a member? <a href="/signup" className="text-blue-500">Register</a></p>
                </div>
            </div>
        </div>
    );
}

export default Login;
