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
        orange: "var(--orange)",
        darkbrown: "var(--darkbrown)",
        lightbrown: "var(--lightbrown)",
        grayback: "var(--grayback)"
      },
    },
  },
  plugins: [],
};
export default config;
