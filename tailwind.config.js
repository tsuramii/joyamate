/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#A44200",

          secondary: "#F2F3AE",

          accent: "#69140E",

          neutral: "#1c1917",

          "base-100": "#F3F3F3",

          info: "#a1cae3",

          success: "#116937",

          warning: "#f3c95e",

          error: "#ed6e78",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
