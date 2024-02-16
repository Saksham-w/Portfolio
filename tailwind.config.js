/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.js",
  ],
  theme: {
    extend: {
      colors: {
        // mycolor:'#1DA1F2',
        mycolor:'#EBD442',
        // mutedtext:'#9ca4b4',
        mutedtext:'#A9AFBA',
      },
      fontFamily:{
        logo: ['Great Vibes']
      }
    },
  },
  plugins: [],
}


