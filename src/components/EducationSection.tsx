import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen, Check } from 'lucide-react';
import { cvData } from '../data/cvData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 border-b border-neutral-800/80">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Academic Background & Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Education & Training
          </h2>
          <p className="text-sm text-neutral-400 font-sans max-w-2xl">
            Computer engineering foundation from İzmir Institute of Technology and specialized enterprise developer certification.
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-6">
          {cvData.education.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0e1017] border border-neutral-800 p-6 md:p-8 space-y-4 hover:border-neutral-700 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-neutral-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    {idx === 0 ? (
                      <GraduationCap className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Award className="w-5 h-5 text-emerald-400" />
                    )}
                    <h3 className="text-xl font-bold text-white font-sans">
                      {item.degree}
                    </h3>
                  </div>
                  <p className="text-sm font-mono text-emerald-400 font-medium">
                    {item.institution}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-neutral-300 bg-neutral-900 px-3 py-1.5 border border-neutral-800 self-start">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-semibold">{item.period}</span>
                </div>
              </div>

              {item.details && (
                <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                  {item.details}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
