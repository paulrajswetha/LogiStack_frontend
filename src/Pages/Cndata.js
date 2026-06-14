export const cnQuestions = [
  // ─── BASIC ───────────────────────────────────────────────────────────────────
  {
    id: "cn_001",
    level: "basic",
    topic: "IP Addressing",
    question: "What is an IPv4 address? What are the different classes of IPv4?",
    answer: `An IP address is a 32-bit dynamic address of a node in the network. An IPv4 address has 4 octets of 8-bit each with each number with a value up to 255.

IPv4 classes are differentiated based on the number of hosts it supports on the network. There are five types of IPv4 classes based on the first octet:

• Class A (0.0.0.0 – 127.255.255.255): Used for Large Networks
• Class B (128.0.0.0 – 191.255.255.255): Used for Medium Size Networks
• Class C (192.0.0.0 – 223.255.255.255): Used for Local Area Networks
• Class D (224.0.0.0 – 239.255.255.255): Reserved for Multicasting
• Class E (240.0.0.0 – 255.255.255.254): Reserved for Study and R&D`,
    tags: ["ipv4", "ip-classes", "addressing", "networking-basics"],
  },
  {
    id: "cn_002",
    level: "basic",
    topic: "Network Types",
    question: "Explain different types of networks.",
    answer: `Networks are classified based on their area of distribution:

• PAN (Personal Area Network): Connects devices over the range of a person. E.g., Bluetooth devices.
• LAN (Local Area Network): Privately owned network operating within a single building like a home, office, or factory.
• MAN (Metropolitan Area Network): Connects and covers the whole city. E.g., TV Cable connections.
• WAN (Wide Area Network): Spans a large geographical area, often a country or continent. The Internet is the largest WAN.
• GAN (Global Area Network): Also known as the Internet, which connects the globe using satellites.`,
    tags: ["lan", "wan", "pan", "man", "network-types"],
  },
  {
    id: "cn_003",
    level: "basic",
    topic: "Network Types",
    question: "Explain LAN (Local Area Network).",
    answer: `LANs are widely used to connect computers/laptops and consumer electronics, enabling them to share resources (e.g., printers, fax machines) and exchange information.

When LANs are used by companies or organizations, they are called enterprise networks.

There are two types of LAN:
• Wired LAN: Achieved using LAN cables.
• Wireless LAN (Wi-Fi): No wires involved. Very popular for places where installing wire is difficult.`,
    tags: ["lan", "wired", "wireless", "wi-fi", "enterprise-network"],
  },
  {
    id: "cn_004",
    level: "basic",
    topic: "VPN",
    question: "Tell me something about VPN (Virtual Private Network).",
    answer: `VPN or the Virtual Private Network is a private WAN (Wide Area Network) built on the internet.

It allows the creation of a secured tunnel (protected network) between different networks using the internet (public network). By using the VPN, a client can connect to the organization's network remotely.

Key use cases:
• Remote access for employees
• Secure data transfer between offices
• Encrypting internet traffic and disguising online identity`,
    tags: ["vpn", "security", "wan", "tunnel", "remote-access"],
  },
  {
    id: "cn_005",
    level: "basic",
    topic: "VPN",
    question: "What are the advantages of using a VPN?",
    answer: `Advantages of using VPN:

• Connects offices in different geographical locations remotely and is cheaper compared to WAN connections.
• Used for secure transactions and confidential data transfer between multiple offices.
• Keeps an organization's information secured against potential threats or intrusions using virtualization.
• Encrypts internet traffic and disguises the online identity.`,
    tags: ["vpn", "security", "encryption", "remote-access"],
  },
  {
    id: "cn_006",
    level: "basic",
    topic: "VPN",
    question: "What are the different types of VPN?",
    answer: `Types of VPN:

• Access VPN: Provides connectivity to remote mobile users and telecommuters. An alternative to dial-up or ISDN connections. Low-cost and wide range of connectivity.

• Site-to-Site VPN (Router-to-Router): Used in large companies with branches in different locations to connect networks across offices. Two sub-categories:
  - Intranet VPN: Connects remote offices using shared infrastructure with the same accessibility policies as a private WAN.
  - Extranet VPN: Uses shared infrastructure to connect suppliers, customers, partners, and other entities using dedicated connections.`,
    tags: ["vpn", "access-vpn", "site-to-site", "intranet", "extranet"],
  },
  {
    id: "cn_007",
    level: "basic",
    topic: "Network Fundamentals",
    question: "What are nodes and links?",
    answer: `Node: Any communicating device in a network is called a Node. It is the point of intersection in a network. It can send/receive data and information. Examples: computers, laptops, printers, servers, modems.

Link: A link or edge refers to the connectivity between two nodes in the network. It includes the type of connectivity (wired or wireless) between the nodes and protocols used for one node to be able to communicate with the other.`,
    tags: ["node", "link", "network-basics", "topology"],
  },
  {
    id: "cn_008",
    level: "basic",
    topic: "Network Topology",
    question: "What is the network topology?",
    answer: `Network topology is a physical layout of the network, connecting the different nodes using the links.

It depicts the connectivity between the computers, devices, cables, etc. It defines how different nodes are arranged and connected to each other.

Network topology is important for:
• Determining how data flows in the network
• Understanding fault tolerance
• Planning for network expansion`,
    tags: ["topology", "network-layout", "nodes", "links"],
  },
  {
    id: "cn_009",
    level: "basic",
    topic: "Network Topology",
    question: "Define different types of network topology.",
    answer: `Types of network topology:

• Bus Topology: All nodes are connected using a central link (bus). Useful for smaller number of devices. If main cable is damaged, the whole network fails.

• Star Topology: All nodes are connected to a single central node. More robust and easy to troubleshoot. If the central node fails, the entire network goes down. Used in home and office networks.

• Ring Topology: Each node is connected to exactly two nodes forming a ring. If one node is damaged, the whole network is affected. Expensive and hard to install.

• Mesh Topology: Each node is connected to one or many nodes. Robust — failure in one link only disconnects that node. Rarely used; installation is complex.

• Tree Topology: Combination of star and bus topology (extended bus). All smaller star networks are connected to a single bus. If the main bus fails, the whole network goes down.

• Hybrid Topology: A combination of different topologies. Helps ignore drawbacks of individual topologies and pick their strengths.`,
    tags: ["bus", "star", "ring", "mesh", "tree", "hybrid", "topology"],
  },
  {
    id: "cn_010",
    level: "basic",
    topic: "IP Addressing",
    question: "What are Private and Special IP addresses?",
    answer: `Private Address: For each class, specific IPs are reserved for private use only. These cannot be used for devices on the Internet as they are non-routable.

• Class A: 10.0.0.0 – 10.255.255.255
• Class B: 172.16.0.0 – 172.31.255.255
• Class C: 192.168.0.0 – 192.168.255.255

Special Address: IP Range from 127.0.0.1 to 127.255.255.255 are network testing addresses also known as loopback addresses.`,
    tags: ["private-ip", "special-ip", "loopback", "ip-addressing"],
  },

  // ─── INTERMEDIATE ─────────────────────────────────────────────────────────────
  {
    id: "cn_011",
    level: "intermediate",
    topic: "DNS",
    question: "What is the DNS?",
    answer: `DNS is the Domain Name System. It is considered as the devices/services directory of the Internet.

It is a decentralized and hierarchical naming system for devices/services connected to the Internet. It translates domain names to their corresponding IP addresses.

Example: interviewbit.com → 172.217.166.36

It uses port 53 by default.`,
    tags: ["dns", "domain", "ip-resolution", "port-53"],
  },
  {
    id: "cn_012",
    level: "intermediate",
    topic: "Network Devices",
    question: "What is the use of a router and how is it different from a gateway?",
    answer: `Router: A networking device used for connecting two or more network segments. It directs traffic in the network and transfers information (web pages, emails, images, videos, etc.) from source to destination in the form of packets. Operates at the Network Layer.

Gateway vs Router:
• Both are used to route and regulate network traffic.
• A gateway can send data between two dissimilar networks.
• A router can only send data to similar/same types of networks.`,
    tags: ["router", "gateway", "network-devices", "network-layer"],
  },
  {
    id: "cn_013",
    level: "intermediate",
    topic: "Protocols",
    question: "What is the SMTP protocol?",
    answer: `SMTP is the Simple Mail Transfer Protocol.

SMTP sets the rules for communication between servers. This set of rules helps the software to transmit emails over the internet.

Key characteristics:
• Supports both End-to-End and Store-and-Forward methods.
• Always in listening mode on port 25.
• Works at the Application Layer.`,
    tags: ["smtp", "email", "protocols", "port-25", "application-layer"],
  },
  {
    id: "cn_014",
    level: "intermediate",
    topic: "OSI Model",
    question: "Describe the OSI Reference Model.",
    answer: `OSI stands for Open System Interconnections. It is a network architecture model based on ISO standards. It is called the OSI model as it deals with connecting systems that are open for communication with other systems.

The OSI model has seven layers. Key principles for the layers:
• Create a new layer if a different abstraction is needed.
• Each layer should have a well-defined function.
• The function of each layer is chosen based on internationally standardized protocols.`,
    tags: ["osi", "reference-model", "layers", "iso-standards"],
  },
  {
    id: "cn_015",
    level: "intermediate",
    topic: "OSI Model",
    question: "Define the 7 different layers of the OSI Reference Model.",
    answer: `The 7 layers of the OSI Reference Model (top to bottom):

1. Physical Layer (Bit): Transmits raw bits over a communication channel. Chooses the transmission mode: Simplex, Half Duplex, or Full Duplex.

2. Data Link Layer (Frame): Transforms raw transmission into a line free of undetected errors. Detects damaged packets using CRC. Protocols: CSMA/CD, CSMA/CA, ALOHA, Token Passing.

3. Network Layer (Packet): Controls the operation of the subnet. Handles feedback messaging through ICMP messages.

4. Transport Layer (TPDU): Accepts data from upper layers, splits it into smaller units, passes to the network layer, and ensures all pieces arrive correctly. Handles Segmentation and Reassembly.

5. Session Layer (SPDU): Allows users on different machines to establish sessions. Manages dialogue control.

6. Presentation Layer (PPDU): Concerned with syntax and semantics of information. Translates messages from common form to encoded format.

7. Application Layer (APDU): Contains protocols commonly needed by users. Sends data of any size to the transport layer.`,
    tags: ["osi-layers", "physical", "data-link", "network", "transport", "session", "presentation", "application"],
  },
  {
    id: "cn_016",
    level: "intermediate",
    topic: "TCP/IP Model",
    question: "Describe the TCP/IP Reference Model and its 4 layers.",
    answer: `TCP/IP is a compressed version of the OSI model with only 4 layers. Developed by the US Department of Defence (DoD) in the 1980s. Named after two standard protocols: TCP (Transmission Control Protocol) and IP (Internet Protocol).

The 4 layers:

1. Link Layer: Decides which links (serial lines or Ethernet) must be used to meet the needs of the connectionless internet layer.

2. Internet Layer: The most important layer that holds the whole architecture together. Delivers IP packets to their intended destinations.

3. Transport Layer: Enables peer entities on the network to carry on a conversation. Similar functionality to OSI transport layer.

4. Application Layer: Contains all the higher-level protocols.`,
    tags: ["tcp-ip", "reference-model", "4-layers", "internet-layer", "dod"],
  },
  {
    id: "cn_017",
    level: "intermediate",
    topic: "OSI Model",
    question: "Differentiate OSI Reference Model with TCP/IP Reference Model.",
    answer: `Comparison between OSI and TCP/IP models:

OSI Reference Model vs TCP/IP Reference Model:

• Architecture: 7 layers vs 4 layers
• Boundaries: Fixed boundaries and functionality for each layer vs Flexible architecture with no strict boundaries between layers
• Reliability: Low vs High
• Approach: Vertical Layer Approach vs Horizontal Layer Approach`,
    tags: ["osi", "tcp-ip", "comparison", "layers", "models"],
  },
  {
    id: "cn_018",
    level: "intermediate",
    topic: "Protocols",
    question: "What are the HTTP and the HTTPS protocols?",
    answer: `HTTP (HyperText Transfer Protocol):
• Defines rules and standards for transmitting information on the WWW.
• Helps web browsers and web servers communicate.
• It is a 'stateless protocol' — each command is independent of the previous command.
• Application layer protocol built upon TCP.
• Uses port 80 by default.

HTTPS (HyperText Transfer Protocol Secure):
• Advanced and secured version of HTTP.
• Uses SSL/TLS protocol on top of HTTP to provide security.
• Enables secure transactions by encrypting the communication.
• Helps identify network servers securely.
• Uses port 443 by default.`,
    tags: ["http", "https", "ssl", "tls", "port-80", "port-443", "web"],
  },

  // ─── ADVANCED ─────────────────────────────────────────────────────────────────
  {
    id: "cn_019",
    level: "advanced",
    topic: "Protocols",
    question: "What is the FTP protocol?",
    answer: `FTP stands for File Transfer Protocol.

It is an application layer protocol used to transfer files and data reliably and efficiently between hosts. It can also be used to download files from remote servers to your computer.

Key characteristics:
• Works at the Application Layer.
• Uses port 21 by default (the document states port 27, but the standard is port 21).
• Supports both active and passive connection modes.
• Not inherently secure — FTPS/SFTP are secure alternatives.`,
    tags: ["ftp", "file-transfer", "port-21", "application-layer", "protocols"],
  },
  {
    id: "cn_020",
    level: "advanced",
    topic: "Protocols",
    question: "What is the TCP protocol?",
    answer: `TCP stands for Transmission Control Protocol. Together with IP, it forms TCP/IP.

It is a set of rules that decides how a computer connects to the Internet and how to transmit data over the network.

Key features:
• Creates a virtual network when more than one computer is connected.
• Uses the three-way handshake model (SYN, SYN-ACK, ACK) to establish a connection.
• Connection-oriented and reliable.
• Provides error checking, sequencing, and flow control.
• Used by HTTP, FTP, SMTP, HTTPS, Telnet.`,
    tags: ["tcp", "three-way-handshake", "connection-oriented", "reliable", "protocols"],
  },
  {
    id: "cn_021",
    level: "advanced",
    topic: "Protocols",
    question: "What is the UDP protocol?",
    answer: `UDP stands for User Datagram Protocol and is based on Datagrams.

Key characteristics:
• Mainly used for multicasting and broadcasting.
• Functionality similar to TCP/IP but without three-way handshaking and error checking.
• Uses simple transmission without any hand-shaking.
• Connectionless and less reliable but faster than TCP.
• Used by DNS, RIP, SNMP, RTP, BOOTP, TFTP, NTP.`,
    tags: ["udp", "datagram", "connectionless", "multicast", "broadcast", "protocols"],
  },
  {
    id: "cn_022",
    level: "advanced",
    topic: "Protocols",
    question: "Compare between TCP and UDP.",
    answer: `TCP vs UDP comparison:

• Connection: TCP is Connection-Oriented; UDP is Connectionless.
• Reliability: TCP is More Reliable; UDP is Less Reliable.
• Speed: TCP has Slower Transmission; UDP has Faster Transmission.
• Packet Order: TCP can preserve or rearrange packet order; UDP packets are independent and unordered.
• Handshake: TCP uses three-way handshake; UDP has no handshake.
• Packet Weight: TCP packets are heavy-weight; UDP packets are light-weight.
• Error Checking: TCP offers error checking; UDP has no error checking mechanism.
• Use Cases: TCP — HTTP, FTP, Telnet, SMTP, HTTPS; UDP — DNS, RIP, SNMP, RTP, TFTP.`,
    tags: ["tcp", "udp", "comparison", "connection", "reliability", "protocols"],
  },
  {
    id: "cn_023",
    level: "advanced",
    topic: "Protocols",
    question: "What is the ICMP protocol?",
    answer: `ICMP stands for Internet Control Message Protocol.

It is a network layer protocol used for error handling. Mainly used by network devices like routers for:
• Diagnosing network connection issues.
• Error reporting.
• Testing if data is reaching the preferred destination in time (ping command).

It uses port 7 by default (echo protocol).`,
    tags: ["icmp", "error-handling", "network-layer", "ping", "routers"],
  },
  {
    id: "cn_024",
    level: "advanced",
    topic: "Protocols",
    question: "What do you mean by the DHCP Protocol?",
    answer: `DHCP stands for Dynamic Host Configuration Protocol.

It is an application layer protocol used to auto-configure devices on IP networks, enabling them to use TCP and UDP-based protocols.

Key features:
• DHCP servers auto-assign IPs and other network configurations to devices individually.
• Enables devices to communicate over the IP network.
• Helps get subnet mask and IP address.
• Helps resolve DNS.
• Uses port 67 (server) and port 68 (client) by default.`,
    tags: ["dhcp", "ip-assignment", "auto-configure", "port-67", "application-layer"],
  },
  {
    id: "cn_025",
    level: "advanced",
    topic: "Protocols",
    question: "What is the ARP protocol?",
    answer: `ARP stands for Address Resolution Protocol.

It is a network-level protocol used to convert a logical address (IP address) to the device's physical address (MAC address).

Key uses:
• Gets the MAC address of devices when they are trying to communicate over the local network.
• Works at the Data Link / Network Layer boundary.

Process:
1. Device broadcasts an ARP request asking "Who has this IP?"
2. The device with that IP responds with its MAC address.
3. The MAC address is cached in the ARP table for future use.`,
    tags: ["arp", "mac-address", "ip-address", "address-resolution", "protocols"],
  },
  {
    id: "cn_026",
    level: "advanced",
    topic: "MAC & IP",
    question: "What is the MAC address and how is it related to NIC?",
    answer: `MAC address stands for Media Access Control address.

It is a 48-bit or 64-bit unique identifier of devices in the network. Also called the physical address.

Relation to NIC:
• MAC address is embedded with the Network Interface Card (NIC).
• NIC is a hardware component in the networking device that allows a device to connect to the network.
• The MAC address operates at the Data Link Layer.`,
    tags: ["mac-address", "nic", "physical-address", "data-link-layer", "hardware"],
  },
  {
    id: "cn_027",
    level: "advanced",
    topic: "MAC & IP",
    question: "Differentiate the MAC address with the IP address.",
    answer: `MAC Address vs IP Address:

• Full Form: Media Access Control Address vs Internet Protocol Address
• Size: 6 or 8-byte hexadecimal number vs 4 bytes (IPv4) or 16 bytes (IPv6)
• Origin: Embedded with NIC (physical) vs Obtained from the network (logical)
• Type: Physical Address vs Logical Address
• Layer: Operates at Data Link Layer vs Operates at Network Layer
• Purpose: Helps identify the device vs Helps identify device connectivity on the network`,
    tags: ["mac-address", "ip-address", "comparison", "physical-vs-logical"],
  },
  {
    id: "cn_028",
    level: "advanced",
    topic: "Subnetting",
    question: "What is a subnet?",
    answer: `A subnet is a network inside a network, achieved by the process called subnetting.

Subnetting helps divide a network into smaller sub-networks (subnets).

Benefits:
• Higher routing efficiency.
• Enhanced security of the network.
• Reduces the time to extract the host address from the routing table.
• Better management and utilization of IP address space.

A subnet is identified by its subnet mask, which defines the network and host portions of an IP address.`,
    tags: ["subnet", "subnetting", "routing", "ip-addressing", "network-security"],
  },
  {
    id: "cn_029",
    level: "advanced",
    topic: "Network Devices",
    question: "Compare the hub vs switch.",
    answer: `Hub vs Switch comparison:

• Layer: Hub operates at Physical Layer; Switch operates at Data Link Layer.
• Transmission: Hub uses Half-Duplex; Switch uses Full-Duplex transmission mode.
• Devices: Hub connects Ethernet devices; Switch connects LAN devices.
• Intelligence: Hub is less complex, less intelligent, and cheaper; Switch is intelligent and effective.
• Administration: Hub has no software support for administration; Switch has administration software support.
• Speed: Hub supports up to 100 Mbps; Switch supports high speed in Gbps.
• Collision: Hub cannot avoid collisions; Switch can avoid or reduce collisions.`,
    tags: ["hub", "switch", "comparison", "network-devices", "collision", "full-duplex"],
  },
  {
    id: "cn_030",
    level: "advanced",
    topic: "Network Commands",
    question: "What is the difference between ipconfig and ifconfig?",
    answer: `ipconfig vs ifconfig:

ipconfig (Internet Protocol Configuration):
• Command used in Microsoft/Windows operating systems.
• Used to view and configure network interfaces.
• Gets the TCP/IP summary and allows changes to DHCP and DNS settings.

ifconfig (Interface Configuration):
• Command used in macOS, Linux, and UNIX operating systems.
• Used to view and configure network interfaces.`,
    tags: ["ipconfig", "ifconfig", "windows", "linux", "network-commands"],
  },
  {
    id: "cn_031",
    level: "advanced",
    topic: "Network Security",
    question: "What is the firewall?",
    answer: `A firewall is a network security system used to monitor incoming and outgoing traffic and block traffic based on firewall security policies.

It acts as a wall between the internet (public network) and the networking devices (private network).

Types:
• Hardware device
• Software program
• Combination of both

Key features:
• Adds a layer of security to the network.
• Can filter traffic based on IP address, port, protocol, or content.
• Protects against unauthorized access and cyber threats.`,
    tags: ["firewall", "security", "network-protection", "traffic-filtering"],
  },
  {
    id: "cn_032",
    level: "advanced",
    topic: "Data Transmission",
    question: "What are Unicasting, Anycasting, Multicasting, and Broadcasting?",
    answer: `Types of data transmission based on the number of recipients:

• Unicasting: Message is sent to a single node from the source. Commonly used in networks to establish a new connection. One-to-one communication.

• Anycasting: Message is sent to any one of the nodes from the source. Mainly used to get content from any server in a Content Delivery System (CDN).

• Multicasting: Message is sent to a subset of nodes from the source. Used to send the same data to multiple receivers. One-to-many communication.

• Broadcasting: Message is sent to all nodes in a network from a source. DHCP and ARP in the local network use broadcasting. One-to-all communication.`,
    tags: ["unicast", "anycast", "multicast", "broadcast", "transmission-types"],
  },
  {
    id: "cn_033",
    level: "advanced",
    topic: "Web Fundamentals",
    question: "What happens when you enter google.com in the web browser?",
    answer: `Step-by-step process when you enter google.com:

1. Browser Cache Check: The browser first checks if the content is fresh and present in cache. If yes, it displays the cached content.

2. DNS Lookup: If not cached, the browser checks if the IP of the URL is in the cache (browser and OS). If not, the OS performs a DNS lookup using UDP to get the corresponding IP address from the DNS server.

3. TCP Connection: A new TCP connection is established between the browser and the server using three-way handshaking (SYN → SYN-ACK → ACK).

4. HTTP Request: An HTTP request is sent to the server using the TCP connection.

5. Server Response: The web server handles the incoming HTTP request and sends back an HTTP response.

6. Connection Management: The browser processes the HTTP response and may close or reuse the TCP connection for future requests.

7. Caching: If the response data is cacheable, the browser caches it.

8. Rendering: The browser decodes the response and renders the content on screen.`,
    tags: ["dns", "tcp", "http", "browser", "web", "three-way-handshake", "cache"],
  },
];

export const topicsList = [...new Set(cnQuestions.map((q) => q.topic))];
export const levelsList = ["basic", "intermediate", "advanced"];