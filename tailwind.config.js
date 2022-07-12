module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maxLightGray: '#DCDDDB',
        maxDarkGray: '#555B6E',
        maxSkyBlue: 'rgb(118,206,240)',
        maxSkyLightBlue: 'rgb(195,231,255)'
      },
      backgroundImage: {
        'circuit-pattern': "url('/images/circuit-board.svg')"
      }
    },
  },
  plugins: [],
}
