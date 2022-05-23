const generateColorClass = (variable) => {
  return ({ opacityValue }) =>
    opacityValue
      ? `rgba(var(--${variable}), ${opacityValue})`
      : `rgb(var(--${variable}))`;
};

const textColor = {
  primary: generateColorClass("text-primary"),
};

const backgroundColor = {
  primary: generateColorClass("bg-primary"),
};

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#222222",
        lgray: "#333333",
        llgray: "#aeafb1",
        dblue: "#0d1218",
        darkPurple: "#e7c8ff",
        darkRed: "#d32b43",
        cardPurple: "#dcb1ff",
        cardRed: "#ff6666",
        cardLime: "#D3FE57",
        cardAqua: "#50DBB4",
      },
      textColor,
      backgroundColor,
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
      sm: { max: "480px" },
      md: { max: "768px" },
      lg: { max: "976px" },
      bp1: { max: "1236px" },
      xl: { max: "1366px" },
      xxl: "1440px",
    },
  },
  plugins: [],
};
