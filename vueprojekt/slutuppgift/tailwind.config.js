module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        auto: "auto",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
