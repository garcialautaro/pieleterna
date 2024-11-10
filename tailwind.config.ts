import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blanco_hueso: "#F8F8F8",
        beige_claro: "#E4D0B6",
        negro_ebano: "#111111",
        beige_oscuro: "#A69279",
      },
    },
  },
  plugins: [],
} satisfies Config;
