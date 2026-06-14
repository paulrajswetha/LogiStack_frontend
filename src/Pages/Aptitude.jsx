import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Components/Navbar';

// Formula Guide Data with improved visibility
const aptitudeTopics = [
  {
    id: 'ratio',
    name: 'Ratio and Proportions',
    icon: '📊',
    color: 'blue',
    bgGradient: 'from-blue-100 to-blue-50 dark:from-blue-950/40 dark:to-blue-900/20',
    formulas: [
      {
        name: 'Basic Ratio',
        formula: 'a : b = a/b',
        description: 'Ratio of two quantities a and b in the same units',
        example: 'If a = 6 and b = 8, ratio = 6:8 = 3:4',
        sampleQuestion: {
          question: 'If A gets ₹600 and B gets ₹400, what is the ratio of A to B?',
          solution: 'Ratio = 600 : 400 = 3 : 2',
          answer: '3 : 2'
        }
      },
      {
        name: 'Compound Ratio',
        formula: 'a:b and c:d → ac : bd',
        description: 'Product of antecedents : Product of consequents',
        example: '3:4 and 5:6 = (3×5):(4×6) = 15:24 = 5:8',
        sampleQuestion: {
          question: 'Find the compound ratio of 2:3 and 4:5.',
          solution: 'Compound ratio = (2×4) : (3×5) = 8 : 15',
          answer: '8 : 15'
        }
      },
      {
        name: 'Proportion',
        formula: 'a:b :: c:d → ad = bc',
        description: 'Four numbers are in proportion if product of extremes = product of means',
        example: '2:3 :: 4:6 → 2×6 = 3×4 = 12',
        sampleQuestion: {
          question: 'Find x if 4:x :: 6:12.',
          solution: 'Product of extremes = product of means → 4×12 = 6×x → x = 48/6 = 8',
          answer: 'x = 8'
        }
      },
      {
        name: 'Continued Proportion',
        formula: 'a:b :: b:c → b² = ac',
        description: 'Three numbers are in continued proportion',
        example: '2:4 :: 4:8 → 4² = 2×8 = 16',
        sampleQuestion: {
          question: 'Find the mean proportional between 9 and 16.',
          solution: 'Mean proportional = √(9×16) = √144 = 12',
          answer: '12'
        }
      },
      {
        name: 'Direct Proportion',
        formula: 'x₁/y₁ = x₂/y₂',
        description: 'When two quantities increase or decrease together',
        example: 'If 5 pens cost ₹50, 8 pens cost = (8×50)/5 = ₹80',
        sampleQuestion: {
          question: 'If 12 workers can finish a job in 9 days, how many workers are needed to finish it in 3 days?',
          solution: 'This is inverse proportion. 12×9 = x×3 → x = 108/3 = 36 workers',
          answer: '36 workers'
        }
      },
      {
        name: 'Inverse Proportion',
        formula: 'x₁ × y₁ = x₂ × y₂',
        description: 'When one quantity increases, the other decreases',
        example: '5 men take 10 days → 10 men take (5×10)/10 = 5 days',
        sampleQuestion: {
          question: '20 men can dig a trench in 15 days. In how many days can 25 men dig the same trench?',
          solution: '20×15 = 25×d → d = 300/25 = 12 days',
          answer: '12 days'
        }
      },
      {
        name: 'Dividing in Ratio',
        formula: 'Part of A = Total × a/(a+b)',
        description: 'Split a quantity into given ratio a:b',
        example: 'Divide ₹1200 in ratio 3:5 → A = 1200×3/8 = ₹450, B = ₹750',
        sampleQuestion: {
          question: 'Divide ₹2100 among A, B, C in ratio 2:3:4.',
          solution: 'Total parts = 9. A = 2100×2/9 = ₹466.67, B = ₹700, C = ₹933.33',
          answer: 'A=₹466.67, B=₹700, C=₹933.33'
        }
      }
    ]
  },
  {
    id: 'average',
    name: 'Average',
    icon: '📈',
    color: 'green',
    bgGradient: 'from-green-100 to-green-50 dark:from-green-950/40 dark:to-green-900/20',
    formulas: [
      {
        name: 'Basic Average',
        formula: 'Average = Sum of observations / Number of observations',
        description: 'Mean of given numbers',
        example: 'Average of 10, 20, 30 = (10+20+30)/3 = 20',
        sampleQuestion: {
          question: 'The average of 5 numbers is 40. If one number is excluded, the average becomes 36. Find the excluded number.',
          solution: 'Sum of 5 numbers = 5×40 = 200. Sum of 4 numbers = 4×36 = 144. Excluded number = 200 - 144 = 56',
          answer: '56'
        }
      },
      {
        name: 'Weighted Average',
        formula: 'Weighted Avg = (w₁x₁ + w₂x₂ + ...) / (w₁ + w₂ + ...)',
        description: 'Average when items have different weights',
        example: 'Class A (40 students avg 60) & Class B (60 students avg 70) → (40×60 + 60×70)/100 = 66',
        sampleQuestion: {
          question: 'A student scored 70 in 3 subjects and 80 in 2 subjects. What is his weighted average?',
          solution: 'Weighted avg = (3×70 + 2×80) / (3+2) = (210+160)/5 = 370/5 = 74',
          answer: '74'
        }
      },
      {
        name: 'Average Speed',
        formula: 'Avg Speed = 2S₁S₂/(S₁+S₂) (for equal distances)',
        description: 'Harmonic mean when distance is same for different speeds',
        example: 'Speed 40 km/h & 60 km/h for same distance → (2×40×60)/(40+60) = 48 km/h',
        sampleQuestion: {
          question: 'A person travels from A to B at 30 km/h and returns at 60 km/h. Find average speed.',
          solution: 'Avg speed = 2×30×60/(30+60) = 3600/90 = 40 km/h',
          answer: '40 km/h'
        }
      },
      {
        name: 'Average of Consecutive Numbers',
        formula: 'Average = (First + Last)/2',
        description: 'For arithmetic progression',
        example: 'Average of 1 to 10 = (1+10)/2 = 5.5',
        sampleQuestion: {
          question: 'Find the average of all even numbers from 2 to 50.',
          solution: 'Even numbers: 2, 4, ..., 50. Average = (2+50)/2 = 26',
          answer: '26'
        }
      },
      {
        name: 'Effect of Adding/Removing a Member',
        formula: 'New sum = Old Avg × Old count ± New value',
        description: 'Recalculate average after addition or removal',
        example: 'Avg of 5 is 20 (sum=100). Add 30 → new avg = 130/6 ≈ 21.67',
        sampleQuestion: {
          question: 'Average age of 10 students is 15. A new student of age 18 joins. Find new average.',
          solution: 'Old sum = 150. New sum = 150+18 = 168. New avg = 168/11 ≈ 15.27',
          answer: '≈ 15.27 years'
        }
      }
    ]
  },
  {
    id: 'time-work',
    name: 'Time and Work',
    icon: '⏰',
    color: 'purple',
    bgGradient: 'from-purple-100 to-purple-50 dark:from-purple-950/40 dark:to-purple-900/20',
    formulas: [
      {
        name: 'Work Done',
        formula: 'Work = Time × Rate',
        description: 'Total work = (Time taken) × (Work done per unit time)',
        example: 'If A takes 5 days, work/day = 1/5',
        sampleQuestion: {
          question: 'A can do a piece of work in 10 days. How much work does he complete in 4 days?',
          solution: 'Work per day = 1/10. Work in 4 days = 4 × 1/10 = 2/5 = 40%',
          answer: '2/5 of the work'
        }
      },
      {
        name: 'Combined Work',
        formula: '1/T = 1/T₁ + 1/T₂',
        description: 'Time taken by A and B together',
        example: 'A takes 10 days, B takes 15 days → Together = (10×15)/(10+15) = 6 days',
        sampleQuestion: {
          question: 'A can complete a job in 12 days and B in 18 days. Together how long will they take?',
          solution: 'Together = (12×18)/(12+18) = 216/30 = 7.2 days',
          answer: '7.2 days'
        }
      },
      {
        name: 'Work Efficiency',
        formula: 'Efficiency ∝ 1/Time',
        description: 'More efficiency means less time',
        example: 'A is twice as efficient as B → If B takes 20 days, A takes 10 days',
        sampleQuestion: {
          question: 'A is 3 times as efficient as B. If B takes 27 days to complete a job, how many days will A take?',
          solution: 'A takes 27/3 = 9 days',
          answer: '9 days'
        }
      },
      {
        name: 'Work Alternately',
        formula: 'Work done in 2 days = 1/T₁ + 1/T₂',
        description: 'When working on alternate days',
        example: 'A(10 days) & B(15 days) → 2-day work = 1/10 + 1/15 = 1/6',
        sampleQuestion: {
          question: 'A and B work alternately. A takes 6 days, B takes 12 days. A starts first. When is work done?',
          solution: 'In 2 days: 1/6 + 1/12 = 1/4. Full work = 8 days',
          answer: '8 days'
        }
      },
      {
        name: 'Pipes and Cisterns',
        formula: 'Net fill rate = Inlet rate - Outlet rate',
        description: 'Filling a tank with inlets and outlets',
        example: 'Pipe A fills in 4h, Pipe B empties in 12h → Net = 1/4 - 1/12 = 1/6 → fills in 6h',
        sampleQuestion: {
          question: 'Pipe A fills a tank in 6 hours, Pipe B empties it in 8 hours. Both open together — when is tank full?',
          solution: 'Net rate = 1/6 - 1/8 = (4-3)/24 = 1/24. Time = 24 hours',
          answer: '24 hours'
        }
      },
      {
        name: 'MDH Formula',
        formula: 'M₁D₁H₁ = M₂D₂H₂',
        description: 'Men × Days × Hours = constant for same work',
        example: '10 men × 5 days × 8h = 20 men × D × 8h → D = 2.5 days',
        sampleQuestion: {
          question: '15 workers complete work in 10 days working 8 hrs/day. How many days needed if 20 workers work 6 hrs/day?',
          solution: '15×10×8 = 20×D×6 → 1200 = 120D → D = 10 days',
          answer: '10 days'
        }
      }
    ]
  },
  {
    id: 'time-speed-distance',
    name: 'Time, Speed and Distance',
    icon: '🚗',
    color: 'yellow',
    bgGradient: 'from-yellow-100 to-yellow-50 dark:from-yellow-950/40 dark:to-yellow-900/20',
    formulas: [
      {
        name: 'Basic Formula',
        formula: 'Speed = Distance / Time',
        description: 'Fundamental relationship',
        example: 'Distance 100 km in 2 hours → Speed = 50 km/h',
        sampleQuestion: {
          question: 'A car travels 240 km in 4 hours. What is its speed?',
          solution: 'Speed = 240/4 = 60 km/h',
          answer: '60 km/h'
        }
      },
      {
        name: 'Unit Conversion',
        formula: '1 km/h = 5/18 m/s; 1 m/s = 18/5 km/h',
        description: 'Converting between km/h and m/s',
        example: '72 km/h = 72 × 5/18 = 20 m/s',
        sampleQuestion: {
          question: 'Convert 54 km/h to m/s.',
          solution: '54 × 5/18 = 15 m/s',
          answer: '15 m/s'
        }
      },
      {
        name: 'Relative Speed (Same Direction)',
        formula: 'Relative Speed = |S₁ - S₂|',
        description: 'When moving in same direction',
        example: 'Speeds 60 km/h & 40 km/h → Relative = 20 km/h',
        sampleQuestion: {
          question: 'Two trains moving in same direction at 80 km/h and 50 km/h. How long for faster train to gain 300 km?',
          solution: 'Relative speed = 30 km/h. Time = 300/30 = 10 hours',
          answer: '10 hours'
        }
      },
      {
        name: 'Relative Speed (Opposite Direction)',
        formula: 'Relative Speed = S₁ + S₂',
        description: 'When moving towards each other',
        example: 'Speeds 50 km/h & 40 km/h → Relative = 90 km/h',
        sampleQuestion: {
          question: 'Two cities are 300 km apart. Two cars start simultaneously towards each other at 60 & 90 km/h. When do they meet?',
          solution: 'Time = 300/(60+90) = 300/150 = 2 hours',
          answer: '2 hours'
        }
      },
      {
        name: 'Average Speed (Total Distance)',
        formula: 'Avg Speed = Total Distance / Total Time',
        description: 'For different speeds over different distances',
        example: '100 km at 50 km/h, 100 km at 100 km/h → Avg = 200/3 = 66.67 km/h',
        sampleQuestion: {
          question: 'A man goes 60 km at 30 km/h and 40 km at 20 km/h. Find average speed.',
          solution: 'Total distance = 100 km. Total time = 60/30 + 40/20 = 2+2 = 4h. Avg = 100/4 = 25 km/h',
          answer: '25 km/h'
        }
      },
      {
        name: 'Meeting Point',
        formula: 'Distance covered by A : B = Speed of A : Speed of B',
        description: 'When two people start from same or different points',
        example: 'A:B = 60:40 = 3:2 → A covers 3/5 of total distance',
        sampleQuestion: {
          question: 'A and B start from opposite ends 200 km apart, at 40 and 60 km/h. Where do they meet?',
          solution: 'A covers 200×40/100 = 80 km from A\'s side',
          answer: '80 km from A\'s starting point'
        }
      }
    ]
  },
  {
    id: 'mixtures',
    name: 'Mixtures and Alligations',
    icon: '🧪',
    color: 'orange',
    bgGradient: 'from-orange-100 to-orange-50 dark:from-orange-950/40 dark:to-orange-900/20',
    formulas: [
      {
        name: 'Alligation Rule',
        formula: '(Mean - Cheaper) : (Dearer - Mean)',
        description: 'Ratio of cheaper to dearer quantity',
        example: 'Milk ₹20/L & ₹30/L mixed to get ₹25/L → Ratio = 5:5 = 1:1',
        sampleQuestion: {
          question: 'In what ratio should tea at ₹100/kg be mixed with tea at ₹150/kg to get a mixture at ₹120/kg?',
          solution: 'Cheaper part = 150-120 = 30, Dearer part = 120-100 = 20. Ratio = 30:20 = 3:2',
          answer: '3 : 2'
        }
      },
      {
        name: 'Mixture Replacement',
        formula: 'Remaining = Initial × (1 - R/N)ⁿ',
        description: 'When replacing part of mixture n times',
        example: '8L milk, replace 2L with water 3 times → Final milk = 8 × (3/4)³ = 3.375L',
        sampleQuestion: {
          question: 'A 40L container has pure milk. 8L is removed and replaced with water 3 times. Find milk quantity left.',
          solution: 'Milk = 40 × (1 - 8/40)³ = 40 × (4/5)³ = 40 × 64/125 = 20.48L',
          answer: '20.48 L'
        }
      },
      {
        name: 'Mixing Two Solutions',
        formula: 'Concentration = (C₁V₁ + C₂V₂) / (V₁ + V₂)',
        description: 'Final concentration after mixing two solutions',
        example: '10L of 20% & 20L of 50% → (10×20 + 20×50)/30 = 40%',
        sampleQuestion: {
          question: '5L of 30% acid is mixed with 15L of 50% acid. Find concentration of resulting mixture.',
          solution: 'Concentration = (5×30 + 15×50)/(5+15) = (150+750)/20 = 900/20 = 45%',
          answer: '45%'
        }
      }
    ]
  },
  {
    id: 'boats-streams',
    name: 'Boats and Streams',
    icon: '🚤',
    color: 'cyan',
    bgGradient: 'from-cyan-100 to-cyan-50 dark:from-cyan-950/40 dark:to-cyan-900/20',
    formulas: [
      {
        name: 'Downstream Speed',
        formula: 'D = B + S',
        description: 'Moving with the stream (Boat speed + Stream speed)',
        example: 'Boat 15 km/h, Stream 5 km/h → Downstream = 20 km/h',
        sampleQuestion: {
          question: 'A boat can go 12 km/h in still water. Stream speed is 4 km/h. Find downstream speed.',
          solution: 'Downstream = 12 + 4 = 16 km/h',
          answer: '16 km/h'
        }
      },
      {
        name: 'Upstream Speed',
        formula: 'U = B - S',
        description: 'Moving against the stream',
        example: 'Boat 15 km/h, Stream 5 km/h → Upstream = 10 km/h',
        sampleQuestion: {
          question: 'A boat\'s speed in still water is 10 km/h and stream is 3 km/h. Find upstream speed.',
          solution: 'Upstream = 10 - 3 = 7 km/h',
          answer: '7 km/h'
        }
      },
      {
        name: 'Boat Speed in Still Water',
        formula: 'B = (D + U) / 2',
        description: 'Speed of boat in still water',
        example: 'Downstream 20 km/h, Upstream 10 km/h → Boat = 15 km/h',
        sampleQuestion: {
          question: 'A boat travels 30 km/h downstream and 18 km/h upstream. Find its speed in still water.',
          solution: 'B = (30+18)/2 = 48/2 = 24 km/h',
          answer: '24 km/h'
        }
      },
      {
        name: 'Stream Speed',
        formula: 'S = (D - U) / 2',
        description: 'Speed of current',
        example: 'Downstream 20 km/h, Upstream 10 km/h → Stream = 5 km/h',
        sampleQuestion: {
          question: 'Downstream speed is 22 km/h and upstream is 14 km/h. Find stream speed.',
          solution: 'Stream = (22-14)/2 = 8/2 = 4 km/h',
          answer: '4 km/h'
        }
      },
      {
        name: 'Time for Round Trip',
        formula: 'Total Time = d/D + d/U',
        description: 'Time to go and return same distance',
        example: 'Distance 40 km, D=20 km/h, U=10 km/h → Time = 40/20 + 40/10 = 6h',
        sampleQuestion: {
          question: 'A boat travels 60 km downstream in 3 hours and returns in 5 hours. Find boat and stream speed.',
          solution: 'D=20, U=12. B=(20+12)/2=16 km/h, S=(20-12)/2=4 km/h',
          answer: 'Boat=16 km/h, Stream=4 km/h'
        }
      }
    ]
  },
  {
    id: 'clocks-calendar',
    name: 'Clocks and Calendar',
    icon: '🕐',
    color: 'red',
    bgGradient: 'from-red-100 to-red-50 dark:from-red-950/40 dark:to-red-900/20',
    formulas: [
      {
        name: 'Angle Between Hands',
        formula: 'Angle = |30H - 5.5M|',
        description: 'H = hours, M = minutes',
        example: 'At 3:30 → |30×3 - 5.5×30| = |90 - 165| = 75°',
        sampleQuestion: {
          question: 'Find the angle between clock hands at 4:20.',
          solution: '|30×4 - 5.5×20| = |120 - 110| = 10°',
          answer: '10°'
        }
      },
      {
        name: 'Minute Hand Speed',
        formula: 'Minute hand moves at 6°/min; Hour hand at 0.5°/min',
        description: 'Angular velocity of clock hands',
        example: 'In 10 min: Minute hand = 60°, Hour hand = 5°',
        sampleQuestion: {
          question: 'At what time between 5 and 6 o\'clock are the hands at right angles (90°)?',
          solution: '|30×5 - 5.5M| = 90 → 150 - 5.5M = 90 → M = 10.9 min ≈ 5:10:54',
          answer: '5:10:54 or 5:43:38'
        }
      },
      {
        name: 'Hands Overlapping',
        formula: 'T = (60H)/11 minutes past H',
        description: 'When minute hand and hour hand coincide',
        example: 'After 3 o\'clock: (60×3)/11 = 16.36 min → 3:16:21',
        sampleQuestion: {
          question: 'At what time between 6 and 7 do the hands of a clock coincide?',
          solution: 'T = (60×6)/11 = 360/11 = 32.72 min → 6:32:44',
          answer: '6 hours 32 8/11 minutes'
        }
      },
      {
        name: 'Odd Days',
        formula: '365 days = 52 weeks + 1 odd day; Leap year = 2 odd days',
        description: 'Used for day-of-week calculations',
        example: 'Normal year has 1 odd day, Leap year has 2 odd days',
        sampleQuestion: {
          question: 'What day of the week is Jan 1, 2000 if Jan 1, 1996 is Monday?',
          solution: '1996 to 2000: 4 years (1 leap: 1996). Odd days = 1+1+1+2 = 5. Monday + 5 = Saturday',
          answer: 'Saturday'
        }
      },
      {
        name: 'Leap Year Check',
        formula: 'Divisible by 4 (not century) OR divisible by 400 (century)',
        description: 'Determine if a year is a leap year',
        example: '2000 (÷400 ✓), 1900 (÷100 but not ÷400 ✗), 2024 (÷4 ✓)',
        sampleQuestion: {
          question: 'Which of the following are leap years: 1700, 1900, 2000, 2100?',
          solution: '1700: century not divisible by 400 ✗. 1900: ✗. 2000: divisible by 400 ✓. 2100: ✗',
          answer: 'Only 2000 is a leap year'
        }
      }
    ]
  },
  {
    id: 'trains',
    name: 'Trains',
    icon: '🚂',
    color: 'indigo',
    bgGradient: 'from-indigo-100 to-indigo-50 dark:from-indigo-950/40 dark:to-indigo-900/20',
    formulas: [
      {
        name: 'Crossing a Pole/Person',
        formula: 'Time = Length of Train / Speed',
        description: 'Crossing a stationary point object',
        example: 'Train length 200m, speed 20 m/s → Time = 10 s',
        sampleQuestion: {
          question: 'A 300m long train crosses a pole in 15 seconds. Find its speed in km/h.',
          solution: 'Speed = 300/15 = 20 m/s = 20×18/5 = 72 km/h',
          answer: '72 km/h'
        }
      },
      {
        name: 'Crossing a Platform/Bridge',
        formula: 'Time = (Train Length + Platform Length) / Speed',
        description: 'Crossing a bridge or platform',
        example: 'Train 200m, platform 300m, speed 20 m/s → Time = 25 s',
        sampleQuestion: {
          question: 'A train 250m long passes a 350m platform in 40 seconds. Find speed in km/h.',
          solution: 'Speed = (250+350)/40 = 600/40 = 15 m/s = 54 km/h',
          answer: '54 km/h'
        }
      },
      {
        name: 'Crossing Another Train (Same Direction)',
        formula: 'Time = (L₁ + L₂) / |S₁ - S₂|',
        description: 'When trains move same direction',
        example: 'L₁=200m, L₂=150m, S₁=30 m/s, S₂=20 m/s → Time = 350/10 = 35 s',
        sampleQuestion: {
          question: 'Two trains 200m and 300m long travel at 60 km/h and 30 km/h in same direction. Time to cross?',
          solution: 'Relative speed = 30 km/h = 25/3 m/s. Time = 500/(25/3) = 60 seconds',
          answer: '60 seconds'
        }
      },
      {
        name: 'Crossing Another Train (Opposite Direction)',
        formula: 'Time = (L₁ + L₂) / (S₁ + S₂)',
        description: 'When trains move towards each other',
        example: 'L₁=200m, L₂=150m, S₁=30 m/s, S₂=20 m/s → Time = 350/50 = 7 s',
        sampleQuestion: {
          question: 'Two trains 150m and 250m long run at 60 and 90 km/h towards each other. Time to pass?',
          solution: 'Relative speed = 150 km/h = 125/3 m/s. Time = 400/(125/3) = 9.6 s',
          answer: '9.6 seconds'
        }
      }
    ]
  },
  {
    id: 'profit-loss',
    name: 'Profit and Loss',
    icon: '💰',
    color: 'emerald',
    bgGradient: 'from-emerald-100 to-emerald-50 dark:from-emerald-950/40 dark:to-emerald-900/20',
    formulas: [
      {
        name: 'Profit',
        formula: 'Profit = SP - CP',
        description: 'When Selling Price > Cost Price',
        example: 'CP = ₹100, SP = ₹120 → Profit = ₹20',
        sampleQuestion: {
          question: 'A trader buys an article for ₹450 and sells for ₹540. Find profit and profit%.',
          solution: 'Profit = 540-450 = ₹90. Profit% = (90/450)×100 = 20%',
          answer: 'Profit = ₹90, Profit% = 20%'
        }
      },
      {
        name: 'Loss',
        formula: 'Loss = CP - SP',
        description: 'When Cost Price > Selling Price',
        example: 'CP = ₹100, SP = ₹80 → Loss = ₹20',
        sampleQuestion: {
          question: 'An item costing ₹800 is sold at ₹640. Find loss and loss%.',
          solution: 'Loss = 800-640 = ₹160. Loss% = (160/800)×100 = 20%',
          answer: 'Loss = ₹160, Loss% = 20%'
        }
      },
      {
        name: 'Profit Percentage',
        formula: 'Profit% = (Profit/CP) × 100',
        description: 'Profit as percentage of cost price',
        example: 'CP = ₹100, SP = ₹120 → Profit% = 20%',
        sampleQuestion: {
          question: 'If CP is ₹250 and profit% is 24%, find SP.',
          solution: 'SP = 250 × 124/100 = ₹310',
          answer: '₹310'
        }
      },
      {
        name: 'Loss Percentage',
        formula: 'Loss% = (Loss/CP) × 100',
        description: 'Loss as percentage of cost price',
        example: 'CP = ₹100, SP = ₹80 → Loss% = 20%',
        sampleQuestion: {
          question: 'If SP is ₹680 and loss% is 15%, find CP.',
          solution: 'CP = 680 × 100/(100-15) = 680 × 100/85 = ₹800',
          answer: '₹800'
        }
      },
      {
        name: 'Selling Price',
        formula: 'SP = CP × (100 ± P%)/100',
        description: '+ for profit, - for loss',
        example: 'CP=₹100, Profit%=20% → SP = 100×120/100 = ₹120',
        sampleQuestion: {
          question: 'A dealer marks price 40% above CP and gives 25% discount. Find profit%.',
          solution: 'Let CP=100. MP=140. SP=140×75/100=105. Profit%=(105-100)/100×100=5%',
          answer: '5% profit'
        }
      },
      {
        name: 'Discount',
        formula: 'SP = MP × (100 - Discount%)/100',
        description: 'Discount on Marked Price',
        example: 'MP=₹500, Discount=20% → SP = 500×80/100 = ₹400',
        sampleQuestion: {
          question: 'A shirt MP ₹600 is sold at 15% discount. Find SP.',
          solution: 'SP = 600 × (100-15)/100 = 600 × 85/100 = ₹510',
          answer: '₹510'
        }
      },
      {
        name: 'Successive Discounts',
        formula: 'Net discount = a + b - ab/100',
        description: 'Two successive discounts of a% and b%',
        example: 'Discounts 20% & 10% → Net = 20+10-(20×10/100) = 28%',
        sampleQuestion: {
          question: 'Find net discount equivalent to successive discounts of 30% and 20%.',
          solution: 'Net = 30+20-(30×20/100) = 50-6 = 44%',
          answer: '44%'
        }
      }
    ]
  },
  {
    id: 'percentages-ages',
    name: 'Percentages and Ages',
    icon: '📊',
    color: 'pink',
    bgGradient: 'from-pink-100 to-pink-50 dark:from-pink-950/40 dark:to-pink-900/20',
    formulas: [
      {
        name: 'Percentage',
        formula: 'x% of y = (x/100) × y',
        description: 'Basic percentage calculation',
        example: '20% of 500 = 100',
        sampleQuestion: {
          question: '35% of a number is 91. Find the number.',
          solution: 'Number = 91 × 100/35 = 260',
          answer: '260'
        }
      },
      {
        name: 'Percentage Increase',
        formula: 'Increase% = (Increase/Original) × 100',
        description: 'Percentage increase from original value',
        example: 'Price 100 to 120 → Increase% = 20%',
        sampleQuestion: {
          question: 'A salary increases from ₹12000 to ₹15000. Find % increase.',
          solution: 'Increase = 3000. % = (3000/12000)×100 = 25%',
          answer: '25%'
        }
      },
      {
        name: 'Percentage Decrease',
        formula: 'Decrease% = (Decrease/Original) × 100',
        description: 'Percentage decrease from original value',
        example: 'Price 100 to 80 → Decrease% = 20%',
        sampleQuestion: {
          question: 'Price of petrol decreased from ₹100 to ₹88. Find % decrease.',
          solution: 'Decrease = 12. % = (12/100)×100 = 12%',
          answer: '12%'
        }
      },
      {
        name: 'Population Growth',
        formula: 'P = P₀ × (1 + r/100)ⁿ',
        description: 'Population after n years at rate r%',
        example: 'P₀=1000, r=10%, n=2 → P = 1000×1.21 = 1210',
        sampleQuestion: {
          question: 'A town has population 10000. If it grows at 5% per year, find population after 2 years.',
          solution: 'P = 10000 × (1.05)² = 10000 × 1.1025 = 11025',
          answer: '11,025'
        }
      },
      {
        name: 'Age Problems (Present & Future)',
        formula: 'Present Age = Age after n years - n',
        description: 'Relation between present and future ages',
        example: 'Age after 5 years = 30 → Present = 25',
        sampleQuestion: {
          question: 'The ratio of A\'s age to B\'s age is 3:5. After 10 years ratio becomes 5:7. Find present ages.',
          solution: 'Let ages = 3x, 5x. (3x+10)/(5x+10) = 5/7 → 21x+70 = 25x+50 → x=5. A=15, B=25',
          answer: 'A = 15 years, B = 25 years'
        }
      },
      {
        name: 'Sum of Ages',
        formula: 'Sum of ages = Average × Number of persons',
        description: 'Total age calculation',
        example: 'Average age 25, 4 persons → Sum = 100',
        sampleQuestion: {
          question: 'Average age of a family of 5 is 28. Youngest is 8. What was average age at birth of youngest?',
          solution: 'Current sum = 140. Before 8 years sum = 140-5×8 = 100. Then family had 4 members → avg = 100/4 = 25',
          answer: '25 years'
        }
      }
    ]
  },
  {
    id: 'number-system',
    name: 'Number System',
    icon: '🔢',
    color: 'teal',
    bgGradient: 'from-teal-100 to-teal-50 dark:from-teal-950/40 dark:to-teal-900/20',
    formulas: [
      {
        name: 'Divisibility by 2',
        formula: 'Last digit is 0, 2, 4, 6, or 8',
        description: 'Number divisible by 2',
        example: '124, 356, 478',
        sampleQuestion: {
          question: 'Which of 4321, 1234, 5678 is divisible by 2?',
          solution: '1234 (ends in 4), 5678 (ends in 8) are divisible by 2',
          answer: '1234 and 5678'
        }
      },
      {
        name: 'Divisibility by 3',
        formula: 'Sum of digits divisible by 3',
        description: 'Number divisible by 3',
        example: '123 → 1+2+3=6 ✓',
        sampleQuestion: {
          question: 'Is 456789 divisible by 3?',
          solution: '4+5+6+7+8+9 = 39. 39/3 = 13. Yes, divisible.',
          answer: 'Yes'
        }
      },
      {
        name: 'Divisibility by 9 and 11',
        formula: 'By 9: digit sum ÷ 9; By 11: |odd-pos sum - even-pos sum| ÷ 11',
        description: 'Divisibility rules for 9 and 11',
        example: '4581 → 4-5+8-1=6 (not div by 11); 4+5+8+1=18 (div by 9)',
        sampleQuestion: {
          question: 'Check if 918918 is divisible by 11.',
          solution: 'Odd positions: 9+8+1=18; Even positions: 1+9+8=18. Diff=0. Divisible by 11.',
          answer: 'Yes'
        }
      },
      {
        name: 'Sum of First n Natural Numbers',
        formula: 'S = n(n+1)/2',
        description: 'Sum of 1 to n',
        example: 'Sum 1 to 10 = 55',
        sampleQuestion: {
          question: 'Find the sum of all natural numbers from 1 to 50.',
          solution: 'S = 50×51/2 = 1275',
          answer: '1275'
        }
      },
      {
        name: 'Sum of Squares',
        formula: 'S = n(n+1)(2n+1)/6',
        description: 'Sum of squares of first n numbers',
        example: '1²+2²+3² = 14',
        sampleQuestion: {
          question: 'Find 1² + 2² + ... + 10².',
          solution: 'S = 10×11×21/6 = 385',
          answer: '385'
        }
      },
      {
        name: 'Sum of Cubes',
        formula: 'S = [n(n+1)/2]²',
        description: 'Sum of cubes of first n numbers',
        example: '1³+2³+3³ = 36',
        sampleQuestion: {
          question: 'Find 1³ + 2³ + 3³ + ... + 5³.',
          solution: 'S = [5×6/2]² = 15² = 225',
          answer: '225'
        }
      },
      {
        name: 'HCF and LCM',
        formula: 'HCF × LCM = Product of two numbers',
        description: 'Relation between HCF and LCM',
        example: 'HCF=6, one number=12, other=6×LCM/12',
        sampleQuestion: {
          question: 'HCF of two numbers is 12 and LCM is 360. If one number is 60, find the other.',
          solution: 'Other = HCF × LCM / 60 = 12×360/60 = 72',
          answer: '72'
        }
      },
      {
        name: 'Unit Digit Cyclicity',
        formula: 'Powers of 2: cycle 4 (2,4,8,6); Powers of 3: cycle 4 (3,9,7,1)',
        description: 'Unit digit repeats in cycles',
        example: '2^10: 10 mod 4 = 2 → unit digit = 4',
        sampleQuestion: {
          question: 'Find unit digit of 7^95.',
          solution: '7 cycle: 7,9,3,1 (cycle 4). 95 mod 4 = 3 → unit digit = 3',
          answer: '3'
        }
      }
    ]
  },
  {
    id: 'permutations-combinations',
    name: 'Permutations and Combinations',
    icon: '🎲',
    color: 'violet',
    bgGradient: 'from-violet-100 to-violet-50 dark:from-violet-950/40 dark:to-violet-900/20',
    formulas: [
      {
        name: 'Factorial',
        formula: 'n! = n × (n-1) × ... × 1',
        description: 'Product of first n natural numbers',
        example: '5! = 120',
        sampleQuestion: {
          question: 'Find the value of 7!/5!',
          solution: '7!/5! = 7×6 = 42',
          answer: '42'
        }
      },
      {
        name: 'Permutation (nPr)',
        formula: 'nPr = n!/(n-r)!',
        description: 'Number of arrangements of r items from n',
        example: '5P3 = 60',
        sampleQuestion: {
          question: 'How many 3-letter words can be formed from 6 different letters?',
          solution: '6P3 = 6!/(6-3)! = 720/6 = 120',
          answer: '120'
        }
      },
      {
        name: 'Combination (nCr)',
        formula: 'nCr = n!/[r!(n-r)!]',
        description: 'Number of selections of r items from n',
        example: '5C3 = 10',
        sampleQuestion: {
          question: 'In how many ways can a committee of 3 be selected from 8 persons?',
          solution: '8C3 = 8!/(3!×5!) = 56',
          answer: '56'
        }
      },
      {
        name: 'Circular Permutations',
        formula: '(n-1)!',
        description: 'Arrangements around a circle',
        example: '5 people in circle = 4! = 24',
        sampleQuestion: {
          question: 'In how many ways can 8 people be seated around a round table?',
          solution: '(8-1)! = 7! = 5040',
          answer: '5040'
        }
      },
      {
        name: 'Permutations with Repetition',
        formula: 'nⁿ (for r from n with repetition)',
        description: 'When items can repeat',
        example: '3-digit numbers from 1-9 → 9³ = 729',
        sampleQuestion: {
          question: 'How many 4-digit codes can be made using digits 0-9 (repetition allowed)?',
          solution: '10⁴ = 10000 (including 0000)',
          answer: '10,000'
        }
      },
      {
        name: 'Identical Objects',
        formula: 'n!/(p!×q!×r!)',
        description: 'Arrangements with repeated elements',
        example: 'MISSISSIPPI: 11!/(4!4!2!1!) = 34650',
        sampleQuestion: {
          question: 'How many arrangements of word "BANANA" are possible?',
          solution: '6!/(3!×2!×1!) = 720/12 = 60',
          answer: '60'
        }
      }
    ]
  },
  {
    id: 'simple-compound-interest',
    name: 'Simple and Compound Interest',
    icon: '🏦',
    color: 'lime',
    bgGradient: 'from-lime-100 to-lime-50 dark:from-lime-950/40 dark:to-lime-900/20',
    formulas: [
      {
        name: 'Simple Interest',
        formula: 'SI = (P × R × T) / 100',
        description: 'P=Principal, R=Rate%, T=Time in years',
        example: 'P=₹1000, R=5%, T=3 → SI = 150',
        sampleQuestion: {
          question: 'Find SI on ₹5000 at 8% per annum for 3 years.',
          solution: 'SI = (5000×8×3)/100 = ₹1200',
          answer: '₹1200'
        }
      },
      {
        name: 'Amount (SI)',
        formula: 'A = P + SI = P(1 + RT/100)',
        description: 'Total amount after simple interest',
        example: 'P=₹1000, R=10%, T=2 → A = ₹1200',
        sampleQuestion: {
          question: 'What principal gives ₹720 as SI at 9% per annum in 4 years?',
          solution: 'P = SI×100/(R×T) = 720×100/(9×4) = ₹2000',
          answer: '₹2000'
        }
      },
      {
        name: 'Compound Interest',
        formula: 'CI = P[(1 + R/100)ⁿ - 1]',
        description: 'Interest compounded annually',
        example: 'P=₹1000, R=10%, T=2 → CI = ₹210',
        sampleQuestion: {
          question: 'Find CI on ₹8000 at 10% p.a. for 2 years.',
          solution: 'A = 8000×(1.1)² = 9680. CI = 9680-8000 = ₹1680',
          answer: '₹1680'
        }
      },
      {
        name: 'Amount (CI)',
        formula: 'A = P(1 + R/100)ⁿ',
        description: 'Total amount with compound interest',
        example: 'P=₹1000, R=10%, n=2 → A = ₹1210',
        sampleQuestion: {
          question: 'Find amount on ₹5000 at 12% p.a. compounded for 2 years.',
          solution: 'A = 5000×(1.12)² = 5000×1.2544 = ₹6272',
          answer: '₹6272'
        }
      },
      {
        name: 'CI Compounded Half-Yearly',
        formula: 'A = P(1 + R/200)^(2n)',
        description: 'When compounded semi-annually',
        example: 'P=₹1000, R=10%, n=1 → A = 1000×(1.05)² = ₹1102.5',
        sampleQuestion: {
          question: 'Find CI on ₹10000 at 8% p.a. for 1 year compounded half-yearly.',
          solution: 'A = 10000×(1.04)² = 10816. CI = ₹816',
          answer: '₹816'
        }
      },
      {
        name: 'Difference of CI and SI',
        formula: 'CI - SI = P(R/100)² (for 2 years)',
        description: 'Shortcut for 2-year difference',
        example: 'P=₹1000, R=10% → Diff = 1000×0.01 = ₹10',
        sampleQuestion: {
          question: 'Find the difference between CI and SI on ₹6000 at 10% for 2 years.',
          solution: 'Diff = 6000 × (10/100)² = 6000 × 0.01 = ₹60',
          answer: '₹60'
        }
      }
    ]
  },
  {
    id: 'algebra',
    name: 'Algebra',
    icon: '🔡',
    color: 'fuchsia',
    bgGradient: 'from-fuchsia-100 to-fuchsia-50 dark:from-fuchsia-950/40 dark:to-fuchsia-900/20',
    formulas: [
      {
        name: '(a+b)² and (a-b)²',
        formula: '(a+b)² = a²+2ab+b²; (a-b)² = a²-2ab+b²',
        description: 'Square of sum or difference',
        example: '(3+5)² = 9+30+25 = 64',
        sampleQuestion: {
          question: 'If a+b=7 and ab=12, find a²+b².',
          solution: 'a²+b² = (a+b)² - 2ab = 49-24 = 25',
          answer: '25'
        }
      },
      {
        name: 'a² - b²',
        formula: 'a² - b² = (a+b)(a-b)',
        description: 'Difference of squares factorization',
        example: '25-16 = (5+4)(5-4) = 9',
        sampleQuestion: {
          question: 'Find value of 999² - 1².',
          solution: '(999+1)(999-1) = 1000 × 998 = 998000',
          answer: '998000'
        }
      },
      {
        name: '(a+b)³ and (a-b)³',
        formula: '(a+b)³ = a³+3a²b+3ab²+b³',
        description: 'Cube of binomial',
        example: '(2+3)³ = 125',
        sampleQuestion: {
          question: 'If a+b=5 and a³+b³=35, find ab.',
          solution: 'a³+b³=(a+b)(a²-ab+b²). 35=5×((a+b)²-3ab)=5×(25-3ab). 7=25-3ab → ab=6',
          answer: 'ab = 6'
        }
      },
      {
        name: 'a³ + b³ and a³ - b³',
        formula: 'a³+b³ = (a+b)(a²-ab+b²); a³-b³ = (a-b)(a²+ab+b²)',
        description: 'Sum and difference of cubes',
        example: 'x³+8 = (x+2)(x²-2x+4)',
        sampleQuestion: {
          question: 'Simplify: (x³-27)/(x-3).',
          solution: 'x³-27 = (x-3)(x²+3x+9). Answer = x²+3x+9',
          answer: 'x²+3x+9'
        }
      },
      {
        name: 'Quadratic Formula',
        formula: 'x = [-b ± √(b²-4ac)] / 2a',
        description: 'Roots of ax² + bx + c = 0',
        example: 'x²-5x+6=0 → x=3 or x=2',
        sampleQuestion: {
          question: 'Solve 2x²-7x+3=0.',
          solution: 'x = (7 ± √(49-24))/4 = (7±5)/4. x = 3 or x = 0.5',
          answer: 'x = 3 or x = 1/2'
        }
      },
      {
        name: 'Linear Equations',
        formula: 'ax + by = c; dx + ey = f',
        description: 'Solving system of two equations',
        example: 'x+y=10, x-y=2 → x=6, y=4',
        sampleQuestion: {
          question: 'Solve: 3x+2y=12 and x+y=5.',
          solution: 'From eq2: x=5-y. Sub: 3(5-y)+2y=12 → 15-y=12 → y=3, x=2',
          answer: 'x = 2, y = 3'
        }
      }
    ]
  },
  {
    id: 'geometry',
    name: 'Geometry',
    icon: '📐',
    color: 'sky',
    bgGradient: 'from-sky-100 to-sky-50 dark:from-sky-950/40 dark:to-sky-900/20',
    formulas: [
      {
        name: 'Triangle Area',
        formula: 'Area = (1/2) × base × height',
        description: 'Area of any triangle',
        example: 'Base=10, Height=6 → Area = 30 sq units',
        sampleQuestion: {
          question: 'Find area of triangle with base 14 cm and height 9 cm.',
          solution: 'Area = (1/2) × 14 × 9 = 63 cm²',
          answer: '63 cm²'
        }
      },
      {
        name: "Heron's Formula",
        formula: 'Area = √[s(s-a)(s-b)(s-c)], s = (a+b+c)/2',
        description: 'Area when all three sides given',
        example: 'Sides 3,4,5 → s=6 → Area = √(6×3×2×1) = 6',
        sampleQuestion: {
          question: 'Find area of triangle with sides 5, 12, 13 cm.',
          solution: 's=(5+12+13)/2=15. Area=√(15×10×3×2)=√900=30 cm²',
          answer: '30 cm²'
        }
      },
      {
        name: 'Circle',
        formula: 'Area = πr²; Circumference = 2πr',
        description: 'Circle formulas',
        example: 'r=7 → Area = 154, Circumference = 44',
        sampleQuestion: {
          question: 'Find area and circumference of circle with diameter 14 cm. (π=22/7)',
          solution: 'r=7. Area=22/7×49=154 cm². Circumference=2×22/7×7=44 cm',
          answer: 'Area=154 cm², Circumference=44 cm'
        }
      },
      {
        name: 'Rectangle',
        formula: 'Area = l×b; Perimeter = 2(l+b); Diagonal = √(l²+b²)',
        description: 'Rectangle formulas',
        example: 'l=8, b=6 → Area=48, Perimeter=28, Diagonal=10',
        sampleQuestion: {
          question: 'A rectangle has length 15m and breadth 9m. Find area, perimeter, and diagonal.',
          solution: 'Area=135 m², Perimeter=48 m, Diagonal=√(225+81)=√306≈17.49 m',
          answer: 'Area=135 m², Perimeter=48 m, Diagonal≈17.49 m'
        }
      },
      {
        name: 'Pythagoras Theorem',
        formula: 'c² = a² + b²',
        description: 'For right-angled triangle: hypotenuse² = sum of squares of other sides',
        example: 'a=3, b=4 → c = 5',
        sampleQuestion: {
          question: 'A ladder 25m long leans against a wall. Its foot is 7m from wall. How high does it reach?',
          solution: 'Height = √(25²-7²) = √(625-49) = √576 = 24 m',
          answer: '24 m'
        }
      },
      {
        name: 'Trapezium',
        formula: 'Area = (1/2) × (a+b) × h',
        description: 'a, b = parallel sides, h = height',
        example: 'a=8, b=12, h=5 → Area = 50',
        sampleQuestion: {
          question: 'Find area of trapezium with parallel sides 10cm, 18cm and height 6cm.',
          solution: 'Area = (1/2)(10+18)×6 = (1/2)×28×6 = 84 cm²',
          answer: '84 cm²'
        }
      },
      {
        name: 'Cube and Cuboid',
        formula: 'Cube: V=a³, SA=6a². Cuboid: V=lbh, SA=2(lb+bh+hl)',
        description: 'Volume and surface area',
        example: 'Cuboid l=3,b=4,h=5 → V=60, SA=94',
        sampleQuestion: {
          question: 'Find volume and total surface area of a box 8×5×3 cm.',
          solution: 'V=8×5×3=120 cm³. SA=2(40+15+24)=2×79=158 cm²',
          answer: 'V=120 cm³, SA=158 cm²'
        }
      },
      {
        name: 'Cylinder',
        formula: 'V = πr²h; Curved SA = 2πrh; Total SA = 2πr(r+h)',
        description: 'Volume and surface area of cylinder',
        example: 'r=7, h=10 → V=1540, CSA=440',
        sampleQuestion: {
          question: 'Find volume of cylinder with r=5cm, h=14cm. (π=22/7)',
          solution: 'V = 22/7 × 25 × 14 = 1100 cm³',
          answer: '1100 cm³'
        }
      },
      {
        name: 'Cone and Sphere',
        formula: 'Cone V=(1/3)πr²h; Sphere V=(4/3)πr³, SA=4πr²',
        description: 'Volume of cone and sphere',
        example: 'Sphere r=3 → V=36π',
        sampleQuestion: {
          question: 'Find volume of sphere with radius 6cm. (π=22/7)',
          solution: 'V = (4/3)×(22/7)×216 = 905.14 cm³',
          answer: '≈ 905.14 cm³'
        }
      }
    ]
  },
  {
    id: 'probability',
    name: 'Probability',
    icon: '🎯',
    color: 'rose',
    bgGradient: 'from-rose-100 to-rose-50 dark:from-rose-950/40 dark:to-rose-900/20',
    formulas: [
      {
        name: 'Basic Probability',
        formula: 'P(E) = Favorable outcomes / Total outcomes',
        description: 'Probability of an event',
        example: 'Rolling 3 on a die: P = 1/6',
        sampleQuestion: {
          question: 'A bag has 4 red and 6 blue balls. What is probability of picking a red ball?',
          solution: 'P(red) = 4/(4+6) = 4/10 = 2/5',
          answer: '2/5'
        }
      },
      {
        name: 'Complementary Events',
        formula: "P(E') = 1 - P(E)",
        description: 'Probability of event NOT occurring',
        example: "P(head) = 1/2 → P(not head) = 1/2",
        sampleQuestion: {
          question: "Probability of raining is 0.35. Find probability of it NOT raining.",
          solution: "P(not raining) = 1 - 0.35 = 0.65",
          answer: '0.65'
        }
      },
      {
        name: 'Addition Rule',
        formula: 'P(A∪B) = P(A) + P(B) - P(A∩B)',
        description: 'Probability of A or B occurring',
        example: 'P(A)=0.4, P(B)=0.3, P(A∩B)=0.1 → P(A∪B)=0.6',
        sampleQuestion: {
          question: 'P(A)=1/2, P(B)=1/3, P(A∩B)=1/6. Find P(A or B).',
          solution: 'P(A∪B) = 1/2 + 1/3 - 1/6 = 3/6+2/6-1/6 = 4/6 = 2/3',
          answer: '2/3'
        }
      },
      {
        name: 'Multiplication Rule (Independent)',
        formula: 'P(A∩B) = P(A) × P(B)',
        description: 'For independent events',
        example: 'Two coins: P(both heads) = 1/2 × 1/2 = 1/4',
        sampleQuestion: {
          question: 'Two dice are rolled. Find probability of getting 4 on both.',
          solution: 'P = 1/6 × 1/6 = 1/36',
          answer: '1/36'
        }
      },
      {
        name: 'Conditional Probability',
        formula: 'P(A|B) = P(A∩B) / P(B)',
        description: 'Probability of A given B has occurred',
        example: 'P(A∩B)=0.2, P(B)=0.4 → P(A|B)=0.5',
        sampleQuestion: {
          question: 'P(A)=0.6, P(B)=0.5, P(A∩B)=0.3. Find P(A|B).',
          solution: 'P(A|B) = 0.3/0.5 = 0.6',
          answer: '0.6'
        }
      },
      {
        name: 'Probability with Cards',
        formula: 'Total cards = 52; Suits = 4; Each suit = 13 cards',
        description: 'Standard deck of cards',
        example: 'P(Ace) = 4/52 = 1/13',
        sampleQuestion: {
          question: 'Find probability of drawing a King or a Spade from a standard deck.',
          solution: 'P(K) = 4/52, P(S) = 13/52, P(K∩S) = 1/52. P = 4/52+13/52-1/52 = 16/52 = 4/13',
          answer: '4/13'
        }
      }
    ]
  },
  {
    id: 'series-progressions',
    name: 'Series and Progressions',
    icon: '🔗',
    color: 'amber',
    bgGradient: 'from-amber-100 to-amber-50 dark:from-amber-950/40 dark:to-amber-900/20',
    formulas: [
      {
        name: 'Arithmetic Progression (AP)',
        formula: 'aₙ = a + (n-1)d; Sₙ = n/2[2a + (n-1)d]',
        description: 'Sequence with constant common difference d',
        example: '2,5,8,11... a=2, d=3. a₅ = 2+4×3 = 14',
        sampleQuestion: {
          question: 'Find 20th term and sum of 20 terms of AP: 3, 8, 13, 18...',
          solution: 'a=3, d=5. a₂₀=3+19×5=98. S₂₀=20/2×(6+95)=10×101=1010',
          answer: 'a₂₀=98, S₂₀=1010'
        }
      },
      {
        name: 'Geometric Progression (GP)',
        formula: 'aₙ = arⁿ⁻¹; Sₙ = a(rⁿ-1)/(r-1)',
        description: 'Sequence with constant common ratio r',
        example: '2,6,18,54... a=2, r=3. S₄ = 2(81-1)/2 = 80',
        sampleQuestion: {
          question: 'Find sum of first 5 terms of GP: 3, 6, 12, 24...',
          solution: 'a=3, r=2. S₅ = 3(2⁵-1)/(2-1) = 3×31 = 93',
          answer: '93'
        }
      },
      {
        name: 'Sum of Infinite GP',
        formula: 'S∞ = a/(1-r), |r| < 1',
        description: 'Sum of infinite geometric series',
        example: '1 + 1/2 + 1/4 + ... = 1/(1-0.5) = 2',
        sampleQuestion: {
          question: 'Find sum: 1 + 1/3 + 1/9 + 1/27 + ...',
          solution: 'S = 1/(1-1/3) = 1/(2/3) = 3/2',
          answer: '3/2'
        }
      },
      {
        name: 'Harmonic Progression (HP)',
        formula: 'If a,b,c are in HP then 1/a, 1/b, 1/c are in AP',
        description: 'Reciprocals form an AP',
        example: '1/2, 1/5, 1/8... (AP of reciprocals: 2,5,8)',
        sampleQuestion: {
          question: 'Find Harmonic Mean of 4 and 12.',
          solution: 'HM = 2ab/(a+b) = 2×4×12/(4+12) = 96/16 = 6',
          answer: '6'
        }
      },
      {
        name: 'AM-GM-HM Inequality',
        formula: 'AM ≥ GM ≥ HM; AM × HM = GM²',
        description: 'Relationship between means',
        example: 'AM=5, HM=3.2 → GM=√(5×3.2)=4',
        sampleQuestion: {
          question: 'Find AM, GM, HM of 4 and 16.',
          solution: 'AM=(4+16)/2=10; GM=√(4×16)=8; HM=2×4×16/(4+16)=6.4',
          answer: 'AM=10, GM=8, HM=6.4'
        }
      }
    ]
  },
  {
    id: 'data-interpretation',
    name: 'Data Interpretation',
    icon: '📉',
    color: 'stone',
    bgGradient: 'from-stone-100 to-stone-50 dark:from-stone-950/40 dark:to-stone-900/20',
    formulas: [
      {
        name: 'Percentage Change',
        formula: '% Change = (New - Old)/Old × 100',
        description: 'Change between two values',
        example: '50 to 65 → (15/50)×100 = 30% increase',
        sampleQuestion: {
          question: 'Sales went from 800 units to 1000 units. Find % increase.',
          solution: '% change = (1000-800)/800 × 100 = 200/800 × 100 = 25%',
          answer: '25%'
        }
      },
      {
        name: 'Ratio Comparison',
        formula: 'Convert fractions to same denominator for comparison',
        description: 'Comparing multiple ratios',
        example: '3/7 vs 5/12 → 36/84 vs 35/84 → 3/7 > 5/12',
        sampleQuestion: {
          question: 'Arrange in ascending order: 3/5, 4/7, 5/9.',
          solution: 'LCM of 5,7,9=315. 189/315, 180/315, 175/315 → 5/9 < 4/7 < 3/5',
          answer: '5/9 < 4/7 < 3/5'
        }
      },
      {
        name: 'Pie Chart Calculation',
        formula: 'Value = (Angle/360) × Total; Angle = (Value/Total) × 360',
        description: 'Reading and interpreting pie charts',
        example: 'Sector 90° out of 360° = 25% of total',
        sampleQuestion: {
          question: 'In a pie chart, sector for Education has angle 72°. If total budget is ₹50,000, find education budget.',
          solution: 'Education = (72/360) × 50000 = 0.2 × 50000 = ₹10000',
          answer: '₹10,000'
        }
      },
      {
        name: 'Bar Chart Growth Rate',
        formula: 'Growth Rate = (Current Year - Previous Year)/Previous Year × 100',
        description: 'Year-on-year change in bar charts',
        example: 'Year 1: 200, Year 2: 250 → Growth = 25%',
        sampleQuestion: {
          question: 'Company profit: 2022=₹40L, 2023=₹52L. Find growth rate.',
          solution: 'Growth = (52-40)/40 × 100 = 12/40 × 100 = 30%',
          answer: '30%'
        }
      }
    ]
  },
  {
    id: 'logical-reasoning',
    name: 'Logical Reasoning (Numbers)',
    icon: '🧠',
    color: 'slate',
    bgGradient: 'from-slate-100 to-slate-50 dark:from-slate-950/40 dark:to-slate-900/20',
    formulas: [
      {
        name: 'Missing Number in Series',
        formula: 'Identify pattern: difference, ratio, or mixed',
        description: 'Find pattern and apply it',
        example: '2, 6, 18, 54, ? → ratio = 3 → next = 162',
        sampleQuestion: {
          question: 'Find missing: 1, 4, 9, 16, 25, ?',
          solution: 'Series = 1², 2², 3², 4², 5², 6² → next = 36',
          answer: '36'
        }
      },
      {
        name: 'Coded Arithmetic',
        formula: 'Identify coding pattern from examples and apply',
        description: 'When operations are coded differently',
        example: 'If @ means +, # means ×: 3@5#2 = (3+5)×2 = 16',
        sampleQuestion: {
          question: 'If A=1, B=2, ... Z=26, find value of FACE.',
          solution: 'F=6, A=1, C=3, E=5. Sum = 15',
          answer: '15'
        }
      },
      {
        name: 'Venn Diagrams',
        formula: 'n(A∪B) = n(A) + n(B) - n(A∩B)',
        description: 'Finding common or exclusive elements',
        example: 'Cricket=60, Football=70, Both=30 → Total=100',
        sampleQuestion: {
          question: 'In class of 80, 50 like Math, 45 like Science, 30 like both. How many like neither?',
          solution: 'Like at least one = 50+45-30 = 65. Neither = 80-65 = 15',
          answer: '15 students'
        }
      }
    ]
  }
];

// Generate 20 questions for each topic
const generateQuestions = (topicId) => {
  const questionsMap = {
    'ratio': [
      { id: 1, question: 'If a:b = 2:3 and b:c = 4:5, find a:c', options: ['8:15', '6:15', '8:12', '6:12'], correct: 0, solution: 'a:b = 2:3, b:c = 4:5 → a:c = (2×4):(3×5) = 8:15' },
      { id: 2, question: 'Divide ₹1500 in the ratio 2:3', options: ['₹600,₹900', '₹500,₹1000', '₹700,₹800', '₹400,₹1100'], correct: 0, solution: '2+3=5, 1500×2/5=600, 1500×3/5=900' },
      { id: 3, question: 'If 3x = 4y, find x:y', options: ['3:4', '4:3', '3:2', '2:3'], correct: 1, solution: '3x=4y → x/y=4/3 → x:y=4:3' },
      { id: 4, question: 'Two numbers are in ratio 5:7. If their sum is 84, find the numbers', options: ['35,49', '30,54', '40,44', '25,59'], correct: 0, solution: '5+7=12, 84×5/12=35, 84×7/12=49' },
      { id: 5, question: 'If a:b=3:4 and b:c=6:7, find a:c', options: ['9:14', '8:14', '9:16', '8:16'], correct: 0, solution: 'a:b=3:4=9:12, b:c=6:7=12:14 → a:c=9:14' },
      { id: 6, question: 'Find the fourth proportional to 4, 6, 8', options: ['10', '12', '14', '16'], correct: 1, solution: '4:6 = 8:x → 4x=48 → x=12' },
      { id: 7, question: 'If 15 men can do a work in 20 days, how many men to do same work in 12 days?', options: ['20', '25', '30', '35'], correct: 1, solution: '15×20 = M×12 → M=25' },
      { id: 8, question: 'Find mean proportional between 9 and 16', options: ['10', '12', '14', '15'], correct: 1, solution: '√(9×16)=√144=12' },
      { id: 9, question: 'If 2A = 3B = 4C, find A:B:C', options: ['6:4:3', '3:4:6', '4:3:6', '6:3:4'], correct: 0, solution: 'A:B:C = 1/2:1/3:1/4 = 6:4:3' },
      { id: 10, question: 'A mixture contains milk and water in ratio 5:3. If 8L water added, ratio becomes 5:5. Find milk quantity', options: ['15L', '20L', '25L', '30L'], correct: 1, solution: 'Milk=5x, Water=3x, 5x/(3x+8)=5/5 → 5x=3x+8 → 2x=8 → x=4 → Milk=20L' },
      { id: 11, question: 'Find third proportional to 6 and 12', options: ['18', '20', '24', '30'], correct: 2, solution: '6:12 = 12:x → 6x=144 → x=24' },
      { id: 12, question: 'If a:b=2:3, b:c=4:5, c:d=6:7, find a:d', options: ['16:35', '24:35', '48:105', '16:105'], correct: 0, solution: 'a:d = (2×4×6):(3×5×7)=48:105=16:35' },
      { id: 13, question: 'Two numbers are in ratio 3:5. If 9 is added to each, ratio becomes 2:3. Find numbers', options: ['9,15', '12,20', '15,25', '18,30'], correct: 0, solution: 'Let numbers 3x,5x, (3x+9)/(5x+9)=2/3 → 9x+27=10x+18 → x=9 → 27,45' },
      { id: 14, question: 'If 20% of A = 30% of B, find A:B', options: ['2:3', '3:2', '4:3', '3:4'], correct: 1, solution: '0.2A=0.3B → A/B=0.3/0.2=3/2 → A:B=3:2' },
      { id: 15, question: 'Find the ratio of 2 hours to 90 minutes', options: ['4:3', '3:4', '2:3', '3:2'], correct: 0, solution: '2 hours=120min, 120:90=4:3' },
      { id: 16, question: 'If x:y=2:3, find (5x+2y):(3x+4y)', options: ['16:18', '8:9', '16:18', '16:21'], correct: 3, solution: 'Let x=2k,y=3k, (10k+6k):(6k+12k)=16k:18k=8:9' },
      { id: 17, question: 'Three numbers are in ratio 1:2:3 and their sum is 72. Find the numbers', options: ['12,24,36', '10,20,30', '15,30,45', '8,16,24'], correct: 0, solution: '1+2+3=6, 72×1/6=12, 72×2/6=24, 72×3/6=36' },
      { id: 18, question: 'If a:b=2:3 and b:c=3:4, find a:b:c', options: ['2:3:4', '4:6:8', '2:3:3', '3:4:6'], correct: 0, solution: 'a:b=2:3, b:c=3:4 → a:b:c=2:3:4' },
      { id: 19, question: 'The ratio of ages of A and B is 3:4. After 5 years, ratio becomes 4:5. Find present age of A', options: ['12', '15', '18', '20'], correct: 1, solution: 'Let ages 3x,4x, (3x+5)/(4x+5)=4/5 → 15x+25=16x+20 → x=5 → A=15' },
      { id: 20, question: 'If 40% of a number is 80, find the number', options: ['200', '180', '220', '240'], correct: 0, solution: '40% of x=80 → 0.4x=80 → x=200' }
    ],
    'average': [
      { id: 1, question: 'Find the average of first 10 natural numbers', options: ['5', '5.5', '6', '6.5'], correct: 1, solution: 'Sum=55, Average=55/10=5.5' },
      { id: 2, question: 'The average of 5 numbers is 20. If one number is excluded, average becomes 18. Find excluded number', options: ['28', '30', '32', '34'], correct: 0, solution: 'Sum of 5=100, Sum of 4=72, Excluded=28' },
      { id: 3, question: 'Find average of 10,20,30,40,50', options: ['25', '30', '35', '40'], correct: 1, solution: 'Sum=150, Average=150/5=30' },
      { id: 4, question: 'The average weight of 10 students is 45kg. If a new student joins, average becomes 46kg. Find new student weight', options: ['55kg', '56kg', '57kg', '58kg'], correct: 1, solution: 'Total 10=450, Total 11=506, New=56kg' },
      { id: 5, question: 'Find average of 2,4,6,8,10', options: ['4', '5', '6', '7'], correct: 2, solution: 'Sum=30, Average=6' },
      { id: 6, question: 'The average of 6 numbers is 12. If each number is multiplied by 3, find new average', options: ['24', '30', '36', '40'], correct: 2, solution: 'New average = 12×3=36' },
      { id: 7, question: 'Find average of first 5 multiples of 3', options: ['7', '8', '9', '10'], correct: 2, solution: '3,6,9,12,15 → Sum=45, Avg=9' },
      { id: 8, question: 'The average of 3 numbers is 15. If two numbers are 12 and 18, find third', options: ['12', '15', '18', '20'], correct: 1, solution: 'Sum=45, 12+18=30, Third=15' },
      { id: 9, question: 'Average of 4 numbers is 25. If 5 is added to each, find new average', options: ['25', '30', '35', '40'], correct: 1, solution: 'New avg = 25+5=30' },
      { id: 10, question: 'The average age of 3 children is 12 years. If father\'s age is 40, find average age of family', options: ['16', '17', '18', '19'], correct: 3, solution: 'Sum=36+40=76, Avg=76/4=19' },
      { id: 11, question: 'Find average of 11,13,15,17,19', options: ['13', '14', '15', '16'], correct: 2, solution: 'Sum=75, Avg=15' },
      { id: 12, question: 'The average marks of 20 students is 65. If top scorer\'s marks 95 is removed, find new average', options: ['62.5', '63.5', '64.5', '65.5'], correct: 1, solution: 'Total=1300, New total=1205, New avg=1205/19=63.42' },
      { id: 13, question: 'Find average of 0.5, 1.5, 2.5, 3.5', options: ['2', '2.5', '3', '3.5'], correct: 0, solution: 'Sum=8, Avg=2' },
      { id: 14, question: 'The average of 10 numbers is 35. If 5 is subtracted from each, find new average', options: ['25', '30', '35', '40'], correct: 1, solution: 'New avg = 35-5=30' },
      { id: 15, question: 'Find average of 1,3,5,7,9,11', options: ['5', '6', '7', '8'], correct: 1, solution: 'Sum=36, Avg=6' },
      { id: 16, question: 'The average salary of 5 employees is ₹25000. If one employee gets ₹30000, find average of remaining', options: ['22500', '23750', '25000', '26250'], correct: 1, solution: 'Total=125000, Remaining total=95000, Avg=23750' },
      { id: 17, question: 'Find average of 8,12,16,20,24', options: ['12', '14', '16', '18'], correct: 2, solution: 'Sum=80, Avg=16' },
      { id: 18, question: 'The average of 5 consecutive numbers is 25. Find largest number', options: ['26', '27', '28', '29'], correct: 1, solution: 'Middle=25, Numbers=23,24,25,26,27 → Largest=27' },
      { id: 19, question: 'Find average of 25,30,35,40,45', options: ['30', '35', '40', '45'], correct: 1, solution: 'Sum=175, Avg=35' },
      { id: 20, question: 'The average of 3 numbers is 18. If each number is increased by 4, find new average', options: ['18', '20', '22', '24'], correct: 2, solution: 'New avg = 18+4=22' }
    ],
    'time-work': [
      { id: 1, question: 'A can complete work in 10 days, B in 15 days. In how many days together?', options: ['5', '6', '7', '8'], correct: 1, solution: '1/10+1/15=1/6 → 6 days' },
      { id: 2, question: 'A can do work in 12 days, B in 20 days. They work together for 4 days. How much work left?', options: ['1/3', '8/15', '7/15', '2/5'], correct: 2, solution: 'Together=1/12+1/20=8/60=2/15 per day, 4 days=8/15, left=7/15' },
      { id: 3, question: 'If 10 men can build wall in 20 days, how many men to build in 8 days?', options: ['20', '25', '30', '35'], correct: 1, solution: '10×20=M×8 → M=25' },
      { id: 4, question: 'A can do work in 6 days, B in 8 days. With C they finish in 3 days. Find C alone days', options: ['12', '16', '20', '24'], correct: 3, solution: '1/6+1/8+1/C=1/3 → 1/C=1/3-7/24=1/24 → C=24 days' },
      { id: 5, question: 'A is twice as efficient as B. If B takes 30 days, find A alone days', options: ['10', '12', '15', '18'], correct: 2, solution: 'Efficiency ratio 2:1 → Time ratio 1:2 → A=15 days' },
      { id: 6, question: 'A and B can do work in 12 days, B and C in 15 days, A and C in 20 days. Find A alone days', options: ['20', '25', '30', '35'], correct: 2, solution: '2(A+B+C)=1/12+1/15+1/20=12/60=1/5 → A+B+C=1/10 → A=1/10-1/15=1/30 → 30 days' },
      { id: 7, question: 'If 5 men can do work in 8 days, find work done by 10 men in 4 days', options: ['1/2', '2/3', '3/4', '1'], correct: 3, solution: 'Total work=5×8=40 man-days, 10×4=40 → complete work' },
      { id: 8, question: 'A can do work in 20 days, B in 30 days. They work together for 5 days, then A leaves. How long B takes?', options: ['12.5', '15', '17.5', '20'], correct: 2, solution: '5 days work=5(1/20+1/30)=5×5/60=25/60, left=35/60, B time=35/60×30=17.5 days' },
      { id: 9, question: 'A can do work in 15 days, B in 20 days. With C they finish in 6 days. Find C\'s efficiency', options: ['1/15', '1/20', '1/30', '1/60'], correct: 2, solution: '1/15+1/20+1/C=1/6 → 1/C=1/6-7/60=3/60=1/20 → C=20 days' },
      { id: 10, question: 'If 20 men can dig well in 12 days, how many days for 30 men?', options: ['6', '8', '10', '12'], correct: 1, solution: '20×12=30×d → d=8 days' },
      { id: 11, question: 'A can do work in 10 days, B in 15 days. They work alternately starting with A. When will work complete?', options: ['10 days', '12 days', '13 days', '14 days'], correct: 1, solution: '2 days work=1/10+1/15=1/6, in 12 days=1 complete' },
      { id: 12, question: 'Pipes A and B fill tank in 4 and 6 hours. Pipe C empties in 8 hours. All open, time to fill?', options: ['3.43', '4.5', '5.2', '6'], correct: 0, solution: '1/4+1/6-1/8=13/24 → 24/13=3.43 hours' },
      { id: 13, question: 'A can do work in 8 days, B in 10 days. They work together for 2 days, then B leaves. A finishes remaining', options: ['2.5', '3.2', '4.4', '5'], correct: 2, solution: '2 days work=2(1/8+1/10)=2×9/40=18/40, left=22/40, A time=22/40×8=4.4 days' },
      { id: 14, question: 'If 12 women can do work in 18 days, find women needed to do same in 9 days', options: ['18', '20', '24', '28'], correct: 2, solution: '12×18=W×9 → W=24' },
      { id: 15, question: 'A and B can do work in 12 days, B and C in 18 days, A and C in 24 days. Find A alone', options: ['16', '18', '20', '22'], correct: 0, solution: '2A=1/12+1/24-1/18=1/8 → A=16 days' },
      { id: 16, question: 'If 4 men can do work in 6 days, find work done by 6 men in 3 days', options: ['1/2', '2/3', '3/4', '1'], correct: 2, solution: 'Total=24 man-days, 6×3=18 → 18/24=3/4' },
      { id: 17, question: 'A can do work in 24 days, B in 36 days. They work together for 8 days, then A leaves. B finishes?', options: ['15', '18', '20', '22'], correct: 1, solution: '8 days work=8(1/24+1/36)=8×5/72=40/72=5/9, left=4/9, B time=4/9×36=16 days' },
      { id: 18, question: 'If 8 men can do work in 15 days, find days for 5 men', options: ['20', '24', '28', '32'], correct: 1, solution: '8×15=5×d → d=24 days' },
      { id: 19, question: 'A can do work in 18 days, B in 24 days. They work together, how many days?', options: ['10.28', '11.25', '12.5', '13.75'], correct: 0, solution: '1/18+1/24=7/72 → 72/7=10.28 days' },
      { id: 20, question: 'A is 3 times efficient than B. If B takes 60 days, find A alone days', options: ['15', '20', '25', '30'], correct: 1, solution: 'Efficiency ratio 3:1 → Time ratio 1:3 → A=20 days' }
    ],
    'time-speed-distance': [
      { id: 1, question: 'A car travels 240 km in 4 hours. Find speed', options: ['50 km/h', '60 km/h', '70 km/h', '80 km/h'], correct: 1, solution: 'Speed=240/4=60 km/h' },
      { id: 2, question: 'A train covers 120 km in 2.5 hours. Find speed', options: ['48 km/h', '50 km/h', '52 km/h', '54 km/h'], correct: 0, solution: 'Speed=120/2.5=48 km/h' },
      { id: 3, question: 'Two trains 120m and 180m moving opposite directions at 54 km/h and 36 km/h. Time to cross', options: ['10s', '12s', '14s', '16s'], correct: 1, solution: 'Relative speed=90 km/h=25 m/s, Total length=300m, Time=300/25=12s' },
      { id: 4, question: 'A man covers 60 km at 40 km/h and 40 km at 60 km/h. Find average speed', options: ['46 km/h', '48 km/h', '50 km/h', '52 km/h'], correct: 1, solution: 'Total distance=100km, Time=60/40+40/60=1.5+0.667=2.167h, Avg=100/2.167=46.15 km/h' },
      { id: 5, question: 'A train 200m long crosses a pole in 10s. Find speed', options: ['72 km/h', '60 km/h', '54 km/h', '45 km/h'], correct: 0, solution: 'Speed=200/10=20 m/s=72 km/h' },
      { id: 6, question: 'Two cars start from same point at 40 km/h and 60 km/h in same direction. Distance after 2 hours', options: ['20 km', '30 km', '40 km', '50 km'], correct: 2, solution: 'Relative speed=20 km/h, Distance=20×2=40 km' },
      { id: 7, question: 'A train 150m long crosses a bridge 250m in 20s. Find speed', options: ['54 km/h', '63 km/h', '72 km/h', '81 km/h'], correct: 2, solution: 'Total distance=400m, Speed=400/20=20 m/s=72 km/h' },
      { id: 8, question: 'A cyclist covers 30 km in 2 hours. Find speed in m/s', options: ['4.17 m/s', '5 m/s', '6 m/s', '8.33 m/s'], correct: 0, solution: 'Speed=15 km/h=15×5/18=4.17 m/s' },
      { id: 9, question: 'Two trains 100m and 150m moving same direction at 72 km/h and 54 km/h. Time to cross', options: ['40s', '45s', '50s', '55s'], correct: 2, solution: 'Relative speed=18 km/h=5 m/s, Length=250m, Time=250/5=50s' },
      { id: 10, question: 'A person travels 120 km at 60 km/h, then 180 km at 90 km/h. Find average speed', options: ['70 km/h', '72 km/h', '75 km/h', '78 km/h'], correct: 2, solution: 'Total distance=300km, Time=2+2=4h, Avg=75 km/h' },
      { id: 11, question: 'A train 180m long crosses a platform 220m in 20s. Find speed', options: ['54 km/h', '63 km/h', '72 km/h', '81 km/h'], correct: 2, solution: 'Distance=400m, Speed=400/20=20 m/s=72 km/h' },
      { id: 12, question: 'Two cars start from same point opposite directions at 50 km/h and 40 km/h. Distance after 3 hours', options: ['210 km', '240 km', '270 km', '300 km'], correct: 2, solution: 'Relative speed=90 km/h, Distance=90×3=270 km' },
      { id: 13, question: 'A man runs 200 m in 25s. Find speed in km/h', options: ['25.2 km/h', '28.8 km/h', '32.4 km/h', '36 km/h'], correct: 1, solution: 'Speed=200/25=8 m/s=28.8 km/h' },
      { id: 14, question: 'A train 250m long crosses a man walking at 5 km/h same direction in 18s. Find train speed', options: ['45 km/h', '50 km/h', '55 km/h', '60 km/h'], correct: 2, solution: 'Relative speed=250/18=13.89 m/s=50 km/h, Train speed=50+5=55 km/h' },
      { id: 15, question: 'A bus travels 180 km in 3 hours, then 240 km in 4 hours. Find average speed', options: ['50 km/h', '55 km/h', '60 km/h', '65 km/h'], correct: 2, solution: 'Total=420km, Time=7h, Avg=60 km/h' },
      { id: 16, question: 'Two trains 120m and 180m moving opposite at 54 km/h and 72 km/h. Time to cross', options: ['8s', '9s', '10s', '11s'], correct: 1, solution: 'Relative speed=126 km/h=35 m/s, Length=300m, Time=300/35=8.57s≈9s' },
      { id: 17, question: 'A man covers 90 km at 45 km/h, returns at 60 km/h. Find average speed', options: ['51.43 km/h', '52.5 km/h', '54 km/h', '55.6 km/h'], correct: 0, solution: 'Avg speed=2×45×60/(45+60)=5400/105=51.43 km/h' },
      { id: 18, question: 'A train 200m long crosses a platform 300m in 25s. Find speed', options: ['54 km/h', '60 km/h', '72 km/h', '81 km/h'], correct: 2, solution: 'Distance=500m, Speed=500/25=20 m/s=72 km/h' },
      { id: 19, question: 'A car travels 240 km at 40 km/h, then 240 km at 60 km/h. Find average speed', options: ['46 km/h', '48 km/h', '50 km/h', '52 km/h'], correct: 1, solution: 'Avg=2×40×60/(40+60)=4800/100=48 km/h' },
      { id: 20, question: 'A man covers 150 m in 30s. Find speed in km/h', options: ['15 km/h', '18 km/h', '20 km/h', '22 km/h'], correct: 1, solution: 'Speed=150/30=5 m/s=18 km/h' }
    ],
    'mixtures': [
      { id: 1, question: 'Milk and water in ratio 5:3. If 10L water added, ratio becomes 5:5. Find milk quantity', options: ['15L', '20L', '25L', '30L'], correct: 2, solution: 'Milk=5x, Water=3x, 5x/(3x+10)=5/5 → 5x=3x+10 → 2x=10 → x=5 → Milk=25L' },
      { id: 2, question: 'Two liquids A and B in ratio 3:5. If 4L of A added, ratio becomes 4:5. Find B quantity', options: ['15L', '20L', '25L', '30L'], correct: 1, solution: 'A=3x, B=5x, (3x+4)/5x=4/5 → 15x+20=20x → 5x=20 → x=4 → B=20L' },
      { id: 3, question: 'Find ratio to mix Rs20/L and Rs30/L to get Rs25/L', options: ['1:1', '1:2', '2:1', '3:2'], correct: 0, solution: '(30-25):(25-20)=5:5=1:1' }
    ],
    'boats-streams': [
      { id: 1, question: 'Boat speed 15 km/h, stream 3 km/h. Find downstream speed', options: ['12 km/h', '15 km/h', '18 km/h', '21 km/h'], correct: 2, solution: 'Downstream=15+3=18 km/h' },
      { id: 2, question: 'Boat speed 12 km/h, stream 2 km/h. Find upstream speed', options: ['8 km/h', '10 km/h', '12 km/h', '14 km/h'], correct: 1, solution: 'Upstream=12-2=10 km/h' }
    ],
    'clocks-calendar': [
      { id: 1, question: 'Find angle between hands at 3:30', options: ['60°', '75°', '90°', '105°'], correct: 1, solution: 'Angle=|30×3 - 5.5×30|=|90-165|=75°' },
      { id: 2, question: 'What day was 15 Aug 1947?', options: ['Thursday', 'Friday', 'Saturday', 'Sunday'], correct: 1, solution: '15 Aug 1947 was Friday' }
    ],
    'trains': [
      { id: 1, question: 'Train 150m long at 54 km/h crosses a pole in?', options: ['8s', '10s', '12s', '14s'], correct: 1, solution: 'Speed=15 m/s, Time=150/15=10s' },
      { id: 2, question: 'Train 200m crosses 300m platform at 72 km/h. Time?', options: ['20s', '25s', '30s', '35s'], correct: 1, solution: 'Speed=20 m/s, Distance=500m, Time=25s' }
    ],
    'profit-loss': [
      { id: 1, question: 'CP=100, SP=120. Find profit%', options: ['15%', '18%', '20%', '25%'], correct: 2, solution: 'Profit=20, Profit%=20%' },
      { id: 2, question: 'CP=200, SP=180. Find loss%', options: ['8%', '10%', '12%', '15%'], correct: 1, solution: 'Loss=20, Loss%=10%' }
    ],
    'percentages-ages': [
      { id: 1, question: 'Find 20% of 500', options: ['50', '75', '100', '125'], correct: 2, solution: '20/100×500=100' },
      { id: 2, question: 'A number increased by 20% becomes 120. Find number', options: ['80', '90', '100', '110'], correct: 2, solution: 'x×1.2=120 → x=100' }
    ],
    'number-system': [
      { id: 1, question: 'Is 124 divisible by 2?', options: ['Yes', 'No', 'Maybe', 'Cannot determine'], correct: 0, solution: 'Last digit 4 even → divisible by 2' },
      { id: 2, question: 'Is 123 divisible by 3?', options: ['Yes', 'No', 'Maybe', 'Cannot determine'], correct: 0, solution: '1+2+3=6 divisible by 3 → yes' }
    ],
    'permutations-combinations': [
      { id: 1, question: 'Find 5P3', options: ['20', '40', '60', '80'], correct: 2, solution: '5!/(5-3)!=120/2=60' },
      { id: 2, question: 'Find 5C2', options: ['8', '10', '12', '14'], correct: 1, solution: '5!/(2!×3!)=120/(2×6)=10' }
    ]
  };
  
  // Generate 20 questions for each topic (fallback if specific topic not fully defined)
  const defaultQuestions = Array(20).fill().map((_, i) => ({
    id: i + 1,
    question: `Sample question ${i + 1} for this topic`,
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correct: 0,
    solution: 'This is a sample solution.'
  }));
  
  const topicQuestions = questionsMap[topicId] || defaultQuestions;
  
  // Ensure we have exactly 20 questions
  while (topicQuestions.length < 20) {
    topicQuestions.push({
      id: topicQuestions.length + 1,
      question: `Additional practice question ${topicQuestions.length + 1}`,
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correct: 0,
      solution: 'Practice more to master this topic!'
    });
  }
  
  return topicQuestions.slice(0, 20);
};

// Formula Card Component with improved visibility
const FormulaCard = ({ formula, topicColor, bgGradient }) => {
  const [showExample, setShowExample] = useState(false);

  const colorMap = {
    blue: 'border-blue-500/30 bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-blue-950/40 dark:to-blue-900/20',
    green: 'border-green-500/30 bg-gradient-to-r from-green-50 to-green-100/50 dark:from-green-950/40 dark:to-green-900/20',
    purple: 'border-purple-500/30 bg-gradient-to-r from-purple-50 to-purple-100/50 dark:from-purple-950/40 dark:to-purple-900/20',
    yellow: 'border-yellow-500/30 bg-gradient-to-r from-yellow-50 to-yellow-100/50 dark:from-yellow-950/40 dark:to-yellow-900/20',
    orange: 'border-orange-500/30 bg-gradient-to-r from-orange-50 to-orange-100/50 dark:from-orange-950/40 dark:to-orange-900/20',
    cyan: 'border-cyan-500/30 bg-gradient-to-r from-cyan-50 to-cyan-100/50 dark:from-cyan-950/40 dark:to-cyan-900/20',
    red: 'border-red-500/30 bg-gradient-to-r from-red-50 to-red-100/50 dark:from-red-950/40 dark:to-red-900/20',
    indigo: 'border-indigo-500/30 bg-gradient-to-r from-indigo-50 to-indigo-100/50 dark:from-indigo-950/40 dark:to-indigo-900/20',
    emerald: 'border-emerald-500/30 bg-gradient-to-r from-emerald-50 to-emerald-100/50 dark:from-emerald-950/40 dark:to-emerald-900/20',
    pink: 'border-pink-500/30 bg-gradient-to-r from-pink-50 to-pink-100/50 dark:from-pink-950/40 dark:to-pink-900/20',
    teal: 'border-teal-500/30 bg-gradient-to-r from-teal-50 to-teal-100/50 dark:from-teal-950/40 dark:to-teal-900/20',
    violet: 'border-violet-500/30 bg-gradient-to-r from-violet-50 to-violet-100/50 dark:from-violet-950/40 dark:to-violet-900/20'
  };

  return (
    <div className={`border rounded-xl p-4 ${colorMap[topicColor]} hover:shadow-lg transition-all`}>
      <div className="mb-2">
        <h4 className="font-semibold text-[var(--text-primary)] text-sm">{formula.name}</h4>
        <div className="mt-1 font-mono text-blue-600 dark:text-blue-400 text-xs bg-white/80 dark:bg-black/30 p-2 rounded-md">
          {formula.formula}
        </div>
      </div>
      <p className="text-xs text-[var(--text-secondary)] mt-2">{formula.description}</p>
      <button
        onClick={() => setShowExample(!showExample)}
        className="mt-3 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-1 font-medium"
      >
        {showExample ? 'Hide Example' : 'Show Example'} →
      </button>
      {showExample && (
        <div className="mt-2 p-2 bg-white/70 dark:bg-black/30 rounded-md border border-[var(--border-color)]">
          <p className="text-xs text-[var(--text-primary)] font-mono">{formula.example}</p>
        </div>
      )}
    </div>
  );
};

// Topic Section Component for Formulas
const TopicSection = ({ topic }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="mb-8">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-5 bg-gradient-to-r rounded-xl mb-4 transition-all hover:scale-[1.01]"
        style={{ background: `linear-gradient(135deg, ${topic.bgGradient})` }}
      >
        <div className="flex items-center gap-4">
          <div className={`text-3xl w-12 h-12 rounded-full bg-gradient-to-br ${topic.bgGradient} flex items-center justify-center shadow-md`}>
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
            <FormulaCard key={idx} formula={formula} topicColor={topic.color} bgGradient={topic.bgGradient} />
          ))}
        </div>
      )}
    </div>
  );
};

// Formula Guide Component
const FormulaGuide = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('all');

  const filteredTopics = aptitudeTopics.filter(topic => {
    const matchesSearch = topic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.formulas.some(f => f.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesTopic = selectedTopic === 'all' || topic.id === selectedTopic;
    return matchesSearch && matchesTopic;
  });

  return (
    <div>
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
                ? 'bg-blue-500/20 border border-blue-500/30 shadow-md'
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
    </div>
  );
};

// Practice Questions Component with 20 questions per topic
const PracticeQuestions = () => {
  const [topicsList, setTopicsList] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [solutions, setSolutions] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [score, setScore] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 5;

  // Topic list for practice
  const practiceTopics = [
    'Ratio and Proportions',
    'Average',
    'Time and Work',
    'Time, Speed and Distance',
    'Mixtures and Alligations',
    'Boats and Streams',
    'Clocks and Calendar',
    'Trains',
    'Profit and Loss',
    'Percentages and Ages',
    'Number System',
    'Permutations and Combinations'
  ];

  useEffect(() => {
    setTopicsList(practiceTopics);
  }, []);

  const fetchQuestions = (topic) => {
    setSelectedTopic(topic);
    setQuestions([]);
    setSelectedAnswers({});
    setSolutions({});
    setScore(0);
    setCurrentPage(1);
    setLoading(true);
    
    // Map topic name to topic ID for question generation
    const topicIdMap = {
      'Ratio and Proportions': 'ratio',
      'Average': 'average',
      'Time and Work': 'time-work',
      'Time, Speed and Distance': 'time-speed-distance',
      'Mixtures and Alligations': 'mixtures',
      'Boats and Streams': 'boats-streams',
      'Clocks and Calendar': 'clocks-calendar',
      'Trains': 'trains',
      'Profit and Loss': 'profit-loss',
      'Percentages and Ages': 'percentages-ages',
      'Number System': 'number-system',
      'Permutations and Combinations': 'permutations-combinations'
    };
    
    const topicId = topicIdMap[topic] || topic.toLowerCase().replace(/\s+/g, '-');
    const generatedQuestions = generateQuestions(topicId);
    
    // Format questions for the component
    const formattedQuestions = generatedQuestions.map((q, idx) => ({
      _id: `${topicId}-${idx}`,
      question: q.question,
      options: q.options,
      points: 5,
      correctAnswer: q.correct,
      solution: q.solution
    }));
    
    setQuestions(formattedQuestions);
    setLoading(false);
  };

  const submitAnswer = async (questionId) => {
    const selectedAnswer = selectedAnswers[questionId];
    if (selectedAnswer === undefined) {
      setError('Please select an answer');
      setTimeout(() => setError(''), 3000);
      return;
    }
    
    setSubmitting(true);
    
    const question = questions.find(q => q._id === questionId);
    const isCorrect = selectedAnswer === question.correctAnswer;
    
    setSolutions(prev => ({ 
      ...prev, 
      [questionId]: {
        isCorrect: isCorrect,
        correctAnswer: question.correctAnswer,
        solution: question.solution
      }
    }));
    
    if (isCorrect && !solutions[questionId]) {
      setScore(prev => prev + (question?.points || 5));
    }
    
    setSubmitting(false);
  };

  const getDifficultyColor = (points) => {
    if (points <= 5) return 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300';
    if (points <= 10) return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300';
    return 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300';
  };

  const calculateProgress = () => {
    const answered = Object.keys(solutions).length;
    const total = questions.length;
    return total > 0 ? (answered / total) * 100 : 0;
  };

  // Pagination
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);
  const totalPages = Math.ceil(questions.length / questionsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Topic Selection */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Select Topic</label>
        <select
          onChange={(e) => fetchQuestions(e.target.value)}
          value={selectedTopic}
          className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg px-4 py-2 text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-80"
        >
          <option value="">Choose a topic to start</option>
          {topicsList.map(topic => (
            <option key={topic} value={topic}>{topic}</option>
          ))}
        </select>
      </div>
      
      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/50 border border-red-500 rounded-lg text-red-700 dark:text-red-300">
          {error}
        </div>
      )}
      
      {/* Progress Bar */}
      {selectedTopic && questions.length > 0 && (
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-[var(--text-secondary)]">Progress</span>
            <span className="text-blue-500 font-semibold">{Math.round(calculateProgress())}%</span>
          </div>
          <div className="h-2 bg-[var(--border-color)] rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-300"
              style={{ width: `${calculateProgress()}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-[var(--text-secondary)]">
            <span>Score: {score} points</span>
            <span>{Object.keys(solutions).length}/{questions.length} answered</span>
          </div>
        </div>
      )}
      
      {/* Loading State */}
      {loading && (
        <div className="text-center py-12">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-[var(--text-secondary)]">Loading questions...</p>
          </div>
        </div>
      )}
      
      {/* Questions List */}
      {!loading && questions.length > 0 && (
        <>
          <div className="space-y-6">
            {currentQuestions.map((q, idx) => (
              <div key={q._id} className="bg-[var(--card-bg)] rounded-lg shadow-lg overflow-hidden border border-[var(--border-color)]">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold">Question {indexOfFirstQuestion + idx + 1}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(q.points)}`}>
                      {q.points || 5} points
                    </span>
                  </div>
                  
                  <p className="text-[var(--text-primary)] mb-4 leading-relaxed">{q.question}</p>
                  
                  <div className="space-y-3 mb-6">
                    {q.options.map((opt, i) => (
                      <label 
                        key={i} 
                        className={`flex items-center p-3 bg-[var(--background)] rounded-lg cursor-pointer transition-all duration-150 ${
                          selectedAnswers[q._id] === i 
                            ? 'border-2 border-blue-500 bg-blue-500/5' 
                            : 'border border-[var(--border-color)] hover:border-blue-500/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name={q._id}
                          value={i}
                          checked={selectedAnswers[q._id] === i}
                          onChange={() => setSelectedAnswers(prev => ({ ...prev, [q._id]: i }))}
                          className="mr-3 w-4 h-4 text-blue-500 focus:ring-blue-500"
                          disabled={!!solutions[q._id]}
                        />
                        <span className="text-[var(--text-primary)] text-sm">{opt}</span>
                      </label>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={() => submitAnswer(q._id)}
                      disabled={submitting || !!solutions[q._id]}
                      className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {solutions[q._id] ? 'Answered' : 'Submit Answer'}
                    </button>
                    {solutions[q._id] && (
                      <div className={`flex-1 p-3 rounded-lg ${
                        solutions[q._id].isCorrect 
                          ? 'bg-green-100 dark:bg-green-900/30 border border-green-500' 
                          : 'bg-red-100 dark:bg-red-900/30 border border-red-500'
                      }`}>
                        <p className={`text-sm font-semibold mb-1 ${
                          solutions[q._id].isCorrect 
                            ? 'text-green-700 dark:text-green-400' 
                            : 'text-red-700 dark:text-red-400'
                        }`}>
                          {solutions[q._id].isCorrect ? '✓ Correct!' : '✗ Incorrect'}
                        </p>
                        <p className="text-xs text-[var(--text-primary)]">
                          <strong>Solution:</strong> {solutions[q._id].solution}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] disabled:opacity-50 disabled:cursor-not-allowed hover:border-blue-500/50"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`px-3 py-1 rounded-lg ${
                    currentPage === number
                      ? 'bg-blue-500 text-white'
                      : 'bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-blue-500/50'
                  }`}
                >
                  {number}
                </button>
              ))}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] disabled:opacity-50 disabled:cursor-not-allowed hover:border-blue-500/50"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
      
      {questions.length === 0 && selectedTopic && !loading && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📚</div>
          <p className="text-[var(--text-secondary)] text-lg">No questions available for this topic yet.</p>
          <p className="text-sm text-[var(--text-secondary)] mt-2">Check back soon for more questions!</p>
        </div>
      )}
      
      {!selectedTopic && !loading && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🎯</div>
          <p className="text-[var(--text-secondary)] text-lg">Select a topic to start practicing</p>
          <p className="text-sm text-[var(--text-secondary)] mt-2">Choose from the dropdown above</p>
        </div>
      )}
    </div>
  );
};

// Main Aptitude Component with Tabs
const Aptitude = () => {
  const [activeTab, setActiveTab] = useState('formulas');

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
            Complete Aptitude <span className="text-blue-500">Mastery</span>
          </h1>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Master all important formulas with examples and practice with real questions
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-1 flex gap-1">
            <button
              onClick={() => setActiveTab('formulas')}
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'formulas'
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              📖 Formulas & Examples
            </button>
            <button
              onClick={() => setActiveTab('practice')}
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'practice'
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              ✍️ Practice Questions
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'formulas' ? <FormulaGuide /> : <PracticeQuestions />}

        {/* Footer Note */}
        <div className="mt-12 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20 text-center">
          <p className="text-sm text-[var(--text-secondary)]">
            💡 <span className="font-semibold text-[var(--text-primary)]">Pro Tip:</span> Master the formulas first, then practice with questions to test your understanding.
            Click on "Show Example" to see each formula in action!
          </p>
        </div>
      </main>
    </div>
  );
};

export default Aptitude;