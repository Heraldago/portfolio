import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
        surface: {
          DEFAULT: "var(--surface)",
          hover: "var(--surface-hover)",
        },
        border: "var(--border)",
        lime: {
          DEFAULT: "var(--lime)",
          fg: "var(--lime-fg)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          fg: "var(--muted-fg)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          amber: "#C27803",
          blue: "#4A90E2",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "Syne", "sans-serif"],
        sans: ["var(--font-plus-jakarta)", "Plus Jakarta Sans", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glass: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
        lime: "0 0 25px rgba(212, 255, 0, 0.25)",
        "lime-lg": "0 0 40px rgba(212, 255, 0, 0.4)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        ambient: "ambient 12s ease-in-out infinite alternate",
      },
      keyframes: {
        ambient: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(20px, -20px) scale(1.1)" },
          "100%": { transform: "translate(-10px, 10px) scale(0.95)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
