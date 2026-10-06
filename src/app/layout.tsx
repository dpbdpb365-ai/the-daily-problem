import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'The Daily Problem',
  description: 'Un nuevo reto de lógica y teoría de juegos cada día.',
  metadataBase: new URL('https://thedailyproblem.com'),
  openGraph: {
    title: 'The Daily Problem',
    description: 'Un nuevo reto de lógica y teoría de juegos cada día. ¿Podrás mantener tu racha?',
    url: 'https://thedailyproblem.com',
    siteName: 'The Daily Problem',
    locale: 'es_MX',
    type: 'website',
    // Ya no ponemos "images:" aquí, Next.js lo inyecta solo
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Daily Problem',
    description: 'Un nuevo reto de lógica y teoría de juegos cada día.',
    // Ya no ponemos "images:" aquí tampoco
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${inter.className} antialiased bg-white text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
