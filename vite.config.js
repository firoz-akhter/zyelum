import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});

module.exports = {
  extend: {
    animation: {
      marquee: "marquee 25s linear infinite",
      marquee2: "marquee2 25s linear infinite",
    },
    keyframes: {
      marquee: {
        "0%": { transform: "translateX(0%)" },
        "100%": { transform: "translateX(-100%)" },
      },
      marquee2: {
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(0%)" },
      },
    },
  },
};
