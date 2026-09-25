import React from 'react';
import { GitBranch, Github, Layers, Code, ArrowUpRight, Database, Terminal, CloudSun } from 'lucide-react';
import { cvData } from '../data/cvData';

export const ProjectsSection: React.FC = () => {
  const thesisProject = cvData.projects.find((p) => p.id === 'thesis-project');
  const weatherProject = cvData.projects.find((p) => p.id === 'weather-forecasting');

  return (
    <section id="projects" className="py-20 border-b border-neutral-800/80">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Engineering & Research</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Key Projects
          </h2>
          <p className="text-sm text-neutral-400 font-sans max-w-2xl">
            Machine learning research at İzmir Institute of Technology and data mining engineering projects.
          </p>
        </div>

        {/* Primary Spotlight: B.Sc. Thesis Project */}
        {thesisProject && (
          <div className="mb-10 bg-[#0e1017] border-2 border-emerald-500/30 hover:border-emerald-500/50 transition-all p-6 md:p-8 relative">
            {/* Top Flag */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-800">
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-0.5 bg-emerald-500 text-black text-xs font-mono font-bold uppercase">
                    Thesis
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    {thesisProject.institution}
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
                  <span>View on GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                </a>
              </div>
            </div>

            {/* Bullets directly from CV */}
            <div className="mt-6 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                Project Deliverables & Architecture:
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

            {/* Bottom Tech Bar */}
            <div className="mt-8 pt-6 border-t border-neutral-800">
              <span className="text-neutral-500 uppercase block mb-2 text-[11px] font-mono">
                Technologies:
              </span>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {thesisProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-neutral-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Second Project: Weather Forecasting Using Data Mining */}
        {weatherProject && (
          <div className="bg-[#0e1017] border border-neutral-800 hover:border-neutral-700 transition-all p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-800">
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-0.5 bg-neutral-800 text-neutral-300 text-xs font-mono uppercase">
                    {weatherProject.type}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-sans mt-2">
                  {weatherProject.title}
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

            {/* Bullets directly from CV */}
            <div className="mt-6 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                Key Highlights:
              </h4>
              <ul className="space-y-2.5 text-sm text-neutral-300 font-sans">
                {weatherProject.highlights.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3">
                    <span className="text-emerald-400 font-mono font-bold mt-0.5">▹</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Tech Bar */}
            <div className="mt-8 pt-6 border-t border-neutral-800">
              <span className="text-neutral-500 uppercase block mb-2 text-[11px] font-mono">
                Technologies:
              </span>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {weatherProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-neutral-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
