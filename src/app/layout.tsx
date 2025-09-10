import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
// import components
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import LenisProvider from "@/components/common/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dheepspark",
  description: "Dheepspark - Your Personalised Digital Coach",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
