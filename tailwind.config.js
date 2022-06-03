const Nth = require('tailwind-nth-child')
const nth2n =  new  Nth('2n','2n+1')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "pink": {
          "300_90": "#f9a8d490"
         },
         gray: {
           "700_50": "#4B556350"
         }
      },
      
      "fontSize": {
        "base": "1rem",
        "lg": "1.25rem",
        "xl": "2rem",
        "2xl": "2.5rem",
        "3xl": "3rem"
       },

      "fontFamily": {
        "base": "Sora",
        "h1": "Parisienne",
        "h2": "Metal Mania",
        "h3": "Germania One",
        "button": "Pacifico"
      },

      screens: {
        'light': { 'raw': '(prefers-color-scheme: light)' },

      },
    },

  },
  plugins: [
    nth2n.nthChild(),
  ],
}
