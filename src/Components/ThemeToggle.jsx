import { useTheme } from './ThemeContext';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-all transform hover:scale-105 ${
        theme === 'light'
          ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/20'
          : 'bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700'
      }`}
    >
      {theme === 'light' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span>{theme === 'light' ? 'Light' : 'Dark'}</span>
    </button>
  );
}
