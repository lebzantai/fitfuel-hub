import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forge: {
          900: "#0b0b0c",
          850: "#101113",
          800: "#14161a",
          700: "#1d2026",
          600: "#2a2f37",
          500: "#3b424d",
          300: "#9aa4b2",
          200: "#c5ccd6",
          100: "#e7ebf0"
        },
        ember: {
          500: "#f97316",
          400: "#fb923c",
          300: "#fdba74"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "forge-glow": "radial-gradient(circle at top, rgba(249,115,22,0.15), transparent 55%)",
        "grid-fade": "linear-gradient(to bottom, rgba(255,255,255,0.08), transparent)"
      },
      boxShadow: {
        glow: "0 0 40px rgba(249, 115, 22, 0.15)"
      }
    }
  },
  plugins: []
};

export default config;
