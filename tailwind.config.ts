import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#0b0d0f",
        graphite: "#14181d",
        steel: "#8b929a",
        fog: "#f3f4f6",
        accent: "#8b1b1b"
      },
      boxShadow: {
        soft: "0 20px 60px -40px rgba(0,0,0,0.7)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
} satisfies Config;
