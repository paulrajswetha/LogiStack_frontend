import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const aptitudeTopics = [
  {
    id: 'ratio',
    name: 'Ratio and Proportions',
    icon: '📊',
    color: 'blue',
    formulas: [
      {
        name: 'Basic Ratio',
        formula: 'a : b = a/b',
        description: 'Ratio of two quantities a and b in the same units',
        example: 'If a = 6 and b = 8, ratio = 6:8 = 3:4'
      },
      {
        name: 'Compound Ratio',
        formula: 'a:b and c:d → ac : bd',
        description: 'Product of antecedents : Product of consequents',
        example: '3:4 and 5:6 = (3×5):(4×6) = 15:24 = 5:8'
      },
      {
        name: 'Proportion',
        formula: 'a:b :: c:d → ad = bc',
        description: 'Four numbers are in proportion if product of extremes = product of means',
        example: '2:3 :: 4:6 → 2×6 = 3×4 = 12'
      },
      {
        name: 'Continued Proportion',
        formula: 'a:b :: b:c → b² = ac',
        description: 'Three numbers are in continued proportion',
        example: '2:4 :: 4:8 → 4² = 2×8 = 16'
      },
      {
        name: 'Direct Proportion',
        formula: 'x₁/y₁ = x₂/y₂',
        description: 'When two quantities increase or decrease together',
        example: 'If 5 pens cost ₹50, 8 pens cost = (8×50)/5 = ₹80'
      },
      {
        name: 'Inverse Proportion',
        formula: 'x₁ × y₁ = x₂ × y₂',
        description: 'When one quantity increases, the other decreases',
        example: '5 men take 10 days → 10 men take (5×10)/10 = 5 days'
      }
    ]
  },
  {
    id: 'average',
    name: 'Average',
    icon: '📈',
    color: 'green',
    formulas: [
      {
        name: 'Basic Average',
        formula: 'Average = Sum of observations / Number of observations',
        description: 'Mean of given numbers',
        example: 'Average of 10, 20, 30 = (10+20+30)/3 = 20'
      },
      {
        name: 'Weighted Average',
        formula: 'Weighted Avg = (w₁x₁ + w₂x₂ + ...) / (w₁ + w₂ + ...)',
        description: 'Average when items have different weights',
        example: 'Class A (40 students avg 60) & Class B (60 students avg 70) → (40×60 + 60×70)/(100) = 66'
      },
      {
        name: 'Average Speed',
        formula: 'Avg Speed = Total Distance / Total Time',
        description: 'When distance is same for different speeds',
        example: 'Speed 40 km/h & 60 km/h for same distance → (2×40×60)/(40+60) = 48 km/h'
      },
      {
        name: 'Consecutive Numbers',
        formula: 'Average of consecutive numbers = (First + Last)/2',
        description: 'For arithmetic progression',
        example: 'Average of 1 to 10 = (1+10)/2 = 5.5'
      }
    ]
  },
  {
    id: 'time-work',
    name: 'Time and Work',
    icon: '⏰',
    color: 'purple',
    formulas: [
      {
        name: 'Work Done',
        formula: 'Work = Time × Rate',
        description: 'Total work = (Time taken) × (Work done per unit time)',
        example: 'If A takes 5 days, work/day = 1/5'
      },
      {
        name: 'Combined Work',
        formula: '1/T = 1/T₁ + 1/T₂',
        description: 'Time taken by A and B together',
        example: 'A takes 10 days, B takes 15 days → Together = (10×15)/(10+15) = 6 days'
      },
      {
        name: 'Work Efficiency',
        formula: 'Efficiency ∝ 1/Time',
        description: 'More efficiency means less time',
        example: 'A is twice as efficient as B → If B takes 20 days, A takes 10 days'
      },
      {
        name: 'Work Alternately',
        formula: 'Work done in 2 days = 1/T₁ + 1/T₂',
        description: 'When working on alternate days',
        example: 'A(10 days) & B(15 days) working alternate days → 2 days work = 1/10 + 1/15 = 1/6'
      }
    ]
  },
  {
    id: 'time-speed-distance',
    name: 'Time, Speed and Distance',
    icon: '🚗',
    color: 'yellow',
    formulas: [
      {
        name: 'Basic Formula',
        formula: 'Speed = Distance / Time',
        description: 'Fundamental relationship',
        example: 'Distance 100 km in 2 hours → Speed = 50 km/h'
      },
      {
        name: 'Relative Speed (Same Direction)',
        formula: 'Relative Speed = |S₁ - S₂|',
        description: 'When moving in same direction',
        example: 'Speeds 60 km/h & 40 km/h → Relative = 20 km/h'
      },
      {
        name: 'Relative Speed (Opposite Direction)',
        formula: 'Relative Speed = S₁ + S₂',
        description: 'When moving towards each other',
        example: 'Speeds 50 km/h & 40 km/h → Relative = 90 km/h'
      },
      {
        name: 'Average Speed',
        formula: 'Avg Speed = Total Distance / Total Time',
        description: 'For different speeds over different distances',
        example: '100 km at 50 km/h, 100 km at 100 km/h → Avg = 200/3 = 66.67 km/h'
      }
    ]
  },
  {
    id: 'mixtures',
    name: 'Mixtures and Alligations',
    icon: '🧪',
    color: 'orange',
    formulas: [
      {
        name: 'Alligation Rule',
        formula: '(Mean - Cheaper)/(Dearer - Mean) = Quantity of Cheaper/Quantity of Dearer',
        description: 'To find ratio of two mixtures',
        example: 'Milk costing ₹20/L & ₹30/L mixed to get ₹25/L → Ratio = (30-25):(25-20) = 5:5 = 1:1'
      },
      {
        name: 'Mixture Replacement',
        formula: 'Final Quantity = Initial × (1 - R/N)^n',
        description: 'When replacing part of mixture repeatedly',
        example: '8L milk, replace 2L water 3 times → Final = 8 × (1 - 2/8)³ = 8 × (3/4)³ = 3.375L'
      }
    ]
  },
  {
    id: 'boats-streams',
    name: 'Boats and Streams',
    icon: '🚤',
    color: 'cyan',
    formulas: [
      {
        name: 'Downstream Speed',
        formula: 'Downstream = Boat Speed + Stream Speed',
        description: 'Moving with the stream',
        example: 'Boat 15 km/h, Stream 5 km/h → Downstream = 20 km/h'
      },
      {
        name: 'Upstream Speed',
        formula: 'Upstream = Boat Speed - Stream Speed',
        description: 'Moving against the stream',
        example: 'Boat 15 km/h, Stream 5 km/h → Upstream = 10 km/h'
      },
      {
        name: 'Boat Speed',
        formula: 'Boat Speed = (Downstream + Upstream)/2',
        description: 'Speed in still water',
        example: 'Downstream 20 km/h, Upstream 10 km/h → Boat = 15 km/h'
      },
      {
        name: 'Stream Speed',
        formula: 'Stream Speed = (Downstream - Upstream)/2',
        description: 'Speed of current',
        example: 'Downstream 20 km/h, Upstream 10 km/h → Stream = 5 km/h'
      }
    ]
  },
  {
    id: 'clocks-calendar',
    name: 'Clocks and Calendar',
    icon: '🕐',
    color: 'red',
    formulas: [
      {
        name: 'Angle Between Hands',
        formula: 'Angle = |30H - 5.5M|',
        description: 'H = hours, M = minutes',
        example: 'At 3:30 → |30×3 - 5.5×30| = |90 - 165| = 75°'
      },
      {
        name: 'Overlapping Times',
        formula: 'Time = 12/11 × (Hours × 60 + Minutes)',
        description: 'When hands overlap',
        example: 'At 3:00 → Next overlap at 3:16:22'
      },
      {
        name: 'Odd Days',
        formula: '365 days = 52 weeks + 1 odd day',
        description: 'Leap year = 366 days = 52 weeks + 2 odd days',
        example: 'Normal year has 1 odd day, Leap year has 2 odd days'
      },
      {
        name: 'Day Calculation',
        formula: 'Day = (Code of month + Date + Code of year) mod 7',
        description: '0=Sun, 1=Mon, ..., 6=Sat',
        example: '15 Aug 1947 → Month code(8)=2, Date=15, Year code=0 → (2+15+0)=17 mod 7 = 3 → Friday'
      }
    ]
  },
  {
    id: 'trains',
    name: 'Trains',
    icon: '🚂',
    color: 'indigo',
    formulas: [
      {
        name: 'Crossing a Pole',
        formula: 'Time = Length of Train / Speed',
        description: 'Crossing a stationary object',
        example: 'Train length 200m, speed 20 m/s → Time = 10 seconds'
      },
      {
        name: 'Crossing a Platform',
        formula: 'Time = (Train Length + Platform Length) / Speed',
        description: 'Crossing a bridge or platform',
        example: 'Train 200m, platform 300m, speed 20 m/s → Time = 25 seconds'
      },
      {
        name: 'Crossing Another Train (Same Direction)',
        formula: 'Time = (L₁ + L₂) / (S₁ - S₂)',
        description: 'When trains move same direction',
        example: 'L₁=200m, L₂=150m, S₁=30 m/s, S₂=20 m/s → Time = 350/10 = 35 seconds'
      },
      {
        name: 'Crossing Another Train (Opposite Direction)',
        formula: 'Time = (L₁ + L₂) / (S₁ + S₂)',
        description: 'When trains move towards each other',
        example: 'L₁=200m, L₂=150m, S₁=30 m/s, S₂=20 m/s → Time = 350/50 = 7 seconds'
      }
    ]
  },
  {
    id: 'profit-loss',
    name: 'Profit and Loss',
    icon: '💰',
    color: 'emerald',
    formulas: [
      {
        name: 'Profit',
        formula: 'Profit = SP - CP',
        description: 'When Selling Price > Cost Price',
        example: 'CP = ₹100, SP = ₹120 → Profit = ₹20'
      },
      {
        name: 'Loss',
        formula: 'Loss = CP - SP',
        description: 'When Cost Price > Selling Price',
        example: 'CP = ₹100, SP = ₹80 → Loss = ₹20'
      },
      {
        name: 'Profit Percentage',
        formula: 'Profit% = (Profit/CP) × 100',
        description: 'Profit as percentage of cost price',
        example: 'CP = ₹100, SP = ₹120 → Profit% = 20%'
      },
      {
        name: 'Loss Percentage',
        formula: 'Loss% = (Loss/CP) × 100',
        description: 'Loss as percentage of cost price',
        example: 'CP = ₹100, SP = ₹80 → Loss% = 20%'
      },
      {
        name: 'Selling Price with Profit%',
        formula: 'SP = CP × (100 + Profit%)/100',
        description: 'Calculate SP given CP and profit%',
        example: 'CP = ₹100, Profit% = 20% → SP = 100 × 120/100 = ₹120'
      }
    ]
  },
  {
    id: 'percentages-ages',
    name: 'Percentages and Ages',
    icon: '📊',
    color: 'pink',
    formulas: [
      {
        name: 'Percentage',
        formula: 'x% of y = (x/100) × y',
        description: 'Basic percentage calculation',
        example: '20% of 500 = (20/100)×500 = 100'
      },
      {
        name: 'Percentage Increase',
        formula: 'Increase% = (Increase/Original) × 100',
        description: 'Percentage increase from original',
        example: 'Price increased from 100 to 120 → Increase% = 20%'
      },
      {
        name: 'Percentage Decrease',
        formula: 'Decrease% = (Decrease/Original) × 100',
        description: 'Percentage decrease from original',
        example: 'Price decreased from 100 to 80 → Decrease% = 20%'
      },
      {
        name: 'Age Problems',
        formula: 'Present Age = Age after n years - n',
        description: 'Relation between present and future ages',
        example: 'After 5 years age 30 → Present age = 25'
      },
      {
        name: 'Sum of Ages',
        formula: 'Sum of ages = Average × Number of persons',
        description: 'Total age calculation',
        example: 'Average age 25, 4 persons → Sum = 100'
      }
    ]
  },
  {
    id: 'number-system',
    name: 'Number System',
    icon: '🔢',
    color: 'teal',
    formulas: [
      {
        name: 'Divisibility by 2',
        formula: 'Last digit even',
        description: 'Number divisible by 2',
        example: '124, 356, 478'
      },
      {
        name: 'Divisibility by 3',
        formula: 'Sum of digits divisible by 3',
        description: 'Number divisible by 3',
        example: '123 → 1+2+3=6 → divisible by 3'
      },
      {
        name: 'Divisibility by 5',
        formula: 'Last digit 0 or 5',
        description: 'Number divisible by 5',
        example: '125, 130, 145'
      },
      {
        name: 'Sum of First n Natural Numbers',
        formula: 'S = n(n+1)/2',
        description: 'Sum of 1 to n',
        example: 'Sum 1 to 10 = 10×11/2 = 55'
      },
      {
        name: 'Sum of Squares',
        formula: 'S = n(n+1)(2n+1)/6',
        description: 'Sum of squares of first n numbers',
        example: '1²+2²+3² = 3×4×7/6 = 14'
      },
      {
        name: 'Sum of Cubes',
        formula: 'S = [n(n+1)/2]²',
        description: 'Sum of cubes of first n numbers',
        example: '1³+2³+3³ = (3×4/2)² = 36'
      }
    ]
  },
  {
    id: 'permutations-combinations',
    name: 'Permutations and Combinations',
    icon: '🎲',
    color: 'violet',
    formulas: [
      {
        name: 'Factorial',
        formula: 'n! = n × (n-1) × ... × 1',
        description: 'Product of first n natural numbers',
        example: '5! = 5×4×3×2×1 = 120'
      },
      {
        name: 'Permutation (nPr)',
        formula: 'nPr = n!/(n-r)!',
        description: 'Number of arrangements of r items from n',
        example: '5P3 = 5!/(5-3)! = 120/2 = 60'
      },
      {
        name: 'Combination (nCr)',
        formula: 'nCr = n!/[r!(n-r)!]',
        description: 'Number of selections of r items from n',
        example: '5C3 = 5!/[3!×2!] = 120/(6×2) = 10'
      },
      {
        name: 'Permutations with Repetition',
        formula: 'n^r',
        description: 'When items can repeat',
        example: '3-digit numbers from 1-9 → 9³ = 729'
      },
      {
        name: 'Circular Permutations',
        formula: '(n-1)!',
        description: 'Arrangements around a circle',
        example: '5 people in a circle = (5-1)! = 24 arrangements'
      }
    ]
  }
];

const FormulaCard = ({ formula, topicColor }) => {
  const [showExample, setShowExample] = useState(false);

  const colorMap = {
    blue: 'border-blue-500/30 bg-blue-500/5',
    green: 'border-green-500/30 bg-green-500/5',
    purple: 'border-purple-500/30 bg-purple-500/5',
    yellow: 'border-yellow-500/30 bg-yellow-500/5',
    orange: 'border-orange-500/30 bg-orange-500/5',
    cyan: 'border-cyan-500/30 bg-cyan-500/5',
    red: 'border-red-500/30 bg-red-500/5',
    indigo: 'border-indigo-500/30 bg-indigo-500/5',
    emerald: 'border-emerald-500/30 bg-emerald-500/5',
    pink: 'border-pink-500/30 bg-pink-500/5',
    teal: 'border-teal-500/30 bg-teal-500/5',
    violet: 'border-violet-500/30 bg-violet-500/5'
  };

  return (
    <div className={`border rounded-xl p-4 ${colorMap[topicColor]} hover:shadow-lg transition-all`}>
      <div className="mb-2">
        <h4 className="font-semibold text-[var(--text-primary)] text-sm">{formula.name}</h4>
        <div className="mt-1 font-mono text-blue-400 text-xs bg-[var(--background)] p-2 rounded-md">
          {formula.formula}
        </div>
      </div>
      <p className="text-xs text-[var(--text-secondary)] mt-2">{formula.description}</p>
      <button
        onClick={() => setShowExample(!showExample)}
        className="mt-3 text-xs text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
      >
        {showExample ? 'Hide Example' : 'Show Example'} →
      </button>
      {showExample && (
        <div className="mt-2 p-2 bg-[var(--background)] rounded-md border border-[var(--border-color)]">
          <p className="text-xs text-[var(--text-primary)] font-mono">{formula.example}</p>
        </div>
      )}
    </div>
  );
};

const TopicSection = ({ topic }) => {
  const [expanded, setExpanded] = useState(true);

  const iconColors = {
    blue: 'from-blue-500/20 to-blue-600/5',
    green: 'from-green-500/20 to-green-600/5',
    purple: 'from-purple-500/20 to-purple-600/5',
    yellow: 'from-yellow-500/20 to-yellow-600/5',
    orange: 'from-orange-500/20 to-orange-600/5',
    cyan: 'from-cyan-500/20 to-cyan-600/5',
    red: 'from-red-500/20 to-red-600/5',
    indigo: 'from-indigo-500/20 to-indigo-600/5',
    emerald: 'from-emerald-500/20 to-emerald-600/5',
    pink: 'from-pink-500/20 to-pink-600/5',
    teal: 'from-teal-500/20 to-teal-600/5',
    violet: 'from-violet-500/20 to-violet-600/5'
  };

  return (
    <div className="mb-8">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-5 bg-gradient-to-r rounded-xl mb-4 transition-all hover:scale-[1.01]"
        style={{ background: `linear-gradient(135deg, var(--card-bg) 0%, var(--background) 100%)` }}
      >
        <div className="flex items-center gap-4">
          <div className={`text-3xl w-12 h-12 rounded-full bg-gradient-to-br ${iconColors[topic.color]} flex items-center justify-center`}>
            {topic.icon}
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold text-[var(--text-primary)]">{topic.name}</h3>
            <p className="text-xs text-[var(--text-secondary)] mt-1">{topic.formulas.length} Formulas</p>
          </div>
        </div>
        <span className={`text-2xl text-[var(--text-secondary)] transition-transform ${expanded ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      {expanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-4">
          {topic.formulas.map((formula, idx) => (
            <FormulaCard key={idx} formula={formula} topicColor={topic.color} />
          ))}
        </div>
      )}
    </div>
  );
};

const AptitudeFormula = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('all');

  const filteredTopics = aptitudeTopics.filter(topic => {
    const matchesSearch = topic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.formulas.some(f => f.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesTopic = selectedTopic === 'all' || topic.id === selectedTopic;
    return matchesSearch && matchesTopic;
  });

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] font-sans">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-block bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full mb-3 tracking-wide">
            📚 Aptitude Preparation
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-3">
            Complete Aptitude <span className="text-blue-500">Formula Guide</span>
          </h1>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Master all important formulas with examples for competitive exams and interviews
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search formulas or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl px-4 py-3 pl-10 text-sm focus:outline-none focus:border-blue-500/50"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]">🔍</span>
          </div>
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50"
          >
            <option value="all">All Topics</option>
            {aptitudeTopics.map(topic => (
              <option key={topic.id} value={topic.id}>{topic.name}</option>
            ))}
          </select>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
          {aptitudeTopics.map(topic => (
            <button
              key={topic.id}
              onClick={() => setSelectedTopic(topic.id)}
              className={`p-3 rounded-xl text-center transition-all ${
                selectedTopic === topic.id
                  ? 'bg-blue-500/20 border border-blue-500/30'
                  : 'bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-blue-500/30'
              }`}
            >
              <div className="text-2xl mb-1">{topic.icon}</div>
              <p className="text-xs font-medium">{topic.name.split(' ')[0]}</p>
            </button>
          ))}
        </div>

        {/* Topics Content */}
        <div className="mt-8">
          {filteredTopics.length > 0 ? (
            filteredTopics.map(topic => (
              <TopicSection key={topic.id} topic={topic} />
            ))
          ) : (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-[var(--text-secondary)]">No formulas found matching your search</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTopic('all');
                }}
                className="mt-4 text-blue-400 hover:text-blue-300"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* Footer Note */}
        <div className="mt-12 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20 text-center">
          <p className="text-sm text-[var(--text-secondary)]">
            💡 <span className="font-semibold text-[var(--text-primary)]">Pro Tip:</span> Practice these formulas regularly with mock tests to improve speed and accuracy.
            Click on "Show Example" to see each formula in action!
          </p>
        </div>
      </main>
    </div>
  );
};

export default AptitudeFormula;