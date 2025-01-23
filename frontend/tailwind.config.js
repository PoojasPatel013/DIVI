/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue,php}"], // Added Vue and PHP support for content paths
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        primary: {
          DEFAULT: "var(--color-primary, #1a1a1a)", // Runtime CSS variables for flexibility
          hover: "var(--color-primary-hover, #333333)",
          light: "#4d4d4d", // Added lighter shade for primary
          dark: "#0f0f0f", // Added darker shade for primary
        },
        secondary: "#f5f5f5", // Example secondary color for light themes
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          xs: "480px", // Added extra-small breakpoint for small devices
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
  darkMode: "class", // Enable dark mode with a class
  plugins: [
    require("@tailwindcss/forms"), // Added form styles plugin
    require("@tailwindcss/typography"), // Added typography plugin
    require("@tailwindcss/aspect-ratio"), // Added aspect ratio plugin
  ],
};
