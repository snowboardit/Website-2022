module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maxLightGray: '#DCDDDB',
        maxDarkGray: '#555B6E'
      },
      backgroundImage: {
        'circuit-pattern': "url('/images/circuit-board.svg')"
      }
    },
  },
  plugins: [],
}
