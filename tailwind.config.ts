import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2563EB",
          blue2: "#3B82F6",
          red: "#DC2626",
          red2: "#EF4444",
        },
        obsidian: "#090D16",
        ink: "#0F172A",
      },
      fontFamily: {
        sans: ["Inter", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 45px -12px rgba(37, 99, 235, 0.55)",
        glowRed: "0 0 45px -12px rgba(220, 38, 38, 0.45)",
        glass: "0 8px 32px -12px rgba(15, 23, 42, 0.18)",
        float: "0 20px 50px -20px rgba(37, 99, 235, 0.35)",
      },
      backgroundImage: {
        "grad-brand": "linear-gradient(135deg, #2563EB 0%, #3B82F6 45%, #EF4444 100%)",
        "grad-brand-rev": "linear-gradient(135deg, #EF4444 0%, #DC2626 45%, #2563EB 100%)",
        "grad-soft": "linear-gradient(135deg, rgba(37,99,235,0.14) 0%, rgba(59,130,246,0.08) 45%, rgba(239,68,68,0.14) 100%)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(59, 130, 246, 0.45)" },
          "50%": { boxShadow: "0 0 0 12px rgba(59, 130, 246, 0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(24px, -30px) scale(1.08)" },
          "66%": { transform: "translate(-18px, 18px) scale(0.95)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2.4s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "gradient-x": "gradient-x 6s ease infinite",
        "fade-up": "fade-up 0.6s ease-out both",
        blob: "blob 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
