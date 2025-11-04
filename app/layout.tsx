import type { Metadata } from "next";
import "./globals.css";
import CosmicBackground from "@/components/CosmicBackground";

export const metadata: Metadata = {
  title: "The Landscape of Consciousness",
  description: "An Interactive Taxonomy & Hypothesis Generator for Consciousness Theories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.Node;
}>) {
  return (
    <html lang="en">
      <body>
        <CosmicBackground />
        {children}
      </body>
    </html>
  );
}
