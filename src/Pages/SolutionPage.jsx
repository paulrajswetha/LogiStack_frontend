// SolutionPage.jsx
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { ThemeToggle } from '../Components/ThemeToggle';
import Navbar from '../Components/Navbar';

const SolutionPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('Description');
  const [code, setCode] = useState('// Write your solution here\n');
  const [selectedLanguage, setSelectedLanguage] = useState('Java');
  const [problem, setProblem] = useState(null);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    axios.get(`https://logistack-backend.onrender.com/api/problems/${id}`)
      .then(res => setProblem(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleRun = async () => {
    setIsRunning(true);
    setOutput('Running...');
    try {
      const response = await axios.post(`https://logistack-backend.onrender.com/api/run/${id}`, {
        code,
        language: selectedLanguage.toLowerCase(),
      });
      setOutput(response.data.output);
    } catch (err) {
      setOutput(err.response?.data?.message || 'Execution failed');
    } finally {
      setIsRunning(false);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`https://logistack-backend.onrender.com/api/submit/${id}`, {
        code,
        language: selectedLanguage.toLowerCase(),
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      alert(response.data.message);
    } catch (err) {
      alert(err.response?.data?.message || 'Submission failed');
    }
  };

  const tabs = ['Description', 'Editorial', 'Solutions', 'Submissions'];

  if (!problem) return <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <Navbar/>
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <Link to="/home" className="text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors duration-200 mb-2 inline-block">
                ← Back to Problems
              </Link>
              <h2 className="text-3xl font-extrabold">{problem.title}</h2>
            </div>
            <ThemeToggle />
          </div>
          <div className="flex gap-2 mt-2">
            <span className={`px-3 py-1 text-sm font-medium rounded-full ${
              problem.difficulty === 'Easy' ? 'bg-green-500/20 text-green-600 dark:text-green-400' :
              problem.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400' :
              'bg-red-500/20 text-red-600 dark:text-red-400'
            }`}>
              {problem.difficulty}
            </span>
            <span className="px-3 py-1 text-sm font-medium rounded-full bg-[var(--hover-bg)] text-[var(--text-secondary)] border border-[var(--border-color)]">
              Acceptance: {problem.acceptance_rate}%
            </span>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/2 bg-[var(--card-bg)] rounded-lg shadow-lg overflow-hidden">
            <div className="border-b border-gray-700">
              <div className="flex">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                      activeTab === tab 
                        ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-500 bg-[var(--background)]' 
                        : 'text-[var(--text-secondary)] hover:text-blue-500'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-6">
              {activeTab === 'Description' && (
                <div className="space-y-4">
                  <p className="text-[var(--text-primary)] leading-relaxed">{problem.description}</p>
                  {problem.examples && problem.examples.map((example, i) => (
                    <div key={i} className="bg-[var(--background)] border border-[var(--border-color)] rounded-lg p-4">
                      <p className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Example {i + 1}:</p>
                      <pre className="bg-[var(--card-bg)] border border-[var(--border-color)] p-3 rounded text-sm overflow-x-auto text-[var(--text-primary)]">
                        <code>Input: {example.input}</code>
                        <br />
                        <code>Output: {example.output}</code>
                        {example.explanation && <><br /><code>Explanation: {example.explanation}</code></>}
                      </pre>
                    </div>
                  ))}
                  {problem.constraints && (
                    <div>
                      <p className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Constraints:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        {problem.constraints.map((constraint, i) => (
                          <li key={i} className="text-[var(--text-secondary)]">{constraint}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
              {activeTab === 'Editorial' && (
                <div className="text-center py-12">
                  <p className="text-[var(--text-secondary)]">Editorial content coming soon...</p>
                </div>
              )}
              {activeTab === 'Solutions' && (
                <div className="text-center py-12">
                  <p className="text-[var(--text-secondary)]">Community solutions coming soon...</p>
                </div>
              )}
              {activeTab === 'Submissions' && (
                <div className="text-center py-12">
                  <p className="text-[var(--text-secondary)]">Your submission history coming soon...</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-[var(--card-bg)] rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <select
                  className="bg-[var(--background)] border border-[var(--border-color)] rounded-lg px-4 py-2 text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                >
                  <option value="Java">Java</option>
                  <option value="Python">Python</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="C++">C++</option>
                </select>
                <div className="flex gap-2">
                  <button
                    onClick={handleRun}
                    disabled={isRunning}
                    className="px-4 py-2 bg-[var(--hover-bg)] text-[var(--text-primary)] border border-[var(--border-color)] rounded-lg hover:bg-[var(--border-color)] transition-colors duration-200 disabled:opacity-50"
                  >
                    {isRunning ? 'Running...' : 'Run'}
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Submit
                  </button>
                </div>
              </div>
              <textarea
                className="w-full h-80 bg-[var(--background)] border border-[var(--border-color)] rounded-lg p-4 text-[var(--text-primary)] font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Write your solution here..."
              />
              {output && (
                <div className="mt-4">
                  <h3 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">Output:</h3>
                  <pre className="bg-[var(--background)] border border-[var(--border-color)] rounded-lg p-4 text-sm overflow-x-auto text-[var(--text-primary)]">
                    {output}
                  </pre>
                </div>
              )}
              {problem.testCases && problem.testCases.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">Sample Test Cases:</h3>
                  <div className="space-y-2">
                    {problem.testCases.slice(0, 2).map((test, i) => (
                      <div key={i} className="bg-[var(--background)] rounded-lg p-3">
                        <p className="text-xs text-[var(--text-secondary)]">Test Case {i + 1}</p>
                        <p className="text-sm">Input: {test.input}</p>
                        <p className="text-sm">Expected Output: {test.expectedOutput}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionPage;
