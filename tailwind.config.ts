import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores personalizados de Mercado Libre
        meli: {
          yellow: "#fff159",   // Amarillo oficial de ML
          dark: "#333333",     // Gris oscuro para texto
          blue: "#3483fa",     // Azul para links y hover
        },
      },
      fontSize: {
        // Tamaños de fuente personalizados de ML
        "xs-meli": "13px",
        "sm-meli": "14px",
      },
      boxShadow: {
        // Sombra personalizada para el buscador
        "meli-search": "0 1px 2px 0 rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
