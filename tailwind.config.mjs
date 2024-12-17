/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        driftwood: {
          50: "#f7f4ef",
          100: "#ebe4d6",
          200: "#d9caaf",
          300: "#c2a882",
          400: "#b08c5f",
          500: "#a98055",
          600: "#8a6244",
          700: "#6f4c39",
          800: "#5f4034",
          900: "#523931",
          950: "#2f1e19",
        },
      },
    },
  },
};
