// LeetCodeDataStructures.jsx
import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

const LeetCodeDataStructures = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [filter, setFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Tree Problems
  const treeProblems = [
    { id: 103, name: "Maximum Depth of Binary Tree", difficulty: "Easy", companies: ["LinkedIn-8", "Amazon-5", "Google-5", "Spotify-4", "Microsoft-4"], youtubeUrl: "https://www.youtube.com/watch?v=yi7ym5R5aYI", pattern: "Tree/DFS/BFS", category: "Tree" },
    { id: 104, name: "Same Tree", difficulty: "Easy", companies: ["LinkedIn-8", "Amazon-4", "Google-2", "Bloomberg-2", "Apple-2"], youtubeUrl: "https://www.youtube.com/watch?v=yi7ym5R5aYI", pattern: "Tree/DFS", category: "Tree" },
    { id: 105, name: "Symmetric Tree", difficulty: "Easy", companies: ["Amazon-9", "LinkedIn-5", "Google-5", "Facebook-4", "Apple-3"], youtubeUrl: "https://www.youtube.com/watch?v=NeSeH2ECZUw", pattern: "Tree/DFS/BFS", category: "Tree" },
    { id: 106, name: "Invert/Flip Binary Tree", difficulty: "Easy", companies: ["Amazon-5", "Facebook-5", "Google-3", "Microsoft-2", "Apple-2"], youtubeUrl: "https://www.youtube.com/watch?v=yb2Y9h2YWio", pattern: "Tree/DFS", category: "Tree" },
    { id: 107, name: "Binary Tree Maximum Path Sum", difficulty: "Hard", companies: ["Amazon-20", "DoorDash-18", "Microsoft-12", "Facebook-9", "Google-6"], youtubeUrl: "https://www.youtube.com/watch?v=6wv9yMSenvQ", pattern: "Tree/DFS/DP", category: "Tree" },
    { id: 108, name: "Binary Tree Level Order Traversal", difficulty: "Medium", companies: ["Amazon-11", "LinkedIn-11", "Microsoft-9", "Facebook-5", "Google-2"], youtubeUrl: "https://www.youtube.com/watch?v=tBJ1a5ljFCQ", pattern: "Tree/BFS", category: "Tree" },
    { id: 109, name: "Serialize and Deserialize Binary Tree", difficulty: "Hard", companies: ["Amazon-26", "Microsoft-16", "LinkedIn-15", "Uber-6", "Google-4"], youtubeUrl: "https://www.youtube.com/watch?v=vqbpTOU-LS4", pattern: "Tree/Design", category: "Tree" },
    { id: 110, name: "Subtree of Another Tree", difficulty: "Easy", companies: ["Amazon-7", "Microsoft-2", "Google-2", "Facebook-9", "Apple-2"], youtubeUrl: "https://www.youtube.com/watch?v=YOW_-ptARNE", pattern: "Tree/DFS", category: "Tree" },
    { id: 111, name: "Find Leaves of Binary Tree", difficulty: "Medium", companies: ["Google-52", "LinkedIn-15", "Amazon-8", "Microsoft-4", "Facebook-2"], youtubeUrl: "https://www.youtube.com/watch?v=VZCWLZ5PvKM", pattern: "Tree/DFS", category: "Tree" },
    { id: 112, name: "Construct Binary Tree from Preorder and Inorder Traversal", difficulty: "Medium", companies: ["Microsoft-6", "Amazon-3", "Bloomberg-2", "Google-2", "Apple-2"], youtubeUrl: "https://www.youtube.com/watch?v=YYl2Tp-Wqcw", pattern: "Tree/Recursion", category: "Tree" },
    { id: 113, name: "Validate Binary Search Tree", difficulty: "Medium", companies: ["Amazon-25", "Microsoft-12", "Bloomberg-12", "Facebook-5", "Uber-3"], youtubeUrl: "https://www.youtube.com/watch?v=QaCMLopSwWI", pattern: "Tree/DFS", category: "Tree" },
    { id: 114, name: "Kth Smallest Element in a BST", difficulty: "Medium", companies: ["Uber-17", "Amazon-8", "Microsoft-3", "Facebook-2", "Apple-2"], youtubeUrl: "https://www.youtube.com/watch?v=tAUB05a6ys4", pattern: "Tree/DFS/BST", category: "Tree" },
    { id: 115, name: "Lowest Common Ancestor of BST", difficulty: "Medium", companies: ["LinkedIn-12", "Facebook-5", "Amazon-3", "Apple-3", "Google-2"], youtubeUrl: "https://www.youtube.com/watch?v=1HUmPsyFb9U", pattern: "Tree/BST", category: "Tree" },
    { id: 116, name: "Binary Tree Zigzag Level Order Traversal", difficulty: "Medium", companies: ["Facebook-8", "Bloomberg-8", "Amazon-3", "Microsoft-2", "Apple-2"], youtubeUrl: "https://www.youtube.com/watch?v=Oy3g4SEKNw0", pattern: "Tree/BFS", category: "Tree" },
    { id: 117, name: "Implement Trie (Prefix Tree)", difficulty: "Medium", companies: ["Amazon-13", "Google-8", "Twitter-7", "Microsoft-5", "Snapchat-5"], youtubeUrl: "https://www.youtube.com/watch?v=nLTqtBLhPbQ", pattern: "Tree/Trie", category: "Tree" },
    { id: 118, name: "Add and Search Word", difficulty: "Medium", companies: ["Amazon-9", "Google-5", "Microsoft-4", "Apple-2", "Facebook-8"], youtubeUrl: "https://www.youtube.com/watch?v=Z7Kr2b4d9fE", pattern: "Tree/Trie/DFS", category: "Tree" },
    { id: 119, name: "Word Search II", difficulty: "Hard", companies: ["Amazon-28", "Uber-28", "Cisco-12", "Microsoft-9", "Google-6"], youtubeUrl: "https://www.youtube.com/watch?v=8K2Sh9ingJA", pattern: "Tree/Trie/Backtracking", category: "Tree" }
  ];

  // Graph Problems
  const graphProblems = [
    { id: 35, name: "Clone Graph", difficulty: "Medium", companies: ["Facebook-28", "Bloomberg-8", "Amazon-7", "Google-5", "Microsoft-3"], youtubeUrl: "https://www.youtube.com/watch?v=1aN0WWM0-Eo", pattern: "Graph/DFS/BFS", category: "Graph" },
    { id: 36, name: "Course Schedule", difficulty: "Medium", companies: ["Amazon-34", "Google-9", "TikTok-9", "Microsoft-8", "Facebook-7"], youtubeUrl: "https://www.youtube.com/watch?v=ge9WKEsVue0", pattern: "Graph/Topological Sort", category: "Graph" },
    { id: 37, name: "Course Schedule II", difficulty: "Medium", companies: ["Amazon-40", "Google-14", "Microsoft-13", "Apple-6", "TikTok-4"], youtubeUrl: "https://www.youtube.com/watch?v=_RWV4hZdmdk", pattern: "Graph/Topological Sort", category: "Graph" },
    { id: 38, name: "Pacific Atlantic Water Flow", difficulty: "Medium", companies: ["Amazon-6", "Google-6", "Microsoft-4", "Uber-3", "Facebook-2"], youtubeUrl: "https://www.youtube.com/watch?v=fTohawuMcvY", pattern: "Graph/DFS/BFS", category: "Graph" },
    { id: 39, name: "Number of Islands", difficulty: "Medium", companies: ["Amazon-115", "Microsoft-44", "Bloomberg-29", "Facebook-25", "Google-16"], youtubeUrl: "https://www.youtube.com/watch?v=H-2Nh2RXX6g", pattern: "Graph/DFS/BFS", category: "Graph" },
    { id: 40, name: "Longest Consecutive Sequence", difficulty: "Medium", companies: ["Amazon-21", "Google-12", "Microsoft-9", "Bloomberg-6", "Apple-6"], youtubeUrl: "https://www.youtube.com/watch?v=sJBf-JdWGhM", pattern: "Graph/HashSet", category: "Graph" },
    { id: 41, name: "Alien Dictionary", difficulty: "Hard", companies: ["Airbnb-18", "Amazon-12", "Facebook-9", "Google-6", "Microsoft-5"], youtubeUrl: "https://www.youtube.com/watch?v=1QbsN5JyPto", pattern: "Graph/Topological Sort", category: "Graph" },
    { id: 42, name: "Graph Valid Tree", difficulty: "Medium", companies: ["LinkedIn-9", "Google-3", "Microsoft-3", "Amazon-2", "Bloomberg-2"], youtubeUrl: "https://www.youtube.com/watch?v=WU3-vo0MJW0", pattern: "Graph/Union Find", category: "Graph" },
    { id: 43, name: "Number of Provinces", difficulty: "Medium", companies: ["Amazon-22", "DoorDash-8", "Apple-2", "Google-2", "Bloomberg-3"], youtubeUrl: "https://www.youtube.com/watch?v=ff38kbREIX8", pattern: "Graph/DFS/Union Find", category: "Graph" },
    { id: 44, name: "Find the Celebrity", difficulty: "Medium", companies: ["Amazon-5", "Microsoft-4", "LinkedIn-4", "Facebook-5", "Apple-3"], youtubeUrl: "https://www.youtube.com/watch?v=lqdgGNGPS68", pattern: "Graph/Two Pointers", category: "Graph" },
    { id: 45, name: "Number of Connected Components in an Undirected Graph", difficulty: "Medium", companies: ["Amazon-7", "Facebook-3", "Google-2", "Microsoft-2", "Pinterest-2"], youtubeUrl: "https://www.youtube.com/watch?v=NDInpfnTMos", pattern: "Graph/DFS/Union Find", category: "Graph" }
  ];

  // Stack Problems
  const stackProblems = [
    { id: 98, name: "Min Stack", difficulty: "Medium", companies: ["Amazon-17", "Microsoft-11", "Bloomberg-5", "Facebook-3", "Apple-2"], youtubeUrl: "https://www.youtube.com/watch?v=To2iap-ac3g", pattern: "Stack/Design", category: "Stack" },
    { id: 99, name: "Largest Rectangle in Histogram", difficulty: "Hard", companies: ["Amazon-15", "Microsoft-4", "Facebook-3", "Bloomberg-3", "Apple-2"], youtubeUrl: "https://www.youtube.com/watch?v=IasMlShanvc", pattern: "Stack/Monotonic Stack", category: "Stack" },
    { id: 100, name: "Minimum Remove to Make Valid Parentheses", difficulty: "Medium", companies: ["Facebook-142", "Amazon-7", "Bloomberg-5", "Google-3", "Microsoft-4"], youtubeUrl: "https://www.youtube.com/watch?v=h9skhJ_UZQo", pattern: "Stack/String", category: "Stack" },
    { id: 101, name: "Longest Valid Parentheses", difficulty: "Hard", companies: ["Amazon-11", "Microsoft-4", "Google-2", "Facebook-2", "Apple-2"], youtubeUrl: "https://www.youtube.com/watch?v=GrSL3c8G6k8", pattern: "Stack/DP", category: "Stack" },
    { id: 102, name: "Max Stack", difficulty: "Hard", companies: ["LinkedIn-34", "Bloomberg-4", "Lyft-3", "Amazon-3", "Microsoft-7"], youtubeUrl: "https://www.youtube.com/watch?v=SyDmmNQFW_I", pattern: "Stack/Design", category: "Stack" }
  ];

  // Heap Problems
  const heapProblems = [
    { id: 120, name: "High Five", difficulty: "Easy", companies: ["Goldman Sachs-17", "Amazon-5"], youtubeUrl: "https://www.youtube.com/watch?v=z4c5QzarJxI", pattern: "Heap", category: "Heap" },
    { id: 121, name: "Top K Frequent Elements", difficulty: "Medium", companies: ["Facebook-73", "Amazon-30", "Microsoft-8", "Google-7", "Uber-7"], youtubeUrl: "https://www.youtube.com/watch?v=QubWUx59QCk", pattern: "Heap/HashMap", category: "Heap" },
    { id: 122, name: "Kth Largest Element in an Array", difficulty: "Medium", companies: ["Facebook-64", "Amazon-19", "LinkedIn-14", "Microsoft-9", "Google-6"], youtubeUrl: "https://www.youtube.com/watch?v=kmUL7CAOSwc", pattern: "Heap/QuickSelect", category: "Heap" },
    { id: 123, name: "Sliding Window Maximum", difficulty: "Hard", companies: ["Amazon-34", "Google-13", "Apple-7", "Facebook-5", "Microsoft-4"], youtubeUrl: "https://www.youtube.com/watch?v=GIYk1wit12k", pattern: "Heap/Deque", category: "Heap" },
    { id: 124, name: "Find Median from Data Stream", difficulty: "Hard", companies: ["Amazon-26", "Microsoft-14", "Facebook-6", "Apple-5", "Google-4"], youtubeUrl: "https://www.youtube.com/watch?v=IKpM6Q8wTIY", pattern: "Heap/Two Heaps", category: "Heap" },
    { id: 125, name: "Employee Free Time", difficulty: "Hard", companies: ["Google-10", "Uber-4", "Apple-3", "Microsoft-2", "Amazon-3"], youtubeUrl: "https://www.youtube.com/watch?v=99l7goR4y0U", pattern: "Heap/Interval", category: "Heap" }
  ];

  // Bit Manipulation Problems
  const bitProblems = [
    { id: 126, name: "Sum of Two Integers", difficulty: "Medium", companies: ["Adobe-2", "Facebook-3", "Amazon-3", "TCS-3", "Microsoft-3"], youtubeUrl: "https://www.youtube.com/watch?v=oQqe3N2aSd4", pattern: "Bit Manipulation", category: "Bit Manipulation" },
    { id: 127, name: "Number of 1 Bits", difficulty: "Easy", companies: ["Box-11", "Amazon-7", "Facebook-5", "Qualcomm-4", "Cisco-4"], youtubeUrl: "https://www.youtube.com/watch?v=xx9vN3n0_SA", pattern: "Bit Manipulation", category: "Bit Manipulation" },
    { id: 128, name: "Counting Bits", difficulty: "Easy", companies: ["Bloomberg-3", "Microsoft-3", "Google-2", "Amazon-2", "Apple-2"], youtubeUrl: "https://www.youtube.com/watch?v=f9vCuICgRpU", pattern: "Bit Manipulation/DP", category: "Bit Manipulation" },
    { id: 129, name: "Missing Number", difficulty: "Easy", companies: ["Microsoft-13", "Amazon-12", "Apple-4", "Adobe-3", "Facebook-3"], youtubeUrl: "https://www.youtube.com/watch?v=-pLW7935dlc", pattern: "Bit Manipulation/Math", category: "Bit Manipulation" },
    { id: 130, name: "Reverse Bits", difficulty: "Easy", companies: ["Apple-3", "Facebook-3", "Microsoft-2", "Qualcomm-2", "Amazon-3"], youtubeUrl: "https://www.youtube.com/watch?v=-7bpRBMPXh8", pattern: "Bit Manipulation", category: "Bit Manipulation" }
  ];

  // Combine all problems
  const allProblems = [...treeProblems, ...graphProblems, ...stackProblems, ...heapProblems, ...bitProblems];

  const getDifficultyColor = (difficulty) => {
    switch(difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300';
      case 'medium': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300';
      case 'hard': return 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Tree': 'bg-purple-100 text-purple-700 dark:bg-purple-900/50',
      'Graph': 'bg-blue-100 text-blue-700 dark:bg-blue-900/50',
      'Stack': 'bg-orange-100 text-orange-700 dark:bg-orange-900/50',
      'Heap': 'bg-pink-100 text-pink-700 dark:bg-pink-900/50',
      'Bit Manipulation': 'bg-teal-100 text-teal-700 dark:bg-teal-900/50'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  const filteredProblems = allProblems.filter(problem => {
    if (filter !== 'all' && problem.difficulty.toLowerCase() !== filter) return false;
    if (categoryFilter !== 'all' && problem.category !== categoryFilter) return false;
    return true;
  });

  const categories = ['all', 'Tree', 'Graph', 'Stack', 'Heap', 'Bit Manipulation'];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            LeetCode Problems - Data Structures
          </h2>
          <p className="text-[var(--text-secondary)] mt-2">
            Master Trees, Graphs, Stacks, Heaps, and Bit Manipulation for technical interviews
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
          <div className="bg-[var(--card-bg)] rounded-lg p-4 border border-[var(--border-color)]">
            <div className="text-2xl font-bold text-purple-500">{treeProblems.length}</div>
            <div className="text-sm text-[var(--text-secondary)]">Tree Problems</div>
          </div>
          <div className="bg-[var(--card-bg)] rounded-lg p-4 border border-[var(--border-color)]">
            <div className="text-2xl font-bold text-blue-500">{graphProblems.length}</div>
            <div className="text-sm text-[var(--text-secondary)]">Graph Problems</div>
          </div>
          <div className="bg-[var(--card-bg)] rounded-lg p-4 border border-[var(--border-color)]">
            <div className="text-2xl font-bold text-orange-500">{stackProblems.length}</div>
            <div className="text-sm text-[var(--text-secondary)]">Stack Problems</div>
          </div>
          <div className="bg-[var(--card-bg)] rounded-lg p-4 border border-[var(--border-color)]">
            <div className="text-2xl font-bold text-pink-500">{heapProblems.length}</div>
            <div className="text-sm text-[var(--text-secondary)]">Heap Problems</div>
          </div>
          <div className="bg-[var(--card-bg)] rounded-lg p-4 border border-[var(--border-color)]">
            <div className="text-2xl font-bold text-teal-500">{bitProblems.length}</div>
            <div className="text-sm text-[var(--text-secondary)]">Bit Manipulation</div>
          </div>
        </div>

        {/* Filter Buttons - Difficulty */}
        <div className="flex flex-wrap gap-3 mb-4">
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

        {/* Filter Buttons - Category */}
        <div className="flex flex-wrap gap-3 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setCategoryFilter(category)}
              className={`px-4 py-2 rounded-lg capitalize transition-all duration-200 ${
                categoryFilter === category
                  ? 'bg-purple-500 text-white'
                  : 'bg-[var(--card-bg)] text-[var(--text-primary)] border border-[var(--border-color)] hover:bg-[var(--button-secondary-hover)]'
              }`}
            >
              {category === 'all' ? 'All Categories' : category}
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
                  <th className="px-6 py-4 text-left text-sm font-semibold">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Difficulty</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Pattern</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Top Companies</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Solution</th>
                </tr>
              </thead>
              <tbody>
                {filteredProblems.map((problem) => (
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
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(problem.category)}`}>
                          {problem.category}
                        </span>
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
                        <td colSpan="7" className="px-6 py-4">
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-purple-500">Companies that asked this:</span>
                              <div className="flex flex-wrap gap-2">
                                {problem.companies.map((company, i) => (
                                  <span key={i} className="px-2 py-1 bg-[var(--card-bg)] rounded-full text-sm">
                                    {company}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <span className="font-semibold text-purple-500">Problem Pattern:</span>
                              <span className="ml-2 text-[var(--text-secondary)]">{problem.pattern}</span>
                            </div>
                            <div>
                              <a
                                href={`https://leetcode.com/problems/${problem.name.toLowerCase().replace(/\s+/g, '-')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-500 hover:underline"
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
            <p className="text-[var(--text-secondary)]">No problems found for the selected filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeetCodeDataStructures;