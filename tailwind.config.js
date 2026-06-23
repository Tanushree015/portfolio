/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0F172A",
        card: "#1E293B",
        primary: "#8B5CF6",
        accent: "#06B6D4",
        ink: "#F8FAFC",
      },
      fontFamily: {
        display: ["Sora", "ui-sans-serif", "system-ui"],
        body: ["Inter", "ui-sans-serif", "system-ui"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(15,23,42,0) 0%, #0F172A 100%)",
        "hero-glow":
          "radial-gradient(circle at 20% 20%, rgba(139,92,246,0.25), transparent 40%), radial-gradient(circle at 80% 30%, rgba(6,182,212,0.2), transparent 40%)",
        "brand-gradient": "linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(139,92,246,0.25)",
        "glow-cyan": "0 0 40px rgba(6,182,212,0.25)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
    },
  },
  plugins: [],
};
