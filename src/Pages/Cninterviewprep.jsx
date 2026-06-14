// CNInterviewPrep.jsx
import { useState, useMemo } from "react";
import { cnQuestions, topicsList, levelsList } from "./Cndata";
import Navbar from "../Components/Navbar";
import Cndata from "./Cndata";

// ─── Helpers ──────────────────────────────────────────────────────────────────
const levelColors = {
  basic:        { badge: "text-green-600 dark:text-green-400 border-green-500/30 bg-green-500/10",    dot: "bg-green-400"  },
  intermediate: { badge: "text-yellow-600 dark:text-yellow-400 border-yellow-500/30 bg-yellow-500/10", dot: "bg-yellow-400" },
  advanced:     { badge: "text-red-600 dark:text-red-400 border-red-500/30 bg-red-500/10",          dot: "bg-red-400"    },
};

// ─── Study Card ───────────────────────────────────────────────────────────────
function StudyCard({ q, index }) {
  const [open, setOpen] = useState(false);
  const lc = levelColors[q.level];

  return (
    <div
      className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl overflow-hidden transition-all hover:border-blue-500/30"
      style={{ transition: "border-color .2s" }}
    >
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full text-left p-5 flex items-start gap-4"
      >
        <span className="text-xs font-bold text-[var(--text-secondary)] mt-0.5 w-6 shrink-0">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border capitalize ${lc.badge}`}>
              {q.level}
            </span>
            <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full">
              {q.topic}
            </span>
          </div>
          <p className="text-[0.9rem] font-semibold leading-snug pr-6">{q.question}</p>
        </div>
        <span
          className="text-[var(--text-secondary)] text-base mt-0.5 shrink-0 transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ▾
        </span>
      </button>

      {open && (
        <div className="px-5 pb-5 pl-[3.25rem] border-t border-[var(--border-color)]">
          <div className="pt-4 text-[0.85rem] text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
            {q.answer}
          </div>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {q.tags.map(tag => (
              <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--border-color)] text-[var(--text-secondary)]">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Quiz Mode ────────────────────────────────────────────────────────────────
function QuizMode({ questions }) {
  const [current, setCurrent]   = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore]       = useState(0);
  const [done, setDone]         = useState(false);
  const [answers, setAnswers]   = useState([]); // "knew" | "didnt"

  const q = questions[current];
  const lc = q ? levelColors[q.level] : null;

  function handleAnswer(knew) {
    const newAnswers = [...answers, knew];
    setAnswers(newAnswers);
    if (knew) setScore(s => s + 1);

    if (current + 1 >= questions.length) {
      setDone(true);
    } else {
      setCurrent(c => c + 1);
      setRevealed(false);
    }
  }

  function restart() {
    setCurrent(0);
    setRevealed(false);
    setScore(0);
    setDone(false);
    setAnswers([]);
  }

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="max-w-lg mx-auto text-center py-12">
        <div className="text-6xl mb-4">{pct >= 80 ? "🎉" : pct >= 50 ? "👍" : "📚"}</div>
        <h2 className="text-2xl font-extrabold mb-2">Quiz Complete!</h2>
        <p className="text-[var(--text-secondary)] mb-6">
          You got <span className="text-blue-400 font-bold">{score}</span> out of{" "}
          <span className="font-bold">{questions.length}</span> correct
        </p>

        <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6 mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-[var(--text-secondary)]">Score</span>
            <span className="text-sm font-bold text-blue-400">{pct}%</span>
          </div>
          <div className="h-2 bg-[var(--border-color)] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="grid grid-cols-3 gap-3 mt-5 text-center">
            {[
              { label: "Correct",   value: score,                    color: "text-green-400"  },
              { label: "Incorrect", value: questions.length - score, color: "text-red-400"    },
              { label: "Total",     value: questions.length,         color: "text-blue-400"   },
            ].map(s => (
              <div key={s.label} className="bg-[var(--border-color)]/30 rounded-xl p-3">
                <div className={`text-xl font-extrabold ${s.color}`}>{s.value}</div>
                <div className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={restart}
          className="bg-blue-600 text-white px-7 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">

      {/* Progress bar */}
      <div className="flex justify-between items-center mb-3 text-xs text-[var(--text-secondary)]">
        <span>{current + 1} / {questions.length}</span>
        <span className="text-blue-400 font-semibold">{score} correct</span>
      </div>
      <div className="h-1.5 bg-[var(--border-color)] rounded-full overflow-hidden mb-6">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-300"
          style={{ width: `${(current / questions.length) * 100}%` }}
        />
      </div>

      {/* Card */}
      <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-[var(--border-color)]">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border capitalize ${lc.badge}`}>
              {q.level}
            </span>
            <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full">
              {q.topic}
            </span>
          </div>
          <p className="text-[1rem] font-semibold leading-snug">{q.question}</p>
        </div>

        {!revealed ? (
          <div className="p-6 text-center">
            <p className="text-[var(--text-secondary)] text-sm mb-5">Think of your answer, then reveal.</p>
            <button
              onClick={() => setRevealed(true)}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Reveal Answer
            </button>
          </div>
        ) : (
          <div className="p-6">
            <div className="text-[0.85rem] text-[var(--text-secondary)] leading-relaxed whitespace-pre-line mb-6">
              {q.answer}
            </div>
            <p className="text-sm font-semibold mb-3">Did you know this?</p>
            <div className="flex gap-3">
              <button
                onClick={() => handleAnswer(true)}
                className="flex-1 bg-green-500/10 border border-green-500/30 text-green-400 py-2.5 rounded-xl font-bold text-sm hover:bg-green-500/20 transition-colors"
              >
                ✓ Yes, I knew it
              </button>
              <button
                onClick={() => handleAnswer(false)}
                className="flex-1 bg-red-500/10 border border-red-500/30 text-red-400 py-2.5 rounded-xl font-bold text-sm hover:bg-red-500/20 transition-colors"
              >
                ✗ Needs Review
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Dot progress */}
      <div className="flex gap-1 justify-center mt-4 flex-wrap">
        {questions.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              i < answers.length
                ? answers[i]
                  ? "bg-green-400"
                  : "bg-red-400"
                : i === current
                ? "bg-blue-400"
                : "bg-[var(--border-color)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function CNInterviewPrep() {
  const [mode,        setMode]        = useState("study"); // "study" | "quiz"
  const [filterLevel, setFilterLevel] = useState("all");
  const [filterTopic, setFilterTopic] = useState("all");
  const [search,      setSearch]      = useState("");

  const filtered = useMemo(() => {
    return cnQuestions.filter(q => {
      const matchLevel  = filterLevel === "all" || q.level === filterLevel;
      const matchTopic  = filterTopic === "all" || q.topic === filterTopic;
      const matchSearch =
        !search ||
        q.question.toLowerCase().includes(search.toLowerCase()) ||
        q.topic.toLowerCase().includes(search.toLowerCase()) ||
        q.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
      return matchLevel && matchTopic && matchSearch;
    });
  }, [filterLevel, filterTopic, search]);

  const counts = useMemo(() => ({
    basic:        cnQuestions.filter(q => q.level === "basic").length,
    intermediate: cnQuestions.filter(q => q.level === "intermediate").length,
    advanced:     cnQuestions.filter(q => q.level === "advanced").length,
  }), []);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] font-sans">
      <Navbar />
      <div className="max-w-[1000px] mx-auto px-5 py-10">

        {/* ── Header ── */}
        <div className="mb-8">
          <div className="inline-block bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full mb-3 tracking-wide">
            🌐 Interview Prep
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-1">
            Computer Networks Interview Questions
          </h1>
          <p className="text-[var(--text-secondary)] text-sm">
            {cnQuestions.length} questions covering Basic, Intermediate &amp; Advanced topics
          </p>
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-3 gap-3 mb-7">
          {[
            { label: "Basic",        count: counts.basic,        color: "text-green-400",  bg: "bg-green-500/10",  border: "border-green-500/20"  },
            { label: "Intermediate", count: counts.intermediate, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
            { label: "Advanced",     count: counts.advanced,     color: "text-red-400",    bg: "bg-red-500/10",    border: "border-red-500/20"    },
          ].map(s => (
            <div key={s.label} className={`${s.bg} border ${s.border} rounded-xl p-3.5 text-center`}>
              <div className={`text-xl font-extrabold ${s.color}`}>{s.count}</div>
              <div className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── Mode Toggle ── */}
        <div className="flex gap-2 mb-6 p-1 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl w-fit">
          {["study", "quiz"].map(m => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-5 py-2 rounded-lg text-sm font-bold capitalize transition-all ${
                mode === m
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              {m === "study" ? "📖 Study Mode" : "🧠 Quiz Mode"}
            </button>
          ))}
        </div>

        {/* ── Filters (Study mode only) ── */}
        {mode === "study" && (
          <div className="flex flex-wrap gap-3 mb-6">
            <input
              type="text"
              placeholder="Search questions or topics…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl px-4 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-blue-500/50 flex-1 min-w-[200px]"
            />
            <select
              value={filterLevel}
              onChange={e => setFilterLevel(e.target.value)}
              className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-blue-500/50"
            >
              <option value="all">All Levels</option>
              {levelsList.map(l => (
                <option key={l} value={l} className="capitalize">
                  {l.charAt(0).toUpperCase() + l.slice(1)}
                </option>
              ))}
            </select>
            <select
              value={filterTopic}
              onChange={e => setFilterTopic(e.target.value)}
              className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-blue-500/50"
            >
              <option value="all">All Topics</option>
              {topicsList.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        )}

        {/* ── Content ── */}
        {mode === "study" ? (
          <>
            <div className="text-xs text-[var(--text-secondary)] mb-3">
              Showing {filtered.length} of {cnQuestions.length} questions
            </div>
            <div className="flex flex-col gap-2.5">
              {filtered.length > 0
                ? filtered.map((q, i) => <StudyCard key={q.id} q={q} index={i} />)
                : (
                  <div className="text-center py-16 text-[var(--text-secondary)]">
                    <div className="text-4xl mb-3">🔍</div>
                    <p className="font-semibold">No questions found</p>
                    <p className="text-sm mt-1">Try adjusting your filters</p>
                  </div>
                )
              }
            </div>
          </>
        ) : (
          <QuizMode questions={filtered.length > 0 ? filtered : cnQuestions} />
        )}
      </div>
    </div>
  );
}
