/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,ts,svelte}", "./src/app.html"],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-in forwards',
        fadeOut: 'fadeOut 1s ease-in forwards',
        slideIn: 'slideIn 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-50%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
