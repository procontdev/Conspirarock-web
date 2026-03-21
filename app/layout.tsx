import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ConspiraRock",
  description:
    "Una señal abierta entre música, misterio y cultura alternativa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}