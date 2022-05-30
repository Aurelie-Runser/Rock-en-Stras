module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "pink": {
          "300_50": "#f9a8d4"
         }
      },
      
      "fontSize": {
        "base": "1rem",
        "lg": "1.25rem",
        "xl": "2rem",
        "2xl": "3.125rem",
        "3xl": "3.4375rem"
       },

      "fontFamily": {
        "base": "Sora",
        "h1": "Parisienne",
        "h2": "Metal Mania",
        "h3": "Germania One",
        "button": "Pacifico"
      },
    },

  },
  plugins: [],
}
