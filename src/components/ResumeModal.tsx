import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download, ExternalLink, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
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
Software Engineer
Phone: ${cvData.personal.phone}
Location: ${cvData.personal.location}
Email: ${cvData.personal.email}
GitHub: ${cvData.personal.github}
LinkedIn: ${cvData.personal.linkedin}

SUMMARY
${cvData.personal.summary}

SKILLS
Languages: Python(Tensorflow, sci-kit learn, Flask), Java, C, C++, HTML/CSS/Javascript, SQL
Technologies: Linux(Ubuntu/Mint), Git, MongoDB, MySQL, JSON, Node.js

PROJECTS
Thesis Project: Machine Learning-based Analysis of Scientific and Research Connections
• Developed a keyword based classification algorithm for classifying articles by Sustainable Development Goals using TF-IDF.
• Developed a user based Article Recommendation system by finding a similarity score between Articles.
• Processed extensive JSON data containing articles, extracted articles authored by Turkish writers via python scripts.
Used Technologies: JSON, MongoDB, GitLab, Google Colab
Programming Languages: Python(numpy, pandas, TensorFlow, sci-kit learn, nltk)

EDUCATION
English Language Preparatory Program (2018 - 2019)
İzmir Institute Of Technology (2019 - 2023)
Bachelor of Science - BS, Computer Engineering
Taken Elective Courses: Network Design And Management, Network Programming, Artificial Intelligence, Introduction To Machine Learning, Building Software Systems, Parallel Programming Patterns
OSF Academy Salesforce Core Developer (10/2023 - 11/2023)

EXPERIENCE
Infuseloop - Software Engineer Intern (01/2023 - 02/2023)
• Worked on a question answering system using language models in a start-up company.
• Responsible for creating a pipeline for data collecting and processing.
• Used an Open-source LLM framework 'Haystack' for building an NLP pipeline.
Used Technologies: Hugging Face, Elastic Search, Postman, Docker
Programming Languages: Python(FastAPI, haystack)

LANGUAGES
English - Advanced, Turkish - Native, Mandarin Chinese - Beginner
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
            <span>FURKAN_YAVUZ_CV.pdf</span>
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
              <p className="text-base font-semibold text-neutral-700 mt-0.5">
                Software Engineer
              </p>
            </div>

            <div className="text-xs font-mono text-neutral-800 space-y-1">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-neutral-700" />
                <span>+905458647645</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-neutral-700" />
                <span>İzmir, Türkiye</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-neutral-700" />
                <span>furkanyavuz0926@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-3.5 h-3.5 text-neutral-700" />
                <span>github.com/FurkanYavuz09</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-3.5 h-3.5 text-neutral-700" />
                <span>linkedin.com/in/furkan-yavuz</span>
              </div>
            </div>
          </div>

          {/* SUMMARY & SKILLS Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 space-y-2">
              <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-neutral-950 border-b border-neutral-300 pb-1">
                SUMMARY
              </h2>
              <p className="text-xs text-neutral-800 leading-relaxed">
                I am a New Graduate Software Engineer who is interested in Natural Language Processing, Backend Development and Machine Learning. I am seeking to utilize a broad educational background with excellent analytical, technical and programming skills to thrive as an entry level Software Engineer.
              </p>
            </div>

            <div className="md:col-span-5 space-y-2">
              <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-neutral-950 border-b border-neutral-300 pb-1">
                SKILLS
              </h2>
              <div className="text-xs space-y-1.5 text-neutral-800">
                <div>
                  <strong className="font-semibold">Languages:</strong> Python(Tensorflow, sci-kit learn, Flask), Java, C, C++, HTML/CSS/Javascript, SQL
                </div>
                <div>
                  <strong className="font-semibold">Technologies:</strong> Linux(Ubuntu/Mint), Git, MongoDB, MySQL, JSON, Node.js.
                </div>
              </div>
            </div>
          </div>

          {/* PROJECTS */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-neutral-950 border-b border-neutral-300 pb-1">
              PROJECTS
            </h2>
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
                <span className="font-bold text-neutral-950">Thesis Project: Machine Learning-based Analysis of Scientific and Research Connections</span>
              </div>
              <ul className="list-disc list-inside text-xs text-neutral-800 space-y-1 pl-1">
                <li>Developed a keyword based classification algorithm for classifying articles by Sustainable Development Goals using TF-IDF.</li>
                <li>Developed a user based Article Recommendation system by finding a similarity score between Articles.</li>
                <li>Processed extensive JSON data containing articles, extracted articles authored by Turkish writers via python scripts.</li>
              </ul>
              <div className="text-xs text-neutral-700 pt-1 space-y-0.5 font-mono">
                <div><strong>Used Technologies:</strong> JSON, MongoDB, GitLab, Google Colab</div>
                <div><strong>Programming Languages:</strong> Python(numpy, pandas, TensorFlow, sci-kit learn, nltk)</div>
              </div>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-neutral-950 border-b border-neutral-300 pb-1">
              EDUCATION
            </h2>
            <div className="space-y-2.5 text-xs text-neutral-800">
              <div className="flex justify-between font-semibold text-neutral-950">
                <span>English Language Preparatory Program</span>
                <span className="font-mono">2018 - 2019</span>
              </div>

              <div>
                <div className="flex justify-between font-bold text-neutral-950">
                  <span>İzmir Institute Of Technology</span>
                  <span className="font-mono">2019 - 2023</span>
                </div>
                <div className="italic text-neutral-700">Bachelor of Science - BS, Computer Engineering</div>
                <div className="mt-1">
                  <strong>Taken Elective Courses:</strong> Network Design And Management, Network Programming, Artificial Intelligence, Introduction To Machine Learning, Building Software Systems, Parallel Programming Patterns
                </div>
              </div>

              <div>
                <div className="flex justify-between font-semibold text-neutral-950">
                  <span>OSF Academy Salesforce Core Developer</span>
                  <span className="font-mono">10/2023 - 11/2023</span>
                </div>
                <div className="text-neutral-700">6 Week Salesforce training program</div>
              </div>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-neutral-950 border-b border-neutral-300 pb-1">
              EXPERIENCE
            </h2>
            <div className="space-y-1.5 text-xs text-neutral-800">
              <div className="flex justify-between font-bold text-neutral-950">
                <span>Infuseloop — Software Engineer Intern</span>
                <span className="font-mono">01/2023 – 02/2023</span>
              </div>
              <ul className="list-disc list-inside space-y-1 pl-1">
                <li>I worked on a question answering system using language models in a start-up company. This company focus on accelerating knowledge discovery from documents with AI.</li>
                <li>I was responsible for creating a pipeline for data collecting and processing, creating a reliable model with accurate results.</li>
                <li>I Used a Open-source LLM framework &apos;Haystack&apos; for building a NLP pipeline.</li>
              </ul>
              <div className="text-xs text-neutral-700 pt-1 space-y-0.5 font-mono">
                <div><strong>Used Technologies:</strong> Hugging Face, Elastic Search, Postman, Docker.</div>
                <div><strong>Programming Languages:</strong> Python(FastAPI, haystack)</div>
              </div>
            </div>
          </div>

          {/* LANGUAGES */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-neutral-950 border-b border-neutral-300 pb-1">
              LANGUAGES
            </h2>
            <p className="text-xs text-neutral-800 font-mono">
              English - Advanced, Turkish - Native, Mandarin Chinese - Beginner
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
