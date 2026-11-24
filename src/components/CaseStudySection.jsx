import React from 'react';
import { ExternalLink, CheckCircle2, Sparkles, MapPin, Music, CloudSun, Layers, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function CaseStudySection({ isDark }) {
  const caseStudies = [
    {
      id: 'case-cafe-finder',
      index: '01',
      title: 'CAFE FINDER',
      tagline: 'Location-Aware Nearby Cafe Discovery Progressive Web App',
      category: 'React & Spatial Maps PWA',
      accentColor: '#4A78A8',
      overview: 'An installable Progressive Web App (PWA) that detects user coordinates in real time to discover nearby coffee shops on an interactive Leaflet map. Integrates Overpass API spatial queries with custom micro-animations and a responsive mobile-first layout for instant local exploration.',
      keyFeatures: [
        'Real-time GPS coordinate detection via HTML5 Geolocation API with high-accuracy fallback modes',
        'Overpass API spatial bounding query querying OpenStreetMap nodes within configurable radii',
        'Interactive Leaflet.js map with custom-styled coffee pins, pan physics, and popup telemetry',
        'Offline-ready Progressive Web App (PWA) with manifest, custom app icons, and service worker shell'
      ],
      techStack: [
        'React',
        'Leaflet.js',
        'Overpass API',
        'Browser Geolocation API',
        'Offline-ready PWA',
        'CSS3',
        'Netlify'
      ],
      liveUrl: 'https://cafefind.netlify.app',
      githubUrl: 'https://github.com/Arushi13-hub/CafeFinder',
      frameType: 'mobile',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
      deviceMeta: 'PWA • iOS & Android Installable'
    },
    {
      id: 'case-beatverse',
      index: '02',
      title: 'BEATVERSE',
      tagline: 'Interactive Web Music Streaming & Media Player',
      category: 'Audio Architecture & SPA',
      accentColor: '#8FA876',
      overview: 'A modern, component-driven music streaming web application featuring dynamic album browsing, seamless multi-view navigation, and a persistent interactive audio player with playback controls. Designed for smooth transitions and responsive listening across devices.',
      keyFeatures: [
        'Persistent interactive bottom audio player that maintains playback across client-side page transitions',
        'Dynamic multi-view client-side routing using React Router for seamless artist, album, and playlist browsing',
        'Custom audio control pipeline with volume normalization, scrubbing, playback queues, and state sync',
        'Responsive layout and lightweight asset bundle compiled with modern Vite tooling for zero UI stutter'
      ],
      techStack: [
        'React',
        'React Router',
        'JavaScript (ES6+)',
        'Component State Audio Controls',
        'CSS3',
        'Vite',
        'Netlify'
      ],
      liveUrl: 'https://692e883b73dabdf07eafbecd--brilliant-banoffee-7d42a3.netlify.app/',
      githubUrl: 'https://github.com/Arushi13-hub/Beatverse',
      frameType: 'laptop',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
      deviceMeta: 'Desktop & Mobile Audio Web App'
    },
    {
      id: 'case-weatherly',
      index: '03',
      title: 'WEATHERLY',
      tagline: 'Real-Time Weather & Forecast Web Application',
      category: 'Meteorological Telemetry & REST',
      accentColor: '#C89B6E',
      overview: 'A responsive weather dashboard that delivers live meteorological data, multi-day forecasts, and location-based climate insights through an intuitive, clean interface. Built for fast city search and instant visual feedback across desktop and mobile viewports.',
      keyFeatures: [
        'Live weather condition ingestion via asynchronous REST API queries for global city coordinates',
        'Multi-day weather forecasting engine calculating temperature spreads, humidity, wind, and UV indices',
        'Instant search feedback with debounced user inputs, dynamic climate icons, and graceful error handling',
        'Adaptive CSS layout optimized for both compact handheld screens and expansive desktop displays'
      ],
      techStack: [
        'JavaScript (ES6+)',
        'HTML5',
        'CSS3',
        'Weather REST API',
        'Async Data Fetching',
        'Netlify'
      ],
      liveUrl: 'https://691c9e5c5e1a67a49accd821--dynamic-squirrel-29af93.netlify.app/',
      githubUrl: 'https://github.com/Arushi13-hub/Weatherly-',
      frameType: 'mobile',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&q=80',
      deviceMeta: 'Responsive Web Application'
    },
    {
      id: 'case-tripnest',
      index: '04',
      title: 'TRIPNEST',
      tagline: 'Interactive Trip Planner & Travel Itinerary Web Application',
      category: 'Travel & Itinerary Architecture',
      accentColor: '#5C8374',
      overview: 'A responsive travel planning web application that helps users organize destinations, build day-by-day trip itineraries, and explore curated travel routes through a clean, editorial interface. Designed for intuitive trip scheduling and smooth navigation across desktop and mobile viewports.',
      keyFeatures: [
        'Dynamic day-by-day trip itinerary builder with structured scheduling and activity slots',
        'Destination curation with activity tagging across cultural landmarks, dining, and transit',
        'Responsive travel timeline visualization adapting seamlessly across wide and handheld viewports',
        'Lightweight client-side architecture compiled with Vite for instant page transitions and route management'
      ],
      techStack: [
        'React',
        'JavaScript (ES6+)',
        'CSS3',
        'Vite',
        'Netlify'
      ],
      liveUrl: 'https://tripnesti.netlify.app',
      githubUrl: 'https://github.com/Arushi13-hub/TripNest',
      frameType: 'laptop',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80',
      deviceMeta: 'Desktop & Mobile Travel Web App'
    }
  ];

  return (
    <section id="cases" className="relative w-full overflow-hidden border-b poster-hairline py-20 sm:py-28 transition-colors duration-300">
      {/* Ghost Background Watermark */}
      <div 
        className="ghost-watermark absolute top-8 right-6 text-[20vw] font-display pointer-events-none text-current"
        aria-hidden="true"
      >
        STUDIES
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b poster-hairline">
          <div className="space-y-3">
            <div className="flex items-center gap-3 font-mono text-xs tracking-wider uppercase opacity-75">
              <span className={`font-semibold ${isDark ? 'text-espresso' : 'text-ink'}`}>03 // EDITORIAL CASE STUDIES</span>
              <span>/</span>
              <span>FULL-SCALE PROJECT BREAKDOWNS</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              Architectural Case Studies.
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm max-w-md opacity-75 font-light">
            In-depth walkthroughs of Arushi's featured software solutions with live deployed previews, code repositories, and technical breakdowns.
          </p>
        </div>

        {/* Vertically Stacked Full Editorial Case Study Sections */}
        <div className="pt-16 space-y-28 sm:space-y-36">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              id={study.id}
              className="scroll-mt-24 space-y-12"
            >
              {/* Header: Section Index, Title & Prominent Action Buttons */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b poster-hairline">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 font-mono text-xs">
                    <span 
                      className="px-2.5 py-0.5 rounded-full font-bold text-white uppercase text-[10px]"
                      style={{ backgroundColor: study.accentColor }}
                    >
                      {study.index} // CASE STUDY
                    </span>
                    <span className="opacity-40">•</span>
                    <span className="font-semibold opacity-75 uppercase tracking-wider">{study.category}</span>
                  </div>

                  <h3 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tightest">
                    {study.title}
                  </h3>

                  <p className="font-sans text-base sm:text-lg opacity-80 font-light">
                    {study.tagline}
                  </p>
                </div>

                {/* Prominent Live Site and GitHub Repo Buttons */}
                <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`tactile-btn inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider shadow-sm transition-all ${
                      isDark 
                        ? 'bg-espresso text-cream hover:bg-espresso-hover' 
                        : 'bg-ink text-alabaster hover:opacity-90'
                    }`}
                  >
                    <span>Live Site ↗</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <a
                    href={study.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`tactile-btn inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border poster-hairline font-mono text-xs font-semibold uppercase tracking-wider transition-all ${
                      isDark ? 'hover:bg-navy-card' : 'hover:bg-alabaster-surface'
                    }`}
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub Repo ↗</span>
                  </a>
                </div>
              </div>

              {/* 2-Column Showcase Area: Left Info Breakdown | Right Clean CSS Device Frame */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Left Area: Project Overview & Key Features / Tech Stack Breakdown */}
                <div className="lg:col-span-6 space-y-8">
                  {/* PROJECT OVERVIEW Paragraph */}
                  <div className="space-y-3">
                    <span className="font-mono text-xs uppercase tracking-wide-meta opacity-60 font-semibold block">
                      PROJECT OVERVIEW
                    </span>
                    <p className="font-sans text-base sm:text-lg leading-relaxed opacity-90 font-light">
                      {study.overview}
                    </p>
                  </div>

                  {/* KEY FEATURES & TECH STACK 2-Column Bullet Breakdown */}
                  <div className="pt-6 border-t poster-hairline space-y-4">
                    <span className="font-mono text-xs uppercase tracking-wide-meta opacity-60 font-semibold block">
                      KEY FEATURES & TECH STACK
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Column A: Key Features */}
                      <div className="space-y-3">
                        <span className="font-mono text-[11px] uppercase tracking-wider opacity-75 font-semibold block pb-1 border-b poster-hairline">
                          Key Capabilities
                        </span>
                        <ul className="space-y-2.5">
                          {study.keyFeatures.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] opacity-85 leading-snug">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-cream flex-shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column B: Tech Stack Badges */}
                      <div className="space-y-3">
                        <span className="font-mono text-[11px] uppercase tracking-wider opacity-75 font-semibold block pb-1 border-b poster-hairline">
                          Technology Stack
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {study.techStack.map((tech) => (
                            <span
                              key={tech}
                              className={`px-3 py-1 rounded-md text-xs font-mono border poster-hairline ${
                                isDark ? 'bg-navy-card text-cream' : 'bg-alabaster-surface text-ink shadow-2xs'
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

                {/* Right Area: Clean Laptop / Mobile CSS Device Frame */}
                <div className="lg:col-span-6 flex justify-center">
                  {study.frameType === 'laptop' ? (
                    /* Clean CSS Laptop Device Frame */
                    <div className="w-full max-w-xl group/device">
                      {/* Laptop Screen Bezel */}
                      <div className="rounded-t-2xl bg-neutral-900 p-3 sm:p-4 shadow-2xl border-4 border-neutral-800">
                        {/* Camera & Sensor notch */}
                        <div className="w-2.5 h-2.5 rounded-full bg-neutral-700 mx-auto mb-2 flex items-center justify-center">
                          <div className="w-1 h-1 rounded-full bg-neutral-900" />
                        </div>

                        {/* Laptop Display Glass */}
                        <div className="aspect-[16/10] rounded-lg overflow-hidden bg-neutral-950 relative border border-white/10 shadow-inner">
                          <img
                            src={study.image}
                            alt={`${study.title} Interface Screen`}
                            className="w-full h-full object-cover group-hover/device:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-between p-3">
                            <span className="font-mono text-[10px] text-white/90 bg-black/70 px-2.5 py-1 rounded backdrop-blur-sm">
                              {study.title} // Interactive View
                            </span>
                            <a
                              href={study.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-mono text-[10px] text-white bg-black/70 hover:bg-white hover:text-black px-2.5 py-1 rounded backdrop-blur-sm flex items-center gap-1 transition-colors"
                            >
                              <span>Explore</span>
                              <ExternalLink className="w-2.5 h-2.5" />
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Laptop Base Stand */}
                      <div className="h-3.5 bg-neutral-700 rounded-b-xl border-t border-neutral-600 shadow-md relative">
                        <div className="w-20 h-1 bg-neutral-500 rounded-full mx-auto" />
                      </div>
                      <div className="w-36 h-1 bg-neutral-500/40 rounded-full mx-auto mt-0.5 blur-xs" />
                    </div>
                  ) : (
                    /* Clean CSS Mobile Device Frame */
                    <div className="w-64 sm:w-72 group/device">
                      <div className="rounded-[2.5rem] bg-neutral-900 p-3.5 shadow-2xl border-4 border-neutral-800 relative">
                        {/* Mobile Ear Speaker & Camera */}
                        <div className="w-24 h-4 bg-neutral-950 rounded-full mx-auto mb-2 flex items-center justify-center gap-2">
                          <div className="w-8 h-1 rounded-full bg-neutral-800" />
                          <div className="w-2 h-2 rounded-full bg-neutral-800" />
                        </div>

                        {/* Mobile Screen Display */}
                        <div className="aspect-[9/16] rounded-[1.8rem] overflow-hidden bg-neutral-950 relative border border-white/10 shadow-inner">
                          <img
                            src={study.image}
                            alt={`${study.title} Mobile Screen`}
                            className="w-full h-full object-cover group-hover/device:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-between p-3">
                            <span className="font-mono text-[10px] text-white/90 bg-black/70 px-2 py-0.5 rounded backdrop-blur-sm">
                              {study.deviceMeta}
                            </span>
                            <a
                              href={study.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-mono text-[10px] text-white bg-black/70 hover:bg-white hover:text-black px-2 py-0.5 rounded backdrop-blur-sm flex items-center gap-1 transition-colors"
                            >
                              <ExternalLink className="w-2.5 h-2.5" />
                            </a>
                          </div>
                        </div>

                        {/* Mobile Home indicator bar */}
                        <div className="w-24 h-1 bg-neutral-600 rounded-full mx-auto mt-2" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
