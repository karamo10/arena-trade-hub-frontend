import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "border-100": "var(--color-border-100)",
      },
    },
  },
  plugins: [],
};

export default config;
