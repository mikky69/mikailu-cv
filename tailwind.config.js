/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Crimson Pro", "Georgia", "serif"],
        mono: ["DM Mono", "monospace"],
      },
      colors: {
        navy: {
          900: "#071525",
          800: "#0B1F3A",
          700: "#102848",
          600: "#163358",
        },
        steel: {
          400: "#6B9EC7",
          500: "#4A7FAA",
        },
        gold: {
          400: "#D4A940",
          500: "#C49A2A",
          600: "#A8821F",
        },
      },
    },
  },
  plugins: [],
};
