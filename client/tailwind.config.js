/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'bounce-in': 'bounceIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
          'float': 'float 3s ease-in-out infinite',
          'spin': 'spin 1s linear infinite',
        },
        bounceIn: {
          '0%': { transform: 'scale(0.5)', opacity: 0 },
          '50%': { transform: 'scale(1.2)', opacity: 1 },
          '100%': { transform: 'scale(1)' },
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      colors: {
        buttonBgcolor: '#0067FF',
        yellowcolor: '#FEB60D',
        purpleColor: '#9771FF',
        irisBlueColor: '#01B5C5',
        headingColor: '#4EF45F',
        textColor: '#4E545F',
        primaryColor: "blue",
      },
      boxShadow: {
        pannelShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;',
      },
    },
  },
  plugins: [],
}