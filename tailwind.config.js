module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "slide-left":
          "slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)    both",
      },
      keyframes: {
        "slide-left": {
          "0%": {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-100px)",
          },
        },
      },
    },
  },
  plugins: [],
};
