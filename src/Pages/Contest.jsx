// Contest.jsx - Full featured version with registration, participation, and results
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Components/Navbar';

const Contest = () => {
  const navigate = useNavigate();
  const [contests, setContests] = useState({
    ongoing: [],
    upcoming: [],
    past: []
  });
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('ongoing');
  const [selectedContest, setSelectedContest] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalAction, setModalAction] = useState('');
  const [registering, setRegistering] = useState(false);
  const [joinedContests, setJoinedContests] = useState([]);
  const [userContestResults, setUserContestResults] = useState({});

  // Mock contest data with proper categorization
  const mockContests = {
    ongoing: [
      {
        id: 1,
        title: "Weekly Contest #42",
        description: "Solve 4 problems in 2 hours. Test your DSA skills against top coders!",
        startTime: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        endTime: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
        duration: "2 hours",
        participants: 1247,
        registered: 1247,
        prize: "$500 Prize Pool",
        problems: [
          { id: 1, title: "Two Sum", difficulty: "Easy", points: 10 },
          { id: 2, title: "Add Two Numbers", difficulty: "Medium", points: 20 },
          { id: 3, title: "Longest Substring", difficulty: "Medium", points: 20 },
          { id: 4, title: "Median of Arrays", difficulty: "Hard", points: 30 }
        ],
        difficulty: "Mixed",
        rules: [
          "Duration: 2 hours",
          "Solve problems in any order",
          "Partial scoring available",
          "No penalty for wrong submissions"
        ]
      },
      {
        id: 2,
        title: "SQL Challenge #15",
        description: "Test your database query skills with complex SQL problems.",
        startTime: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
        endTime: new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString(),
        duration: "2 hours",
        participants: 567,
        registered: 567,
        prize: "$150 Prize Pool",
        problems: [
          { id: 5, title: "Customer Analysis", difficulty: "Easy", points: 15 },
          { id: 6, title: "Sales Reports", difficulty: "Medium", points: 25 },
          { id: 7, title: "Employee Hierarchy", difficulty: "Hard", points: 35 }
        ],
        difficulty: "Intermediate",
        rules: [
          "Duration: 2 hours",
          "All queries must be in SQL",
          "Optimization matters",
          "Time limit per query"
        ]
      }
    ],
    upcoming: [
      {
        id: 3,
        title: "Biweekly Contest #128",
        description: "Mixed difficulty problems covering arrays, trees, and dynamic programming.",
        startTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        endTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000 + 2.5 * 60 * 60 * 1000).toISOString(),
        duration: "2.5 hours",
        participants: 0,
        registered: 342,
        prize: "$300 Prize Pool",
        problems: [
          { id: 8, title: "Array Manipulation", difficulty: "Easy", points: 10 },
          { id: 9, title: "Tree Traversal", difficulty: "Medium", points: 20 },
          { id: 10, title: "DP Problems", difficulty: "Hard", points: 30 }
        ],
        difficulty: "Hard",
        rules: [
          "Duration: 2.5 hours",
          "Submit solutions in any language",
          "Hidden test cases",
          "Ranking based on score and time"
        ]
      },
      {
        id: 4,
        title: "LogiStack Championship",
        description: "Quarterly championship with advanced algorithmic challenges.",
        startTime: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
        endTime: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000 + 4 * 60 * 60 * 1000).toISOString(),
        duration: "4 hours",
        participants: 3421,
        registered: 2156,
        prize: "$2000 Prize Pool",
        problems: [
          { id: 11, title: "Graph Algorithms", difficulty: "Hard", points: 30 },
          { id: 12, title: "System Design", difficulty: "Expert", points: 40 },
          { id: 13, title: "Advanced DP", difficulty: "Hard", points: 35 }
        ],
        difficulty: "Expert",
        rules: [
          "Duration: 4 hours",
          "Multiple test cases per problem",
          "Code must be optimized",
          "Live leaderboard"
        ]
      }
    ],
    past: [
      {
        id: 7,
        title: "Weekly Contest #41",
        description: "Classic algorithmic challenges for all skill levels.",
        startTime: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        endTime: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000).toISOString(),
        duration: "2 hours",
        participants: 1892,
        prize: "$500 Prize Pool",
        topPerformers: [
          { username: "user123", rank: 1, score: 80, time: "1:45:30" },
          { username: "dev_pro", rank: 2, score: 75, time: "1:52:15" },
          { username: "coder_x", rank: 3, score: 70, time: "1:58:45" }
        ],
        winner: "user123",
        difficulty: "Mixed",
        results: {
          totalParticipants: 1892,
          averageScore: 45.5,
          topScore: 80,
          userRank: null
        }
      },
      {
        id: 8,
        title: "React Challenge #3",
        description: "Build interactive components and solve React problems.",
        startTime: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
        endTime: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000).toISOString(),
        duration: "2 hours",
        participants: 743,
        prize: "$300 Prize Pool",
        topPerformers: [
          { username: "react_master", rank: 1, score: 95, time: "1:30:15" },
          { username: "hook_lover", rank: 2, score: 88, time: "1:45:30" },
          { username: "state_pro", rank: 3, score: 82, time: "1:52:20" }
        ],
        winner: "react_master",
        difficulty: "Intermediate",
        results: {
          totalParticipants: 743,
          averageScore: 52.3,
          topScore: 95,
          userRank: null
        }
      }
    ]
  };

  useEffect(() => {
    // Load saved joined contests from localStorage
    const savedJoined = localStorage.getItem('joinedContests');
    if (savedJoined) {
      setJoinedContests(JSON.parse(savedJoined));
    }
    
    // Load user contest results
    const savedResults = localStorage.getItem('userContestResults');
    if (savedResults) {
      setUserContestResults(JSON.parse(savedResults));
    }
    
    fetchContests();
  }, []);

  const fetchContests = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/contests');
      if (response.data && Array.isArray(response.data) && response.data.length > 0) {
        const now = new Date();
        const categorized = {
          ongoing: [],
          upcoming: [],
          past: []
        };
        
        response.data.forEach(contest => {
          const start = new Date(contest.startTime);
          const end = new Date(contest.endTime);
          
          if (now >= start && now <= end) {
            categorized.ongoing.push(contest);
          } else if (now < start) {
            categorized.upcoming.push(contest);
          } else {
            categorized.past.push(contest);
          }
        });
        
        setContests(categorized);
      } else {
        setContests(mockContests);
      }
    } catch (err) {
      console.error('API error, using mock data:', err);
      setContests(mockContests);
    } finally {
      setLoading(false);
    }
  };

  const getContestStatus = (startTime, endTime) => {
    const now = new Date();
    const start = new Date(startTime);
    const end = new Date(endTime);
    
    if (now < start) return { status: 'Upcoming', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300', action: 'Register' };
    if (now > end) return { status: 'Ended', color: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300', action: 'Results' };
    return { status: 'Live', color: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300', action: 'Join' };
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const getTimeRemaining = (startTime) => {
    const now = new Date();
    const start = new Date(startTime);
    const diff = start - now;
    
    if (diff <= 0) return null;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (days > 0) return `${days}d ${hours}h remaining`;
    if (hours > 0) return `${hours}h ${minutes}m remaining`;
    return `${minutes}m remaining`;
  };

  const getContestTimeRemaining = (endTime) => {
    const now = new Date();
    const end = new Date(endTime);
    const diff = end - now;
    
    if (diff <= 0) return null;
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    return `${hours}h ${minutes}m remaining`;
  };

  const getDifficultyStyles = (difficulty) => {
    const styles = {
      Easy: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300',
      Intermediate: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300',
      Medium: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300',
      Advanced: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
      Hard: 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300',
      Expert: 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300',
      Mixed: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300'
    };
    return styles[difficulty] || 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
  };

  const handleContestAction = (contest, action) => {
    setSelectedContest(contest);
    setModalAction(action);
    setShowModal(true);
  };

  const handleRegister = async () => {
    setRegistering(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if already registered
    if (joinedContests.includes(selectedContest.id)) {
      alert('You are already registered for this contest!');
      setShowModal(false);
      setRegistering(false);
      return;
    }
    
    // Register user
    const updatedJoined = [...joinedContests, selectedContest.id];
    setJoinedContests(updatedJoined);
    localStorage.setItem('joinedContests', JSON.stringify(updatedJoined));
    
    // Update contest participant count
    const updatedContests = { ...contests };
    const contestList = updatedContests[activeTab];
    const contestIndex = contestList.findIndex(c => c.id === selectedContest.id);
    if (contestIndex !== -1) {
      contestList[contestIndex].registered = (contestList[contestIndex].registered || 0) + 1;
      setContests(updatedContests);
    }
    
    alert(`Successfully registered for ${selectedContest.title}!`);
    setShowModal(false);
    setRegistering(false);
  };

  const handleJoinContest = () => {
    // Save current contest to localStorage for the coding page
    localStorage.setItem('currentContest', JSON.stringify({
      id: selectedContest.id,
      title: selectedContest.title,
      problems: selectedContest.problems,
      startTime: selectedContest.startTime,
      endTime: selectedContest.endTime
    }));
    
    // Navigate to coding page with contest mode
    navigate(`/contest/${selectedContest.id}/problems`);
  };

  const handleViewResults = () => {
    // Generate mock results if not exists
    if (!userContestResults[selectedContest.id]) {
      const totalScore = selectedContest.problems.reduce((sum, p) => sum + p.points, 0);
      const userScore = Math.floor(Math.random() * totalScore);
      const userRank = Math.floor(Math.random() * selectedContest.participants) + 1;
      
      const results = {
        contestId: selectedContest.id,
        contestTitle: selectedContest.title,
        userScore: userScore,
        totalScore: totalScore,
        userRank: userRank,
        totalParticipants: selectedContest.participants,
        problemsAttempted: Math.floor(Math.random() * selectedContest.problems.length),
        problemsSolved: Math.floor(Math.random() * selectedContest.problems.length),
        timeTaken: `${Math.floor(Math.random() * 3) + 1}h ${Math.floor(Math.random() * 60)}m`,
        percentile: Math.floor((1 - userRank / selectedContest.participants) * 100),
        performance: userRank <= 10 ? 'Excellent!' : userRank <= 50 ? 'Good!' : userRank <= 100 ? 'Average' : 'Needs Improvement'
      };
      
      const updatedResults = { ...userContestResults, [selectedContest.id]: results };
      setUserContestResults(updatedResults);
      localStorage.setItem('userContestResults', JSON.stringify(updatedResults));
    }
    
    setShowModal(false);
    // Show results in a modal or navigate to results page
    setTimeout(() => {
      const results = userContestResults[selectedContest.id] || 
        JSON.parse(localStorage.getItem('userContestResults'))?.[selectedContest.id];
      if (results) {
        alert(`📊 Contest Results: ${selectedContest.title}\n\n` +
          `Your Score: ${results.userScore}/${results.totalScore}\n` +
          `Rank: ${results.userRank}/${results.totalParticipants}\n` +
          `Percentile: ${results.percentile}%\n` +
          `Problems Solved: ${results.problemsSolved}/${results.problemsAttempted}\n` +
          `Time Taken: ${results.timeTaken}\n` +
          `Performance: ${results.performance}\n\n` +
          `Top Performer: ${selectedContest.winner || 'Not available'}`);
      } else {
        alert(`Results for ${selectedContest.title}\n\n` +
          `Total Participants: ${selectedContest.participants}\n` +
          `Top Score: ${selectedContest.results?.topScore || 'N/A'}\n\n` +
          `Check the leaderboard for more details!`);
      }
    }, 100);
  };

  const isUserRegistered = (contestId) => {
    return joinedContests.includes(contestId);
  };

  const currentContests = contests[activeTab] || [];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <Navbar />
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🏆</div>
          <h2 className="text-4xl font-extrabold">LogiStack Contest</h2>
          <p className="text-[var(--text-secondary)] mt-2">Compete weekly and climb the leaderboard</p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[var(--border-color)] mb-8">
          <button
            onClick={() => setActiveTab('ongoing')}
            className={`px-6 py-3 text-sm font-medium transition-colors duration-200 ${
              activeTab === 'ongoing'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-[var(--text-secondary)] hover:text-blue-500'
            }`}
          >
            🟢 Ongoing ({contests.ongoing.length})
          </button>
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-6 py-3 text-sm font-medium transition-colors duration-200 ${
              activeTab === 'upcoming'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-[var(--text-secondary)] hover:text-blue-500'
            }`}
          >
            📅 Upcoming ({contests.upcoming.length})
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`px-6 py-3 text-sm font-medium transition-colors duration-200 ${
              activeTab === 'past'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-[var(--text-secondary)] hover:text-blue-500'
            }`}
          >
            🏁 Past ({contests.past.length})
          </button>
        </div>
        
        {loading ? (
          <div className="text-center py-12">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
              <p className="text-[var(--text-secondary)]">Loading contests...</p>
            </div>
          </div>
        ) : currentContests.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📭</div>
            <p className="text-[var(--text-secondary)] text-lg">No contests available in this category.</p>
            <p className="text-sm text-[var(--text-secondary)] mt-2">Check back soon for upcoming competitions!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentContests.map((contest, index) => {
              const { status, color, action } = getContestStatus(contest.startTime, contest.endTime);
              const timeRemaining = activeTab === 'upcoming' ? getTimeRemaining(contest.startTime) : 
                                   (status === 'Live' ? getContestTimeRemaining(contest.endTime) : null);
              const isRegistered = isUserRegistered(contest.id);
              
              return (
                <div key={contest.id} className="bg-[var(--card-bg)] rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                  <div className={`h-32 bg-gradient-to-r ${
                    index % 3 === 0 ? 'from-blue-600 to-blue-400' : 
                    index % 3 === 1 ? 'from-blue-600 to-teal-500' : 
                    'from-indigo-600 to-blue-500'
                  } flex items-center justify-center relative`}>
                    <div className="text-white text-5xl">🏆</div>
                    {status === 'Live' && (
                      <div className="absolute top-2 right-2">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                      </div>
                    )}
                    {isRegistered && status === 'Upcoming' && (
                      <div className="absolute top-2 left-2">
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">Registered ✓</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${color}`}>
                        {status}
                      </span>
                      <span className="text-xs text-[var(--text-secondary)]">
                        {contest.duration || '2 hours'}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{contest.title}</h3>
                    <p className="text-[var(--text-secondary)] text-sm mb-3">{contest.description}</p>
                    
                    {contest.difficulty && (
                      <div className="mb-3">
                        <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyStyles(contest.difficulty)}`}>
                          {contest.difficulty}
                        </span>
                      </div>
                    )}
                    
                    <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                      <div className="flex items-center gap-2">
                        <span>🕒</span>
                        <span>Starts: {formatDate(contest.startTime)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>⏰</span>
                        <span>Ends: {formatDate(contest.endTime)}</span>
                      </div>
                      {timeRemaining && (
                        <div className="flex items-center gap-2 text-blue-500 font-semibold">
                          <span>⏳</span>
                          <span>{timeRemaining}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <span>👥</span>
                        <span>{contest.participants?.toLocaleString() || 0} participants</span>
                      </div>
                      {contest.registered > 0 && status === 'Upcoming' && (
                        <div className="flex items-center gap-2">
                          <span>✅</span>
                          <span>{contest.registered} registered</span>
                        </div>
                      )}
                      {contest.prize && (
                        <div className="flex items-center gap-2">
                          <span>💰</span>
                          <span className="text-blue-500 font-semibold">{contest.prize}</span>
                        </div>
                      )}
                      {contest.problems && contest.problems.length > 0 && (
                        <div className="flex items-start gap-2">
                          <span>📝</span>
                          <div className="flex flex-wrap gap-1">
                            {contest.problems.slice(0, 3).map((problem, i) => (
                              <span key={i} className="text-xs bg-[var(--background)] text-[var(--text-secondary)] px-2 py-0.5 rounded border border-[var(--border-color)]">
                                {problem.title}
                              </span>
                            ))}
                            {contest.problems.length > 3 && (
                              <span className="text-xs bg-[var(--background)] text-[var(--text-secondary)] px-2 py-0.5 rounded border border-[var(--border-color)]">
                                +{contest.problems.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                      {contest.topPerformers && contest.topPerformers.length > 0 && (
                        <div className="flex items-start gap-2">
                          <span>🏅</span>
                          <div className="flex flex-col gap-1">
                            {contest.topPerformers.slice(0, 3).map((performer, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs">
                                <span className="text-blue-500 font-bold">#{performer.rank}</span>
                                <span>{performer.username}</span>
                                <span className="text-green-500">{performer.score} pts</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {contest.winner && (
                        <div className="flex items-center gap-2">
                          <span>👑</span>
                          <span className="text-blue-500 font-semibold">Winner: {contest.winner}</span>
                        </div>
                      )}
                    </div>
                    
                    <button 
                      onClick={() => handleContestAction(contest, action)}
                      className={`mt-4 w-full py-2 rounded-lg transition-colors duration-200 ${
                        status === 'Live' 
                          ? 'bg-blue-500 text-white hover:bg-blue-600' 
                          : status === 'Upcoming'
                          ? isRegistered
                            ? 'bg-green-500 text-white hover:bg-green-600'
                            : 'bg-[var(--button-secondary)] text-[var(--text-primary)] hover:bg-[var(--button-secondary-hover)] border border-[var(--border-color)]'
                          : 'bg-[var(--background)] text-[var(--text-secondary)] hover:bg-[var(--button-secondary)] border border-[var(--border-color)]'
                      }`}
                    >
                      {status === 'Live' ? '🚀 Join Contest Now' : 
                       status === 'Upcoming' ? (isRegistered ? '✓ Registered' : '📝 Register Now') : 
                       '📊 View Results'}
                    </button>
                    
                    {status === 'Upcoming' && isRegistered && (
                      <p className="text-xs text-center text-green-500 mt-2">
                        You're registered! Get ready for the contest.
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
        
        {/* Featured Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-500/10 to-blue-400/10 rounded-lg p-8 border border-blue-500/20">
          <h3 className="text-2xl font-bold mb-4 text-center">🎯 Featured Contest</h3>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-500 mb-2">LogiStack Championship 2025</p>
            <p className="text-[var(--text-secondary)] mb-4">The biggest coding competition of the year!</p>
            <div className="flex justify-center gap-8 mb-6">
              <div>
                <p className="text-2xl font-bold text-blue-500">$10,000</p>
                <p className="text-xs text-[var(--text-secondary)]">Prize Pool</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-500">5,000+</p>
                <p className="text-xs text-[var(--text-secondary)]">Participants</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-500">4</p>
                <p className="text-xs text-[var(--text-secondary)]">Rounds</p>
              </div>
            </div>
            <button 
              onClick={() => {
                const championshipContest = {
                  id: 100,
                  title: "LogiStack Championship 2025",
                  description: "The biggest coding competition of the year!",
                  startTime: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
                  endTime: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000 + 4 * 60 * 60 * 1000).toISOString(),
                  problems: [
                    { id: 101, title: "Algorithm Challenge", difficulty: "Hard", points: 30 },
                    { id: 102, title: "Data Structures", difficulty: "Hard", points: 30 },
                    { id: 103, title: "System Design", difficulty: "Expert", points: 40 }
                  ]
                };
                handleContestAction(championshipContest, 'Register');
              }}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Register for Championship
            </button>
          </div>
        </div>
      </div>

      {/* Modal for contest actions */}
      {showModal && selectedContest && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[var(--card-bg)] rounded-lg max-w-md w-full p-6 border border-[var(--border-color)]">
            <h3 className="text-xl font-bold mb-4">
              {modalAction === 'Join' ? 'Join Contest' : 
               modalAction === 'Register' ? 'Register for Contest' : 
               'Contest Results'}
            </h3>
            
            <div className="mb-4">
              <p className="text-lg font-semibold">{selectedContest.title}</p>
              <p className="text-sm text-[var(--text-secondary)] mt-2">{selectedContest.description}</p>
            </div>
            
            {modalAction === 'Join' && (
              <div className="space-y-3 mb-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <p className="text-sm font-semibold mb-2">Contest Rules:</p>
                  <ul className="text-xs text-[var(--text-secondary)] space-y-1">
                    {selectedContest.rules?.map((rule, i) => (
                      <li key={i}>• {rule}</li>
                    ))}
                    <li>• Duration: {selectedContest.duration}</li>
                    <li>• Total Points: {selectedContest.problems?.reduce((sum, p) => sum + p.points, 0)}</li>
                  </ul>
                </div>
                <p className="text-sm">Ready to start the contest? The timer will begin immediately.</p>
              </div>
            )}
            
            {modalAction === 'Register' && (
              <div className="space-y-3 mb-4">
                <div className="bg-green-500/10 p-3 rounded-lg">
                  <p className="text-sm font-semibold mb-2">What to expect:</p>
                  <ul className="text-xs text-[var(--text-secondary)] space-y-1">
                    <li>• Contest starts on {formatDate(selectedContest.startTime)}</li>
                    <li>• You'll have {selectedContest.duration} to solve {selectedContest.problems?.length} problems</li>
                    <li>• Get notified before contest starts</li>
                    <li>• Compete with participants worldwide</li>
                  </ul>
                </div>
                {isUserRegistered(selectedContest.id) && (
                  <p className="text-green-500 text-sm">✓ You are already registered for this contest!</p>
                )}
              </div>
            )}
            
            {modalAction === 'Results' && (
              <div className="space-y-3 mb-4">
                {userContestResults[selectedContest.id] ? (
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <p className="text-sm font-semibold mb-2">Your Performance:</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Score:</span>
                        <span className="font-bold">{userContestResults[selectedContest.id].userScore}/{userContestResults[selectedContest.id].totalScore}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Rank:</span>
                        <span className="font-bold">{userContestResults[selectedContest.id].userRank}/{userContestResults[selectedContest.id].totalParticipants}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Percentile:</span>
                        <span className="font-bold">{userContestResults[selectedContest.id].percentile}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Problems Solved:</span>
                        <span className="font-bold">{userContestResults[selectedContest.id].problemsSolved}/{userContestResults[selectedContest.id].problemsAttempted}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time Taken:</span>
                        <span className="font-bold">{userContestResults[selectedContest.id].timeTaken}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-yellow-500/10 p-3 rounded-lg">
                    <p className="text-sm">You haven't participated in this contest. Check the leaderboard for top performers!</p>
                    {selectedContest.topPerformers && (
                      <div className="mt-3">
                        <p className="text-sm font-semibold">Top Performers:</p>
                        {selectedContest.topPerformers.slice(0, 3).map((p, i) => (
                          <div key={i} className="text-xs mt-1">
                            #{p.rank}: {p.username} - {p.score} pts
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
            
            <div className="flex gap-3">
              {modalAction === 'Join' && (
                <button
                  onClick={handleJoinContest}
                  className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Start Contest
                </button>
              )}
              {modalAction === 'Register' && (
                <button
                  onClick={handleRegister}
                  disabled={registering || isUserRegistered(selectedContest.id)}
                  className={`flex-1 py-2 rounded-lg transition-colors ${
                    isUserRegistered(selectedContest.id)
                      ? 'bg-green-500 text-white cursor-default'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  } ${registering ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {registering ? 'Registering...' : 
                   isUserRegistered(selectedContest.id) ? '✓ Already Registered' : 
                   'Confirm Registration'}
                </button>
              )}
              {modalAction === 'Results' && (
                <button
                  onClick={handleViewResults}
                  className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  View Detailed Results
                </button>
              )}
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-[var(--button-secondary)] text-[var(--text-primary)] py-2 rounded-lg hover:bg-[var(--button-secondary-hover)] transition-colors border border-[var(--border-color)]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contest;