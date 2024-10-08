// Login.tsx
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        try {
            // Log in user with email and password
            await signInWithEmailAndPassword(auth, email, password);
            setSuccess('Login successful!');
            setTimeout(() => {
                navigate('/');
            }, 1000); // Slight delay for success message visibility
        } catch (err: any) {
            // Customize error handling for better user experience
            switch (err.code) {
                case 'auth/user-not-found':
                    setError('User not found.');
                    break;
                case 'auth/wrong-password':
                    setError('Incorrect password.');
                    break;
                default:
                    setError('Login failed. Please try again.');
                    break;
            }
        }
    };

    return (
        <div className="flex justify-center font-serif items-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-xl font-bold mb-4">Login</h2>
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-pink-600 text-white p-2 rounded"
                    >
                        Login
                    </button>
                    <p className="mt-4">
                        Forgot your password? <Link to="/reset-password" className="text-blue-600">Reset it here</Link>
                    </p>
                    <p className="mt-4">
                        Don't have an account? <Link to="/register"><span className="text-pink-500">Register</span></Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
