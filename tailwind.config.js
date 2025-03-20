/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./product-details-page.html",
    "./category-page.html",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1240px",
    },
    extend: {},
  },
  plugins: [],
};
