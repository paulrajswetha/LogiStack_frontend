import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import logoImage from '../assets/image.png'; // Adjust the path based on your folder structure

const NAV_LINKS = [
  { to: '/explore', label: 'Explore' },
  { to: '/home', label: 'Problems' },
  { to: '/contest', label: 'Contests' },
  { to: '/aptitude', label: 'Aptitude' },
];


const Navbar = () => {
  const location = useLocation();

  if (['/login', '/signup'].includes(location.pathname)) return null;

  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <nav className="sticky top-0 z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 no-underline shrink-0 group"
        >
          <img 
            src={logoImage} 
            alt="LogiStack Logo" 
            className="w-9 h-9 rounded-full object-cover ring-2 ring-blue-500/30 group-hover:ring-blue-500 group-hover:scale-105 transition-all duration-300"
          />
          <span className="hidden sm:inline text-[var(--text-primary)] font-bold text-base tracking-tight group-hover:text-blue-500 transition-colors">
            LogiStack
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-1 flex-1">
          {NAV_LINKS.map(({ to, label }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium no-underline transition-colors ${
                  active
                    ? 'text-blue-500 bg-blue-500/10'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--hover-bg)]'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 shrink-0">
          <ThemeToggle />

          {isLoggedIn ? (
            <Link
              to="/user"
              className="w-9 h-9 rounded-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold flex items-center justify-center no-underline transition-colors ring-2 ring-blue-500/30"
            >
              U
            </Link>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-medium text-blue-500 border border-blue-500/40 rounded-lg no-underline hover:bg-blue-500/10 hover:border-blue-500/70 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 text-sm font-semibold bg-blue-500 text-white rounded-lg no-underline hover:bg-blue-600 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;