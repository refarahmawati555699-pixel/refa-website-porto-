/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/components/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'text-2xl',
    'text-pink-200',
    'font-bold',
    'text-white',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};