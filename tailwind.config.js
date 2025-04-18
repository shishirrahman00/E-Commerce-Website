/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1240px',
    },
    extend: {
      fontFamily: {
        integral: ['Integral-Bold', 'sans-serif'],
        satoshi: ['Satoshi-Regular', 'sans-serif'],
        satoshiBold: ['Satoshi-Bold', 'sans-serif'],
        satoshiMedium: ['Satoshi-Medium', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
