/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#eef4ff',
          100: '#dde8ff',
          200: '#c2d4ff',
          300: '#9bb7ff',
          400: '#6d8eff',
          500: '#4d7cfe', // primary accent — electric blue
          600: '#3a5ef0',
          700: '#3148d6',
          800: '#2a3eae',
          900: '#283a89',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Fluid typography using clamp — mobile-first
        'fluid-xs':   'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'fluid-sm':   'clamp(0.875rem, 0.8rem + 0.3vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)',
        'fluid-lg':   'clamp(1.125rem, 1rem + 0.6vw, 1.375rem)',
        'fluid-xl':   'clamp(1.25rem, 1.1rem + 0.8vw, 1.625rem)',
        'fluid-2xl':  'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
        'fluid-3xl':  'clamp(1.875rem, 1.5rem + 1.8vw, 2.75rem)',
        'fluid-4xl':  'clamp(2.25rem, 1.7rem + 2.6vw, 3.75rem)',
        'fluid-5xl':  'clamp(2.75rem, 2rem + 3.8vw, 5rem)',
        'fluid-6xl':  'clamp(3.25rem, 2.2rem + 5vw, 6.5rem)',
      },
      letterSpacing: {
        tightest: '-0.05em',
      },
      backgroundImage: {
        'grid-dark':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(ellipse at center, rgba(77,124,254,0.18), transparent 60%)',
      },
      boxShadow: {
        'glow-accent': '0 0 40px -10px rgba(77,124,254,0.55)',
        'soft-xl': '0 30px 80px -30px rgba(0,0,0,0.55)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'gradient-shift': 'gradientShift 12s ease infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
