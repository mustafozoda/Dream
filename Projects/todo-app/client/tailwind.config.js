/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      phone: "640px", // => @media (min-width: 640px) { ... }
      tablet: "768px", // => @media (min-width: 768px) { ... }
      laptop: "1024px", // => @media (min-width: 1024px) { ... }
      desktop: "1280px", // => @media (min-width: 1280px) { ... }
      "large-desktop": "1536px", // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
