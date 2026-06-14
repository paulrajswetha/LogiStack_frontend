// Coding.jsx — Perfect LeetCode-style IDE with real multi-language judge execution
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Editor from '@monaco-editor/react';
import { useTheme } from '../Components/ThemeContext';
import Navbar from '../Components/Navbar';

const API = 'http://localhost:5000/api';

/* ─── Language Configs ─────────────────────────────────────────────────────── */

const LANGUAGES = {
  javascript: { name: 'JavaScript',  monacoId: 'javascript', ext: 'js',  icon: '🟨' },
  typescript: { name: 'TypeScript',  monacoId: 'typescript',  ext: 'ts',  icon: '💙' },
  python:     { name: 'Python 3',    monacoId: 'python',     ext: 'py',  icon: '🐍' },
  java:       { name: 'Java',        monacoId: 'java',        ext: 'java',icon: '☕' },
};

/* ─── Starter Code Templates ───────────────────────────────────────────────── */

const STARTER = {
  javascript: `/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // Write your solution here
    
};`,

  typescript: `function lengthOfLongestSubstring(s: string): number {
    // Write your solution here
    return 0;
};`,

  python: `class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # Write your solution here
        pass`,

  java: `class Solution {
    public int lengthOfLongestSubstring(String s) {
        // Write your solution here
        return 0;
    }
}`,
};

/* ─── Icons ────────────────────────────────────────────────────────────────── */

const IconCheck  = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;
const IconX      = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
const IconPlay   = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>;
const IconCode   = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const IconLoader = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5"
    style={{ animation: 'lc-spin 0.8s linear infinite', display:'inline-block' }}>
    <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
  </svg>
);
const IconCopy = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>;
const IconBook  = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>;
const IconClock = () => <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;

/* ─── Difficulty Tag ─────────────────────────────────────────────────────────  */

const DiffTag = ({ d }) => {
  const cls = { Easy: 'lc-tag-easy', Medium: 'lc-tag-medium', Hard: 'lc-tag-hard' }[d] || 'lc-tag-default';
  return <span className={`lc-tag ${cls}`}>{d}</span>;
};

/* ─── Code Block with Copy ───────────────────────────────────────────────────  */

const CodeBlock = ({ code, language }) => {
  const [copied, setCopied] = useState(false);
  const clean = (code || '').replace(/```[\w]*\n?/g, '').replace(/```/g, '').trim();

  const copy = () => {
    navigator.clipboard.writeText(clean).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="lc-code-block">
      <div className="lc-code-block-header">
        <span className="lc-code-lang-label">{language}</span>
        <button className="lc-copy-btn" onClick={copy}>
          {copied ? <><IconCheck /> Copied!</> : <><IconCopy /> Copy</>}
        </button>
      </div>
      <pre className="lc-code-pre">{clean}</pre>
    </div>
  );
};

/* ─── Main Component ─────────────────────────────────────────────────────────  */

export default function Coding() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { theme } = useTheme();

  // Problem state
  const [problem, setProblem]           = useState(null);
  const [loading, setLoading]           = useState(true);
  const [solutions, setSolutions]       = useState({});
  const [solutionExplanation, setSolutionExplanation] = useState('');
  const [solutionsLoading, setSolutionsLoading] = useState(false);

  // Editor state
  const [code, setCode]                 = useState('');
  const [lang, setLang]                 = useState('javascript');

  // Execution state
  const [isRunning, setIsRunning]       = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [runResults, setRunResults]     = useState(null);
  const [submitResult, setSubmitResult] = useState(null);

  // UI state
  const [leftTab, setLeftTab]           = useState('description');
  const [bottomTab, setBottomTab]       = useState('testcase');
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const [customInput, setCustomInput]   = useState('');
  const [useCustomInput, setUseCustomInput] = useState(false);

  // Submissions
  const [userSubs, setUserSubs]         = useState([]);
  const [subsLoading, setSubsLoading]   = useState(false);

  // Resizable panels
  const [panelWidth, setPanelWidth]     = useState(42);
  const [consoleH, setConsoleH]         = useState(250);
  const isDragV = useRef(false);
  const isDragH = useRef(false);

  // Solution tab active lang
  const [solLang, setSolLang] = useState('javascript');

  const editorTheme = theme === 'dark' ? 'lc-dark' : 'lc-light';

  /* ─── Fetch Problem ─────────────────────────────────────────────────── */
  useEffect(() => {
    if (!id) { navigate('/home'); return; }
    setLoading(true);
    setRunResults(null);
    setSubmitResult(null);
    axios.get(`${API}/problems/${id}`)
      .then(r => {
        setProblem(r.data);
        setLoading(false);
        const saved = localStorage.getItem(`code_${id}_${lang}`);
        if (saved) setCode(saved);
        else if (r.data.starter_code?.[lang]) setCode(r.data.starter_code[lang]);
        else setCode(STARTER[lang] || STARTER.javascript);

        // Pre-fill custom input from first test case
        if (r.data.testCases?.[0]?.input) {
          setCustomInput(r.data.testCases[0].input);
        }
      })
      .catch(() => navigate('/home'));
  }, [id]);

  /* ─── Language change ───────────────────────────────────────────────── */
  useEffect(() => {
    if (!problem) return;
    const saved = localStorage.getItem(`code_${id}_${lang}`);
    if (saved) { setCode(saved); return; }
    if (problem.starter_code?.[lang]) { setCode(problem.starter_code[lang]); return; }
    if (problem.code_solutions?.[lang]) {
      const c = problem.code_solutions[lang].replace(/```[\w]*\n?/g, '').replace(/```/g, '').trim();
      setCode(c); return;
    }
    setCode(STARTER[lang] || STARTER.javascript);
  }, [lang, problem]);

  /* ─── Auto-save code ────────────────────────────────────────────────── */
  useEffect(() => {
    if (code && id) localStorage.setItem(`code_${id}_${lang}`, code);
  }, [code, id, lang]);

  /* ─── Fetch Submissions ─────────────────────────────────────────────── */
  const fetchSubs = useCallback(async () => {
    setSubsLoading(true);
    try {
      const token = localStorage.getItem('token');
      const r = await axios.get(`${API}/submissions/user?problemId=${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUserSubs(r.data);
    } catch { /* ignore */ }
    finally { setSubsLoading(false); }
  }, [id]);

  useEffect(() => { if (leftTab === 'submissions') fetchSubs(); }, [leftTab]);

  /* ─── Fetch Solutions ───────────────────────────────────────────────── */
  const fetchSolutions = useCallback(async () => {
    if (solutions && Object.keys(solutions).length > 0) return;
    setSolutionsLoading(true);
    try {
      const r = await axios.get(`${API}/problems/${id}/solutions`);
      setSolutions(r.data.solutions || {});
      setSolutionExplanation(r.data.explanation || '');
    } catch {
      if (problem?.code_solutions) setSolutions(problem.code_solutions);
    }
    finally { setSolutionsLoading(false); }
  }, [id, problem]);

  useEffect(() => {
    if (leftTab === 'solutions' || leftTab === 'editorial') fetchSolutions();
  }, [leftTab]);

  /* ─── Monaco Editor setup ───────────────────────────────────────────── */
  const editorWillMount = (monaco) => {
    monaco.editor.defineTheme('lc-dark', {
      base: 'vs-dark', inherit: true, rules: [],
      colors: {
        'editor.background': '#1a1a1a',
        'editor.lineHighlightBackground': '#242424',
        'editorLineNumber.foreground': '#3d3d3d',
        'editorLineNumber.activeForeground': '#888',
        'editor.selectionBackground': '#264f78',
        'editor.inactiveSelectionBackground': '#3a3d41',
      },
    });
    monaco.editor.defineTheme('lc-light', {
      base: 'vs', inherit: true, rules: [],
      colors: {
        'editor.background': '#ffffff',
        'editor.lineHighlightBackground': '#f8f8f8',
      },
    });
  };

  /* ─── Run Code ──────────────────────────────────────────────────────── */
  const runCode = async () => {
    setIsRunning(true);
    setBottomTab('result');
    setRunResults(null);
    setSubmitResult(null);
    try {
      const payload = { code, language: lang };
      if (useCustomInput && customInput.trim()) {
        payload.customInput = customInput.trim();
      }
      const r = await axios.post(`${API}/run/${id}`, payload);
      setRunResults(r.data);
    } catch (err) {
      setRunResults({
        status: 'error',
        results: [],
        message: err.response?.data?.message || 'Execution failed',
      });
    }
    setIsRunning(false);
  };

  /* ─── Submit Code ───────────────────────────────────────────────────── */
  const submitCode = async () => {
    setIsSubmitting(true);
    setBottomTab('result');
    setRunResults(null);
    setSubmitResult(null);
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Please log in to submit.');
      const r = await axios.post(`${API}/submit/${id}`, { code, language: lang }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSubmitResult(r.data);
      if (leftTab === 'submissions') fetchSubs();
    } catch (err) {
      setSubmitResult({
        status: 'error',
        message: err.response?.data?.message || err.message,
      });
    }
    setIsSubmitting(false);
  };

  /* ─── Drag Handlers ─────────────────────────────────────────────────── */
  const startDragV = () => {
    isDragV.current = true;
    const onMove = e => {
      if (!isDragV.current) return;
      const cw = document.getElementById('lc-main')?.offsetWidth || window.innerWidth;
      const w = (e.clientX / cw) * 100;
      if (w >= 25 && w <= 65) setPanelWidth(w);
    };
    const onUp = () => { isDragV.current = false; document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onUp); };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  };

  const startDragH = () => {
    isDragH.current = true;
    const onMove = e => {
      if (!isDragH.current) return;
      const h = window.innerHeight - e.clientY;
      if (h >= 120 && h <= 560) setConsoleH(h);
    };
    const onUp = () => { isDragH.current = false; document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onUp); };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  };

  /* ─── Derived ───────────────────────────────────────────────────────── */
  const testCases = problem?.testCases || [];
  const activeResult = runResults || submitResult;
  const displayResults = activeResult?.results || [];
  const hasPassed = activeResult?.status === 'accepted' || activeResult?.status === 'Accepted';
  const passedCount = activeResult?.passed ?? displayResults.filter(r => r.passed).length;
  const totalCount  = activeResult?.total  ?? displayResults.length;

  /* ─── Loading ───────────────────────────────────────────────────────── */
  if (loading) return (
    <div className="lc-screen lc-center">
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:14 }}>
        <IconLoader size={32} color="#3b82f6" />
        <span style={{ color:'var(--lc-text2)', fontSize:14 }}>Loading problem…</span>
      </div>
    </div>
  );

  if (!problem) return (
    <div className="lc-screen lc-center">
      <div style={{ textAlign:'center', color:'var(--lc-text2)' }}>
        <p>Problem not found.</p>
        <button className="lc-btn-primary" style={{ marginTop:16 }} onClick={() => navigate('/home')}>← Back</button>
      </div>
    </div>
  );

  /* ─── Render ────────────────────────────────────────────────────────── */
  return (
    <>
      <style>{CSS}</style>
      <div className="lc-screen lc-flex-col">
        <Navbar />

        {/* ── Top Bar ── */}
        <header className="lc-topbar">
          <div className="lc-topbar-left">
            <button className="lc-icon-btn" onClick={() => navigate('/home')} title="Problem List">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </button>
            <div className="lc-topbar-sep"/>
            <span className="lc-topbar-title">{problem.id}. {problem.title}</span>
            <DiffTag d={problem.difficulty}/>
          </div>
          <div className="lc-topbar-right">
            {problem.question_link && (
              <a href={problem.question_link} target="_blank" rel="noopener noreferrer" className="lc-link-btn">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                LeetCode
              </a>
            )}
          </div>
        </header>

        {/* ── Main ── */}
        <div id="lc-main" className="lc-main">

          {/* ── Left Panel ── */}
          <div className="lc-panel lc-panel-left" style={{ width: `${panelWidth}%` }}>
            <nav className="lc-panel-tabs">
              {[
                { key:'description', label:'Description' },
                { key:'solutions',   label:'Solutions' },
                { key:'editorial',   label:'Editorial' },
                { key:'submissions', label:'Submissions' },
              ].map(({ key, label }) => (
                <button key={key}
                  className={`lc-panel-tab ${leftTab === key ? 'active' : ''}`}
                  onClick={() => setLeftTab(key)}>
                  {label}
                </button>
              ))}
            </nav>

            <div className="lc-panel-body">

              {/* ── Description Tab ── */}
              {leftTab === 'description' && (
                <div className="lc-description">
                  <h1 className="lc-problem-title">
                    <span className="lc-problem-num">{problem.id}.</span> {problem.title}
                  </h1>
                  <div className="lc-tags-row">
                    <DiffTag d={problem.difficulty}/>
                    {problem.topic_tags?.map(t => (
                      <span key={t} className="lc-tag lc-tag-default">{t}</span>
                    ))}
                  </div>

                  <div className="lc-prose">
                    {(problem.description || '').split('\n').filter(Boolean).map((p, i) => (
                      <p key={i} dangerouslySetInnerHTML={{ __html: p
                        .replace(/`([^`]+)`/g, '<code>$1</code>')
                        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                        .replace(/_([^_]+)_/g, '<em>$1</em>')
                        .replace(/\\\[/g, '[').replace(/\\\]/g, ']')
                      }} />
                    ))}
                  </div>

                  {problem.examples?.length > 0 && (
                    <div className="lc-section">
                      {problem.examples.map((ex, i) => (
                        <div key={i} className="lc-example">
                          <p className="lc-example-label">Example {i + 1}:</p>
                          <div className="lc-example-box">
                            <div className="lc-io-row"><span className="lc-io-key">Input:</span><code className="lc-io-val">{ex.input}</code></div>
                            <div className="lc-io-row"><span className="lc-io-key">Output:</span><code className="lc-io-val">{ex.output}</code></div>
                            {ex.explanation && (
                              <div className="lc-io-row lc-io-row--exp">
                                <span className="lc-io-key">Explanation:</span>
                                <span className="lc-io-exp">{ex.explanation}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {problem.constraints?.length > 0 && (
                    <div className="lc-section">
                      <h3 className="lc-section-title">Constraints</h3>
                      <ul className="lc-constraints">
                        {problem.constraints.map((c, i) => <li key={i}><code>{c}</code></li>)}
                      </ul>
                    </div>
                  )}

                  {problem.explanation && (
                    <details className="lc-hint">
                      <summary>💡 Hint</summary>
                      <p>{problem.explanation}</p>
                    </details>
                  )}
                </div>
              )}

              {/* ── Solutions Tab ── */}
              {leftTab === 'solutions' && (
                <div className="lc-solutions">
                  <div className="lc-solutions-header">
                    <h2 className="lc-section-title" style={{ fontSize:15, color:'var(--lc-text)' }}>
                      <IconBook/> Official Solutions
                    </h2>
                    <p className="lc-muted" style={{ fontSize:12.5, marginTop:4 }}>
                      Solutions in JavaScript, TypeScript, Python, and Java
                    </p>
                  </div>

                  {solutionsLoading ? (
                    <div className="lc-empty-tab"><IconLoader size={24} color="var(--lc-text3)"/><p>Loading solutions…</p></div>
                  ) : (
                    <>
                      {/* Language Tabs - Only JavaScript, TypeScript, Python, Java */}
                      <div className="lc-sol-lang-tabs">
                        {Object.entries(LANGUAGES).map(([key, cfg]) => {
                          const hasSol = solutions[key] && !solutions[key].includes('coming soon') && !solutions[key].includes('TODO');
                          return (
                            <button
                              key={key}
                              className={`lc-sol-lang-tab ${solLang === key ? 'active' : ''} ${hasSol ? '' : 'no-sol'}`}
                              onClick={() => setSolLang(key)}
                              title={hasSol ? `${cfg.name} solution available` : `${cfg.name} - solution pending`}
                            >
                              <span className="lc-sol-lang-icon">{cfg.icon}</span>
                              <span>{cfg.name}</span>
                              {hasSol && <span className="lc-sol-dot"/>}
                            </button>
                          );
                        })}
                      </div>

                      {/* Active Language Solution */}
                      <div className="lc-sol-content">
                        {solutions[solLang] ? (
                          <>
                            <div className="lc-sol-actions">
                              <button
                                className="lc-btn-run lc-btn-sm"
                                onClick={() => {
                                  const clean = (solutions[solLang] || '').replace(/```[\w]*\n?/g, '').replace(/```/g, '').trim();
                                  setLang(solLang);
                                  setCode(clean);
                                  setLeftTab('description');
                                }}
                              >
                                <IconCode/> Use this Solution
                              </button>
                            </div>
                            <CodeBlock code={solutions[solLang]} language={LANGUAGES[solLang]?.name}/>
                          </>
                        ) : (
                          <div className="lc-empty-tab" style={{ padding:'30px 0' }}>
                            <span style={{ fontSize:32 }}>{LANGUAGES[solLang]?.icon}</span>
                            <p>No {LANGUAGES[solLang]?.name} solution yet.</p>
                            <p style={{ fontSize:12, color:'var(--lc-text3)' }}>Try JavaScript, Python, or Java</p>
                          </div>
                        )}
                      </div>

                      {/* Explanation */}
                      {solutionExplanation && (
                        <div className="lc-sol-explanation">
                          <h3 className="lc-section-title" style={{ marginBottom:10 }}>Algorithm Explanation</h3>
                          <div className="lc-prose">
                            {solutionExplanation.split('\n').filter(Boolean).map((p, i) => (
                              <p key={i}>{p}</p>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}

              {/* ── Editorial Tab ── */}
              {leftTab === 'editorial' && (
                <div className="lc-editorial">
                  {problem.explanation ? (
                    <>
                      <h2 className="lc-section-title" style={{ fontSize:15, color:'var(--lc-text)', marginBottom:16 }}>
                        Approach & Explanation
                      </h2>
                      <div className="lc-prose">
                        {problem.explanation.split('\n').filter(Boolean).map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>

                      {/* Show all language solutions - Only JS, TS, Python, Java */}
                      {solutionsLoading ? (
                        <div style={{ display:'flex', gap:8, alignItems:'center', marginTop:20, color:'var(--lc-text3)' }}>
                          <IconLoader size={14}/> Loading solutions…
                        </div>
                      ) : Object.keys(solutions).length > 0 && (
                        <div style={{ marginTop:24 }}>
                          <h3 className="lc-section-title">Solutions</h3>
                          {Object.entries(solutions).map(([lk, sol]) => {
                            if (!LANGUAGES[lk]) return null;
                            if (!sol || sol.includes('TODO') || sol.includes('coming soon')) return null;
                            return (
                              <div key={lk} style={{ marginBottom:16 }}>
                                <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:6 }}>
                                  <span>{LANGUAGES[lk]?.icon}</span>
                                  <span style={{ fontSize:13, fontWeight:600, color:'var(--lc-text2)' }}>{LANGUAGES[lk]?.name}</span>
                                </div>
                                <CodeBlock code={sol} language={LANGUAGES[lk]?.name}/>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {problem.solution_link && (
                        <div style={{ marginTop:20 }}>
                          <a href={problem.solution_link} target="_blank" rel="noopener noreferrer" className="lc-btn-run">
                            View Detailed Solution ↗
                          </a>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="lc-empty-tab">
                      <IconBook/>
                      <p>Editorial coming soon.</p>
                      <button className="lc-btn-primary lc-btn-sm" onClick={() => setLeftTab('solutions')}>
                        View Solutions →
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* ── Submissions Tab ── */}
              {leftTab === 'submissions' && (
                <div className="lc-submissions">
                  <header className="lc-submissions-header">
                    <h3 className="lc-section-title" style={{ color:'var(--lc-text)', fontSize:15 }}>Your Submissions</h3>
                    <button className="lc-btn-run lc-btn-sm" onClick={fetchSubs} disabled={subsLoading}>
                      {subsLoading ? <IconLoader size={11}/> : '↻ Refresh'}
                    </button>
                  </header>
                  {subsLoading ? (
                    <div className="lc-empty-tab"><IconLoader size={24} color="var(--lc-text3)"/><p>Loading…</p></div>
                  ) : userSubs.length > 0 ? (
                    <div className="lc-sub-list">
                      {userSubs.map(sub => (
                        <div key={sub._id} className="lc-sub-item">
                          <div className="lc-sub-main">
                            <span className={`lc-sub-status ${sub.status === 'Accepted' ? 'accepted' : 'wrong'}`}>
                              {sub.status === 'Accepted' ? <><IconCheck/> Accepted</> : <><IconX/> {sub.status}</>}
                            </span>
                            <span className="lc-sub-lang">
                              {LANGUAGES[sub.language]?.icon} {LANGUAGES[sub.language]?.name || sub.language}
                            </span>
                          </div>
                          <div className="lc-sub-meta">
                            {sub.runtime > 0 && <span><IconClock/> {sub.runtime}ms</span>}
                            <span>{new Date(sub.submittedAt).toLocaleString()}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="lc-empty-tab">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                      <p>No submissions yet.</p>
                      <button className="lc-btn-primary lc-btn-sm" onClick={() => setLeftTab('description')}>
                        Start Solving →
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* ── Vertical Drag ── */}
          <div className="lc-drag-v" onMouseDown={startDragV}>
            <div className="lc-drag-v-inner"/>
          </div>

          {/* ── Right Panel: Editor + Console ── */}
          <div className="lc-panel lc-panel-right">

            {/* Language Selector Bar - Only JS, TS, Python, Java */}
            <div className="lc-lang-bar">
              <div className="lc-lang-select-wrap">
                <select value={lang} onChange={e => setLang(e.target.value)} className="lc-lang-select">
                  {Object.entries(LANGUAGES).map(([key, cfg]) => (
                    <option key={key} value={key}>{cfg.icon} {cfg.name}</option>
                  ))}
                </select>
                <svg className="lc-select-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
              </div>
              <div style={{ marginLeft:'auto', display:'flex', gap:6 }}>
                <button
                  className="lc-btn-run lc-btn-sm"
                  onClick={() => {
                    if (problem?.code_solutions?.[lang]) {
                      const clean = (problem.code_solutions[lang] || '').replace(/```[\w]*\n?/g, '').replace(/```/g, '').trim();
                      setCode(clean);
                    } else {
                      setCode(STARTER[lang] || STARTER.javascript);
                    }
                  }}
                  title="Reset to default code"
                >
                  ↺ Reset
                </button>
              </div>
            </div>

            {/* Monaco Editor */}
            <div className="lc-editor-wrap" style={{ height:`calc(100% - ${consoleH + 44 + 5 + 44}px)` }}>
              <Editor
                height="100%"
                language={LANGUAGES[lang]?.monacoId || 'javascript'}
                theme={editorTheme}
                value={code}
                onChange={v => setCode(v ?? '')}
                beforeMount={editorWillMount}
                options={{
                  minimap:                 { enabled: false },
                  fontSize:                13.5,
                  lineNumbers:             'on',
                  automaticLayout:         true,
                  scrollBeyondLastLine:    false,
                  wordWrap:                'on',
                  padding:                 { top: 14, bottom: 14 },
                  fontFamily:              "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
                  fontLigatures:           true,
                  renderLineHighlight:     'line',
                  cursorBlinking:          'smooth',
                  smoothScrolling:         true,
                  suggest:                 { preview: true },
                  bracketPairColorization: { enabled: true },
                  tabSize:                 lang === 'python' ? 4 : 2,
                  insertSpaces:            true,
                }}
              />
            </div>

            {/* Action Bar */}
            <div className="lc-action-bar">
              <div className="lc-action-left">
                <button onClick={runCode} disabled={isRunning || isSubmitting} className="lc-btn-run">
                  {isRunning ? <IconLoader size={12}/> : <IconPlay/>}
                  {isRunning ? 'Running…' : 'Run'}
                </button>
                <button onClick={submitCode} disabled={isRunning || isSubmitting} className="lc-btn-submit">
                  {isSubmitting ? <IconLoader size={12} color="#fff"/> : null}
                  {isSubmitting ? 'Submitting…' : 'Submit'}
                </button>
              </div>
              <div className="lc-action-right">
                {activeResult && (
                  <span className={`lc-verdict-badge ${hasPassed ? 'green' : 'red'}`}>
                    {hasPassed ? <><IconCheck/> Accepted</> : <><IconX/> {activeResult.status}</>}
                  </span>
                )}
                <span className="lc-lang-badge">{LANGUAGES[lang]?.icon} {LANGUAGES[lang]?.name}</span>
              </div>
            </div>

            {/* ── Horizontal Drag ── */}
            <div className="lc-drag-h" onMouseDown={startDragH}>
              <div className="lc-drag-h-inner"/>
            </div>

            {/* ── Console Panel ── */}
            <div className="lc-console" style={{ height:`${consoleH}px` }}>
              <div className="lc-console-tabs">
                {[{ key:'testcase', label:'Test Cases' }, { key:'result', label:'Result' }].map(({ key, label }) => (
                  <button key={key}
                    className={`lc-console-tab ${bottomTab === key ? 'active' : ''}`}
                    onClick={() => setBottomTab(key)}>
                    {label}
                    {key === 'result' && activeResult && (
                      <span className={`lc-result-dot ${hasPassed ? 'green' : 'red'}`}/>
                    )}
                  </button>
                ))}
                {/* Custom Input Toggle */}
                <div style={{ marginLeft:'auto', display:'flex', alignItems:'center', gap:6, paddingRight:8 }}>
                  <label className="lc-toggle-label">
                    <input type="checkbox" checked={useCustomInput} onChange={e => setUseCustomInput(e.target.checked)}
                      style={{ display:'none' }}/>
                    <span className={`lc-toggle ${useCustomInput ? 'on' : ''}`}/>
                    Custom Input
                  </label>
                </div>
              </div>

              <div className="lc-console-body">

                {/* ── Test Cases Tab ── */}
                {bottomTab === 'testcase' && (
                  <div className="lc-testcases">
                    {useCustomInput ? (
                      <div className="lc-custom-section">
                        <span className="lc-io-label">Custom Input</span>
                        <textarea
                          className="lc-custom-textarea"
                          value={customInput}
                          onChange={e => setCustomInput(e.target.value)}
                          placeholder={"s = \"abcabcbb\""}
                          rows={4}
                        />
                        <button className="lc-btn-run lc-btn-sm" onClick={runCode} disabled={isRunning}>
                          {isRunning ? <IconLoader size={11}/> : <IconPlay/>} Run Custom
                        </button>
                      </div>
                    ) : testCases.length > 0 ? (
                      <>
                        <div className="lc-case-pills">
                          {testCases.map((_, i) => {
                            const res = displayResults[i];
                            return (
                              <button key={i}
                                className={`lc-case-pill ${activeCaseIdx === i ? 'active' : ''} ${
                                  res?.passed === true  ? 'passed' :
                                  res?.passed === false ? 'failed' : ''
                                }`}
                                onClick={() => setActiveCaseIdx(i)}>
                                {res?.passed === true  && <span className="lc-pill-dot green"/>}
                                {res?.passed === false && <span className="lc-pill-dot red"/>}
                                Case {i + 1}
                              </button>
                            );
                          })}
                        </div>
                        {testCases[activeCaseIdx] && (
                          <div className="lc-case-detail">
                            <div className="lc-io-block">
                              <span className="lc-io-label">Input</span>
                              <pre className="lc-io-pre">{testCases[activeCaseIdx].input}</pre>
                            </div>
                            <div className="lc-io-block">
                              <span className="lc-io-label">Expected Output</span>
                              <pre className="lc-io-pre">{testCases[activeCaseIdx].expectedOutput}</pre>
                            </div>
                            {displayResults[activeCaseIdx] && (
                              <>
                                {displayResults[activeCaseIdx].actualOutput != null && (
                                  <div className="lc-io-block">
                                    <span className="lc-io-label">Your Output</span>
                                    <pre className={`lc-io-pre ${displayResults[activeCaseIdx].passed ? 'green' : 'red'}`}>
                                      {displayResults[activeCaseIdx].actualOutput || '(empty)'}
                                    </pre>
                                  </div>
                                )}
                                {displayResults[activeCaseIdx].error && (
                                  <div className="lc-io-block">
                                    <span className="lc-io-label lc-label-red">Error</span>
                                    <pre className="lc-io-pre lc-err">{displayResults[activeCaseIdx].error}</pre>
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="lc-empty-tab">
                        <p>No test cases available. Use Custom Input to test.</p>
                        <button className="lc-btn-run lc-btn-sm" onClick={() => setUseCustomInput(true)}>
                          Enable Custom Input
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* ── Result Tab ── */}
                {bottomTab === 'result' && (
                  <div className="lc-result">
                    {!activeResult ? (
                      <p className="lc-muted" style={{ paddingTop:8 }}>Run or submit your code to see results.</p>
                    ) : hasPassed ? (
                      <div className="lc-result-accepted">
                        <div className="lc-verdict lc-verdict--ac">
                          <IconCheck/> Accepted
                        </div>
                        <div className="lc-stats">
                          <div className="lc-stat">
                            <span className="lc-stat-label">Test Cases</span>
                            <span className="lc-stat-val lc-stat-green">{passedCount} / {totalCount}</span>
                          </div>
                          {activeResult.runtime > 0 && (
                            <div className="lc-stat">
                              <span className="lc-stat-label">Runtime</span>
                              <span className="lc-stat-val">{activeResult.runtime} ms</span>
                            </div>
                          )}
                          {activeResult.memory > 0 && (
                            <div className="lc-stat">
                              <span className="lc-stat-label">Memory</span>
                              <span className="lc-stat-val">{(activeResult.memory / 1024).toFixed(1)} MB</span>
                            </div>
                          )}
                          <div className="lc-stat">
                            <span className="lc-stat-label">Language</span>
                            <span className="lc-stat-val">{LANGUAGES[lang]?.icon} {LANGUAGES[lang]?.name}</span>
                          </div>
                        </div>
                        <div className="lc-confetti">🎉 Great job! All test cases passed!</div>
                      </div>
                    ) : activeResult.status === 'error' ? (
                      <div>
                        <div className="lc-verdict lc-verdict--err">
                          <IconX/> Execution Error
                        </div>
                        <p className="lc-verdict-sub" style={{ marginTop:8 }}>{activeResult.message}</p>
                      </div>
                    ) : (
                      <div>
                        <div className="lc-verdict lc-verdict--wa">
                          <IconX/> {activeResult.status || 'Wrong Answer'}
                        </div>
                        {totalCount > 0 && (
                          <p className="lc-verdict-sub">
                            {passedCount} / {totalCount} test cases passed.
                            {totalCount - passedCount > 0 && ` ${totalCount - passedCount} failed.`}
                          </p>
                        )}
                        {displayResults.length > 0 && (
                          <>
                            <div className="lc-case-pills" style={{ marginTop:12 }}>
                              {displayResults.map((r, i) => (
                                <button key={i}
                                  className={`lc-case-pill ${activeCaseIdx === i ? 'active' : ''} ${r.passed ? 'passed' : 'failed'}`}
                                  onClick={() => { setActiveCaseIdx(i); setBottomTab('testcase'); }}>
                                  {r.passed ? <span className="lc-pill-dot green"/> : <span className="lc-pill-dot red"/>}
                                  Case {i + 1}
                                </button>
                              ))}
                            </div>
                            {activeResult.message && (
                              <p className="lc-verdict-sub" style={{ marginTop:8, fontSize:12 }}>{activeResult.message}</p>
                            )}
                          </>
                        )}
                      </div>
                    )}
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─── CSS (Same as before, keep all styles) ──────────────────────────────────────────────────────────────────── */

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --lc-bg:        var(--background, #0d1117);
  --lc-surface:   var(--card-bg, #161b22);
  --lc-surface2:  var(--hover-bg, #1e2432);
  --lc-border:    var(--border-color, #30363d);
  --lc-text:      var(--text-primary, #e6edf3);
  --lc-text2:     var(--text-secondary, #8b949e);
  --lc-text3:     #6e7681;
  --lc-accent:    #2563eb;
  --lc-accent-h:  #3b82f6;
  --lc-green:     #3fb950;
  --lc-green-bg:  rgba(63,185,80,.1);
  --lc-red:       #f85149;
  --lc-red-bg:    rgba(248,81,73,.1);
  --lc-yellow:    #e3b341;
  --lc-yellow-bg: rgba(227,179,65,.12);
  --lc-blue:      #58a6ff;
  --lc-blue-bg:   rgba(88,166,255,.1);
  --lc-radius:    6px;
  --lc-font-mono: 'JetBrains Mono','Fira Code','Cascadia Code',monospace;
}

@keyframes lc-spin { to { transform: rotate(360deg); } }
@keyframes lc-fadein { from { opacity:0; transform:translateY(4px); } to { opacity:1; transform:none; } }
@keyframes lc-confetti { 0%{opacity:0;transform:scale(.8)} 50%{opacity:1;transform:scale(1.02)} 100%{opacity:1;transform:scale(1)} }

/* ── Layout ── */
.lc-screen      { height:100vh; background:var(--lc-bg); color:var(--lc-text); font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif; font-size:14px; overflow:hidden; }
.lc-flex-col    { display:flex; flex-direction:column; }
.lc-center      { display:flex; align-items:center; justify-content:center; }
.lc-main        { display:flex; flex:1; overflow:hidden; }
.lc-panel       { display:flex; flex-direction:column; overflow:hidden; }
.lc-panel-left  { flex-shrink:0; border-right:1px solid var(--lc-border); min-width:280px; }
.lc-panel-right { flex:1; min-width:0; }

/* ── Top Bar ── */
.lc-topbar {
  height:48px; display:flex; align-items:center; justify-content:space-between;
  padding:0 12px; background:var(--lc-surface); border-bottom:1px solid var(--lc-border); flex-shrink:0;
}
.lc-topbar-left  { display:flex; align-items:center; gap:10px; min-width:0; flex:1; }
.lc-topbar-right { display:flex; align-items:center; gap:8px; flex-shrink:0; }
.lc-topbar-sep   { width:1px; height:18px; background:var(--lc-border); }
.lc-topbar-title { font-size:13.5px; font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }

/* ── Tags ── */
.lc-tag          { display:inline-flex; align-items:center; padding:2px 9px; border-radius:999px; font-size:11.5px; font-weight:600; white-space:nowrap; }
.lc-tag-easy     { background:rgba(63,185,80,.15); color:var(--lc-green); }
.lc-tag-medium   { background:var(--lc-yellow-bg); color:var(--lc-yellow); }
.lc-tag-hard     { background:var(--lc-red-bg); color:var(--lc-red); }
.lc-tag-default  { background:var(--lc-surface2); color:var(--lc-text2); border:1px solid var(--lc-border); }

/* ── Buttons ── */
.lc-icon-btn {
  display:flex; align-items:center; justify-content:center;
  width:32px; height:32px; border-radius:var(--lc-radius);
  background:transparent; border:none; cursor:pointer; color:var(--lc-text2);
  transition:background .15s, color .15s;
}
.lc-icon-btn:hover { background:var(--lc-surface2); color:var(--lc-text); }

.lc-link-btn {
  display:inline-flex; align-items:center; gap:5px;
  padding:5px 10px; border-radius:var(--lc-radius); font-size:12px; font-weight:500;
  color:var(--lc-text2); text-decoration:none; transition:all .15s;
}
.lc-link-btn:hover { background:var(--lc-surface2); color:var(--lc-blue); }

.lc-btn-run, .lc-btn-submit {
  display:inline-flex; align-items:center; gap:6px;
  padding:6px 16px; border-radius:var(--lc-radius); border:none; cursor:pointer;
  font-size:13px; font-weight:600; transition:all .15s; white-space:nowrap;
}
.lc-btn-run     { background:var(--lc-surface2); color:var(--lc-text); border:1px solid var(--lc-border); }
.lc-btn-run:hover:not(:disabled) { background:var(--lc-border); border-color:var(--lc-text3); }
.lc-btn-submit  { background:#1a7f37; color:#fff; }
.lc-btn-submit:hover:not(:disabled) { background:#238636; }
.lc-btn-run:disabled, .lc-btn-submit:disabled { opacity:.4; cursor:not-allowed; }
.lc-btn-sm      { padding:4px 10px; font-size:12px; }

.lc-btn-primary {
  display:inline-flex; align-items:center; padding:8px 18px; border-radius:var(--lc-radius);
  background:var(--lc-accent); color:#fff; font-weight:600; border:none; cursor:pointer;
}
.lc-btn-primary:hover { background:var(--lc-accent-h); }

/* ── Panel Tabs ── */
.lc-panel-tabs {
  display:flex; height:44px; padding:0 4px;
  background:var(--lc-surface); border-bottom:1px solid var(--lc-border); flex-shrink:0;
}
.lc-panel-tab {
  padding:0 14px; height:100%; display:inline-flex; align-items:center;
  font-size:13px; font-weight:500; color:var(--lc-text2);
  background:none; border:none; border-bottom:2px solid transparent; cursor:pointer;
  transition:color .15s, border-color .15s;
}
.lc-panel-tab:hover { color:var(--lc-text); }
.lc-panel-tab.active { color:var(--lc-text); border-bottom-color:var(--lc-accent); }

.lc-panel-body  { flex:1; overflow-y:auto; padding:0; }
.lc-panel-body::-webkit-scrollbar { width:5px; }
.lc-panel-body::-webkit-scrollbar-thumb { background:var(--lc-border); border-radius:3px; }

/* ── Description ── */
.lc-description  { padding:20px 24px; animation:lc-fadein .2s ease; }
.lc-problem-title{ font-size:18px; font-weight:700; line-height:1.3; margin-bottom:12px; }
.lc-problem-num  { color:var(--lc-text2); font-weight:400; }
.lc-tags-row     { display:flex; flex-wrap:wrap; gap:6px; margin-bottom:18px; }

.lc-prose       { font-size:14px; line-height:1.75; color:var(--lc-text); }
.lc-prose p     { margin-bottom:12px; }
.lc-prose code  { background:var(--lc-surface2); border:1px solid var(--lc-border); border-radius:3px; padding:1px 5px; font-family:var(--lc-font-mono); font-size:12.5px; color:var(--lc-blue); }
.lc-prose strong{ color:var(--lc-text); font-weight:700; }
.lc-muted       { color:var(--lc-text2); font-style:italic; }

.lc-section      { margin-top:22px; }
.lc-section-title{ font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:.07em; color:var(--lc-text2); margin-bottom:10px; }

.lc-example      { margin-bottom:14px; }
.lc-example-label{ font-size:12.5px; font-weight:700; color:var(--lc-text); margin-bottom:6px; }
.lc-example-box  { background:var(--lc-surface2); border:1px solid var(--lc-border); border-radius:var(--lc-radius); padding:12px 14px; }
.lc-io-row       { display:flex; align-items:baseline; gap:8px; margin-bottom:5px; }
.lc-io-row:last-child{ margin-bottom:0; }
.lc-io-row--exp  { flex-direction:column; gap:4px; }
.lc-io-key       { font-size:12px; font-weight:700; font-family:var(--lc-font-mono); color:var(--lc-text2); flex-shrink:0; }
.lc-io-val       { font-size:12.5px; font-family:var(--lc-font-mono); color:var(--lc-text); word-break:break-all; }
.lc-io-exp       { font-size:12.5px; color:var(--lc-text2); line-height:1.5; }

.lc-constraints  { list-style:none; }
.lc-constraints li{ font-size:12.5px; font-family:var(--lc-font-mono); color:var(--lc-text2); padding:3px 0; display:flex; align-items:center; gap:8px; }
.lc-constraints li::before{ content:'•'; color:var(--lc-accent); }
.lc-constraints code{ background:var(--lc-surface2); padding:1px 4px; border-radius:3px; color:var(--lc-text); }

.lc-hint         { margin-top:20px; border:1px solid var(--lc-border); border-radius:var(--lc-radius); overflow:hidden; }
.lc-hint summary { padding:10px 14px; font-size:13px; font-weight:600; cursor:pointer; user-select:none; background:var(--lc-surface2); }
.lc-hint p       { padding:12px 14px; font-size:13px; color:var(--lc-text2); line-height:1.6; }

/* ── Solutions ── */
.lc-solutions       { padding:20px 24px; animation:lc-fadein .2s ease; }
.lc-solutions-header{ margin-bottom:16px; }

.lc-sol-lang-tabs   { display:flex; flex-wrap:wrap; gap:6px; margin-bottom:16px; }
.lc-sol-lang-tab {
  display:inline-flex; align-items:center; gap:5px;
  padding:5px 10px; border-radius:var(--lc-radius); border:1px solid var(--lc-border);
  background:var(--lc-surface2); font-size:12px; font-weight:600; cursor:pointer;
  color:var(--lc-text2); transition:all .15s; white-space:nowrap;
}
.lc-sol-lang-tab:hover { border-color:var(--lc-border2); color:var(--lc-text); }
.lc-sol-lang-tab.active{ background:var(--lc-surface); border-color:var(--lc-accent); color:var(--lc-text); }
.lc-sol-lang-tab.no-sol{ opacity:.5; }
.lc-sol-lang-icon   { font-size:14px; }
.lc-sol-dot         { width:5px; height:5px; border-radius:50%; background:var(--lc-green); flex-shrink:0; }

.lc-sol-content     { }
.lc-sol-actions     { display:flex; gap:8px; margin-bottom:10px; }

.lc-sol-explanation { margin-top:24px; padding-top:20px; border-top:1px solid var(--lc-border); }

/* Code block */
.lc-code-block      { border:1px solid var(--lc-border); border-radius:var(--lc-radius); overflow:hidden; margin-bottom:16px; }
.lc-code-block-header{ display:flex; align-items:center; justify-content:space-between; padding:8px 12px; background:var(--lc-surface2); border-bottom:1px solid var(--lc-border); }
.lc-code-lang-label { font-size:11.5px; font-weight:700; text-transform:uppercase; letter-spacing:.06em; color:var(--lc-text2); }
.lc-copy-btn        { display:inline-flex; align-items:center; gap:5px; padding:3px 8px; border-radius:4px; border:1px solid var(--lc-border); background:none; color:var(--lc-text2); font-size:11.5px; cursor:pointer; transition:all .15s; }
.lc-copy-btn:hover  { background:var(--lc-border); color:var(--lc-text); }
.lc-code-pre        { font-family:var(--lc-font-mono); font-size:12.5px; line-height:1.6; color:var(--lc-text); background:var(--lc-surface); padding:14px 16px; overflow-x:auto; margin:0; white-space:pre; }
.lc-code-pre::-webkit-scrollbar { height:4px; }
.lc-code-pre::-webkit-scrollbar-thumb { background:var(--lc-border); border-radius:2px; }

/* ── Submissions ── */
.lc-submissions        { padding:20px 24px; animation:lc-fadein .2s ease; }
.lc-submissions-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; }
.lc-sub-list           { display:flex; flex-direction:column; gap:8px; }
.lc-sub-item {
  background:var(--lc-surface2); border:1px solid var(--lc-border);
  border-radius:var(--lc-radius); padding:10px 14px;
  display:flex; justify-content:space-between; align-items:center;
  transition:border-color .15s;
}
.lc-sub-item:hover { border-color:var(--lc-text3); }
.lc-sub-main   { display:flex; align-items:center; gap:10px; }
.lc-sub-status { font-weight:700; font-size:13px; display:inline-flex; align-items:center; gap:5px; }
.lc-sub-status.accepted{ color:var(--lc-green); }
.lc-sub-status.wrong   { color:var(--lc-red); }
.lc-sub-lang   { font-size:12px; color:var(--lc-text2); background:var(--lc-surface); padding:2px 8px; border-radius:4px; border:1px solid var(--lc-border); }
.lc-sub-meta   { display:flex; align-items:center; gap:10px; color:var(--lc-text3); font-size:12px; }

/* ── Editorial ── */
.lc-editorial  { padding:20px 24px; animation:lc-fadein .2s ease; }

/* ── Empty State ── */
.lc-empty-tab  { display:flex; flex-direction:column; align-items:center; justify-content:center; gap:12px; padding:40px; color:var(--lc-text3); text-align:center; min-height:160px; }
.lc-empty-tab p{ font-size:13px; }

/* ── Drag Handles ── */
.lc-drag-v {
  width:5px; flex-shrink:0; cursor:ew-resize;
  background:var(--lc-bg); display:flex; align-items:center; justify-content:center;
  transition:background .15s;
}
.lc-drag-v:hover { background:var(--lc-accent); }
.lc-drag-v-inner { width:1px; height:40px; background:var(--lc-border); border-radius:1px; }

.lc-drag-h {
  height:5px; flex-shrink:0; cursor:ns-resize;
  background:var(--lc-bg); display:flex; align-items:center; justify-content:center;
  transition:background .15s;
}
.lc-drag-h:hover { background:var(--lc-accent); }
.lc-drag-h-inner { height:1px; width:40px; background:var(--lc-border); border-radius:1px; }

/* ── Language Bar ── */
.lc-lang-bar {
  height:44px; display:flex; align-items:center; gap:8px; padding:0 12px;
  background:var(--lc-surface); border-bottom:1px solid var(--lc-border); flex-shrink:0;
}
.lc-lang-select-wrap { position:relative; display:inline-flex; align-items:center; }
.lc-lang-select {
  appearance:none; background:var(--lc-surface2); border:1px solid var(--lc-border);
  border-radius:var(--lc-radius); padding:5px 28px 5px 10px;
  font-size:13px; font-weight:500; color:var(--lc-text); cursor:pointer; outline:none;
  transition:border-color .15s;
}
.lc-lang-select:hover { border-color:var(--lc-text3); }
.lc-select-chevron { position:absolute; right:8px; pointer-events:none; color:var(--lc-text2); }

/* ── Editor ── */
.lc-editor-wrap { overflow:hidden; flex-shrink:0; }

/* ── Action Bar ── */
.lc-action-bar {
  height:44px; display:flex; align-items:center; justify-content:space-between;
  padding:0 12px; background:var(--lc-surface); border-top:1px solid var(--lc-border); flex-shrink:0;
  gap:10px;
}
.lc-action-left  { display:flex; align-items:center; gap:8px; }
.lc-action-right { display:flex; align-items:center; gap:10px; margin-left:auto; }
.lc-lang-badge   { font-size:12px; color:var(--lc-text3); }

.lc-verdict-badge {
  display:inline-flex; align-items:center; gap:5px;
  padding:3px 10px; border-radius:999px; font-size:12px; font-weight:700;
}
.lc-verdict-badge.green { background:var(--lc-green-bg); color:var(--lc-green); }
.lc-verdict-badge.red   { background:var(--lc-red-bg); color:var(--lc-red); }

/* ── Console ── */
.lc-console       { display:flex; flex-direction:column; background:var(--lc-surface); border-top:1px solid var(--lc-border); flex-shrink:0; overflow:hidden; }
.lc-console-tabs  { display:flex; align-items:center; height:40px; padding:0 4px; border-bottom:1px solid var(--lc-border); flex-shrink:0; }
.lc-console-tab   {
  padding:0 14px; height:100%; display:inline-flex; align-items:center; gap:6px;
  font-size:12.5px; font-weight:500; color:var(--lc-text2);
  background:none; border:none; border-bottom:2px solid transparent; cursor:pointer;
  transition:color .15s, border-color .15s;
}
.lc-console-tab:hover  { color:var(--lc-text); }
.lc-console-tab.active { color:var(--lc-text); border-bottom-color:var(--lc-accent); }
.lc-result-dot    { width:6px; height:6px; border-radius:50%; }
.lc-result-dot.green { background:var(--lc-green); }
.lc-result-dot.red   { background:var(--lc-red); }

.lc-console-body  { flex:1; overflow-y:auto; padding:12px 14px; }
.lc-console-body::-webkit-scrollbar { width:5px; }
.lc-console-body::-webkit-scrollbar-thumb { background:var(--lc-border); border-radius:3px; }

/* Custom input toggle */
.lc-toggle-label { display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--lc-text2); cursor:pointer; user-select:none; }
.lc-toggle { display:inline-block; width:28px; height:16px; border-radius:999px; background:var(--lc-border); position:relative; transition:background .2s; flex-shrink:0; }
.lc-toggle::after { content:''; position:absolute; left:2px; top:2px; width:12px; height:12px; border-radius:50%; background:#fff; transition:transform .2s; }
.lc-toggle.on { background:var(--lc-accent); }
.lc-toggle.on::after { transform:translateX(12px); }

/* ── Test Cases ── */
.lc-testcases     { display:flex; flex-direction:column; gap:12px; }
.lc-case-pills    { display:flex; gap:6px; flex-wrap:wrap; }
.lc-case-pill {
  display:inline-flex; align-items:center; gap:5px;
  padding:4px 12px; border-radius:999px; font-size:12px; font-weight:600;
  background:var(--lc-surface2); border:1px solid var(--lc-border);
  color:var(--lc-text2); cursor:pointer; transition:all .15s;
}
.lc-case-pill:hover  { border-color:var(--lc-text3); color:var(--lc-text); }
.lc-case-pill.active { background:var(--lc-surface); border-color:var(--lc-text3); color:var(--lc-text); }
.lc-case-pill.passed { border-color:var(--lc-green); }
.lc-case-pill.failed { border-color:var(--lc-red); }
.lc-pill-dot        { width:6px; height:6px; border-radius:50%; flex-shrink:0; }
.lc-pill-dot.green  { background:var(--lc-green); }
.lc-pill-dot.red    { background:var(--lc-red); }

.lc-case-detail   { display:flex; flex-direction:column; gap:8px; animation:lc-fadein .15s ease; }
.lc-io-block      { display:flex; flex-direction:column; gap:5px; }
.lc-io-label      { font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:.06em; color:var(--lc-text2); }
.lc-label-red     { color:var(--lc-red); }
.lc-io-pre {
  font-family:var(--lc-font-mono); font-size:12.5px; line-height:1.5;
  background:var(--lc-surface2); border:1px solid var(--lc-border);
  border-radius:var(--lc-radius); padding:8px 10px; white-space:pre-wrap;
  word-break:break-all; color:var(--lc-text); margin:0;
}
.lc-io-pre.green { color:var(--lc-green); border-color:rgba(63,185,80,.3); background:rgba(63,185,80,.05); }
.lc-io-pre.red   { color:var(--lc-red); border-color:rgba(248,81,73,.3); background:rgba(248,81,73,.05); }
.lc-io-pre.lc-err{ color:var(--lc-red); background:var(--lc-red-bg); }

.lc-custom-section{ display:flex; flex-direction:column; gap:8px; }
.lc-custom-textarea {
  font-family:var(--lc-font-mono); font-size:12.5px;
  background:var(--lc-surface2); border:1px solid var(--lc-border);
  border-radius:var(--lc-radius); padding:8px 10px; color:var(--lc-text);
  resize:vertical; outline:none; transition:border-color .15s; min-height:60px;
}
.lc-custom-textarea:focus { border-color:var(--lc-accent); }

/* ── Result ── */
.lc-result          { display:flex; flex-direction:column; gap:12px; animation:lc-fadein .2s ease; }
.lc-result-accepted { display:flex; flex-direction:column; gap:12px; }
.lc-verdict         { display:inline-flex; align-items:center; gap:8px; font-size:20px; font-weight:800; }
.lc-verdict--ac     { color:var(--lc-green); }
.lc-verdict--wa     { color:var(--lc-red); }
.lc-verdict--err    { color:var(--lc-red); font-size:15px; }
.lc-verdict-sub     { font-size:13px; color:var(--lc-text2); }

.lc-stats           { display:flex; gap:20px; flex-wrap:wrap; padding:8px 0; }
.lc-stat            { display:flex; flex-direction:column; gap:3px; }
.lc-stat-label      { font-size:11px; text-transform:uppercase; letter-spacing:.06em; color:var(--lc-text2); }
.lc-stat-val        { font-size:16px; font-weight:700; color:var(--lc-text); }
.lc-stat-green      { color:var(--lc-green); }

.lc-confetti        { font-size:13px; color:var(--lc-green); background:var(--lc-green-bg); border:1px solid rgba(63,185,80,.2); padding:8px 14px; border-radius:var(--lc-radius); animation:lc-confetti .4s ease; }
`;