/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "ciaoo-light-blue": "#F2F5FF",
        "ciaoo-medium-blue": "#3059E3",
        "ciaoo-dark-blue": "#2B4FC9",
        "ciaoo-yellow": "#FFF97D",
        "ciaoo-black": "#060605",
        "ciaoo-light-grey": "#EDEDED",
        "ciaoo-medium-grey": "#99989D",
        "ciaoo-dark-grey": "#5F5E62",
      },
    },
  },
  plugins: [],
};
