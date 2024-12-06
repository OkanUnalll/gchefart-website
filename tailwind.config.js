/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '10rem',
        }
      },
      colors: {
        blueprimary: {
          DEFAULT: '#A146FF',
          dark: '#f2f2f2',
        }
      }
    },
  },
  plugins: [],
}
