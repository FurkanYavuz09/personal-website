import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, Code, Cpu, ExternalLink, Zap } from 'lucide-react';
import { cvData } from '../data/cvData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-b border-neutral-800/80 bg-[#0a0c12]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Professional Work Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Work Experience
          </h2>
          <p className="text-sm text-neutral-400 font-sans max-w-2xl">
            Developing high-performance C++ backend architectures, distributed networking protocols, and scalable microservices.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {cvData.experience.map((exp, idx) => (
            <div
              key={idx}
              className={`bg-[#0e1017] border p-6 md:p-8 transition-colors ${
                exp.isCurrent
                  ? 'border-emerald-500/40 hover:border-emerald-500/70 shadow-lg shadow-emerald-950/20'
                  : 'border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {/* Header row */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-neutral-800">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                      {exp.company}
                    </h3>
                    <span className="text-neutral-500 font-mono text-sm">—</span>
                    <span className="text-lg font-semibold text-emerald-400 font-mono">
                      {exp.role}
                    </span>
                    {exp.isCurrent && (
                      <span className="px-2.5 py-0.5 bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 text-xs font-mono font-medium flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Current Workplace
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-neutral-500" />
                      {exp.location}
                    </span>
                    {exp.startDate && (
                      <>
                        <span aria-hidden="true" className="text-neutral-700">·</span>
                        <span className="text-neutral-300">Started: {exp.startDate}</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-neutral-300 bg-neutral-900 px-3 py-1.5 border border-neutral-800 self-start">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-semibold">{exp.period}</span>
                </div>
              </div>

              {/* Company Context */}
              <p className="mt-5 text-sm text-neutral-300 leading-relaxed font-sans">
                {exp.description}
              </p>

              {/* Bullet Points directly matching CV */}
              <div className="mt-6 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                  Core Responsibilities & Technical Contributions:
                </h4>
                <ul className="space-y-2.5 text-sm text-neutral-300 font-sans">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <span className="text-emerald-400 font-mono font-bold mt-0.5">▹</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used Footer */}
              <div className="mt-8 pt-6 border-t border-neutral-800/80">
                <span className="text-neutral-500 uppercase block mb-2 text-[11px] font-mono">
                  Technologies & Frameworks:
                </span>
                <div className="flex flex-wrap gap-2 font-mono">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 text-xs border ${
                        exp.isCurrent && (tech === 'C++' || tech === 'Networking' || tech === 'Distributed Systems')
                          ? 'bg-emerald-950/40 border-emerald-800 text-emerald-300 font-medium'
                          : 'bg-neutral-900 border-neutral-800 text-neutral-300'
                      }`}
                    >
                      {tech}
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
