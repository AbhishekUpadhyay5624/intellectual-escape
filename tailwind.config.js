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
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          card: "var(--bg-card)",
          elevated: "var(--bg-elevated)",
        },
        ink: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          accent: "var(--accent)",
          "accent-hover": "var(--accent-hover)",
        },
        border: {
          DEFAULT: "var(--border)",
          accent: "var(--accent)",
          subtle: "var(--border-subtle)",
        },
      },
      fontFamily: {
        serif: ["Outfit Variable", "sans-serif"],
        sans: ["DM Sans Variable", "sans-serif"],
      },
      fontSize: {
        "reading-sm": ["1rem", { lineHeight: "1.9", letterSpacing: "0.01em" }],
        "reading-base": [
          "1.125rem",
          { lineHeight: "1.9", letterSpacing: "0.01em" },
        ],
        "reading-lg": [
          "1.25rem",
          { lineHeight: "1.85", letterSpacing: "0.005em" },
        ],
      },
      maxWidth: {
        reading: "680px",
        content: "1200px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-up": "fadeUp 0.6s ease-out",
        shimmer: "shimmer 2s infinite",
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
};
