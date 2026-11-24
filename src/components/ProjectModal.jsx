import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Activity, Cpu, Layers, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('architecture');
  const [selectedImage, setSelectedImage] = useState(0);

  // Close on Escape key & disable background body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#061a2e]/85 backdrop-blur-md transition-all duration-300 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0A2947] border border-[#D3D4C0]/30 rounded-xl shadow-editorial overflow-hidden flex flex-col text-[#F3E4C9]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D3D4C0]/15 bg-[#071d33]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#8B5E3C] font-semibold tracking-wider uppercase">
              ARCHITECTURAL SPECIFICATION // {project.year}
            </span>
            <span className="text-[#D3D4C0]/30">|</span>
            <div className="flex gap-1.5">
              {project.categories.map((cat) => (
                <span
                  key={cat}
                  className="px-2.5 py-0.5 rounded-full bg-[#0A2947] border border-[#D3D4C0]/20 text-[10px] font-mono text-[#D3D4C0]"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-[#D3D4C0] hover:text-[#F3E4C9] hover:bg-[#0A2947] border border-transparent hover:border-[#D3D4C0]/25 transition-all tactile-btn"
            aria-label="Close modal dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-7 flex-1">
          {/* Title & Tagline */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#8B5E3C]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{project.role}</span>
            </div>

            <h2 id="modal-title" className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#F3E4C9] tracking-tight">
              {project.title}
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#D3D4C0] font-light">
              {project.tagline}
            </p>
          </div>

          {/* Exhibit Media View */}
          <div className="space-y-3">
            <div className="relative aspect-video rounded-lg overflow-hidden border border-[#D3D4C0]/25 bg-[#061a2e]">
              <img
                src={project.gallery ? project.gallery[selectedImage] : project.image}
                alt={`${project.title} showcase`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1 bg-[#0A2947]/90 backdrop-blur-sm border border-[#D3D4C0]/20 rounded text-[11px] font-mono text-[#F3E4C9]">
                Exhibit {selectedImage + 1} of {project.gallery ? project.gallery.length : 1}
              </div>
            </div>

            {/* Thumbnail selector */}
            {project.gallery && project.gallery.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto pb-1">
                {project.gallery.map((thumb, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-14 rounded overflow-hidden border transition-all flex-shrink-0 ${
                      selectedImage === index
                        ? 'border-[#8B5E3C] ring-2 ring-[#8B5E3C]/40 opacity-100'
                        : 'border-[#D3D4C0]/20 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={thumb} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Deep-Dive Navigation Tabs */}
          <div className="border-b border-[#D3D4C0]/15 flex gap-6 text-xs font-mono">
            {[
              { id: 'architecture', label: '01 // Architectural Highlights' },
              { id: 'overview', label: '02 // System Overview' },
              { id: 'metrics', label: '03 // Performance Telemetry' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-2.5 border-b-2 transition-all ${
                  activeTab === tab.id
                    ? 'border-[#8B5E3C] text-[#F3E4C9] font-semibold'
                    : 'border-transparent text-[#D3D4C0]/60 hover:text-[#D3D4C0]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Architectural Highlights */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              {/* Challenge & Solution Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-[#071d33] border border-[#D3D4C0]/15 space-y-2">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#8B5E3C] font-semibold uppercase">
                    <Activity className="w-4 h-4" />
                    <span>Engineering Challenge</span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#D3D4C0] leading-relaxed">
                    {project.architecture.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#071d33] border border-[#D3D4C0]/15 space-y-2">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#F3E4C9] font-semibold uppercase">
                    <Cpu className="w-4 h-4 text-[#8B5E3C]" />
                    <span>Architectural Solution</span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#D3D4C0] leading-relaxed">
                    {project.architecture.solution}
                  </p>
                </div>
              </div>

              {/* Key Features Checklist */}
              <div className="p-4 rounded-lg bg-[#071d33] border border-[#D3D4C0]/15 space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#8B5E3C] font-semibold block">
                  Core Technical Capabilities
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.architecture.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#D3D4C0]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8B5E3C] flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: System Overview & Tech Stack */}
          {activeTab === 'overview' && (
            <div className="space-y-5">
              <p className="font-sans text-sm sm:text-base text-[#D3D4C0] leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-3 pt-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#8B5E3C] font-semibold block">
                  Applied Technology Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded bg-[#071d33] border border-[#D3D4C0]/20 text-xs font-mono text-[#F3E4C9]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Performance Telemetry */}
          {activeTab === 'metrics' && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.architecture.metrics.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-[#071d33] border border-[#D3D4C0]/15 space-y-1">
                    <span className="font-mono text-[11px] text-[#D3D4C0]/70 uppercase">
                      {m.label}
                    </span>
                    <div className="font-display font-bold text-xl text-[#F3E4C9]">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
              <p className="font-mono text-xs text-[#D3D4C0]/60 italic">
                * Benchmarks collected through local performance audits and live deployed browser sessions.
              </p>
            </div>
          )}
        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-4 bg-[#071d33] border-t border-[#D3D4C0]/15 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tactile-btn inline-flex items-center gap-2 px-5 py-2.5 bg-[#8B5E3C] hover:bg-[#744d30] text-[#F3E4C9] text-xs font-mono uppercase tracking-wider font-semibold rounded-md shadow-sm"
            >
              <span>Launch Live Interface</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tactile-btn inline-flex items-center gap-2 px-4 py-2.5 bg-[#0A2947] hover:bg-[#071d33] border border-[#D3D4C0]/25 text-[#D3D4C0] hover:text-[#F3E4C9] text-xs font-mono rounded-md"
            >
              <GithubIcon className="w-3.5 h-3.5 text-[#8B5E3C]" />
              <span>Inspect Source</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono text-[#D3D4C0]/70 hover:text-[#F3E4C9] underline underline-offset-4"
          >
            Close Specification [ESC]
          </button>
        </div>
      </div>
    </div>
  );
}
