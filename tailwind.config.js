/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        inter: ['"Inter"'],
        federo:  ['"Federo"'],
        roboto: ['"Roboto"'],
        openSans: ['"Open Sans"'],
      }
    }
  },
  plugins: [],
}
