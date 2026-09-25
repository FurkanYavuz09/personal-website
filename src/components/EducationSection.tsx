import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen, Check } from 'lucide-react';
import { cvData } from '../data/cvData';

export const EducationSection: React.FC = () => {
  const mainDegree = cvData.education[0];
  const otherPrograms = cvData.education.slice(1);

  return (
    <section id="education" className="py-20 border-b border-neutral-800/80">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Education & Certifications
          </h2>
          <p className="text-sm text-neutral-400 font-sans max-w-2xl">
            Formal computer engineering education from İzmir Institute of Technology along with specialized developer programs.
          </p>
        </div>

        {/* Primary Degree Feature */}
        <div className="bg-[#0e1017] border border-neutral-800 p-6 md:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-neutral-800">
            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                <GraduationCap className="w-5 h-5 text-emerald-400" />
                <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                  {mainDegree.degree}
                </h3>
              </div>
              <p className="text-sm font-mono text-emerald-400 font-medium">
                {mainDegree.institution}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 bg-neutral-900 px-3 py-1.5 border border-neutral-800 self-start">
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              <span>{mainDegree.period}</span>
            </div>
          </div>

          <p className="text-sm text-neutral-300 font-sans leading-relaxed">
            {mainDegree.details}
          </p>

          {/* Taken Elective Courses from CV */}
          {mainDegree.electiveCourses && (
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                <span>Taken Elective Courses (From Official Transcript / CV):</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {mainDegree.electiveCourses.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-neutral-900/60 border border-neutral-800 flex items-center gap-2 text-xs font-mono text-neutral-200"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Secondary Programs & Preps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {otherPrograms.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0e1017] border border-neutral-800 p-6 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Program
                  </span>
                </div>
                <span className="text-xs font-mono text-neutral-500">{item.period}</span>
              </div>

              <div>
                <h4 className="text-base font-bold text-white font-sans">
                  {item.degree}
                </h4>
                <p className="text-xs font-mono text-emerald-400 mt-0.5">
                  {item.institution}
                </p>
              </div>

              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
