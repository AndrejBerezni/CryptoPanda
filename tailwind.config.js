/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#303F9F',
        secondary: '#90CAF9',
        accent: '#1A237E',
        textColor: '#212121',
        textColorDark: '#E0E0E0',
        textColorSecondary: '#757575',
        backgroundColor: '#F5F5F5',
        backgroundColorDark: '#121212',
        greenAccent: '#4CAF50',
        redAccent: '#F44336',
      },
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
        source: ['Source Code Pro', 'monospace'],
      },
    },
  },
  plugins: [],
}
