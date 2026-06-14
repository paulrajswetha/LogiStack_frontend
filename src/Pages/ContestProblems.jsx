// ContestProblems.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Editor from '@monaco-editor/react';
import { useTheme } from '../Components/ThemeContext';
import Navbar from '../Components/Navbar';

const API = 'http://localhost:5000/api';

const LANGUAGES = {
  javascript: { name: 'JavaScript', monacoId: 'javascript', ext: 'js', icon: '🟨' },
  typescript: { name: 'TypeScript', monacoId: 'typescript', ext: 'ts', icon: '💙' },
  python: { name: 'Python 3', monacoId: 'python', ext: 'py', icon: '🐍' },
  java: { name: 'Java', monacoId: 'java', ext: 'java', icon: '☕' },
};

// Starter code templates for contest problems
const getStarterCode = (language, problemTitle) => {
  const starters = {
    javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    // Write your solution here
    // Example: For input [2,7,11,15] and target 9, return [0,1]
    
}`,
    typescript: `function twoSum(nums: number[], target: number): number[] {
    // Write your solution here
    return [];
}`,
    python: `class Solution:
    def twoSum(self, nums, target):
        # Write your solution here
        pass`,
    java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your solution here
        return new int[]{};
    }
}`
  };
  
  // Custom starters based on problem title
  if (problemTitle === "Add Two Numbers") {
    starters.javascript = `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function addTwoNumbers(l1, l2) {
    // Write your solution here
    
}`;
    starters.python = `class Solution:
    def addTwoNumbers(self, l1, l2):
        # Write your solution here
        pass`;
  }
  
  return starters[language] || starters.javascript;
};

// Mock judge function for contest problems (since they're not in database)
const runContestCode = async (code, language, problemTitle, testInput) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simple mock judge for demo
      // In a real app, you'd want to properly judge the code
      if (problemTitle === "Two Sum" && testInput.includes("[2,7,11,15],9")) {
        // Check if code contains correct solution pattern
        if (code.includes("for") && (code.includes("i") || code.includes("j"))) {
          resolve({
            passed: true,
            output: "[0,1]",
            message: "Test case passed!"
          });
        } else {
          resolve({
            passed: false,
            output: "[]",
            message: "Wrong answer. Try using a hash map or nested loops."
          });
        }
      } else if (problemTitle === "Longest Substring" && testInput.includes("abcabcbb")) {
        if (code.includes("Set") || code.includes("Map")) {
          resolve({
            passed: true,
            output: "3",
            message: "Test case passed!"
          });
        } else {
          resolve({
            passed: false,
            output: "1",
            message: "Wrong answer. Try using a sliding window approach."
          });
        }
      } else {
        // Random result for other problems
        const passed = Math.random() > 0.5;
        resolve({
          passed: passed,
          output: passed ? "Expected output" : "Wrong output",
          message: passed ? "Test case passed!" : "Try again!"
        });
      }
    }, 500);
  });
};

const ContestProblems = () => {
  const { contestId } = useParams();
  const navigate = useNavigate();
  const { theme } = useTheme();
  
  const [contest, setContest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [results, setResults] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);
  const [score, setScore] = useState(0);
  const [submissions, setSubmissions] = useState({});
  const [customInput, setCustomInput] = useState('');
  const [useCustomInput, setUseCustomInput] = useState(false);

  const editorTheme = theme === 'dark' ? 'vs-dark' : 'light';

  // Contest problems data
  const contestProblems = {
    1: {
      id: 1,
      title: "Weekly Contest #42",
      problems: [
        { 
          id: 1, 
          title: "Two Sum", 
          difficulty: "Easy", 
          points: 10, 
          description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers that add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.",
          examples: [
            { input: "nums = [2,7,11,15], target = 9", output: "[0,1]" },
            { input: "nums = [3,2,4], target = 6", output: "[1,2]" }
          ],
          testCases: [
            { input: "[2,7,11,15],9", expectedOutput: "[0,1]" },
            { input: "[3,2,4],6", expectedOutput: "[1,2]" }
          ]
        },
        { 
          id: 2, 
          title: "Add Two Numbers", 
          difficulty: "Medium", 
          points: 20, 
          description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
          examples: [
            { input: "l1 = [2,4,3], l2 = [5,6,4]", output: "[7,0,8]" }
          ],
          testCases: [
            { input: "[2,4,3],[5,6,4]", expectedOutput: "[7,0,8]" }
          ]
        },
        { 
          id: 3, 
          title: "Longest Substring Without Repeating Characters", 
          difficulty: "Medium", 
          points: 20, 
          description: "Given a string `s`, find the length of the longest substring without repeating characters.",
          examples: [
            { input: 's = "abcabcbb"', output: "3" },
            { input: 's = "bbbbb"', output: "1" }
          ],
          testCases: [
            { input: '"abcabcbb"', expectedOutput: "3" },
            { input: '"bbbbb"', expectedOutput: "1" }
          ]
        },
        { 
          id: 4, 
          title: "Median of Two Sorted Arrays", 
          difficulty: "Hard", 
          points: 30, 
          description: "Given two sorted arrays `nums1` and `nums2` of size m and n respectively, return the median of the two sorted arrays.",
          examples: [
            { input: "nums1 = [1,3], nums2 = [2]", output: "2.0" }
          ],
          testCases: [
            { input: "[1,3],[2]", expectedOutput: "2.0" }
          ]
        }
      ],
      endTime: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString()
    }
  };

  useEffect(() => {
    // Load contest data
    const savedContest = localStorage.getItem('currentContest');
    if (savedContest) {
      const contestData = JSON.parse(savedContest);
      setContest(contestData);
      if (contestData.problems && contestData.problems.length > 0) {
        setSelectedProblem(contestData.problems[0]);
        // Load saved code
        const savedCode = localStorage.getItem(`contest_${contestData.id}_problem_${contestData.problems[0].id}_${language}`);
        if (savedCode) {
          setCode(savedCode);
        } else {
          setCode(getStarterCode(language, contestData.problems[0].title));
        }
      }
      setLoading(false);
      
      // Load saved score and submissions
      const savedScore = localStorage.getItem(`contest_${contestData.id}_score`);
      if (savedScore) setScore(parseInt(savedScore));
      const savedSubmissions = localStorage.getItem(`contest_${contestData.id}_submissions`);
      if (savedSubmissions) setSubmissions(JSON.parse(savedSubmissions));
      
      // Timer
      if (contestData.endTime) {
        const end = new Date(contestData.endTime);
        const updateTimer = () => {
          const now = new Date();
          const diff = end - now;
          if (diff <= 0) {
            setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
            alert('Contest time is over! Your submissions will no longer be accepted.');
          } else {
            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            setTimeLeft({ hours, minutes, seconds });
          }
        };
        updateTimer();
        const interval = setInterval(updateTimer, 1000);
        return () => clearInterval(interval);
      }
    } else if (contestProblems[contestId]) {
      const contestData = contestProblems[contestId];
      setContest(contestData);
      if (contestData.problems && contestData.problems.length > 0) {
        setSelectedProblem(contestData.problems[0]);
        setCode(getStarterCode(language, contestData.problems[0].title));
      }
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [contestId, language]);

  // Save code when changed
  useEffect(() => {
    if (selectedProblem && contest && code) {
      localStorage.setItem(`contest_${contest.id}_problem_${selectedProblem.id}_${language}`, code);
    }
  }, [code, selectedProblem, language, contest]);

  const handleRunCode = async () => {
    if (!selectedProblem) return;
    
    setSubmitting(true);
    setResults(null);
    
    try {
      const testInput = useCustomInput && customInput ? customInput : selectedProblem.testCases[0].input;
      const result = await runContestCode(code, language, selectedProblem.title, testInput);
      
      setResults({
        type: 'run',
        data: result
      });
    } catch (error) {
      setResults({
        type: 'error',
        data: { message: error.message || 'Execution failed' }
      });
    }
    setSubmitting(false);
  };

  const handleSubmitProblem = async () => {
    if (!selectedProblem) return;
    
    // Check if already solved
    if (submissions[selectedProblem.id]?.status === 'Accepted') {
      setResults({
        type: 'info',
        data: { message: 'You have already solved this problem!' }
      });
      return;
    }
    
    setSubmitting(true);
    setResults(null);
    
    try {
      // Run all test cases
      let allPassed = true;
      let failedCase = null;
      
      for (const testCase of selectedProblem.testCases) {
        const result = await runContestCode(code, language, selectedProblem.title, testCase.input);
        if (!result.passed) {
          allPassed = false;
          failedCase = testCase;
          break;
        }
      }
      
      if (allPassed) {
        const newScore = score + selectedProblem.points;
        setScore(newScore);
        const newSubmissions = {
          ...submissions,
          [selectedProblem.id]: { 
            status: 'Accepted', 
            score: selectedProblem.points,
            timestamp: new Date().toISOString()
          }
        };
        setSubmissions(newSubmissions);
        
        // Save to localStorage
        localStorage.setItem(`contest_${contest.id}_score`, newScore);
        localStorage.setItem(`contest_${contest.id}_submissions`, JSON.stringify(newSubmissions));
        
        setResults({
          type: 'success',
          data: { message: `✅ Problem solved! +${selectedProblem.points} points` }
        });
      } else {
        setResults({
          type: 'error',
          data: { 
            message: `❌ Wrong Answer on test case: ${failedCase?.input || 'unknown'}\nExpected: ${failedCase?.expectedOutput}\nTry again!`
          }
        });
      }
    } catch (error) {
      setResults({
        type: 'error',
        data: { message: error.message || 'Submission failed' }
      });
    }
    setSubmitting(false);
  };

  const handleProblemSelect = (problem) => {
    setSelectedProblem(problem);
    setResults(null);
    setCustomInput('');
    setUseCustomInput(false);
    // Load saved code for this problem
    const savedCode = localStorage.getItem(`contest_${contest.id}_problem_${problem.id}_${language}`);
    if (savedCode) {
      setCode(savedCode);
    } else {
      setCode(getStarterCode(language, problem.title));
    }
  };

  const formatTime = () => {
    if (!timeLeft) return '--:--:--';
    return `${String(timeLeft.hours).padStart(2, '0')}:${String(timeLeft.minutes).padStart(2, '0')}:${String(timeLeft.seconds).padStart(2, '0')}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[var(--text-secondary)]">Loading contest...</p>
        </div>
      </div>
    );
  }

  if (!contest) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold mb-2">Contest Not Found</h2>
          <p className="text-[var(--text-secondary)] mb-6">The contest you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/contest')}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Back to Contests
          </button>
        </div>
      </div>
    );
  }

  const solvedCount = Object.values(submissions).filter(s => s.status === 'Accepted').length;
  const totalProblems = contest.problems?.length || 0;

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <Navbar />
      
      {/* Contest Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <h1 className="text-2xl font-bold">{contest.title}</h1>
              <p className="text-blue-100 text-sm mt-1">Solve problems to earn points</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-mono font-bold">{formatTime()}</div>
              <p className="text-blue-100 text-xs">Time Remaining</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Score Bar */}
      <div className="bg-[var(--card-bg)] border-b border-[var(--border-color)] sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="flex gap-6">
              <div>
                <span className="text-xs text-[var(--text-secondary)]">Your Score</span>
                <p className="text-xl font-bold text-blue-500">{score}</p>
              </div>
              <div>
                <span className="text-xs text-[var(--text-secondary)]">Problems Solved</span>
                <p className="text-xl font-bold text-green-500">{solvedCount}/{totalProblems}</p>
              </div>
              <div>
                <span className="text-xs text-[var(--text-secondary)]">Max Score</span>
                <p className="text-xl font-bold text-yellow-500">
                  {contest.problems?.reduce((sum, p) => sum + p.points, 0)}
                </p>
              </div>
            </div>
            <button
              onClick={() => navigate('/contest')}
              className="px-4 py-2 text-sm bg-[var(--background)] border border-[var(--border-color)] rounded-lg hover:bg-[var(--hover-bg)] transition-colors"
            >
              ← Exit Contest
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Problem List */}
          <div className="lg:col-span-1">
            <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg overflow-hidden sticky top-20">
              <div className="p-4 border-b border-[var(--border-color)] bg-[var(--surface)]">
                <h3 className="font-semibold">Problems ({totalProblems})</h3>
              </div>
              <div className="divide-y divide-[var(--border-color)] max-h-[calc(100vh-200px)] overflow-y-auto">
                {contest.problems?.map((problem, idx) => {
                  const solved = submissions[problem.id]?.status === 'Accepted';
                  return (
                    <button
                      key={problem.id}
                      onClick={() => handleProblemSelect(problem)}
                      className={`w-full p-4 text-left hover:bg-[var(--hover-bg)] transition-colors ${
                        selectedProblem?.id === problem.id ? 'bg-blue-500/10 border-l-4 border-l-blue-500' : ''
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-medium">{idx + 1}. {problem.title}</span>
                            {solved && <span className="text-xs text-green-500">✓ Solved</span>}
                          </div>
                          <div className="flex gap-2">
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              problem.difficulty === 'Easy' ? 'bg-green-500/20 text-green-500' :
                              problem.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-500' :
                              'bg-red-500/20 text-red-500'
                            }`}>
                              {problem.difficulty}
                            </span>
                            <span className="text-xs text-[var(--text-secondary)]">{problem.points} pts</span>
                          </div>
                        </div>
                        {solved && (
                          <div className="text-green-500 text-lg">✓</div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Problem Content and Editor */}
          <div className="lg:col-span-2">
            {selectedProblem && (
              <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg overflow-hidden">
                {/* Problem Description */}
                <div className="p-6 border-b border-[var(--border-color)] max-h-[400px] overflow-y-auto">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-xl font-bold mb-2">{selectedProblem.title}</h2>
                      <div className="flex gap-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          selectedProblem.difficulty === 'Easy' ? 'bg-green-500/20 text-green-500' :
                          selectedProblem.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-500' :
                          'bg-red-500/20 text-red-500'
                        }`}>
                          {selectedProblem.difficulty}
                        </span>
                        <span className="text-xs text-[var(--text-secondary)]">{selectedProblem.points} points</span>
                      </div>
                    </div>
                    {submissions[selectedProblem.id]?.status === 'Accepted' && (
                      <div className="bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-sm font-medium">
                        ✓ Solved • +{selectedProblem.points} pts
                      </div>
                    )}
                  </div>
                  
                  <div className="prose prose-invert max-w-none">
                    <p className="text-[var(--text-secondary)] whitespace-pre-wrap">{selectedProblem.description}</p>
                  </div>
                  
                  {selectedProblem.examples && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold mb-2">Examples:</h4>
                      {selectedProblem.examples.map((ex, idx) => (
                        <div key={idx} className="bg-[var(--background)] p-3 rounded-lg border border-[var(--border-color)] mb-2">
                          <p className="text-sm font-mono">Input: {ex.input}</p>
                          <p className="text-sm font-mono mt-1">Output: {ex.output}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Code Editor */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
                    <div className="flex gap-2">
                      {Object.entries(LANGUAGES).map(([key, lang]) => (
                        <button
                          key={key}
                          onClick={() => setLanguage(key)}
                          className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                            language === key
                              ? 'bg-blue-500 text-white'
                              : 'bg-[var(--background)] border border-[var(--border-color)] hover:bg-[var(--hover-bg)]'
                          }`}
                        >
                          {lang.icon} {lang.name}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() => setCode(getStarterCode(language, selectedProblem.title))}
                      className="text-xs text-[var(--text-secondary)] hover:text-blue-500 transition-colors"
                    >
                      Reset Code
                    </button>
                  </div>
                  
                  <div className="h-[450px] mb-4 border border-[var(--border-color)] rounded-lg overflow-hidden">
                    <Editor
                      height="100%"
                      language={LANGUAGES[language]?.monacoId || 'javascript'}
                      theme={editorTheme}
                      value={code}
                      onChange={value => setCode(value || '')}
                      options={{
                        minimap: { enabled: false },
                        fontSize: 13,
                        lineNumbers: 'on',
                        automaticLayout: true,
                        scrollBeyondLastLine: false,
                        wordWrap: 'on',
                        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                        fontLigatures: true,
                      }}
                    />
                  </div>
                  
                  {/* Custom Input Toggle */}
                  <div className="mb-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={useCustomInput}
                        onChange={(e) => setUseCustomInput(e.target.checked)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-[var(--text-secondary)]">Use custom input</span>
                    </label>
                    {useCustomInput && (
                      <textarea
                        value={customInput}
                        onChange={(e) => setCustomInput(e.target.value)}
                        placeholder="Enter custom input (e.g., [2,7,11,15],9)"
                        className="mt-2 w-full p-2 bg-[var(--background)] border border-[var(--border-color)] rounded-lg font-mono text-sm resize-y"
                        rows={3}
                      />
                    )}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 mb-4">
                    <button
                      onClick={handleRunCode}
                      disabled={submitting}
                      className="px-6 py-2 bg-[var(--button-secondary)] border border-[var(--border-color)] rounded-lg hover:bg-[var(--hover-bg)] transition-colors disabled:opacity-50"
                    >
                      ▶ Run Code
                    </button>
                    <button
                      onClick={handleSubmitProblem}
                      disabled={submitting || submissions[selectedProblem.id]?.status === 'Accepted'}
                      className={`px-6 py-2 rounded-lg transition-colors ${
                        submissions[selectedProblem.id]?.status === 'Accepted'
                          ? 'bg-green-500 text-white cursor-default'
                          : 'bg-blue-500 text-white hover:bg-blue-600'
                      } disabled:opacity-50`}
                    >
                      {submitting ? 'Submitting...' : submissions[selectedProblem.id]?.status === 'Accepted' ? '✓ Solved' : 'Submit Solution'}
                    </button>
                  </div>
                  
                  {/* Results Display */}
                  {results && (
                    <div className={`p-4 rounded-lg ${
                      results.type === 'success' ? 'bg-green-500/20 border border-green-500' :
                      results.type === 'error' ? 'bg-red-500/20 border border-red-500' :
                      results.type === 'info' ? 'bg-blue-500/20 border border-blue-500' :
                      'bg-[var(--background)] border border-[var(--border-color)]'
                    }`}>
                      {results.type === 'success' && (
                        <div className="text-green-500">{results.data.message}</div>
                      )}
                      {results.type === 'error' && (
                        <div className="text-red-500 whitespace-pre-wrap">{results.data.message}</div>
                      )}
                      {results.type === 'info' && (
                        <div className="text-blue-500">{results.data.message}</div>
                      )}
                      {results.type === 'run' && results.data && (
                        <div>
                          <div className={`font-semibold mb-2 ${results.data.passed ? 'text-green-500' : 'text-red-500'}`}>
                            {results.data.passed ? '✓ Test case passed!' : '✗ Test case failed'}
                          </div>
                          {results.data.output && (
                            <div className="mt-2">
                              <div className="text-sm font-medium mb-1">Your Output:</div>
                              <pre className="font-mono text-sm bg-[var(--background)] p-2 rounded border border-[var(--border-color)]">
                                {results.data.output}
                              </pre>
                            </div>
                          )}
                          {results.data.message && results.data.message !== 'Test case passed!' && !results.data.passed && (
                            <div className="mt-2 text-sm text-[var(--text-secondary)]">
                              💡 {results.data.message}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestProblems;