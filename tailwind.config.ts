/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ['./src/**/*.{html,js,ts,vue}'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        primary: '#B9FF66',
        dark: '#000000',
        gray: '#F3F3F3',
        lightDark: '#191A23',
        light: '#FFFFFF',
        white: '#FFFFFF',
        deepBlue: '#0D0C22',
        brightBlue: '#2D8CFF',
        darkBlue: '#33475B',
        red: '#D81F26',
        orange: '#FF9900',
        peach: '#FF7A59',
      },
      fontFamily: {
        kablammo: ['Kablammo', 'cursive'],
        grotesk: ["'Space Grotesk'", 'sans-serif'],
      },
      boxShadow: {
        'custom-dark': '0px 5px 0px 0px #191A23',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['light'],
  },
};
