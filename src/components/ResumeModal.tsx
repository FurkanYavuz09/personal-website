import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { cvData } from '../data/cvData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const copyCvText = () => {
    const text = `
FURKAN YAVUZ
SOFTWARE ENGINEER
+90 545 864 76 45 • İzmir, Türkiye
furkanyavuz0926@gmail.com
linkedin.com/in/furkan-yavuz- • github.com/FurkanYavuz09

SUMMARY
${cvData.personal.summary}

EXPERIENCE
ETE Technology — C++ Software Engineer
02/2024 – Present (Since Feb 19, 2024)
• Actively contributing to the core architecture and development of the nginr product using modern C++.
• Designing and optimizing high-performance, low-latency networking modules and communication protocols.
• Building robust, fault-tolerant microservices and backend services operating in distributed system environments.
• Developing big data ingestion and processing pipelines focused on high concurrency, throughput, and memory efficiency.
Technologies: C++, Distributed Systems, Networking, Microservices, Big Data, Linux/Ubuntu, Git

Yenilik Atölyesi / Tech'n Roll — Software Engineer Intern
01/2023 – 02/2023
• Implemented an NLP pipeline using the Haystack framework and evaluated performance across various Large Language Models (LLMs).
• Architected and deployed a RESTful API using FastAPI to serve model inferences reliably.
Technologies: Python (FastAPI, Haystack), Hugging Face, Elasticsearch, Docker, Postman

PROJECTS
Thesis: ML-based Analysis of Scientific & Research Connections (İzmir Institute of Technology)
• Engineered a TF-IDF keyword classification algorithm to classify academic articles under UN Sustainable Development Goals.
• Constructed a collaborative-filtering article recommendation engine for research discovery.
• Parsed and filtered large-scale JSON publication datasets, extracting academic contributions by Turkish authors.
Technologies: Python (NumPy, Pandas, TensorFlow, Keras, scikit-learn, NLTK), MongoDB, GitLab

Weather Forecasting Using Data Mining (Personal / Academic Project)
• Built an automated Python web scraper to aggregate historical meteorological data.
• Trained ML regression and time-series models for 3-day, 7-day, and 14-day weather forecasting.
Technologies: Python (NumPy, Pandas, scikit-learn, Selenium), GitHub, Google Colab

EDUCATION & TRAINING
İzmir Institute of Technology — B.S. in Computer Engineering (2018 – 2023)
OSF Academy — Salesforce Core Developer (6-Week Intensive Program) (10/2023 – 11/2023)

TECHNICAL SKILLS & LANGUAGES
Programming Languages: C++, C, Python, Java, Go, SQL, JavaScript, HTML
Core Domains & Concepts: Distributed Systems, Computer Networking, Microservices, Big Data, Concurrency, OOP
Tools & Technologies: Linux/Ubuntu, Docker, Git, MongoDB, MySQL, Elasticsearch, Postman, Google Cloud, Node.js
Languages: English (Advanced / Professional Working), Turkish (Native)
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Curriculum Vitae of Furkan Yavuz"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      <div className="relative w-full max-w-4xl bg-[#0f1118] border border-neutral-700 shadow-2xl my-4 flex flex-col max-h-[92vh]">
        {/* Modal Toolbar */}
        <div className="px-6 py-3.5 border-b border-neutral-800 bg-[#141722] flex items-center justify-between text-neutral-300">
          <div className="flex items-center gap-2 font-mono text-xs text-white">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>FURKAN_YAVUZ_CV.pdf (Updated: ETE Technology)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-xs font-mono text-neutral-200 transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Print document"
            >
              <Printer className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={copyCvText}
              className="px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-xs font-mono text-neutral-200 transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Canvas (Crisp, High Contrast, Exact to provided PDF) */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-white text-neutral-900 font-sans space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b-2 border-neutral-900 pb-5">
            <div>
              <h1 className="text-3xl font-extrabold text-neutral-950 uppercase tracking-tight">
                FURKAN YAVUZ
              </h1>
              <p className="text-base font-bold text-neutral-800 tracking-wide mt-0.5">
                SOFTWARE ENGINEER
              </p>
            </div>

            <div className="text-xs font-mono text-neutral-800 space-y-1 sm:text-right">
              <div>+90 545 864 76 45 • İzmir, Türkiye</div>
              <div>furkanyavuz0926@gmail.com</div>
              <div>linkedin.com/in/furkan-yavuz- • github.com/FurkanYavuz09</div>
            </div>
          </div>

          {/* SUMMARY */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-neutral-950 border-b border-neutral-300 pb-1">
              SUMMARY
            </h2>
            <p className="text-xs text-neutral-800 leading-relaxed">
              {cvData.personal.summary}
            </p>
          </div>

          {/* EXPERIENCE */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-neutral-950 border-b border-neutral-300 pb-1">
              EXPERIENCE
            </h2>

            {/* ETE Technology */}
            <div className="space-y-1.5 text-xs text-neutral-800">
              <div className="flex justify-between font-bold text-neutral-950">
                <span>ETE Technology — C++ Software Engineer</span>
                <span className="font-mono">02/2024 – Present</span>
              </div>
              <ul className="list-disc list-inside space-y-1 pl-1">
                <li>Actively contributing to the core architecture and development of the nginr product using modern C++.</li>
                <li>Designing and optimizing high-performance, low-latency networking modules and communication protocols.</li>
                <li>Building robust, fault-tolerant microservices and backend services operating in distributed system environments.</li>
                <li>Developing big data ingestion and processing pipelines focused on high concurrency, throughput, and memory efficiency.</li>
              </ul>
              <div className="text-xs text-neutral-700 pt-1 font-mono">
                <strong>Technologies:</strong> C++, Distributed Systems, Networking, Microservices, Big Data, Linux/Ubuntu, Git
              </div>
            </div>

            {/* Yenilik Atölyesi / Tech'n Roll */}
            <div className="space-y-1.5 text-xs text-neutral-800">
              <div className="flex justify-between font-bold text-neutral-950">
                <span>Yenilik Atölyesi / Tech&apos;n Roll — Software Engineer Intern</span>
                <span className="font-mono">01/2023 – 02/2023</span>
              </div>
              <ul className="list-disc list-inside space-y-1 pl-1">
                <li>Implemented an NLP pipeline using the Haystack framework and evaluated performance across various Large Language Models (LLMs).</li>
                <li>Architected and deployed a RESTful API using FastAPI to serve model inferences reliably.</li>
              </ul>
              <div className="text-xs text-neutral-700 pt-1 font-mono">
                <strong>Technologies:</strong> Python (FastAPI, Haystack), Hugging Face, Elasticsearch, Docker, Postman
              </div>
            </div>
          </div>

          {/* PROJECTS */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-neutral-950 border-b border-neutral-300 pb-1">
              PROJECTS
            </h2>

            <div className="space-y-1.5 text-xs text-neutral-800">
              <div className="flex justify-between font-bold text-neutral-950">
                <span>Thesis: ML-based Analysis of Scientific & Research Connections</span>
                <span className="font-mono font-normal">İzmir Institute of Technology</span>
              </div>
              <ul className="list-disc list-inside space-y-1 pl-1">
                <li>Engineered a TF-IDF keyword classification algorithm to classify academic articles under UN Sustainable Development Goals.</li>
                <li>Constructed a collaborative-filtering article recommendation engine for research discovery.</li>
                <li>Parsed and filtered large-scale JSON publication datasets, extracting academic contributions by Turkish authors.</li>
              </ul>
              <div className="text-xs text-neutral-700 pt-0.5 font-mono">
                <strong>Technologies:</strong> Python (NumPy, Pandas, TensorFlow, Keras, scikit-learn, NLTK), MongoDB, GitLab
              </div>
            </div>

            <div className="space-y-1.5 text-xs text-neutral-800 pt-2">
              <div className="flex justify-between font-bold text-neutral-950">
                <span>Weather Forecasting Using Data Mining</span>
                <span className="font-mono font-normal">Personal / Academic Project</span>
              </div>
              <ul className="list-disc list-inside space-y-1 pl-1">
                <li>Built an automated Python web scraper to aggregate historical meteorological data.</li>
                <li>Trained ML regression and time-series models for 3-day, 7-day, and 14-day weather forecasting.</li>
              </ul>
              <div className="text-xs text-neutral-700 pt-0.5 font-mono">
                <strong>Technologies:</strong> Python (NumPy, Pandas, scikit-learn, Selenium), GitHub, Google Colab
              </div>
            </div>
          </div>

          {/* EDUCATION & TRAINING */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-neutral-950 border-b border-neutral-300 pb-1">
              EDUCATION & TRAINING
            </h2>
            <div className="space-y-2 text-xs text-neutral-800">
              <div className="flex justify-between font-bold text-neutral-950">
                <span>İzmir Institute of Technology — B.S. in Computer Engineering</span>
                <span className="font-mono">2018 – 2023</span>
              </div>

              <div className="flex justify-between font-semibold text-neutral-950">
                <span>OSF Academy — Salesforce Core Developer (6-Week Intensive Program)</span>
                <span className="font-mono">10/2023 – 11/2023</span>
              </div>
            </div>
          </div>

          {/* TECHNICAL SKILLS & LANGUAGES */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-neutral-950 border-b border-neutral-300 pb-1">
              TECHNICAL SKILLS & LANGUAGES
            </h2>
            <div className="text-xs text-neutral-800 space-y-1">
              <div>
                <strong>Programming Languages:</strong> C++, C, Python, Java, Go, SQL, JavaScript, HTML
              </div>
              <div>
                <strong>Core Domains & Concepts:</strong> Distributed Systems, Computer Networking, Microservices, Big Data, Concurrency, OOP
              </div>
              <div>
                <strong>Tools & Technologies:</strong> Linux/Ubuntu, Docker, Git, MongoDB, MySQL, Elasticsearch, Postman, Google Cloud, Node.js
              </div>
              <div>
                <strong>Languages:</strong> English (Advanced / Professional Working), Turkish (Native)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
