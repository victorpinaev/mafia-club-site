import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mafia Kharkiv",
  description: "Клуб спортивной мафии",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased bg-zinc-950 text-zinc-100">{children}</body>
    </html>
  );
}