/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontSize: {
        'hero': ['clamp(3rem, 10vw, 8rem)', '1'],
      },
      colors: {
        'agency-bg': '#0f0f0f', // A deep, premium black
        'agency-accent': '#ffffff',
      },
    },
  },
  plugins: [],
}