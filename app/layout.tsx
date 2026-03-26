import type { Metadata } from "next";
import "./globals.css";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ChatWidget from "@/components/chat/ChatWidget";

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
      <body>
        <Header />
        {children}
        <ChatWidget />
        <Footer />
      </body>
    </html>
  );
}