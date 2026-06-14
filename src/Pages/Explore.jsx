import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const interviewPrepPlans = [
  {
    title: 'SQL Interview Questions',
    description: 'Master SQL queries, joins, subqueries, window functions, and database optimization for interviews',
    icon: '🗄️',
    count: '50+ Questions',
    color: 'blue',
    accent: 'bg-blue-500',
    badge: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
    link: '/sql',
  },
  {
    title: 'DBMS Interview Questions',
    description: 'Database concepts, SQL queries, normalization, transactions, and indexing',
    icon: '🗄️',
    count: '100+ Questions',
    color: 'blue',
    accent: 'bg-blue-500',
    badge: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
    link: '/dbms',
  },
  {
    title: 'OS Interview Questions',
    description: 'Operating system concepts, process management, memory management, scheduling',
    icon: '🖥️',
    count: '80+ Questions',
    color: 'blue',
    accent: 'bg-blue-500',
    badge: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
    link: '/os',
  },
  {
    title: 'CN Interview Questions',
    description: 'Computer networks, protocols, OSI model, TCP/IP, network security',
    icon: '🌐',
    count: '70+ Questions',
    color: 'green',
    accent: 'bg-green-500',
    badge: 'text-green-400 border-green-500/30 bg-green-500/10',
    link: '/cn',
  }
];

// Additional courses for the "Popular Interview Courses" section
const interviewCourses = [
  
  {
    title: "React: Complete Guide with Hooks",
    chapters: 15,
    items: 100,
    progress: 0,
    banner: "from-cyan-500/20 to-cyan-400/5 border-cyan-500/20",
    iconBg: "bg-cyan-500/20 border-cyan-500/30",
    accent: "bg-cyan-500",
    textAccent: "text-cyan-400",
    btnStyle: "text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/10",
    icon: '⚛️',
    link: '/react'
  },
  {
    title: "Data Science & Machine Learning",
    chapters: 18,
    items: 80,
    progress: 0,
    banner: "from-green-500/20 to-green-400/5 border-green-500/20",
    iconBg: "bg-green-500/20 border-green-500/30",
    accent: "bg-green-500",
    textAccent: "text-green-400",
    btnStyle: "text-green-400 border-green-500/30 hover:bg-green-500/10",
    icon: '📊',
    link: '/ds'
  },

  {
    title: "HTML5,CSS3 & JavaScript: Modern Web Design",
    chapters: 10,
    items: 60,
    progress: 0,
    banner: "from-orange-500/20 to-orange-400/5 border-orange-500/20",
    iconBg: "bg-orange-500/20 border-orange-500/30",
    accent: "bg-orange-500",
    textAccent: "text-orange-400",
    btnStyle: "text-orange-400 border-orange-500/30 hover:bg-orange-500/10",
    icon: '🎨',
    link: '/htmlcssjs'
  }
];

const CourseCard = ({ course }) => (
  <Link to={course.link} className="block">
    <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl overflow-hidden flex flex-col hover:border-blue-500/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
      {/* Banner */}
      <div className={`h-28 bg-gradient-to-br ${course.banner} border-b flex items-center justify-center relative`}>
        <div className={`w-14 h-14 ${course.iconBg} border rounded-xl flex items-center justify-center text-2xl`}>
          {course.icon}
        </div>
        <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${course.accent}`} />
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h4 className="text-sm font-semibold text-[var(--text-primary)] leading-snug">{course.title}</h4>

        {/* Meta */}
        <div className="flex flex-wrap gap-3">
          <span className="flex items-center gap-1 text-xs text-[var(--text-secondary)]">
            📖 <span>{course.chapters} Chapters</span>
          </span>
          {course.items > 0 && (
            <span className="flex items-center gap-1 text-xs text-[var(--text-secondary)]">
              📝 <span>{course.items} Items</span>
            </span>
          )}
          <span className={`flex items-center gap-1 text-xs ${course.textAccent}`}>
            📊 <span>{course.progress}%</span>
          </span>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-[var(--background)] border border-[var(--border-color)] rounded-full overflow-hidden">
          <div
            className={`h-full ${course.accent} rounded-full`}
            style={{ width: `${course.progress || 2}%` }}
          />
        </div>

        {/* CTA */}
        <div className={`mt-auto w-full border rounded-lg py-2 text-xs font-bold tracking-wide text-center transition-colors duration-150 ${course.btnStyle}`}>
          ▶ Start Learning
        </div>
      </div>
    </div>
  </Link>
);

const Explore = () => {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] font-sans">
      <Navbar/>
      <main className="max-w-7xl mx-auto px-6 py-12">

        {/* Page Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs text-[var(--text-secondary)] uppercase tracking-widest mb-1">Welcome to</p>
            <h1 className="text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
              LogiStack <span className="text-blue-500">Explore</span>
            </h1>
            <p className="text-[var(--text-secondary)] text-sm mt-2">
              Structured courses and curated paths to get you interview-ready.
            </p>
          </div>

          {/* Continue badge */}
          <div className="flex items-center gap-3 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl px-4 py-3">
            <span className="text-xl">🔄</span>
            <div>
              <p className="text-[10px] text-[var(--text-secondary)] uppercase tracking-widest">Continue Previous</p>
              <p className="text-sm font-bold text-[var(--text-primary)]">SQL 50 — 18% done</p>
            </div>
          </div>
        </div>

        {/* INTERVIEW PREPARATION SECTION - Core Computer Science */}
        <section className="max-w-[1100px] mx-auto px-6 py-16 border-t border-[var(--border-color)]">
          <div className="mb-10">
            <div className="inline-block bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full mb-3 tracking-wide">
              📘 Interview Preparation
            </div>
            <h2 className="text-[1.75rem] font-extrabold tracking-tight mb-2">Complete Interview Prep</h2>
            <p className="text-[var(--text-secondary)] text-[0.95rem]">Master fundamental concepts for technical interviews</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {interviewPrepPlans.slice(0, 8).map((plan) => (
              <Link to={plan.link} key={plan.title} className="block">
                <div className="relative bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6 cursor-pointer overflow-hidden transition-transform hover:scale-[1.02] hover:border-blue-500/30 h-full">
                  {/* Top accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl ${plan.accent}`} />
                  <div className="text-[1.8rem] mb-3.5">{plan.icon}</div>
                  <h4 className="text-[1.05rem] font-bold mb-2">{plan.title}</h4>
                  <p className="text-[0.82rem] text-[var(--text-secondary)] leading-relaxed mb-5">{plan.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${plan.badge}`}>
                      {plan.count}
                    </span>
                    <span className="text-[var(--text-secondary)] text-base">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Popular Interview Courses Section */}
        <section className="mb-16">
          <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
            <div>
              <h2 className="text-xl font-extrabold text-[var(--text-primary)] tracking-tight">Popular Interview Courses</h2>
              <p className="text-xs text-[var(--text-secondary)] mt-1">Targeted courses to crack top tech interviews</p>
            </div>
            <button className="text-xs font-semibold text-[var(--text-secondary)] border border-[var(--border-color)] px-4 py-2 rounded-lg hover:bg-[var(--hover-bg)] transition-colors">
              View All →
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {interviewCourses.slice(0, 9).map((course, i) => (
              <CourseCard key={i} course={course} />
            ))}
          </div>
        </section>

        {/* Featured Coding Challenges Section */}
        <section className="mt-16 pt-8 border-t border-[var(--border-color)]">
          <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
            <div>
              <h2 className="text-xl font-extrabold text-[var(--text-primary)] tracking-tight">Coding Challenges</h2>
              <p className="text-xs text-[var(--text-secondary)] mt-1">Practice with real interview problems</p>
            </div>
            <Link to="/coding">
              <button className="text-xs font-semibold text-[var(--text-secondary)] border border-[var(--border-color)] px-4 py-2 rounded-lg hover:bg-[var(--hover-bg)] transition-colors">
                View All Problems →
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Two Sum", difficulty: "Easy", category: "Arrays", link: "/coding/1" },
              { title: "Reverse Linked List", difficulty: "Easy", category: "Linked List", link: "/coding/2" },
              { title: "Longest Substring", difficulty: "Medium", category: "Strings", link: "/coding/3" },
              { title: "Merge Intervals", difficulty: "Medium", category: "Arrays", link: "/coding/4" },
            ].map((problem, i) => (
              <Link to={problem.link} key={i}>
                <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-4 hover:border-blue-500/30 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-sm">{problem.title}</h3>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                      problem.difficulty === "Easy" ? "bg-green-500/10 text-green-400" :
                      problem.difficulty === "Medium" ? "bg-yellow-500/10 text-yellow-400" :
                      "bg-red-500/10 text-red-400"
                    }`}>
                      {problem.difficulty}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)]">{problem.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default Explore;