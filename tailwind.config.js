/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "mobile1": "370px",
        "mobile2": "470px",
        "mobile3": "650px",
        "mobile4": "1023px",
        // "mobile1": { max: "360px" },
        // "mobile2": { max: "400px" },
        // "mobile3": { max: "510px" },
        "max-lg": { max: "1023px" },
      },
      backgroundImage: {
        "not-found": "url('/bg-404.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      listStyleImage: {
        lampada: "url('/public/lampada.png')",
      },
      fontFamily: {
        oswald: ["Oswald"],
        title: ["Georgia Pro"],
        manrope: ["Manrope"],
        automobile: ["Automobile Contest"],
        montserrat: ["Montserrat"],
      },
      colors: {
        custom: {
          laranja1: "#FFDBC0",
          laranja2: "#ED996C",
          laranja3: "#E57A44",
          amarelo1: "#FFC959",
          amarelo2: "#F9D971",
          bege1: "#FFE7D5",
          bege2: "#F9DEC9",
          azul1: "#0EB0CC",
          azul2: "#CFEFF5",
          marrom1: "#BA5624",
          cinza1: "#444444",
          cinza2: "#595959",
          cinza3: "#2F2F2F",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
