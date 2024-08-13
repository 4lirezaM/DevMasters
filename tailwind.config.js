import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      scale: {
        102: '1.02',
      },
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
