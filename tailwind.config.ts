import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Shared semantic names keep every page on the same brand palette.
        navy: "#17191D",
        // Brand red — matches the deep crimson in the DC monogram logo
        gold: "#B01020",
        // Subtle hover: slightly lighter but NOT bright
        "gold-hover": "#8C0C1A",
        cream: "#F7F7F5"
      }
    }
  },
  plugins: []
};

export default config;
