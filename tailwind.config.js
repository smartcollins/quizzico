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
        sbg: "#6949ff",
        ibg: "#f5f5f5",
        lw: "#f0edff",
        dw: "#bbb",
        maxb: "#00000022",
        minb: "#00000099"
    }
    },
  
  },
  plugins: [],
}