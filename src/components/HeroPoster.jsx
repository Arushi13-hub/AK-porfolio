import React, { useState } from 'react';
import { Copy, Check, ArrowDown, Moon, Sun, ArrowUpRight } from 'lucide-react';

export default function HeroPoster({ isDark, onToggleTheme }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const email = 'arushikarmakar123@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section className="relative w-full overflow-hidden border-b poster-hairline transition-colors duration-300">
      {/* Subtle Top Bar */}
      <header className="relative z-30 border-b poster-hairline px-6 sm:px-12 py-4 flex items-center justify-between backdrop-blur-md">
        {/* Left: Brand Monogram */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className={`w-8 h-8 rounded-md flex items-center justify-center font-display font-extrabold text-xs tracking-tighter ${
            isDark ? 'bg-espresso text-cream' : 'bg-ink text-alabaster'
          }`}>
            AK
          </div>
          <span className="font-mono text-xs font-semibold tracking-wider uppercase opacity-85 group-hover:opacity-100 transition-opacity">
            Arushi.dev
          </span>
        </a>

        {/* Center: Quick Anchor Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider">
          <a href="#about" className="opacity-70 hover:opacity-100 transition-opacity">
            About
          </a>
          <a href="#index" className="opacity-70 hover:opacity-100 transition-opacity">
            Projects
          </a>
          <a href="#cases" className="opacity-70 hover:opacity-100 transition-opacity">
            Experience
          </a>
          <a href="#contact" className="opacity-70 hover:opacity-100 transition-opacity">
            Contact
          </a>
        </nav>

        {/* Right: Theme Switcher & One-Click Copy Email */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className={`tactile-btn flex items-center gap-1.5 px-3 py-1.5 rounded-full border poster-hairline font-mono text-xs transition-all ${
              isDark ? 'bg-navy-card text-cream' : 'bg-alabaster-surface text-ink'
            }`}
            title="Switch theme"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isDark ? 'Paper' : 'Navy'}</span>
          </button>

          {/* One-Click Copy Email */}
          <button
            onClick={handleCopyEmail}
            className={`tactile-btn flex items-center gap-1.5 px-3.5 py-1.5 rounded-md border poster-hairline font-mono text-xs ${
              isDark ? 'bg-navy-card text-cream' : 'bg-alabaster-surface text-ink'
            }`}
            title="Click to copy arushikarmakar123@gmail.com"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-500 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <span>Copy Email</span>
                <Copy className="w-3 h-3 opacity-60" />
              </>
            )}
          </button>
        </div>
      </header>

      {/* Hero Center Presentation */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 pt-16 pb-20 md:pt-24 md:pb-28 flex flex-col items-center text-center">
        {/* Top Deck Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border poster-hairline font-mono text-[11px] uppercase tracking-wide-meta mb-8 opacity-80">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Curated Developer Showcase // Issue No. 26</span>
        </div>

        {/* Single Centered Wrapper Container for PORTFOLIO '26 (Zero Clipping, Zero Overlap) */}
        <div 
          className="relative inline-block select-none my-2"
          style={{
            maxWidth: '92vw',
            margin: '0 auto',
            overflow: 'visible',
            position: 'relative'
          }}
        >
          <h1 
            className="font-extrabold uppercase whitespace-nowrap text-center m-0 p-0"
            style={{
              fontFamily: "'Syne', 'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2.4rem, 9.5vw, 7.5rem)',
              letterSpacing: '-0.02em',
              lineHeight: 1
            }}
          >
            PORTFOLIO
          </h1>

          {/* '26 Cleanly Positioned at Top-Right Corner */}
          <span
            className={`font-sans font-bold select-none ${
              isDark ? 'text-cream' : 'text-[#141413]'
            }`}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1rem, 2.2vw, 1.75rem)',
              position: 'absolute',
              top: '-0.35em',
              right: '-0.1em',
              lineHeight: 1
            }}
          >
            '26
          </span>
        </div>

        {/* Centered Developer Avatar Illustration Card with Clean 2rem Spacing */}
        <div 
          className="flex flex-col items-center space-y-5"
          style={{ marginTop: '2rem' }}
        >
          <div className={`group relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl border poster-hairline p-2.5 shadow-editorial transition-all duration-300 hover:scale-105 hover:rotate-1 ${
            isDark ? 'bg-navy-card' : 'bg-alabaster-surface'
          }`}>
            <div className={`w-full h-full rounded-xl overflow-hidden flex items-center justify-center border poster-hairline relative ${
              isDark ? 'bg-navy-deep' : 'bg-[#EFEFED]'
            }`}>
              {/* Custom SVG Developer Character Illustration */}
              <svg 
                className="w-full h-full" 
                viewBox="0 0 160 160" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background geometric circle */}
                <circle cx="80" cy="80" r="68" fill={isDark ? "#0A2947" : "#F5F5F3"} stroke={isDark ? "rgba(211,212,192,0.2)" : "#D8D8D4"} strokeWidth="2" strokeDasharray="3 3"/>
                
                {/* Hair back */}
                <path d="M42 90C40 60 52 35 80 35C108 35 120 60 118 90C118 105 110 118 108 122H52C50 118 42 105 42 90Z" fill={isDark ? "#D3D4C0" : "#111111"} />
                
                {/* Torso & Sweater */}
                <path d="M38 152C38 126 56 116 80 116C104 116 122 126 122 152H38Z" fill={isDark ? "#8B5E3C" : "#2B2B28"} />
                {/* Collar */}
                <path d="M72 116L80 126L88 116" stroke={isDark ? "#F3E4C9" : "#F5F5F3"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                
                {/* Neck */}
                <rect x="73" y="98" width="14" height="20" rx="3" fill="#E8C39E" />
                
                {/* Head / Face */}
                <ellipse cx="80" cy="78" rx="24" ry="28" fill="#F4D3B4" />
                
                {/* Stylish Hair Front */}
                <path d="M56 68C58 50 68 42 80 42C96 42 104 54 104 68C98 58 88 56 80 56C72 56 62 60 56 68Z" fill={isDark ? "#D3D4C0" : "#111111"} />
                
                {/* Modern Glasses */}
                <rect x="62" y="70" width="14" height="11" rx="3" fill="none" stroke={isDark ? "#0A2947" : "#111111"} strokeWidth="2.5" />
                <rect x="84" y="70" width="14" height="11" rx="3" fill="none" stroke={isDark ? "#0A2947" : "#111111"} strokeWidth="2.5" />
                <line x1="76" y1="75" x2="84" y2="75" stroke={isDark ? "#0A2947" : "#111111"} strokeWidth="2" />
                
                {/* Eyes behind glasses */}
                <circle cx="69" cy="75" r="1.75" fill={isDark ? "#0A2947" : "#111111"} />
                <circle cx="91" cy="75" r="1.75" fill={isDark ? "#0A2947" : "#111111"} />
                
                {/* Friendly Smile */}
                <path d="M75 89C77 92 83 92 85 89" stroke={isDark ? "#0A2947" : "#111111"} strokeWidth="2" strokeLinecap="round" />
                
                {/* Sleek Over-ear Headphones */}
                <path d="M52 74C52 56 64 46 80 46C96 46 108 56 108 74" fill="none" stroke={isDark ? "#8B5E3C" : "#E26D5C"} strokeWidth="3" strokeLinecap="round" />
                <rect x="49" y="70" width="6" height="14" rx="3" fill={isDark ? "#8B5E3C" : "#E26D5C"} />
                <rect x="105" y="70" width="6" height="14" rx="3" fill={isDark ? "#8B5E3C" : "#E26D5C"} />
              </svg>

              {/* Status Badge Pin */}
              <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-emerald-500/90 text-white font-mono text-[9px] font-bold">
                DEV
              </div>
            </div>
          </div>

          {/* Small Tracked Uppercase Subtitle Underneath Avatar */}
          <div className="space-y-1.5">
            <h2 className="font-mono text-xs sm:text-sm font-semibold tracking-wide-meta uppercase opacity-90">
              ARUSHI KARMAKAR · FRONTEND & FULL-STACK DEVELOPER
            </h2>
            <p className="font-sans text-xs sm:text-sm opacity-70 font-normal max-w-lg mx-auto leading-relaxed">
              Building interactive web applications, component design systems, and real-time APIs.
            </p>
          </div>

          {/* Quick Jump CTA */}
          <div className="pt-4 flex items-center gap-3">
            <a
              href="#about"
              className={`tactile-btn inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-mono text-xs font-semibold uppercase tracking-wider ${
                isDark ? 'bg-espresso text-cream' : 'bg-ink text-alabaster'
              }`}
            >
              <span>Explore Profile</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href="#index"
              className="tactile-btn inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border poster-hairline font-mono text-xs opacity-80 hover:opacity-100"
            >
              <span>Table of Contents</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
