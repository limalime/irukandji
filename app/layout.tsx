import "./css/global.css";

import { Inter, Climate_Crisis } from "next/font/google";
import localFont from "next/font/local";
import { Navbar } from "@/components/Navbar";

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

export const metadata = {
  title: "Irukandji",
  description: "Community Driven NFT Collection on HyperEVM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${climate.variable} ${primary.variable} bg-rose-700 text-base pb-0 text-gray-200 antialiased overflow-hideen`}
      >
        
        <div className="flex flex-col h-screen overflow-hidden">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}