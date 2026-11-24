import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  ArrowUpRight, 
  CheckCircle2, 
  BookOpen, 
  Award,
  Sparkles
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('internships'); // 'internships' | 'education'

  return (
    <section id="experience" className="py-24 sm:py-32 border-b border-[#D3D4C0]/15 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#D3D4C0]/15">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs tracking-widest text-[#8B5E3C] uppercase font-semibold">
                INDEX // 004
              </span>
              <span className="text-[#D3D4C0]/40">/</span>
              <span className="font-mono text-xs text-[#D3D4C0]/80 uppercase">
                TRAJECTORY, INDUSTRY INTERNSHIPS & EDUCATION
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F3E4C9] tracking-tight">
              Experience & Academic Foundation.
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#D3D4C0] max-w-md font-light">
            Hands-on software development experience through corporate internships complemented by formal computer science engineering education.
          </p>
        </div>

        {/* Interactive Tab Switcher: Internships vs Education */}
        <div className="pt-10 pb-8 flex items-center justify-between flex-wrap gap-4">
          <div className="inline-flex p-1.5 rounded-lg bg-[#071d33] border border-[#D3D4C0]/25 gap-2 shadow-sm">
            <button
              onClick={() => setActiveTab('internships')}
              className={`tactile-btn flex items-center gap-2.5 px-5 py-2.5 rounded-md font-mono text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'internships'
                  ? 'bg-[#8B5E3C] text-[#F3E4C9] shadow-warm-glow font-semibold'
                  : 'text-[#D3D4C0] hover:text-[#F3E4C9] hover:bg-[#0A2947]'
              }`}
            >
              <Briefcase className="w-4 h-4 text-[#F3E4C9]" />
              <span>Internships ({experienceData.internships.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`tactile-btn flex items-center gap-2.5 px-5 py-2.5 rounded-md font-mono text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'education'
                  ? 'bg-[#8B5E3C] text-[#F3E4C9] shadow-warm-glow font-semibold'
                  : 'text-[#D3D4C0] hover:text-[#F3E4C9] hover:bg-[#0A2947]'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-[#F3E4C9]" />
              <span>Education ({experienceData.education.length})</span>
            </button>
          </div>

          <div className="font-mono text-xs text-[#D3D4C0]/70 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8B5E3C] animate-pulse" />
            <span>Active View: {activeTab === 'internships' ? 'Industry Internships' : 'University Education'}</span>
          </div>
        </div>

        {/* Tab 1: Internships Timeline */}
        {activeTab === 'internships' && (
          <div className="space-y-8 relative animate-fadeIn">
            {/* Vertical timeline line */}
            <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-[1px] bg-[#D3D4C0]/20" />

            {experienceData.internships.map((internship, index) => (
              <div 
                key={internship.company}
                className="relative sm:pl-20 group"
              >
                {/* Timeline node */}
                <div className="hidden sm:flex absolute left-8 top-3 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0A2947] border-2 border-[#8B5E3C] items-center justify-center group-hover:scale-125 transition-transform">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B5E3C]" />
                </div>

                <div className="tactile-card rounded-xl bg-[#071d33] border border-[#D3D4C0]/20 hover:border-[#8B5E3C] p-6 sm:p-8 space-y-6 shadow-editorial-subtle transition-all duration-300">
                  {/* Top Bar with Role, Company, Period */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-[#D3D4C0]/15">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-[#8B5E3C] font-semibold tracking-wider uppercase">
                          0{index + 1} // {internship.type}
                        </span>
                        <span className="text-[#D3D4C0]/30">•</span>
                        <span className="flex items-center gap-1 font-mono text-xs text-[#D3D4C0]/75">
                          <Calendar className="w-3.5 h-3.5 text-[#8B5E3C]" />
                          <span>{internship.period}</span>
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F3E4C9] tracking-tight mt-1">
                        {internship.role}
                      </h3>

                      <div className="flex items-center gap-4 text-xs font-mono text-[#D3D4C0] mt-1.5">
                        <span className="text-[#F3E4C9] font-medium text-sm">{internship.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-[#D3D4C0]/70">
                          <MapPin className="w-3 h-3 text-[#8B5E3C]" />
                          <span>{internship.location}</span>
                        </span>
                      </div>
                    </div>

                    {/* Quick skills tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {internship.skills.map((s) => (
                        <span 
                          key={s}
                          className="px-2.5 py-1 rounded bg-[#0A2947] border border-[#D3D4C0]/15 text-[11px] font-mono text-[#D3D4C0]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="font-sans text-sm sm:text-base text-[#D3D4C0] font-light leading-relaxed">
                    {internship.summary}
                  </p>

                  {/* Key Contributions & Deliverables */}
                  <div className="space-y-3 pt-1">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#8B5E3C] font-semibold block">
                      Core Contributions & Work Done
                    </span>
                    <ul className="space-y-2.5">
                      {internship.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-[#D3D4C0]/90 font-sans">
                          <CheckCircle2 className="w-4 h-4 text-[#8B5E3C] flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Education Timeline */}
        {activeTab === 'education' && (
          <div className="space-y-8 relative animate-fadeIn">
            {/* Vertical timeline line */}
            <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-[1px] bg-[#D3D4C0]/20" />

            {experienceData.education.map((edu, index) => (
              <div 
                key={edu.institution}
                className="relative sm:pl-20 group"
              >
                {/* Timeline node */}
                <div className="hidden sm:flex absolute left-8 top-3 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0A2947] border-2 border-[#8B5E3C] items-center justify-center group-hover:scale-125 transition-transform">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B5E3C]" />
                </div>

                <div className="tactile-card rounded-xl bg-[#071d33] border border-[#D3D4C0]/20 hover:border-[#8B5E3C] p-6 sm:p-8 space-y-6 shadow-editorial-subtle transition-all duration-300">
                  {/* Top Bar with Degree, Institution, Timeline */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-[#D3D4C0]/15">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-[#8B5E3C] font-semibold tracking-wider uppercase">
                          ACADEMIC PROGRAM
                        </span>
                        <span className="text-[#D3D4C0]/30">•</span>
                        <span className="flex items-center gap-1 font-mono text-xs text-[#D3D4C0]/75">
                          <Calendar className="w-3.5 h-3.5 text-[#8B5E3C]" />
                          <span>{edu.period}</span>
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F3E4C9] tracking-tight mt-1">
                        {edu.degree}
                      </h3>

                      <div className="flex items-center gap-4 text-xs font-mono text-[#D3D4C0] mt-1.5">
                        <span className="text-[#F3E4C9] font-medium text-sm">{edu.institution}</span>
                        <span>•</span>
                        <span className="px-2 py-0.5 rounded bg-[#0A2947] border border-[#D3D4C0]/15 text-[10px] text-[#8B5E3C] font-semibold">
                          {edu.status}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="px-3.5 py-1.5 rounded-md bg-[#0A2947] border border-[#D3D4C0]/20 text-xs font-mono text-[#F3E4C9] flex items-center gap-2">
                        <BookOpen className="w-3.5 h-3.5 text-[#8B5E3C]" />
                        <span>B.Tech CSE</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="font-sans text-sm sm:text-base text-[#D3D4C0] font-light leading-relaxed">
                    {edu.summary}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3 pt-1">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#8B5E3C] font-semibold block">
                      Academic Highlights & Coursework
                    </span>
                    <ul className="space-y-2.5">
                      {edu.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-[#D3D4C0]/90 font-sans">
                          <CheckCircle2 className="w-4 h-4 text-[#8B5E3C] flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Coursework Tags */}
                  <div className="pt-3 border-t border-[#D3D4C0]/15 space-y-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#D3D4C0]/70 block">
                      Core Subjects Studied:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-2.5 py-1 rounded bg-[#0A2947] border border-[#D3D4C0]/15 text-xs font-mono text-[#D3D4C0]"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA to get in touch */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl bg-[#071d33] border border-[#D3D4C0]/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display font-bold text-lg text-[#F3E4C9]">
              Seeking Full-Stack or Frontend Software Engineering Roles?
            </h4>
            <p className="font-sans text-xs sm:text-sm text-[#D3D4C0] font-light">
              I am eager to contribute to innovative development teams and practical web projects.
            </p>
          </div>

          <a
            href="#contact"
            className="tactile-btn inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#8B5E3C] hover:bg-[#744d30] text-[#F3E4C9] text-xs font-mono font-semibold uppercase tracking-wider shadow-warm-glow flex-shrink-0"
          >
            <span>Initiate Contact</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
