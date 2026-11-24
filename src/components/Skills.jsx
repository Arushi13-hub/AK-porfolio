import React, { useState } from 'react';
import { 
  Filter, 
  Code2, 
  Terminal, 
  Layers, 
  Database, 
  Globe, 
  MapPin, 
  Compass, 
  GitBranch, 
  Cpu, 
  Smartphone, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? skillsData.skills
    : skillsData.skills.filter(s => s.category === activeCategory);

  // Skill-specific contextual icons
  const getSkillIcon = (name) => {
    switch (name) {
      case 'React':
        return Code2;
      case 'JavaScript (ES6+)':
        return Terminal;
      case 'HTML5':
        return Globe;
      case 'CSS3':
        return Layers;
      case 'Responsive Design':
        return Smartphone;
      case 'PWA':
        return Cpu;
      case 'Node.js':
        return Database;
      case 'Express.js':
        return Terminal;
      case 'REST APIs':
        return Globe;
      case 'Leaflet.js':
        return MapPin;
      case 'Overpass API':
        return Compass;
      case 'Geolocation API':
        return MapPin;
      case 'Git':
        return GitBranch;
      case 'GitHub':
        return GithubIcon;
      case 'VS Code':
        return Code2;
      case 'Netlify':
        return Globe;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-32 border-b border-[#D3D4C0]/15 relative bg-[#071d33]/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#D3D4C0]/15">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs tracking-widest text-[#8B5E3C] uppercase font-semibold">
                INDEX // 003
              </span>
              <span className="text-[#D3D4C0]/40">/</span>
              <span className="font-mono text-xs text-[#D3D4C0]/80 uppercase">
                TECHNICAL CAPABILITIES & TOOLING
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F3E4C9] tracking-tight">
              Tech Stack & Core Competencies.
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#D3D4C0] max-w-md font-light">
            A versatile toolkit spanning modern frontend frameworks, real-time spatial APIs, backend services, and deployment pipelines.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="py-8 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-xs font-mono text-[#D3D4C0]/70 mr-1.5 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-[#8B5E3C]" />
              <span>Domain:</span>
            </span>

            {skillsData.categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`tactile-btn px-4 py-2 rounded-md text-xs font-mono tracking-wide transition-all ${
                    isActive
                      ? 'bg-[#8B5E3C] text-[#F3E4C9] font-semibold shadow-warm-glow border border-[#8B5E3C]'
                      : 'bg-[#071d33] text-[#D3D4C0] hover:text-[#F3E4C9] border border-[#D3D4C0]/20 hover:border-[#D3D4C0]/40'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="font-mono text-xs text-[#D3D4C0]/60">
            Displaying <strong className="text-[#F3E4C9]">{filteredSkills.length}</strong> technologies
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredSkills.map((skill) => {
            const Icon = getSkillIcon(skill.name);

            return (
              <div
                key={skill.name}
                className="tactile-card rounded-lg bg-[#071d33] border border-[#D3D4C0]/20 hover:border-[#8B5E3C] p-5 flex flex-col justify-between space-y-4 shadow-editorial-subtle hover:shadow-editorial group cursor-default transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-md bg-[#0A2947] border border-[#D3D4C0]/20 flex items-center justify-center text-[#8B5E3C] group-hover:bg-[#8B5E3C] group-hover:text-[#F3E4C9] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="px-2 py-0.5 rounded bg-[#0A2947] border border-[#D3D4C0]/15 text-[10px] font-mono text-[#D3D4C0]">
                      {skill.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-semibold text-lg text-[#F3E4C9] group-hover:text-[#F3E4C9] tracking-tight">
                      {skill.name}
                    </h3>
                    <p className="font-sans text-xs text-[#D3D4C0] font-light leading-relaxed mt-1">
                      {skill.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#D3D4C0]/10 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#D3D4C0]/60">Proficiency</span>
                  <span className="text-[#8B5E3C] font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5E3C]" />
                    {skill.level}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Banner */}
        <div className="mt-14 p-6 rounded-xl bg-[#071d33] border border-[#D3D4C0]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#8B5E3C] animate-pulse" />
            <span className="font-mono text-xs text-[#F3E4C9]">
              Actively expanding expertise in TypeScript, Next.js, and cloud backends.
            </span>
          </div>

          <a
            href="#projects"
            className="text-xs font-mono text-[#D3D4C0] hover:text-[#F3E4C9] underline underline-offset-4 decoration-[#8B5E3C] transition-colors"
          >
            See skills applied in Projects →
          </a>
        </div>
      </div>
    </section>
  );
}
