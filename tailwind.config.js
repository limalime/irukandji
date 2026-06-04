/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        primary: ["var(--font-primary)", "sans-serif"],
        climateCrisis: ["var(--font-climate)", "sans-serif"],
      },
      colors: {
        primary: "#F7374F",
      },
      fontSize: {
        xs: ["0.8125rem", { lineHeight: "1.5384" }],
        sm: ["0.875rem", { lineHeight: "1.5715" }],
        base: [
          "0.9375rem",
          { lineHeight: "1.5333", letterSpacing: "-0.0125em" },
        ],
        lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.0125em" }],
        xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.0125em" }],
        "2xl": ["1.5rem", { lineHeight: "1.415", letterSpacing: "-0.0268em" }],
        "3xl": [
          "1.75rem",
          { lineHeight: "1.3571", letterSpacing: "-0.0268em" },
        ],
        "4xl": ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.0268em" }],
        "5xl": ["3.5rem", { lineHeight: "1", letterSpacing: "-0.0268em" }],
        "6xl": ["4rem", { lineHeight: "1", letterSpacing: "-0.0268em" }],
        "7xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.0268em" }],
      },
      animation: {
        shine: "shine 5s ease-in-out 500ms infinite",
        wiggle: "wiggle 2s ease-out infinite",
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        shine: {
          "0%": { top: "0", transform: "scaleY(5)", opacity: "0" },
          "10%": { opacity: ".8" },
          "20%": { top: "100%", transform: "scaleY(10)", opacity: "0" },
          "100%": { top: "100%", transform: "scaleY(1)", opacity: "0" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        gradient: {
          to: { "background-position": "200% center" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};