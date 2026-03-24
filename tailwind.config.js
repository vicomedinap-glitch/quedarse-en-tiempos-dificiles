/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#FFFFFF",
        accent: "#D4A574", // warm tone
        darkGray: "#2C2C2C",
        lightGray: "#F5F5F5",
      },
      fontFamily: {
        serif: ["Merriweather", "Georgia", "serif"],
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in",
        slideUp: "slideUp 0.8s ease-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { transform: "translateY(30px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};