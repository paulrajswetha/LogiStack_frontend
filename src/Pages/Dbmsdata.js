export const dbmsQuestions = [
  {
    id: 1,
    level: "basic",
    topic: "Normalization",
    question: "What are the different types of normalization in DBMS, and explain them?",
    answer: "There are four types of normalization in DBMS: 1NF, 2NF, 3NF, and BCNF (Boyce-Codd Normal Form).\n\n**1NF:** A relation is in First Normal Form if each cell contains only atomic values. Each attribute of a tuple should have a single value or NULL. The objective is to remove duplicate columns.\n\n**2NF:** A relation is in 2NF if it is in 1NF and no partial dependency exists between relationships.\n\n**3NF:** A relation is in Third Normal Form if it is in 2NF and no transitive dependency exists for non-prime attributes. A → B is a transitive dependency if A is not a super key and B is a non-prime attribute.\n\n**BCNF (Boyce-Codd Normal Form):** A relation is in BCNF if it is in 3NF and for all non-trivial functional dependencies A → B, A is the super key of the relation.",
    tags: ["normalization", "1NF", "2NF", "3NF", "BCNF"]
  },
  {
    id: 2,
    level: "basic",
    topic: "RDBMS",
    question: "What is RDBMS? Differentiate between RDBMS and DBMS.",
    answer: "RDBMS stands for Relational Database Management System. It is a database system that accesses data on the basis of standard fields between tables.\n\nThe primary difference between RDBMS and DBMS is that DBMS mainly stores data in the form of files, while RDBMS stores data in the form of tables.",
    tags: ["RDBMS", "DBMS", "difference"]
  },
  {
    id: 3,
    level: "basic",
    topic: "SQL Commands",
    question: "What is the difference between the DROP command, TRUNCATE command, and DELETE command?",
    answer: "**TRUNCATE and DROP** are both DDL commands used to delete database tables. Once tables are deleted, they cannot be rolled back. Indexes related to the table also get deleted when DROP or TRUNCATE is used.\n\n**DELETE** is a DML command used to delete rows or columns from the table, and the operation can be rolled back.",
    tags: ["DROP", "TRUNCATE", "DELETE", "DDL", "DML"]
  },
  {
    id: 4,
    level: "basic",
    topic: "Entity",
    question: "What is an Entity, Entity Type, and Entity Set in DBMS?",
    answer: "**Entity:** A thing that can exist independently and is distinguishable from other objects.\n\n**Entity Type:** Refers to the category to which an Entity belongs (e.g., Student, Car).\n\n**Entity Set:** A collection or set of all entities of a particular entity type at any point in time.",
    tags: ["entity", "entity type", "entity set"]
  },
  {
    id: 5,
    level: "basic",
    topic: "DBMS Advantages",
    question: "What are the advantages of DBMS over traditional File-based Systems?",
    answer: "The key advantages of DBMS over file-based systems are:\n- No unauthorized access to data\n- Easy retrieval\n- Atomicity of data (multiple operations can be grouped into a single logical entity)\n- Easy accessibility and processing of data\n- Redundancy control\n- Integrity check",
    tags: ["advantages", "file system", "DBMS"]
  },
  {
    id: 6,
    level: "basic",
    topic: "Keys",
    question: "Explain the term 'key' and its different types in DBMS.",
    answer: "A key is a set of attributes that can identify each tuple uniquely in the given database.\n\n**Super Key:** A set of attributes that can identify each tuple uniquely. It can have any number of attributes.\n\n**Candidate Key:** A set of minimal attributes that can define a tuple uniquely in a given relationship.\n\n**Primary Key:** A candidate key selected by the database designer. It should be unique and cannot have a NULL value.\n\n**Alternate Key:** Keys left unused or unimplemented while selecting the primary key.\n\n**Foreign Key:** Attribute 'X' is a foreign key to attribute 'Y' when its values depend on the values of 'Y'. The relation with 'Y' is the referenced relation; the one with 'X' is the referencing relation.\n\n**Composite Key:** When a primary key consists of more than one attribute.",
    tags: ["keys", "primary key", "foreign key", "candidate key", "super key", "composite key"]
  },
  {
    id: 7,
    level: "basic",
    topic: "SQL",
    question: "What do you mean by the term 'Join'?",
    answer: "Join is a SQL clause used to combine rows from two or more tables that share standard fields between them.",
    tags: ["join", "SQL"]
  },
  {
    id: 8,
    level: "basic",
    topic: "Subquery",
    question: "What do you mean by a correlated subquery in DBMS?",
    answer: "A subquery is also called a nested query — a query written inside another query. When a subquery is executed for each row of the outer query, it is called a correlated subquery.\n\nA one-to-one relationship is when a single table has a drawn relationship with another table having similar kinds of columns.",
    tags: ["subquery", "correlated subquery", "nested query"]
  },
  {
    id: 9,
    level: "basic",
    topic: "Integrity",
    question: "What are integrity rules in DBMS?",
    answer: "There are two major integrity rules in DBMS:\n\n**Entity Integrity:** The primary key should not have NULL values.\n\n**Referential Integrity:** A foreign key should either have a NULL value or should be the primary key of another relation.",
    tags: ["integrity", "entity integrity", "referential integrity"]
  },
  {
    id: 10,
    level: "basic",
    topic: "Normalization",
    question: "What is 'normalization', and why is it applied to data in the first place?",
    answer: "Data redundancy refers to repeating the same data in several different places. This makes deleting, inserting, and updating data difficult, and also wastes storage space.\n\nNormalization is applied to eliminate this redundant data, which solves these issues and improves database efficiency.",
    tags: ["normalization", "data redundancy"]
  },
  {
    id: 11,
    level: "basic",
    topic: "Transactions",
    question: "What do you mean by a deadlock in Database Management System?",
    answer: "A situation is said to be in a deadlock state whenever one task waits for another task to release a resource that the first task is currently holding — creating a circular wait with no progress possible.",
    tags: ["deadlock", "transactions", "concurrency"]
  },
  {
    id: 12,
    level: "basic",
    topic: "Normalization",
    question: "What is denormalization?",
    answer: "Denormalization is a database optimization technique where redundant data is intentionally introduced into a database. This redundancy helps improve performance by reducing the need for complex join operations when querying the data. By eliminating joins, denormalization can enhance functionality and speed up data retrieval.",
    tags: ["denormalization", "performance", "optimization"]
  },
  {
    id: 13,
    level: "basic",
    topic: "Recovery",
    question: "What are the checkpoints for DBMS?",
    answer: "The checkpoint method is a process that clears the system of all previous logs and saves them in a format that cannot be altered on the storage device.\n\nAfter every checkpoint, previous logs are deleted from the system and placed on the storage drive. This speeds up recovery because only logs since the last checkpoint need to be applied during recovery rather than processing the entire log history.",
    tags: ["checkpoints", "recovery", "logs"]
  },
  {
    id: 14,
    level: "basic",
    topic: "Architecture",
    question: "What is meant by the phrase 'data independence'?",
    answer: "Data independence refers to a situation where the application is independent of the storage structure. In other words, the capability to modify the schema definition at one level should not influence the schema definition at the next higher level.",
    tags: ["data independence", "schema", "architecture"]
  },
  {
    id: 15,
    level: "basic",
    topic: "Data Models",
    question: "What is an object-oriented model?",
    answer: "The object-oriented model is a programming paradigm and software design approach that organizes data and behavior into objects. Objects are instances of classes, which serve as blueprints defining the properties and methods the objects possess.\n\nIt promotes modular and reusable code, as well as concepts such as data abstraction, modularity, and separation of concerns. It is widely used in Java, C++, Python, and many other languages.",
    tags: ["object-oriented", "data model", "OOP"]
  },
  {
    id: 16,
    level: "intermediate",
    topic: "Query Processing",
    question: "In DBMS, what is meant by the term 'query decomposition'?",
    answer: "Query decomposition is the initial step in processing complex queries. A query based on distributed calculus is converted into an algebraic query based on global relations.\n\nThe primary goal is to convert a high-level query into a relational algebra query and verify correctness on both syntactical and semantic levels. Typical stages include: analysis, normalization, semantic analysis, simplification, and outer query rearrangement.",
    tags: ["query decomposition", "query processing", "relational algebra"]
  },
  {
    id: 17,
    level: "intermediate",
    topic: "Functional Dependency",
    question: "What is a functional dependency?",
    answer: "A functional dependency is a set of conditions that must be met by two attributes for a relationship to be valid. It states that if two tuples have the same values for attributes A1, A2, ..., An, then those tuples must also be identical in their values for non-key attributes B1, B2, ..., Bn.\n\nIt is denoted as X → Y, meaning X functionally determines Y. The values on the right-hand side are determined by the values on the left-hand side.",
    tags: ["functional dependency", "normalization"]
  },
  {
    id: 18,
    level: "intermediate",
    topic: "Transactions",
    question: "What is meant by the term 'Serializability' in DBMS?",
    answer: "Serializability helps determine which non-serial schedules are appropriate and will maintain database consistency within transactions. It relates to the isolation attribute of transactions and refers to a concurrency scheme where the execution of concurrent transactions equals the execution of serial transactions.",
    tags: ["serializability", "transactions", "concurrency", "isolation"]
  },
  {
    id: 19,
    level: "intermediate",
    topic: "SQL",
    question: "Can you define DML?",
    answer: "DML (Data Manipulation Language) is a non-procedural query language that allows users to access and modify data stored in a database. It includes operations such as:\n- Obtaining (retrieving) information from the database\n- Adding new data to the database\n- Removing information from the database\n- Modifying previously stored information",
    tags: ["DML", "SQL", "data manipulation"]
  },
  {
    id: 20,
    level: "intermediate",
    topic: "Integrity",
    question: "What are entity integrity constraints?",
    answer: "Entity integrity constraints stipulate that the value of the primary key cannot be null under any circumstance. This is because the primary key is employed to identify each tuple within the relation schema — without it, records cannot be uniquely and distinguishably identified. This constraint is applicable to one specific relation at a time.",
    tags: ["entity integrity", "primary key", "constraints", "NULL"]
  },
  {
    id: 21,
    level: "intermediate",
    topic: "Transactions",
    question: "What is the meaning of the term 'transaction'?",
    answer: "A transaction is a logical program execution unit that accesses and possibly modifies various data items. For every transaction, four vital properties must hold — these are called **ACID properties**:\n\n- **Atomicity:** All operations succeed or none do\n- **Consistency:** The database remains in a valid state\n- **Isolation:** Concurrent transactions don't interfere\n- **Durability:** Committed changes persist even after failures\n\nTransactions are defined with beginning and end transaction statements in languages like SQL, COBOL, C, C++, or Java.",
    tags: ["transaction", "ACID", "atomicity", "consistency", "isolation", "durability"]
  },
  {
    id: 22,
    level: "intermediate",
    topic: "Transactions",
    question: "What do you know about atomicity and aggregate levels?",
    answer: "**Atomicity** requires that either every action in a transaction is carried out or none of them are. Users don't need to worry about partially completed transactions — the DBMS rolls back any unfinished transactions automatically.\n\n**Aggregation** is a concept used in modeling a relationship between a group of entities and the types of relationships between them. It is used when it is necessary to convey a relationship between partnerships.",
    tags: ["atomicity", "aggregation", "transactions", "ACID"]
  },
  {
    id: 23,
    level: "intermediate",
    topic: "Subquery",
    question: "What do you mean when you talk about a correlated subquery?",
    answer: "Nested queries (subqueries) retrieve a collection of rows used by the parent query. A subquery may execute once for the parent query or once for each row returned by the parent.\n\nA **correlated subquery** is one where the child query is executed for each row of the parent query. If the WHERE clause of the subquery references columns from the parent subquery, the subquery is correlated. Columns from a subquery cannot be referenced elsewhere in the parent query.",
    tags: ["correlated subquery", "nested query", "subquery"]
  },
  {
    id: 24,
    level: "intermediate",
    topic: "RDBMS",
    question: "What is meant by the term 'RDBMS Kernel'?",
    answer: "The RDBMS has two essential components:\n1. **The kernel** — the database software responsible for managing the database\n2. **The data dictionary** — system-level physical storage structures used by the kernel for database management\n\nAn RDBMS functions like an operating system developed for controlling data and user access. Its essential duties are storing data, reading data, and safeguarding data. It manages memory caches, paging, locking for simultaneous resource consumption, user request scheduling, and space usage within table-space structures.",
    tags: ["RDBMS kernel", "data dictionary", "architecture"]
  },
  {
    id: 25,
    level: "intermediate",
    topic: "Triggers",
    question: "What is the meaning of 'Database Trigger'?",
    answer: "A database trigger is a PL/SQL block that automatically executes for INSERT, UPDATE, and DELETE statements made against a table. The trigger's execution can be set to occur once for the entire statement. A database trigger can also interact with and call database procedures written in PL/SQL.",
    tags: ["trigger", "PL/SQL", "database trigger"]
  },
  {
    id: 26,
    level: "intermediate",
    topic: "Procedures",
    question: "What do you know about 'Stand-Alone Procedures'?",
    answer: "Procedures not part of a package are referred to as stand-alone procedures since they are separately specified. A procedure written in an application using SQL*Forms is an example.\n\nStand-alone procedures have several drawbacks — their execution can be slower because they must be compiled while the program is still running, and they cannot be accessed for reference using Oracle tools.",
    tags: ["stand-alone procedures", "PL/SQL", "stored procedures"]
  },
  {
    id: 27,
    level: "intermediate",
    topic: "SQL",
    question: "What is SQL, and why is it considered so crucial today?",
    answer: "SQL stands for Structured Query Language, widely recognized as the essential language for data processing. It is not a complete programming language like Java or C#; instead, it is a data sublanguage used to generate and interpret database data and metadata.\n\nToday, SQL is used by every single database management system software, making it an indispensable skill.",
    tags: ["SQL", "structured query language", "database language"]
  },
  {
    id: 28,
    level: "intermediate",
    topic: "Functional Dependency",
    question: "Why are 'Functional Dependencies' not defined as equations?",
    answer: "Equations are used to represent relationships between numerical values. The concept of functional database dependency examines the existence of a determining link between attributes, regardless of whether those attributes share a numerical relationship. Therefore, functional dependencies are broader than equations.",
    tags: ["functional dependency", "equations"]
  },
  {
    id: 29,
    level: "intermediate",
    topic: "Referential Integrity",
    question: "What is meant by the phrase 'cascading update'?",
    answer: "To maintain referential integrity, the values of foreign keys in one table must correspond to the values of primary keys in another table. If a primary key value is updated, the corresponding foreign key values must also be updated immediately.\n\nA cascading update causes this change to be implemented seamlessly by the DBMS whenever it is required.",
    tags: ["cascading update", "referential integrity", "foreign key"]
  },
  {
    id: 30,
    level: "intermediate",
    topic: "Database Design",
    question: "What are the reasons behind the need for a new database design?",
    answer: "A redesigned database may be needed for two main reasons:\n\n1. **Correcting initial errors** — to fix mistakes made during the original design and improve the overall database structure.\n\n2. **Shifting requirements** — as information systems and organizations evolve together, changes in system needs require the database to be redesigned to accommodate new requirements.",
    tags: ["database design", "redesign", "requirements"]
  },
  {
    id: 31,
    level: "intermediate",
    topic: "OLAP",
    question: "What do you know about OLAP?",
    answer: "OLAP (On-line Analytical Processing) is a highly advanced reporting tool for Business Intelligence (BI). OLAP allows users to perform basic arithmetic operations such as summing, counting, and averaging, as well as other operations on groupings of data.\n\nAn OLAP report contains both measurements (the data values displayed) and dimensions (the features that make up the measures). OLAP reports are sometimes referred to as OLAP cubes, though they are not restricted to just three dimensions.",
    tags: ["OLAP", "business intelligence", "analytics"]
  },
  {
    id: 32,
    level: "advanced",
    topic: "ER Model",
    question: "Explain E-R Diagram.",
    answer: "E-R stands for Entity-Relationship model, which is a comprehensive and precise logical depiction of an organization's information. Components of an E-R Diagram include:\n- Entities\n- Non-prime attributes\n- Relationship matrices\n- Cardinalities\n\nAn E-R Diagram is a system for displaying an entity-relationship network model or conceptual data model.",
    tags: ["ER diagram", "entity relationship", "data modeling"]
  },
  {
    id: 33,
    level: "advanced",
    topic: "Constraints",
    question: "Please describe the domain constraints.",
    answer: "Domain constraints include entity integrity as well as referential integrity. The domain is composed of all possible values that might be associated with common attributes.\n\n- **Entity integrity:** No component of a primary key can have null values.\n- **Referential integrity:** Every value for a foreign key must either correspond to a primary key value or be null.",
    tags: ["domain constraints", "entity integrity", "referential integrity"]
  },
  {
    id: 34,
    level: "advanced",
    topic: "Data Warehousing",
    question: "What is data warehousing?",
    answer: "Data warehousing refers to storing data in a central area and providing users with concurrent access to that data to facilitate strategic decision-making. It is a framework managed through enterprise management tools used to handle information at scale.",
    tags: ["data warehousing", "business intelligence", "enterprise"]
  },
  {
    id: 35,
    level: "advanced",
    topic: "Database Systems",
    question: "What is 'System R'?",
    answer: "System R is a database management system developed by IBM that offers high data independence and physical database abstraction from end users. It includes features for data consistency and management such as triggered transactions, authentication, integrity assertions, and more.",
    tags: ["System R", "IBM", "database history"]
  },
  {
    id: 36,
    level: "advanced",
    topic: "Database Architecture",
    question: "Can you describe the major differences between extension and intention?",
    answer: "**Intention (Intension):** A fixed value specified during the database design process (the table schema). It is not expected to undergo significant or frequent changes.\n\n**Extension:** The actual data that exists at a particular point in time, also known as a database snapshot. It changes with every insert, update, or delete operation.",
    tags: ["extension", "intension", "schema", "database snapshot"]
  },
  {
    id: 37,
    level: "advanced",
    topic: "Architecture",
    question: "Can you describe 2-Tier architecture?",
    answer: "In DBMS, a 2-Tier architecture is a logical database architecture where the User Interface (UI) or presentation layer runs on a client computer (desktop, laptop, tablet, or phone). As a result of this architecture, the client does not have direct access to the database, which increases the database's level of protection against unauthorized use.",
    tags: ["2-tier architecture", "client-server", "architecture"]
  },
  {
    id: 38,
    level: "advanced",
    topic: "Architecture",
    question: "What are the key differences between 2-tier and 3-tier architecture?",
    answer: "**2-Tier Architecture:** The application logic is hidden in one of two places — either in the server database, the client (inside the user interface), or both.\n\n**3-Tier Architecture:** The process/application logic is buried in an intermediate (middle) layer. It functions as an independent entity separate from both the Client/User Interface and the data interface.",
    tags: ["2-tier", "3-tier", "architecture", "middleware"]
  },
  {
    id: 39,
    level: "advanced",
    topic: "NoSQL",
    question: "What is 'MongoDB'?",
    answer: "MongoDB is a non-relational, open-source database that lacks a hierarchical organizational hierarchy. Data is organized into collections, with each record represented by a single document.\n\nA document in MongoDB is a large JSON-like object that does not adhere to any particular structure or relational schema. Documents are stored in a binary-encoded format called BSON (Binary JSON).",
    tags: ["MongoDB", "NoSQL", "document database", "BSON"]
  },
  {
    id: 40,
    level: "advanced",
    topic: "Database Objects",
    question: "What is a catalog?",
    answer: "A catalog is a table containing information such as:\n- The structure of each database file\n- The simplest type of each data item\n- The storage format of each data item\n- Various constraints on the data\n\nThe information kept in the catalog is called **metadata**.",
    tags: ["catalog", "metadata", "data dictionary"]
  },
  {
    id: 41,
    level: "advanced",
    topic: "Performance",
    question: "What are Indexes?",
    answer: "Database indexes are data structures used to increase the speed of data retrieval operations on a database table. This speed increase comes at the cost of increased writes and additional storage space to maintain a copy of the indexed data.\n\nData on disc can only be stored in a single order at any time. Tables typically have a collection of non-clustered indexes that consume extra disc space but enable faster, more tailored searches based on frequently queried values.",
    tags: ["indexes", "performance", "data structures", "query optimization"]
  },
  {
    id: 42,
    level: "advanced",
    topic: "Query",
    question: "Can you explain QBE?",
    answer: "QBE (Query-by-Example) is a visual/graphical method for extracting information from a database. It is used to generate query templates and is widely used by database systems for personal computers.\n\nQBE does not require the user to have prior programming knowledge. Two features set QBE apart: queries are written using two-dimensional grammar, giving them the appearance of tables with skeleton tables to express queries.",
    tags: ["QBE", "query by example", "visual query"]
  },
  {
    id: 43,
    level: "advanced",
    topic: "Database Objects",
    question: "What are temporary tables?",
    answer: "Temporary tables are tables used only for a single session, with data kept only for the duration of the database transaction. They can also be used interchangeably with session tables.\n\nUnlike a permanent table, a temporary table doesn't start with any allocated space. Space is dynamically allocated based on the number of rows added. In Oracle, you create them using: CREATE GLOBAL TEMPORARY TABLE.",
    tags: ["temporary tables", "session tables", "Oracle"]
  },
  {
    id: 44,
    level: "advanced",
    topic: "Transactions",
    question: "What do you mean by durability in DBMS?",
    answer: "Durability ensures that once the DBMS notifies the user that a transaction has been completed successfully, the effect of that transaction should persist even if the file processing system crashes before all changes are reflected on disc.\n\nOnce a transaction has been committed, durability ensures that the data is saved in non-volatile memory and will be protected even if the system experiences an unexpected failure.",
    tags: ["durability", "ACID", "transactions", "persistence"]
  },
  {
    id: 45,
    level: "advanced",
    topic: "Procedures",
    question: "Can you explain the 'Stored Procedure'?",
    answer: "A stored procedure is a collection of SQL statements formatted as a function. These SQL statements are given a specific name and saved in the RDBMS, where they can be retrieved and executed at any time.\n\nStored procedures help encapsulate business logic, improve performance by reducing network traffic, and provide a layer of security.",
    tags: ["stored procedure", "SQL", "PL/SQL", "RDBMS"]
  },
  {
    id: 46,
    level: "advanced",
    topic: "ER Model",
    question: "What exactly do you mean when you talk about the 'E-R Model'?",
    answer: "The E-R model stands for Entity Relational Model. It is a technique for symbolizing the logical relationships between a collection of entities or real-world objects, used to build a database for every single database user.\n\nThe E-R model was conceptualized by Peter Pin-Shan Chen in the 1970s. It represents entities, their attributes, and the relationships between them in a diagrammatic form.",
    tags: ["ER model", "entity relationship", "Peter Chen", "data modeling"]
  },
  {
    id: 47,
    level: "advanced",
    topic: "Connectivity",
    question: "Can you describe ODBC?",
    answer: "ODBC (Open Database Connectivity) is a standardized interface that allows application programs to access and process SQL databases. It provides a common programming language for application programmers.\n\nTo use ODBC, you need: a driver, the server name, the database name, a user ID, and a password. ODBC is increasingly popular and essential for Internet applications.",
    tags: ["ODBC", "connectivity", "SQL", "interface"]
  }
];

export const topicsList = [...new Set(dbmsQuestions.map(q => q.topic))];
export const levelsList = ["basic", "intermediate", "advanced"];