import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cosmic deep space
        'cosmos-black': '#0a0a0f',
        'cosmos-deep': '#121218',
        'cosmos-void': '#1a1a24',
        'cosmos-nebula': '#242432',

        // Neural/constellation accent colors
        'neural-gold': '#d4af37',
        'neural-copper': '#b87333',
        'neural-silver': '#c0c0c0',
        'neural-blue': '#6b8cae',

        // Scholarly neutrals
        'parchment': '#f8f6f0',
        'ink-black': '#1a1a1a',
        'ink-fade': '#4a4a4a',
        'manuscript': '#e8e4d8',
      },
      fontFamily: {
        // Serif for headings and theory names
        serif: ['Cormorant Garant', 'EB Garamond', 'Georgia', 'serif'],
        // Sans for body text
        sans: ['Inter', 'system-ui', 'sans-serif'],
        // Mono for technical details
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      backgroundImage: {
        'neural-gradient': 'radial-gradient(circle at 50% 50%, rgba(107, 140, 174, 0.15) 0%, rgba(10, 10, 15, 0) 50%)',
        'constellation-glow': 'radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
