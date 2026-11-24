import React from 'react';
import { ExternalLink, ArrowDown, ArrowUpRight, Play, SkipBack, SkipForward, Volume2, Cloud, Sun, Wind, Droplets, MapPin, Compass, Navigation } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectIndex({ isDark }) {
  const columns = [
    {
      id: 'cafe-finder',
      num: '01',
      bigNum: '1',
      title: 'Cafe Finder',
      summary: 'Location-Aware Nearby Cafe Discovery PWA.',
      category: 'React & Spatial Maps',
      colorBg: '#4A78A8', // Muted Steel Blue
      textColor: '#FFFFFF',
      demoUrl: 'https://cafefind.netlify.app',
      githubUrl: 'https://github.com/Arushi13-hub/CafeFinder',
      tags: ['React', 'Leaflet.js', 'Overpass API', 'PWA']
    },
    {
      id: 'beatverse',
      num: '02',
      bigNum: '2',
      title: 'Beatverse',
      summary: 'Interactive Web Music Streaming & Media Player.',
      category: 'Audio Architecture',
      colorBg: '#8FA876', // Warm Olive Sage
      textColor: '#FFFFFF',
      demoUrl: 'https://692e883b73dabdf07eafbecd--brilliant-banoffee-7d42a3.netlify.app/',
      githubUrl: 'https://github.com/Arushi13-hub/Beatverse',
      tags: ['React', 'React Router', 'Audio API', 'Vite']
    },
    {
      id: 'weatherly',
      num: '03',
      bigNum: '3',
      title: 'Weatherly',
      summary: 'Real-Time Weather & Forecast Web Application.',
      category: 'Meteorological APIs',
      colorBg: '#C89B6E', // Warm Terracotta Sand
      textColor: '#FFFFFF',
      demoUrl: 'https://691c9e5c5e1a67a49accd821--dynamic-squirrel-29af93.netlify.app/',
      githubUrl: 'https://github.com/Arushi13-hub/Weatherly-',
      tags: ['JavaScript', 'HTML5/CSS3', 'REST API', 'Netlify']
    },
    {
      id: 'tripnest',
      num: '04',
      bigNum: '4',
      title: 'TripNest',
      summary: 'Interactive Trip Planner & Travel Itinerary Web Application.',
      category: 'Travel & Itinerary',
      colorBg: '#5C8374', // Muted Sage-Teal
      textColor: '#FFFFFF',
      demoUrl: 'https://tripnesti.netlify.app',
      githubUrl: 'https://github.com/Arushi13-hub/TripNest',
      tags: ['React', 'JavaScript', 'CSS3', 'Vite', 'Netlify']
    }
  ];

  // Custom UI Mini-Previews for Shipped Apps
  const renderMiniPreview = (id) => {
    switch (id) {
      case 'cafe-finder':
        return (
          /* Mini Leaflet Interactive Map UI */
          <div className="relative w-full h-full bg-[#1e293b] overflow-hidden flex flex-col justify-between p-3 select-none">
            {/* Map Roads / Grid Lines Pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#94a3b8" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#map-grid)" />
                {/* Diagonal roads */}
                <line x1="0" y1="20" x2="280" y2="180" stroke="#cbd5e1" strokeWidth="4" />
                <line x1="120" y1="0" x2="160" y2="220" stroke="#cbd5e1" strokeWidth="3" />
                <line x1="0" y1="120" x2="280" y2="60" stroke="#f59e0b" strokeWidth="2.5" />
              </svg>
            </div>

            {/* Top Map HUD: Controls & GPS Status */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-emerald-400 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>GPS: 21.25°N, 81.63°E</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="w-5 h-5 rounded bg-black/70 text-white flex items-center justify-center text-[10px] font-bold border border-white/20">
                  +
                </div>
                <div className="w-5 h-5 rounded bg-black/70 text-white flex items-center justify-center text-[10px] font-bold border border-white/20">
                  −
                </div>
              </div>
            </div>

            {/* Center: Pulsing User Location + Nearby Coffee Pin Bubble */}
            <div className="relative z-10 my-auto flex flex-col items-center">
              {/* Coffee Cafe Callout Bubble */}
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-neutral-900/90 text-white border border-amber-400/60 shadow-lg text-[10px] font-medium transform -translate-y-1">
                <span className="text-amber-400 text-xs">☕</span>
                <span className="font-semibold">Artisan Roast Cafe</span>
                <span className="text-amber-300 font-mono text-[9px] bg-amber-500/20 px-1 rounded">180m</span>
              </div>

              {/* Pin Pointer & Pulse */}
              <div className="relative mt-1">
                <div className="w-3.5 h-3.5 rounded-full bg-amber-500 border-2 border-white shadow-md mx-auto" />
                <div className="absolute -inset-1 rounded-full bg-amber-400/40 animate-ping pointer-events-none" />
              </div>
            </div>

            {/* Bottom: Overpass API Telemetry Strip */}
            <div className="relative z-10 flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-black/75 backdrop-blur-md text-[10px] font-mono text-white/90 border border-white/15">
              <span className="flex items-center gap-1.5">
                <Navigation className="w-3 h-3 text-sky-400" />
                <span>12 cafes discovered</span>
              </span>
              <span className="text-emerald-400 text-[9px]">Leaflet v1.9</span>
            </div>
          </div>
        );

      case 'beatverse':
        return (
          /* Mini Audio Streaming Player UI */
          <div className="relative w-full h-full bg-[#121316] text-white overflow-hidden flex flex-col justify-between p-3 select-none">
            {/* Top Track Header */}
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div className="flex items-center gap-2 overflow-hidden">
                <div className="w-8 h-8 rounded-md bg-gradient-to-br from-emerald-400 to-teal-700 flex items-center justify-center text-xs font-bold text-black flex-shrink-0 shadow-sm">
                  BV
                </div>
                <div className="flex flex-col truncate">
                  <span className="font-semibold text-xs truncate">Midnight Waves</span>
                  <span className="text-[10px] text-neutral-400 truncate">Lo-Fi Collective • Vol. 1</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Volume2 className="w-3.5 h-3.5 text-neutral-400" />
                <div className="w-8 h-1 rounded-full bg-white/20">
                  <div className="w-5 h-1 rounded-full bg-emerald-400" />
                </div>
              </div>
            </div>

            {/* Center Animated Audio Equalizer Waveform */}
            <div className="my-auto py-2 flex items-center justify-center gap-1.5 px-4">
              <div className="w-1.5 h-6 bg-emerald-400 rounded-full animate-pulse" />
              <div className="w-1.5 h-10 bg-emerald-300 rounded-full animate-bounce" />
              <div className="w-1.5 h-4 bg-emerald-500 rounded-full" />
              <div className="w-1.5 h-12 bg-emerald-400 rounded-full animate-pulse" />
              <div className="w-1.5 h-8 bg-emerald-300 rounded-full" />
              <div className="w-1.5 h-14 bg-emerald-400 rounded-full animate-bounce" />
              <div className="w-1.5 h-6 bg-emerald-500 rounded-full animate-pulse" />
              <div className="w-1.5 h-11 bg-emerald-300 rounded-full" />
              <div className="w-1.5 h-5 bg-emerald-400 rounded-full animate-bounce" />
              <div className="w-1.5 h-8 bg-emerald-500 rounded-full" />
              <div className="w-1.5 h-12 bg-emerald-400 rounded-full animate-pulse" />
              <div className="w-1.5 h-4 bg-emerald-300 rounded-full" />
            </div>

            {/* Bottom Scrubber & Media Controls */}
            <div className="space-y-1.5 pt-1">
              <div className="flex items-center justify-between text-[9px] font-mono text-neutral-400">
                <span>02:14</span>
                <div className="flex-1 mx-2 h-1 rounded-full bg-white/20 relative">
                  <div className="w-3/5 h-full rounded-full bg-emerald-400" />
                </div>
                <span>03:45</span>
              </div>

              {/* Playback Buttons */}
              <div className="flex items-center justify-center gap-3 pt-0.5">
                <SkipBack className="w-3 h-3 text-neutral-400 hover:text-white" />
                <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center shadow-md">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <SkipForward className="w-3 h-3 text-neutral-400 hover:text-white" />
              </div>
            </div>
          </div>
        );

      case 'weatherly':
        return (
          /* Mini Meteorological Weather Dashboard UI */
          <div className="relative w-full h-full bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-white overflow-hidden flex flex-col justify-between p-3 select-none">
            {/* Top City & Live Tag */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-[11px] font-medium text-sky-200">
                <MapPin className="w-3 h-3 text-amber-400" />
                <span>San Francisco, CA</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-white/15 text-[9px] font-mono text-emerald-300 border border-white/10">
                Live API
              </span>
            </div>

            {/* Center Main Temp & Condition */}
            <div className="my-auto flex items-center justify-between px-2">
              <div>
                <div className="font-display font-black text-4xl tracking-tighter text-white">
                  28°<span className="text-xl font-normal text-sky-200">C</span>
                </div>
                <div className="text-[11px] text-sky-200 font-medium">
                  Partly Sunny • H: 31° L: 22°
                </div>
              </div>
              {/* Sun & Cloud Vector Graphic */}
              <div className="relative w-12 h-12 flex items-center justify-center">
                <Sun className="w-10 h-10 text-amber-400 animate-spin" style={{ animationDuration: '18s' }} />
                <Cloud className="w-7 h-7 text-sky-100 absolute -bottom-1 -right-1 fill-sky-100/90" />
              </div>
            </div>

            {/* Bottom Forecast Micro-Strip */}
            <div className="grid grid-cols-3 gap-1.5 pt-1.5 border-t border-white/15 text-[9px] font-mono text-center">
              <div className="p-1 rounded bg-white/10">
                <span className="text-neutral-400 block">Today</span>
                <span className="font-bold text-white">28°</span>
              </div>
              <div className="p-1 rounded bg-white/10">
                <span className="text-neutral-400 block">Tue</span>
                <span className="font-bold text-white">26°</span>
              </div>
              <div className="p-1 rounded bg-white/10">
                <span className="text-neutral-400 block">Wed</span>
                <span className="font-bold text-white">29°</span>
              </div>
            </div>
          </div>
        );

      case 'tripnest':
        return (
          /* Mini Travel Planner & Itinerary UI */
          <div className="relative w-full h-full bg-[#182825] text-white overflow-hidden flex flex-col justify-between p-3 select-none">
            {/* Top Destination Header */}
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div className="flex items-center gap-1.5 overflow-hidden">
                <div className="w-5 h-5 rounded bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
                  <Compass className="w-3 h-3 text-emerald-300" />
                </div>
                <div className="flex flex-col truncate">
                  <span className="font-semibold text-[11px] truncate leading-tight">Kyoto & Tokyo Expedition</span>
                  <span className="text-[9px] text-emerald-300/80 font-mono truncate">Day 2 of 5 • 3 Planned Stops</span>
                </div>
              </div>
              <span className="px-1.5 py-0.5 rounded text-[8px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                ACTIVE
              </span>
            </div>

            {/* Center: Itinerary Timeline List */}
            <div className="my-auto py-1 space-y-1.5 text-[9px] font-mono">
              {/* Item 1 */}
              <div className="flex items-center gap-2 p-1 rounded bg-white/5 border border-white/5">
                <span className="text-emerald-400 font-bold text-[8px] bg-black/40 px-1 py-0.5 rounded">09:30</span>
                <span className="truncate text-white/90">Fushimi Inari Shrine Walk</span>
                <span className="ml-auto text-emerald-400 text-[10px]">✓</span>
              </div>
              {/* Item 2 */}
              <div className="flex items-center gap-2 p-1 rounded bg-emerald-500/15 border border-emerald-400/30">
                <span className="text-amber-300 font-bold text-[8px] bg-black/40 px-1 py-0.5 rounded">01:15</span>
                <span className="truncate text-white font-medium">Gion Culinary Market</span>
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
              </div>
              {/* Item 3 */}
              <div className="flex items-center gap-2 p-1 rounded bg-white/5 border border-white/5">
                <span className="text-neutral-400 font-bold text-[8px] bg-black/40 px-1 py-0.5 rounded">06:00</span>
                <span className="truncate text-white/80">Kiyomizu Sunset Overlook</span>
                <span className="ml-auto text-neutral-400 text-[8px]">Pending</span>
              </div>
            </div>

            {/* Bottom Travel Telemetry Strip */}
            <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[9px] font-mono text-emerald-200/90">
              <span className="flex items-center gap-1">
                <MapPin className="w-2.5 h-2.5 text-amber-300" />
                <span>6.2 km Route</span>
              </span>
              <span className="text-[8px] text-white/60">Vite • React</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="index" className="relative w-full overflow-hidden border-b poster-hairline py-20 sm:py-28 transition-colors duration-300">
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        {/* 1. Dedicated Top Row: Oversized Hollow Outline CONTENT Watermark */}
        <div 
          className="relative block select-none pointer-events-none text-left mb-2 overflow-hidden"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            color: 'transparent',
            WebkitTextStroke: isDark ? '1.5px rgba(211, 212, 192, 0.35)' : '1.5px #CBCBC6',
            fontSize: 'clamp(3.8rem, 13vw, 9.5rem)',
            lineHeight: 0.9,
            opacity: 0.45
          }}
          aria-hidden="true"
        >
          CONTENT
        </div>

        {/* Section Headline Cleanly Positioned Below the Watermark */}
        <div className="pb-10 border-b poster-hairline flex flex-col md:flex-row md:items-end justify-between gap-4 mt-2 sm:mt-4">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs tracking-wider uppercase opacity-75">
              <span className={`font-semibold ${isDark ? 'text-espresso' : 'text-ink'}`}>TABLE OF CONTENTS</span>
              <span>/</span>
              <span>SIGNATURE ARCHITECTURAL STRIP</span>
            </div>

            <h2 className="font-sans font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight mt-2">
              Selected Works Index.
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm max-w-md opacity-75 font-normal leading-relaxed">
            Click any column to jump directly into the full architectural case study, or launch live apps instantly.
          </p>
        </div>

        {/* 2. 4-Column Grid: Equal Heights & Straight Bottom Alignment (align-items: stretch) */}
        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {columns.map((col) => (
            <div key={col.id} className="flex flex-col justify-between space-y-3.5 w-full h-full">
              {/* Column Index Header: Flush with Card Left Edge */}
              <div className="flex items-baseline justify-between border-b pb-2.5 poster-hairline w-full flex-shrink-0">
                <div className="flex items-baseline gap-2.5">
                  <span
                    className="text-3xl sm:text-4xl select-none leading-none"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 800,
                      color: 'transparent',
                      WebkitTextStroke: isDark ? '1.5px rgba(211, 212, 192, 0.5)' : '1.5px #CBCBC6'
                    }}
                  >
                    {col.num}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold opacity-90">
                    {col.title}
                  </span>
                </div>
                <span className="font-mono text-[11px] opacity-60">
                  {col.category}
                </span>
              </div>

              {/* Color-Blocked Project Card: Equal Height Flex Layout */}
              <div
                className="group relative rounded-3xl overflow-hidden shadow-editorial transition-all duration-300 hover:-translate-y-2.5 flex flex-col justify-between w-full h-full flex-1"
                style={{ backgroundColor: col.colorBg, color: col.textColor }}
              >
                {/* Subtle Grain & Tone Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />

                {/* Top Section: Category Pill + Direct Links */}
                <div className="relative z-10 p-6 sm:p-7 pb-3 flex items-center justify-between flex-shrink-0">
                  <span className="inline-block px-3 py-1 rounded-full bg-black/25 backdrop-blur-md font-mono text-[11px] uppercase tracking-wider font-medium text-white/95 border border-white/20">
                    {col.num} // {col.category}
                  </span>

                  {/* Direct Action Icons */}
                  <div className="flex items-center gap-2">
                    <a
                      href={col.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/20 hover:bg-white text-white hover:text-neutral-900 transition-all backdrop-blur-md shadow-xs"
                      title="Launch Live App"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={col.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/20 hover:bg-white text-white hover:text-neutral-900 transition-all backdrop-blur-md shadow-xs"
                      title="View GitHub Repository"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Fixed-Height Uniform 220px Mockup Container with Custom Shipped UI Previews */}
                <div className="relative z-10 px-6 sm:px-7 py-2 flex-shrink-0">
                  <a
                    href={`#case-${col.id}`}
                    className="block w-full rounded-xl overflow-hidden shadow-xl border border-white/20 transform group-hover:scale-[1.03] transition-transform duration-500 focus:outline-none"
                    style={{ height: '220px', width: '100%', overflow: 'hidden', borderRadius: '12px' }}
                    title={`Jump to ${col.title} full case study`}
                  >
                    {renderMiniPreview(col.id)}
                  </a>
                </div>

                {/* Middle Content Section */}
                <div className="relative z-10 p-6 sm:p-8 pt-4 flex-1 flex flex-col justify-between">
                  <a
                    href={`#case-${col.id}`}
                    className="block space-y-2 group/text cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-sans font-bold text-2xl sm:text-3xl text-white tracking-tight group-hover/text:translate-x-1 transition-transform">
                        {col.title}
                      </h3>
                      <div className="w-8 h-8 rounded-full bg-white/20 group-hover/text:bg-white text-white group-hover/text:text-neutral-900 flex items-center justify-center transition-all flex-shrink-0">
                        <ArrowDown className="w-4 h-4" />
                      </div>
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-white/95 font-normal leading-relaxed">
                      {col.summary}
                    </p>
                  </a>

                  {/* Tech tags preview */}
                  <div className="pt-4 flex flex-wrap gap-1.5">
                    {col.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-full bg-black/25 text-white/95 font-mono text-[10px] border border-white/15"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Strip: Giant Solid Number at Left + Crisp High-Contrast READ STUDY Button */}
                  <div className="pt-6 flex items-baseline justify-between border-t border-white/20 mt-6 flex-shrink-0">
                    <div 
                      className="text-6xl sm:text-7xl leading-none select-none tracking-tighter"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 800,
                        color: '#FFFFFF'
                      }}
                    >
                      {col.bigNum}
                    </div>

                    {/* Crisp High-Contrast READ STUDY Pill Button (100% Legible on All Card Colors) */}
                    <a
                      href={`#case-${col.id}`}
                      className="tactile-btn inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-mono text-xs font-semibold tracking-wider uppercase text-white shadow-md border border-white/30 backdrop-blur-md transition-all hover:bg-white hover:text-neutral-900"
                      style={{ background: 'rgba(10, 25, 47, 0.45)' }}
                    >
                      <span>READ STUDY</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:text-neutral-900" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
