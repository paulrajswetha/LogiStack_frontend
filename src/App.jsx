// App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './Components/ThemeContext';
import { Login } from './Pages/Login';
import { SignUp } from './Pages/SignUp';
import SolutionPage from './Pages/SolutionPage';
import Coding from './Pages/Coding';
import HomePage from './Pages/HomePage';
import UserProfile from './Pages/UserProfile';
import Landing from './Pages/Landing';
import Contest from './Pages/Contest';
import Explore from './Pages/Explore';
import Aptitude from './Pages/Aptitude';
import Footer from './Components/Footer';
import DBMSInterviewPrep from './Pages/DBMSInterviewPrep';
import Cninterviewprep from './Pages/Cninterviewprep';
import OSInterviewPrep from './Pages/OSInterviewPrep';
import ContestProblems from './Pages/ContestProblems';
import SQLInterviewPrep from './Pages/SQLInterviewPrep';
import ReactInterviewPrep from './Pages/ReactInterviewPrep';
import HTMLCSSJSInterviewPrep from './Pages/HTMLCSSJSInterviewPrep';
import DataScienceInterviewPrep from './Pages/DataScienceInterviewPrep';
import LeetCodeArraysStrings from './Pages/LeetCodeArraysStrings';
import LeetCodeDataStructures from './Pages/LeetCodeDataStructures';
import CSFundamentalsTopics from './Pages/CSFundamentalsTopics';
import DSAConcepts from './Pages/DSAConcepts';

const AppContent = () => {
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contest" element={<Contest />} />
        <Route path="/coding/:id?" element={<Coding />} />
        <Route path="/solution/:id" element={<SolutionPage />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/aptitude" element={<Aptitude />} />
        <Route path="/dbms" element={<DBMSInterviewPrep />} /> 
        <Route path="/cn" element={<Cninterviewprep />} /> 
        <Route path="/os" element={<OSInterviewPrep />} />
        <Route path="/sql" element={<SQLInterviewPrep />} />
        <Route path="/react" element={<ReactInterviewPrep />} />
        <Route path="/htmlcssjs" element={<HTMLCSSJSInterviewPrep />} />
        <Route path="/ds" element={<DataScienceInterviewPrep />} />
        <Route path="/arrays-strings" element={<LeetCodeArraysStrings />} />
        <Route path="/data-structures" element={<LeetCodeDataStructures />} />
        <Route path="/cs-fundamentals" element={<CSFundamentalsTopics />} />
        <Route path="/dsa" element={<DSAConcepts />} />
        <Route path="/contest/:contestId/problems" element={<ContestProblems />} />
      </Routes>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
};

export default App;
