module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      title: ["Orbitron", "sans-serif"],
      body: ["Orbitron", "sans-serif"],
      openSea: ['"Lexend Deca"', "sans-serif"],
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    extend: {
      colors: {
        primary: "#012970",
        secondary: "#4154f1",
        third: "#5969f3",
        fourth: "#fafbff",
        fifth: "#ecf3ff",
      },
      lineHeight: {
        hero: "4.5rem",
      },
    },
    backgroundImage: {
      footer: "url('/moon.webp')",
      site: "url('/back.webp')",
    },
  },
  variants: {
    extend: {
      bgColor: ["group-hover"],
      textColor: ["group-hover"],
    },
  },
  plugins: [],
};
