import React, { useState, useEffect } from 'react';
import { Menu, X, Copy, Check, ArrowUpRight, Mail } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const email = 'arushikarmakar123@gmail.com';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2800);
  };

  const navLinks = [
    { name: 'Projects', href: '#projects', index: '01' },
    { name: 'Skills', href: '#skills', index: '02' },
    { name: 'Experience', href: '#experience', index: '03' },
    { name: 'Contact', href: '#contact', index: '04' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A2947]/90 backdrop-blur-md border-b border-[#D3D4C0]/20 py-3.5 shadow-editorial-subtle'
            : 'bg-[#0A2947]/60 backdrop-blur-sm border-b border-[#D3D4C0]/10 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Left: Arushi.dev Monogram Branding */}
          <a
            href="#"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Arushi.dev Homepage"
          >
            <div className="w-9 h-9 rounded-md bg-[#8B5E3C] flex items-center justify-center font-display font-bold text-[#F3E4C9] text-sm tracking-wider shadow-sm group-hover:bg-[#744d30] transition-colors border border-[#D3D4C0]/25">
              AK
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg text-[#F3E4C9] tracking-tight group-hover:text-[#D3D4C0] transition-colors">
                Arushi<span className="text-[#8B5E3C]">.dev</span>
              </span>
              <span className="font-mono text-[10px] tracking-widest text-[#D3D4C0]/75 uppercase">
                Portfolio // Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-1.5 text-xs font-mono tracking-wider text-[#D3D4C0]/80 hover:text-[#F3E4C9] transition-colors py-1"
                  >
                    <span className="text-[#8B5E3C] text-[10px] font-semibold group-hover:text-[#F3E4C9] transition-colors">
                      {link.index}
                    </span>
                    <span className="font-sans text-sm font-medium tracking-normal">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="h-4 w-[1px] bg-[#D3D4C0]/20" />

            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="tactile-btn flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-[#D3D4C0]/25 bg-[#071d33]/90 text-xs font-mono text-[#F3E4C9] hover:border-[#8B5E3C] hover:bg-[#071d33] transition-all shadow-sm"
              title={`Click to copy ${email}`}
            >
              <Mail className="w-3.5 h-3.5 text-[#8B5E3C]" />
              <span className="hidden lg:inline">{email}</span>
              <span className="lg:hidden">Copy Email</span>
              <Copy className="w-3 h-3 text-[#D3D4C0]/70" />
            </button>

            {/* Initiate Dialogue Primary CTA */}
            <a
              href="#contact"
              className="tactile-btn inline-flex items-center gap-1.5 px-4 py-2 bg-[#8B5E3C] hover:bg-[#744d30] text-[#F3E4C9] rounded-md font-medium text-xs tracking-wider uppercase transition-all shadow-sm border border-[#8B5E3C]/40"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={handleCopyEmail}
              className="tactile-btn p-2 rounded-md border border-[#D3D4C0]/20 bg-[#071d33] text-[#F3E4C9]"
              title="Copy Email"
              aria-label="Copy Email"
            >
              <Mail className="w-4 h-4 text-[#8B5E3C]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F3E4C9] hover:text-[#D3D4C0] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0A2947]/95 backdrop-blur-lg border-b border-[#D3D4C0]/20 px-6 py-6 space-y-4">
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between text-[#F3E4C9] hover:text-[#D3D4C0] py-2 border-b border-[#D3D4C0]/10 text-base font-display"
                  >
                    <span>{link.name}</span>
                    <span className="font-mono text-xs text-[#8B5E3C]">{link.index}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={handleCopyEmail}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-md border border-[#D3D4C0]/20 bg-[#071d33] text-xs font-mono text-[#F3E4C9]"
              >
                <Mail className="w-3.5 h-3.5 text-[#8B5E3C]" />
                <span>{email}</span>
                <Copy className="w-3 h-3 text-[#D3D4C0]/60" />
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 px-4 bg-[#8B5E3C] hover:bg-[#744d30] text-[#F3E4C9] rounded-md text-xs font-mono uppercase tracking-wider font-semibold"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Floating Copied Toast Notification */}
      {showToast && (
        <div 
          className="fixed top-20 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-lg bg-[#071d33] border border-[#8B5E3C] text-[#F3E4C9] shadow-editorial transition-all"
          role="status"
          aria-live="polite"
        >
          <div className="w-6 h-6 rounded-full bg-[#8B5E3C] flex items-center justify-center text-[#F3E4C9]">
            <Check className="w-3.5 h-3.5" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-semibold text-xs text-[#F3E4C9]">
              Email Copied to Clipboard!
            </span>
            <span className="font-mono text-[10px] text-[#D3D4C0]/80">
              {email}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
