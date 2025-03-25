/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        Neutral900: "hsl(227, 75%, 14%)",
        Neutral800: "hsl(226, 25%, 17%)",
        Neutral700: "hsl(225, 23%, 24%)",
        Neutral600: "hsl(226, 11%, 37%)",
        Neutral300: "hsl(0, 0%, 78%)",
        Neutral200: "hsl(217, 61%, 90%)",
        Neutral100: "hsl(0, 0%, 93%)",
        Neutral0: "hsl(200, 60%, 99%)",
        Red400: "hsl(3, 86%, 64%)",
        Red500: "hsl(3, 71%, 56%)",
        Red700: "hsl(3, 77%, 44%)",
        LightGradient: "linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)",
        DarkGradient: "linear-gradient(180deg, #040918 0%, #091540 100%)",
      },
      fontFamily: {
        NotoSans: ["Noto Sans", "sans-serif"],
      },
      screens: {
        375: "375px",
        425: "425px",
        500: "500px",
        1440: "1440px",
      },
      backgroundImage: {
        LightGradient: "linear-gradient(180deg, #ebf2fc 0%, #eef8f9 100%)",
        DarkGradient: "linear-gradient(180deg, #040910 0%, #091540 100%)",
      },
    },
  },
  plugins: [],
};
