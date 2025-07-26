
import { Metadata } from "next";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Portal de Viagens",
  description: "Uma aplicação para gerenciar os seus destinos de viagens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
