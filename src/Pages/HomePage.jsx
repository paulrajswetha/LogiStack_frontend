// HomePage.jsx - with improved theme support
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ThemeToggle } from '../Components/ThemeToggle';
import Navbar from '../Components/Navbar';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('All');
  const [problems, setProblems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const problemsPerPage = 20;

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5000/api/problems?limit=100')
      .then(res => {
        setProblems(res.data.problems || []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredProblems = problems.filter(
    (problem) =>
      problem.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (difficultyFilter === 'All' || problem.difficulty === difficultyFilter)
  );

  // Pagination logic
  const indexOfLastProblem = currentPage * problemsPerPage;
  const indexOfFirstProblem = indexOfLastProblem - problemsPerPage;
  const currentProblems = filteredProblems.slice(indexOfFirstProblem, indexOfLastProblem);
  const totalPages = Math.ceil(filteredProblems.length / problemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Difficulty badge styles with light/dark mode support
  const getDifficultyStyles = (difficulty) => {
    switch(difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300';
      case 'Hard':
        return 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <Navbar />

      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="mb-8">
          <h2 className="text-4xl font-extrabold">Problem Arena</h2>
          <p className="text-[var(--text-secondary)] mt-2">Master your coding skills with our curated challenges</p>
        </div>
        
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <select 
            className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg px-4 py-2 text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            value={difficultyFilter}
            onChange={(e) => {
              setDifficultyFilter(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="All">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <input
            type="text"
            placeholder="Search problems..."
            className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg px-4 py-2 text-[var(--text-primary)] w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-[var(--text-secondary)]"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
              <span className="text-[var(--text-secondary)] text-sm">Loading problems...</span>
            </div>
          </div>
        ) : (
          <>
            <div className="bg-[var(--card-bg)] rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-[var(--border-color)]">
                  <thead className="bg-[var(--card-bg)]">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-secondary)]">ID</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-secondary)]">Title</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-secondary)]">Difficulty</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-secondary)]">Acceptance</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-secondary)] hidden md:table-cell">Tags</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-secondary)] hidden lg:table-cell">Premium</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border-color)]">
                    {currentProblems.length > 0 ? (
                      currentProblems.map((problem) => (
                        <tr key={problem.id} className="hover:bg-[var(--hover-bg)] transition-colors duration-150">
                          <td className="px-6 py-4 text-sm text-[var(--text-secondary)]">{problem.id}</td>
                          <td className="px-6 py-4">
                            <Link to={`/coding/${problem.id}`} className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200">
                              {problem.title}
                            </Link>
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyStyles(problem.difficulty)}`}
                            >
                              {problem.difficulty}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-[var(--text-secondary)]">{problem.acceptance_rate}%</td>
                          <td className="px-6 py-4 hidden md:table-cell">
                            <div className="flex flex-wrap gap-1">
                              {problem.topic_tags?.slice(0, 3).map(tag => (
                                <span key={tag} className="text-xs bg-[var(--background)] text-[var(--text-secondary)] px-2 py-1 rounded border border-[var(--border-color)]">
                                  {tag}
                                </span>
                              ))}
                              {problem.topic_tags?.length > 3 && (
                                <span className="text-xs bg-[var(--background)] text-[var(--text-secondary)] px-2 py-1 rounded border border-[var(--border-color)]">
                                  +{problem.topic_tags.length - 3}
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-[var(--text-secondary)] hidden lg:table-cell">
                            {problem.isPremium ? (
                              <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                                Premium
                              </span>
                            ) : (
                              <span className="text-[var(--text-secondary)]">Free</span>
                            )}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="px-6 py-12 text-center text-[var(--text-secondary)]">
                          No problems found matching your criteria.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            
            {totalPages > 1 && (
              <div className="mt-8 flex justify-center gap-2 flex-wrap">
                <button 
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-[var(--border-color)] rounded-lg bg-[var(--card-bg)] text-[var(--text-secondary)] hover:bg-[var(--hover-bg)] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                {[...Array(Math.min(totalPages, 5))].map((_, i) => {
                  let pageNumber;
                  if (totalPages <= 5) {
                    pageNumber = i + 1;
                  } else if (currentPage <= 3) {
                    pageNumber = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNumber = totalPages - 4 + i;
                  } else {
                    pageNumber = currentPage - 2 + i;
                  }
                  
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => paginate(pageNumber)}
                      className={`px-4 py-2 border rounded-lg transition-colors duration-200 ${
                        currentPage === pageNumber
                          ? 'border-blue-500 bg-blue-500 text-white'
                          : 'border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-secondary)] hover:bg-[var(--hover-bg)]'
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                })}
                <button 
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-[var(--border-color)] rounded-lg bg-[var(--card-bg)] text-[var(--text-secondary)] hover:bg-[var(--hover-bg)] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
