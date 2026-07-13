import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Link from 'next/link'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Gwennimations",
  description: "A world built for ponderings, creation, and soulful respite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="text-[rgb(60,80,104)]">
          <Link href="/">Home</Link> |
          <Link href="/writing/">Writing</Link> |
          <Link href="/projects/">Projects</Link> |
          <Link href="/about/">About</Link>
        </nav>

        <main>
          {children}
        </main>

        <footer>
          <p>Take a breath, sip some tea, and stay a while</p>
        </footer>       
      </body>
    </html>
  );
}
