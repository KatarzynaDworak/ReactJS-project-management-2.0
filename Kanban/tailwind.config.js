/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      color: {
        "twitter-blue": "#1DA1F2",
      },
    },
  },
  plugins: [],
}
