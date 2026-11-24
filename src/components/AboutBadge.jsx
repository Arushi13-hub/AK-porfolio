import React, { useState } from 'react';
import { Briefcase, GraduationCap, Mail, Sparkles, ExternalLink, QrCode, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function AboutBadge({ isDark }) {
  const [isBadgeHovered, setIsBadgeHovered] = useState(false);

  const techStack = [
    'React', 'JS', 'Node', 'CSS3', 'Leaflet', 'Git', 'PWA', 'Netlify'
  ];

  return (
    <section id="about" className="relative w-full overflow-hidden border-b poster-hairline py-20 sm:py-28 transition-colors duration-300">
      {/* Ghost Background Accent */}
      <div 
        className="ghost-watermark absolute top-10 right-6 text-[18vw] font-display pointer-events-none text-current"
        aria-hidden="true"
      >
        ABOUT
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        {/* Top Centered Intro Block */}
        <div className="max-w-3xl mx-auto text-center space-y-4 pb-16 border-b poster-hairline">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border poster-hairline font-mono text-xs uppercase tracking-section opacity-75">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            <span>Developer Overview & Credentials</span>
          </div>

          <h2 className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl tracking-heading">
            Hi, I'm Arushi
          </h2>

          <p className="font-sans text-base sm:text-lg leading-relaxed opacity-85 font-light">
            I am a passionate Computer Science Engineering student with an interest in Web Development, Software Development, and emerging technologies. I enjoy building creative, user-friendly projects, learning new skills, and turning ideas into practical solutions. I am always eager to explore new opportunities and grow as a developer.
          </p>
        </div>

        {/* 2-Column Editorial Grid: Left Lanyard ID Card | Right 3-Column Structured Resume Grid */}
        <div className="pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Interactive Hanging Lanyard ID Card */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            {/* Hanging Lanyard Strap & Clip Visuals */}
            <div className="flex flex-col items-center w-full">
              {/* Lanyard Cord */}
              <div className={`w-3.5 h-14 sm:h-20 rounded-t-sm shadow-inner transition-colors duration-300 ${
                isDark ? 'bg-[#8B5E3C]' : 'bg-[#111111]'
              }`} />

              {/* Metallic Clasp / Keyring */}
              <div className="w-8 h-4 rounded-sm bg-gradient-to-b from-neutral-300 to-neutral-400 border border-neutral-500 shadow-sm flex items-center justify-center">
                <div className="w-3 h-1.5 rounded-full bg-neutral-700" />
              </div>
              <div className="w-4 h-3 border-2 border-neutral-400 border-t-0 rounded-b-md" />

              {/* Hanging White Badge Container with Swing/Tilt Physics */}
              <div
                onMouseEnter={() => setIsBadgeHovered(true)}
                onMouseLeave={() => setIsBadgeHovered(false)}
                className="relative cursor-pointer transition-transform duration-500 ease-out origin-top w-full max-w-[290px]"
                style={{
                  transform: isBadgeHovered 
                    ? 'rotate(2deg) translateY(4px) scale(1.02)' 
                    : 'rotate(-2.5deg) translateY(0px)'
                }}
              >
                {/* Physical ID Card Surface */}
                <div className="rounded-2xl bg-white text-[#111111] p-6 shadow-2xl border border-neutral-200 space-y-5 relative overflow-hidden">
                  {/* Subtle security holographic stripe */}
                  <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-emerald-500/10 via-amber-500/5 to-transparent pointer-events-none" />

                  {/* Hole Punch Slot at Top */}
                  <div className="w-10 h-2.5 rounded-full bg-neutral-200 border border-neutral-300 mx-auto shadow-inner" />

                  {/* Badge Header & Organization */}
                  <div className="text-center space-y-1">
                    <span className="font-mono text-[9px] tracking-widest uppercase font-semibold text-neutral-400 block">
                      OFFICIAL IDENTIFICATION // ACCESS DECK
                    </span>
                    <div className="font-mono text-[11px] font-bold tracking-wider text-emerald-700 uppercase">
                      STUDENT & SOFTWARE DEVELOPER
                    </div>
                  </div>

                  {/* Avatar / Monogram Box */}
                  <div className="w-24 h-24 mx-auto rounded-xl bg-gradient-to-br from-[#0A2947] to-[#111111] p-1 shadow-md flex items-center justify-center text-white relative">
                    <div className="w-full h-full rounded-lg bg-[#071d33] flex flex-col items-center justify-center border border-white/10">
                      <span className="font-display font-black text-2xl tracking-tighter text-[#F3E4C9]">
                        AK
                      </span>
                      <span className="font-mono text-[8px] tracking-widest text-[#D3D4C0]/70 uppercase">
                        VERIFIED
                      </span>
                    </div>

                    {/* Security chip overlay */}
                    <div className="absolute -bottom-2 -right-2 w-7 h-6 rounded bg-amber-400 border border-amber-600 shadow-xs flex items-center justify-center">
                      <div className="w-4 h-3 border border-amber-800/40 rounded-xs grid grid-cols-2 gap-0.5">
                        <div className="bg-amber-600/30" />
                        <div className="bg-amber-600/30" />
                      </div>
                    </div>
                  </div>

                  {/* Identity Details */}
                  <div className="text-center space-y-1 pt-1">
                    <h3 className="font-display font-extrabold text-xl tracking-tight text-neutral-900 leading-none">
                      ARUSHI KARMAKAR
                    </h3>
                    <div className="font-mono text-xs font-semibold text-emerald-800 tracking-wide">
                      B.Tech CSE '28
                    </div>
                    <div className="font-sans text-[11px] text-neutral-500 font-medium">
                      Kalinga University, Raipur
                    </div>
                  </div>

                  {/* Barcode & QR Accent at Bottom */}
                  <div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
                    {/* SVG Barcode */}
                    <div className="space-y-1">
                      <svg className="w-28 h-6" viewBox="0 0 120 24" fill="none">
                        <rect x="0" y="0" width="3" height="24" fill="#111111" />
                        <rect x="5" y="0" width="1.5" height="24" fill="#111111" />
                        <rect x="8" y="0" width="4" height="24" fill="#111111" />
                        <rect x="14" y="0" width="1.5" height="24" fill="#111111" />
                        <rect x="17" y="0" width="2.5" height="24" fill="#111111" />
                        <rect x="22" y="0" width="1" height="24" fill="#111111" />
                        <rect x="25" y="0" width="5" height="24" fill="#111111" />
                        <rect x="32" y="0" width="2" height="24" fill="#111111" />
                        <rect x="36" y="0" width="3.5" height="24" fill="#111111" />
                        <rect x="42" y="0" width="1" height="24" fill="#111111" />
                        <rect x="45" y="0" width="4.5" height="24" fill="#111111" />
                        <rect x="52" y="0" width="2" height="24" fill="#111111" />
                        <rect x="56" y="0" width="1.5" height="24" fill="#111111" />
                        <rect x="60" y="0" width="3" height="24" fill="#111111" />
                        <rect x="65" y="0" width="1" height="24" fill="#111111" />
                        <rect x="68" y="0" width="4" height="24" fill="#111111" />
                        <rect x="74" y="0" width="2" height="24" fill="#111111" />
                        <rect x="78" y="0" width="3.5" height="24" fill="#111111" />
                        <rect x="84" y="0" width="1.5" height="24" fill="#111111" />
                        <rect x="88" y="0" width="4" height="24" fill="#111111" />
                        <rect x="94" y="0" width="2" height="24" fill="#111111" />
                        <rect x="98" y="0" width="5" height="24" fill="#111111" />
                        <rect x="105" y="0" width="1.5" height="24" fill="#111111" />
                        <rect x="109" y="0" width="3" height="24" fill="#111111" />
                        <rect x="114" y="0" width="2" height="24" fill="#111111" />
                        <rect x="118" y="0" width="2" height="24" fill="#111111" />
                      </svg>
                      <div className="font-mono text-[8px] text-neutral-400 tracking-widest text-center">
                        AK-2028-CSE-DEV
                      </div>
                    </div>

                    {/* QR Code Icon Accent */}
                    <div className="p-1.5 rounded bg-neutral-100 border border-neutral-300 text-neutral-800">
                      <QrCode className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Tactile interaction note */}
                <span className="font-mono text-[10px] opacity-50 block text-center mt-3">
                  (Interactive ID Card • Tilt on Hover)
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 3-Column Structured Resume Grid */}
          <div className="lg:col-span-8 pt-4">
            <div className={`p-6 sm:p-8 rounded-2xl border poster-hairline shadow-sm transition-all duration-300 ${
              isDark ? 'bg-navy-card' : 'bg-alabaster-surface'
            }`}>
              {/* Section Tag */}
              <div className="pb-6 border-b poster-hairline flex items-center justify-between">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider opacity-75">
                  STRUCTURED RESUME SPECIFICATION
                </span>
                <span className="font-mono text-[11px] opacity-60">
                  VOL. 26 // SUMMARY
                </span>
              </div>

              {/* 3 Columns Sub-Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
                {/* Column 1: INTERNSHIPS */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b poster-hairline font-mono text-xs font-bold uppercase tracking-section">
                    <Briefcase className="w-4 h-4 text-emerald-600 dark:text-cream" />
                    <span>INTERNSHIPS</span>
                  </div>

                  <div className="space-y-5">
                    {/* Role 1 */}
                    <div className="space-y-1">
                      <h4 className="font-sans font-bold text-sm sm:text-base tracking-heading leading-snug">
                        Full Stack Development Intern
                      </h4>
                      <p className="font-mono text-xs text-emerald-700 dark:text-cream font-medium">
                        My Job Grow
                      </p>
                      <p className="font-sans text-xs opacity-70 font-light leading-relaxed pt-1">
                        Built responsive React components, integrated RESTful APIs, and managed Git pull-request reviews.
                      </p>
                    </div>

                    {/* Role 2 */}
                    <div className="space-y-1 pt-3 border-t poster-hairline">
                      <h4 className="font-sans font-bold text-sm sm:text-base tracking-heading leading-snug">
                        Full Stack Development Intern
                      </h4>
                      <p className="font-mono text-xs text-emerald-700 dark:text-cream font-medium">
                        Jayesta Corporate Entity
                      </p>
                      <p className="font-sans text-xs opacity-70 font-light leading-relaxed pt-1">
                        Contributed to component testing, mobile viewport optimization, and asynchronous service endpoints.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Column 2: EDUCATION */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b poster-hairline font-mono text-xs font-bold uppercase tracking-section">
                    <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-cream" />
                    <span>EDUCATION</span>
                  </div>

                  <div className="space-y-3">
                    <div className="space-y-1.5">
                      <h4 className="font-sans font-bold text-sm sm:text-base tracking-heading leading-snug">
                        B.Tech in Computer Science Engineering
                      </h4>
                      <p className="font-mono text-xs font-semibold opacity-90">
                        Kalinga University, Raipur
                      </p>
                      <div className="inline-block px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-cream border border-emerald-500/20 font-mono text-[11px] font-semibold">
                        2024 – 2028 (Expected)
                      </div>
                    </div>

                    <p className="font-sans text-xs opacity-75 font-light leading-relaxed pt-1">
                      In-depth study of Data Structures, Algorithms, Object-Oriented Software Design, Operating Systems, DBMS & SQL.
                    </p>
                  </div>
                </div>

                {/* Column 3: CONTACT & TECH STACK */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b poster-hairline font-mono text-xs font-bold uppercase tracking-section">
                    <Mail className="w-4 h-4 text-emerald-600 dark:text-cream" />
                    <span>CONTACT</span>
                  </div>

                  {/* Direct Contact Links */}
                  <div className="space-y-2 font-mono text-xs">
                    <a
                      href="mailto:arushikarmakar123@gmail.com"
                      className="flex items-center justify-between p-2 rounded border poster-hairline hover:bg-black/5 dark:hover:bg-white/5 transition-colors group"
                      title="Send email"
                    >
                      <span className="truncate pr-1">arushikarmakar123...</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 flex-shrink-0" />
                    </a>

                    <a
                      href="https://github.com/Arushi13-hub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2 rounded border poster-hairline hover:bg-black/5 dark:hover:bg-white/5 transition-colors group"
                      title="GitHub Profile"
                    >
                      <span>github.com/Arushi13-hub</span>
                      <GithubIcon className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 flex-shrink-0" />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/arushi-karmakar-73b267380"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2 rounded border poster-hairline hover:bg-black/5 dark:hover:bg-white/5 transition-colors group"
                      title="LinkedIn Profile"
                    >
                      <span>linkedin.com/in/arushi...</span>
                      <LinkedinIcon className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 flex-shrink-0" />
                    </a>
                  </div>

                  {/* Crisp Rounded Tech Stack Badges */}
                  <div className="pt-2 border-t poster-hairline space-y-2">
                    <span className="font-mono text-[10px] uppercase tracking-section opacity-60 block">
                      TECH STACK
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {techStack.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2.5 py-1 rounded-full text-xs font-mono font-medium border poster-hairline ${
                            isDark ? 'bg-navy-deep text-cream' : 'bg-alabaster text-ink'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
