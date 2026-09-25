import React, { useState } from 'react';
import {
  Terminal,
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  ArrowRight,
  FileText,
  Copy,
  Check,
  Briefcase,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';
import { cvData } from '../data/cvData';

interface HeroProps {
  onOpenCvModal: () => void;
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenCvModal,
  onExploreProjects,
  onContactClick,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(cvData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="about" className="relative pt-28 md:pt-36 pb-20 border-b border-neutral-800/80">
      {/* Subtle background tech grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Bio / Introduction */}
          <div className="lg:col-span-7 space-y-6">
            {/* Current workplace banner */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/40 border border-emerald-700/60 text-emerald-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-white">ETE Technology</span>
              <span className="text-emerald-500">·</span>
              <span>C++ Software Engineer (Since Feb 19, 2024)</span>
            </div>

            {/* Title & Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-sans">
                {cvData.personal.name}
              </h1>
              <p className="text-xl sm:text-2xl font-mono text-emerald-400 font-medium">
                {cvData.personal.title}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400 pt-1">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                  {cvData.personal.location}
                </span>
                <span aria-hidden="true" className="text-neutral-700">·</span>
                <span className="text-neutral-300">İzmir Institute of Technology (2018 – 2023)</span>
              </div>
            </div>

            {/* Exact CV Summary statement */}
            <div className="p-5 bg-neutral-900/60 border border-neutral-800 text-neutral-300 text-sm leading-relaxed font-sans">
              <p className="border-l-2 border-emerald-400 pl-4">
                &ldquo;{cvData.personal.summary}&rdquo;
              </p>
            </div>

            {/* Quick Contact & Verification row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs font-mono">
              <a
                href={`mailto:${cvData.personal.email}`}
                className="flex items-center justify-between p-3 bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white transition-colors group"
              >
                <div className="flex items-center gap-2.5 truncate">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="truncate">{cvData.personal.email}</span>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    copyEmail();
                  }}
                  title="Copy email address"
                  className="p-1 hover:text-emerald-400 cursor-pointer ml-1"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-neutral-500" />}
                </button>
              </a>

              <a
                href={`tel:${cvData.personal.phoneRaw}`}
                className="flex items-center gap-2.5 p-3 bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white transition-colors truncate"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{cvData.personal.phone}</span>
              </a>

              <a
                href={cvData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="truncate">github.com/{cvData.personal.githubUsername}</span>
              </a>

              <a
                href={cvData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="truncate">linkedin.com/in/{cvData.personal.linkedinUsername}</span>
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#experience"
                className="px-5 py-2.5 bg-emerald-400 hover:bg-emerald-300 text-black font-mono text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Experience at ETE Tech</span>
              </a>

              <button
                onClick={onOpenCvModal}
                className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                <span>View Full CV Sheet</span>
              </button>

              <button
                onClick={onContactClick}
                className="px-5 py-2.5 bg-transparent hover:bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* Right Column: Sharp Technical Terminal Spec Sheet */}
          <div className="lg:col-span-5">
            <div className="bg-[#0e1017] border border-neutral-800 shadow-xl overflow-hidden font-mono text-xs">
              {/* Terminal Window Chrome */}
              <div className="bg-[#141722] px-4 py-2.5 border-b border-neutral-800 flex items-center justify-between text-neutral-400">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] text-neutral-400 ml-2">furkan@ete-tech:~</span>
                </div>
                <span className="text-[10px] text-neutral-500">engineer_spec.env</span>
              </div>

              {/* Terminal Body */}
              <div className="p-5 space-y-4 text-neutral-300">
                <div>
                  <span className="text-emerald-400 font-semibold">$</span> cat current_position.json
                </div>

                <div className="space-y-1.5 bg-[#090a0f] p-3.5 border border-neutral-800/80 text-[11px] text-neutral-300">
                  <div>
                    <span className="text-neutral-500">CURRENT_COMPANY=</span>&quot;ETE Technology&quot;
                  </div>
                  <div>
                    <span className="text-neutral-500">ROLE=</span>&quot;C++ Software Engineer&quot;
                  </div>
                  <div>
                    <span className="text-neutral-500">START_DATE=</span>&quot;2024-02-19 (02/2024 – Present)&quot;
                  </div>
                  <div>
                    <span className="text-neutral-500">CORE_PRODUCT=</span>&quot;nginr (Modern C++)&quot;
                  </div>
                  <div>
                    <span className="text-neutral-500">STACK=</span>[&quot;C++&quot;, &quot;Distributed Systems&quot;, &quot;Networking&quot;, &quot;Microservices&quot;, &quot;Big Data&quot;]
                  </div>
                  <div>
                    <span className="text-neutral-500">ALMA_MATER=</span>&quot;İzmir Institute of Technology (B.S. Comp Eng 2018-2023)&quot;
                  </div>
                </div>

                {/* Key Metric Highlights */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 bg-neutral-900/60 border border-neutral-800">
                    <div className="text-base font-bold text-emerald-400 font-mono">02/2024 – Present</div>
                    <div className="text-[10px] text-neutral-400 uppercase mt-0.5">ETE Technology</div>
                  </div>
                  <div className="p-3 bg-neutral-900/60 border border-neutral-800">
                    <div className="text-base font-bold text-white font-mono">nginr Core</div>
                    <div className="text-[10px] text-neutral-400 uppercase mt-0.5">Modern C++ Product</div>
                  </div>
                  <div className="p-3 bg-neutral-900/60 border border-neutral-800">
                    <div className="text-base font-bold text-white font-mono">İYTE Comp Eng</div>
                    <div className="text-[10px] text-neutral-400 uppercase mt-0.5">2018 – 2023 B.S.</div>
                  </div>
                  <div className="p-3 bg-neutral-900/60 border border-neutral-800">
                    <div className="text-base font-bold text-emerald-400 font-mono">C++, Python, Go</div>
                    <div className="text-[10px] text-neutral-400 uppercase mt-0.5">Languages</div>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-neutral-500 flex items-center justify-between border-t border-neutral-800/80">
                  <span>LOCATION: İZMİR, TÜRKİYE</span>
                  <span className="text-emerald-400">ACTIVE ON nginr</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
