/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'sm': {'min': '320px', 'max': '640px'},
      'md': {'min': '641px', 'max': '768px'},
      'lg': {'min': '769px', 'max': '1023px'},
      'xl': {'min': '1024px', 'max': '1280px'},
      '2xl': {'min': '1281px'},
    },
    extend: {
      backgroundImage: {
        'main': "url('/background/bgs4.jpg')",
        'spin-bg': "url('/background/bgs6.jpg')",
        'spin-wheel': "url('/spin/wheel.png')",
        'spin-wheel-bg': "url('/spin/wheelBorder.png')",
        'spin-arrow': "url('/spin/wheelBorder.png')",
      },  
      fontFamily: {
        gamer: ["Gamer", "cursive"],
        gamer1:["Gamer1"],
        Blockt:["Gamer2"],
        sigmaFive:["sigmaFive"],
        angry:["angry"],
        avengers:["avengers"],
        Iomanoid:["Iomanoid"]
      },
      keyframes: {
        'jelly': {
            '25%' :{
              transform: 'scale(0.9, 1.1)'
            },
            '50%': {
              transform: 'scale(1.1, 0.9)'
            },
            '75%' :{
              transform: 'scale(0.95, 1.05)'
            }
        }
      },
      animation: {
        jelly: 'jelly 1s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

