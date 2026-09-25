export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  startDate?: string;
  isCurrent?: boolean;
  location: string;
  description: string;
  bullets: string[];
  technologies: string[];
  languages?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  type: string;
  institution?: string;
  period?: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  programmingLanguages?: string[];
  links?: {
    github?: string;
    demo?: string;
  };
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  details?: string;
  electiveCourses?: string[];
}

export interface TechnicalArticle {
  id: string;
  title: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
  summary: string;
  content: string[];
  tags: string[];
}

export const cvData = {
  personal: {
    name: 'Furkan Yavuz',
    title: 'Software Engineer',
    currentRole: 'C++ Software Engineer @ ETE Technology',
    headline: 'High-Performance C++ Backend Systems, Distributed Architectures & Networking Protocols',
    location: 'İzmir, Türkiye',
    phone: '+90 545 864 76 45',
    phoneRaw: '+905458647645',
    email: 'furkanyavuz0926@gmail.com',
    github: 'https://github.com/FurkanYavuz09',
    githubUsername: 'FurkanYavuz09',
    linkedin: 'https://linkedin.com/in/furkan-yavuz-',
    linkedinUsername: 'furkan-yavuz-',
    status: 'C++ Software Engineer at ETE Technology (Since Feb 19, 2024)',
    summary:
      'Software Engineer with a strong background in Computer Engineering from İzmir Institute of Technology. Experienced in developing high-performance C++ backend systems, distributed architectures, networking protocols, and scalable microservices. Passionate about writing modern, robust, and clean low-level code while optimizing large-scale data workflows and system throughput.',
  },

  skills: {
    programmingLanguages: [
      { name: 'C++', details: 'Modern C++ (17/20), Core Architecture, Low-Latency Networking, Memory Efficiency' },
      { name: 'C', details: 'Low-Level Systems, Sockets, POSIX Threads, Memory Management' },
      { name: 'Python', details: 'FastAPI, Haystack, NumPy, Pandas, TensorFlow, Keras, scikit-learn, NLTK, Selenium' },
      { name: 'Java', details: 'OOP, Concurrency, Enterprise Foundations' },
      { name: 'Go', details: 'Concurrent Services, Microservices, Network Tools' },
      { name: 'SQL', details: 'Relational Schemas, Performance Indexing, MySQL' },
      { name: 'JavaScript & HTML', details: 'Web & API Consumers, Node.js, Frontend Integration' },
    ],
    coreDomains: [
      'Distributed Systems',
      'Computer Networking',
      'Microservices',
      'Big Data',
      'Concurrency',
      'Low-Latency Communication Protocols',
      'Object-Oriented Programming (OOP)',
      'Data Ingestion Pipelines',
    ],
    toolsAndTechnologies: [
      'Linux / Ubuntu',
      'Docker',
      'Git',
      'MongoDB',
      'MySQL',
      'Elasticsearch',
      'Postman',
      'Google Cloud',
      'Node.js',
      'Hugging Face',
      'Haystack',
      'GitLab',
      'Google Colab',
    ],
    spokenLanguages: [
      { language: 'English', proficiency: 'Advanced / Professional Working' },
      { language: 'Turkish', proficiency: 'Native' },
    ],
  },

  experience: [
    {
      company: 'ETE Technology',
      role: 'C++ Software Engineer',
      period: '02/2024 – Present',
      startDate: 'February 19, 2024',
      isCurrent: true,
      location: 'İzmir, Türkiye',
      description:
        'Actively building and optimizing high-performance backend systems and low-latency networking modules for the nginr product using modern C++ in distributed environments.',
      bullets: [
        'Actively contributing to the core architecture and development of the nginr product using modern C++.',
        'Designing and optimizing high-performance, low-latency networking modules and communication protocols.',
        'Building robust, fault-tolerant microservices and backend services operating in distributed system environments.',
        'Developing big data ingestion and processing pipelines focused on high concurrency, throughput, and memory efficiency.',
      ],
      technologies: ['C++', 'Distributed Systems', 'Networking', 'Microservices', 'Big Data', 'Linux/Ubuntu', 'Git'],
      languages: ['Modern C++ (17/20)'],
    },
    {
      company: "Yenilik Atölyesi / Tech'n Roll",
      role: 'Software Engineer Intern',
      period: '01/2023 – 02/2023',
      isCurrent: false,
      location: 'İzmir, Türkiye',
      description:
        'Engineered an NLP intelligence pipeline using Haystack and benchmarked LLM inferences, serving models through scalable REST endpoints.',
      bullets: [
        'Implemented an NLP pipeline using the Haystack framework and evaluated performance across various Large Language Models (LLMs).',
        'Architected and deployed a RESTful API using FastAPI to serve model inferences reliably.',
      ],
      technologies: ['Python (FastAPI, Haystack)', 'Hugging Face', 'Elasticsearch', 'Docker', 'Postman'],
      languages: ['Python (FastAPI, Haystack)'],
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: 'thesis-project',
      title: 'ML-based Analysis of Scientific & Research Connections',
      type: 'Thesis Project',
      institution: 'İzmir Institute of Technology',
      period: '2022 – 2023',
      summary:
        'Engineered an intelligent scholarly analytics platform classifying scientific articles under UN Sustainable Development Goals and calculating multidimensional similarity recommendation scores.',
      highlights: [
        'Engineered a TF-IDF keyword classification algorithm to classify academic articles under UN Sustainable Development Goals.',
        'Constructed a collaborative-filtering article recommendation engine for research discovery.',
        'Parsed and filtered large-scale JSON publication datasets, extracting academic contributions by Turkish authors.',
      ],
      technologies: [
        'Python (NumPy, Pandas, TensorFlow, Keras, scikit-learn, NLTK)',
        'MongoDB',
        'GitLab',
      ],
      links: {
        github: 'https://github.com/FurkanYavuz09',
      },
    },
    {
      id: 'weather-forecasting',
      title: 'Weather Forecasting Using Data Mining',
      type: 'Personal / Academic Project',
      period: '2023',
      summary:
        'Automated meteorological data harvesting system and predictive machine learning models delivering multi-horizon weather forecasts.',
      highlights: [
        'Built an automated Python web scraper using Selenium to aggregate historical meteorological data.',
        'Trained ML regression and time-series models for 3-day, 7-day, and 14-day weather forecasting.',
        'Evaluated prediction metrics against baseline atmospheric datasets with feature engineering in Google Colab.',
      ],
      technologies: [
        'Python (NumPy, Pandas, scikit-learn, Selenium)',
        'GitHub',
        'Google Colab',
      ],
      links: {
        github: 'https://github.com/FurkanYavuz09',
      },
    },
  ] as ProjectItem[],

  education: [
    {
      institution: 'İzmir Institute of Technology',
      degree: 'B.S. in Computer Engineering',
      period: '2018 – 2023',
      details:
        'Rigorous engineering foundation in distributed systems, low-level computer networking, concurrency patterns, and machine learning.',
    },
    {
      institution: 'OSF Academy',
      degree: 'Salesforce Core Developer (6-Week Intensive Program)',
      period: '10/2023 – 11/2023',
      details: 'Enterprise backend cloud architectures, APEX engineering, and scalable integrations.',
    },
  ] as EducationItem[],

  blogPosts: [
    {
      id: 'cpp-networking-low-latency',
      title: 'Architecting Low-Latency Networking Modules in Modern C++',
      slug: 'cpp-networking-low-latency',
      date: 'Aug 14, 2024',
      readTime: '6 min read',
      category: 'C++ & Networking',
      tags: ['C++', 'Networking', 'Concurrency', 'Distributed Systems'],
      summary:
        'Key architectural patterns for designing high-throughput communication protocols, zero-copy buffers, and asynchronous event loops in modern C++.',
      content: [
        'When operating at the core of high-throughput backend products like nginr at ETE Technology, microsecond latencies matter. Moving from standard blocking I/O to event-driven architectures requires rigorous control over memory layout and system calls.',
        'In modern C++ (C++17/20), we leverage cache-friendly data structures, ring buffers, and custom memory allocators to prevent heap fragmentation during massive burst ingestion.',
        'Designing modular networking abstractions means decoupling transport layer logic from protocol parsing, allowing the engine to adapt dynamically to evolving network topologies without sacrificing raw throughput.',
      ],
    },
    {
      id: 'big-data-concurrency-pipelines',
      title: 'High-Concurrency Big Data Ingestion: Minimizing Lock Contention',
      slug: 'high-concurrency-big-data-ingestion',
      date: 'May 02, 2024',
      readTime: '5 min read',
      category: 'Distributed Systems',
      tags: ['Distributed Systems', 'Big Data', 'Concurrency', 'C++'],
      summary:
        'Designing lock-free queues and producer-consumer pipelines that maximize CPU core saturation while maintaining strict memory bounds.',
      content: [
        'Big data ingestion pipelines frequently suffer not from raw CPU limitations, but from synchronization bottlenecks. When multiple threads contend for mutexes across ingestion queues, throughput collapses.',
        'By utilizing single-producer single-consumer (SPSC) lock-free ring buffers and batching memory operations, we achieve predictable latency curves even under intense network backpressure.',
        'Monitoring OS context switching and cache invalidations using Linux profiling tools (perf, valgrind) provides the empirical grounding necessary to fine-tune distributed microservices.',
      ],
    },
    {
      id: 'nlp-pipeline-haystack',
      title: 'Deploying Scalable NLP Inference Microservices with Haystack & FastAPI',
      slug: 'nlp-pipeline-haystack-fastapi',
      date: 'Feb 10, 2024',
      readTime: '5 min read',
      category: 'NLP & ML',
      tags: ['Python', 'FastAPI', 'Haystack', 'Docker'],
      summary:
        'Engineering reproducible document retrieval and question answering pipelines using open-source LLM frameworks and containerized microservices.',
      content: [
        'During my internship at Yenilik Atölyesi / Tech’n Roll, we engineered an end-to-end question answering pipeline that evaluated diverse Large Language Models against document corpora.',
        'Deploying these pipelines with FastAPI and Elasticsearch enabled real-time response generation with strict endpoint reliability and Dockerized portability.',
      ],
    },
  ] as TechnicalArticle[],
};
