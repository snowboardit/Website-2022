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
        whiteTrans: "var(--whiteTrans)",
        darkBlueSemiTrans: "var(--darkBlueSemiTrans)",
        dullBlue: "var(--dullBlue)",
        dullBlueSemiTrans: "var(--dullBlueSemiTrans)",
        lightBlue: "var(--lightBlue)",
        lightOrange: "var(--lightOrange)",
        orange: "var(--orange)",
        orangeTrans: "var(--orangeTrans)",
        orangeSemiTrans: "var(--orangeSemiTrans)",
      },
      backgroundImage: {
        'circuit-pattern': "url('/images/circuit-board.svg')"
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        slideInLeft: 'slideInLeft 1s ease-in-out'
      }
    },
  },
  plugins: [],
}
