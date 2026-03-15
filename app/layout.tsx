import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Madagascar Trip",
  description: "Découvrez Madagascar avec nos circuits sur mesure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
