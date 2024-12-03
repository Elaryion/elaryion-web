/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        primary: {
          DEFAULT: '#789DBC',
          hover: '#6b8eaa',
          light: '#789DBC1A',
        },
        secondary: {
          DEFAULT: '#585669',
          dark: '#4b4957',
          light: '#f8f9fa',
        },
        tertiary: {
          DEFAULT: '#9CCFD8',
        },
      },
    },
  },
  plugins: [],
} 