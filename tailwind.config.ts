/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/renderer/**/*.{js,jsx,ts,tsx}",  // ✅ Important for Electron renderer
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
