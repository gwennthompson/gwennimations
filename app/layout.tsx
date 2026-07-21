import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">      
        <Navbar />
        <main className="flex-1 px-10 py-12">
          {children}
        </main>

        <footer className="border-t border-[#4F5148] py-8 text-center">
          <p className="font-cormorant italic text-lg text-[#C8BCA8]">Take a breath, sip some tea, and stay a while</p>
        </footer>       
      </body>
    </html>
  );
}
