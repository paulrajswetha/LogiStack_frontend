// CSFundamentalsTopics.jsx
import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

const CSFundamentalsTopics = () => {
  const [expandedSubject, setExpandedSubject] = useState(null);
  const [filter, setFilter] = useState('all'); // all, easy, medium, hard

  // Operating Systems Topics
  const osTopics = [
    // Easy Level
    { id: "OS-E1", name: "Introduction to Operating Systems", difficulty: "Easy", category: "OS", description: "What is OS, Functions of OS, Types of OS (Batch, Time-sharing, Distributed, Network, Real-time)" },
    { id: "OS-E2", name: "Process vs Program", difficulty: "Easy", category: "OS", description: "Process states, Process Control Block (PCB), Process creation and termination" },
    { id: "OS-E3", name: "CPU Scheduling Basics", difficulty: "Easy", category: "OS", description: "Scheduling criteria, FCFS, SJF, Round Robin, Priority Scheduling" },
    { id: "OS-E4", name: "Threads", difficulty: "Easy", category: "OS", description: "User-level vs Kernel-level threads, Multithreading models" },
    { id: "OS-E5", name: "Interprocess Communication", difficulty: "Easy", category: "OS", description: "Shared memory, Message passing, Pipes, FIFO" },
    { id: "OS-E6", name: "Deadlock Basics", difficulty: "Easy", category: "OS", description: "Deadlock definition, Necessary conditions, Resource allocation graph" },
    { id: "OS-E7", name: "Memory Management Basics", difficulty: "Easy", category: "OS", description: "Logical vs Physical address, Swapping, Contiguous allocation" },
    { id: "OS-E8", name: "File System Basics", difficulty: "Easy", category: "OS", description: "File concepts, File attributes, File operations, Directory structure" },
    
    // Medium Level
    { id: "OS-M1", name: "Advanced CPU Scheduling", difficulty: "Medium", category: "OS", description: "Multilevel queue, Multilevel feedback queue, Lottery scheduling" },
    { id: "OS-M2", name: "Process Synchronization", difficulty: "Medium", category: "OS", description: "Critical section problem, Peterson's solution, Semaphores, Mutex, Monitors" },
    { id: "OS-M3", name: "Classic Synchronization Problems", difficulty: "Medium", category: "OS", description: "Producer-Consumer, Readers-Writers, Dining Philosophers, Sleeping Barber" },
    { id: "OS-M4", name: "Deadlock Handling", difficulty: "Medium", category: "OS", description: "Deadlock prevention, Avoidance (Banker's algorithm), Detection, Recovery" },
    { id: "OS-M5", name: "Paging", difficulty: "Medium", category: "OS", description: "Paging concept, Page table, TLB, Hierarchical paging, Inverted page table" },
    { id: "OS-M6", name: "Segmentation", difficulty: "Medium", category: "OS", description: "Segmentation concept, Segmentation with paging" },
    { id: "OS-M7", name: "Virtual Memory", difficulty: "Medium", category: "OS", description: "Demand paging, Copy-on-write, Page replacement algorithms (FIFO, LRU, Optimal, Clock)" },
    { id: "OS-M8", name: "File System Implementation", difficulty: "Medium", category: "OS", description: "File allocation methods (contiguous, linked, indexed), Free space management" },
    { id: "OS-M9", name: "Disk Scheduling", difficulty: "Medium", category: "OS", description: "FCFS, SSTF, SCAN, C-SCAN, LOOK, C-LOOK algorithms" },
    { id: "OS-M10", name: "I/O Systems", difficulty: "Medium", category: "OS", description: "I/O hardware, Polling, Interrupts, DMA, I/O buffering, Spooling" },
    
    // Hard Level
    { id: "OS-H1", name: "Real-Time Operating Systems", difficulty: "Hard", category: "OS", description: "Hard vs Soft real-time, Task scheduling in RTOS, Rate Monotonic Scheduling, Earliest Deadline First" },
    { id: "OS-H2", name: "Distributed Operating Systems", difficulty: "Hard", category: "OS", description: "Distributed file systems, Distributed synchronization (Lamport's clock, Vector clocks), Distributed deadlock" },
    { id: "OS-H3", name: "Advanced Memory Management", difficulty: "Hard", category: "OS", description: "NUMA, Memory compression, Kernel memory allocation (slab allocator)" },
    { id: "OS-H4", name: "Virtualization", difficulty: "Hard", category: "OS", description: "Hypervisors (Type 1 & 2), Para-virtualization, Hardware virtualization, Containerization" },
    { id: "OS-H5", name: "Security in OS", difficulty: "Hard", category: "OS", description: "Authentication, Authorization, Access control, Security policies, SELinux" }
  ];

  // Computer Networks Topics
  const cnTopics = [
    // Easy Level
    { id: "CN-E1", name: "Introduction to Computer Networks", difficulty: "Easy", category: "CN", description: "What is network, Uses, Network criteria, Physical structures" },
    { id: "CN-E2", name: "OSI Model", difficulty: "Easy", category: "CN", description: "7 Layers, Functions of each layer, Encapsulation and decapsulation" },
    { id: "CN-E3", name: "TCP/IP Model", difficulty: "Easy", category: "CN", description: "4 Layers, Comparison with OSI model" },
    { id: "CN-E4", name: "Network Topologies", difficulty: "Easy", category: "CN", description: "Bus, Star, Ring, Mesh, Tree, Hybrid topologies" },
    { id: "CN-E5", name: "Transmission Media", difficulty: "Easy", category: "CN", description: "Guided media (twisted pair, coaxial, fiber), Unguided media (radio waves, microwaves, infrared)" },
    { id: "CN-E6", name: "IP Addressing Basics", difficulty: "Easy", category: "CN", description: "IPv4 address structure, Classes A, B, C, D, E, Private vs Public IP" },
    { id: "CN-E7", name: "Subnetting Basics", difficulty: "Easy", category: "CN", description: "Subnet mask, CIDR notation, Subnet calculation" },
    { id: "CN-E8", name: "Ethernet", difficulty: "Easy", category: "CN", description: "IEEE 802.3, CSMA/CD, Ethernet frame format" },
    { id: "CN-E9", name: "HTTP Protocol", difficulty: "Easy", category: "CN", description: "HTTP methods (GET, POST, PUT, DELETE), Status codes, Headers" },
    { id: "CN-E10", name: "DNS", difficulty: "Easy", category: "CN", description: "Domain hierarchy, DNS resolution, DNS records (A, CNAME, MX, TXT)" },
    
    // Medium Level
    { id: "CN-M1", name: "Data Link Layer Protocols", difficulty: "Medium", category: "CN", description: "Flow control (stop-and-wait, sliding window), Error control (ARQ, Go-Back-N, Selective Repeat)" },
    { id: "CN-M2", name: "Error Detection and Correction", difficulty: "Medium", category: "CN", description: "Parity check, Checksum, CRC, Hamming code" },
    { id: "CN-M3", name: "Switching Techniques", difficulty: "Medium", category: "CN", description: "Circuit switching, Packet switching, Datagram vs Virtual circuit" },
    { id: "CN-M4", name: "IP Subnetting & Supernetting", difficulty: "Medium", category: "CN", description: "VLSM, CIDR, Route aggregation, Subnet calculation problems" },
    { id: "CN-M5", name: "Routing Algorithms", difficulty: "Medium", category: "CN", description: "Distance Vector (RIP), Link State (OSPF), Dijkstra's algorithm, Bellman-Ford" },
    { id: "CN-M6", name: "TCP Protocol", difficulty: "Medium", category: "CN", description: "TCP header, 3-way handshake, Connection termination, Flow control (sliding window), Congestion control" },
    { id: "CN-M7", name: "UDP Protocol", difficulty: "Medium", category: "CN", description: "UDP header, Difference from TCP, Applications" },
    { id: "CN-M8", name: "IPv6", difficulty: "Medium", category: "CN", description: "IPv6 addressing, Transition from IPv4, Features" },
    { id: "CN-M9", name: "Network Address Translation", difficulty: "Medium", category: "CN", description: "NAT types (static, dynamic, PAT), Implementation, Issues" },
    { id: "CN-M10", name: "Socket Programming", difficulty: "Medium", category: "CN", description: "Client-server model, TCP sockets, UDP sockets" },
    { id: "CN-M11", name: "Network Security Basics", difficulty: "Medium", category: "CN", description: "Encryption (symmetric, asymmetric), Digital signatures, Certificates" },
    { id: "CN-M12", name: "Wireless Networks", difficulty: "Medium", category: "CN", description: "IEEE 802.11 (WiFi), Bluetooth, Cellular networks (4G, 5G)" },
    
    // Hard Level
    { id: "CN-H1", name: "Advanced Routing Protocols", difficulty: "Hard", category: "CN", description: "BGP (Border Gateway Protocol), MPLS (Multiprotocol Label Switching), Multicast routing" },
    { id: "CN-H2", name: "Congestion Control Algorithms", difficulty: "Hard", category: "CN", description: "TCP Tahoe, TCP Reno, TCP Vegas, BBR, Active Queue Management (RED, ECN)" },
    { id: "CN-H3", name: "Quality of Service", difficulty: "Hard", category: "CN", description: "QoS parameters, Traffic shaping, Leaky bucket, Token bucket, Differentiated services" },
    { id: "CN-H4", name: "SDN and Network Virtualization", difficulty: "Hard", category: "CN", description: "Software Defined Networking, OpenFlow, Network Function Virtualization" },
    { id: "CN-H5", name: "Advanced Network Security", difficulty: "Hard", category: "CN", description: "SSL/TLS, IPsec, VPN, Firewalls, IDS/IPS, DDoS mitigation" },
    { id: "CN-H6", name: "Application Layer Protocols", difficulty: "Hard", category: "CN", description: "SMTP, POP3, IMAP, FTP, SSH, SNMP, WebSockets, gRPC" }
  ];

  // DBMS Topics
  const dbmsTopics = [
    // Easy Level
    { id: "DBMS-E1", name: "Introduction to Database Systems", difficulty: "Easy", category: "DBMS", description: "DBMS vs File system, Advantages, Data abstraction, Data models" },
    { id: "DBMS-E2", name: "Database Architecture", difficulty: "Easy", category: "DBMS", description: "Three-schema architecture, Data independence, Database languages (DDL, DML, DCL)" },
    { id: "DBMS-E3", name: "Entity Relationship Model", difficulty: "Easy", category: "DBMS", description: "Entities, Attributes, Relationships, ER diagrams, Cardinality constraints" },
    { id: "DBMS-E4", name: "Relational Model", difficulty: "Easy", category: "DBMS", description: "Relations, Tuples, Attributes, Keys (Super, Candidate, Primary, Foreign)" },
    { id: "DBMS-E5", name: "SQL Basics", difficulty: "Easy", category: "DBMS", description: "SELECT, INSERT, UPDATE, DELETE, WHERE clause, ORDER BY, GROUP BY" },
    { id: "DBMS-E6", name: "Aggregate Functions", difficulty: "Easy", category: "DBMS", description: "COUNT, SUM, AVG, MAX, MIN, GROUP BY, HAVING" },
    { id: "DBMS-E7", name: "Joins", difficulty: "Easy", category: "DBMS", description: "INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN, CROSS JOIN" },
    { id: "DBMS-E8", name: "Set Operations", difficulty: "Easy", category: "DBMS", description: "UNION, INTERSECT, EXCEPT" },
    
    // Medium Level
    { id: "DBMS-M1", name: "Normalization - Part 1", difficulty: "Medium", category: "DBMS", description: "Functional dependencies, 1NF, 2NF, 3NF, BCNF" },
    { id: "DBMS-M2", name: "Normalization - Part 2", difficulty: "Medium", category: "DBMS", description: "4NF, 5NF, Multivalued dependencies, Join dependencies" },
    { id: "DBMS-M3", name: "Advanced SQL", difficulty: "Medium", category: "DBMS", description: "Subqueries, Correlated subqueries, CTE, Window functions (ROW_NUMBER, RANK, DENSE_RANK)" },
    { id: "DBMS-M4", name: "Indexing", difficulty: "Medium", category: "DBMS", description: "B-tree, B+ tree, Hash indexing, Clustered vs Non-clustered, Index selection" },
    { id: "DBMS-M5", name: "Transactions and ACID", difficulty: "Medium", category: "DBMS", description: "Transaction states, ACID properties, Concurrency control problems" },
    { id: "DBMS-M6", name: "Concurrency Control", difficulty: "Medium", category: "DBMS", description: "Lock-based protocols, Two-phase locking, Timestamp ordering, Deadlock handling" },
    { id: "DBMS-M7", name: "Recovery Systems", difficulty: "Medium", category: "DBMS", description: "Log-based recovery, Checkpoints, Shadow paging, ARIES algorithm" },
    { id: "DBMS-M8", name: "Query Processing", difficulty: "Medium", category: "DBMS", description: "Query optimization, Cost estimation, Join strategies (nested loop, sort-merge, hash join)" },
    { id: "DBMS-M9", name: "Stored Procedures and Triggers", difficulty: "Medium", category: "DBMS", description: "Procedures, Functions, Triggers, Cursors" },
    { id: "DBMS-M10", name: "Views", difficulty: "Medium", category: "DBMS", description: "View definition, Updatable views, Materialized views" },
    
    // Hard Level
    { id: "DBMS-H1", name: "Distributed Databases", difficulty: "Hard", category: "DBMS", description: "Data fragmentation, Replication, CAP theorem, BASE vs ACID, Distributed transactions (2PC, 3PC)" },
    { id: "DBMS-H2", name: "NoSQL Databases", difficulty: "Hard", category: "DBMS", description: "Document stores (MongoDB), Key-value stores (Redis), Column-family stores (Cassandra), Graph databases (Neo4j)" },
    { id: "DBMS-H3", name: "Database Tuning", difficulty: "Hard", category: "DBMS", description: "Query tuning, Index optimization, Schema optimization, Partitioning, Sharding" },
    { id: "DBMS-H4", name: "Advanced Concurrency Control", difficulty: "Hard", category: "DBMS", description: "MVCC (Multiversion Concurrency Control), Optimistic concurrency control, Snapshot isolation" },
    { id: "DBMS-H5", name: "Data Warehousing", difficulty: "Hard", category: "DBMS", description: "ETL, OLAP vs OLTP, Star schema, Snowflake schema, Data mining basics" }
  ];

  // OOPs Topics
  const oopsTopics = [
    // Easy Level
    { id: "OOP-E1", name: "Introduction to OOP", difficulty: "Easy", category: "OOP", description: "Procedural vs Object-oriented, Benefits of OOP, Classes and Objects" },
    { id: "OOP-E2", name: "Classes and Objects", difficulty: "Easy", category: "OOP", description: "Class definition, Object instantiation, Constructors, Destructors" },
    { id: "OOP-E3", name: "Encapsulation", difficulty: "Easy", category: "OOP", description: "Access modifiers (public, private, protected), Getter and Setter methods" },
    { id: "OOP-E4", name: "Abstraction", difficulty: "Easy", category: "OOP", description: "Abstract classes, Interfaces, Difference between abstraction and encapsulation" },
    { id: "OOP-E5", name: "Inheritance", difficulty: "Easy", category: "OOP", description: "Single inheritance, Multiple inheritance, Multilevel inheritance, Hierarchical inheritance" },
    { id: "OOP-E6", name: "Polymorphism - Compile Time", difficulty: "Easy", category: "OOP", description: "Function overloading, Operator overloading" },
    { id: "OOP-E7", name: "Polymorphism - Runtime", difficulty: "Easy", category: "OOP", description: "Function overriding, Virtual functions, Dynamic binding" },
    { id: "OOP-E8", name: "Constructors and Destructors", difficulty: "Easy", category: "OOP", description: "Default constructor, Parameterized constructor, Copy constructor, Constructor overloading, Destructor" },
    
    // Medium Level
    { id: "OOP-M1", name: "Static Members", difficulty: "Medium", category: "OOP", description: "Static variables, Static methods, Static class" },
    { id: "OOP-M2", name: "Inheritance Deep Dive", difficulty: "Medium", category: "OOP", description: "Diamond problem, Virtual inheritance, Constructor and destructor in inheritance" },
    { id: "OOP-M3", name: "Polymorphism Advanced", difficulty: "Medium", category: "OOP", description: "Pure virtual functions, Abstract classes, Virtual destructors" },
    { id: "OOP-M4", name: "Exception Handling", difficulty: "Medium", category: "OOP", description: "Try-catch block, Exception classes, Custom exceptions" },
    { id: "OOP-M5", name: "Design Patterns - Creational", difficulty: "Medium", category: "OOP", description: "Singleton, Factory, Abstract Factory, Builder, Prototype" },
    { id: "OOP-M6", name: "Design Patterns - Structural", difficulty: "Medium", category: "OOP", description: "Adapter, Bridge, Composite, Decorator, Facade, Proxy" },
    { id: "OOP-M7", name: "Design Patterns - Behavioral", difficulty: "Medium", category: "OOP", description: "Observer, Strategy, Command, Template, Iterator, State" },
    { id: "OOP-M8", name: "SOLID Principles", difficulty: "Medium", category: "OOP", description: "Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion" },
    { id: "OOP-M9", name: "Object Relationships", difficulty: "Medium", category: "OOP", description: "Association, Aggregation, Composition, Dependency" },
    { id: "OOP-M10", name: "Generic Programming", difficulty: "Medium", category: "OOP", description: "Templates, Generics, Type parameters, Constraints" },
    
    // Hard Level
    { id: "OOP-H1", name: "Memory Management in OOP", difficulty: "Hard", category: "OOP", description: "Heap vs Stack, Garbage collection, Reference counting, RAII (Resource Acquisition Is Initialization)" },
    { id: "OOP-H2", name: "Metaprogramming", difficulty: "Hard", category: "OOP", description: "Reflection, Template metaprogramming, Code generation" },
    { id: "OOP-H3", name: "Advanced Design Patterns", difficulty: "Hard", category: "OOP", description: "Flyweight, Visitor, Interpreter, Mediator, Memento" },
    { id: "OOP-H4", name: "Concurrency in OOP", difficulty: "Hard", category: "OOP", description: "Thread safety, Mutex, Locks, Synchronization patterns" },
    { id: "OOP-H5", name: "Architecture Patterns", difficulty: "Hard", category: "OOP", description: "MVC (Model-View-Controller), MVP, MVVM, Clean Architecture" }
  ];

  // Combine all topics
  const allTopics = [...osTopics, ...cnTopics, ...dbmsTopics, ...oopsTopics];

  const getDifficultyColor = (difficulty) => {
    switch(difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300';
      case 'medium': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300';
      case 'hard': return 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'OS': 'bg-blue-100 text-blue-700 dark:bg-blue-900/50',
      'CN': 'bg-purple-100 text-purple-700 dark:bg-purple-900/50',
      'DBMS': 'bg-green-100 text-green-700 dark:bg-green-900/50',
      'OOP': 'bg-orange-100 text-orange-700 dark:bg-orange-900/50'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  const filteredTopics = allTopics.filter(topic => {
    if (filter === 'all') return true;
    return topic.difficulty.toLowerCase() === filter;
  });

  // Group topics by category for easier navigation
  const topicsByCategory = {
    'OS': filteredTopics.filter(t => t.category === 'OS'),
    'CN': filteredTopics.filter(t => t.category === 'CN'),
    'DBMS': filteredTopics.filter(t => t.category === 'DBMS'),
    'OOP': filteredTopics.filter(t => t.category === 'OOP')
  };

  const getDifficultyCount = (category, difficulty) => {
    return topicsByCategory[category]?.filter(t => t.difficulty.toLowerCase() === difficulty).length || 0;
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Computer Science Fundamentals
          </h2>
          <p className="text-[var(--text-secondary)] mt-2">
            Comprehensive topic list for Operating Systems, Computer Networks, DBMS, and Object-Oriented Programming
          </p>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            Topics arranged from easy to hard within each subject
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-3 mb-8">
          {['all', 'easy', 'medium', 'hard'].map((difficulty) => (
            <button
              key={difficulty}
              onClick={() => setFilter(difficulty)}
              className={`px-4 py-2 rounded-lg capitalize transition-all duration-200 ${
                filter === difficulty
                  ? 'bg-blue-500 text-white'
                  : 'bg-[var(--card-bg)] text-[var(--text-primary)] border border-[var(--border-color)] hover:bg-[var(--button-secondary-hover)]'
              }`}
            >
              {difficulty === 'all' ? 'All Topics' : `${difficulty} Topics`}
            </button>
          ))}
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-[var(--card-bg)] rounded-lg p-4 border border-[var(--border-color)]">
            <div className="text-2xl font-bold text-blue-500">{osTopics.length}</div>
            <div className="text-sm text-[var(--text-secondary)]">OS Topics</div>
            <div className="flex gap-2 mt-2 text-xs">
              <span className="text-green-500">E: {getDifficultyCount('OS', 'easy')}</span>
              <span className="text-yellow-500">M: {getDifficultyCount('OS', 'medium')}</span>
              <span className="text-red-500">H: {getDifficultyCount('OS', 'hard')}</span>
            </div>
          </div>
          <div className="bg-[var(--card-bg)] rounded-lg p-4 border border-[var(--border-color)]">
            <div className="text-2xl font-bold text-purple-500">{cnTopics.length}</div>
            <div className="text-sm text-[var(--text-secondary)]">CN Topics</div>
            <div className="flex gap-2 mt-2 text-xs">
              <span className="text-green-500">E: {getDifficultyCount('CN', 'easy')}</span>
              <span className="text-yellow-500">M: {getDifficultyCount('CN', 'medium')}</span>
              <span className="text-red-500">H: {getDifficultyCount('CN', 'hard')}</span>
            </div>
          </div>
          <div className="bg-[var(--card-bg)] rounded-lg p-4 border border-[var(--border-color)]">
            <div className="text-2xl font-bold text-green-500">{dbmsTopics.length}</div>
            <div className="text-sm text-[var(--text-secondary)]">DBMS Topics</div>
            <div className="flex gap-2 mt-2 text-xs">
              <span className="text-green-500">E: {getDifficultyCount('DBMS', 'easy')}</span>
              <span className="text-yellow-500">M: {getDifficultyCount('DBMS', 'medium')}</span>
              <span className="text-red-500">H: {getDifficultyCount('DBMS', 'hard')}</span>
            </div>
          </div>
          <div className="bg-[var(--card-bg)] rounded-lg p-4 border border-[var(--border-color)]">
            <div className="text-2xl font-bold text-orange-500">{oopsTopics.length}</div>
            <div className="text-sm text-[var(--text-secondary)]">OOP Topics</div>
            <div className="flex gap-2 mt-2 text-xs">
              <span className="text-green-500">E: {getDifficultyCount('OOP', 'easy')}</span>
              <span className="text-yellow-500">M: {getDifficultyCount('OOP', 'medium')}</span>
              <span className="text-red-500">H: {getDifficultyCount('OOP', 'hard')}</span>
            </div>
          </div>
        </div>

        {/* Topics by Category */}
        {Object.entries(topicsByCategory).map(([category, topics]) => (
          topics.length > 0 && (
            <div key={category} className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-2 h-8 rounded-full ${
                  category === 'OS' ? 'bg-blue-500' :
                  category === 'CN' ? 'bg-purple-500' :
                  category === 'DBMS' ? 'bg-green-500' : 'bg-orange-500'
                }`} />
                <h3 className="text-2xl font-bold">{category}</h3>
                <span className="text-sm text-[var(--text-secondary)]">
                  ({topics.length} topics)
                </span>
              </div>
              
              <div className="bg-[var(--card-bg)] rounded-lg border border-[var(--border-color)] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[var(--background)] border-b border-[var(--border-color)]">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold">#</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">Topic</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">Difficulty</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topics.map((topic, idx) => (
                        <tr 
                          key={topic.id}
                          className="border-b border-[var(--border-color)] hover:bg-[var(--button-secondary-hover)] transition-colors cursor-pointer"
                          onClick={() => setExpandedSubject(expandedSubject === topic.id ? null : topic.id)}
                        >
                          <td className="px-6 py-3 text-sm text-[var(--text-secondary)]">{idx + 1}</td>
                          <td className="px-6 py-3">
                            <div className="font-medium">{topic.name}</div>
                          </td>
                          <td className="px-6 py-3">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(topic.difficulty)}`}>
                              {topic.difficulty}
                            </span>
                          </td>
                          <td className="px-6 py-3 text-sm text-[var(--text-secondary)] max-w-md">
                            {topic.description}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )
        ))}

        {/* Study Tips */}
        <div className="mt-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 border border-[var(--border-color)]">
          <h3 className="text-xl font-bold mb-4">📚 Study Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-green-500 text-lg">✓</span>
                <p className="text-sm text-[var(--text-secondary)]">Start with Easy topics to build foundation</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-500 text-lg">✓</span>
                <p className="text-sm text-[var(--text-secondary)]">Practice coding implementations alongside theory</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-500 text-lg">✓</span>
                <p className="text-sm text-[var(--text-secondary)]">Focus on Medium topics as they appear most in interviews</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-green-500 text-lg">✓</span>
                <p className="text-sm text-[var(--text-secondary)]">Create mind maps for each subject to connect concepts</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-500 text-lg">✓</span>
                <p className="text-sm text-[var(--text-secondary)]">Review Hard topics for advanced interview rounds</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-500 text-lg">✓</span>
                <p className="text-sm text-[var(--text-secondary)]">Practice previous year GATE/Interview questions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Tracking Note */}
        <div className="mt-6 text-center text-sm text-[var(--text-secondary)]">
          <p>📊 Click on any topic to expand details • Topics are organized progressively from easy to hard</p>
        </div>
      </div>
    </div>
  );
};

export default CSFundamentalsTopics;