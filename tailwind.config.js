/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#151515",
          secondary: "#202020",
          card: "#272727",
          elevated: "#2f2f2f",
        },
        ink: {
          primary: "#F5F0E8",
          secondary: "#A8A29E",
          muted: "#6B6560",
          accent: "#C6A77D",
          "accent-hover": "#D4B88E",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.08)",
          accent: "rgba(198,167,125,0.3)",
          subtle: "rgba(255,255,255,0.05)",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "reading-sm": ["1rem", { lineHeight: "1.9", letterSpacing: "0.01em" }],
        "reading-base": ["1.125rem", { lineHeight: "1.9", letterSpacing: "0.01em" }],
        "reading-lg": ["1.25rem", { lineHeight: "1.85", letterSpacing: "0.005em" }],
      },
      maxWidth: {
        reading: "680px",
        content: "1200px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-up": "fadeUp 0.6s ease-out",
        "shimmer": "shimmer 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
    },
  },
  plugins: [],
}
