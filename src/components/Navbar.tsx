import React, { useState, useEffect } from 'react';
import { Terminal, FileText, Mail, Github, Linkedin, Menu, X, ArrowUpRight } from 'lucide-react';
import { cvData } from '../data/cvData';

interface NavbarProps {
  onContactClick: () => void;
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick, onOpenCvModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#090a0f]/90 backdrop-blur-md border-b border-neutral-800/80 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Brand / Name */}
        <a
          href="#top"
          className="flex items-center gap-2.5 text-neutral-100 hover:text-emerald-400 transition-colors group"
        >
          <div className="w-7 h-7 bg-neutral-900 border border-neutral-700 flex items-center justify-center font-mono text-xs text-emerald-400 font-semibold group-hover:border-emerald-500/50">
            FY
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm font-semibold tracking-wider text-white uppercase">
              {cvData.personal.name}
            </span>
            <span className="text-[10px] font-mono text-neutral-400 tracking-tight">
              Software Engineer · İzmir
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-wider text-neutral-400">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors hover:text-emerald-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCvModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-neutral-300 bg-neutral-900/80 hover:bg-neutral-800 hover:text-white border border-neutral-700/80 transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span>CV Sheet</span>
          </button>

          <button
            onClick={onContactClick}
            className="px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider font-medium text-black bg-emerald-400 hover:bg-emerald-300 border border-emerald-400 transition-all cursor-pointer flex items-center gap-1"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden p-1.5 text-neutral-400 hover:text-white border border-neutral-800 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0e14] border-b border-neutral-800 px-6 py-6 font-mono text-xs uppercase tracking-wider">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-300 hover:text-emerald-400 py-1.5 border-b border-neutral-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCvModal();
                }}
                className="flex-1 py-2 text-center bg-neutral-900 border border-neutral-700 text-neutral-200 text-xs"
              >
                View CV Sheet
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
