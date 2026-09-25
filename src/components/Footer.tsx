import React, { useState, useEffect } from 'react';
import { ArrowUp, Terminal, Github, Linkedin, Mail } from 'lucide-react';
import { cvData } from '../data/cvData';

export const Footer: React.FC = () => {
  const [izmirTime, setIzmirTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Europe/Istanbul',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date());
        setIzmirTime(timeStr);
      } catch {
        setIzmirTime('20:45:00');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-800 bg-[#07080b] py-12 text-neutral-400 font-mono text-xs">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Left: Identity & Location Time */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-white font-semibold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>FURKAN YAVUZ</span>
            <span className="text-neutral-600">/</span>
            <span className="text-neutral-400 font-normal">SOFTWARE ENGINEER</span>
          </div>
          <div className="text-[11px] text-neutral-500 flex items-center gap-2">
            <span>İzmir, Türkiye</span>
            <span aria-hidden="true">·</span>
            <span>Local Time: {izmirTime || '20:45:00'} TRT</span>
          </div>
        </div>

        {/* Center: Social links */}
        <div className="flex items-center gap-5 text-neutral-400">
          <a
            href={cvData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href={cvData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${cvData.personal.email}`}
            className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
        </div>

        {/* Right: Copyright & Top */}
        <div className="flex items-center gap-6 text-neutral-500">
          <span>&copy; {new Date().getFullYear()} Furkan Yavuz</span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
