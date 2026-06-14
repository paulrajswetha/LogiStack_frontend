// DSAConcepts.jsx
import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

const DSAConcepts = () => {
  const [selectedConcept, setSelectedConcept] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Array Algorithms
  const arrayConcepts = [
    { 
      id: "ARR-1", 
      name: "Two Pointers Technique", 
      category: "Array", 
      difficulty: "Easy",
      concept: "Using two pointers to traverse array from different directions (usually left and right) to solve problems efficiently.",
      visualization: "Left pointer starts at beginning, right pointer at end. Move pointers based on conditions until they meet.",
      whenToUse: "Sorted arrays, palindrome checking, pair sum problems, removing duplicates",
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      example: "Finding pair that sums to target in sorted array - move left if sum is small, right if sum is large",
      variants: ["Fast-Slow pointers", "Left-Right pointers", "Sliding window with two pointers"]
    },
    { 
      id: "ARR-2", 
      name: "Sliding Window", 
      category: "Array", 
      difficulty: "Easy",
      concept: "Maintain a window that slides over the array to process subarrays efficiently. Window size can be fixed or variable.",
      visualization: "Window expands and contracts like a moving frame, processing elements as they enter and leave the window.",
      whenToUse: "Subarray/substring problems, maximum/minimum in subarray, longest substring with constraints",
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      example: "Finding maximum sum of k consecutive elements - slide window by adding new element and removing oldest",
      variants: ["Fixed window", "Variable window", "Dynamic window with conditions"]
    },
    { 
      id: "ARR-3", 
      name: "Prefix Sum", 
      category: "Array", 
      difficulty: "Easy",
      concept: "Precompute cumulative sums to answer range sum queries in O(1) time.",
      visualization: "Create array where prefix[i] = sum of elements from 0 to i. Then sum(i,j) = prefix[j] - prefix[i-1].",
      whenToUse: "Range sum queries, subarray sum equals k, equilibrium index problems",
      timeComplexity: "O(n) preprocessing, O(1) per query",
      spaceComplexity: "O(n)",
      example: "Finding subarray with sum zero - use prefix sum with hashmap to store first occurrence of each sum",
      variants: ["1D prefix sum", "2D prefix sum", "Difference array"]
    },
    { 
      id: "ARR-4", 
      name: "Kadane's Algorithm", 
      category: "Array", 
      difficulty: "Medium",
      concept: "Find maximum sum subarray by tracking current sum and resetting when it becomes negative.",
      visualization: "Keep running sum, if sum becomes negative, start fresh from next element. Track maximum sum seen.",
      whenToUse: "Maximum subarray sum, maximum product subarray, maximum sum circular subarray",
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      example: "[-2,1,-3,4,-1,2,1,-5,4] → maximum subarray sum is 6 (subarray [4,-1,2,1])",
      variants: ["Maximum product subarray", "Maximum sum circular subarray", "Minimum sum subarray"]
    },
    { 
      id: "ARR-5", 
      name: "Binary Search", 
      category: "Array", 
      difficulty: "Medium",
      concept: "Divide and conquer approach to find element in sorted array by repeatedly dividing search space in half.",
      visualization: "Visualize as searching in a phone book - open middle, discard half, repeat until found.",
      whenToUse: "Sorted arrays, finding boundaries, search in rotated array, finding peak elements",
      timeComplexity: "O(log n)",
      spaceComplexity: "O(1)",
      example: "Searching for element 7 in [1,2,3,4,5,6,7,8,9] - check middle, eliminate half each time",
      variants: ["Lower bound", "Upper bound", "Binary search on answer", "Search in rotated array"]
    },
    { 
      id: "ARR-6", 
      name: "Dutch National Flag Algorithm", 
      category: "Array", 
      difficulty: "Medium",
      concept: "Sort array with three distinct values (like 0,1,2) in single pass using three pointers.",
      visualization: "Three pointers: low for 0s, mid for current, high for 2s. Swap elements to place 0s at start, 2s at end.",
      whenToUse: "Sorting with 3 distinct values, partition problems, segregate 0s and 1s",
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      example: "Sort [2,0,2,1,1,0] → [0,0,1,1,2,2] in one pass",
      variants: ["Segregate 0s and 1s", "Segregate negative and positive", "Partition based on pivot"]
    }
  ];

  // Searching Algorithms
  const searchingConcepts = [
    { 
      id: "SEARCH-1", 
      name: "Linear Search", 
      category: "Searching", 
      difficulty: "Easy",
      concept: "Sequentially check each element until target is found or end is reached.",
      visualization: "Scanning through a list one by one, like looking at each page in a book sequentially.",
      whenToUse: "Unsorted arrays, small datasets, when data structure doesn't support random access",
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      example: "Finding 'apple' in ['banana','orange','apple','grape'] - check each until found",
      variants: ["Sentinel linear search", "Ordered linear search"]
    },
    { 
      id: "SEARCH-2", 
      name: "Binary Search", 
      category: "Searching", 
      difficulty: "Easy",
      concept: "Divide sorted array into halves, eliminate half based on comparison with middle element.",
      visualization: "Think of guessing number between 1-100 - always guess middle and eliminate half the numbers.",
      whenToUse: "Sorted arrays, finding boundaries, search in monotonic functions",
      timeComplexity: "O(log n)",
      spaceComplexity: "O(1)",
      example: "Find 23 in sorted list - compare with middle, eliminate half, repeat until found",
      variants: ["Binary search tree", "Interpolation search", "Exponential search"]
    },
    { 
      id: "SEARCH-3", 
      name: "Ternary Search", 
      category: "Searching", 
      difficulty: "Medium",
      concept: "Divide array into three parts instead of two, used for finding maximum/minimum in unimodal functions.",
      visualization: "Split interval into three equal parts, compare values at two mid points to discard one part.",
      whenToUse: "Finding peak in unimodal array, optimization problems with convex functions",
      timeComplexity: "O(log₃ n)",
      spaceComplexity: "O(1)",
      example: "Find maximum in [1,2,3,4,5,4,3,2,1] - compare at 1/3 and 2/3, discard lower part",
      variants: ["Golden-section search", "Fibonacci search"]
    },
    { 
      id: "SEARCH-4", 
      name: "Exponential Search", 
      category: "Searching", 
      difficulty: "Medium",
      concept: "Find range where element might exist by exponential jumps, then binary search in that range.",
      visualization: "Jump exponentially (1,2,4,8...) until overshoot, then binary search between last two jumps.",
      whenToUse: "Infinite arrays, unbounded arrays, when size is unknown",
      timeComplexity: "O(log n)",
      spaceComplexity: "O(1)",
      example: "Search in unbounded sorted array - try index 1,2,4,8... until element found, then binary search",
      variants: ["Galloping search", "Fibonacci search"]
    }
  ];

  // Sorting Algorithms
  const sortingConcepts = [
    { 
      id: "SORT-1", 
      name: "Bubble Sort", 
      category: "Sorting", 
      difficulty: "Easy",
      concept: "Repeatedly step through list, compare adjacent elements and swap if they're in wrong order.",
      visualization: "Bubbles rising to surface - larger elements 'bubble up' to end with each pass.",
      whenToUse: "Educational purposes, small datasets, nearly sorted arrays",
      timeComplexity: "O(n²)",
      spaceComplexity: "O(1)",
      example: "[5,1,4,2,8] → first pass: [1,5,4,2,8] → [1,4,5,2,8] → [1,4,2,5,8] → [1,4,2,5,8]",
      variants: ["Cocktail shaker sort", "Odd-even sort", "Comb sort"]
    },
    { 
      id: "SORT-2", 
      name: "Selection Sort", 
      category: "Sorting", 
      difficulty: "Easy",
      concept: "Repeatedly find minimum element from unsorted part and place it at beginning.",
      visualization: "Scan entire array for smallest, put at position 0, then scan remaining for next smallest, etc.",
      whenToUse: "Small arrays, when memory write is expensive",
      timeComplexity: "O(n²)",
      spaceComplexity: "O(1)",
      example: "[64,25,12,22,11] → find 11, swap: [11,25,12,22,64] → find 12, swap: [11,12,25,22,64]",
      variants: ["Heapsort", "Bidirectional selection sort"]
    },
    { 
      id: "SORT-3", 
      name: "Insertion Sort", 
      category: "Sorting", 
      difficulty: "Easy",
      concept: "Build sorted array one element at a time by inserting each element into correct position.",
      visualization: "Like sorting playing cards - take one card, insert into correct position among already sorted cards.",
      whenToUse: "Small arrays, nearly sorted arrays, online algorithms",
      timeComplexity: "O(n²)",
      spaceComplexity: "O(1)",
      example: "[5,2,4,6,1,3] → [2,5,4,6,1,3] → [2,4,5,6,1,3] → [1,2,4,5,6,3] → [1,2,3,4,5,6]",
      variants: ["Binary insertion sort", "Shell sort"]
    },
    { 
      id: "SORT-4", 
      name: "Merge Sort", 
      category: "Sorting", 
      difficulty: "Medium",
      concept: "Divide array into halves, recursively sort each half, then merge sorted halves.",
      visualization: "Visualize as tree - split until single elements, then merge back in sorted order like merging two decks.",
      whenToUse: "Large datasets, linked lists, stable sort required, external sorting",
      timeComplexity: "O(n log n)",
      spaceComplexity: "O(n)",
      example: "[38,27,43,3,9,82,10] → split → sort halves → merge [3,9,10,27,38,43,82]",
      variants: ["Bottom-up merge sort", "In-place merge sort", "Natural merge sort"]
    },
    { 
      id: "SORT-5", 
      name: "Quick Sort", 
      category: "Sorting", 
      difficulty: "Medium",
      concept: "Pick pivot, partition array so smaller elements on left, larger on right, recursively sort partitions.",
      visualization: "Choose a 'pivot', rearrange so all less than pivot on left, greater on right, then repeat on each side.",
      whenToUse: "General purpose sorting, in-place sorting, large datasets",
      timeComplexity: "O(n log n) average, O(n²) worst",
      spaceComplexity: "O(log n)",
      example: "[3,6,8,10,1,2,1] with pivot 6 → [3,1,2,1,6,8,10] → recursively sort left and right",
      variants: ["3-way quicksort", "Randomized quicksort", "Dual pivot quicksort"]
    },
    { 
      id: "SORT-6", 
      name: "Heap Sort", 
      category: "Sorting", 
      difficulty: "Medium",
      concept: "Build max-heap, repeatedly extract maximum element and place at end, maintain heap property.",
      visualization: "Visualize as tree - build heap, repeatedly remove root (largest) and rebuild heap with remaining.",
      whenToUse: "When O(1) space needed, in-place sorting, priority queue applications",
      timeComplexity: "O(n log n)",
      spaceComplexity: "O(1)",
      example: "Build heap from array, repeatedly swap root with last element, heapify reduced heap",
      variants: ["Heapsort with min-heap", "Smoothsort", "Weak heapsort"]
    },
    { 
      id: "SORT-7", 
      name: "Counting Sort", 
      category: "Sorting", 
      difficulty: "Medium",
      concept: "Count frequency of each value, then reconstruct sorted array from counts.",
      visualization: "Tally marks for each possible value, then write values based on counts.",
      whenToUse: "Small range of integers, sorting by key, linear time sorting",
      timeComplexity: "O(n + k) where k is range of input",
      spaceComplexity: "O(k)",
      example: "[4,2,2,8,3,3,1] with range 1-8 → count frequencies → output [1,2,2,3,3,4,8]",
      variants: ["Radix sort", "Bucket sort", "Pigeonhole sort"]
    },
    { 
      id: "SORT-8", 
      name: "Radix Sort", 
      category: "Sorting", 
      difficulty: "Hard",
      concept: "Sort numbers digit by digit from least significant to most significant using stable sort.",
      visualization: "Sort by ones digit, then tens digit, then hundreds digit - like organizing numbers in filing cabinet.",
      whenToUse: "Large sets of integers, fixed-length keys, when k is large but digits are few",
      timeComplexity: "O(d × (n + k)) where d is number of digits",
      spaceComplexity: "O(n + k)",
      example: "Sort [170,45,75,90,2,24,802,66] → by ones: [170,90,2,802,24,45,75,66] → by tens → by hundreds",
      variants: ["MSD radix sort", "LSD radix sort", "Binary radix sort"]
    }
  ];

  // String Algorithms
  const stringConcepts = [
    { 
      id: "STR-1", 
      name: "String Matching (KMP)", 
      category: "String", 
      difficulty: "Hard",
      concept: "Knuth-Morris-Pratt algorithm finds pattern in text by using prefix function to avoid re-checking characters.",
      visualization: "Build LPS (Longest Prefix Suffix) array, then use it to skip characters when mismatch occurs, like a smart search that remembers previous matches.",
      whenToUse: "Pattern searching in text, plagiarism detection, DNA sequence matching",
      timeComplexity: "O(n + m) where n = text length, m = pattern length",
      spaceComplexity: "O(m)",
      example: "Find 'ABABC' in 'ABABDABABC' - KMP knows after mismatch that 'AB' is already matched",
      variants: ["Rabin-Karp", "Boyer-Moore", "Z-algorithm"]
    },
    { 
      id: "STR-2", 
      name: "Rabin-Karp Algorithm", 
      category: "String", 
      difficulty: "Medium",
      concept: "String searching using rolling hash - compute hash of pattern and compare with hash of text windows.",
      visualization: "Calculate hash value for pattern, slide window over text computing rolling hash, compare when hashes match.",
      whenToUse: "Multiple pattern search, plagiarism detection, substring search",
      timeComplexity: "O(n + m) average, O(nm) worst",
      spaceComplexity: "O(1)",
      example: "Search 'abc' in 'ababcabc' - compute hash of 'abc', slide window checking hash matches",
      variants: ["Rolling hash", "Polynomial hash", "Double hash for accuracy"]
    },
    { 
      id: "STR-3", 
      name: "Longest Palindromic Substring", 
      category: "String", 
      difficulty: "Medium",
      concept: "Find the longest substring that reads same forwards and backwards using expand around center technique.",
      visualization: "Expand from each character (odd length) and between characters (even length) to find palindromes.",
      whenToUse: "String processing, DNA analysis, text editing features",
      timeComplexity: "O(n²)",
      spaceComplexity: "O(1)",
      example: "'babad' → 'bab' or 'aba', 'cbbd' → 'bb'",
      variants: ["Manacher's algorithm (O(n))", "Palindrome checking", "Longest palindromic subsequence"]
    },
    { 
      id: "STR-4", 
      name: "Manacher's Algorithm", 
      category: "String", 
      difficulty: "Hard",
      concept: "Linear time algorithm to find all palindromic substrings using symmetry and center expansion.",
      visualization: "Track palindrome radii and use previously computed palindromes to skip expansions symmetrically.",
      whenToUse: "Finding longest palindrome in large strings, competitive programming",
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
      example: "Find all palindromes in 'abacdfgdcaba' - uses symmetry to avoid recomputation",
      variants: ["Eertree (palindromic tree)", "Palindrome automaton"]
    },
    { 
      id: "STR-5", 
      name: "Z-Algorithm", 
      category: "String", 
      difficulty: "Hard",
      concept: "Compute Z-array where Z[i] = longest substring starting at i that matches prefix of string.",
      visualization: "Z-box concept - maintain interval [l,r] that matches prefix, use it to compute subsequent Z values quickly.",
      whenToUse: "Pattern matching, string compression, finding periods in strings",
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
      example: "String 'ababa' → Z = [0,0,3,0,1] indicates where suffix matches prefix",
      variants: ["String periodicity", "Pattern matching with concatenation"]
    },
    { 
      id: "STR-6", 
      name: "Aho-Corasick Algorithm", 
      category: "String", 
      difficulty: "Hard",
      concept: "Multi-pattern matching using trie with failure links (like KMP on trie).",
      visualization: "Build trie of all patterns, add failure links to fall back on mismatch, process text once to find all patterns.",
      whenToUse: "Multiple pattern search, virus detection, content filtering",
      timeComplexity: "O(n + m + total_pattern_length)",
      spaceComplexity: "O(total_pattern_length × alphabet_size)",
      example: "Find patterns ['he','she','his','hers'] in text 'ushers' - finds all occurrences in one pass",
      variants: ["Double-array trie", "Automaton optimization"]
    },
    { 
      id: "STR-7", 
      name: "Suffix Array", 
      category: "String", 
      difficulty: "Hard",
      concept: "Sorted array of all suffixes of a string, used for efficient substring queries.",
      visualization: "Take all suffixes, sort them lexicographically, store starting indices in sorted order.",
      whenToUse: "Substring search, longest common prefix, text compression, bioinformatics",
      timeComplexity: "O(n log n) construction",
      spaceComplexity: "O(n)",
      example: "String 'banana' → suffixes: 'banana','anana','nana','ana','na','a' → sorted indices: [5,3,1,0,4,2]",
      variants: ["Suffix tree", "LCP array", "Suffix automaton"]
    },
    { 
      id: "STR-8", 
      name: "Suffix Tree", 
      category: "String", 
      difficulty: "Hard",
      concept: "Compact trie of all suffixes, enables O(m) substring search and many string operations.",
      visualization: "Tree where path from root represents a substring, leaves represent suffixes, edges compress chains.",
      whenToUse: "Advanced string processing, longest common substring, bioinformatics",
      timeComplexity: "O(n) construction (Ukkonen's algorithm)",
      spaceComplexity: "O(n)",
      example: "Build suffix tree for 'abcab' to find all occurrences of 'ab' quickly",
      variants: ["Generalized suffix tree", "Suffix automaton", "Suffix array"]
    },
    { 
      id: "STR-9", 
      name: "Longest Common Substring", 
      category: "String", 
      difficulty: "Hard",
      concept: "Find longest string that appears in all given strings using DP or suffix structures.",
      visualization: "Build DP table where dp[i][j] = length of common suffix ending at s1[i] and s2[j].",
      whenToUse: "DNA sequence comparison, plagiarism detection, version control",
      timeComplexity: "O(n × m) with DP, O(n + m) with suffix tree",
      spaceComplexity: "O(n × m) or O(n + m)",
      example: "Find LCS between 'abcde' and 'abfce' → 'abc' or 'cde'? Actually 'abc' length 3",
      variants: ["Longest common subsequence", "Shortest common supersequence"]
    },
    { 
      id: "STR-10", 
      name: "String Compression", 
      category: "String", 
      difficulty: "Medium",
      concept: "Compress string by replacing repeated characters with character and count (e.g., 'aaabbc' → 'a3b2c1').",
      visualization: "Scan string, count consecutive duplicates, build compressed version when compression reduces size.",
      whenToUse: "Data compression, encoding, RLE (Run Length Encoding)",
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
      example: "'aabcccccaaa' → 'a2b1c5a3', only compress if shorter than original",
      variants: ["Run-length encoding", "Huffman coding", "LZW compression"]
    },
    { 
      id: "STR-11", 
      name: "String Permutation / Anagram", 
      category: "String", 
      difficulty: "Easy",
      concept: "Check if two strings are permutations/anagrams by comparing character counts.",
      visualization: "Count frequency of each character in both strings, compare counts.",
      whenToUse: "Anagram checking, pattern matching with character set constraints",
      timeComplexity: "O(n)",
      spaceComplexity: "O(k) where k is alphabet size",
      example: "'listen' and 'silent' → both have same character counts: l:1,i:1,s:1,t:1,e:1,n:1",
      variants: ["Find all anagrams in string", "Group anagrams", "Valid anagram"]
    },
    { 
      id: "STR-12", 
      name: "String Rotation", 
      category: "String", 
      difficulty: "Easy",
      concept: "Check if one string is rotation of another by concatenating string with itself.",
      visualization: "If s2 is rotation of s1, then s2 must be substring of s1 + s1.",
      whenToUse: "Cyclic shifts, rotational equivalence, string matching",
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
      example: "'waterbottle' rotated → 'erbottlewat' → check by concat: 'waterbottlewaterbottle' contains 'erbottlewat'",
      variants: ["KMP for rotation check", "Lexicographically smallest rotation"]
    }
  ];

  // Graph Algorithms
  const graphConcepts = [
    { 
      id: "GRAPH-1", 
      name: "Breadth First Search (BFS)", 
      category: "Graph", 
      difficulty: "Medium",
      concept: "Explore graph level by level, visiting all neighbors before moving to next level.",
      visualization: "Like ripples in water - start from source, explore all nodes at current distance before going deeper.",
      whenToUse: "Shortest path in unweighted graph, level order traversal, finding connected components",
      timeComplexity: "O(V + E)",
      spaceComplexity: "O(V)",
      example: "Finding shortest path from A to F in a maze - explore all one-step paths first, then two-step, etc.",
      variants: ["0-1 BFS", "Bidirectional BFS", "BFS on grid"]
    },
    { 
      id: "GRAPH-2", 
      name: "Depth First Search (DFS)", 
      category: "Graph", 
      difficulty: "Medium",
      concept: "Explore as far as possible along each branch before backtracking.",
      visualization: "Like exploring a maze - go as deep as possible, when stuck, backtrack and try different path.",
      whenToUse: "Cycle detection, topological sort, maze solving, connectivity checking",
      timeComplexity: "O(V + E)",
      spaceComplexity: "O(V)",
      example: "Traverse tree in pre-order: visit node, then left subtree completely, then right subtree",
      variants: ["Iterative DFS", "DFS with colors", "Backtracking"]
    },
    { 
      id: "GRAPH-3", 
      name: "Dijkstra's Algorithm", 
      category: "Graph", 
      difficulty: "Hard",
      concept: "Find shortest paths from source to all nodes using greedy approach with priority queue.",
      visualization: "Imagine flooding water from source - water reaches nodes in order of shortest distance.",
      whenToUse: "Shortest path in weighted graphs with non-negative weights, GPS navigation",
      timeComplexity: "O(E log V) with binary heap",
      spaceComplexity: "O(V)",
      example: "Find shortest route from city A to all other cities on map with road distances",
      variants: ["A* search", "Bidirectional Dijkstra", "Dial's algorithm"]
    },
    { 
      id: "GRAPH-4", 
      name: "Bellman-Ford Algorithm", 
      category: "Graph", 
      difficulty: "Hard",
      concept: "Relax edges repeatedly to find shortest paths, can detect negative cycles.",
      visualization: "Propagate distances through graph V-1 times, each time improving estimates.",
      whenToUse: "Graphs with negative edge weights, detecting negative cycles",
      timeComplexity: "O(V × E)",
      spaceComplexity: "O(V)",
      example: "Finding cheapest flight with possible negative fares (rewards) between cities",
      variants: ["SPFA (Shortest Path Faster Algorithm)", "Moore's algorithm"]
    },
    { 
      id: "GRAPH-5", 
      name: "Floyd-Warshall Algorithm", 
      category: "Graph", 
      difficulty: "Hard",
      concept: "All-pairs shortest path using dynamic programming, considering each vertex as intermediate.",
      visualization: "Matrix of distances, iteratively improve by checking if path through vertex k is shorter.",
      whenToUse: "All-pairs shortest paths, dense graphs, transitive closure",
      timeComplexity: "O(V³)",
      spaceComplexity: "O(V²)",
      example: "Find shortest distances between all pairs of cities on a map",
      variants: ["Johnson's algorithm", "Min-plus matrix multiplication"]
    },
    { 
      id: "GRAPH-6", 
      name: "Kruskal's Algorithm", 
      category: "Graph", 
      difficulty: "Medium",
      concept: "Find minimum spanning tree by adding edges in increasing order of weight if they don't create cycle.",
      visualization: "Add cheapest edges first, skipping edges that would create loops (like building roads connecting all cities cheapest)",
      whenToUse: "Minimum spanning tree, network design problems",
      timeComplexity: "O(E log E) or O(E log V)",
      spaceComplexity: "O(E)",
      example: "Connect all computers in network with minimum cable length",
      variants: ["Prim's algorithm", "Borůvka's algorithm", "Reverse-Delete algorithm"]
    },
    { 
      id: "GRAPH-7", 
      name: "Prim's Algorithm", 
      category: "Graph", 
      difficulty: "Medium",
      concept: "Build MST by growing tree from starting vertex, always adding cheapest connecting edge.",
      visualization: "Start from one node, repeatedly add closest unconnected node to current tree.",
      whenToUse: "MST for dense graphs, network design",
      timeComplexity: "O(E log V) with binary heap",
      spaceComplexity: "O(V)",
      example: "Build power grid connecting all cities with minimum cost starting from power plant",
      variants: ["Jarník's algorithm", "DJP algorithm"]
    },
    { 
      id: "GRAPH-8", 
      name: "Topological Sort", 
      category: "Graph", 
      difficulty: "Medium",
      concept: "Linear ordering of vertices in DAG such that for every edge u→v, u comes before v.",
      visualization: "Order tasks where dependencies must be completed before dependent tasks (like course prerequisites).",
      whenToUse: "Task scheduling, dependency resolution, build systems",
      timeComplexity: "O(V + E)",
      spaceComplexity: "O(V)",
      example: "Order courses with prerequisites: if CS101 required for CS102, CS101 must come before CS102",
      variants: ["Kahn's algorithm", "DFS-based topological sort"]
    },
    { 
      id: "GRAPH-9", 
      name: "Kosaraju's Algorithm", 
      category: "Graph", 
      difficulty: "Hard",
      concept: "Find strongly connected components using two DFS passes on original and reversed graph.",
      visualization: "First pass orders nodes, second pass on reversed graph finds components where all nodes reachable from each other.",
      whenToUse: "Finding SCCs, analyzing connectivity in directed graphs",
      timeComplexity: "O(V + E)",
      spaceComplexity: "O(V)",
      example: "Find groups of web pages where each page in group links to others in group",
      variants: ["Tarjan's algorithm", "Gabow's algorithm"]
    }
  ];

  // Dynamic Programming
  const dpConcepts = [
    { 
      id: "DP-1", 
      name: "Fibonacci with Memoization", 
      category: "Dynamic Programming", 
      difficulty: "Easy",
      concept: "Store computed results in cache to avoid recomputation in recursive solution.",
      visualization: "Memoization as a notebook - write down answers as you compute them, look up if computed before.",
      whenToUse: "Recursive problems with overlapping subproblems",
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
      example: "Calculate Fibonacci(5) - compute once, reuse in multiple branches of recursion tree",
      variants: ["Memoization", "Tabulation", "Bottom-up DP"]
    },
    { 
      id: "DP-2", 
      name: "Knapsack Problem", 
      category: "Dynamic Programming", 
      difficulty: "Medium",
      concept: "Choose items to maximize value given weight constraint using optimal substructure.",
      visualization: "Table where dp[i][w] = max value using first i items with weight capacity w.",
      whenToUse: "Resource allocation, budget problems, optimization with constraints",
      timeComplexity: "O(n × W)",
      spaceComplexity: "O(W)",
      example: "Pack suitcase with items of different weights and values to maximize total value within weight limit",
      variants: ["0/1 knapsack", "Fractional knapsack", "Bounded knapsack", "Unbounded knapsack"]
    },
    { 
      id: "DP-3", 
      name: "Longest Common Subsequence", 
      category: "Dynamic Programming", 
      difficulty: "Medium",
      concept: "Find longest subsequence common to both strings using DP table.",
      visualization: "Build 2D table where dp[i][j] = LCS length for first i chars of s1 and first j chars of s2.",
      whenToUse: "Diff tools, DNA sequence alignment, text comparison",
      timeComplexity: "O(m × n)",
      spaceComplexity: "O(m × n) can be optimized to O(min(m,n))",
      example: "LCS of 'ABCDGH' and 'AEDFHR' is 'ADH' of length 3",
      variants: ["Longest common substring", "Shortest common supersequence", "Edit distance"]
    },
    { 
      id: "DP-4", 
      name: "Longest Increasing Subsequence", 
      category: "Dynamic Programming", 
      difficulty: "Medium",
      concept: "Find longest subsequence where elements are in strictly increasing order.",
      visualization: "DP array where dp[i] = length of LIS ending at index i. Track maximum.",
      whenToUse: "Sequence analysis, patience sorting, scheduling problems",
      timeComplexity: "O(n log n) with binary search",
      spaceComplexity: "O(n)",
      example: "[10,9,2,5,3,7,101,18] → LIS is [2,5,7,101] or [2,3,7,101] length 4",
      variants: ["Longest non-decreasing subsequence", "Patience sorting", "Longest alternating subsequence"]
    },
    { 
      id: "DP-5", 
      name: "Edit Distance (Levenshtein)", 
      category: "Dynamic Programming", 
      difficulty: "Hard",
      concept: "Minimum operations (insert/delete/replace) to convert one string to another.",
      visualization: "2D table where dp[i][j] = min edits to convert first i chars to first j chars.",
      whenToUse: "Spell checking, DNA sequence alignment, plagiarism detection",
      timeComplexity: "O(m × n)",
      spaceComplexity: "O(m × n)",
      example: "Convert 'kitten' to 'sitting' → 3 operations: replace k→s, replace e→i, insert g",
      variants: ["Damerau-Levenshtein", "Hamming distance", "Jaro-Winkler distance"]
    },
    { 
      id: "DP-6", 
      name: "Matrix Chain Multiplication", 
      category: "Dynamic Programming", 
      difficulty: "Hard",
      concept: "Find optimal way to parenthesize matrix multiplication to minimize scalar multiplications.",
      visualization: "DP table filling diagonally, splitting chain at different points to find minimum cost.",
      whenToUse: "Optimizing matrix operations, compiler optimization",
      timeComplexity: "O(n³)",
      spaceComplexity: "O(n²)",
      example: "Multiply A(10×30), B(30×5), C(5×60) → optimal order: (A×B)×C costs 4500 vs A×(B×C) costs 27000",
      variants: ["Optimal binary search tree", "Polygon triangulation", "Parenthesization problems"]
    },
    { 
      id: "DP-7", 
      name: "Coin Change Problem", 
      category: "Dynamic Programming", 
      difficulty: "Medium",
      concept: "Find minimum coins or number of ways to make amount using given coin denominations.",
      visualization: "DP array where dp[i] = min coins to make amount i, build up from 0 to target.",
      whenToUse: "Currency systems, cashier algorithms, change making",
      timeComplexity: "O(n × amount)",
      spaceComplexity: "O(amount)",
      example: "Make 11 cents with coins [1,2,5] → minimum 3 coins (5+5+1), 4 ways total",
      variants: ["Minimum coins", "Number of ways", "Unlimited supply vs limited supply"]
    },
    { 
      id: "DP-8", 
      name: "House Robber Problem", 
      category: "Dynamic Programming", 
      difficulty: "Medium",
      concept: "Maximum sum without selecting adjacent elements (can't rob adjacent houses).",
      visualization: "DP array where dp[i] = max loot considering first i houses, either rob current or skip.",
      whenToUse: "Resource allocation with constraints, scheduling with rest periods",
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      example: "[2,7,9,3,1] → maximum loot is 12 (rob house 2:7 and house 5:1 or house 1:2,3:9,5:1)",
      variants: ["House Robber II (circular)", "House Robber III (tree)", "Painting fence"]
    }
  ];

  // Tree Algorithms
  const treeConcepts = [
    { 
      id: "TREE-1", 
      name: "Binary Tree Traversals", 
      category: "Tree", 
      difficulty: "Easy",
      concept: "Ways to visit all nodes: Inorder (left-root-right), Preorder (root-left-right), Postorder (left-right-root).",
      visualization: "Inorder gives sorted order for BST, Preorder for copying tree, Postorder for deleting tree.",
      whenToUse: "Tree processing, serialization, expression evaluation",
      timeComplexity: "O(n)",
      spaceComplexity: "O(h) where h is height",
      example: "Tree 1→2→3 → Inorder: 2,1,3 | Preorder: 1,2,3 | Postorder: 2,3,1",
      variants: ["Level order", "Morris traversal (O(1) space)", "Iterative vs recursive"]
    },
    { 
      id: "TREE-2", 
      name: "Binary Search Tree (BST)", 
      category: "Tree", 
      difficulty: "Medium",
      concept: "Binary tree where left subtree < root < right subtree, enabling O(log n) search.",
      visualization: "Like a binary search where each node's children are smaller (left) and larger (right).",
      whenToUse: "Dynamic sets, dictionary, maintaining sorted data",
      timeComplexity: "O(log n) average for search/insert/delete",
      spaceComplexity: "O(n)",
      example: "BST operations: insert 5,3,7,1,4,6,8 yields balanced structure",
      variants: ["AVL tree", "Red-Black tree", "Splay tree", "Treap"]
    },
    { 
      id: "TREE-3", 
      name: "AVL Trees", 
      category: "Tree", 
      difficulty: "Hard",
      concept: "Self-balancing BST where height difference between left and right subtrees ≤ 1.",
      visualization: "Tree automatically rebalances after insert/delete using rotations (left, right, left-right, right-left).",
      whenToUse: "When guaranteed O(log n) operations needed, database indexes",
      timeComplexity: "O(log n) for search/insert/delete",
      spaceComplexity: "O(n)",
      example: "After insertion causing imbalance, rotate to balance - like adjusting a leaning bookshelf",
      variants: ["Red-Black trees", "Scapegoat trees", "B-trees"]
    },
    { 
      id: "TREE-4", 
      name: "Heap/Priority Queue", 
      category: "Tree", 
      difficulty: "Medium",
      concept: "Complete binary tree where parent is larger (max-heap) or smaller (min-heap) than children.",
      visualization: "Tree stored in array where element at i has children at 2i+1 and 2i+2.",
      whenToUse: "Priority queue, heap sort, Dijkstra's algorithm, median finding",
      timeComplexity: "O(log n) insert, O(1) peek, O(log n) extract",
      spaceComplexity: "O(n)",
      example: "Max-heap: [9,8,7,6,5,4,3] - root largest, each parent larger than children",
      variants: ["Min-heap", "Binary heap", "Fibonacci heap", "Binomial heap"]
    },
    { 
      id: "TREE-5", 
      name: "Trie (Prefix Tree)", 
      category: "Tree", 
      difficulty: "Medium",
      concept: "Tree structure for storing strings where each node represents a character.",
      visualization: "Root has children for each possible first character, path from root represents string prefix.",
      whenToUse: "Autocomplete, spell checker, IP routing, word games",
      timeComplexity: "O(L) where L is string length",
      spaceComplexity: "O(alphabet_size × total_chars)",
      example: "Store 'cat','car','dog' → root→c→a→t and car branches, root→d→o→g",
      variants: ["Compressed trie", "Suffix tree", "Ternary search tree"]
    },
    { 
      id: "TREE-6", 
      name: "Segment Tree", 
      category: "Tree", 
      difficulty: "Hard",
      concept: "Binary tree for range queries and updates on arrays in O(log n) time.",
      visualization: "Leaf nodes store array elements, internal nodes store combined values of their children.",
      whenToUse: "Range sum/min/max queries, range updates, competitive programming",
      timeComplexity: "O(log n) per query/update",
      spaceComplexity: "O(4n)",
      example: "Query sum from index 2 to 5 in array, segment tree traverses relevant nodes to compute sum",
      variants: ["Fenwick tree", "Lazy propagation", "Persistent segment tree"]
    },
    { 
      id: "TREE-7", 
      name: "Binary Indexed Tree (Fenwick)", 
      category: "Tree", 
      difficulty: "Hard",
      concept: "Data structure for prefix sums and updates using bit manipulation.",
      visualization: "Array-based structure where each index stores sum of range of powers of two.",
      whenToUse: "Prefix sum queries, frequency arrays, inversion count",
      timeComplexity: "O(log n) per query/update",
      spaceComplexity: "O(n)",
      example: "Update array element, get sum of first k elements efficiently",
      variants: ["2D BIT", "Range updates", "Point updates"]
    }
  ];

  // Combine all concepts
  const allConcepts = [
    ...arrayConcepts,
    ...searchingConcepts,
    ...sortingConcepts,
    ...stringConcepts,
    ...graphConcepts,
    ...dpConcepts,
    ...treeConcepts
  ];

  const categories = [
    'all', 'Array', 'Searching', 'Sorting', 'String', 'Graph', 'Dynamic Programming', 'Tree'
  ];

  const filteredConcepts = allConcepts.filter(concept => {
    const matchesCategory = activeCategory === 'all' || concept.category === activeCategory;
    const matchesSearch = concept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          concept.concept.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDifficultyBadge = (difficulty) => {
    const colors = {
      'Easy': 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300',
      'Medium': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300',
      'Hard': 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300'
    };
    return colors[difficulty] || 'bg-gray-100 text-gray-700';
  };

  const getCategoryBadge = (category) => {
    const colors = {
      'Array': 'bg-blue-100 text-blue-700 dark:bg-blue-900/50',
      'Searching': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50',
      'Sorting': 'bg-purple-100 text-purple-700 dark:bg-purple-900/50',
      'String': 'bg-teal-100 text-teal-700 dark:bg-teal-900/50',
      'Graph': 'bg-pink-100 text-pink-700 dark:bg-pink-900/50',
      'Dynamic Programming': 'bg-orange-100 text-orange-700 dark:bg-orange-900/50',
      'Tree': 'bg-green-100 text-green-700 dark:bg-green-900/50'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            DSA Visual Concepts
          </h1>
          <p className="text-[var(--text-secondary)] mt-3 text-lg">
            Understand algorithms visually - no code, just concepts and mental models
          </p>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            From basic to advanced • Learn how algorithms work through visual thinking
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="🔍 Search algorithms by name or concept..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-2 rounded-lg text-sm capitalize transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-500 text-white'
                    : 'bg-[var(--card-bg)] border border-[var(--border-color)] hover:bg-[var(--button-secondary-hover)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-7 gap-3 mb-8">
          <div className="bg-[var(--card-bg)] rounded-lg p-3 text-center border border-[var(--border-color)]">
            <div className="text-2xl font-bold text-blue-500">{arrayConcepts.length}</div>
            <div className="text-xs text-[var(--text-secondary)]">Array</div>
          </div>
          <div className="bg-[var(--card-bg)] rounded-lg p-3 text-center border border-[var(--border-color)]">
            <div className="text-2xl font-bold text-indigo-500">{searchingConcepts.length}</div>
            <div className="text-xs text-[var(--text-secondary)]">Searching</div>
          </div>
          <div className="bg-[var(--card-bg)] rounded-lg p-3 text-center border border-[var(--border-color)]">
            <div className="text-2xl font-bold text-purple-500">{sortingConcepts.length}</div>
            <div className="text-xs text-[var(--text-secondary)]">Sorting</div>
          </div>
          <div className="bg-[var(--card-bg)] rounded-lg p-3 text-center border border-[var(--border-color)]">
            <div className="text-2xl font-bold text-teal-500">{stringConcepts.length}</div>
            <div className="text-xs text-[var(--text-secondary)]">String</div>
          </div>
          <div className="bg-[var(--card-bg)] rounded-lg p-3 text-center border border-[var(--border-color)]">
            <div className="text-2xl font-bold text-pink-500">{graphConcepts.length}</div>
            <div className="text-xs text-[var(--text-secondary)]">Graph</div>
          </div>
          <div className="bg-[var(--card-bg)] rounded-lg p-3 text-center border border-[var(--border-color)]">
            <div className="text-2xl font-bold text-orange-500">{dpConcepts.length}</div>
            <div className="text-xs text-[var(--text-secondary)]">DP</div>
          </div>
          <div className="bg-[var(--card-bg)] rounded-lg p-3 text-center border border-[var(--border-color)]">
            <div className="text-2xl font-bold text-green-500">{treeConcepts.length}</div>
            <div className="text-xs text-[var(--text-secondary)]">Tree</div>
          </div>
        </div>

        {/* Concepts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredConcepts.map(concept => (
            <div
              key={concept.id}
              className="bg-[var(--card-bg)] rounded-xl border border-[var(--border-color)] overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedConcept(selectedConcept === concept.id ? null : concept.id)}
            >
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">{concept.name}</h3>
                    <div className="flex gap-2 mt-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryBadge(concept.category)}`}>
                        {concept.category}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyBadge(concept.difficulty)}`}>
                        {concept.difficulty}
                      </span>
                    </div>
                  </div>
                  <div className="text-2xl text-blue-500">
                    {selectedConcept === concept.id ? '▼' : '▶'}
                  </div>
                </div>
                
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {concept.concept}
                </p>
              </div>

              {selectedConcept === concept.id && (
                <div className="border-t border-[var(--border-color)] bg-[var(--background)] p-5 space-y-4">
                  {/* Visualization */}
                  <div className="bg-blue-500/10 rounded-lg p-4 border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-500 mb-2 flex items-center gap-2">
                      <span>🎨</span> Visualize It
                    </h4>
                    <p className="text-[var(--text-primary)] text-sm">{concept.visualization}</p>
                  </div>

                  {/* When to Use */}
                  <div className="bg-green-500/10 rounded-lg p-4 border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-500 mb-2 flex items-center gap-2">
                      <span>💡</span> When to Use
                    </h4>
                    <p className="text-[var(--text-primary)] text-sm">{concept.whenToUse}</p>
                  </div>

                  {/* Example */}
                  <div className="bg-purple-500/10 rounded-lg p-4 border-l-4 border-purple-500">
                    <h4 className="font-semibold text-purple-500 mb-2 flex items-center gap-2">
                      <span>📝</span> Example
                    </h4>
                    <p className="text-[var(--text-primary)] text-sm">{concept.example}</p>
                  </div>

                  {/* Complexity */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-orange-500/10 rounded-lg p-3 text-center">
                      <div className="text-xs text-[var(--text-secondary)] mb-1">Time Complexity</div>
                      <div className="font-mono font-bold text-orange-500">{concept.timeComplexity}</div>
                    </div>
                    <div className="bg-orange-500/10 rounded-lg p-3 text-center">
                      <div className="text-xs text-[var(--text-secondary)] mb-1">Space Complexity</div>
                      <div className="font-mono font-bold text-orange-500">{concept.spaceComplexity}</div>
                    </div>
                  </div>

                  {/* Variants */}
                  {concept.variants && (
                    <div className="bg-gray-500/10 rounded-lg p-4">
                      <h4 className="font-semibold text-[var(--text-secondary)] mb-2 text-sm">Related Variants</h4>
                      <div className="flex flex-wrap gap-2">
                        {concept.variants.map((variant, idx) => (
                          <span key={idx} className="px-2 py-1 bg-[var(--card-bg)] rounded-md text-xs text-[var(--text-secondary)]">
                            {variant}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredConcepts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-[var(--text-secondary)] text-lg">No algorithms found matching your search.</p>
            <p className="text-sm text-[var(--text-secondary)] mt-2">Try a different search term or category</p>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-12 text-center text-sm text-[var(--text-secondary)] border-t border-[var(--border-color)] pt-6">
          <p>💡 Click on any algorithm card to expand and learn more details • Each concept includes visualization, examples, and complexity analysis</p>
          <p className="mt-2">📊 Algorithms organized from basic (Easy) to advanced (Hard) for progressive learning</p>
        </div>
      </div>
    </div>
  );
};

export default DSAConcepts;