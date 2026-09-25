import React from 'react';
import { Code2, Terminal, Database, Server, Languages, Cpu, CheckCircle } from 'lucide-react';
import { cvData } from '../data/cvData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-b border-neutral-800/80 bg-[#0a0c12]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Skills & Technologies
          </h2>
          <p className="text-sm text-neutral-400 font-sans max-w-2xl">
            Proficiencies across programming languages, machine learning frameworks, data persistence layers, and systems engineering.
          </p>
        </div>

        {/* 2-Column Grid: Core Languages vs Technologies */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Programming Languages (From CV) */}
          <div className="lg:col-span-6 bg-[#0e1017] border border-neutral-800 p-6 md:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-2.5">
                <Code2 className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold text-white font-sans">Programming Languages</h3>
              </div>
              <span className="text-[11px] font-mono text-neutral-500 uppercase">CV DIRECT</span>
            </div>

            <div className="space-y-4">
              {cvData.skills.languages.map((lang, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-white">
                      {lang.name}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400">Core</span>
                  </div>
                  <p className="text-xs text-neutral-400 font-mono mt-1">
                    {lang.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies & Frameworks (From CV) */}
          <div className="lg:col-span-6 bg-[#0e1017] border border-neutral-800 p-6 md:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-2.5">
                <Server className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold text-white font-sans">Technologies & Tools</h3>
              </div>
              <span className="text-[11px] font-mono text-neutral-500 uppercase">STACK</span>
            </div>

            <div className="space-y-4">
              {cvData.skills.technologies.map((group, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                    {group.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Spoken Languages & Linguistic Proficiencies (From CV) */}
        <div className="mt-8 bg-[#0e1017] border border-neutral-800 p-6 md:p-8">
          <div className="flex items-center gap-2.5 pb-4 border-b border-neutral-800 mb-6">
            <Languages className="w-5 h-5 text-emerald-400" />
            <h3 className="text-lg font-bold text-white font-sans">Spoken & Written Languages</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {cvData.skills.spokenLanguages.map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-neutral-900/60 border border-neutral-800 space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-sans font-bold text-white text-base">
                    {item.language}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-semibold">
                    {item.proficiency}
                  </span>
                </div>
                <div className="text-xs font-mono text-neutral-500">
                  {item.level}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
