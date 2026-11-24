import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Code2, Database, GraduationCap, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  const [activeRole, setActiveRole] = useState('frontend');

  const roleConfigs = {
    frontend: {
      id: 'frontend',
      title: 'Frontend Developer',
      badge: 'INTERFACE ARCHITECTURE',
      icon: Code2,
      subtitle: 'Crafting responsive, accessible, and high-performance user interfaces with React, modern CSS, and delightful micro-interactions.',
      focusArea: 'Component Architecture • Responsive Web Apps • State Management (Zustand/Hooks) • Tactile Design Systems • Core Web Vitals',
      codeSnippet: `// Frontend Developer Profile
const developer = {
  name: "Arushi Karmakar",
  specialization: "Frontend Development",
  coreStack: ["React 18/19", "JavaScript/TypeScript", "Tailwind CSS", "Vite"],
  philosophy: "Building tactile, accessible interfaces that users love.",
  currentFocus: "Micro-animations & Component Architecture"
};

export default function renderExperience() {
  return <AccessibleStudio user={developer} responsive={true} />;
}`
    },
    fullstack: {
      id: 'fullstack',
      title: 'Full-Stack Web Developer',
      badge: 'END-TO-END SYSTEMS',
      icon: Database,
      subtitle: 'Engineering robust end-to-end web applications with scalable backend APIs, structured database models, and clean client integration.',
      focusArea: 'RESTful API Engineering • Node.js & Express / Python • Database Schema Design • Auth Flows • Cloud Deployment (Vercel/Render)',
      codeSnippet: `// Full-Stack Architecture Pipeline
import { createServer } from 'node:http';
import { connectDatabase } from './db';

const app = async () => {
  const db = await connectDatabase('arushi_portfolio_db');
  console.log("Database connected. Syncing APIs...");
  
  return {
    routes: ['/api/projects', '/api/skills', '/api/contact'],
    status: 'READY_FOR_DEPLOYMENT',
    typeSafety: 'End-to-End'
  };
};`
    },
    student: {
      id: 'student',
      title: 'CS Student',
      badge: 'ACADEMIC FOUNDATION',
      icon: GraduationCap,
      subtitle: 'Pursuing Computer Science Engineering with a strong foundation in core computing, data structures, algorithms, and practical software design.',
      focusArea: 'Data Structures & Algorithms • Object-Oriented Programming (Java/C++) • Database Management (SQL) • Computer Networks • Problem Solving',
      codeSnippet: `// Computer Science Engineering Journey
class ComputerScienceStudent {
  constructor(name = "Arushi Karmakar") {
    this.name = name;
    this.degree = "B.Tech in Computer Science Engineering";
    this.coreSubjects = [
      "Data Structures & Algorithms",
      "Operating Systems",
      "DBMS & SQL",
      "Computer Networks"
    ];
    this.passion = "Transforming theoretical algorithms into live software.";
  }
}`
    }
  };

  const currentRole = roleConfigs[activeRole];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden editorial-grid border-b border-[#D3D4C0]/15">
      {/* Subtle warm ambient radial highlight (custom palette, no neon) */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] pointer-events-none opacity-20 blur-3xl rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 94, 60, 0.45) 0%, rgba(10, 41, 71, 0) 70%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Top breadcrumb & Status badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-[#D3D4C0]/15">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs tracking-widest text-[#8B5E3C] uppercase font-semibold">
              INDEX // 001
            </span>
            <span className="text-[#D3D4C0]/40">/</span>
            <span className="font-mono text-xs text-[#D3D4C0]/80 uppercase">
              PORTFOLIO & DEVELOPER SPECIMEN
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071d33] border border-[#D3D4C0]/20 text-[11px] font-mono text-[#F3E4C9]">
            <span className="w-2 h-2 rounded-full bg-[#8B5E3C] animate-pulse" />
            <span>Open to Internships & Software Engineering Roles</span>
          </div>
        </div>

        {/* Main Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Name, Interactive Role Switcher, Bio & CTAs */}
          <div className="lg:col-span-7 space-y-7">
            {/* Identity & Main Name */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#8B5E3C]/15 border border-[#8B5E3C]/30 text-xs font-mono text-[#F3E4C9] tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#8B5E3C]" />
                <span>Personal Developer Portfolio</span>
              </div>

              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-[#F3E4C9]">
                Arushi Karmakar
              </h1>
            </div>

            {/* Interactive Role Switcher Tabs */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#D3D4C0]/75 uppercase">
                <span>Select Developer Dimension:</span>
              </div>

              <div className="inline-flex flex-wrap p-1.5 rounded-lg bg-[#071d33] border border-[#D3D4C0]/25 gap-1.5 shadow-sm">
                {[
                  { id: 'frontend', label: 'Frontend Developer', icon: Code2 },
                  { id: 'fullstack', label: 'Full-Stack Web Developer', icon: Database },
                  { id: 'student', label: 'CS Student', icon: GraduationCap }
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeRole === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveRole(tab.id)}
                      className={`tactile-btn flex items-center gap-2 px-3.5 py-2 rounded-md font-sans text-xs sm:text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-[#8B5E3C] text-[#F3E4C9] shadow-warm-glow font-semibold'
                          : 'text-[#D3D4C0] hover:text-[#F3E4C9] hover:bg-[#0A2947]'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? 'text-[#F3E4C9]' : 'text-[#8B5E3C]'}`} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dynamic Role Subtitle & Highlighted Focus Area */}
            <div className="p-4 sm:p-5 rounded-lg bg-[#071d33]/80 border border-[#D3D4C0]/20 space-y-3 transition-all duration-300">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs text-[#8B5E3C] font-semibold tracking-wider uppercase">
                  {currentRole.badge}
                </span>
                <span className="text-[11px] font-mono text-[#D3D4C0]/60">
                  ACTIVE PROFILE
                </span>
              </div>

              <p className="font-sans text-base text-[#F3E4C9] font-medium leading-relaxed">
                {currentRole.subtitle}
              </p>

              <div className="pt-2 border-t border-[#D3D4C0]/15 space-y-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#D3D4C0]/70 block">
                  Highlighted Focus Area:
                </span>
                <p className="font-mono text-xs text-[#D3D4C0] leading-relaxed">
                  {currentRole.focusArea}
                </p>
              </div>
            </div>

            {/* Official Bio */}
            <div className="space-y-2">
              <p className="font-sans text-base sm:text-lg text-[#D3D4C0] leading-relaxed font-light">
                I am a passionate Computer Science Engineering student with an interest in Web Development, Software Development, and emerging technologies. I enjoy building creative, user-friendly projects, learning new skills, and turning ideas into practical solutions. I am always eager to explore new opportunities and grow as a developer.
              </p>
            </div>

            {/* CTA Buttons & Social Icons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary Explore Projects CTA */}
              <a
                href="#projects"
                className="tactile-btn inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#8B5E3C] hover:bg-[#744d30] text-[#F3E4C9] font-medium text-sm tracking-wide uppercase rounded-md shadow-warm-glow transition-all"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* GitHub Link */}
              <a
                href="https://github.com/Arushi13-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="tactile-btn inline-flex items-center gap-2 px-4 py-3.5 border border-[#D3D4C0]/30 hover:border-[#8B5E3C] text-[#F3E4C9] bg-[#071d33] hover:bg-[#0A2947] font-mono text-xs rounded-md transition-all shadow-sm"
                title="Visit Arushi's GitHub profile"
              >
                <GithubIcon className="w-4 h-4 text-[#8B5E3C]" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D3D4C0]/60" />
              </a>

              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/arushi-karmakar-73b267380"
                target="_blank"
                rel="noopener noreferrer"
                className="tactile-btn inline-flex items-center gap-2 px-4 py-3.5 border border-[#D3D4C0]/30 hover:border-[#8B5E3C] text-[#F3E4C9] bg-[#071d33] hover:bg-[#0A2947] font-mono text-xs rounded-md transition-all shadow-sm"
                title="Visit Arushi's LinkedIn profile"
              >
                <LinkedinIcon className="w-4 h-4 text-[#8B5E3C]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D3D4C0]/60" />
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic Code & Specimen Inspector */}
          <div className="lg:col-span-5">
            <div className="rounded-lg border border-[#D3D4C0]/25 bg-[#071d33] shadow-editorial overflow-hidden">
              {/* Studio Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0A2947] border-b border-[#D3D4C0]/15">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#8B5E3C]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D3D4C0]/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D3D4C0]/20" />
                  <span className="font-mono text-[11px] text-[#D3D4C0]/75 ml-2">
                    arushi-profile // {activeRole}-specimen.ts
                  </span>
                </div>

                <div className="flex items-center gap-1 font-mono text-[10px] text-[#8B5E3C] font-semibold uppercase">
                  ● ACTIVE
                </div>
              </div>

              {/* Specimen Header Meta */}
              <div className="px-4 py-2.5 bg-[#08223c] border-b border-[#D3D4C0]/15 flex items-center justify-between text-xs font-mono text-[#D3D4C0]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#8B5E3C]" />
                  <span className="text-[#F3E4C9] font-medium">{currentRole.title}</span>
                </div>
                <span className="text-[10px] text-[#D3D4C0]/60 uppercase">TypeScript / React</span>
              </div>

              {/* Code Pre Area */}
              <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed overflow-x-auto text-[#D3D4C0] min-h-[260px] bg-[#061a2e]">
                <pre className="whitespace-pre">
                  <code>{currentRole.codeSnippet}</code>
                </pre>
              </div>

              {/* Specimen Footer */}
              <div className="px-4 py-3 bg-[#0A2947] border-t border-[#D3D4C0]/15 flex items-center justify-between text-[11px] font-mono text-[#D3D4C0]/75">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8B5E3C]" />
                  <span>Ready for collaborative engineering</span>
                </span>
                <span className="text-[#8B5E3C] font-semibold">2024–2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
