/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-[#e2e8f0] flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Top Anchor */}
      <div id="top" />

      {/* Top Navbar */}
      <Navbar
        onContactClick={scrollToContact}
        onOpenCvModal={() => setIsCvModalOpen(true)}
      />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenCvModal={() => setIsCvModalOpen(true)}
          onExploreProjects={scrollToProjects}
          onContactClick={scrollToContact}
        />

        {/* Experience Section (Infuseloop NLP) */}
        <ExperienceSection />

        {/* Projects Section (Thesis & Engineering Systems) */}
        <ProjectsSection />

        {/* Skills Section (Languages, Stack, Spoken Languages) */}
        <SkillsSection />

        {/* Education Section (İYTE, Elective courses, OSF Academy) */}
        <EducationSection />

        {/* Technical Blog / Engineering Updates */}
        <BlogSection />

        {/* Contact & Direct Inquiries */}
        <ContactSection />
      </main>

      {/* Printable / Viewable CV Modal */}
      <ResumeModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
