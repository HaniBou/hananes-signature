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
  keywords: ["Algerian pastries", "French pastries", "custom cakes", "birthday cakes", "croissants", "eclairs", "trompe-l'œil", "mille-feuille", "Hanane's Signature"],
  authors: [{ name: "Hanane's Signature" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
  openGraph: {
    title: "Hanane's Signature | Algerian & French Pastries",
    description: "Discover the delicious creations of Hanane's Signature: traditional Algerian pastries, French pastries, and custom cakes.",
    type: "website",
    url: "https://www.hananessignature.com",
    siteName: "Hanane's Signature",
    images: [
      {
        url: "https://www.hananessignature.com/images/trompe-loeil-1.png",
        width: 1200,
        height: 630,
        alt: "Hanane's Signature - Trompe-l'œil Pastries",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.hananessignature.com";
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Hanane's Signature",
    "url": websiteUrl,
    "logo": `${websiteUrl}/images/logo-hananes-signature.png`,
    "description": "Traditional Algerian and French pastries, custom cakes",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "contact@hananessignature.com"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${montserrat.variable} ${dancingScript.variable} font-sans antialiased`}
      >
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
