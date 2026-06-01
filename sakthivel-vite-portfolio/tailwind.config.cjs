module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#020202',
          900: '#080707',
          800: '#121010',
          700: '#1f1c1b',
          600: '#2a2524',
        },
        gold: '#d4af37',
        ivory: '#f5efe0',
      },
      boxShadow: {
        glow: '0 0 60px rgba(212, 175, 55, 0.16)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, rgba(212, 175, 55, 0.18), transparent 25%), radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.08), transparent 22%)',
      },
    },
  },
  plugins: [],
};
