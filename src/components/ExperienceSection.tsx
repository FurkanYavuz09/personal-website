import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, Code, Cpu, ExternalLink } from 'lucide-react';
import { cvData } from '../data/cvData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-b border-neutral-800/80 bg-[#0a0c12]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Work Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Engineering Experience
          </h2>
          <p className="text-sm text-neutral-400 font-sans max-w-2xl">
            Commercial and start-up engineering background developing NLP models, document retrieval architectures, and containerized microservices.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {cvData.experience.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#0e1017] border border-neutral-800 hover:border-neutral-700 transition-colors p-6 md:p-8"
            >
              {/* Header row */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-neutral-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                      {exp.role}
                    </h3>
                    <span className="px-2.5 py-0.5 bg-emerald-950/60 border border-emerald-800 text-emerald-400 text-xs font-mono">
                      Internship
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-sm font-mono text-neutral-300">
                    <span className="text-white font-semibold">{exp.company}</span>
                    <span aria-hidden="true" className="text-neutral-700">·</span>
                    <span className="text-neutral-400">{exp.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 bg-neutral-900 px-3 py-1.5 border border-neutral-800 self-start">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Company Summary */}
              <p className="mt-5 text-sm text-neutral-300 leading-relaxed font-sans">
                {exp.description}
              </p>

              {/* Bullet Points directly matching CV */}
              <div className="mt-6 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                  Key Technical Responsibilities & Outcomes:
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

              {/* Technologies & Programming Languages Footer */}
              <div className="mt-8 pt-6 border-t border-neutral-800/80 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-neutral-500 uppercase block mb-1.5 text-[11px]">
                    Technologies Used:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
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
                    Programming Languages:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.languages.map((lang) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};
