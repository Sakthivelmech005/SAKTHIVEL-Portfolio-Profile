import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './sections/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 45px rgba(14, 165, 233, 0.14)',
        profile: '0 0 60px rgba(14, 165, 233, 0.25), 0 0 30px rgba(14, 165, 233, 0.15), inset 0 0 30px rgba(14, 165, 233, 0.08)',
      },
      backgroundImage: {
        'hero-pattern':
          'radial-gradient(circle at top, rgba(14, 165, 233, 0.16), transparent 40%), radial-gradient(circle at bottom right, rgba(255,255,255,0.08), transparent 22%)',
      },
      colors: {
        graphite: '#141414',
        electric: '#0EA5E9',
        silver: '#CBD5E1',
      },
    },
  },
  plugins: [],
};

export default config;
