/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.js", "components/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto","sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        anton: ["Anton", "sans-serif"]
      },
      screens: {
        xs: "500px",
        xsm: "375px",
      },
      boxShadow: {
        "custom-light": " 0px 4px 25px -1px rgba(0, 0, 0, 0.20)",
      },
      colors: {
        primary: "#EF8121",
        textMain: "#1C486F",
        textBody: "#2C2C2C",
        tertialText: "#A2A8AF",
      },
            backgroundImage: {
        'gradient-animated': 'linear-gradient(270deg, #1C72B5, #1E317E)',
      },
      animation: {
        'gradient-x': 'gradientX 3s ease infinite',
      },
      keyframes: {
        gradientX: {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
      },
    },
  },
  plugins: [],
};
