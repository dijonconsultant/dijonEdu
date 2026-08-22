import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1B3A63",
        gold: "#D99A31",
        cream: "#FAF8F2"
      }
    }
  },
  plugins: []
};

export default config;
