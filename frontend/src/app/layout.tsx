import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CrisisBanner } from "@/components/layout/CrisisBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mental Health Check - Evaluación de salud mental",
  description: "Herramienta de autoevaluación para depresión y ansiedad. Encuentra recursos y ayuda profesional.",
  keywords: ["salud mental", "depresión", "ansiedad", "test psicológico", "ayuda psicológica"],
  authors: [{ name: "Mental Health Check" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Mental Health Check",
    description: "Evaluación de salud mental y recursos de ayuda",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mental Health Check",
    description: "Evaluación de salud mental y recursos de ayuda",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white`}>
        <CrisisBanner />
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}