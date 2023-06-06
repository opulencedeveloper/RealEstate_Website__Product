const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
      }, 
      colors: {
        primary: "#537FE7",
        primaryshade: "#EDF2FD",
        secondary: "#181823",
        secondary2: "#737373",
        secondary3: "#E8E8E8"
      },
      fontWeight: {
        custom: 400,
      },
    }
  },
  plugins: [],
}

