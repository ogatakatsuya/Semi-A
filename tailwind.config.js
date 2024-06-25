/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,ts,svelte}", "./src/app.html"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans JP"],
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-flowing": {
          textShadow: "1px  1px 4px white, -1px  1px 4px white, 1px -1px 4px white, -1px -1px 4px white"
        },
        ".text-shadow-none": {
          textShadow: "none"
        }
      };
      addUtilities(newUtilities);
    }
  ],
}

