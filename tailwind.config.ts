import type { Config } from 'tailwindcss';

module.exports = {
  content: ['./index.html'],
  theme: {
    screens: {
      fullWidth: '1920px',
      bigDesktop: '1600px',
      desktopLg: '1399px',
      desktop: '1024px',
      tablet: '991px',
      mobile: '767px',
      mobileSm: '576px',
      minWidth: '320px',
    },
    colors: {
      gray: '#bfbfbf',
      white: '#fff',
      black: '#222',
      blue: '#38bdf8',
      red: '#ff0000',
      'pink-dark': '#2b213a',
      'purple-dark': '#0f172a',
    },
    fontFamily: {
      oswald: 'Oswald, sans-serif',
    },
    extend: {
      animation: {
        'fly-logo':
          'fly-x var(--fly-duration-x) linear infinite alternate, fly-y var(--fly-duration-y) linear infinite alternate, fly-color-x calc(var(--fly-duration-x) * 5) step-start infinite, fly-color-y calc(var(--fly-duration-y) * 5) step-start infinite',
      },
      keyframes: {
        'fly-x': {
          from: { left: '0' },
          to: { left: 'calc(100% - var(--fly-logo-w))' },
        },
        'fly-y': {
          from: { top: '0' },
          to: { top: 'calc(100% - var(--fly-logo-h))' },
        },
        'fly-color-x': {
          '0%': { '--fly-color-x': '0' },
          '20%': { '--fly-color-x': '2' },
          '40%': { '--fly-color-x': '4' },
          '60%': { '--fly-color-x': '1' },
          '80%': { '--fly-color-x': '3' },
          '100%': { '--fly-color-x': '0' },
        },
        'fly-color-y': {
          '0%': { '--fly-color-y': '0' },
          '20%': { '--fly-color-y': '2' },
          '40%': { '--fly-color-y': '4' },
          '60%': { '--fly-color-y': '1' },
          '80%': { '--fly-color-y': '3' },
          '100%': { '--fly-color-y': '0' },
        },
      },
    },
  },
} satisfies Config;
