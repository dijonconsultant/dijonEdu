import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Shared semantic names keep every page on the same brand palette.
        navy: "#17191D",
        gold: "#C91F2A",
        cream: "#F7F7F5"
      }
    }
  },
  plugins: []
};

export default config;
