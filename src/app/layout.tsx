import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Dancing_Script } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";
import "./fonts.css";


const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  display: "block", // Changé de "swap" à "block" pour éviter le flash de texte non stylisé
  weight: ["400", "500", "600", "700"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Hanane's Signature | Algerian & French Pastries",
  description: "Discover the delicious creations of Hanane's Signature: traditional Algerian pastries, French pastries, and custom cakes. Order your handmade pastries today!",
  keywords: ["Algerian pastries", "French pastries", "custom cakes", "birthday cakes", "baklawa", "makrout", "mille-feuille", "Hanane's Signature"],
  authors: [{ name: "Hanane's Signature" }],
  openGraph: {
    title: "Hanane's Signature | Algerian & French Pastries",
    description: "Discover the delicious creations of Hanane's Signature: traditional Algerian pastries, French pastries, and custom cakes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${montserrat.variable} ${dancingScript.variable} font-sans antialiased`}
      >
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
