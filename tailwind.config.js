/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '900': '900ms',
      },
      colors:{
       purple: "#6949ff",
        ash: "#f5f5f5",
        lwhite: "#f0edff",
        dw: "#bbb",
        maxblack: "#00000022",
        minblack: "#00000099"
    },
    width:{
      "36%":"36%"
    }
    },
  
  },
  plugins: [],
}