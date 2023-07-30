import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import localFont from 'next/font/local'

const inter = Inter({ subsets: ["latin"] });

const myFont = localFont({
  src: './SCDream7.otf',
  display: 'swap',
})
export const metadata: Metadata = {
  title: "YOOBIN",
  description: "Yoobin Han's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={myFont.className}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
