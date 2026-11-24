/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Alabaster / Editorial Ink system (Default)
        alabaster: {
          DEFAULT: '#F5F5F3',
          surface: '#FFFFFF',
          card: '#EFEFED',
          border: '#D8D8D4',
        },
        ink: {
          DEFAULT: '#111111',
          muted: '#555555',
          faint: '#888888',
        },
        // Studio Navy system (Toggle theme)
        navy: {
          DEFAULT: '#0A2947',
          deep: '#061a2e',
          surface: '#0d3257',
          card: '#071d33',
          border: 'rgba(211, 212, 192, 0.2)',
        },
        cream: {
          DEFAULT: '#F3E4C9',
          muted: '#e5d1b1',
        },
        oat: {
          DEFAULT: '#D3D4C0',
          sage: '#D3D4C0',
        },
        espresso: {
          DEFAULT: '#8B5E3C',
          hover: '#744d30',
        }
      },
      fontFamily: {
        syne: ['"Syne"', '"Plus Jakarta Sans"', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Syne"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'heading': '-0.02em',
        'section': '0.08em',
        'wide-meta': '0.14em',
      },
      lineHeight: {
        'tight-display': '1.05',
        'relaxed-body': '1.6',
      }
    },
  },
  plugins: [],
}
