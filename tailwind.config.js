/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#34A853",
        tertiary: "#4CB267",
        black: "#000000",
        silver: "#D9D9D9",
        gray: "#636363",
      },
      fontFamily: {
        rregular: ["Roboto-Regular", "sans-serif"],
        rmedium: ["Roboto-Medium", "sans-serif"],
        rmediumitalic: ["Roboto-MediumItalic", "sans-serif"],
        rbold: ["Roboto-Bold", "sans-serif"],
        rbolditalic: ["Roboto-Bold", "sans-serif"],
        rblack: ["Roboto-Black", "sans-serif"],
        rblackitalic: ["Roboto-BlackItalic", "sans-serif"],
        ritalic: ["Roboto-Italic", "sans-serif"],
        rlight: ["Roboto-Light", "sans-serif"],
        rlightitalic: ["Roboto-LightItalic", "sans-serif"],
        rthin: ["Roboto-Thin", "sans-serif"],
        rthinitalic: ["Roboto-ThinItalic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
