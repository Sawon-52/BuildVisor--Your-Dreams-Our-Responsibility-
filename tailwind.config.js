/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      syne: ["Syne", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    colors: {
      "primary": "#FF9900",
      "black": "#000000",
      "ash": "#333333",
      "ofwhite": "#B4B4B4",
      "white": "#FFFFFF",
      
    },
    
    extend: {},
  },
  plugins: [],
};
