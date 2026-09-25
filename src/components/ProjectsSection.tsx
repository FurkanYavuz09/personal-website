import React from 'react';
import { GitBranch, Github, Layers, Code, ArrowUpRight, Database, Terminal, FileCode } from 'lucide-react';
import { cvData } from '../data/cvData';

export const ProjectsSection: React.FC = () => {
  const thesisProject = cvData.projects.find((p) => p.id === 'thesis-project');
  const otherProjects = cvData.projects.filter((p) => p.id !== 'thesis-project');

  return (
    <section id="projects" className="py-20 border-b border-neutral-800/80">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Technical Projects & Research
          </h2>
          <p className="text-sm text-neutral-400 font-sans max-w-2xl">
            Key research thesis and software engineering systems focusing on Natural Language Processing, text mining, and high-concurrency architectures.
          </p>
        </div>

        {/* Primary Spotlight: B.Sc. Thesis Project */}
        {thesisProject && (
          <div className="mb-12 bg-[#0e1017] border-2 border-emerald-500/30 hover:border-emerald-500/50 transition-all p-6 md:p-8 relative">
            {/* Top Flag */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-800">
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-0.5 bg-emerald-500 text-black text-xs font-mono font-bold uppercase">
                    Core Thesis Project
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    İzmir Institute Of Technology
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-sans mt-2">
                  {thesisProject.title}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={cvData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-xs font-mono text-neutral-200 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5 text-emerald-400" />
                  <span>View Repository</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                </a>
              </div>
            </div>

            {/* Summary */}
            <p className="mt-5 text-sm text-neutral-300 leading-relaxed font-sans max-w-3xl">
              {thesisProject.summary}
            </p>

            {/* Core Accomplishments matching CV exactly */}
            <div className="mt-6 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                Architecture & Engineering Highlights:
              </h4>
              <ul className="space-y-2.5 text-sm text-neutral-300 font-sans">
                {thesisProject.highlights.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3">
                    <span className="text-emerald-400 font-mono font-bold mt-0.5">▹</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Flow diagram/Pipeline representation */}
            <div className="mt-8 p-4 bg-[#090a0f] border border-neutral-800 text-xs font-mono text-neutral-400">
              <div className="text-[11px] text-neutral-500 uppercase mb-3 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>Data Flow Pipeline Architecture:</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 bg-neutral-900 border border-neutral-800">
                  <div className="text-white font-semibold">1. Ingestion</div>
                  <div className="text-[10px] text-neutral-400 mt-1">JSON Corpora Extraction via Python scripts</div>
                </div>
                <div className="p-3 bg-neutral-900 border border-neutral-800">
                  <div className="text-white font-semibold">2. Preprocessing</div>
                  <div className="text-[10px] text-neutral-400 mt-1">NLTK Tokenization & Lemmatization</div>
                </div>
                <div className="p-3 bg-neutral-900 border border-neutral-800">
                  <div className="text-white font-semibold">3. Vectorization</div>
                  <div className="text-[10px] text-neutral-400 mt-1">TF-IDF Keyword & SDG Multi-label Model</div>
                </div>
                <div className="p-3 bg-neutral-900 border border-neutral-800">
                  <div className="text-white font-semibold">4. Recommendation</div>
                  <div className="text-[10px] text-neutral-400 mt-1">Cosine Similarity & MongoDB Index</div>
                </div>
              </div>
            </div>

            {/* Bottom Tech Bar */}
            <div className="mt-8 pt-6 border-t border-neutral-800 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <span className="text-neutral-500 uppercase block mb-1.5 text-[11px]">
                  Used Technologies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {thesisProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-neutral-500 uppercase block mb-1.5 text-[11px]">
                  Programming Languages & Libraries:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {thesisProject.programmingLanguages.map((lang) => (
                    <span
                      key={lang}
                      className="px-2 py-1 bg-emerald-950/40 border border-emerald-900 text-emerald-300 text-xs"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Systems Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0e1017] border border-neutral-800 hover:border-neutral-700 transition-colors p-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400 uppercase tracking-wider">{project.type}</span>
                  <span className="text-neutral-500">{project.period}</span>
                </div>

                <h4 className="text-lg font-bold text-white font-sans">
                  {project.title}
                </h4>

                <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                  {project.summary}
                </p>

                <ul className="space-y-2 text-xs text-neutral-400 font-sans">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono">▹</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800/80 space-y-2 text-xs font-mono">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.concat(project.programmingLanguages).map((t, idx) => (
                    <span
                      key={idx}
                      className="px-1.5 py-0.5 bg-neutral-900 text-neutral-400 border border-neutral-800 text-[11px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
