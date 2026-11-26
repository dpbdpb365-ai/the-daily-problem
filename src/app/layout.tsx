import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Daily Problem",
  description: "A new logic and math puzzle every day. No formulas. Just pure logic.",
  metadataBase: new URL("https://thedailyproblem.com"),
  openGraph: {
    title: "The Daily Problem",
    description: "A new logic and math puzzle every day. Can you keep your streak alive?",
    url: "https://thedailyproblem.com",
    siteName: "The Daily Problem",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Daily Problem",
    description: "A new logic and math puzzle every day. No formulas. Just pure logic.",
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
