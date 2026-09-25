import React from 'react';
import { Code2, Server, Cpu, Layers, Languages, Check } from 'lucide-react';
import { cvData } from '../data/cvData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-b border-neutral-800/80 bg-[#0a0c12]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Technical Skills & Languages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Technical Stack
          </h2>
          <p className="text-sm text-neutral-400 font-sans max-w-2xl">
            Specialized in low-level high-performance C++, distributed systems architecture, microservices, and big data concurrency.
          </p>
        </div>

        {/* 3-Column / 2-Row Layout Matching CV Categories */}
        <div className="space-y-8">
          {/* Programming Languages */}
          <div className="bg-[#0e1017] border border-neutral-800 p-6 md:p-8 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-2.5">
                <Code2 className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold text-white font-sans">Programming Languages</h3>
              </div>
              <span className="text-xs font-mono text-neutral-500">C++, C, Python, Java, Go, SQL, JS, HTML</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {cvData.skills.programmingLanguages.map((lang, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 border transition-colors ${
                    lang.name === 'C++' || lang.name === 'C'
                      ? 'bg-emerald-950/20 border-emerald-800/80'
                      : 'bg-neutral-900/60 border-neutral-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-white">
                      {lang.name}
                    </span>
                    {lang.name === 'C++' && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 bg-emerald-500 text-black font-semibold">
                        Primary
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-neutral-400 font-mono mt-1 leading-normal">
                    {lang.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Core Domains & Concepts */}
            <div className="lg:col-span-6 bg-[#0e1017] border border-neutral-800 p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-neutral-800">
                <Cpu className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold text-white font-sans">Core Domains & Concepts</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {cvData.skills.coreDomains.map((domain, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-neutral-900/60 border border-neutral-800 flex items-center gap-2 text-xs font-mono text-neutral-200"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{domain}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="lg:col-span-6 bg-[#0e1017] border border-neutral-800 p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-neutral-800">
                <Server className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold text-white font-sans">Tools & Technologies</h3>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {cvData.skills.toolsAndTechnologies.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="bg-[#0e1017] border border-neutral-800 p-6 md:p-8">
            <div className="flex items-center gap-2.5 pb-3 border-b border-neutral-800 mb-5">
              <Languages className="w-5 h-5 text-emerald-400" />
              <h3 className="text-lg font-bold text-white font-sans">Languages</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cvData.skills.spokenLanguages.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-neutral-900/60 border border-neutral-800 flex items-center justify-between"
                >
                  <span className="font-sans font-bold text-white text-base">
                    {item.language}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-semibold px-2 py-0.5 bg-emerald-950/60 border border-emerald-900">
                    {item.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
