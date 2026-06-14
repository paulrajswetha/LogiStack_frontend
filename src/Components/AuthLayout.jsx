import React from 'react';
import { Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-md w-full bg-[var(--card-bg)] rounded-lg shadow-md p-8 transition-colors duration-200">
        <div className="flex flex-col space-y-4 mb-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <Code2 className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-[var(--text-primary)]">LogiStack</span>
            </Link>
            <ThemeToggle />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
