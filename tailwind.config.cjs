/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    fontFamily: {
      sans: ["IBM Plex Mono", "monospace"],
    },
  },
  plugins: [require("@catppuccin/tailwindcss")],
};
