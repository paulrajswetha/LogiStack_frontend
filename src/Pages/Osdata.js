// Osdata.js
export const osQuestions = [
  {
    id: 1,
    question: "What is an operating system?",
    answer: "An operating system (OS) is a software layer that manages computer hardware and software resources. It acts as an intermediary between users and the computer hardware, enabling users to run applications, manage files, and control devices.\n\nExample: When you use a computer, the OS manages tasks like opening applications, reading data from disk, and controlling printers. If you open a word processor, the OS allocates memory and CPU time for it to run.",
    level: "basic",
    topic: "Introduction",
    tags: ["os", "basics", "definition"]
  },
  {
    id: 2,
    question: "Explain the difference between a kernel and a shell.",
    answer: "The kernel is the core component of an operating system that directly interacts with the hardware. It handles system resources like CPU, memory, and I/O devices. The shell is a user interface that allows users to interact with the OS, typically through command lines or graphical interfaces.\n\nExample: In a Unix-like OS, Bash is a popular shell. When you type a command in Bash, it sends a request to the kernel, which executes the command and returns the output to the shell.",
    level: "basic",
    topic: "OS Architecture",
    tags: ["kernel", "shell", "architecture"]
  },
  {
    id: 3,
    question: "What are the primary functions of an operating system?",
    answer: "The primary functions of an operating system include:\n\n• Process Management: It handles the creation, scheduling, and termination of processes.\n• Memory Management: It manages the allocation and deallocation of memory space as needed by processes.\n• File System Management: It organizes and manages files on storage devices, handling file creation, deletion, and access.\n• Device Management: It controls and coordinates the use of hardware devices through drivers.\n• User Interface: It provides interfaces (CLI or GUI) for users to interact with the system.\n\nExample: When you run a game, the OS manages the game's process, allocates memory for graphics and sound, manages the game's files on disk, and provides you with the interface to play.",
    level: "basic",
    topic: "Introduction",
    tags: ["functions", "os", "management"]
  },
  {
    id: 4,
    question: "Define process and thread. How are they different?",
    answer: "A process is an independent program in execution, which has its own memory space. A thread is the smallest unit of execution within a process and shares the same memory space as other threads in the same process.\n\nKey differences:\n• Processes have separate memory spaces; threads share memory within a process.\n• Context switching between threads is faster than between processes.\n• Communication between threads is easier than between processes.\n• Processes are more isolated and secure; threads can interfere with each other.\n\nExample: Consider a web browser as a process. Each tab in the browser can be a separate thread. If one tab crashes, others can continue to function because they are separate threads within the same process.",
    level: "basic",
    topic: "Process Management",
    tags: ["process", "thread", "difference"]
  },
  {
    id: 5,
    question: "What is a system call?",
    answer: "A system call is a programming interface that allows user-level processes to request services from the kernel. This is how applications communicate with the OS to perform operations like reading from or writing to a file.\n\nExample: When an application wants to read data from a file, it issues a system call like read(), which transfers control to the OS, which then accesses the file on disk and returns the data to the application.",
    level: "basic",
    topic: "OS Architecture",
    tags: ["system call", "kernel", "interface"]
  },
  {
    id: 6,
    question: "Explain the concept of a process state.",
    answer: "A process can exist in several states throughout its lifecycle:\n\n• New: The process is being created.\n• Ready: The process is ready to run but waiting for CPU time.\n• Running: The process is currently executing.\n• Waiting: The process is waiting for some event to occur (like I/O completion).\n• Terminated: The process has finished executing.\n\nExample: When you open a text editor, it starts in the 'New' state. Once it's ready for use, it transitions to 'Ready.' When you start typing, it enters the 'Running' state. If it waits for you to save a file, it goes to 'Waiting,' and after you close it, it moves to 'Terminated.'",
    level: "basic",
    topic: "Process Management",
    tags: ["process", "states", "lifecycle"]
  },
  {
    id: 7,
    question: "What is a context switch?",
    answer: "A context switch is the process of saving the state of a currently running process and loading the state of another process. This allows the CPU to switch between processes and share time effectively.\n\nExample: If you're running a music player and then switch to a web browser, the OS saves the current state of the music player (like its current position) and loads the state of the web browser, allowing you to continue where you left off.",
    level: "basic",
    topic: "Process Management",
    tags: ["context switch", "scheduling", "cpu"]
  },
  {
    id: 8,
    question: "What are the different types of operating systems?",
    answer: "Operating systems can be categorized into several types:\n\n• Batch Operating System: Executes batches of jobs without user interaction (e.g., early mainframe systems).\n• Time-Sharing Operating System: Allows multiple users to access the system simultaneously (e.g., Unix).\n• Distributed Operating System: Manages a collection of independent computers and presents them as a single coherent system (e.g., Google's Android).\n• Real-Time Operating System: Guarantees processing within a certain time frame for time-sensitive tasks (e.g., embedded systems in cars).\n\nExample: In a real-time OS, if a car's braking system needs immediate response, it uses a real-time operating system to ensure the response is within a strict time limit.",
    level: "intermediate",
    topic: "OS Types",
    tags: ["types", "batch", "real-time", "distributed"]
  },
  {
    id: 9,
    question: "Explain the concept of multitasking.",
    answer: "Multitasking is the ability of an operating system to execute multiple tasks (processes) at the same time. The OS achieves multitasking by rapidly switching between processes, giving the illusion that they are running simultaneously.\n\nExample: If you're streaming a video while downloading a file, the OS quickly switches between the video player process and the download manager process, allowing both to function without interruption.",
    level: "basic",
    topic: "Process Management",
    tags: ["multitasking", "process", "scheduling"]
  },
  {
    id: 10,
    question: "What is a boot process?",
    answer: "The boot process is the sequence of events that occurs when a computer is powered on. It includes:\n\n1. Power-On Self Test (POST): The system checks hardware components for functionality.\n2. Loading the Bootloader: The bootloader (e.g., GRUB for Linux) is loaded into memory, which is responsible for loading the operating system.\n3. Kernel Initialization: The OS kernel is loaded into memory, initializing core system components.\n4. User Login: Finally, the OS presents a login interface for user access.\n\nExample: When you turn on your computer, you might see a logo and a loading screen while it performs POST and then loads the OS before you can start using it.",
    level: "basic",
    topic: "OS Architecture",
    tags: ["boot", "startup", "bootloader"]
  },
  {
    id: 11,
    question: "How does the OS manage processes?",
    answer: "The OS manages processes using a variety of components and mechanisms:\n\n• Process Control Block (PCB): Each process has a PCB that contains information about the process, such as its state, program counter, CPU registers, memory management information, and I/O status.\n• Scheduler: The OS uses a scheduler to determine which process runs at any given time based on scheduling algorithms.\n• Inter-process Communication (IPC): The OS provides mechanisms for processes to communicate with each other (e.g., pipes, message queues, shared memory).\n\nExample: When you launch an application, the OS creates a PCB for that process and places it in the ready queue. The scheduler then allocates CPU time to the process based on its priority.",
    level: "intermediate",
    topic: "Process Management",
    tags: ["process", "pcb", "scheduler", "ipc"]
  },
  {
    id: 12,
    question: "What is process scheduling? Name some scheduling algorithms.",
    answer: "Process scheduling is the method by which the OS decides the order in which processes run. Scheduling algorithms can be classified into several types:\n\n• First-Come, First-Served (FCFS): The first process to arrive is the first to be executed.\n• Shortest Job Next (SJN): The process with the smallest execution time is selected next.\n• Round Robin (RR): Each process gets a fixed time slice in a cyclic order.\n• Priority Scheduling: Each process is assigned a priority, and the highest priority process is executed first.\n\nExample: In Round Robin scheduling, if three processes are ready to run and each is given 10 ms of CPU time, the OS will cycle through them, giving each process a turn until they complete.",
    level: "intermediate",
    topic: "Process Scheduling",
    tags: ["scheduling", "algorithms", "fcfs", "round robin"]
  },
  {
    id: 13,
    question: "What is a ready queue?",
    answer: "The ready queue is a data structure that holds all the processes that are ready to be executed but are waiting for CPU time. The scheduler selects processes from this queue to allocate CPU resources.\n\nExample: When you start multiple applications on your computer, each application's process enters the ready queue until the OS decides to allocate CPU time to it.",
    level: "basic",
    topic: "Process Scheduling",
    tags: ["ready queue", "scheduling", "queue"]
  },
  {
    id: 14,
    question: "Explain the difference between preemptive and non-preemptive scheduling.",
    answer: "• Preemptive Scheduling: The OS can interrupt a currently running process to allocate CPU time to another process. This allows for better responsiveness and fairness.\n• Non-Preemptive Scheduling: Once a process is given CPU time, it runs until it voluntarily relinquishes control (e.g., it finishes execution or performs I/O).\n\nExample: In a preemptive system, if a high-priority task becomes ready, the OS can interrupt a low-priority task to give CPU time to the high-priority one. In a non-preemptive system, the low-priority task would continue until it completes.",
    level: "intermediate",
    topic: "Process Scheduling",
    tags: ["preemptive", "non-preemptive", "scheduling"]
  },
  {
    id: 15,
    question: "What is a race condition?",
    answer: "A race condition occurs when two or more processes access shared data and try to change it simultaneously, leading to unpredictable results. It can result in data inconsistency.\n\nExample: If two threads attempt to update the same bank account balance at the same time without proper synchronization, one thread's update might overwrite the other's, resulting in an incorrect final balance.",
    level: "intermediate",
    topic: "Synchronization",
    tags: ["race condition", "concurrency", "synchronization"]
  },
  {
    id: 16,
    question: "What is deadlock? How can it be prevented?",
    answer: "A deadlock is a situation in a multi-process system where two or more processes are unable to proceed because each is waiting for resources held by the other.\n\nExample: If Process A holds Resource 1 and waits for Resource 2, while Process B holds Resource 2 and waits for Resource 1, neither can proceed, resulting in a deadlock.\n\nPrevention Methods:\n• Resource Allocation Graph: Maintain a graph to detect potential deadlocks.\n• Resource Hierarchies: Impose an order in which resources must be requested to prevent circular wait conditions.\n• Avoidance Algorithms: Use algorithms like Banker's algorithm that check resource availability before allocation.",
    level: "advanced",
    topic: "Synchronization",
    tags: ["deadlock", "prevention", "resources"]
  },
  {
    id: 17,
    question: "Explain the dining philosophers problem.",
    answer: "The dining philosophers problem is a classic synchronization problem that illustrates the challenges of resource sharing. It involves five philosophers sitting at a table, each needing two forks to eat, but there is only one fork between each pair of philosophers.\n\nExample: If each philosopher picks up one fork simultaneously, they will each hold one fork and wait indefinitely for the second one, resulting in a deadlock. To solve this, you could enforce a rule that a philosopher must pick up both forks at once or not eat at all, ensuring no philosopher can starve.",
    level: "advanced",
    topic: "Synchronization",
    tags: ["dining philosophers", "synchronization", "deadlock"]
  },
  {
    id: 18,
    question: "What are semaphores?",
    answer: "A semaphore is a synchronization primitive used to control access to a common resource by multiple processes. It acts as a signaling mechanism that can be used to prevent race conditions.\n\nExample: A binary semaphore can take two values: 0 (locked) or 1 (unlocked). If a process wants to access a resource, it must check the semaphore. If it's 1, the process can proceed and then set it to 0; otherwise, it must wait.",
    level: "intermediate",
    topic: "Synchronization",
    tags: ["semaphore", "synchronization", "mutual exclusion"]
  },
  {
    id: 19,
    question: "How do you avoid deadlock?",
    answer: "To avoid deadlock, you can implement several strategies:\n\n• Deadlock Prevention: Ensure that at least one of the necessary conditions for deadlock (mutual exclusion, hold and wait, no preemption, circular wait) cannot hold.\n• Deadlock Avoidance: Use algorithms (like the Banker's algorithm) that preemptively check whether resource requests will lead to deadlock.\n• Deadlock Detection: Periodically check for deadlocks and take action to recover (like killing a process).\n\nExample: By enforcing that all resources must be requested at once (no hold and wait), you can prevent deadlocks in many scenarios.",
    level: "advanced",
    topic: "Synchronization",
    tags: ["deadlock", "avoidance", "bankers algorithm"]
  },
  {
    id: 20,
    question: "What is the producer-consumer problem?",
    answer: "The producer-consumer problem is a classic synchronization problem where one or more producers generate data and one or more consumers process it. The challenge is to ensure that the producer does not add data when the buffer is full, and the consumer does not attempt to remove data when the buffer is empty.\n\nExample: Use semaphores to signal when the buffer has space (for the producer) and when it has data (for the consumer). The producer waits if the buffer is full, and the consumer waits if it's empty.",
    level: "intermediate",
    topic: "Synchronization",
    tags: ["producer-consumer", "synchronization", "buffer"]
  },
  {
    id: 21,
    question: "What is virtual memory?",
    answer: "Virtual memory is a memory management technique that creates an illusion of a large memory space by using both RAM and disk storage. It allows the OS to execute programs that require more memory than is physically available by swapping data between RAM and disk.\n\nExample: If a program needs 8 GB of RAM but your computer only has 4 GB, the OS uses disk space (page file or swap space) to store inactive parts of the program, allowing it to run without crashing.",
    level: "intermediate",
    topic: "Memory Management",
    tags: ["virtual memory", "swap", "memory"]
  },
  {
    id: 22,
    question: "Explain paging and segmentation.",
    answer: "• Paging: Memory is divided into fixed-size blocks called pages. When a process is loaded, its pages can be scattered throughout physical memory. The OS maintains a page table to track where each page is stored.\n• Segmentation: Memory is divided into segments of varying sizes based on logical divisions of a program (like functions or objects). Each segment has a starting address and a length.\n\nExample: In paging, if a program's memory is divided into 4 KB pages, any page can be loaded into any available physical memory location. In segmentation, a program might have a code segment, a data segment, and a stack segment, each with different sizes.",
    level: "intermediate",
    topic: "Memory Management",
    tags: ["paging", "segmentation", "memory"]
  },
  {
    id: 23,
    question: "What are page tables?",
    answer: "A page table is a data structure used by the OS to map virtual addresses to physical addresses. Each process has its own page table that the CPU references to determine where to find data in physical memory.\n\nExample: When a program accesses a memory address, the CPU checks the page table to find out which physical page corresponds to that virtual address and retrieves the data accordingly.",
    level: "intermediate",
    topic: "Memory Management",
    tags: ["page table", "virtual memory", "address mapping"]
  },
  {
    id: 24,
    question: "How does the OS manage memory allocation?",
    answer: "The OS manages memory allocation using several techniques, including:\n\n• Fixed Partitioning: Divides memory into fixed-sized partitions.\n• Dynamic Partitioning: Allocates memory blocks of varying sizes based on process requirements.\n• Buddy System: Memory is split into blocks of sizes that are powers of two, allowing efficient merging and splitting of free blocks.\n\nExample: In dynamic partitioning, if a process needs 20 MB, the OS finds a suitable free block of memory and allocates it, leaving the rest available for other processes.",
    level: "intermediate",
    topic: "Memory Management",
    tags: ["memory allocation", "partitioning", "buddy system"]
  },
  {
    id: 25,
    question: "What is thrashing?",
    answer: "Thrashing occurs when a system spends more time swapping pages in and out of memory than executing processes. This typically happens when there's insufficient physical memory available for the running processes.\n\nExample: If a computer runs too many applications that exceed its memory capacity, it may continuously swap pages, causing a drastic slowdown and making it unresponsive.",
    level: "advanced",
    topic: "Memory Management",
    tags: ["thrashing", "swap", "performance"]
  },
  {
    id: 26,
    question: "What is a memory leak?",
    answer: "A memory leak happens when a program allocates memory but fails to release it back to the system after it's no longer needed. Over time, this can consume all available memory, leading to performance degradation or crashes.\n\nExample: If a program allocates memory for data but does not free it when the data is no longer needed, the allocated memory remains occupied even if the program is finished using it.",
    level: "intermediate",
    topic: "Memory Management",
    tags: ["memory leak", "allocation", "deallocation"]
  },
  {
    id: 27,
    question: "Explain the concept of a swap space.",
    answer: "Swap space is a portion of the hard drive that the OS uses as additional virtual memory. When RAM is full, the OS moves inactive pages from RAM to swap space, freeing up RAM for active processes.\n\nExample: When a computer runs multiple applications and starts using up RAM, the OS will swap less frequently accessed pages to disk, allowing more active pages to remain in fast-access RAM.",
    level: "intermediate",
    topic: "Memory Management",
    tags: ["swap space", "virtual memory", "paging"]
  },
  {
    id: 28,
    question: "What are the advantages of virtual memory?",
    answer: "• Larger Address Space: Programs can use more memory than is physically available.\n• Isolation: Each process operates in its own virtual address space, improving security and stability.\n• Efficient Memory Use: The OS can manage memory more effectively by swapping inactive pages to disk.\n\nExample: A large video editing software can run on a computer with limited RAM because virtual memory allows it to use disk space for additional memory needs.",
    level: "intermediate",
    topic: "Memory Management",
    tags: ["virtual memory", "advantages", "memory"]
  },
  {
    id: 29,
    question: "What is the difference between a stack and a heap?",
    answer: "• Stack: A stack is a region of memory that stores temporary variables created by functions (local variables and function call information). It operates on a Last In, First Out (LIFO) basis.\n• Heap: The heap is a region of memory used for dynamic memory allocation, where variables can be allocated and freed at any time during the program's execution.\n\nExample: In a function, local variables are stored on the stack. If you use malloc() in C to allocate memory, that memory is allocated from the heap.",
    level: "basic",
    topic: "Memory Management",
    tags: ["stack", "heap", "memory"]
  },
  {
    id: 30,
    question: "How is memory fragmentation handled?",
    answer: "Memory fragmentation occurs when free memory is split into small blocks over time, making it difficult to allocate large contiguous blocks. The OS can handle fragmentation through:\n\n• Compaction: Rearranging memory contents to eliminate fragmentation.\n• Segmentation: Allowing for different segments of varying sizes, which can reduce fragmentation.\n\nExample: If a program frees up several small memory blocks, compaction would move those blocks together to create a larger free block.",
    level: "advanced",
    topic: "Memory Management",
    tags: ["fragmentation", "compaction", "memory"]
  },
  {
    id: 31,
    question: "What is a file system?",
    answer: "A file system is a method and data structure that an operating system uses to manage files on a storage device. It provides the means to create, store, retrieve, and organize files and directories.\n\nExample: Common file systems include NTFS (used by Windows), ext4 (used by Linux), and HFS+ (used by macOS).",
    level: "basic",
    topic: "File Systems",
    tags: ["file system", "storage", "organization"]
  },
  {
    id: 32,
    question: "Explain the difference between a file and a directory.",
    answer: "• File: A file is a collection of data or information stored on a disk. It has a name and can be of various types (text, image, executable, etc.).\n• Directory: A directory (or folder) is a container that holds files and other directories. It helps organize files within a file system.\n\nExample: In your Documents folder, you might have a directory called 'Projects' that contains various project files.",
    level: "basic",
    topic: "File Systems",
    tags: ["file", "directory", "folder"]
  },
  {
    id: 33,
    question: "What are file permissions?",
    answer: "File permissions determine who can read, write, or execute a file. They are crucial for maintaining security in a multi-user environment.\n\nExample: In Linux, file permissions are represented as rwx (read, write, execute) for the owner, group, and others. A file with permissions rwxr-xr-- means the owner can read, write, and execute; the group can read and execute; and others can only read.",
    level: "basic",
    topic: "File Systems",
    tags: ["permissions", "security", "linux"]
  },
  {
    id: 34,
    question: "How does the OS manage file storage?",
    answer: "The OS manages file storage using a file system that organizes data into files and directories. It keeps track of where files are stored on disk and maintains metadata (like file size, permissions, and timestamps).\n\nExample: When you save a document, the OS determines where to write the data on the disk and updates the file system to reflect the new file's location and attributes.",
    level: "intermediate",
    topic: "File Systems",
    tags: ["file storage", "metadata", "organization"]
  },
  {
    id: 35,
    question: "What is a file descriptor?",
    answer: "A file descriptor is an integer that uniquely identifies an open file in a process. It acts as a handle through which the program can interact with the file.\n\nExample: In a Unix-like system, when a file is opened using open(), it returns a file descriptor that can be used in subsequent operations like read() or write().",
    level: "intermediate",
    topic: "File Systems",
    tags: ["file descriptor", "handle", "io"]
  },
  {
    id: 36,
    question: "Explain the concepts of inode and block.",
    answer: "• Inode: An inode is a data structure that stores information about a file (such as its size, owner, and location on disk) but not its name or content. Each file has a unique inode number.\n• Block: A block is the smallest unit of data that the file system can read or write to the disk. Files are stored in one or more blocks.\n\nExample: If a file has an inode with metadata and its data is spread across three blocks on disk, the OS uses the inode to locate those blocks when accessing the file.",
    level: "advanced",
    topic: "File Systems",
    tags: ["inode", "block", "metadata"]
  },
  {
    id: 37,
    question: "What is journaling in file systems?",
    answer: "Journaling is a technique used in some file systems to maintain integrity by keeping a log (journal) of changes that will be made to the file system. In case of a crash, the system can use this log to recover to a consistent state.\n\nExample: If a system crashes during a file write operation, the journal allows the OS to replay or undo operations to restore the file system to its last known good state.",
    level: "advanced",
    topic: "File Systems",
    tags: ["journaling", "integrity", "recovery"]
  },
  {
    id: 38,
    question: "What are the different types of file systems (e.g., NTFS, FAT32, ext4)?",
    answer: "• NTFS (New Technology File System): Used by Windows, supports large files and advanced features like file permissions and encryption.\n• FAT32 (File Allocation Table 32): An older file system used for compatibility with various devices; has a maximum file size of 4 GB.\n• ext4 (Fourth Extended File System): Commonly used in Linux, supports large file sizes and has better performance and reliability compared to its predecessors.\n\nExample: If you format a USB drive in FAT32, it can be used on both Windows and macOS, but it cannot store files larger than 4 GB.",
    level: "basic",
    topic: "File Systems",
    tags: ["ntfs", "fat32", "ext4", "filesystem types"]
  },
  {
    id: 39,
    question: "How does the OS handle file system errors?",
    answer: "The OS handles file system errors using various methods:\n\n• Error Checking: File systems include checksums or other mechanisms to detect corruption.\n• Recovery Tools: The OS provides utilities (like fsck in Linux) to scan and repair file system errors.\n• Backups: Regular backups help restore data in case of corruption or failure.\n\nExample: If a user reports a corrupted file, the OS can run a file system check to locate and attempt to fix any errors on the disk.",
    level: "intermediate",
    topic: "File Systems",
    tags: ["error handling", "recovery", "fsck"]
  },
  {
    id: 40,
    question: "What is RAID, and what are its levels?",
    answer: "RAID (Redundant Array of Independent Disks) is a data storage technology that combines multiple disk drives into a single unit for redundancy and performance. Common RAID levels include:\n\n• RAID 0: Data is striped across multiple disks for performance but offers no redundancy.\n• RAID 1: Data is mirrored on two disks for redundancy.\n• RAID 5: Data is striped with parity information, allowing for recovery from a single disk failure.\n• RAID 6: Similar to RAID 5 but can tolerate two disk failures.\n\nExample: A RAID 5 setup can withstand one disk failure without losing data, making it popular for servers that require reliability.",
    level: "advanced",
    topic: "Storage",
    tags: ["raid", "redundancy", "storage"]
  },
  {
    id: 41,
    question: "What is an interrupt?",
    answer: "An interrupt is a signal sent to the processor that temporarily halts the current execution process to allow the OS to respond to an event, such as input from a keyboard or a mouse click. After handling the interrupt, the processor resumes the previous task.\n\nExample: When you press a key on the keyboard, an interrupt is generated, signaling the OS to read the keystroke and process it.",
    level: "intermediate",
    topic: "Hardware Interaction",
    tags: ["interrupt", "hardware", "event"]
  },
  {
    id: 42,
    question: "What is a system bus?",
    answer: "A system bus is a communication pathway that connects different components of a computer, including the CPU, memory, and I/O devices. It allows data to be transferred between these components.\n\nExample: The address bus carries memory addresses from the CPU to other components, while the data bus carries the actual data being transferred.",
    level: "intermediate",
    topic: "Hardware Interaction",
    tags: ["bus", "communication", "hardware"]
  },
  {
    id: 43,
    question: "Explain the difference between symmetric and asymmetric multiprocessing.",
    answer: "• Symmetric Multiprocessing (SMP): All processors have equal access to memory and I/O, and they share the same operating system. They can work on different tasks simultaneously, which enhances performance.\n• Asymmetric Multiprocessing (AMP): Each processor is assigned specific tasks, and they may have their own operating system. One processor may control the system, while others handle dedicated tasks.\n\nExample: SMP is often used in modern multi-core processors, while AMP may be found in embedded systems where specific processors are designated for specific functions.",
    level: "advanced",
    topic: "OS Architecture",
    tags: ["smp", "amp", "multiprocessing"]
  },
  {
    id: 44,
    question: "What is the difference between a hard link and a soft link (symbolic link)?",
    answer: "• Hard Link: A hard link is a direct reference to a file's inode on disk. Multiple hard links to the same file point to the same data on disk. If you delete one hard link, the file still exists as long as another hard link remains.\n• Soft Link (Symbolic Link): A soft link is a reference to a file by its pathname. If the original file is deleted, the symbolic link becomes broken and points to a non-existent file.\n\nExample: In Linux, you can create a hard link using the ln command and a soft link using the ln -s command.",
    level: "intermediate",
    topic: "File Systems",
    tags: ["hard link", "soft link", "symbolic link"]
  },
  {
    id: 45,
    question: "What is a device driver?",
    answer: "A device driver is specialized software that allows the operating system to communicate with hardware devices. It provides the necessary interface for the OS to send commands and receive data from the hardware.\n\nExample: A printer driver translates print commands from the OS into a format the printer understands, allowing you to print documents.",
    level: "basic",
    topic: "Hardware Interaction",
    tags: ["device driver", "hardware", "interface"]
  },
  {
    id: 46,
    question: "What is the role of the bootloader?",
    answer: "The bootloader is a small program that initializes the operating system when a computer is powered on. It is responsible for loading the kernel into memory and starting the OS.\n\nExample: GRUB (Grand Unified Bootloader) is a common bootloader for Linux systems. It presents a menu for selecting which operating system to boot if multiple are installed.",
    level: "basic",
    topic: "OS Architecture",
    tags: ["bootloader", "boot", "grub"]
  },
  {
    id: 47,
    question: "What is a kernel module?",
    answer: "A kernel module is a piece of code that can be loaded and unloaded into the kernel at runtime. It allows the OS to extend its capabilities without requiring a reboot.\n\nExample: Device drivers are often implemented as kernel modules. When you plug in a new device, the corresponding driver can be loaded as a module.",
    level: "advanced",
    topic: "OS Architecture",
    tags: ["kernel module", "driver", "runtime"]
  },
  {
    id: 48,
    question: "What are the different types of system calls?",
    answer: "System calls can be categorized into several types:\n\n• Process Control: fork(), exec(), exit(), etc. (manage processes)\n• File Management: open(), read(), write(), close(), etc. (manage files)\n• Device Management: ioctl(), read(), write() (interact with devices)\n• Information Maintenance: getpid(), alarm(), etc. (retrieve system information)\n\nExample: When a program needs to read a file, it uses the open() system call to open the file and obtain a file descriptor.",
    level: "intermediate",
    topic: "OS Architecture",
    tags: ["system calls", "types", "interface"]
  },
  {
    id: 49,
    question: "What is an abstraction layer in an OS?",
    answer: "An abstraction layer in an operating system provides a simplified interface that hides complex details of hardware and system resources from users and applications. It allows developers to write code without needing to understand the underlying hardware specifics.\n\nExample: The file system abstraction allows users to interact with files using commands like open, read, and write, without needing to know how these operations are implemented at the hardware level.",
    level: "intermediate",
    topic: "OS Architecture",
    tags: ["abstraction", "interface", "hardware"]
  },
  {
    id: 50,
    question: "Explain the concept of a critical section.",
    answer: "A critical section is a segment of code that accesses shared resources (like variables or data structures) that must not be accessed by more than one process or thread at the same time. Proper synchronization is required to prevent race conditions.\n\nExample: If two threads try to update a shared bank account balance simultaneously, they should use a lock or semaphore to ensure that only one thread can modify the balance at a time.",
    level: "intermediate",
    topic: "Synchronization",
    tags: ["critical section", "synchronization", "mutual exclusion"]
  },
  {
    id: 51,
    question: "What is a mutex?",
    answer: "A mutex (mutual exclusion) is a synchronization primitive that provides exclusive access to a shared resource for a single thread at a time. It prevents race conditions by locking the resource when one thread is using it.\n\nExample: When a thread wants to enter a critical section, it must first acquire the mutex. If the mutex is already locked by another thread, the requesting thread must wait until it is released.",
    level: "intermediate",
    topic: "Synchronization",
    tags: ["mutex", "synchronization", "lock"]
  },
  {
    id: 52,
    question: "What is livelock?",
    answer: "A livelock is a situation where two or more processes continuously change their state in response to each other without making any progress. Unlike a deadlock, the processes are active but not productive.\n\nExample: If two processes are trying to access a shared resource and continuously back off and retry due to each other's actions, they remain in a state of livelock without completing their tasks.",
    level: "advanced",
    topic: "Synchronization",
    tags: ["livelock", "deadlock", "concurrency"]
  },
  {
    id: 53,
    question: "What is starvation?",
    answer: "Starvation occurs when a process is perpetually denied the resources it needs to proceed because other processes are continually being given preference. This can happen in systems with priority scheduling.\n\nExample: If a high-priority process is always running and consuming CPU time, a low-priority process may never get the chance to execute, resulting in starvation.",
    level: "intermediate",
    topic: "Synchronization",
    tags: ["starvation", "scheduling", "priority"]
  },
  {
    id: 54,
    question: "What is an atomic operation?",
    answer: "An atomic operation is an indivisible operation that completes in a single step relative to other operations. It is crucial for maintaining data integrity in concurrent programming.\n\nExample: If a thread updates a shared counter, using an atomic operation ensures that the counter cannot be modified by another thread simultaneously, preventing inconsistencies.",
    level: "intermediate",
    topic: "Synchronization",
    tags: ["atomic", "concurrency", "integrity"]
  },
  {
    id: 55,
    question: "What is a file allocation table (FAT)?",
    answer: "The File Allocation Table (FAT) is a file system structure that keeps track of which disk blocks are used for which files. It provides a way for the operating system to manage space on disk and locate file data.\n\nExample: In FAT32, the FAT itself is an array that contains an entry for each block on the disk, indicating whether it is free or the next block in a file.",
    level: "intermediate",
    topic: "File Systems",
    tags: ["fat", "allocation", "filesystem"]
  },
  {
    id: 56,
    question: "What are the key differences between threads and processes?",
    answer: "• Processes: Independent execution units with their own memory space. Communication between processes requires inter-process communication (IPC).\n• Threads: Lightweight execution units within a process that share the same memory space. They can communicate more easily since they share data.\n\nExample: In a web server, each request may be handled by a separate thread within a single process, allowing for efficient handling of multiple requests concurrently.",
    level: "intermediate",
    topic: "Process Management",
    tags: ["threads", "processes", "difference"]
  },
  {
    id: 57,
    question: "What is the difference between a monolithic kernel and a microkernel?",
    answer: "• Monolithic Kernel: This type of kernel includes all operating system services (like file system management, device drivers, and memory management) in one large block of code running in a single address space. It can provide high performance due to fewer context switches.\n• Microkernel: A microkernel has a minimal core, only including essential functions like communication and basic scheduling. Other services run in user space, allowing for greater modularity and flexibility.\n\nExample: Linux uses a monolithic kernel, while the Mach kernel is an example of a microkernel architecture.",
    level: "advanced",
    topic: "OS Architecture",
    tags: ["monolithic", "microkernel", "architecture"]
  },
  {
    id: 58,
    question: "What are the advantages of using a microkernel?",
    answer: "• Modularity: Easier to maintain and update, as services can be modified independently.\n• Fault Isolation: A failure in one service does not crash the entire system.\n• Portability: The core functionality can be more easily adapted to different architectures.\n\nExample: In a microkernel system, if a device driver crashes, the microkernel can continue to run, allowing other services to operate without interruption.",
    level: "advanced",
    topic: "OS Architecture",
    tags: ["microkernel", "advantages", "modularity"]
  },
  {
    id: 59,
    question: "What is the role of the shell in an operating system?",
    answer: "The shell is a command-line interface that allows users to interact with the operating system by entering commands. It interprets user commands and communicates with the OS to execute them.\n\nExample: In Unix-like systems, the bash shell allows users to run commands like ls to list files or cp to copy files.",
    level: "basic",
    topic: "OS Architecture",
    tags: ["shell", "cli", "interface"]
  },
  {
    id: 60,
    question: "What is cooperative multitasking?",
    answer: "Cooperative multitasking is a type of multitasking where each process is responsible for yielding control back to the OS. If a process does not yield, it can monopolize the CPU and cause the system to become unresponsive.\n\nExample: Older versions of Windows (like Windows 3.x) used cooperative multitasking, meaning that applications had to voluntarily give up control.",
    level: "intermediate",
    topic: "Process Management",
    tags: ["cooperative", "multitasking", "scheduling"]
  },
  {
    id: 61,
    question: "What is preemptive multitasking?",
    answer: "Preemptive multitasking allows the operating system to forcibly take control of the CPU from a running process and allocate it to another process. This ensures that no single process can monopolize CPU time.\n\nExample: Modern operating systems like Windows, Linux, and macOS use preemptive multitasking, allowing the OS to manage process scheduling and responsiveness.",
    level: "intermediate",
    topic: "Process Management",
    tags: ["preemptive", "multitasking", "scheduling"]
  },
  {
    id: 62,
    question: "Explain the purpose of a process scheduler.",
    answer: "The process scheduler is responsible for deciding which processes or threads run at any given time. It manages the ready queue and selects processes based on scheduling algorithms to optimize CPU usage and responsiveness.\n\nExample: The scheduler may prioritize time-sensitive tasks over background tasks, ensuring that important operations (like user interface updates) are responsive.",
    level: "intermediate",
    topic: "Process Scheduling",
    tags: ["scheduler", "scheduling", "cpu"]
  },
  {
    id: 63,
    question: "What is a watchdog timer?",
    answer: "A watchdog timer is a hardware timer that monitors system operation. If the system fails to reset the timer within a specified time, it indicates a failure, and the watchdog can trigger a system reset or an alert.\n\nExample: In embedded systems, a watchdog timer can help recover from software hangs by automatically restarting the system if it becomes unresponsive.",
    level: "advanced",
    topic: "Hardware Interaction",
    tags: ["watchdog", "timer", "monitoring"]
  },
  {
    id: 64,
    question: "What is a file system hierarchy?",
    answer: "The file system hierarchy is the structured organization of files and directories within a file system. It often starts from a root directory and branches into subdirectories, organizing files logically.\n\nExample: In a Linux system, the file system hierarchy starts at /, with directories like /home for user files, /etc for configuration files, and /usr for user programs.",
    level: "basic",
    topic: "File Systems",
    tags: ["hierarchy", "structure", "directories"]
  },
  {
    id: 65,
    question: "What is inter-process communication (IPC)?",
    answer: "Inter-process communication (IPC) refers to mechanisms that allow processes to communicate and synchronize their actions. IPC is crucial for collaborative tasks among multiple processes.\n\nExample: Common IPC methods include pipes, message queues, shared memory, and sockets, enabling data exchange between processes running on the same or different machines.",
    level: "intermediate",
    topic: "Process Management",
    tags: ["ipc", "communication", "synchronization"]
  },
  {
    id: 66,
    question: "What is a kernel space and user space?",
    answer: "• Kernel Space: The memory area where the kernel operates and has full access to the system's hardware. It runs at a higher privilege level, allowing it to manage resources and perform critical tasks.\n• User Space: The memory area where user applications run, with limited access to hardware resources. This separation provides security and stability, preventing user applications from crashing the system.\n\nExample: When a user application makes a system call, it transitions from user space to kernel space to request services from the OS.",
    level: "intermediate",
    topic: "OS Architecture",
    tags: ["kernel space", "user space", "memory"]
  },
  {
    id: 67,
    question: "What is a zombie process?",
    answer: "A zombie process is a process that has completed execution but still has an entry in the process table. It remains in this state until its parent process reads its exit status.\n\nExample: If a child process finishes but the parent does not call wait(), the child process becomes a zombie, consuming a process table entry until the parent retrieves the exit status.",
    level: "intermediate",
    topic: "Process Management",
    tags: ["zombie", "process", "exit"]
  },
  {
    id: 68,
    question: "What is a daemon process?",
    answer: "A daemon process is a background process that runs independently of user control, often providing system services or handling tasks like scheduling, logging, or network services.\n\nExample: In Unix-like systems, the httpd daemon serves web pages, continuously running in the background to handle incoming web requests.",
    level: "intermediate",
    topic: "Process Management",
    tags: ["daemon", "background", "service"]
  },
  {
    id: 69,
    question: "What is process termination?",
    answer: "Process termination is the process of ending a running process. This can happen voluntarily (when a process completes its task) or involuntarily (due to an error or a signal from another process).\n\nExample: When a user closes an application, the OS terminates the associated process, releasing its resources.",
    level: "basic",
    topic: "Process Management",
    tags: ["termination", "process", "exit"]
  },
  {
    id: 70,
    question: "What is primary memory?",
    answer: "Primary memory, also known as main memory or RAM (Random Access Memory), is the part of a computer's memory that is directly accessible by the CPU. It stores data and instructions that are currently being used by running programs. Primary memory is volatile, meaning it loses its contents when the power is turned off.\n\nExample: When you open a document in a text editor, the document is loaded into RAM for quick access by the CPU.",
    level: "basic",
    topic: "Memory Management",
    tags: ["ram", "primary memory", "volatile"]
  },
  {
    id: 71,
    question: "What is secondary memory?",
    answer: "Secondary memory refers to non-volatile storage that retains data even when the computer is turned off. It is used for long-term data storage and includes devices like hard drives, SSDs, CDs, and USB drives.\n\nExample: Your operating system and installed applications are stored on a hard drive or SSD, allowing you to access them when you power on your computer.",
    level: "basic",
    topic: "Memory Management",
    tags: ["secondary memory", "storage", "non-volatile"]
  },
  {
    id: 72,
    question: "What is a memory management unit (MMU)?",
    answer: "The memory management unit (MMU) is a hardware component responsible for translating logical addresses generated by the CPU into physical addresses in RAM. It plays a crucial role in implementing virtual memory.\n\nExample: When a program accesses a memory location, the MMU converts the logical address into a physical address using the page table, allowing the CPU to retrieve the data.",
    level: "advanced",
    topic: "Memory Management",
    tags: ["mmu", "address translation", "hardware"]
  }
];

// Generate topics list from all questions
export const topicsList = [...new Set(osQuestions.map(q => q.topic))].sort();

// Generate levels list
export const levelsList = ["basic", "intermediate", "advanced"];