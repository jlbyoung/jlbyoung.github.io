import type { Config } from "tailwindcss";

export default {
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
      transformOrigin: {
        "center-top": "50% 0",
      },
      keyframes: {
        spotlight_opacity: {
          "0%": { opacity: "0.4" },
          "100%": { opacity: "0.8" },
        },
        spotlight_scale: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.2)" },
        },
      },
      animation: {
        spotlight_opacity:
          "spotlight_opacity calc(var(--duration, 5s) * 1.2) linear infinite alternate",
        spotlight_scale:
          "spotlight_scale calc(var(--duration, 5s) * 1.7) infinite both",
      },
    },
  },
  plugins: [],
} satisfies Config;
