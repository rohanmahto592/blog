npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

in tailwind.config.js replace module.exports with
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
add these import in the global.css file
@tailwind base;
@tailwind components;
@tailwind utilities;




https://tailwindcss.com/docs/guides/nextjs