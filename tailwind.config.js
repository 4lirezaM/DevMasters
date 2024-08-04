import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      borderWidth: {
        1: '1px',
        3: '3px',
        5: '5px',
        10: '10px',
      },
    },
  },
  plugins: [daisyui],
  corePlugins: {
    fontFamily: false,
  },
};
