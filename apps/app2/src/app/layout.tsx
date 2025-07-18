import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aplicativo 2 - Monorepo com Workspaces",
  description: "Demonstração de reutilização de componentes com Monorepo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">

        {children}
      </body>
    </html>
  );
}
