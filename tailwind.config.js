/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
        'sans': ['Product Sans', 'sans-serif'],
      },
      colors: {
        'blue': '#356AC3',
        'red': '#EA4335',
        'green': '#34A853',
        'yelllow': '#FBBC04',
        'white-secondary': '#FDFDFD',
        'black': '#252525',
        'low-black': '#656C73',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}