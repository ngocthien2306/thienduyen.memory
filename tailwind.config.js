/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          350: '#ff6b9d',
          450: '#ff8fb3'
        },
        teal: {
          350: '#4ecdc4'
        }
      },
      fontFamily: {
        'dancing': ['Dancing Script', 'cursive'],
        'quicksand': ['Quicksand', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'heartbeat': 'heartbeat 2s ease-in-out infinite',
        'sparkle': 'sparkle 3s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}