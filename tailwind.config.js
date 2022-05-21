module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#222222",
        lgray: "#333333",
        llgray: "#aeafb1",
        primary: "#dcb1ff",
        dblue: "#0d1218",
        cardPurple: "#dcb1ff",
        darkPurple: "#e7c8ff",
        cardRed: "#ff6666",
        cardYellow: "#D3FE57",
        cardAqua: "#50DBB4",
      },
      boxShadow: {
        borderShadow: "0 0 0 1px #000000",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      logo: ["Prata"],
      numbers: ["Space Mono"],
      serif: ["Merriweather", "serif"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1366px",
      xxl: "1440px",
    },
  },
  plugins: [],
};
