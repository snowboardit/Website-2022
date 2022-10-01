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
        maxSkyLightBlue: 'rgb(195,231,255)',
        darkBlue: "var(--darkBlue)",
        darkBlueSemiTrans: "var(--darkBlueSemiTrans)",
        dullBlue: "var(--dullBlue)",
        dullBlueSemiTrans: "var(--dullBlueSemiTrans)",
        lightBlue: "var(--lightBlue)",
        lightOrange: "var(--lightOrange)",
        orange: "var(--orange)",
        orangeSemiTrans: "var(--orangeSemiTrans)",
      },
      backgroundImage: {
        'circuit-pattern': "url('/images/circuit-board.svg')"
      }
    },
  },
  plugins: [],
}
