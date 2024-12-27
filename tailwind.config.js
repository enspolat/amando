/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #455EFF 0%, #B33BF6 44%, #FF5F14 88%)',
      },
    },
  },
  plugins: [],
}