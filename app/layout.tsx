import "./css/global.css";

import { Inter, Climate_Crisis } from "next/font/google";
import localFont from "next/font/local";
import { Navbar } from "@/components/Navbar";
import type { Metadata, Viewport } from "next";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const siteName = "Irukandji";
const siteUrl = "https://irukandji.wtf";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const climate = Climate_Crisis({
  subsets: ["latin"],
  variable: "--font-climate",
  display: "swap",
});

const primary = localFont({
  src: [
    {
      path: "../public/fonts/climate.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-primary",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Irukandji NFT",
    template: "%s | Irukandji NFT",
  },

  description:
    "Irukandji is a community-driven NFT collection built on Ethereum, empowering holders through apparel, staking, and ecosystem rewards.",

  keywords: [
    "Irukandji",
    "Irukandji NFT",
    "NFT Collection",
    "Ethereum",
    "Ethereum NFT",
    "Web3",
    "DAO",
    "NFT Community",
    "NFT Staking",
    "NFT Marketplace",
    "Digital Collectibles",
    "Crypto Art",
    "Blockchain",
    "RKDJ",
    "Opensea New NFT",
    "Trending NFT",
    "Irukandji Ethereum",
    "Irukandji Opensea",
    "Irukandji Mint",
    "Irukandji Website"
  ],

  authors: [
    {
      name: "Petir Studio",
    },
  ],

  creator: "Petir Studio",

  publisher: "Petir Studio",

  applicationName: "Irukandji NFT",

  category: "NFT",

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Irukandji NFT",
    description:
      "Community-driven NFT collection on Ethereum. Join the ecosystem, participate in governance, and unlock exclusive rewards.",

    url: siteUrl,

    siteName: "Irukandji",

    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Irukandji NFT Collection",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Irukandji NFT",

    description:
      "Community-driven NFT collection on Ethereum.",

    creator: "@irukandjinfts",

    images: ["/hero.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  verification: {
    google: "google4af714d948238027.html",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="hC9Q7dFDLFJYLQgFx_OxhMM4JnJEcBmzOIf9I8HjiLw" />
      </head>
      <body
        className={`${inter.variable} ${climate.variable} ${primary.variable} bg-rose-700 text-base pb-0 text-gray-200 antialiased overflow-x-hidden`}
      >
        
        <div className="flex flex-col h-screen">
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}