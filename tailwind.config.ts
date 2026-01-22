import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)", "Arial", "Helvetica", "sans-serif"],
        condensed: ["var(--font-roboto-condensed)", "Helvetica", "Arial", "sans-serif"],
        times: ["Times New Roman", "Times", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
