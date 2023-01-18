/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "green-primary": "#0D6440",
        "green-gradient": "#07472D",
        grey: "#EAEAEA",
        "stroke-number": "#EAEAEA",
        "add-blue": "#32ACAC",
        red: "#EC3537",
      },
      fontFamily: {
        "Open-sans": '"Open Sans"',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: false,
    themes: false,
  },
};
