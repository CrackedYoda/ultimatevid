import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UltimateVid - Download Videos from YouTube, Instagram, TikTok & More",
  description: "Download high-quality videos from YouTube, Instagram, TikTok, Twitter, and Facebook. Fast, free, and easy video downloading tool.",
  keywords: "video downloader, YouTube downloader, Instagram downloader, TikTok downloader, free video download, video converter, online video downloader",
  authors: [{ name: "UltimateVid Team" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ultimatevid.com",
    siteName: "UltimateVid",
    title: "UltimateVid - Download Videos from YouTube, Instagram, TikTok & More",
    description: "Download high-quality videos from YouTube, Instagram, TikTok, Twitter, and Facebook. Fast, free, and easy video downloading tool.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "UltimateVid Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UltimateVid - Download Videos from YouTube, Instagram, TikTok & More",
    description: "Download high-quality videos from your favorite platforms instantly. Fast, free, and easy.",
    images: ["/logo.png"],
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  charset: "utf-8",
  alternates: {
    canonical: "https://ultimatevid.com",
  },
};

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UltimateVid",
    description: "Download high-quality videos from YouTube, Instagram, TikTok, Twitter, and Facebook.",
    url: "https://ultimatevid.com",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free video download service"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1000+"
    }
  };

  return (
    <html lang="en">
      <head>
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
        
        {/* Additional SEO Meta Tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Sitemap and RSS */}
        <link rel="sitemap" href="/sitemap.xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <div className="flex-grow pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
