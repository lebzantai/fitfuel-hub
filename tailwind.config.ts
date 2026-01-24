import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#07090b",
        graphite: "#0f1318",
        steel: "#8a9199",
        fog: "#f5f6f8",
        accent: "#d0641f"
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
