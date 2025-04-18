import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppWalletProvider from "@/components/AppWalletProvider";
import { SparklesCore } from "@/components/sparkles";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[100vw]`}
      >
        <AppWalletProvider>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {/* Ambient background with moving particles */}
          <div className="h-full w-full absolute inset-0 z-0">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>

          <div className="relative z-10">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
        </AppWalletProvider>
      </body>
    </html>
  );
}
