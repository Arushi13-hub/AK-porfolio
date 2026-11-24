import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Filter, Layers, Sparkles, MapPin, Music, CloudSun, Compass } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filterTabs = ['All', 'React', 'APIs & Maps', 'Web Apps'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.categories.includes(selectedCategory));

  const projectIcons = {
    'cafe-finder': MapPin,
    'beatverse': Music,
    'weatherly': CloudSun,
    'tripnest': Compass,
  };

  return (
    <section id="projects" className="py-24 sm:py-32 border-b border-[#D3D4C0]/15 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#D3D4C0]/15">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs tracking-widest text-[#8B5E3C] uppercase font-semibold">
                INDEX // 002
              </span>
              <span className="text-[#D3D4C0]/40">/</span>
              <span className="font-mono text-xs text-[#D3D4C0]/80 uppercase">
                ENGINEERING PORTFOLIO & CODE SHOWCASE
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F3E4C9] tracking-tight">
              Selected Projects & Applications.
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#D3D4C0] max-w-md font-light">
            Interactive, user-friendly web solutions built with modern component architectures, live APIs, and responsive design systems.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="py-8 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-xs font-mono text-[#D3D4C0]/70 mr-1.5 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-[#8B5E3C]" />
              <span>Category Filter:</span>
            </span>

            {filterTabs.map((tab) => {
              const isActive = selectedCategory === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setSelectedCategory(tab)}
                  className={`tactile-btn px-4 py-1.5 rounded-md text-xs font-mono tracking-wide transition-all ${
                    isActive
                      ? 'bg-[#8B5E3C] text-[#F3E4C9] font-semibold shadow-warm-glow border border-[#8B5E3C]'
                      : 'bg-[#071d33] text-[#D3D4C0] hover:text-[#F3E4C9] border border-[#D3D4C0]/20 hover:border-[#D3D4C0]/40'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <div className="font-mono text-xs text-[#D3D4C0]/60">
            Showing <strong className="text-[#F3E4C9]">{filteredProjects.length}</strong> of {projects.length} works
          </div>
        </div>

        {/* 3-Card Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const IconComponent = projectIcons[project.id] || Sparkles;

            return (
              <article
                key={project.id}
                className="group tactile-card rounded-xl bg-[#071d33] border border-[#D3D4C0]/20 hover:border-[#8B5E3C]/60 overflow-hidden flex flex-col justify-between shadow-editorial-subtle hover:shadow-editorial transition-all duration-300"
              >
                {/* Visual Media Header / Exhibit View */}
                <div
                  className="relative aspect-[16/10] overflow-hidden bg-[#061a2e] cursor-pointer"
                  onClick={() => setActiveModalProject(project)}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} Exhibit`}
                    className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0A2947]/35 group-hover:bg-transparent transition-colors" />

                  {/* Corner Index Tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0A2947]/90 backdrop-blur-sm border border-[#D3D4C0]/20 font-mono text-[10px] text-[#F3E4C9] flex items-center gap-1.5">
                    <IconComponent className="w-3 h-3 text-[#8B5E3C]" />
                    <span>0{index + 1} // {project.primaryCategory}</span>
                  </div>

                  {/* Corner Expand Action */}
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded bg-[#0A2947]/90 backdrop-blur-sm border border-[#D3D4C0]/20 font-mono text-[10px] text-[#D3D4C0] group-hover:text-[#F3E4C9] group-hover:bg-[#8B5E3C] transition-all flex items-center gap-1 shadow-sm">
                    <span>Inspect Details</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    {/* Category pill chips */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.categories.map((cat) => (
                        <span
                          key={cat}
                          className="px-2 py-0.5 rounded bg-[#0A2947] border border-[#D3D4C0]/20 text-[10px] font-mono text-[#8B5E3C] font-medium"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    {/* Title & Tagline */}
                    <h3
                      onClick={() => setActiveModalProject(project)}
                      className="font-display font-bold text-2xl text-[#F3E4C9] group-hover:text-[#F3E4C9] cursor-pointer tracking-tight"
                    >
                      {project.title}
                    </h3>

                    <p className="font-sans text-xs font-medium text-[#8B5E3C] tracking-wide">
                      {project.tagline}
                    </p>

                    <p className="font-sans text-sm text-[#D3D4C0] leading-relaxed line-clamp-3 font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="space-y-2 pt-2 border-t border-[#D3D4C0]/15">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-[#0A2947] border border-[#D3D4C0]/15 font-mono text-[10px] text-[#D3D4C0]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Bottom Action Buttons: Live Demo + GitHub */}
                <div className="px-6 py-4 bg-[#0A2947] border-t border-[#D3D4C0]/15 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-mono text-[#D3D4C0] hover:text-[#F3E4C9] underline underline-offset-4 decoration-[#8B5E3C] transition-colors"
                  >
                    Architectural Spec
                  </button>

                  <div className="flex items-center gap-2">
                    {/* Live Demo CTA */}
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tactile-btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#8B5E3C] hover:bg-[#744d30] text-[#F3E4C9] text-xs font-mono font-medium tracking-wide shadow-sm"
                      title={`Launch ${project.title} live app`}
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    {/* GitHub Code Link */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tactile-btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#071d33] hover:bg-[#061a2e] border border-[#D3D4C0]/25 text-[#D3D4C0] hover:text-[#F3E4C9] text-xs font-mono"
                      title={`View ${project.title} on GitHub`}
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-[#8B5E3C]" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Detail Modal Component */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
