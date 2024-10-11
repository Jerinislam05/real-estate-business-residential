/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        display: "'Josefin Sans', sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        myTheme: {
          "primary": "#4CAF50", 
          "secondary": "#FF5722",
          "accent": "#9C27B0",
          "neutral": "#3D4451",
          "base-100": "#FFFFFF", 
          "info": "#2094F3",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        }
      }
    ]
  }
};
