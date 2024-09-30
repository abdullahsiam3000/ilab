import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      width: {
        wrapper: "1460px",
      },
      maxWidth: {
        wrapper: "1460px",
      },
      boxShadow: {
        custom: "0px 12px 0px 0px rgba(0, 0, 0, 0.25)",
        "custom-hover": "0px 0px 12px 0px rgba(0, 0, 0, 0.25)", // Optional for hover
      },
    },
  },
  plugins: [],
};
export default config;
