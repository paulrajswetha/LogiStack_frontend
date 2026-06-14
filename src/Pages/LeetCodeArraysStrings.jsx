// LeetCodeArraysStrings.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const LeetCodeArraysStrings = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [filter, setFilter] = useState('all'); // all, easy, medium, hard

  // Array Problems
  const arrayProblems = [
    { id: 1, name: "Two Sum", difficulty: "Easy", companies: ["Amazon-108", "Apple-43", "Google-39", "Facebook-22", "Bloomberg-13"], youtubeUrl: "https://www.youtube.com/watch?v=BQ2IJ-fouJ4", pattern: "Array/HashMap" },
    { id: 2, name: "Best Time to Buy and Sell Stock", difficulty: "Easy", companies: ["Amazon-62", "Microsoft-19", "Bloomberg-15", "Facebook-12", "Google-12"], youtubeUrl: "https://www.youtube.com/watch?v=CCQBvgPages", pattern: "Array/Two Pointers" },
    { id: 3, name: "Contains Duplicate", difficulty: "Easy", companies: ["Amazon-17", "Apple-15", "Google-8", "Microsoft-6", "Facebook-5"], youtubeUrl: "https://www.youtube.com/watch?v=c_q_Pc2yg_0", pattern: "Array/HashSet" },
    { id: 4, name: "Contains Duplicate II", difficulty: "Easy", companies: ["Amazon-6", "Facebook-5", "Google-2", "Microsoft-2", "Bloomberg-3"], youtubeUrl: "https://www.youtube.com/watch?v=Te_MCY4uG-M", pattern: "Array/HashMap/Sliding Window" },
    { id: 5, name: "Product of Array Except Self", difficulty: "Medium", companies: ["Amazon-34", "Facebook-13", "Microsoft-13", "Apple-8", "Google-2"], youtubeUrl: "https://www.youtube.com/watch?v=UxmLwxH-lhM", pattern: "Array/Prefix Product" },
    { id: 6, name: "Maximum Subarray", difficulty: "Medium", companies: ["LinkedIn-39", "Amazon-32", "Apple-19", "Microsoft-16", "Google-15"], youtubeUrl: "https://www.youtube.com/watch?v=nr2djEYM7_A", pattern: "Array/Kadane's Algorithm" },
    { id: 7, name: "Maximum Product Subarray", difficulty: "Medium", companies: ["LinkedIn-26", "Amazon-21", "Microsoft-4", "Google-3", "Infosys-2"], youtubeUrl: "https://www.youtube.com/watch?v=OuRQ_TCCjsU", pattern: "Array/DP" },
    { id: 8, name: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", companies: ["Amazon-8", "Microsoft-7", "Facebook-5", "Uber-3", "Apple-2"], youtubeUrl: "https://www.youtube.com/watch?v=Dr69TSfv9JI", pattern: "Array/Binary Search" },
    { id: 9, name: "Search in Rotated Sorted Array", difficulty: "Medium", companies: ["Amazon-27", "Facebook-22", "Microsoft-22", "LinkedIn-21", "Apple-5"], youtubeUrl: "https://www.youtube.com/watch?v=sE_4DzVc71w", pattern: "Array/Binary Search" },
    { id: 10, name: "Two Sum II", difficulty: "Medium", companies: ["Amazon-10", "Apple-4", "Google-2", "Facebook-2"], youtubeUrl: "https://www.youtube.com/watch?v=c9ywRRJcP1Y", pattern: "Array/Two Pointers" },
    { id: 11, name: "3 Sum", difficulty: "Medium", companies: ["Amazon-40", "Microsoft-24", "Facebook-21", "Apple-16", "Google-8"], youtubeUrl: "https://www.youtube.com/watch?v=WtloSzFYvho", pattern: "Array/Two Pointers" },
    { id: 12, name: "Container With Most Water", difficulty: "Medium", companies: ["Amazon-31", "Microsoft-8", "Facebook-8", "Apple-5", "Google-5"], youtubeUrl: "https://www.youtube.com/watch?v=wi8fqhNoV-Y", pattern: "Array/Two Pointers" },
    { id: 13, name: "Verifying an Alien Dictionary", difficulty: "Easy", companies: ["Facebook-10", "Uber-4", "Amazon-2", "LinkedIn-3", "Apple-2"], youtubeUrl: "https://www.youtube.com/watch?v=8NoyVvm1v88", pattern: "Array/HashMap" },
    { id: 14, name: "Next Permutation", difficulty: "Medium", companies: ["Facebook-33", "Amazon-19", "Google-12", "Apple-10", "Microsoft-8"], youtubeUrl: "https://www.youtube.com/watch?v=oc3OOtGmH6U", pattern: "Array/Two Pointers" },
    { id: 15, name: "Remove Duplicates from Sorted Array", difficulty: "Medium", companies: ["Amazon-3", "Apple-2", "Microsoft-6", "Google-4", "Facebook-4"], youtubeUrl: "https://www.youtube.com/watch?v=0F49FLuzScU", pattern: "Array/Two Pointers" },
    { id: 16, name: "Find First and Last Position of Element in Sorted Array", difficulty: "Medium", companies: ["Facebook-23", "Amazon-21", "Microsoft-8", "Bloomberg-6", "Google-6"], youtubeUrl: "https://www.youtube.com/watch?v=aPD6g96fRO4", pattern: "Array/Binary Search" },
    { id: 17, name: "Trapping Rain Water", difficulty: "Hard", companies: ["Amazon-51", "Goldman Sachs-44", "Bloomberg-20", "Facebook-19", "Microsoft-12"], youtubeUrl: "https://www.youtube.com/watch?v=AFl_VxaO_F0", pattern: "Array/Two Pointers/Stack" },
    { id: 18, name: "Median of Two Sorted Arrays", difficulty: "Hard", companies: ["Amazon-39", "Apple-20", "Microsoft-18", "Google-15", "Bloomberg-9"], youtubeUrl: "https://www.youtube.com/watch?v=LRM4qiHLYCE", pattern: "Array/Binary Search" }
  ];

  // String Problems
  const stringProblems = [
    { id: 83, name: "Longest Substring Without Repeating Characters", difficulty: "Medium", companies: ["Amazon-58", "Microsoft-30", "Bloomberg-22", "Facebook-20", "Google-19"], youtubeUrl: "https://www.youtube.com/watch?v=RMQ-gRQAY0o", pattern: "String/Sliding Window" },
    { id: 84, name: "Longest Repeating Character Replacement", difficulty: "Medium", companies: ["Google-9", "Uber-7", "Amazon-5", "Adobe-2", "Facebook-4"], youtubeUrl: "https://www.youtube.com/watch?v=FYyWsqFjkZk", pattern: "String/Sliding Window" },
    { id: 85, name: "Fizz Buzz", difficulty: "Easy", companies: ["Google-5", "Amazon-4", "Facebook-3", "Apple-2", "TikTok-6"], youtubeUrl: "https://www.youtube.com/watch?v=E3eO7jTFElU", pattern: "String/Simulation" },
    { id: 86, name: "Longest Common Prefix", difficulty: "Easy", companies: ["Amazon-20", "Facebook-15", "Apple-15", "Google-10", "Microsoft-7"], youtubeUrl: "https://www.youtube.com/watch?v=PWoIZxcamsQ", pattern: "String/Trie" },
    { id: 87, name: "Minimum Window Substring", difficulty: "Hard", companies: ["Facebook-18", "Amazon-16", "LinkedIn-9", "Lyft-9", "Microsoft-8"], youtubeUrl: "https://www.youtube.com/watch?v=tMx5JZSBWIE", pattern: "String/Sliding Window" },
    { id: 88, name: "Valid Anagram", difficulty: "Easy", companies: ["Amazon-13", "Bloomberg-10", "Spotify-9", "Facebook-6", "Apple-6"], youtubeUrl: "https://www.youtube.com/watch?v=qyQni3rz-ko", pattern: "String/HashMap" },
    { id: 89, name: "Group Anagrams", difficulty: "Medium", companies: ["Amazon-56", "Microsoft-27", "Facebook-17", "Apple-14", "Google-7"], youtubeUrl: "https://www.youtube.com/watch?v=dEMcIpBOHpg", pattern: "String/HashMap" },
    { id: 90, name: "Valid Parentheses", difficulty: "Easy", companies: ["Amazon-52", "LinkedIn-33", "Facebook-23", "Microsoft-21", "Bloomberg-17"], youtubeUrl: "https://www.youtube.com/watch?v=D4l9TK0tWcI", pattern: "String/Stack" },
    { id: 91, name: "Valid Palindrome", difficulty: "Easy", companies: ["Facebook-74", "Amazon-10", "Microsoft-9", "Apple-6", "Bloomberg-4"], youtubeUrl: "https://www.youtube.com/watch?v=MFPmKyThyHk", pattern: "String/Two Pointers" },
    { id: 92, name: "Longest Palindromic Substring", difficulty: "Medium", companies: ["Amazon-40", "Microsoft-19", "Google-15", "Adobe-10", "Apple-10"], youtubeUrl: "https://www.youtube.com/watch?v=92KOT17h8zw", pattern: "String/DP/Expand Around Center" },
    { id: 93, name: "Letter Combinations of a Phone Number", difficulty: "Medium", companies: ["Amazon-38", "Microsoft-27", "Facebook-10", "Apple-9", "Google-8"], youtubeUrl: "https://www.youtube.com/watch?v=dmYiOfy8a-k", pattern: "String/Backtracking" },
    { id: 94, name: "Palindromic Substrings", difficulty: "Medium", companies: ["Facebook-14", "Amazon-4", "Google-3", "Apple-3", "Twitter-2"], youtubeUrl: "https://www.youtube.com/watch?v=WfkVe8egZbU", pattern: "String/DP/Expand Around Center" },
    { id: 95, name: "Encode and Decode Strings", difficulty: "Medium", companies: ["Facebook-2", "LinkedIn-2", "Square-2", "Uber-2", "Google-7"], youtubeUrl: "https://www.youtube.com/watch?v=P5LQbpI4p_I", pattern: "String/Design" },
    { id: 96, name: "Palindrome Linked List", difficulty: "Easy", companies: ["Amazon-16", "Facebook-7", "Microsoft-7", "Apple-7", "Google-5"], youtubeUrl: "https://www.youtube.com/watch?v=uGGAJxeXa4U", pattern: "String/Two Pointers/Linked List" },
    { id: 97, name: "Text Justification", difficulty: "Hard", companies: ["Google-23", "LinkedIn-17", "Uber-9", "Facebook-4", "Microsoft-3"], youtubeUrl: "https://www.youtube.com/watch?v=Pf_1Ox9ud_w", pattern: "String/Simulation" }
  ];

  // Combine all problems
  const allProblems = [...arrayProblems, ...stringProblems];

  const getDifficultyColor = (difficulty) => {
    switch(difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300';
      case 'medium': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300';
      case 'hard': return 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const filteredProblems = allProblems.filter(problem => {
    if (filter === 'all') return true;
    return problem.difficulty.toLowerCase() === filter;
  });

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            LeetCode Problems - Arrays & Strings
          </h2>
          <p className="text-[var(--text-secondary)] mt-2">
            Master array and string manipulation techniques with these frequently asked interview problems
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-[var(--card-bg)] rounded-lg p-4 border border-[var(--border-color)]">
            <div className="text-2xl font-bold text-blue-500">{allProblems.length}</div>
            <div className="text-sm text-[var(--text-secondary)]">Total Problems</div>
          </div>
          <div className="bg-[var(--card-bg)] rounded-lg p-4 border border-[var(--border-color)]">
            <div className="text-2xl font-bold text-green-500">{allProblems.filter(p => p.difficulty === 'Easy').length}</div>
            <div className="text-sm text-[var(--text-secondary)]">Easy</div>
          </div>
          <div className="bg-[var(--card-bg)] rounded-lg p-4 border border-[var(--border-color)]">
            <div className="text-2xl font-bold text-yellow-500">{allProblems.filter(p => p.difficulty === 'Medium').length}</div>
            <div className="text-sm text-[var(--text-secondary)]">Medium</div>
          </div>
          <div className="bg-[var(--card-bg)] rounded-lg p-4 border border-[var(--border-color)]">
            <div className="text-2xl font-bold text-red-500">{allProblems.filter(p => p.difficulty === 'Hard').length}</div>
            <div className="text-sm text-[var(--text-secondary)]">Hard</div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-3 mb-6">
          {['all', 'easy', 'medium', 'hard'].map((difficulty) => (
            <button
              key={difficulty}
              onClick={() => setFilter(difficulty)}
              className={`px-4 py-2 rounded-lg capitalize transition-all duration-200 ${
                filter === difficulty
                  ? 'bg-blue-500 text-white'
                  : 'bg-[var(--card-bg)] text-[var(--text-primary)] border border-[var(--border-color)] hover:bg-[var(--button-secondary-hover)]'
              }`}
            >
              {difficulty}
            </button>
          ))}
        </div>

        {/* Problems Table */}
        <div className="bg-[var(--card-bg)] rounded-lg border border-[var(--border-color)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[var(--background)] border-b border-[var(--border-color)]">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">#</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Problem</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Difficulty</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Pattern</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Top Companies</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Solution</th>
                </tr>
              </thead>
              <tbody>
                {filteredProblems.map((problem, idx) => (
                  <React.Fragment key={problem.id}>
                    <tr 
                      className="border-b border-[var(--border-color)] hover:bg-[var(--button-secondary-hover)] cursor-pointer transition-colors"
                      onClick={() => setExpandedQuestion(expandedQuestion === problem.id ? null : problem.id)}
                    >
                      <td className="px-6 py-4 text-sm text-[var(--text-secondary)]">{problem.id}</td>
                      <td className="px-6 py-4">
                        <div className="font-medium">{problem.name}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(problem.difficulty)}`}>
                          {problem.difficulty}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-[var(--text-secondary)]">{problem.pattern}</td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {problem.companies.slice(0, 3).map((company, i) => (
                            <span key={i} className="text-xs bg-[var(--background)] px-2 py-1 rounded-full text-[var(--text-secondary)]">
                              {company}
                            </span>
                          ))}
                          {problem.companies.length > 3 && (
                            <span className="text-xs text-[var(--text-secondary)]">+{problem.companies.length - 3}</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={problem.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                          </svg>
                          Watch
                        </a>
                      </td>
                    </tr>
                    {expandedQuestion === problem.id && (
                      <tr className="bg-[var(--background)]">
                        <td colSpan="6" className="px-6 py-4">
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-blue-500">Companies that asked this:</span>
                              <div className="flex flex-wrap gap-2">
                                {problem.companies.map((company, i) => (
                                  <span key={i} className="px-2 py-1 bg-[var(--card-bg)] rounded-full text-sm">
                                    {company}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <span className="font-semibold text-blue-500">Problem Pattern:</span>
                              <span className="ml-2 text-[var(--text-secondary)]">{problem.pattern}</span>
                            </div>
                            <div>
                              <a
                                href={`https://leetcode.com/problems/${problem.name.toLowerCase().replace(/\s+/g, '-')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                              >
                                Solve on LeetCode →
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredProblems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[var(--text-secondary)]">No problems found for this difficulty level.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeetCodeArraysStrings;