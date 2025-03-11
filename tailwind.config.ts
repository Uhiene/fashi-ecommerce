import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gradientStart: "#FF5733",
        gradientMid: "#33FF57",
        gradientEnd: "#3357FF",
        gold:"#E7AA3C",
        darkGray:"#252525",
      },
    },
  },
  plugins: [],
} satisfies Config;
