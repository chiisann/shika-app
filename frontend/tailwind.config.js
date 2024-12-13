/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('/background2.jpg')",
      },
      animation: {
        "pulse-grow": "pulse-grow 2s infinite",
      },
      keyframes: {
        "pulse-grow": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(1.1)", opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
};
