/** @type {import('tailwindcss').Config} */
module.exports = {
    // mode: 'jit',
    // // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index'],
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
   
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Roboto', 'sans-serif']
        },
      },
      
  },
  plugins: [
      require('@tailwindcss/typography'),
    ],
  }



  // , ['Roboto Slab', 'serif']