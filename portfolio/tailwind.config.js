/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-100": "#1a1a1a",
        "dark-200": "#1f1f1f",
        "dark-300": "#2d2d2d",
        "dark-400": "#3d3d3d",
         "purple-600":"#8B5CF6",

      },
    },
  },
  plugins: [],
}

