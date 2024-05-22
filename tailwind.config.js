import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/purp_square_pattern.svg')",
      },
      colors: {
        accent: "#9A9BFF",
        base: {
          90: "#393636",
          80: "#4F4C4D",
          70: "#656263",
          60: "#7B7979",
        }
      },
      spacing: {
        '104': '28rem',
        '128': '32rem',
      }
    },
  },
  plugins: [daisyui],
};
