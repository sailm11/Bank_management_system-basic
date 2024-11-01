import axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(''); 
    const history = useNavigate(); 

    const handleSignup = async () => {
        try {
            if (!fullName || !email || !password || !confirmPassword) {
                setError('Please fill in all fields.');
                return;
            }

            if (password !== confirmPassword) {
                throw new Error("Passwords do not match");
            }

            const response = await axios.post('http://localhost:8080/api/auth/signup', {
                fullName,
                email,
                password,
            });
            console.log(response.data);
            history('/dashboard');
        } catch (error) {
            console.error('Signup failed:', error.response ? error.response.data : error.message);
            setError(error.response ? error.response.data : error.message);
        }
        alert('Something went wrong...74')
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8" style={{ width: '400px' }}>
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up Page</h2>
                {error && <p className="text-red-500">{error}</p>}
                <input
                    className="mb-4 p-2 w-full border border-gray-300 rounded-md"
                    placeholder="Full Name"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                <input
                    className="mb-4 p-2 w-full border border-gray-300 rounded-md"
                    placeholder="Email Address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="mb-4 p-2 w-full border border-gray-300 rounded-md"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    className="mb-4 p-2 w-full border border-gray-300 rounded-md"
                    placeholder="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                    className="bg-blue-500 text-white p-2 w-full rounded-md hover:bg-blue-600"
                    onClick={handleSignup}
                >
                    Sign Up
                </button>
                <div className="text-center mt-4">
                    <p>Already registered? <a href="/" className="text-blue-500">Login</a></p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
