/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'zarno-bg-dark': '#1A152A',
        'zarno-surface-dark': 'rgba(63, 42, 108, 0.18)',
        'zarno-accent-purple': '#3F2A6C',
        'zarno-accent-purple-soft': '#6F5A8A',
        'zarno-gold-main': '#D4AF7F',
        'zarno-gold-soft': '#E3CBA5',
        'zarno-cream-bg': '#F9F7F2',
        'zarno-cream-soft': '#F3EDE0',
        'zarno-text-primary-dark': '#FFFFFF',
        'zarno-text-secondary-dark': 'rgba(255,255,255,0.6)',
        'zarno-text-primary-light': '#2B223A',
        'zarno-success': '#2EBD85',
        'zarno-danger': '#E04646',
        'zarno-border-glass-dark': 'rgba(255,255,255,0.08)',
        'zarno-border-glass-light': 'rgba(0,0,0,0.06)'
      },
      borderRadius: {
        'zarno-sm': '12px',
        'zarno-md': '16px',
        'zarno-lg': '24px'
      },
      boxShadow: {
        'zarno-card': '0 12px 30px rgba(15,17,21,0.12)'
      },
      backdropBlur: {
        'zarno': '16px'
      }
    },
  },
  plugins: [],
}