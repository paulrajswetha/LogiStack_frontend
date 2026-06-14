// Landing.jsx - Updated with DSA and CS Fundamentals Pages
import React from 'react';
import { Link } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Navbar from '../Components/Navbar';

const studyPlans = [
  {
    title: 'Interview 150',
    description: 'Top 150 questions asked in real interviews',
    icon: '🎯',
    count: '150 Problems',
    color: 'blue',
    accent: 'bg-blue-500',
    badge: 'text-blue-500 border-blue-500/30 bg-blue-500/10',
    link: '/home',
  },
  {
    title: 'LeetCode 75',
    description: 'Essential 75 problems to master DSA',
    icon: '⚡',
    count: '75 Problems',
    color: 'blue',
    accent: 'bg-blue-500',
    badge: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
    link: '/home',
  },
  {
    title: 'SQL 50',
    description: 'Master SQL with 50 curated queries',
    icon: '🗄️',
    count: '50 Problems',
    color: 'violet',
    accent: 'bg-violet-500',
    badge: 'text-violet-400 border-violet-500/30 bg-violet-500/10',
    link: '/home',
  },
  {
    title: 'JavaScript 30',
    description: 'Build 30 JS projects to ace front-end',
    icon: '🟨',
    count: '30 Problems',
    color: 'yellow',
    accent: 'bg-yellow-500',
    badge: 'text-yellow-400 border-yellow-500/30 bg-yellow-500/10',
    link: '/home',
  },
];

// Updated featured resources with all your DSA and CS pages
const featuredResources = [
  {
    title: "Arrays & Strings",
    description: "Master array manipulation, two pointers, sliding window, and string algorithms",
    icon: "📊",
    chapters: 8,
    items: 33,
    progress: 0,
    banner: "from-blue-500/20 to-blue-400/5",
    iconBg: "bg-blue-500/20 border-blue-500/30",
    accent: "bg-blue-500",
    textAccent: "text-blue-400",
    btnStyle: "text-blue-400 border-blue-500/30 hover:bg-blue-500/10",
    link: "/arrays-strings",
    color: "blue"
  },
  {
    title: "Trees, Graphs & Stacks",
    description: "Binary trees, BST, graph algorithms, BFS, DFS, and stack implementations",
    icon: "🌳",
    chapters: 10,
    items: 42,
    progress: 0,
    banner: "from-green-500/20 to-green-400/5",
    iconBg: "bg-green-500/20 border-green-500/30",
    accent: "bg-green-500",
    textAccent: "text-green-400",
    btnStyle: "text-green-400 border-green-500/30 hover:bg-green-500/10",
    link: "/data-structures",
    color: "green"
  },
  {
    title: "DSA Visual Concepts",
    description: "Learn algorithms visually - understand concepts without code, from basic to advanced",
    icon: "🎨",
    chapters: 6,
    items: 42,
    progress: 0,
    banner: "from-purple-500/20 to-purple-400/5",
    iconBg: "bg-purple-500/20 border-purple-500/30",
    accent: "bg-purple-500",
    textAccent: "text-purple-400",
    btnStyle: "text-purple-400 border-purple-500/30 hover:bg-purple-500/10",
    link: "/dsa",
    color: "purple"
  },
  {
    title: "CS Fundamentals",
    description: "Operating Systems, Computer Networks, DBMS, and Object-Oriented Programming concepts",
    icon: "💻",
    chapters: 4,
    items: 84,
    progress: 0,
    banner: "from-orange-500/20 to-orange-400/5",
    iconBg: "bg-orange-500/20 border-orange-500/30",
    accent: "bg-orange-500",
    textAccent: "text-orange-400",
    btnStyle: "text-orange-400 border-orange-500/30 hover:bg-orange-500/10",
    link: "/cs-fundamentals",
    color: "orange"
  }
];

const features = [
  {
    icon: "💻",
    title: "Curated Problems",
    description: "Hand-picked interview questions from top tech companies including FAANG",
    gradient: "from-blue-500/20 to-blue-400/5",
    border: "border-blue-500/20",
    iconBg: "bg-blue-500/20",
    iconBorder: "border-blue-500/30",
    accent: "bg-blue-500",
    textAccent: "text-blue-500"
  },
  {
    icon: "📊",
    title: "Progress Tracking",
    description: "Monitor your growth with detailed analytics and performance metrics",
    gradient: "from-blue-500/20 to-blue-400/5",
    border: "border-blue-500/20",
    iconBg: "bg-blue-500/20",
    iconBorder: "border-blue-500/30",
    accent: "bg-blue-500",
    textAccent: "text-blue-400"
  },
  {
    icon: "🤝",
    title: "Community Driven",
    description: "Learn from 500K+ developers and share solutions with peers",
    gradient: "from-violet-500/20 to-violet-400/5",
    border: "border-violet-500/20",
    iconBg: "bg-violet-500/20",
    iconBorder: "border-violet-500/30",
    accent: "bg-violet-500",
    textAccent: "text-violet-400"
  },
  {
    icon: "⚡",
    title: "Real-time Feedback",
    description: "Get instant feedback on your solutions with detailed explanations",
    gradient: "from-green-500/20 to-green-400/5",
    border: "border-green-500/20",
    iconBg: "bg-green-500/20",
    iconBorder: "border-green-500/30",
    accent: "bg-green-500",
    textAccent: "text-green-400"
  },
  {
    icon: "🎯",
    title: "Structured Paths",
    description: "Follow curated study plans tailored to your skill level and goals",
    gradient: "from-yellow-500/20 to-yellow-400/5",
    border: "border-yellow-500/20",
    iconBg: "bg-yellow-500/20",
    iconBorder: "border-yellow-500/30",
    accent: "bg-yellow-500",
    textAccent: "text-yellow-400"
  },
  {
    icon: "🔒",
    title: "Interview Ready",
    description: "Master system design, DSA, and core concepts with expert guidance",
    gradient: "from-pink-500/20 to-pink-400/5",
    border: "border-pink-500/20",
    iconBg: "bg-pink-500/20",
    iconBorder: "border-pink-500/30",
    accent: "bg-pink-500",
    textAccent: "text-pink-400"
  }
];

const ResourceCard = ({ resource }) => (
  <Link to={resource.link} className="block">
    <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl overflow-hidden flex flex-col hover:border-[var(--primary)]/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
      {/* Banner */}
      <div className={`h-28 bg-gradient-to-br ${resource.banner} border-b border-[var(--border-color)] flex items-center justify-center relative`}>
        <div className={`w-14 h-14 ${resource.iconBg} border border-[var(--border-color)] rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-200`}>
          {resource.icon}
        </div>
        <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${resource.accent}`} />
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h4 className="text-lg font-bold text-[var(--text-primary)] leading-snug group-hover:text-${resource.color}-400 transition-colors">
          {resource.title}
        </h4>
        
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
          {resource.description}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap gap-3 mt-2">
          <span className="flex items-center gap-1 text-xs text-[var(--text-secondary)]">
            📖 <span>{resource.chapters} Topics</span>
          </span>
          {resource.items > 0 && (
            <span className="flex items-center gap-1 text-xs text-[var(--text-secondary)]">
              📝 <span>{resource.items} Concepts</span>
            </span>
          )}
          <span className={`flex items-center gap-1 text-xs ${resource.textAccent}`}>
            🎯 <span>Ready to Learn</span>
          </span>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-[var(--border-color)] rounded-full overflow-hidden">
          <div
            className={`h-full ${resource.accent} rounded-full`}
            style={{ width: `${resource.progress || 2}%` }}
          />
        </div>

        {/* CTA */}
        <div className={`mt-auto w-full border border-[var(--border-color)] rounded-lg py-2.5 text-xs font-bold tracking-wide text-center transition-all duration-150 ${resource.btnStyle} group-hover:scale-[0.98]`}>
          ▶ Explore {resource.title}
        </div>
      </div>
    </div>
  </Link>
);

const stats = [
  { label: 'Problems', value: '3,500+' },
  { label: 'Users', value: '500K+' },
  { label: 'Companies', value: '200+' },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] font-sans">
      <Navbar />

      {/* HERO SECTION with Lottie Animation */}
      <div className="relative px-6 pt-24 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left side - Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 tracking-wide">
              🏆 Trusted by 500K+ developers
            </div>

            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-black leading-[1.2] tracking-tight mb-6">
              Sharpen Your
              <br />
              <span className="text-blue-600 dark:text-blue-500 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Coding Skills
              </span>
            </h1>

            <p className="text-lg text-[var(--text-secondary)] max-w-lg mx-auto lg:mx-0 mb-9 leading-relaxed">
              Master Data Structures, Algorithms, and CS Fundamentals with our comprehensive learning resources.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4 flex-wrap mb-16">
              <Link
                to="/home"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-base shadow-lg shadow-blue-500/25 hover:bg-blue-700 transition-all transform hover:scale-105"
              >
                Get Started — It's Free
              </Link>
              <a
                href="#resources"
                className="text-[var(--text-secondary)] font-semibold text-base px-1 py-3.5 border-b border-[var(--text-secondary)]/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Explore Resources →
              </a>
            </div>

            {/* Stats row */}
            <div className="flex justify-center lg:justify-start gap-12 flex-wrap">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center lg:items-start gap-1">
                  <span className="text-2xl font-extrabold tracking-tight text-[var(--text-primary)]">{s.value}</span>
                  <span className="text-xs text-[var(--text-secondary)] uppercase tracking-widest">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Lottie Animation */}
          <div className="relative flex justify-center items-center">
            <div className="w-full max-w-4xl lg:max-w-5xl">
              <div className="relative">
                {/* Enhanced background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-2xl animate-pulse delay-700"></div>
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

                {/* Multiple floating decorative circles */}
                <div className="absolute top-1/4 -left-12 w-32 h-32 bg-blue-500/30 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-12 w-36 h-36 bg-purple-500/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -right-20 w-24 h-24 bg-cyan-500/30 rounded-full blur-xl animate-pulse delay-500"></div>
                <div className="absolute bottom-1/3 -left-16 w-40 h-40 bg-indigo-500/30 rounded-full blur-2xl animate-pulse delay-300"></div>
                <div className="absolute top-10 -right-8 w-20 h-20 bg-pink-500/30 rounded-full blur-xl animate-pulse delay-800"></div>

                {/* Lottie Animation Container */}
                <div className="relative z-10">
                  <DotLottieReact
                    src="https://lottie.host/854984c9-09f4-4d14-872e-c33055ba1760/qE4GqHMsz5.lottie"
                    loop
                    autoplay
                    className="w-full h-[450px]"
                  />
                </div>

                {/* Animated particles */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-500 rounded-full animate-ping"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${1 + Math.random() * 2}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 border-t border-[var(--border-color)]">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide">
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            Everything You Need to <span className="text-blue-600 dark:text-blue-500">Succeed</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-[0.95rem] max-w-2xl mx-auto">
            Comprehensive platform designed to help you master coding interviews with confidence
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6 hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-200 group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative z-10">
                <div className={`w-12 h-12 ${feature.iconBg} border ${feature.iconBorder} rounded-xl flex items-center justify-center text-2xl mb-4 transition-transform group-hover:scale-110 duration-200`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-[var(--text-primary)]">
                  {feature.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className={`mt-4 h-0.5 w-12 ${feature.accent} rounded-full group-hover:w-full transition-all duration-300`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STUDY PLANS SECTION */}
      <section id="plans" className="max-w-[1200px] mx-auto px-6 py-20 border-t border-[var(--border-color)]">
        <div className="mb-12">
          <h2 className="text-3xl font-black tracking-tight mb-2">Study Plans</h2>
          <p className="text-[var(--text-secondary)] text-lg">Structured paths to level up your interview game</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {studyPlans.map((plan) => (
            <Link to={plan.link} key={plan.title} className="block">
              <div className="relative bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6 cursor-pointer overflow-hidden transition-all hover:scale-[1.02] hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5">
                <div className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl ${plan.accent}`} />
                <div className="text-[1.8rem] mb-3.5">{plan.icon}</div>
                <h4 className="text-[1.05rem] font-bold mb-2 text-[var(--text-primary)]">{plan.title}</h4>
                <p className="text-[0.82rem] text-[var(--text-secondary)] leading-relaxed mb-5">{plan.description}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${plan.badge}`}>
                    {plan.count}
                  </span>
                  <span className="text-[var(--text-secondary)] text-base group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED RESOURCES SECTION - Updated with all DSA and CS pages */}
      <section id="resources" className="max-w-[1200px] mx-auto px-6 py-20 border-t border-[var(--border-color)]">
        <div className="text-center mb-12">
          <div className="inline-block bg-purple-500/10 border border-purple-500/30 text-purple-600 dark:text-purple-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide">
            Comprehensive Learning Resources
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            Master <span className="text-purple-600 dark:text-purple-500">DSA & CS Fundamentals</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            From arrays to system design - everything you need to ace technical interviews
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredResources.map((resource, i) => (
            <ResourceCard key={i} resource={resource} />
          ))}
        </div>

        {/* Quick Stats about Resources */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[var(--card-bg)] rounded-xl p-4 text-center border border-[var(--border-color)]">
            <div className="text-2xl font-bold text-blue-500">8+</div>
            <div className="text-xs text-[var(--text-secondary)] mt-1">Comprehensive Topics</div>
          </div>
          <div className="bg-[var(--card-bg)] rounded-xl p-4 text-center border border-[var(--border-color)]">
            <div className="text-2xl font-bold text-green-500">300+</div>
            <div className="text-xs text-[var(--text-secondary)] mt-1">Concepts Covered</div>
          </div>
          <div className="bg-[var(--card-bg)] rounded-xl p-4 text-center border border-[var(--border-color)]">
            <div className="text-2xl font-bold text-purple-500">100%</div>
            <div className="text-xs text-[var(--text-secondary)] mt-1">Interview Focused</div>
          </div>
          <div className="bg-[var(--card-bg)] rounded-xl p-4 text-center border border-[var(--border-color)]">
            <div className="text-2xl font-bold text-orange-500">Visual</div>
            <div className="text-xs text-[var(--text-secondary)] mt-1">Learning Approach</div>
          </div>
        </div>
      </section>

      {/* PROGRESS SECTION */}
      <section id="progress" className="max-w-[1200px] mx-auto px-6 py-20 border-t border-[var(--border-color)]">
        <div className="mb-12">
          <h2 className="text-3xl font-black tracking-tight mb-2">Your Progress</h2>
          <p className="text-[var(--text-secondary)] text-lg">Pick up right where you left off</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* DSA Progress */}
          <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-xs text-[var(--text-secondary)] uppercase tracking-wider mb-1">Ongoing Study Plan</p>
                <p className="text-2xl font-black text-[var(--text-primary)]">Data Structures & Algorithms</p>
              </div>
              <span className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/25 text-xs font-semibold px-3 py-1.5 rounded-full">
                In Progress
              </span>
            </div>

            <div className="flex justify-between mb-2.5">
              <span className="text-[0.85rem] text-[var(--text-secondary)]">30% Completed</span>
              <span className="text-[0.85rem] text-[var(--text-secondary)]">75 / 250 concepts</span>
            </div>

            <div className="h-2 bg-[var(--background)] border border-[var(--border-color)] rounded-full overflow-hidden mb-6">
              <div className="w-[30%] h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
            </div>

            <Link
              to="/dsa"
              className="inline-block bg-blue-600 text-white px-7 py-3 rounded-xl font-bold text-[0.95rem] hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20"
            >
              Continue Learning DSA →
            </Link>
          </div>

          {/* CS Fundamentals Progress */}
          <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-xs text-[var(--text-secondary)] uppercase tracking-wider mb-1">Recent Activity</p>
                <p className="text-2xl font-black text-[var(--text-primary)]">CS Fundamentals</p>
              </div>
              <span className="bg-green-500/10 text-green-400 border border-green-500/25 text-xs font-semibold px-3 py-1.5 rounded-full">
                45% Complete
              </span>
            </div>

            <div className="flex justify-between mb-2.5">
              <span className="text-[0.85rem] text-[var(--text-secondary)]">Topics Covered</span>
              <span className="text-[0.85rem] text-[var(--text-secondary)]">38 / 84</span>
            </div>

            <div className="h-1.5 bg-[var(--border-color)] rounded-full overflow-hidden mb-6">
              <div className="w-[45%] h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full" />
            </div>

            <Link
              to="/cs-fundamentals"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl font-bold text-[0.9rem] hover:bg-green-700 transition-all"
            >
              Continue Learning CS →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl shadow-blue-500/20">
          <div className="absolute top-0 right-0 p-12 opacity-10 transform translate-x-1/2 -translate-y-1/2">
            <div className="w-64 h-64 bg-white rounded-full" />
          </div>

          <div className="relative z-10">
            <div className="text-6xl mb-6">🚀</div>
            <h3 className="text-3xl sm:text-4xl font-black mb-4 text-white">Ready to Ace Your Interview?</h3>
            <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg opacity-90">
              Join thousands of developers who have mastered coding interviews with our comprehensive preparation materials.
            </p>
            <Link
              to="/dsa"
              className="inline-block bg-white text-blue-700 px-10 py-4 rounded-xl font-black text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
            >
              Start Mastering DSA Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;