import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from 'next/image';
import Link from 'next/link';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata={
    title: "Joel's Notes",
    description: 'This site contains notes from my classes and self-learning for referencing. It is a collection of a tiny subset of all of human knowledge which I have been able to wrap my head around.'
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <header className="
                flex justify-center h-16
                border-b border-b-gray-300
                bg-gradient-to-b from-gray-50 to-gray-100
                dark:from-gray-900 dark:to-gray-800
            ">
                <div className="j_max-w w-full flex items-center justify-between">
                    <Link className="flex items-center gap-1 hover:bg-gray-500/25 px-3 py-2 rounded-xl unstyled" href='/'>
                        {/* <Image src='/logo.svg' width={40} height={40} alt="Logo" /> */}
                        <span className="font-bold text-xl">Joel&apos;s Notes</span>
                    </Link>
                </div>
            </header>

            <div className="leading-relaxed">
                {children}
            </div>
            
            <footer>

            </footer>
        </body>
    </html>;
}
