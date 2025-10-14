import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Dancing_Script } from "next/font/google";
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
  description: "Discover the delicious creations of Hanane's Signature: traditional Algerian pastries, French pastries, and custom birthday cakes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="preload"
          href={dancingScript.style.fontFamily.split(',')[0].replace(/"/g, '')}
          as="font"
          crossOrigin=""
          type="font/woff2"
        />
      </head>
      <body
        className={`${playfair.variable} ${montserrat.variable} ${dancingScript.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
