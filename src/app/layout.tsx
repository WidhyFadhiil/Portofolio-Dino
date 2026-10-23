import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  title: "Widhy Fadhiil Aldino — Backend Engineer",
  description:
    "Portfolio Widhy Fadhiil Aldino, backend & web developer: Go, Node.js, Laravel, microservices, dan Next.js.",
};

export const viewport: Viewport = { themeColor: "#10131a", colorScheme: "dark" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} ${jakarta.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
