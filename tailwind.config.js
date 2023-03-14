/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  safelist: [
    { pattern: /bg-.*-50/ },
    {
      pattern: /text-.*-600/,
    },
    {
      pattern: /from-.*-50/,
    },
    {
      pattern: /to-.*-50/,
    },
    {
      pattern: /text-.*/,
    },
    {
      pattern: /font-.*/,
    },
  ],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/container-queries"),
  ],
};
