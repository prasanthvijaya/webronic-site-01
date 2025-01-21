/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        depth: {
          '0%, 100%': { transform: 'scale(1)' }, // Normal size
          '50%': { transform: 'scale(1.2)' },   // Zoomed in
        },
      },
      animation: {
        depth: 'depth 7s ease-in-out infinite', // Infinite scaling animation
      },
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}
