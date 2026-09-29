import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Cursor from "./components/Cursor";
import CookieNotice from "./components/CookieNotice";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

// preload: false — font monospace nie jest używany w critical path (above the fold),
// więc nie potrzebuje preloadu; eliminuje ostrzeżenie "preloaded but not used".
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.soloagency.pl"),
  title: "SOLO — Creative Agency",
  description: "A boutique creative agency building bold digital experiences for ambitious brands.",
};

const schemaLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.soloagency.pl/#organization",
  name: "Solo Agency",
  url: "https://www.soloagency.pl",
  logo: "https://www.soloagency.pl/solo-logo.png",
  description:
    "Agencja SEO i marketingu z Poznania. Butikowa agencja kreatywna, która tworzy odważne doświadczenia cyfrowe dla ambitnych marek.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Poznań",
    addressRegion: "Wielkopolska",
    addressCountry: "PL",
  },
  telephone: ["+48512378161", "+48737132078"],
  email: "hello@soloagency.pl",
  areaServed: "PL",
  sameAs: [],
  priceRange: "$$",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Cursor />
        <CookieNotice />
        {children}
      </body>
    </html>
  );
}
