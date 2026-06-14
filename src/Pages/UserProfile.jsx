// UserProfile.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Components/Navbar';

const UserProfile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [submissions, setSubmissions] = useState([]);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  // Configure axios with base URL
  const API_BASE_URL = 'http://localhost:5000/api';

  const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
  });

  // Add token to all requests
  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  useEffect(() => {
    const fetchUserAndSubmissions = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('Token present:', !!token);

        if (!token) {
          console.log('No token found, redirecting to login');
          navigate('/login');
          return;
        }

        // First, verify server is reachable
        console.log('Testing server connection...');
        try {
          const healthCheck = await axios.get('http://localhost:5000/api/health');
          console.log('Server health:', healthCheck.data);
        } catch (healthErr) {
          console.error('Server unreachable:', healthErr.message);
          setError('Cannot connect to server. Please make sure the backend is running on port 5000.');
          setLoading(false);
          return;
        }

        // Fetch user data
        console.log('Fetching user data...');
        const userResponse = await api.get('/user/me');
        console.log('User data received:', userResponse.data);
        setUser(userResponse.data);

        // Fetch submissions
        console.log('Fetching submissions...');
        const submissionsResponse = await api.get('/submissions/user');
        console.log('Submissions received:', submissionsResponse.data.length);
        setSubmissions(submissionsResponse.data);

        setError(null);
      } catch (err) {
        console.error('Fetch error details:', {
          message: err.message,
          response: err.response?.data,
          status: err.response?.status,
          config: err.config
        });

        if (err.response?.status === 401) {
          console.log('Unauthorized, clearing token and redirecting to login');
          localStorage.removeItem('token');
          navigate('/login');
        } else if (err.response?.status === 404) {
          setError('User endpoint not found. Please check if the backend is running correctly.');
        } else if (err.code === 'ECONNREFUSED') {
          setError('Cannot connect to backend server. Please make sure it\'s running on port 5000.');
        } else {
          setError(err.response?.data?.message || 'Failed to load profile. Please try again.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserAndSubmissions();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  // Generate submission days from real submission data
  const generateSubmissionDays = () => {
    const days = Array(365).fill(0);
    const today = new Date();
    submissions.forEach(submission => {
      const submissionDate = new Date(submission.submittedAt);
      const dayDiff = Math.floor((today - submissionDate) / (1000 * 60 * 60 * 24));
      if (dayDiff >= 0 && dayDiff < 365) {
        days[dayDiff] = 1;
      }
    });
    return days;
  };

  const submissionDays = generateSubmissionDays();

  const months = [
    { name: 'Jan', days: 31 },
    { name: 'Feb', days: 28 },
    { name: 'Mar', days: 31 },
    { name: 'Apr', days: 30 },
    { name: 'May', days: 31 },
    { name: 'Jun', days: 30 },
    { name: 'Jul', days: 31 },
    { name: 'Aug', days: 31 },
    { name: 'Sep', days: 30 },
    { name: 'Oct', days: 31 },
    { name: 'Nov', days: 30 },
    { name: 'Dec', days: 31 },
  ];

  const generateMonthGrid = (month, monthIndex) => {
    const { days } = month;
    const now = new Date();
    const currentYear = now.getFullYear();

    // Get the first day of the month (0 = Sunday, 1 = Monday, etc.)
    const firstDate = new Date(currentYear, monthIndex, 1);
    const firstDayOfWeek = firstDate.getDay();

    const grid = [];

    // Add empty cells before the first day
    for (let i = 0; i < firstDayOfWeek; i++) {
      grid.push(null);
    }

    // Add days of the month
    for (let i = 1; i <= days; i++) {
      const date = new Date(currentYear, monthIndex, i);
      const dayIndex = Math.floor((now - date) / (1000 * 60 * 60 * 24));
      grid.push(dayIndex >= 0 && dayIndex < 365 ? submissionDays[dayIndex] : 0);
    }

    // Ensure grid is complete
    while (grid.length < 42) {
      grid.push(null);
    }

    return grid;
  };

  const getStreak = () => {
    let streak = 0;
    for (let i = submissionDays.length - 1; i >= 0; i--) {
      if (submissionDays[i] === 1) streak++;
      else break;
    }
    return streak;
  };

  const getTotalSubmissions = () => {
    return submissionDays.filter(day => day === 1).length;
  };

  const getBestStreak = () => {
    let maxStreak = 0;
    let currentStreak = 0;
    for (let i = 0; i < submissionDays.length; i++) {
      if (submissionDays[i] === 1) {
        currentStreak++;
        maxStreak = Math.max(maxStreak, currentStreak);
      } else {
        currentStreak = 0;
      }
    }
    return maxStreak;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-[var(--text-secondary)] text-sm">Loading profile...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] flex items-center justify-center">
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 max-w-md text-center">
          <div className="text-4xl mb-3">⚠️</div>
          <h3 className="text-lg font-semibold text-red-500 mb-2">Error Loading Profile</h3>
          <p className="text-[var(--text-secondary)] mb-4">{error}</p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Retry
            </button>
            <button
              onClick={() => navigate('/login')}
              className="px-4 py-2 border border-[var(--border-color)] rounded-lg hover:bg-[var(--hover-bg)] transition-colors"
            >
              Go to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[var(--text-secondary)] mb-4">No user data found</p>
          <button
            onClick={() => navigate('/login')}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <Navbar />

      <div className="max-w-7xl mx-auto py-8 px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">My Profile</h1>
          <p className="text-[var(--text-secondary)] mt-2">View your coding journey and achievements</p>
        </div>

        {/* Profile Card */}
        <div className="bg-[var(--card-bg)] rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-lg shadow-blue-500/20">
                  {user.username?.[0]?.toUpperCase() || 'U'}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{user.username}</h3>
                  <p className="text-[var(--text-secondary)]">{user.email}</p>
                  <p className="text-[var(--text-secondary)] text-sm">
                    Member since {user.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'Recently'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowLogoutModal(true)}
                className="px-4 py-2 bg-red-500/10 text-red-500 border border-red-500/30 rounded-lg hover:bg-red-500/20 transition-colors duration-200 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-[var(--background)] rounded-lg p-4 text-center hover:transform hover:scale-105 transition-all duration-200">
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{user.stats?.problemsSolved || user.progress?.problemsSolved || 0}</p>
                <p className="text-[var(--text-secondary)] text-sm">Problems Solved</p>
              </div>
              <div className="bg-[var(--background)] rounded-lg p-4 text-center hover:transform hover:scale-105 transition-all duration-200">
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{user.stats?.aptitudeScore || user.progress?.aptitudeScore || 0}</p>
                <p className="text-[var(--text-secondary)] text-sm">Aptitude Score</p>
              </div>
              <div className="bg-[var(--background)] rounded-lg p-4 text-center hover:transform hover:scale-105 transition-all duration-200">
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{user.stats?.contestRating || user.progress?.contestRating || 1200}</p>
                <p className="text-[var(--text-secondary)] text-sm">Contest Rating</p>
              </div>
              <div className="bg-[var(--background)] rounded-lg p-4 text-center hover:transform hover:scale-105 transition-all duration-200">
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{submissions.length}</p>
                <p className="text-[var(--text-secondary)] text-sm">Total Submissions</p>
              </div>
            </div>

            {/* Social Links */}
            {user.socialLinks && Object.keys(user.socialLinks).length > 0 && (
              <div className="mt-6 flex gap-3 flex-wrap">
                {user.socialLinks.linkedin && (
                  <a
                    href={user.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    title="LinkedIn Profile"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.469v6.766z" />
                    </svg>
                    LinkedIn
                  </a>
                )}
                {user.socialLinks.github && (
                  <a
                    href={user.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-sm"
                    title="GitHub Profile"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                )}
                {user.socialLinks.twitter && (
                  <a
                    href={user.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors text-sm"
                    title="Twitter Profile"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s1.1.95 4-1c-.87.5-2.78 2.47-4 2.5a9.86 9.86 0 008-4.3c0-9-5.3-10-10-10z" />
                    </svg>
                    Twitter
                  </a>
                )}
                {user.socialLinks.portfolio && (
                  <a
                    href={user.socialLinks.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
                    title="Portfolio"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Portfolio
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[var(--border-color)] mb-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 text-sm font-medium transition-colors duration-200 ${activeTab === 'overview'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-[var(--text-secondary)] hover:text-blue-500'
              }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('activity')}
            className={`px-6 py-3 text-sm font-medium transition-colors duration-200 ${activeTab === 'activity'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-[var(--text-secondary)] hover:text-blue-500'
              }`}
          >
            Activity
          </button>
          <button
            onClick={() => setActiveTab('submissions')}
            className={`px-6 py-3 text-sm font-medium transition-colors duration-200 ${activeTab === 'submissions'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-[var(--text-secondary)] hover:text-blue-500'
              }`}
          >
            Recent Submissions
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Streak Card */}
            <div className="bg-[var(--card-bg)] rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Coding Statistics</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-[var(--background)] rounded-lg">
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{getStreak()}</p>
                    <p className="text-[var(--text-secondary)] text-sm">Current Streak</p>
                    <p className="text-xs text-[var(--text-secondary)] mt-1">days in a row</p>
                  </div>
                  <div className="text-center p-4 bg-[var(--background)] rounded-lg">
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{getBestStreak()}</p>
                    <p className="text-[var(--text-secondary)] text-sm">Longest Streak</p>
                    <p className="text-xs text-[var(--text-secondary)] mt-1">personal record</p>
                  </div>
                  <div className="text-center p-4 bg-[var(--background)] rounded-lg">
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{getTotalSubmissions()}</p>
                    <p className="text-[var(--text-secondary)] text-sm">Active Days</p>
                    <p className="text-xs text-[var(--text-secondary)] mt-1">this year</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <p className="text-sm text-[var(--text-secondary)]">
                    <span className="font-semibold text-blue-500">Keep it up! </span>
                    You have {submissions.length} total submissions. Keep grinding! 💪
                  </p>
                </div>
              </div>
            </div>

            {/* Achievement Badges */}
            <div className="bg-[var(--card-bg)] rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Achievements</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {(user.stats?.problemsSolved || user.progress?.problemsSolved || 0) >= 10 && (
                    <div className="text-center p-3 bg-[var(--background)] rounded-lg hover:scale-105 transition-transform">
                      <div className="text-3xl mb-2">🏆</div>
                      <p className="text-sm font-semibold">10 Problems</p>
                      <p className="text-xs text-[var(--text-secondary)]">Novice Coder</p>
                    </div>
                  )}
                  {(user.stats?.problemsSolved || user.progress?.problemsSolved || 0) >= 25 && (
                    <div className="text-center p-3 bg-[var(--background)] rounded-lg hover:scale-105 transition-transform">
                      <div className="text-3xl mb-2">⭐</div>
                      <p className="text-sm font-semibold">25 Problems</p>
                      <p className="text-xs text-[var(--text-secondary)]">Rising Star</p>
                    </div>
                  )}
                  {(user.stats?.problemsSolved || user.progress?.problemsSolved || 0) >= 50 && (
                    <div className="text-center p-3 bg-[var(--background)] rounded-lg hover:scale-105 transition-transform">
                      <div className="text-3xl mb-2">🎯</div>
                      <p className="text-sm font-semibold">50 Problems</p>
                      <p className="text-xs text-[var(--text-secondary)]">Intermediate</p>
                    </div>
                  )}
                  {(user.stats?.problemsSolved || user.progress?.problemsSolved || 0) >= 100 && (
                    <div className="text-center p-3 bg-[var(--background)] rounded-lg hover:scale-105 transition-transform">
                      <div className="text-3xl mb-2">⚡</div>
                      <p className="text-sm font-semibold">100 Problems</p>
                      <p className="text-xs text-[var(--text-secondary)]">Advanced</p>
                    </div>
                  )}
                  {(user.stats?.problemsSolved || user.progress?.problemsSolved || 0) >= 200 && (
                    <div className="text-center p-3 bg-[var(--background)] rounded-lg hover:scale-105 transition-transform">
                      <div className="text-3xl mb-2">👑</div>
                      <p className="text-sm font-semibold">200 Problems</p>
                      <p className="text-xs text-[var(--text-secondary)]">Expert</p>
                    </div>
                  )}
                  {getStreak() >= 7 && (
                    <div className="text-center p-3 bg-[var(--background)] rounded-lg hover:scale-105 transition-transform">
                      <div className="text-3xl mb-2">🔥</div>
                      <p className="text-sm font-semibold">7 Day Streak</p>
                      <p className="text-xs text-[var(--text-secondary)]">On Fire!</p>
                    </div>
                  )}
                  {getStreak() >= 30 && (
                    <div className="text-center p-3 bg-[var(--background)] rounded-lg hover:scale-105 transition-transform">
                      <div className="text-3xl mb-2">🌪️</div>
                      <p className="text-sm font-semibold">30 Day Streak</p>
                      <p className="text-xs text-[var(--text-secondary)]">Unstoppable</p>
                    </div>
                  )}
                  {(user.stats?.aptitudeScore || user.progress?.aptitudeScore || 0) >= 50 && (
                    <div className="text-center p-3 bg-[var(--background)] rounded-lg hover:scale-105 transition-transform">
                      <div className="text-3xl mb-2">🧠</div>
                      <p className="text-sm font-semibold">Aptitude Master</p>
                      <p className="text-xs text-[var(--text-secondary)]">50+ Score</p>
                    </div>
                  )}
                  {(user.stats?.contestRating || user.progress?.contestRating || 1200) >= 1500 && (
                    <div className="text-center p-3 bg-[var(--background)] rounded-lg hover:scale-105 transition-transform">
                      <div className="text-3xl mb-2">🥇</div>
                      <p className="text-sm font-semibold">Contest Champion</p>
                      <p className="text-xs text-[var(--text-secondary)]">1500+ Rating</p>
                    </div>
                  )}
                  {submissions.length >= 100 && (
                    <div className="text-center p-3 bg-[var(--background)] rounded-lg hover:scale-105 transition-transform">
                      <div className="text-3xl mb-2">📝</div>
                      <p className="text-sm font-semibold">100 Submissions</p>
                      <p className="text-xs text-[var(--text-secondary)]">Hard Worker</p>
                    </div>
                  )}
                  {(user.stats?.problemsSolved || user.progress?.problemsSolved || 0) === 0 && submissions.length === 0 && (
                    <div className="col-span-full text-center py-8 text-[var(--text-secondary)]">
                      <p className="text-sm">Start solving problems to unlock achievements! 🚀</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Activity Tab - Submission Heatmap */}
        {activeTab === 'activity' && (
          <div className="bg-[var(--card-bg)] rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Submission Activity</h3>
              <p className="text-[var(--text-secondary)] text-sm mb-6">Your coding activity throughout the year</p>
              {submissions.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-[var(--text-secondary)] mb-2">No submissions yet</p>
                  <Link to="/home" className="text-blue-500 hover:text-blue-600">
                    Start solving problems →
                  </Link>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6 overflow-x-auto">
                    {months.map((month, index) => {
                      const monthGrid = generateMonthGrid(month, index);
                      return (
                        <div key={index} className="flex flex-col items-center">
                          <div className="text-[var(--text-secondary)] text-sm font-semibold mb-3">{month.name}</div>
                          <div className="grid grid-cols-7 gap-1">
                            {monthGrid.map((day, dayIndex) => (
                              <div
                                key={dayIndex}
                                className={`w-3 h-3 rounded-sm transition-all hover:scale-125 ${day === null ? 'bg-transparent' :
                                    day === 1 ? 'bg-gradient-to-br from-green-400 to-green-600 shadow-sm' :
                                      'bg-[var(--border-color)]'
                                  }`}
                                title={day ? `Active` : 'No activity'}
                              />
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex items-center justify-center gap-6 text-xs p-4 bg-[var(--background)] rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[var(--border-color)] rounded-sm" />
                      <span className="text-[var(--text-secondary)]">Less</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-gradient-to-br from-green-400 to-green-600 rounded-sm" />
                      <span className="text-[var(--text-secondary)]">More</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Submissions Tab */}
        {activeTab === 'submissions' && (
          <div className="bg-[var(--card-bg)] rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Recent Submissions</h3>
                  <p className="text-[var(--text-secondary)] text-sm mt-1">{submissions.length} total submissions</p>
                </div>
              </div>
              {submissions.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-4xl mb-3">📝</div>
                  <p className="text-[var(--text-secondary)] mb-4">No submissions yet.</p>
                  <Link to="/home" className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Start solving problems →
                  </Link>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-[var(--border-color)]">
                    <thead className="bg-[var(--background)]">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">Problem</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">Language</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">Runtime</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">Submitted</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--border-color)]">
                      {submissions.slice(0, 20).map((submission, idx) => (
                        <tr key={idx} className="hover:bg-[var(--hover-bg)] transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Link to={`/coding/${submission.problem?.id || submission.problemId}`} className="text-sm text-blue-500 hover:text-blue-600 font-medium">
                              {submission.problem?.title || submission.problemTitle || `Problem ${submission.problem?.id || submission.problemId}`}
                            </Link>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--text-secondary)]">
                            <span className="px-2 py-1 bg-[var(--background)] rounded text-xs font-medium">
                              {submission.language || 'Unknown'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-3 py-1 text-xs font-medium rounded-full ${submission.status === 'Accepted'
                                ? 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300'
                                : submission.status === 'Wrong Answer'
                                  ? 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300'
                                  : submission.status === 'Time Limit Exceeded'
                                    ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300'
                                    : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300'
                              }`}>
                              {submission.status || 'Pending'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--text-secondary)]">
                            {submission.runtime ? `${submission.runtime}ms` : 'N/A'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--text-secondary)]">
                            {new Date(submission.submittedAt).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {submissions.length > 20 && (
                    <div className="p-4 text-center text-[var(--text-secondary)] text-sm">
                      Showing 20 of {submissions.length} submissions
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[var(--card-bg)] rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
            <h3 className="text-xl font-semibold mb-2">Confirm Logout</h3>
            <p className="text-[var(--text-secondary)] mb-6">Are you sure you want to logout? You'll need to login again to access your account.</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 border border-[var(--border-color)] rounded-lg text-[var(--text-secondary)] hover:bg-[var(--hover-bg)] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
