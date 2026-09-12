import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans'
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '600', '700'],
  variable: '--font-display'
});

export const metadata: Metadata = {
  title: "Tony-Dony | Future of Shopping",
  description: "Premium futuristic eCommerce experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-dark-bg text-white font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}