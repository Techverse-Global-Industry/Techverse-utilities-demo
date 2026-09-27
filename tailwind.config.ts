import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "#FF7700",
          400: "#FF963E",
          300: "#FFB57C",
          700: "#A05937",
          800: "#804E49",
          950: "#32201F",
          paper: "#FFF8F3",
          mist: "#F5EEE9"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(255,119,0,.18)"
      }
    }
  },
  plugins: []
} satisfies Config;
