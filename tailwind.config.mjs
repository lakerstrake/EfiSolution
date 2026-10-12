/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Identidad: tinta + papel cálido + brasa. Lejos del azul SaaS genérico.
        accent: {
          50: '#fff4ed',
          100: '#ffe5d4',
          200: '#ffc6a8',
          300: '#ff9d71',
          400: '#f26a35',
          500: '#d9480f',
          600: '#b93a0b',
          700: '#962f0b',
          800: '#782810',
          900: '#622310',
        },
        // Neutros cálidos (sobrescriben zinc en todo el sitio).
        zinc: {
          50: '#faf8f3',
          100: '#f3efe6',
          200: '#e5dfd2',
          300: '#cfc7b6',
          400: '#a39a88',
          500: '#6f675a',
          600: '#5a5347',
          700: '#433d34',
          800: '#2b2721',
          900: '#1c1915',
          950: '#12100d',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Pisos pensados para 320px de viewport; techos para pantallas/TV.
        'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.3vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)',
        'fluid-lg': 'clamp(1.1rem, 1rem + 0.6vw, 1.375rem)',
        'fluid-xl': 'clamp(1.2rem, 1.05rem + 0.8vw, 1.625rem)',
        'fluid-2xl': 'clamp(1.35rem, 1.15rem + 1vw, 2rem)',
        'fluid-3xl': 'clamp(1.6rem, 1.25rem + 1.8vw, 2.75rem)',
        'fluid-4xl': 'clamp(1.75rem, 1.2rem + 2.75vw, 3.75rem)',
        'fluid-5xl': 'clamp(2rem, 1.4rem + 3.2vw, 5rem)',
        'fluid-6xl': 'clamp(2.5rem, 1.8rem + 4.2vw, 6.5rem)',
      },
      letterSpacing: {
        tightest: '-0.025em',
      },
      boxShadow: {
        'glow-accent': '0 0 36px -10px rgba(217,72,15,0.45)',
        'hard': '4px 4px 0 0 rgb(18,16,13)',
        'hard-accent': '4px 4px 0 0 rgb(217,72,15)',
        'soft-xl': '0 30px 80px -30px rgba(0,0,0,0.55)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
