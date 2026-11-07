import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#030a1a",
          900: "#05112b",
          DEFAULT: "#07183d",
          surface: "#394664",
        },
        gold: {
          title: "#5c4f39",
          muted: "#9c8561",
          DEFAULT: "#cba05d",
          hover: "#b68c4a",
        },
        cream: {
          50: "#fefefe",
          100: "#fcf8f3",
          200: "#f4eada",
          gray: "#e6e8ec",
        },
        ink: {
          charcoal: "#161616",
          dark: "#363636",
          muted: "#808080",
          light: "#aaaaaa",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "Times New Roman", "serif"],
        sans: ["'Inter'", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
        poppins: ["'Poppins'", "sans-serif"],
      },
      spacing: {
        "8": "8px",
        "16": "16px",
        "24": "24px",
        "32": "32px",
        "40": "40px",
        "48": "48px",
        "64": "64px",
        "80": "80px",
        "96": "96px",
        "100": "100px",
        "128": "128px",
      },
      maxWidth: {
        site: "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
