import React, { useState, useEffect } from 'react';
import HeroPoster from './components/HeroPoster';
import AboutBadge from './components/AboutBadge';
import ProjectIndex from './components/ProjectIndex';
import CaseStudySection from './components/CaseStudySection';
import FooterContact from './components/FooterContact';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <div 
      className={`min-h-screen transition-colors duration-300 font-sans selection:bg-[#111111] selection:text-[#F5F5F3] dark:selection:bg-[#8B5E3C] dark:selection:text-[#F3E4C9] ${
        isDark 
          ? 'bg-[#0A2947] text-[#F3E4C9]' 
          : 'bg-[#F5F5F3] text-[#111111]'
      }`}
    >
      <main>
        {/* 01 // Hero Poster with Theme Toggle */}
        <HeroPoster isDark={isDark} onToggleTheme={toggleTheme} />

        {/* 02 // About Badge & Manifesto Deck */}
        <AboutBadge isDark={isDark} />

        {/* 03 // Exhibition Index Catalog */}
        <ProjectIndex isDark={isDark} />

        {/* 04 // In-depth Case Studies */}
        <CaseStudySection isDark={isDark} />

        {/* 05 // Editorial Footer & Dialogue */}
        <FooterContact isDark={isDark} />
      </main>
    </div>
  );
}
