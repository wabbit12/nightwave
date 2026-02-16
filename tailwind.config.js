/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: {
          950: "#020617",
          900: "#020617",
          800: "#020617"
        },
        neon: {
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2"
        }
      }
    }
  },
  plugins: []
};

