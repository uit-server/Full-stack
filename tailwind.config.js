/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '361px',    // Custom screen size
        'sm': '640px',    // Default small screen size
        'md': '768px',    // Default medium screen size
        'lg': '1024px',   // Default large screen size
        'xl': '1280px',   // Default extra-large screen size
        '2xl': '1536px',  // Default 2x-large screen size
      }
    }
  },
  plugins: [],
}

