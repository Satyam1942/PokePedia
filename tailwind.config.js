/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      "buttonColor":"#30a7d7" ,
      "buttonColorSelected":"#30a7d8",
      "buttonFontColor" : "white",
      "hoverCardColor":"#f2f2f280",
      "mainBackgroundColor":"white",
      "borderColor":"black",
      "detailsCard":"#f2f2f290",
      "headerBgColor":"#313131"
    },
    extend: {}
  },
  plugins: [],
}