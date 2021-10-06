module.exports = {
  
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "lightOrange":"#FFB85D",
        "orange": "#FF8300"
      }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
