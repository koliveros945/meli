import type { Metadata } from "next";
import { Inter } from "next/font/google"; // O usa la fuente por defecto
import "./globals.css";
import Header from "./components/Header";

// Mercado Libre usa una fuente similar a Proxima Nova.
// Inter es una buena alternativa gratuita de Google Fonts.
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mercado Libre Colombia Clone",
  description: "Prototipo de estudio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* Agregamos bg-gray-100 para el fondo general de la web */}
      <body className={`${inter.className} bg-gray-100 min-h-screen`}>
        <Header />
        {/* El contenido principal de la página */}
        <main className="max-w-[1200px] mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}