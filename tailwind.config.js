/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        primary: '#3390ec',
        dangerColor: '#df3f40',
        messageOutColor: '#5ca853',
        lightFilledColor: '#eef6fd',
        textColor: '#000000',
        greenColor: '#70b768',
        secondaryColor: '#c4c9cc',
        warningColor: '#fed85a',
        linkColor: '#00488f',
        darkprimaryColor: '#8774e1',
        darklightFilledColor: '#292730',
        darkdangerColor: '#ff595a',
        darksecondaryColor: '#aaaaaa',
        darkmessageBackgroundColor: '#212121',
      },
    },
  },
  plugins: [],
}