/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
            "0%": {
                opacity: 0
            },
            "100%": {
                opacity: 1
            },
          },
        },
      animation: {
        fadein: 'fade-in 1.5s ease-in-out 0s' 
      },
    }
  },

  plugins: [],
}

