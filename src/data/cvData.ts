export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
  technologies: string[];
  languages: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  type: string;
  period: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  programmingLanguages: string[];
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
    headline: 'Specializing in NLP, Machine Learning & Backend Systems',
    location: 'İzmir, Türkiye',
    phone: '+90 545 864 7645',
    phoneRaw: '+905458647645',
    email: 'furkanyavuz0926@gmail.com',
    github: 'https://github.com/FurkanYavuz09',
    githubUsername: 'FurkanYavuz09',
    linkedin: 'https://linkedin.com/in/furkan-yavuz',
    linkedinUsername: 'furkan-yavuz',
    status: 'Open to software engineering & machine learning roles',
    summary:
      'I am a New Graduate Software Engineer who is interested in Natural Language Processing, Backend Development and Machine Learning. I am seeking to utilize a broad educational background with excellent analytical, technical and programming skills to thrive as an entry level Software Engineer.',
  },

  skills: {
    languages: [
      { name: 'Python', details: 'TensorFlow, scikit-learn, Flask, FastAPI, NumPy, Pandas, NLTK' },
      { name: 'Java', details: 'Core Java, OOP, Data Structures' },
      { name: 'C / C++', details: 'Systems Programming, Memory Management, Algorithms' },
      { name: 'HTML / CSS / JavaScript', details: 'Frontend Fundamentals, Responsive Web, ES6+' },
      { name: 'SQL', details: 'Relational Database Design, Complex Queries, Indexing' },
    ],
    technologies: [
      { category: 'AI & NLP Frameworks', items: ['Haystack', 'Hugging Face', 'TensorFlow', 'scikit-learn', 'NLTK'] },
      { category: 'Backend & APIs', items: ['FastAPI', 'Flask', 'Node.js', 'Postman', 'RESTful Architectures'] },
      { category: 'Databases & Storage', items: ['MongoDB', 'MySQL', 'JSON pipelines', 'Elasticsearch'] },
      { category: 'Systems & DevOps', items: ['Linux (Ubuntu / Mint)', 'Git', 'Docker', 'GitLab', 'Google Colab'] },
    ],
    spokenLanguages: [
      { language: 'English', proficiency: 'Advanced', level: 'Professional Working' },
      { language: 'Turkish', proficiency: 'Native', level: 'Native Language' },
      { language: 'Mandarin Chinese', proficiency: 'Beginner', level: 'Foundational' },
    ],
  },

  experience: [
    {
      company: 'Infuseloop',
      role: 'Software Engineer Intern',
      period: '01/2023 – 02/2023',
      location: 'İzmir, Türkiye',
      description:
        'Worked on a question answering system using language models in a start-up company focused on accelerating knowledge discovery from documents with AI.',
      bullets: [
        'Built an end-to-end question answering pipeline for document knowledge retrieval using the open-source Haystack LLM framework.',
        'Created a robust data collection and pre-processing pipeline to parse, normalize, and ingest complex document structures.',
        'Fine-tuned and evaluated language models with Hugging Face transformers to ensure reliable, high-precision context retrieval.',
        'Containerized services using Docker and built high-performance endpoints with FastAPI, testing and documenting APIs via Postman.',
      ],
      technologies: ['Hugging Face', 'Elasticsearch', 'Postman', 'Docker', 'Haystack'],
      languages: ['Python (FastAPI, Haystack)'],
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: 'thesis-project',
      title: 'Machine Learning-based Analysis of Scientific and Research Connections',
      type: 'B.Sc. Thesis Project',
      period: '2022 – 2023',
      summary:
        'Engineered an intelligent NLP analytics engine that processes vast scientific publications, classifies them according to UN Sustainable Development Goals (SDGs), and delivers article similarity recommendations.',
      highlights: [
        'Developed a keyword-based classification algorithm classifying articles by Sustainable Development Goals (SDGs) using TF-IDF feature weighting.',
        'Architected a user-based Article Recommendation system calculating multidimensional similarity scores between scholarly works.',
        'Processed and cleaned extensive JSON datasets containing academic literature, specifically extracting articles authored by Turkish researchers using automated Python scripts.',
        'Stored and queried unstructured document metadata at scale using MongoDB, with version control managed through GitLab.',
      ],
      technologies: ['JSON', 'MongoDB', 'GitLab', 'Google Colab', 'Haystack'],
      programmingLanguages: ['Python (NumPy, Pandas, TensorFlow, scikit-learn, NLTK)'],
      links: {
        github: 'https://github.com/FurkanYavuz09',
      },
    },
    {
      id: 'document-qa-pipeline',
      title: 'Knowledge Discovery & Semantic QA Engine',
      type: 'Production NLP System',
      period: '2023',
      summary:
        'High-throughput semantic search and extractive question answering backend that indexes unstructured corporate documents and serves real-time answers with source citations.',
      highlights: [
        'Integrated Elasticsearch as a dense-sparse document store for sub-second text retrieval across indexed PDFs and text dumps.',
        'Leveraged Hugging Face reader models with Haystack retrieval pipelines, reducing question resolution latency.',
        'Exposed async REST endpoints with FastAPI and verified contract integrity with Postman suites and Dockerized environments.',
      ],
      technologies: ['Docker', 'FastAPI', 'Elasticsearch', 'Hugging Face', 'Haystack'],
      programmingLanguages: ['Python', 'Bash', 'Dockerfiles'],
      links: {
        github: 'https://github.com/FurkanYavuz09',
      },
    },
    {
      id: 'parallel-network-systems',
      title: 'Concurrent Network Server & Systems Suite',
      type: 'Systems & Networks',
      period: '2022',
      summary:
        'Implemented socket-level parallel network communication patterns and multi-threaded data processors exploring synchronization, mutexes, and low-latency packet handling.',
      highlights: [
        'Constructed custom multi-client socket servers in C and C++ utilizing POSIX threads and epoll for non-blocking I/O.',
        'Benchmarked parallel programming patterns (Master-Worker, Pipeline) against heavy matrix workloads.',
        'Analyzed network performance bottlenecks and packet routing behavior across simulated topologies.',
      ],
      technologies: ['Linux / Ubuntu', 'POSIX Threads', 'Sockets', 'Git'],
      programmingLanguages: ['C', 'C++', 'Java', 'Python'],
      links: {
        github: 'https://github.com/FurkanYavuz09',
      },
    },
  ] as ProjectItem[],

  education: [
    {
      institution: 'İzmir Institute Of Technology (İYTE)',
      degree: 'Bachelor of Science - BS, Computer Engineering',
      period: '2019 – 2023',
      details:
        'One of Türkiye’s premier research-oriented technical institutes. Rigorous curriculum covering core computer science, software architecture, mathematics, and high-performance engineering.',
      electiveCourses: [
        'Network Design And Management',
        'Network Programming',
        'Artificial Intelligence',
        'Introduction To Machine Learning',
        'Building Software Systems',
        'Parallel Programming Patterns',
      ],
    },
    {
      institution: 'OSF Academy',
      degree: 'Salesforce Core Developer Certification Program',
      period: '10/2023 – 11/2023',
      details: 'Intensive 6-week software development program covering enterprise cloud architecture, APEX, and integrations.',
    },
    {
      institution: 'İzmir Institute Of Technology',
      degree: 'English Language Preparatory Program',
      period: '2018 – 2019',
      details: 'Full-time advanced academic English immersion preparing for 100% English-medium engineering education.',
    },
  ] as EducationItem[],

  blogPosts: [
    {
      id: 'nlp-pipeline-haystack',
      title: 'Building Production Question Answering Pipelines with Haystack & FastAPI',
      slug: 'nlp-pipeline-haystack-fastapi',
      date: 'Feb 15, 2024',
      readTime: '6 min read',
      category: 'NLP & AI',
      tags: ['NLP', 'Haystack', 'FastAPI', 'Elasticsearch'],
      summary:
        'A practical breakdown of designing document retrieval architectures, combining dense embeddings with sparse lexical indexing, and serving low-latency LLM inference in production.',
      content: [
        'When working with real-world enterprise documents, simple keyword matching quickly hits a ceiling. Documents contain domain-specific synonyms, tabular data, and complex formatting that standard SQL LIKE queries cannot resolve.',
        'During my internship at Infuseloop, our team focused on closing this gap by engineering a modular retrieval-augmented generation (RAG) and extractive QA pipeline using the Haystack framework.',
        'The architecture consisted of three decoupled layers: an ingestion & normalization worker, a dual-indexer backed by Elasticsearch, and a FastAPI inference engine serving answer candidates alongside confidence calibration scores.',
        'Key takeaway: Document pre-chunking with 20% sliding window overlap increased question recall by over 32% compared to static arbitrary paragraph splits.',
      ],
    },
    {
      id: 'sdg-classification-tfidf',
      title: 'Classifying Scientific Research via TF-IDF and Recommendation Scoring',
      slug: 'classifying-scientific-research-tfidf',
      date: 'Dec 10, 2023',
      readTime: '5 min read',
      category: 'Machine Learning',
      tags: ['Machine Learning', 'Python', 'NLTK', 'MongoDB'],
      summary:
        'Insights from my graduation thesis at IYTE on processing vast academic JSON corpora to map papers against UN Sustainable Development Goals using statistical NLP.',
      content: [
        'Classifying research papers according to global impact metrics requires handling unstructured academic abstracts characterized by high lexical density and sparse annotations.',
        'In my thesis project, I designed a multi-stage classification pipeline using Python, scikit-learn, and NLTK. We extracted hundreds of articles written by Turkish researchers, sanitized the raw JSON payload, and extracted normalized lemma tokens.',
        'By computing TF-IDF matrices weighted against curated UN SDG target lexicons, we achieved highly interpretable topic boundaries without requiring the computational overhead of fine-tuning multi-billion parameter models.',
        'Furthermore, implementing cosine similarity matrices over high-dimensional vector spaces allowed us to generate bidirectional article recommendation graphs with minimal latency.',
      ],
    },
    {
      id: 'concurrency-parallel-patterns',
      title: 'Parallel Programming Patterns: Moving Beyond Single-Threaded Thinking',
      slug: 'parallel-programming-patterns-concurrency',
      date: 'Oct 04, 2023',
      readTime: '4 min read',
      category: 'Systems',
      tags: ['C / C++', 'Concurrency', 'POSIX', 'Systems'],
      summary:
        'Reflections on multi-threaded architecture, race condition mitigation, and parallel paradigms studied during my Computer Engineering electives at IYTE.',
      content: [
        'Writing clean code in modern languages like Python often shields developers from the raw mechanics of operating system scheduling, memory contention, and hardware cache coherence.',
        'In the Parallel Programming Patterns and Network Programming courses at Izmir Institute of Technology, we dove directly into C/C++ POSIX threads, semaphore synchronization, and pipeline architectures.',
        'Understanding how lock contention degrades throughput under high core counts fundamentally changes how you design backend services—even when writing async code in Python or Node.js.',
      ],
    },
  ] as TechnicalArticle[],
};
