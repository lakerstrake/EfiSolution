/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#ebf2ff',
          100: '#d9e6ff',
          200: '#b4ccff',
          300: '#7ea6ff',
          400: '#3f7cff',
          500: '#0b54fd',
          600: '#0843d0',
          700: '#0939aa',
          800: '#0b3387',
          900: '#102f70',
        },
      },
      fontFamily: {
        display: ['"Sora"', 'system-ui', 'sans-serif'],
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.3vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.6vw, 1.375rem)',
        'fluid-xl': 'clamp(1.25rem, 1.1rem + 0.8vw, 1.625rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
        'fluid-3xl': 'clamp(1.875rem, 1.5rem + 1.8vw, 2.75rem)',
        'fluid-4xl': 'clamp(2.25rem, 1.7rem + 2.6vw, 3.75rem)',
        'fluid-5xl': 'clamp(2.75rem, 2rem + 3.8vw, 5rem)',
        'fluid-6xl': 'clamp(3.25rem, 2.2rem + 5vw, 6.5rem)',
      },
      letterSpacing: {
        tightest: '-0.05em',
      },
      boxShadow: {
        'glow-accent': '0 0 36px -10px rgba(11,84,253,0.5)',
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
