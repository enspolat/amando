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
        'custom-gradient-2': 'linear-gradient(to right, #B39FFF 0%, #6A1ED2 100%)',
        'custom-gradient-3': 'linear-gradient(to right, #FD1F43 0%, #4BE0FF 100%)',
        'custom-gradient-4': 'linear-gradient(to right, #FD3820 0%, #FF844B 100%)',


      },
      filter: {
        'orange': 'invert(42%) sepia(94%) saturate(1352%) hue-rotate(346deg) brightness(97%) contrast(101%)',
        'gray': 'invert(42%) sepia(9%) saturate(6%) hue-rotate(314deg) brightness(94%) contrast(86%)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}