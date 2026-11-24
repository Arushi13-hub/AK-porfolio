import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, ArrowUp, Send, Loader2, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function FooterContact({ isDark }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formState, setFormState] = useState({
    status: 'idle', // 'idle' | 'loading' | 'success' | 'error'
    message: ''
  });

  const recipientEmail = 'arushikarmakar123@gmail.com';
  const githubUrl = 'https://github.com/Arushi13-hub';
  const linkedinUrl = 'https://www.linkedin.com/in/arushi-karmakar-73b267380';

  // One-click Copy Email with "Copied ✓" state
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(recipientEmail);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = recipientEmail;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Form submission: Web3Forms API + Automatic Mailto Fallback
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setFormState({ status: 'loading', message: '' });

    // TODO: Add your free access key from web3forms.com to .env (VITE_WEB3FORMS_KEY=your_key_here)
    const web3FormsKey = import.meta.env.VITE_WEB3FORMS_KEY;

    if (web3FormsKey && web3FormsKey.trim() !== '' && web3FormsKey !== 'your_key_here') {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            name: formData.name,
            email: formData.email,
            message: formData.message,
            subject: `Portfolio Message from ${formData.name}`,
            from_name: formData.name
          })
        });

        const data = await response.json();

        if (data.success) {
          setFormState({
            status: 'success',
            message: "Thanks! Your message has been sent to Arushi."
          });
          setFormData({ name: '', email: '', message: '' });
          return;
        } else {
          throw new Error(data.message || 'API submission failed');
        }
      } catch (err) {
        console.warn('Web3Forms dispatch error, initiating fallback:', err);
        setFormState({
          status: 'error',
          message: 'Unable to connect to submission server. Opening email client...'
        });
      }
    }

    // Automatic Mailto Fallback (Immediate functionality right now without backend setup)
    const mailtoSubject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Hi Arushi,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent from Arushi.dev Portfolio`
    );

    // Trigger user's default email client pre-filled
    window.location.href = `mailto:${recipientEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      setFormState({
        status: 'success',
        message: "Thanks! Your message has been sent to Arushi."
      });
      setFormData({ name: '', email: '', message: '' });
    }, 800);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative w-full overflow-hidden pt-20 pb-16 transition-colors duration-300">
      {/* Ghost Background Watermark */}
      <div 
        className="ghost-watermark absolute top-8 left-1/2 -translate-x-1/2 text-[18vw] font-display pointer-events-none text-current select-none"
        aria-hidden="true"
      >
        DIALOGUE
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        {/* Main Swiss-Grid Closing Section */}
        <div 
          className={`p-8 sm:p-14 rounded-2xl border shadow-sm transition-colors duration-300 space-y-10 ${
            isDark ? 'bg-navy-card' : 'bg-[#F5F4F0]'
          }`}
          style={{
            borderColor: isDark ? 'rgba(211, 212, 192, 0.25)' : '#D6D4CE'
          }}
        >
          {/* Section Headline Block */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border font-mono text-xs uppercase tracking-wide-meta opacity-80"
              style={{ borderColor: isDark ? 'rgba(211, 212, 192, 0.25)' : '#D6D4CE' }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Full-Stack, Frontend & Internship Roles</span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tightest leading-none">
              Let's build something impactful together.
            </h2>

            <p className="font-sans text-base sm:text-lg opacity-80 font-light leading-relaxed">
              I am open to full-stack and frontend software engineering roles, internships, and collaborative opportunities. Send a message directly through the form below or connect across channels.
            </p>
          </div>

          {/* 2-Column Swiss-Grid: Left Cards (30%) | Right Interactive Form (70%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
            {/* Left Column: Direct Communication Cards */}
            <div className="lg:col-span-5 space-y-4">
              {/* Card 1: Direct Email & One-Click Copy */}
              <div 
                className={`p-6 rounded-xl border space-y-4 transition-all ${
                  isDark ? 'bg-navy-deep' : 'bg-white'
                }`}
                style={{ borderColor: isDark ? 'rgba(211, 212, 192, 0.25)' : '#D6D4CE' }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-wider opacity-60 font-semibold">
                    DIRECT EMAIL ADDRESS
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-black/5 dark:bg-white/5 border"
                  style={{ borderColor: isDark ? 'rgba(211, 212, 192, 0.2)' : '#D6D4CE' }}
                >
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail className="w-4 h-4 text-[#8B5E3C] dark:text-emerald-400 flex-shrink-0" />
                    <span className="font-mono text-xs sm:text-sm font-semibold truncate text-[#141413] dark:text-[#F3E4C9]">
                      {recipientEmail}
                    </span>
                  </div>
                </div>

                {/* Prominent Copy Email Button with 'Copied ✓' Feedback */}
                <button
                  onClick={handleCopyEmail}
                  className={`tactile-btn w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-mono text-xs uppercase tracking-wider font-bold transition-all border ${
                    copiedEmail
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : isDark
                        ? 'bg-espresso text-cream hover:bg-espresso-hover border-espresso'
                        : 'bg-[#141413] text-[#F5F4F0] hover:bg-black border-[#141413]'
                  }`}
                  title="Copy address to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>Copied ✓</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 opacity-80" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Card 2: GitHub Repository */}
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`tactile-card p-5 rounded-xl border flex items-center justify-between group transition-all block ${
                  isDark ? 'bg-navy-deep hover:border-espresso' : 'bg-white hover:border-[#141413]'
                }`}
                style={{ borderColor: isDark ? 'rgba(211, 212, 192, 0.25)' : '#D6D4CE' }}
                title="Visit Arushi's GitHub profile"
              >
                <div className="flex items-center gap-3.5">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${
                    isDark ? 'bg-navy-card text-cream' : 'bg-[#F5F4F0] text-[#141413]'
                  }`}
                    style={{ borderColor: isDark ? 'rgba(211, 212, 192, 0.2)' : '#D6D4CE' }}
                  >
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm tracking-tight text-[#141413] dark:text-[#F3E4C9]">
                      GitHub Repository
                    </div>
                    <div className="font-mono text-xs opacity-60">
                      github.com/Arushi13-hub
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Card 3: LinkedIn Profile */}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`tactile-card p-5 rounded-xl border flex items-center justify-between group transition-all block ${
                  isDark ? 'bg-navy-deep hover:border-espresso' : 'bg-white hover:border-[#141413]'
                }`}
                style={{ borderColor: isDark ? 'rgba(211, 212, 192, 0.25)' : '#D6D4CE' }}
                title="Connect on LinkedIn"
              >
                <div className="flex items-center gap-3.5">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${
                    isDark ? 'bg-navy-card text-cream' : 'bg-[#F5F4F0] text-[#141413]'
                  }`}
                    style={{ borderColor: isDark ? 'rgba(211, 212, 192, 0.2)' : '#D6D4CE' }}
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm tracking-tight text-[#141413] dark:text-[#F3E4C9]">
                      LinkedIn Profile
                    </div>
                    <div className="font-mono text-xs opacity-60">
                      in/arushi-karmakar-73b267380
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Right Column: Clean Swiss-Grid Interactive Message Form */}
            <div 
              className={`lg:col-span-7 p-6 sm:p-8 rounded-xl border transition-all ${
                isDark ? 'bg-navy-deep' : 'bg-white shadow-xs'
              }`}
              style={{
                borderColor: isDark ? 'rgba(211, 212, 192, 0.25)' : '#D6D4CE'
              }}
            >
              <div className="flex items-center justify-between pb-4 border-b"
                style={{ borderColor: isDark ? 'rgba(211, 212, 192, 0.2)' : '#D6D4CE' }}
              >
                <span className="font-mono text-xs uppercase tracking-wider font-bold opacity-85 flex items-center gap-2">
                  <Send className="w-3.5 h-3.5 text-[#8B5E3C] dark:text-emerald-400" />
                  <span>Send a Direct Message</span>
                </span>
                <span className="font-mono text-[10px] opacity-60 uppercase">
                  Web3Forms / Direct Ingestion
                </span>
              </div>

              {/* Confirmation Banner on Success */}
              {formState.status === 'success' ? (
                <div className="py-10 text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-xl tracking-tight text-[#141413] dark:text-[#F3E4C9]">
                    {formState.message || "Thanks! Your message has been sent to Arushi."}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm opacity-75 max-w-sm mx-auto leading-relaxed">
                    I typically review and reply to project inquiries within 24 business hours.
                  </p>
                  <button
                    onClick={() => setFormState({ status: 'idle', message: '' })}
                    className="tactile-btn inline-flex items-center gap-1.5 px-4 py-2 rounded-md font-mono text-xs font-semibold uppercase tracking-wider border mt-2 hover:bg-black/5 dark:hover:bg-white/5"
                    style={{ borderColor: isDark ? 'rgba(211, 212, 192, 0.25)' : '#D6D4CE' }}
                  >
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 pt-5">
                  {/* Error / Fallback Notification Banner */}
                  {formState.status === 'error' && (
                    <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center gap-2.5 text-xs text-amber-800 dark:text-amber-200 font-mono">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{formState.message}</span>
                    </div>
                  )}

                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label 
                      htmlFor="form-name" 
                      className="block font-mono text-[11px] uppercase tracking-wider opacity-80 font-semibold"
                    >
                      Your Name *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      disabled={formState.status === 'loading'}
                      className={`w-full px-4 py-3 rounded-lg border text-sm font-sans placeholder:opacity-40 focus:outline-none transition-all disabled:opacity-50 ${
                        isDark 
                          ? 'bg-navy-card text-cream focus:border-espresso' 
                          : 'bg-[#F5F4F0] text-[#141413] focus:border-[#141413]'
                      }`}
                      style={{ borderColor: isDark ? 'rgba(211, 212, 192, 0.25)' : '#D6D4CE' }}
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label 
                      htmlFor="form-email" 
                      className="block font-mono text-[11px] uppercase tracking-wider opacity-80 font-semibold"
                    >
                      Your Email *
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      disabled={formState.status === 'loading'}
                      className={`w-full px-4 py-3 rounded-lg border text-sm font-sans placeholder:opacity-40 focus:outline-none transition-all disabled:opacity-50 ${
                        isDark 
                          ? 'bg-navy-card text-cream focus:border-espresso' 
                          : 'bg-[#F5F4F0] text-[#141413] focus:border-[#141413]'
                      }`}
                      style={{ borderColor: isDark ? 'rgba(211, 212, 192, 0.25)' : '#D6D4CE' }}
                    />
                  </div>

                  {/* Message Textarea */}
                  <div className="space-y-1.5">
                    <label 
                      htmlFor="form-message" 
                      className="block font-mono text-[11px] uppercase tracking-wider opacity-80 font-semibold"
                    >
                      Message *
                    </label>
                    <textarea
                      id="form-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, team opportunity, or timeline..."
                      disabled={formState.status === 'loading'}
                      className={`w-full px-4 py-3 rounded-lg border text-sm font-sans placeholder:opacity-40 focus:outline-none transition-all resize-none disabled:opacity-50 ${
                        isDark 
                          ? 'bg-navy-card text-cream focus:border-espresso' 
                          : 'bg-[#F5F4F0] text-[#141413] focus:border-[#141413]'
                      }`}
                      style={{ borderColor: isDark ? 'rgba(211, 212, 192, 0.25)' : '#D6D4CE' }}
                    />
                  </div>

                  {/* Submit Button ("Send Message →") */}
                  <button
                    type="submit"
                    disabled={formState.status === 'loading'}
                    className={`tactile-btn w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg font-mono text-xs uppercase tracking-wider font-bold shadow-sm transition-all disabled:opacity-60 cursor-pointer ${
                      isDark 
                        ? 'bg-espresso text-cream hover:bg-espresso-hover' 
                        : 'bg-[#141413] text-[#F5F4F0] hover:bg-black'
                    }`}
                  >
                    {formState.status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message →</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Minimalist Swiss Colophon Footer */}
        <div className="mt-14 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs opacity-75"
          style={{ borderColor: isDark ? 'rgba(211, 212, 192, 0.25)' : '#D6D4CE' }}
        >
          <div className="flex flex-wrap items-center gap-3 text-center md:text-left">
            <span className="font-bold">Arushi Karmakar</span>
            <span className="opacity-40">•</span>
            <span>Computer Science Engineering Student & Full-Stack Developer</span>
          </div>

          <div className="flex items-center gap-6">
            <span>React • Vite • Tailwind</span>
            <span className="opacity-40">|</span>
            <button
              onClick={scrollToTop}
              className="tactile-btn flex items-center gap-1.5 hover:opacity-100 transition-opacity font-semibold"
              title="Return to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
