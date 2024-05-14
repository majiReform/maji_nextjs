/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "yellow": "#FFFF00",
      "greybg": "#E6E6E6",
      "white": "#FFFFFF",
      "black": "#000000",
      "adminbg": "#F6F4F4",
      "deletebutton": "#EC3B3B"
    },
    extend: {},
  },
  plugins: [],
}

