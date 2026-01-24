import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#f5f5f5",
        graphite: "#ffffff",
        steel: "#6b6f76",
        fog: "#0b0b0b",
        accent: "#111111"
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
