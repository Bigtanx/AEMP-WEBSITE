/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./public/**/*.js"],
  theme: {
    extend: {
      colors: {
        brightGreen: "#00A859", // 🌿 Brand Green
        brightOrange: "#FF6A00", // 🟧 Call-to-Action Orange
        lightGreenTint: "#e6f4ec", // 🍃 Background Accent
      },
    },
  },
  plugins: [],
};
