// Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { AuthLayout } from '../Components/AuthLayout';
import { SocialLogin } from '../Components/SocialLogin';
import axios from 'axios';

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
      });
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        navigate('/home');
      } else {
        setError('Login failed: No token received');
      }
    } catch (err) {
      console.error('Login error:', err);
      if (err.response) {
        setError(err.response.data.message || 'Login failed');
      } else if (err.request) {
        setError('Network error. Please check your connection.');
      } else {
        setError('An error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">Welcome Back</h2>
        <p className="text-sm text-[var(--text-secondary)] mt-2">Sign in to continue coding</p>
      </div>
      
      <form className="space-y-5" onSubmit={handleSubmit}>
        {error && (
          <div className="bg-red-900/50 border border-red-500 text-red-300 px-4 py-2 rounded-md text-sm">
            {error}
          </div>
        )}
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)] mb-1">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="appearance-none block w-full px-3 py-2 border border-[var(--border-color)] rounded-md shadow-sm placeholder-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-[var(--card-bg)] text-[var(--text-primary)] transition-all"
            placeholder="Enter your email"
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-[var(--text-primary)] mb-1">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="appearance-none block w-full px-3 py-2 border border-[var(--border-color)] rounded-md shadow-sm placeholder-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-[var(--card-bg)] text-[var(--text-primary)] transition-all"
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-[var(--text-secondary)]" />
              ) : (
                <Eye className="h-5 w-5 text-[var(--text-secondary)]" />
              )}
            </button>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <Link to="/forgot-password" className="text-blue-500 hover:text-blue-400 transition-colors">
            Forgot Password?
          </Link>
          <Link to="/signup" className="text-blue-500 hover:text-blue-400 transition-colors">
            Create Account
          </Link>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[var(--border-color)]"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-[var(--background)] text-[var(--text-secondary)]">Or continue with</span>
          </div>
        </div>
        
        <SocialLogin />
      </form>
    </AuthLayout>
  );
}
