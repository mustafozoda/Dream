/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      phone: { max: "639px" }, // => @media (max-width: 639px) { ... }
      tablet: { max: "767px" }, // => @media (max-width: 767px) { ... }
      laptop: { max: "1023px" }, // => @media (max-width: 1023px) { ... }
      desktop: { max: "1279px" }, // => @media (max-width: 1279px) { ... }
      "large-desktop": { max: "1535px" }, // => @media (max-width: 1535px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
