/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        embassyTheme: {
          primary: '#ff5607',
          secondary: '#ff9800',
          accent: '#3A4256',
          neutral: "#3D4451",
          'base-100': '#FFFFFF'
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),],
}
